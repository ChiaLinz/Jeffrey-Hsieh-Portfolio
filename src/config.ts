import ragImg from "./assets/rag.png";
import analysisImg from "./assets/api_analysis.png";
import pipelineImg from "./assets/app_event.png";
import aiVideoImg from "./assets/aiVideo.png";
import gameAgentImg from "./assets/Atari Transfer Learning Project.jpg";
import amazonImg from "./assets/Amazon Food Reviews Sentiment Analysis Project.jpg";
import falcon9Img from "./assets/Space X Falcon 9 Landing Prediction.jpg";
import chatbotImg from "./assets/chatbot.png";

export const SITE = {
  name: "Jeffrey Hsieh",
  title: "AI Engineer",
  tagline:
    "I build production-grade AI systems that solve real business problems — RAG pipelines, enterprise analytics, event-driven data platforms, and AI media generation.",
  email: "jeffrey.hsieh14@gmail.com",
  github: "https://github.com/ChiaLinz",
  linkedin: "https://www.linkedin.com/in/jeffrey-hsieh-chialin/",

  // ✅ Stats optimized for senior-level impact & credibility
  stats: [
    { value: "4", label: "End-to-End Systems Delivered", note: "From prototype → production → monitoring → handoff" },
    { value: "60%", label: "Manual Workload Reduced", note: "Automated FAQ & knowledge pipelines" },
    { value: "25%", label: "False Positives Cut", note: "Forecasting models for operational decisions" },
    { value: "3", label: "Domains Impacted", note: "Knowledge automation · Enterprise analytics · Media AI" },
  ],

  // ✅ About: broad → specific → measurable
  about: [
    "I turn complex business problems into production AI systems, from knowledge automation to predictive analytics and media pipelines.",
    "I design and implement end-to-end systems — data ingestion, topic modeling, knowledge retrieval, model evaluation, deployment, and monitoring. Each system is built to scale and be maintainable for future engineers.",
    "My work emphasizes measurable impact: reducing manual curation, cutting false positives, and bridging technical solutions with business needs.",
  ],

  // ✅ Senior-level skills organized into 3 pillars
  skills: [
    { category: "AI & Machine Learning", items: "LLM Systems · RAG · NLP · Predictive Modeling · Knowledge Graphs" },
    { category: "Production Engineering", items: "Python · Cloud (AWS/GCP) · Docker · CI/CD · Observability" },
    { category: "Data & Analytics", items: "SQL · Vector Databases (Milvus) · BI Dashboards · A/B Testing · Metrics Automation" },
  ],

  // ✅ Experiences: focus on ownership, scope, and measurable results
  experiences: [
    {
      year: "2025",
      role: "AI Backend Engineer",
      company: "Pacston Technologies",
      location: "Taipei, TW",
      bullets: [
        "Designed and deployed a RAG pipeline — automated FAQ generation reduced manual curation by ~60%",
        "Built production observability: token logging, stage-level tracing, CloudWatch alerts for SLA compliance",
        "Owned full 0→1→100 lifecycle: prototyping, deployment, scaling, and team handoff",
      ],
    },
    {
      year: "2023 – 2025",
      role: "AI Engineer",
      company: "Rain Spring Technology",
      location: "Taipei, TW",
      bullets: [
        "Shipped 3+ domain-specific LLM applications — fine-tuning, multimodal integration, and enterprise knowledge retrieval",
        "Established internal MLOps practices: model versioning, A/B evaluation, deployment automation",
        "Bridged product and engineering — translated stakeholder requirements into technical specifications",
      ],
    },
    {
      year: "2022",
      role: "Data Analyst",
      company: "Bank of America",
      location: "Newark, NJ",
      bullets: [
        "Built ML models forecasting ATM cash-demand surges using weather and operational signals",
        "Reduced false positive rate by 25% through feature engineering and real-time data integration",
        "Delivered executive dashboards for regional operations decision-making",
      ],
    },
  ],

  // ✅ Education
  education: [
    {
      degree: "M.S. Data Science",
      school: "New Jersey Institute of Technology",
      year: "2021 – 2022",
      detail: "Computational Track",
      highlights: ["Deep Learning TA", "NLP", "RL", "SQL"],
    },
    {
      degree: "B.B.A. Statistics & Info Science",
      school: "Fu Jen Catholic University",
      year: "2015 – 2019",
      detail: "Taiwan",
      highlights: ["Class Rep (1yr)", "Camp Organizer", "Event Lead"],
    },
  ],

  // ✅ Credentials
  credentials: [
    {
      name: "IBM Data Science Professional Certificate",
      issuer: "IBM / Coursera",
      year: "2022",
      skills: "ML · Data Visualization · Statistical Analysis",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/GD7QUZVBAWNU",
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      year: "2022",
      skills: "Data Wrangling · Dashboard Design · R",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/RL2BH3M7LF3W",
    },
  ],

  // ✅ Projects: metrics now symbolic/outcome-oriented + icons
  projects: [
    {
      name: "RAG Knowledge Automation",
      metrics: [
        { value: "1M+",  label: "customer messages processed" },
        { value: "60%",  label: "manual response time reduced" },
      ],
      desc: "Designed and implemented an end-to-end RAG pipeline: message ingestion → semantic clustering → topic modeling → auto-generated knowledge base & FAQ. Integrated LangChain with vector search and cloud monitoring to automate responses, significantly reducing human curation effort.",
      tags: ["RAG", "LangChain", "Vector DB", "Cloud Automation", "Pipeline Orchestration"],
      image: ragImg,
    },
    {
      name: "Product Function Analysis",
      metrics: [
        { value: "1000+", label: "API endpoints mapped" },
        { value: "30%",   label: "time-to-refactor improved" },
      ],
      desc: "Built a system-wide product function analysis framework linking API & database structure to user roles and permissions. Visualized via heatmaps and Sankey diagrams to guide targeted refactoring and dependency optimization.",
      tags: ["System Analysis", "Data Mapping", "Refactor Planning", "Visualization"],
      image: analysisImg,
    },
    {
      name: "App Event Pipeline & BI",
      metrics: [
        { value: "10+",  label: "critical metrics monitored" },
        { value: "100%", label: "A/B test coverage enabled" },
      ],
      desc: "Engineered a scalable event capture pipeline from apps → BigQuery → automated metrics → Looker Studio dashboards. Includes real-time alerting, version-level analytics, and support for A/B testing, ensuring data-driven decisions across product teams.",
      tags: ["BigQuery", "GA4", "Looker Studio", "A/B Testing", "Monitoring"],
      image: pipelineImg,
    },
    {
      name: "GenAI Image & Video Pipeline",
      metrics: [
        { value: "30%", label: "production cost reduced" },
        { value: "3×",  label: "content generation speed-up" },
      ],
      desc: "Developed a multi-model AI content generation pipeline using ComfyUI, fine-tuning both image & video models. Enabled non-technical teams to produce high-quality promotional assets internally, with workflow automation and version management.",
      tags: ["ComfyUI", "Fine-tuning", "Workflow Automation", "Media AI", "Pipeline Integration"],
      image: aiVideoImg,
    },
  ],

  sideProjects: [
    {
      name: "Autonomous Game Agent",
      metrics: [
        { value: "30%",   label: "training time reduced" },
      ],
      desc: "Implemented reinforcement learning agents leveraging transfer learning and model fine-tuning. Achieved faster convergence, higher scoring policies, and improved sample efficiency in OpenAI Gym environments.",
      tags: ["Reinforcement Learning", "Python", "Transfer Learning", "RL Agents", "Simulation"],
      image: gameAgentImg,
    },
    {
      name: "Amazon Food Review Sentiment",
      metrics: [
        { value: "500K+", label: "reviews analyzed" },
      ],
      desc: "Performed large-scale NLP sentiment analysis on 500K+ Amazon food reviews. Pipeline included preprocessing, tokenization, transformer-based classification, and visualization to derive actionable product insights.",
      tags: ["NLP", "Sentiment Analysis", "Transformers", "Data Pipeline", "Python"],
      image: amazonImg,
    },
    {
      name: "SpaceX Falcon 9 Prediction",
      metrics: [
        { value: "92%", label: "prediction accuracy" },
      ],
      desc: "Built a decision-tree ensemble model to predict Falcon 9 launch and booster recovery outcomes using historical launch data. Automated data ingestion, feature engineering, and dashboard reporting for operational insights.",
      tags: ["Predictive Modeling", "Decision Trees", "SQL", "Python", "Dashboarding"],
      image: falcon9Img,
    },
    {
      name: "Clause-Grounded RAG Chatbot",
      metrics: [
        { value: "200+", label: "query intents modeled" },
        { value: "Clause-level", label: "policy retrieval accuracy" },
      ],
      desc: "Built a clause-grounded retrieval-augmented generation (RAG) chatbot for travel insurance policy queries. Converted policy documents into a structured knowledge base through clause segmentation and preprocessing, then designed over 200 query intents capturing similar, related, and contrasting legal scenarios. Implemented vector retrieval with FAISS to ensure responses are generated strictly based on the relevant policy clauses.",
      tags: ["RAG", "FAISS", "Intent Modeling", "Knowledge Retrieval", "Python"],
      image: chatbotImg,
    },
  ],

  // ✅ Contact / Collaboration section (reworded)
  contact: {
    text: "I'm very willing to collaborate or chat about AI projects, data systems, and applied machine learning. Welcome to contact me via Connect.",
  },
};