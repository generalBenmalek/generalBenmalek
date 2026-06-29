window.projectsDataFallback = [
  {
    "id": "0_cv",
    "title": "Curriculum Vitae",
    "subtitle": "Professional Resume",
    "technologies": [
      "AI & Machine Learning",
      "Software Engineering",
      "Data Science",
      "Computer Science"
    ],
    "description": "My complete professional curriculum vitae detailing my technical skills, professional work experience, academic background, and engineering achievements.",
    "achievements": [
      "Showcases academic background, coursework, and technical skills in Computer Science and Artificial Intelligence.",
      "Lists professional software engineering and AI work experiences.",
      "Details engineering projects, certifications, and core competencies.",
      "Includes contact details, active professional links, and languages."
    ],
    "path_report": "benmalek/reports/cv.pdf",
    "path_video": null,
    "images": [],
    "youtube_videos": []
  },
  {
    "id": "1_esia_impact_chatbot",
    "title": "ENSIA Impact Chatbot",
    "subtitle": "AI & RAG System",
    "technologies": [
      "Python",
      "LangChain",
      "Qdrant",
      "Ollama",
      "PyMuPDF",
      "EasyOCR"
    ],
    "description": "A Retrieval-Augmented Generation (RAG) system specialized for querying archived Telegram group conversations. It features multimodal attachment extraction, conversational context reconstruction, and local LLM inference.",
    "achievements": [
      "Developed a RAG-powered chatbot specialized for indexing and querying archived Telegram group conversations in Arabic and English.",
      "Implemented multimodal attachment extraction using EasyOCR for images and PyMuPDF for scanned and digital PDFs.",
      "Designed a conversational context reconstruction method utilizing reply chain tracking and overlap-boundary chunking to maintain context continuity.",
      "Integrated BGE-M3 embeddings and a local Qdrant vector database with metadata-based reranking to achieve high-precision semantic search.",
      "Built a modular architecture using the Factory and Facade/Pipeline patterns to enable incremental knowledge base updates and local LLM inference via Qwen 2.5 7B on Ollama."
    ],
    "path_report": "benmalek/reports/ensia_impact_chatbot.pdf",
    "path_video": null,
    "images": [],
    "youtube_videos": []
  },
  {
    "id": "2_appliance_power_classification",
    "title": "Appliance Power Consumption Classification",
    "subtitle": "Time Series Classification (Kaggle)",
    "technologies": [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Time Series Analysis"
    ],
    "description": "A machine learning pipeline developed for a Kaggle competition to classify time series power consumption data into 10 categories of typical household appliances.",
    "achievements": [
      "Engineered a machine learning pipeline for a Kaggle competition to classify time series power consumption data into 10 distinct categories of household appliances: mobile phones (via chargers), coffee machines, computer stations (including monitor), fridges and freezers, Hi-Fi systems (CD players), lamp (CFL), laptops (via chargers), microwave ovens, printers, and televisions (LCD or LED).",
      "Extracted representative statistical and temporal features from appliance power load curves using time series feature engineering to construct structured datasets.",
      "Implemented and evaluated multiple classification models including k-Nearest Neighbors (k-NN), Support Vector Machines (SVM), Decision Trees, and Random Forests using scikit-learn.",
      "Conducted extensive hyperparameter tuning and feature selection to optimize classification metrics and model generalization on unseen test datasets."
    ],
    "path_report": null,
    "path_video": null,
    "images": [],
    "youtube_videos": [],
    "project_url": [
      {
        "name": "TaskIt Website",
        "url": "https://www.taskit.software/"
      }
    ]
  },
  {
    "id": "3_smart_parking_optimization",
    "title": "Smart Multi-Level Parking Optimization",
    "subtitle": "Optimization & Metaheuristics",
    "technologies": [
      "Python",
      "MILP",
      "Genetic Algorithms",
      "Simulated Annealing",
      "MDPs"
    ],
    "description": "An optimization system modeling vehicle allocation in a smart multi-level parking facility as a Stochastic Shortest Path (SSP) Markov Decision Process (MDP) and a Mixed-Integer Linear Program (MILP).",
    "achievements": [
      "Designed and modeled a smart multi-level parking facility as a Stochastic Shortest Path (SSP) Markov Decision Process (MDP) and a Classical Mixed-Integer Linear Program (MILP) to optimize vehicle allocations under spatial, temporal, and operational constraints.",
      "Developed an online greedy assignment strategy with a one-step lookahead cost function to evaluate candidate spots using weighted penalty criteria (distance, level balance, EV status, local crowding, size mismatch).",
      "Implemented metaheuristic optimization techniques including Genetic Algorithms (GA) and Simulated Annealing (SA) in Python to tune policy weights.",
      "Evolved policy weights that allowed the real-time greedy online algorithm to achieve near-global optimality, outperforming Classical MILP in high-traffic scenarios (by avoiding exponential timeouts) and running in less than 0.01 seconds."
    ],
    "path_report": "benmalek/reports/NMO_parking_mania_report.pdf",
    "path_video": null,
    "images": [],
    "youtube_videos": []
  },
  {
    "id": "4_intellicanteen",
    "title": "IntelliCanteen",
    "subtitle": "ML & Demand Forecasting",
    "technologies": [
      "Python",
      "CatBoost",
      "Optuna",
      "PyTorch",
      "Scikit-learn",
      "Pandas"
    ],
    "description": "A machine learning demand forecasting framework designed to estimate the count of different meal types across university restaurants (DOU) using menus and canteen statistics.",
    "achievements": [
      "Developed a machine learning framework to forecast daily meal demand across university restaurants (DOU) to optimize food preparation planning and reduce waste.",
      "Performed exploratory data analysis (EDA) and joined text-based daily menu items and restaurant statistics across canteens using custom normalization strategies.",
      "Engineered tabular and text features from canteens' menus and statistics, applying log-transformations (log1p) to target variables for improved model training stability.",
      "Built and trained regression models using CatBoost and deep learning, utilizing Optuna on GPU to automate hyperparameter tuning over a time-based validation split.",
      "Designed a multi-output regression architecture to predict multiple independent meal types simultaneously, evaluating model performance against a 7-day moving average baseline."
    ],
    "path_report": null,
    "path_video": null,
    "images": [],
    "youtube_videos": [
      {
        "name": "YACK Demo",
        "url": "https://youtu.be/B4Dw0tFmuaU"
      }
    ]
  },
  {
    "id": "5_esia_nexus",
    "title": "ENSIA Nexus",
    "subtitle": "Collaboration Platform",
    "technologies": [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Python",
      "TypeScript",
      "Google OAuth"
    ],
    "description": "A research and project collaboration platform built for ENSIA students and researchers, enabling easy sharing of ideas, research, and resource management.",
    "achievements": [
      "Collaborated on the development of a research and project collaboration platform for ENSIA students and researchers.",
      "Contributed to frontend and backend features including authentication, API integration, project management interfaces, and responsive UI components.",
      "Worked within a team-based GitHub workflow using Next.js, FastAPI, and PostgreSQL to build scalable full-stack services."
    ],
    "path_report": null,
    "path_video": null,
    "images": [],
    "youtube_videos": []
  },
  {
    "id": "6_taskit",
    "title": "TaskIt",
    "subtitle": "Web Task Management",
    "technologies": [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    "description": "A responsive full-stack task management application enabling users to create, organize, filter, and track tasks dynamically.",
    "achievements": [
      "Created a task management web application allowing users to create, organize, update, and delete tasks efficiently.",
      "Designed backend APIs with Express.js and MongoDB for task storage, filtering, and user-specific data handling.",
      "Implemented responsive frontend interactions and CRUD operations for smooth task management experience."
    ],
    "path_report": null,
    "path_video": null,
    "images": [],
    "youtube_videos": [],
    "project_url": [
      {
        "name": "TaskIt Website",
        "url": "https://www.taskit.software/"
      }
    ]
  },
  {
    "id": "7_yack",
    "title": "YACK (Your Agreement Contract Keeper)",
    "subtitle": "Secure Mobile Contracts",
    "technologies": [
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Cryptography"
    ],
    "description": "A secure mobile contract platform with client-side RSA key pair encryption, zero-knowledge storage, and end-to-end encrypted messaging.",
    "achievements": [
      "Developed a secure mobile platform for creating, signing, and managing digital contracts with end-to-end encrypted communication.",
      "Implemented a zero-knowledge security architecture where user private RSA keys are encrypted client-side using Argon2id-derived credentials before storage on the server.",
      "Designed encrypted contract and chat systems where all data is encrypted using participants' public keys, preventing server-side access to messages or contract contents.",
      "Built an end-to-end encrypted real-time messaging system enabling secure communication between contract participants.",
      "Integrated local and cloud persistence using MongoDB, Firebase, Hive, and Isar to support secure synchronization and offline access."
    ],
    "path_report": null,
    "path_video": null,
    "images": [],
    "youtube_videos": [
      {
        "name": "YACK Demo",
        "url": "https://youtu.be/B4Dw0tFmuaU"
      }
    ]
  },
  {
    "id": "8_moneycash",
    "title": "MoneyCash",
    "subtitle": "Financial Optimization",
    "technologies": [
      "Python",
      "JavaScript",
      "HTML",
      "Metaheuristics",
      "CSP"
    ],
    "description": "An intelligent financial planning dashboard that models and optimizes monthly salary distribution across spending categories and savings goals using search and constraint satisfaction algorithms.",
    "achievements": [
      "Developed an intelligent financial planning system that optimizes monthly salary distribution across user-defined spending categories and savings goals.",
      "Designed a mathematical penalty-based optimization model that balances spending priorities, constraints, and savings efficiency.",
      "Implemented and compared multiple search and optimization algorithms including Hill Climbing, Breadth-First Search (BFS), Depth-First Search (DFS), and Constraint Satisfaction Problem (CSP) techniques.",
      "Built an interactive dashboard to visualize optimization results, compare algorithm performance, and analyze generated budget distributions."
    ],
    "path_report": null,
    "path_video": null,
    "images": [],
    "youtube_videos": []
  },
  {
    "id": "9_sud",
    "title": "SUD (Secure Update Downloader)",
    "subtitle": "Signed Update System",
    "technologies": [
      "Python",
      "Cryptography",
      "SQLite",
      "aria2",
      "Cybersecurity"
    ],
    "description": "A secure software distribution and automatic update downloader featuring Ed25519/RSA manifest signatures, rollback protection, and multi-segment aria2 download management.",
    "achievements": [
      "Developed a secure software distribution and automatic update system with cryptographic verification, rollback protection, and tamper-resistant package delivery.",
      "Implemented signed manifest verification using Ed25519/RSA signatures and SHA-256 integrity checks to protect against MITM attacks and malicious package tampering.",
      "Designed a layered architecture with CLI and Tkinter GUI interfaces, application services, domain security rules, and infrastructure modules for networking, storage, and package management.",
      "Built a multi-segment download manager powered by aria2 with pause/resume support, persistent download recovery, and automated observer-driven installation workflows."
    ],
    "path_report": null,
    "path_video": null,
    "images": [],
    "youtube_videos": [
      {
        "name": "SUD Demo",
        "url": "https://youtu.be/chS73pOlthw"
      }
    ]
  },
  {
    "id": "10_dotschat",
    "title": "DotsChat",
    "subtitle": "Real-time Messaging App",
    "technologies": [
      "Dart",
      "Flutter",
      "WebSockets",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    "description": "A Telegram-inspired messaging client and server architecture supporting real-time chat rooms, notifications, and scalable user management.",
    "achievements": [
      "Developed a Telegram-inspired real-time chat platform with Flutter frontend and Node.js backend architecture.",
      "Implemented real-time communication using WebSockets for instant messaging and live updates between users.",
      "Designed scalable backend APIs and MongoDB data structures for chat rooms, messages, and user management."
    ],
    "path_report": null,
    "path_video": null,
    "images": [],
    "youtube_videos": [
      {
        "name": "SUD Demo",
        "url": "https://youtu.be/chS73pOlthw"
      }
    ]
  },
  {
    "id": "11_beat_the_magnet",
    "title": "Beat The Magnet",
    "subtitle": "Predictive AI Survival Game",
    "technologies": [
      "Python",
      "Pygame",
      "Time Series Analysis",
      "AI"
    ],
    "description": "A real-time survival game in Pygame featuring an AI pursuer that predicts player trajectory using autoregressive (AR) models and trigonometric pattern analysis.",
    "achievements": [
      "Developed a real-time survival game where an AI-controlled agent predicts and chases player movement using time series forecasting techniques.",
      "Implemented fast movement prediction algorithms combining autoregressive (AR) models with sinusoidal and cosine-based pattern analysis to adapt to player behavior dynamically.",
      "Designed a continuously updating prediction system that analyzes previous player movements in real time to improve pursuit accuracy.",
      "Built gameplay mechanics in Pygame where players must survive for 60 seconds without being captured by the predictive AI agent."
    ],
    "path_report": null,
    "path_video": null,
    "images": [],
    "youtube_videos": []
  }
];