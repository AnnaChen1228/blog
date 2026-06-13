// Astro `base` prefix (e.g. "/blog/") so assets resolve on GitHub Pages subpath
const base = import.meta.env.BASE_URL;

export const info = {
  name: "Anna Chen",
  full_name: "Kuan-Jung (Anna) Chen",
  brief_description:
    "M.S. in CS @ NCU specializing in GenAI Agents, RAG, and full-stack development — bridging research (CIKM / TAAI) and engineering.",
  role: "GenAI / NLP Researcher · Full-Stack Developer",
  picture: `${base}picture.jpg`,
  picture_alt: "Anna Chen",
  location: "New Taipei City, Taiwan",
  cv: `${base}Anna_cv.pdf`,

  // Floating keywords in the hero background — concepts & personality, not tools.
  // Edit/add/remove freely.
  hero_keywords: [
    "RAG",
    "MAS",
    "Full-stack",
    "GenAI",
    "NLP",
    "Curious",
    "Problem Solver",
    "Detail-oriented",
    "Fast Learner",
  ],

  about: {
    description: `I'm a CS master's student at National Central University focused on Generative AI — building LLM agents, RAG pipelines, and the full-stack systems around them. My work bridges academic research (CIKM, TAAI) and real engineering, from deploying smart education platforms to optimizing retrieval systems. I love turning messy, complex problems into clear, useful tools.`,

    education: [
      {
        title: "M.S. in Computer Science & Information Engineering",
        date: "2024 - Present",
        location: "National Central University",
        gpa: "4.1/4.3",
        research: "Generative AI, RAG, and NLP",
        thesis: [
          {
            name: "A Dialogue Knowledge Tracing System for Learning Analytics",
            conference: "CIKM 2025 (ProActLLM)",
          },
          {
            name: "Domain-Retrieved Evidence and Multi-Agent Reasoning for Structured Paper Evaluation",
            conference: "TAAI 2025",
          },
        ],
      },
      {
        title: "B.S. in Computer Science & Engineering",
        date: "2020 - 2024",
        location: "Yuan-Ze University",
        gpa: "3.8/4.0",
        thesis: [
          {
            name: "Improving Bug Report Summarization Using Deep Learning Methods",
            conference: "NSTC 112th College Student Research",
          },
        ],
      },
    ],

    experience: [
      {
        title: "Research Assistant",
        date: "2025.02 - Present",
        company: "NCU WIDM Lab",
        location: "Taiwan",
        description:
          "- Built and maintain the official lab website (full-stack)\n- Manage GPU server infrastructure: user provisioning, troubleshooting & uptime monitoring for 10+ researchers",
      },
      {
        title: "Teaching Assistant — Artificial Intelligence",
        date: "2025.09 - 2026.01",
        company: "NCU CSIE",
        location: "Taiwan",
        description:
          "- Designed ML assignments (multi-class classification, sequence labeling) for 50+ students\n- Evaluated project architectures and provided technical mentorship",
      },
      {
        title: "Application Services Intern",
        date: "2024.02 - 2024.06",
        company: "Telecom Technology Center (TTC)",
        location: "Taiwan",
        description:
          "- Executed database migration projects ensuring data integrity\n- Ran web stress testing to verify system stability post-deployment",
      },
    ],

    // Honors, awards & grants
    honors: [
      {
        title: "1st Place — TSMC IT CareerHack (Group B)",
        detail: "Semiconductor Supply Chain Intelligent Assistant",
        date: "2026",
        icon: "fas fa-trophy",
      },
      {
        title: "Paper Accepted — CIKM 2025 (ProActLLM Workshop)",
        detail: "A Dialogue Knowledge Tracing System for Learning Analytics",
        date: "2025",
        icon: "fas fa-file-lines",
      },
      {
        title: "Paper Accepted — TAAI 2025",
        detail:
          "Domain-Retrieved Evidence & Multi-Agent Reasoning for Structured Paper Evaluation",
        date: "2025",
        icon: "fas fa-file-lines",
      },
      {
        title: "NCU CSIE Outstanding Student Scholarship",
        detail: "National Central University",
        date: "2024",
        icon: "fas fa-award",
      },
      {
        title: "NSTC College Student Research Grant",
        detail: "112th — Bug Report Summarization",
        date: "2023",
        icon: "fas fa-medal",
      },
    ],

    // Skills grouped by category
    skills: [
      {
        category: "LLM & Agents",
        items: [
          "OpenAI / Gemini API",
          "Local LLM (Ollama)",
          "RAG / LightRAG",
          "Multi-Agent Systems",
          "Knowledge Graph",
        ],
      },
      {
        category: "ML / NLP",
        items: ["PyTorch", "BERT", "RoBERTa", "mT5", "XGBoost"],
      },
      {
        category: "Web",
        items: ["React", "Vue", "Socket.io", "FastAPI", "MongoDB"],
      },
      {
        category: "Infra",
        items: ["Python", "SQL", "Docker", "Git", "Linux"],
      },
    ],
  },

  projects: [
    {
      title: "Semiconductor Supply Chain Intelligent Assistant",
      date: "2026",
      badge: "🥇 1st — TSMC CareerHack",
      description:
        "Hybrid RAG + Knowledge Graph (Neo4j) multi-agent system analyzing financial reports, earnings calls & news for supply-chain intelligence and a SEMI-AI Q&A assistant.",
      link: "https://github.com/AnnaChen1228",
      tech: ["Python", "Multi-Agent", "RAG", "Knowledge Graph", "Neo4j"],
      icon: "fas fa-microchip",
      img_alt: "Semiconductor Supply Chain Assistant",
    },
    {
      title: "CoSci — Scientific Modeling System",
      date: "2025 - Present",
      description:
        "Visual ModelFlow + state-aware Multi-Agent System guiding students from physics observation to computational models. Deployed in 30+ high-school camps; F1 0.86–0.93.",
      link: "https://cosci.tw/",
      tech: ["React", "Socket.io", "MAS", "LLMs", "MongoDB"],
      icon: "fas fa-atom",
      img_alt: "CoSci Scientific Modeling System",
    },
    {
      title: "MOST — Reviewer Recommendation System",
      date: "2025 - Present",
      description:
        "Multi-dimensional RAG with a local 120B LLM and field-specific vector DBs (bge-zh-v1.5). Dynamic weighting balances reviewer workload with 8–15% cross-dimension overlap.",
      link: "https://github.com/AnnaChen1228/MOST_committee",
      tech: ["Python", "RAG", "Local LLM", "Vector DB"],
      icon: "fas fa-user-group",
      img_alt: "MOST Reviewer Recommendation System",
    },
    {
      title: "EduACT — No-Code AI TA Platform",
      date: "2024 - Present",
      badge: "CIKM 2025",
      description:
        "No-code platform for teachers to deploy AI teaching assistants. Integrated OpenAI Assistant API + LightRAG class-level analytics; adopted at NCCU, NCU & high schools.",
      link: "https://eduact.csie.ncu.edu.tw/",
      tech: ["FastAPI", "OpenAI API", "Vue", "SQL", "LightRAG"],
      icon: "fas fa-chalkboard-user",
      img_alt: "EduACT Platform",
    },
    {
      title: "Traffic Accident Report Extraction",
      date: "2024 - 2025",
      description:
        "Extracted 35 structured features from accident reports using BERT, RoBERTa & mT5 with Cohen's Kappa evaluation; applied data augmentation to mitigate label sparsity.",
      link: "https://github.com/AnnaChen1228",
      tech: ["BERT", "mT5", "NLP", "Python"],
      icon: "fas fa-car-burst",
      img_alt: "Traffic Accident Report Extraction",
    },
    {
      title: "Bug Report Summarization",
      date: "2023 - 2024",
      badge: "NSTC Grant",
      description:
        "Extractive summarization fusing user-intent with 36 statistical features. SVM achieved the best F-score (0.519), cutting developers' bug-reading time.",
      link: "https://github.com/AnnaChen1228/Improving-the-Performance-of-Bug-Report-Summarization-Using-Deep-Learning-Methods",
      tech: ["Deep Learning", "XGBoost", "SVM", "Python"],
      icon: "fas fa-bug",
      img_path: `${base}BRC.jpg`,
      img_alt: "Bug Report Summarization",
    },
  ],

  contact: {
    email: "angelachen572@gmail.com",
    linkedin: "https://www.linkedin.com/in/anna-chen-5a93a3300/",
    github: "https://github.com/AnnaChen1228",
  },
};
