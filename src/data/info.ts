export const info = {
  name: "Anna Chen",
  brief_description:
    "I'm a CS grad student specializing in NLP and full-stack development, turning complex data into meaningful insights.",
  role: "CS Grad Student",
  picture: "/picture.jpg",
  picture_alt: "Bart Simpson",
  location: "New Taipei City, Taiwan",
  cv: "/cv.pdf",

  about: {
    description: `I'm a CS graduate student diving into the world of AI and full-stack development. 
    Passionate about NLP and deep learning, while exploring the art of web development. 
    When I'm not training models or learning new tech stacks, you'll find me turning ideas into code. 
    Let's grow and build something meaningful together!
    `,
    education: [
      {
        "title": "Master of Computer Science and Information Engineering",
        "date": "2024 - Present",
        "location": "National Central University",
        "research": "Natural Language Processing and Legal Text Analysis",
        "thesis": [{name : "Understanding Students Through Dialogue: A Dialogue Knowledge Tracing System for Learning Analytics", conference: "CIKM 2025"},
          {name : "DREAM: 結合領域知識檢索與多代理推理的結構化論文評估方法",conference: "TAAI 2025"}
        ]
      },
      {
        "title": "Bachelor of Computer Science and Engineering",
        "date": "2020 - 2024",  
        "location": "Yuan-Ze University",
        "gpa": "3.56/4",
        "thesis": [{name: "Improving the Performance of Bug Report Summarization Using Deep Learning Methods", conference: "112 大專生計畫"}]
      }
    ],
    experience: [
      {
        "title": "Application Services Intern",
        "date": "2024.02 - 2024.07",
        "company": "Telecom Technology Center",
        "location": "Taiwan",
        "description":  "- Participated in ERP system implementation evaluation and bidding process\n- Executed database migration projects and ensured data integrity\n- Conducted comprehensive web application testing and documentation"
      }
    ],

    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Prank Mastery"], // not used yet
  },

  projects: [
    {
      title: "Improving the Performance of Bug Report Summarization Using Deep Learning Methods",
      date: "2024",
      description:
        "Improved bug report analysis efficiency using deep learning and intent detection",
      link: "https://github.com/AnnaChen1228/Improving-the-Performance-of-Bug-Report-Summarization-Using-Deep-Learning-Methods",
      tech: ["Python", "NLP"],
      img_alt: "BRC",
      img_path: "/BRC.jpg",
    },
    {
      title: "Photo Booth",
      date: "2023",
      description:
        "Modern photo booth app with instant filters and video creation 📸✨",
      link: "hhttps://github.com/AnnaChen1228/Photo-booth",
      tech: ["Python","OpenCV","Selenium"],
      img_alt: "Photo Booth",
      img_path: "photo_booth.jpg",
    },
    {
      title: "Scheduling System",
      date: "2024",
      description:
        "Smart staff scheduling system for convenience stores 📅",
      link: "https://github.com/bartsimpsonfake/comic-club",
      tech: ["Python", "SQL", "JavaScript", "CSS","HTML"],
      img_alt: "Scheduling System",
      img_path: "scheduling_system.jpg",
    },
  ],

  contact: {
    email: "angelachen572@gmail.com",
    linkedin: "https://www.linkedin.com/in/anna-chen-5a93a3300/",
    github: "https://github.com/AnnaChen1228",
    // twitter: "https://www.twitter.com/bartsimpsonfake",
  },
};
