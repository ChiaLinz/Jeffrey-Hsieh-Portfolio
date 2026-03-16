import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeuralNet3D() {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0, on: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const W = el.clientWidth || 960;
    const H = el.clientHeight || 600;
    const isMobile = W < 768;
    const isWide = W >= 1920;
    const isUltra = W >= 2560;

    const scene = new THREE.Scene();
    // 大螢幕用較廣 FOV 讓場景填滿更多空間
    const fov = isMobile ? 65 : isWide ? 50 : 55;
    const cam = new THREE.PerspectiveCamera(fov, W / H, 0.1, 100);
    cam.position.z = isUltra ? 5.0 : isWide ? 5.2 : 5.5;
    const ren = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    ren.setSize(W, H);
    ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    ren.setClearColor(0x000000, 0);
    el.appendChild(ren.domElement);

    const lS = new THREE.Group(), lM = new THREE.Group(), lF = new THREE.Group();
    scene.add(lS, lM, lF);
    // 大螢幕場景推更右，讓左邊文字區更清晰
    const offX = isMobile ? 0 : isUltra ? 1.8 : isWide ? 1.4 : W >= 1440 ? 1.1 : 0.8;
    lS.position.x = lM.position.x = lF.position.x = offX;

    const cA = new THREE.Color(0xc9a55a), cB = new THREE.Color(0xfff0c0);
    const cDA = new THREE.Color(0x484860), cDB = new THREE.Color(0x5a5040), cDC = new THREE.Color(0x405060);
    const cED = new THREE.Color(0x2a2a3a), cEL = new THREE.Color(0xe8e8f0);

    // Central core
    const coreG = new THREE.IcosahedronGeometry(0.35, 2);
    const coreM = new THREE.MeshBasicMaterial({ color: cA.clone(), wireframe: true, transparent: true, opacity: 0.35 });
    const core = new THREE.Mesh(coreG, coreM);
    lM.add(core);

    // Neural network layers — 大螢幕加密節點
    const lays = [
      { c: 6, z: -1.8, r: 1.2 }, { c: 10, z: -0.6, r: 1.6 },
      { c: 14, z: 0.5, r: 1.9 }, { c: 10, z: 1.5, r: 1.5 },
      { c: 5, z: 2.4, r: 0.9 },
    ];
    if (isMobile) lays.forEach(l => (l.c = Math.ceil(l.c / 2)));
    if (isWide) lays.forEach(l => { l.c = Math.ceil(l.c * 1.4); l.r *= 1.15; });

    const szs = [0.022, 0.028, 0.034, 0.04];
    const dPal = [cDA, cDB, cDC];

    interface ND { core: THREE.Mesh; halo: THREE.Mesh; cm: THREE.MeshBasicMaterial; hm: THREE.MeshBasicMaterial; ox: number; oy: number; oz: number; ph: number; sp: number; am: number; bc: THREE.Color; }
    const nodes: ND[] = [];

    lays.forEach(l => {
      for (let i = 0; i < l.c; i++) {
        const a = (i / l.c) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
        const rd = l.r * (0.6 + Math.random() * 0.4);
        const x = Math.cos(a) * rd, y = Math.sin(a) * rd, z = l.z + (Math.random() - 0.5) * 0.6;
        const sz = szs[Math.floor(Math.random() * szs.length)];
        const bc = dPal[Math.floor(Math.random() * dPal.length)].clone();
        const cm = new THREE.MeshBasicMaterial({ color: bc.clone(), transparent: true, opacity: 0.8 });
        const c1 = new THREE.Mesh(new THREE.SphereGeometry(sz, 10, 10), cm);
        c1.position.set(x, y, z);
        const hm = new THREE.MeshBasicMaterial({ color: bc.clone(), transparent: true, opacity: 0.06, blending: THREE.AdditiveBlending, depthWrite: false });
        const h1 = new THREE.Mesh(new THREE.SphereGeometry(sz * 1.8, 8, 8), hm);
        h1.position.set(x, y, z);
        lM.add(c1, h1);
        nodes.push({ core: c1, halo: h1, cm, hm, ox: x, oy: y, oz: z, ph: Math.random() * 6.28, sp: 0.3 + Math.random() * 0.4, am: 0.018 + Math.random() * 0.03, bc: bc.clone() });
      }
    });

    // Edges
    const edges: THREE.Line[] = [];
    for (let i = 0; i < nodes.length; i++)
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].core.position.distanceTo(nodes[j].core.position) < 1.8) {
          const g = new THREE.BufferGeometry();
          g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6), 3));
          const mt = new THREE.LineBasicMaterial({ color: cED.clone(), transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false });
          const ln = new THREE.Line(g, mt);
          ln.userData = { i, j };
          lS.add(ln);
          edges.push(ln);
        }
      }

    // Orbital rings
    const rM1 = new THREE.MeshBasicMaterial({ color: 0x2a2a38, transparent: true, opacity: 0.15 });
    const ringScale = isWide ? 1.25 : 1;
    const r1 = new THREE.Mesh(new THREE.TorusGeometry(2.6 * ringScale, 0.006, 8, 120), rM1);
    r1.rotation.x = Math.PI / 2.5;
    lF.add(r1);
    const rM2 = new THREE.MeshBasicMaterial({ color: 0x252535, transparent: true, opacity: 0.08 });
    const r2 = new THREE.Mesh(new THREE.TorusGeometry(2.2 * ringScale, 0.004, 6, 100), rM2);
    r2.rotation.x = Math.PI / 3.5; r2.rotation.y = 0.8;
    lF.add(r2);

    // Dust particles — 大螢幕增加粒子
    const DC = isMobile ? 35 : isWide ? 100 : 70;
    const dArr = new Float32Array(DC * 3);
    const dMeta: { rd: number; th: number; ph: number; s: number }[] = [];
    for (let i = 0; i < DC; i++) {
      const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1), rd = 1 + Math.random() * (isWide ? 2.8 : 2.2);
      dArr[i * 3] = rd * Math.sin(ph) * Math.cos(th);
      dArr[i * 3 + 1] = rd * Math.sin(ph) * Math.sin(th);
      dArr[i * 3 + 2] = rd * Math.cos(ph);
      dMeta.push({ rd, th, ph, s: 0.015 + Math.random() * 0.035 });
    }
    const dG = new THREE.BufferGeometry();
    dG.setAttribute("position", new THREE.BufferAttribute(dArr, 3));
    const dM = new THREE.PointsMaterial({ color: 0x666678, size: 0.012, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false });
    lS.add(new THREE.Points(dG, dM));

    // Mouse
    const onMv = (e: MouseEvent) => {
      const rc = el.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rc.left) / rc.width) * 2 - 1;
      mouse.current.y = -((e.clientY - rc.top) / rc.height) * 2 + 1;
      mouse.current.on = true;
    };
    const onLv = () => { mouse.current.on = false; };
    el.addEventListener("mousemove", onMv);
    el.addEventListener("mouseleave", onLv);

    // Animation loop
    const clk = new THREE.Clock();
    let raf = 0, smx = 0, smy = 0, cGl = 0;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const t = clk.getElapsedTime(), mx = mouse.current.x, my = mouse.current.y, on = mouse.current.on;
      smx += (mx - smx) * 0.04; smy += (my - smy) * 0.04;
      const b1 = Math.sin(t * 0.6) * 0.5 + 0.5, b3 = Math.sin(t * 2 + 1) * 0.5 + 0.5;

      // Organic rotation
      const wY = Math.sin(t * 0.13) * 0.4 + Math.sin(t * 0.21) * 0.2 + Math.cos(t * 0.07) * 0.15;
      const wX = Math.sin(t * 0.09) * 0.15 + Math.cos(t * 0.17) * 0.1;
      const miY = on ? smx * 0.3 : 0, miX = on ? smy * 0.2 : 0;
      lM.rotation.y += (wY + miY - lM.rotation.y) * 0.012;
      lM.rotation.x += (wX + miX + 0.15 - lM.rotation.x) * 0.012;
      lS.rotation.y += (wY * 0.85 + miY * 0.7 - lS.rotation.y) * 0.009;
      lS.rotation.x += (wX * 0.85 + miX * 0.7 + 0.12 - lS.rotation.x) * 0.009;
      lF.rotation.y += (wY * 1.15 + miY * 1.2 - lF.rotation.y) * 0.015;
      lF.rotation.x += (wX * 1.1 + miX * 1.1 + 0.18 - lF.rotation.x) * 0.015;

      // Core
      const cSP = core.position.clone().applyMatrix4(lM.matrixWorld).project(cam);
      const cDist = on ? Math.sqrt((cSP.x - mx) ** 2 + (cSP.y - my) ** 2) : 99;
      cGl += (Math.max(0, on ? 1 - cDist / 1.8 : 0) - cGl) * 0.04;
      core.scale.setScalar((1 + b1 * 0.07 + b3 * 0.02) * (1 + cGl * 0.6));
      core.rotation.x = t * 0.15 + Math.sin(t * 0.3) * 0.1;
      core.rotation.y = t * 0.11 + Math.cos(t * 0.25) * 0.08;
      coreM.opacity = 0.22 + b1 * 0.18 + b3 * 0.05 + cGl * 0.4;
      coreM.color.copy(cA).lerp(cB, b3 * 0.12 + cGl * 0.55);
      r1.rotation.z = t * 0.04 + Math.sin(t * 0.15) * 0.1;
      rM1.opacity = 0.08 + b1 * 0.07 + cGl * 0.1;
      r2.rotation.z = -t * 0.03 + Math.cos(t * 0.12) * 0.08;

      // Dust
      const dp = dG.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < DC; i++) {
        const v = dMeta[i], a = v.th + t * v.s;
        dp.array[i * 3] = v.rd * Math.sin(v.ph) * Math.cos(a);
        dp.array[i * 3 + 1] = v.rd * Math.sin(v.ph) * Math.sin(a);
        dp.array[i * 3 + 2] = v.rd * Math.cos(v.ph);
      }
      dp.needsUpdate = true;
      dM.opacity = 0.12 + b1 * 0.1;

      // Nodes
      const mD = Math.sqrt(mx * mx + my * my), mF = on ? Math.min(mD * 1.3, 1) : 0;
      for (const nd of nodes) {
        const bO = b1 * 0.006;
        nd.core.position.x = nd.ox + Math.sin(t * nd.sp + nd.ph) * (nd.am + bO);
        nd.core.position.y = nd.oy + Math.cos(t * nd.sp * 0.7 + nd.ph) * (nd.am + bO);
        nd.core.position.z = nd.oz + Math.sin(t * nd.sp * 0.5 + nd.ph * 2) * nd.am * 0.5;
        nd.halo.position.copy(nd.core.position);
        const tw = Math.sin(t * (1.2 + nd.sp * 0.5) + nd.ph * 3) * 0.5 + 0.5;
        if (on) {
          const sp = nd.core.position.clone().project(cam);
          const d2 = Math.sqrt((sp.x - mx) ** 2 + (sp.y - my) ** 2);
          const pr = Math.max(0, 1 - d2 / 0.7) * mF, sf = 1 - cGl * 0.25;
          nd.cm.color.lerp(nd.bc.clone().lerp(cA, pr * 0.85), 0.1);
          nd.cm.opacity += ((0.7 + pr * 0.3 + tw * 0.05) * sf - nd.cm.opacity) * 0.1;
          nd.hm.color.lerp(cA.clone().lerp(cB, pr * 0.5), 0.1);
          nd.hm.opacity += (0.03 + pr * 0.2 + tw * 0.01 - nd.hm.opacity) * 0.1;
          const ts = (1 + pr * 0.1) * sf;
          nd.core.scale.setScalar(nd.core.scale.x + (ts - nd.core.scale.x) * 0.1);
          nd.halo.scale.setScalar(nd.halo.scale.x + (ts - nd.halo.scale.x) * 0.08);
        } else {
          nd.cm.color.lerp(nd.bc, 0.03);
          nd.cm.opacity += (0.6 + tw * 0.15 + b1 * 0.08 - nd.cm.opacity) * 0.04;
          nd.hm.color.lerp(nd.bc, 0.03);
          nd.hm.opacity += (0.02 + tw * 0.02 + b1 * 0.015 - nd.hm.opacity) * 0.04;
          const is2 = 1 + tw * 0.03;
          nd.core.scale.setScalar(nd.core.scale.x + (is2 - nd.core.scale.x) * 0.04);
          nd.halo.scale.setScalar(nd.halo.scale.x + (is2 - nd.halo.scale.x) * 0.04);
        }
      }

      // Edges
      for (const e of edges) {
        const { i, j } = e.userData, na = nodes[i], nb = nodes[j];
        const a = (e.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
        a[0] = na.core.position.x; a[1] = na.core.position.y; a[2] = na.core.position.z;
        a[3] = nb.core.position.x; a[4] = nb.core.position.y; a[5] = nb.core.position.z;
        (e.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
        const mat = e.material as THREE.LineBasicMaterial;
        if (on) {
          const mx2 = (na.core.position.x + nb.core.position.x) / 2;
          const my2 = (na.core.position.y + nb.core.position.y) / 2;
          const mz2 = (na.core.position.z + nb.core.position.z) / 2;
          const sp = new THREE.Vector3(mx2, my2, mz2).project(cam);
          const d2 = Math.sqrt((sp.x - mx) ** 2 + (sp.y - my) ** 2);
          const pr = Math.max(0, 1 - d2 / 0.6) * mF;
          mat.opacity += (0.04 + pr * 0.6 + b1 * 0.015 - mat.opacity) * 0.1;
          mat.color.lerp(cED.clone().lerp(cEL, pr * 0.95), 0.1);
        } else {
          mat.opacity += (0.04 + b1 * 0.02 - mat.opacity) * 0.025;
          mat.color.lerp(cED, 0.025);
        }
      }
      ren.render(scene, cam);
    };
    loop();

    const onR = () => {
      const nw = el.clientWidth || 960, nh = el.clientHeight || 600;
      cam.aspect = nw / nh; cam.updateProjectionMatrix(); ren.setSize(nw, nh);
    };
    window.addEventListener("resize", onR);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMv);
      el.removeEventListener("mouseleave", onLv);
      window.removeEventListener("resize", onR);
      ren.dispose();
      if (el.contains(ren.domElement)) el.removeChild(ren.domElement);
    };
  }, []);

  return <div ref={ref} className="hero-canvas" />;
}