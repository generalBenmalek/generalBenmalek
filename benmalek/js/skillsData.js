window.skillsDataFallback = {
  "categories": [
    {
      "id": "languages",
      "name": "Languages & Fundamentals",
      "icon": "⚔️",
      "skills": [
        {
          "id": "core",
          "name": "Core",
          "cost": 0,
          "level": 5,
          "percentage": 100,
          "rarity": "legendary",
          "parent": null,
          "q": 0,
          "r": 0
        },
        {
          "id": "python",
          "name": "Python",
          "cost": 3,
          "level": 5,
          "percentage": 90,
          "rarity": "legendary",
          "parent": "core",
          "q": 0,
          "r": -1
        },
        {
          "id": "javascript",
          "name": "JavaScript",
          "cost": 3,
          "level": 4,
          "percentage": 78,
          "rarity": "epic",
          "parent": "core",
          "q": -1,
          "r": 0
        },
        {
          "id": "cplusplus",
          "name": "C++",
          "cost": 3,
          "level": 3,
          "percentage": 70,
          "rarity": "rare",
          "parent": "core",
          "q": 1,
          "r": -1
        },
        {
          "id": "csharp",
          "name": "C#",
          "cost": 3,
          "level": 3,
          "percentage": 65,
          "rarity": "rare",
          "parent": "core",
          "q": 1,
          "r": 0
        },
        {
          "id": "java",
          "name": "Java",
          "cost": 3,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "core",
          "q": 0,
          "r": 1
        },
        {
          "id": "rust",
          "name": "Rust",
          "cost": 4,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "core",
          "q": -1,
          "r": 1
        },
        {
          "id": "go",
          "name": "Go",
          "cost": 4,
          "level": 2,
          "percentage": 45,
          "rarity": "uncommon",
          "parent": "core",
          "q": 2,
          "r": 0
        }
      ]
    },
    {
      "id": "ds_algo",
      "name": "Algorithms & CS Fundamentals",
      "icon": "🧠",
      "skills": [
        {
          "id": "ds_algo",
          "name": "Data Structures & Algorithms",
          "cost": 4,
          "level": 3,
          "percentage": 68,
          "rarity": "rare",
          "parent": "core",
          "q": 1,
          "r": 1
        },
        {
          "id": "complexity",
          "name": "Complexity Analysis",
          "cost": 2,
          "level": 3,
          "percentage": 65,
          "rarity": "rare",
          "parent": "ds_algo",
          "q": 2,
          "r": 1
        },
        {
          "id": "graph_algos",
          "name": "Graph Algorithms",
          "cost": 3,
          "level": 2,
          "percentage": 55,
          "rarity": "uncommon",
          "parent": "ds_algo",
          "q": 1,
          "r": 2
        },
        {
          "id": "dynamic_prog",
          "name": "Dynamic Programming",
          "cost": 3,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "ds_algo",
          "q": 0,
          "r": 2
        },
        {
          "id": "system_design",
          "name": "System Design",
          "cost": 5,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "ds_algo",
          "q": 3,
          "r": 1
        }
      ]
    },
    {
      "id": "databases",
      "name": "Databases & Data Engineering",
      "icon": "🗄️",
      "skills": [
        {
          "id": "databases",
          "name": "Databases",
          "cost": 3,
          "level": 4,
          "percentage": 75,
          "rarity": "epic",
          "parent": "core",
          "q": 2,
          "r": -1
        },
        {
          "id": "sql",
          "name": "SQL",
          "cost": 3,
          "level": 4,
          "percentage": 75,
          "rarity": "epic",
          "parent": "databases",
          "q": 3,
          "r": -1
        },
        {
          "id": "postgresql",
          "name": "PostgreSQL",
          "cost": 4,
          "level": 4,
          "percentage": 75,
          "rarity": "epic",
          "parent": "sql",
          "q": 3,
          "r": 0
        },
        {
          "id": "mysql",
          "name": "MySQL",
          "cost": 4,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "sql",
          "q": 4,
          "r": -1
        },
        {
          "id": "nosql",
          "name": "NoSQL",
          "cost": 3,
          "level": 4,
          "percentage": 75,
          "rarity": "epic",
          "parent": "databases",
          "q": 2,
          "r": -2
        },
        {
          "id": "mongodb",
          "name": "MongoDB",
          "cost": 4,
          "level": 4,
          "percentage": 75,
          "rarity": "epic",
          "parent": "nosql",
          "q": 3,
          "r": -2
        },
        {
          "id": "redis",
          "name": "Redis",
          "cost": 4,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "nosql",
          "q": 1,
          "r": -2
        },
        {
          "id": "data_eng",
          "name": "Data Engineering",
          "cost": 5,
          "level": 2,
          "percentage": 45,
          "rarity": "uncommon",
          "parent": "databases",
          "q": 4,
          "r": -2
        },
        {
          "id": "etl",
          "name": "ETL / Pipelines",
          "cost": 4,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "data_eng",
          "q": 5,
          "r": -2
        },
        {
          "id": "spark",
          "name": "Spark / Big Data",
          "cost": 5,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "data_eng",
          "q": 4,
          "r": -3
        }
      ]
    },
    {
      "id": "ml",
      "name": "Data Science & Machine Learning",
      "icon": "🤖",
      "skills": [
        {
          "id": "dataanalysis",
          "name": "Data Analysis",
          "cost": 4,
          "level": 3,
          "percentage": 68,
          "rarity": "rare",
          "parent": "python",
          "q": -1,
          "r": -1
        },
        {
          "id": "pandas",
          "name": "Pandas",
          "cost": 4,
          "level": 4,
          "percentage": 72,
          "rarity": "epic",
          "parent": "dataanalysis",
          "q": -2,
          "r": -1
        },
        {
          "id": "numpy",
          "name": "NumPy",
          "cost": 4,
          "level": 3,
          "percentage": 65,
          "rarity": "rare",
          "parent": "dataanalysis",
          "q": -1,
          "r": -2
        },
        {
          "id": "viz",
          "name": "Data Visualization",
          "cost": 3,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "dataanalysis",
          "q": -2,
          "r": 0
        },
        {
          "id": "ml",
          "name": "Machine Learning",
          "cost": 5,
          "level": 4,
          "percentage": 72,
          "rarity": "epic",
          "parent": "python",
          "q": 0,
          "r": -2
        },
        {
          "id": "sklearn",
          "name": "scikit-learn",
          "cost": 4,
          "level": 4,
          "percentage": 72,
          "rarity": "epic",
          "parent": "ml",
          "q": 0,
          "r": -3
        },
        {
          "id": "tensorflow",
          "name": "TensorFlow",
          "cost": 6,
          "level": 2,
          "percentage": 45,
          "rarity": "uncommon",
          "parent": "ml",
          "q": 1,
          "r": -3
        },
        {
          "id": "pytorch",
          "name": "PyTorch",
          "cost": 6,
          "level": 4,
          "percentage": 72,
          "rarity": "epic",
          "parent": "ml",
          "q": 2,
          "r": -3
        },
        {
          "id": "deeplearning",
          "name": "Deep Learning",
          "cost": 7,
          "level": 3,
          "percentage": 65,
          "rarity": "rare",
          "parent": "tensorflow",
          "q": 1,
          "r": -4
        },
        {
          "id": "nlp",
          "name": "NLP",
          "cost": 7,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "pytorch",
          "q": 2,
          "r": -4
        },
        {
          "id": "cv",
          "name": "Computer Vision",
          "cost": 7,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "pytorch",
          "q": 3,
          "r": -3
        },
        {
          "id": "mlops",
          "name": "MLOps",
          "cost": 6,
          "level": 2,
          "percentage": 45,
          "rarity": "uncommon",
          "parent": "ml",
          "q": -2,
          "r": -2
        },
        {
          "id": "rl",
          "name": "Reinforcement Learning",
          "cost": 7,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "deeplearning",
          "q": 0,
          "r": -4
        },
        {
          "id": "transformers",
          "name": "Transformers",
          "cost": 7,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "nlp",
          "q": 2,
          "r": -5
        },
        {
          "id": "ai_master",
          "name": "AI Mastery",
          "cost": 10,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "rl",
          "q": -1,
          "r": -4
        }
      ]
    },
    {
      "id": "web",
      "name": "Web Development",
      "icon": "🌐",
      "skills": [
        {
          "id": "frontend",
          "name": "Frontend",
          "cost": 4,
          "level": 3,
          "percentage": 65,
          "rarity": "rare",
          "parent": "javascript",
          "q": -2,
          "r": 1
        },
        {
          "id": "react",
          "name": "React",
          "cost": 4,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "frontend",
          "q": -2,
          "r": 2
        },
        {
          "id": "vue",
          "name": "Vue.js",
          "cost": 4,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "frontend",
          "q": -3,
          "r": 1
        },
        {
          "id": "svelte",
          "name": "Svelte",
          "cost": 4,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "frontend",
          "q": -3,
          "r": 2
        },
        {
          "id": "ssr",
          "name": "SSR / Next.js",
          "cost": 5,
          "level": 3,
          "percentage": 70,
          "rarity": "rare",
          "parent": "react",
          "q": -1,
          "r": 2
        },
        {
          "id": "backend",
          "name": "Backend",
          "cost": 4,
          "level": 4,
          "percentage": 75,
          "rarity": "epic",
          "parent": "javascript",
          "q": -3,
          "r": 0
        },
        {
          "id": "nodejs",
          "name": "Node.js",
          "cost": 4,
          "level": 4,
          "percentage": 75,
          "rarity": "epic",
          "parent": "backend",
          "q": -3,
          "r": -1
        },
        {
          "id": "express",
          "name": "Express.js",
          "cost": 4,
          "level": 3,
          "percentage": 65,
          "rarity": "rare",
          "parent": "nodejs",
          "q": -3,
          "r": -2
        },
        {
          "id": "nest",
          "name": "NestJS",
          "cost": 5,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "backend",
          "q": -4,
          "r": 0
        },
        {
          "id": "apis",
          "name": "REST / GraphQL",
          "cost": 4,
          "level": 3,
          "percentage": 65,
          "rarity": "rare",
          "parent": "backend",
          "q": -4,
          "r": 1
        },
        {
          "id": "fullstack_master",
          "name": "Full-Stack Mastery",
          "cost": 8,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "apis",
          "q": -4,
          "r": 2
        }
      ]
    },
    {
      "id": "mobile",
      "name": "Mobile Development",
      "icon": "📱",
      "skills": [
        {
          "id": "mobile",
          "name": "Mobile Dev",
          "cost": 4,
          "level": 4,
          "percentage": 70,
          "rarity": "epic",
          "parent": "javascript",
          "q": -1,
          "r": 3
        },
        {
          "id": "flutter",
          "name": "Flutter",
          "cost": 5,
          "level": 4,
          "percentage": 68,
          "rarity": "epic",
          "parent": "mobile",
          "q": 0,
          "r": 3
        },
        {
          "id": "reactnative",
          "name": "React Native",
          "cost": 5,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "mobile",
          "q": -1,
          "r": 4
        },
        {
          "id": "android",
          "name": "Android (Kotlin)",
          "cost": 5,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "mobile",
          "q": -2,
          "r": 4
        }
      ]
    },
    {
      "id": "cloud",
      "name": "Cloud & DevOps",
      "icon": "☁️",
      "skills": [
        {
          "id": "cloud",
          "name": "Cloud",
          "cost": 5,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "core",
          "q": -2,
          "r": 3
        },
        {
          "id": "docker",
          "name": "Docker",
          "cost": 4,
          "level": 2,
          "percentage": 45,
          "rarity": "uncommon",
          "parent": "cloud",
          "q": -3,
          "r": 3
        },
        {
          "id": "kubernetes",
          "name": "Kubernetes",
          "cost": 7,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "docker",
          "q": -4,
          "r": 3
        },
        {
          "id": "ci_cd",
          "name": "CI/CD",
          "cost": 5,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "cloud",
          "q": -3,
          "r": 4
        },
        {
          "id": "aws",
          "name": "AWS",
          "cost": 7,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "cloud",
          "q": -4,
          "r": 4
        },
        {
          "id": "security",
          "name": "App Security",
          "cost": 6,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "cloud",
          "q": -2,
          "r": 5
        },
        {
          "id": "web3",
          "name": "Web3 / Smart Contracts",
          "cost": 6,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "cloud",
          "q": -3,
          "r": 5
        },
        {
          "id": "solidity",
          "name": "Solidity",
          "cost": 6,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "web3",
          "q": -4,
          "r": 5
        }
      ]
    },
    {
      "id": "testing",
      "name": "Testing & Quality Assurance",
      "icon": "🧪",
      "skills": [
        {
          "id": "testing",
          "name": "Testing",
          "cost": 3,
          "level": 2,
          "percentage": 55,
          "rarity": "uncommon",
          "parent": "core",
          "q": 4,
          "r": 0
        },
        {
          "id": "unit_tests",
          "name": "Unit Testing",
          "cost": 2,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "testing",
          "q": 4,
          "r": 1
        },
        {
          "id": "integration",
          "name": "Integration Tests",
          "cost": 3,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "testing",
          "q": 5,
          "r": 0
        },
        {
          "id": "e2e",
          "name": "E2E",
          "cost": 3,
          "level": 2,
          "percentage": 45,
          "rarity": "uncommon",
          "parent": "testing",
          "q": 5,
          "r": -1
        }
      ]
    },
    {
      "id": "gamedev",
      "name": "Game Development",
      "icon": "🎮",
      "skills": [
        {
          "id": "gamedev",
          "name": "Game Development",
          "cost": 4,
          "level": 5,
          "percentage": 85,
          "rarity": "legendary",
          "parent": "core",
          "q": 2,
          "r": 2
        },
        {
          "id": "engines",
          "name": "Game Engines",
          "cost": 4,
          "level": 3,
          "percentage": 65,
          "rarity": "rare",
          "parent": "gamedev",
          "q": 3,
          "r": 2
        },
        {
          "id": "unity",
          "name": "Unity",
          "cost": 5,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "engines",
          "q": 4,
          "r": 2
        },
        {
          "id": "unreal",
          "name": "Unreal Engine",
          "cost": 6,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "engines",
          "q": 3,
          "r": 3
        },
        {
          "id": "godot",
          "name": "Godot",
          "cost": 4,
          "level": 2,
          "percentage": 45,
          "rarity": "uncommon",
          "parent": "engines",
          "q": 2,
          "r": 3
        },
        {
          "id": "game_scripting",
          "name": "Scripting (Lua/C#)",
          "cost": 4,
          "level": 5,
          "percentage": 85,
          "rarity": "legendary",
          "parent": "unity",
          "q": 5,
          "r": 2
        },
        {
          "id": "game_cpp",
          "name": "Engine C++",
          "cost": 6,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "unreal",
          "q": 4,
          "r": 3
        },
        {
          "id": "game_design",
          "name": "Game Design",
          "cost": 3,
          "level": 3,
          "percentage": 65,
          "rarity": "rare",
          "parent": "gamedev",
          "q": 1,
          "r": 3
        },
        {
          "id": "level_design",
          "name": "Level Design",
          "cost": 3,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "game_design",
          "q": 1,
          "r": 4
        },
        {
          "id": "uiux_game",
          "name": "UI/UX for Games",
          "cost": 2,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "game_design",
          "q": 0,
          "r": 4
        },
        {
          "id": "shaders",
          "name": "Shaders (HLSL/GLSL)",
          "cost": 6,
          "level": 2,
          "percentage": 45,
          "rarity": "uncommon",
          "parent": "engines",
          "q": 5,
          "r": 1
        },
        {
          "id": "rendering",
          "name": "Real-time Rendering",
          "cost": 6,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "engines",
          "q": 3,
          "r": 4
        },
        {
          "id": "vfx",
          "name": "VFX / Particles",
          "cost": 4,
          "level": 2,
          "percentage": 40,
          "rarity": "uncommon",
          "parent": "shaders",
          "q": 6,
          "r": 1
        },
        {
          "id": "game_ai",
          "name": "Game AI",
          "cost": 5,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "engines",
          "q": 2,
          "r": 4
        },
        {
          "id": "navmesh",
          "name": "Pathfinding / NavMesh",
          "cost": 4,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "game_ai",
          "q": 2,
          "r": 5
        },
        {
          "id": "gameplay_ai",
          "name": "Behavior Trees",
          "cost": 4,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "game_ai",
          "q": 1,
          "r": 5
        },
        {
          "id": "animation",
          "name": "Animation",
          "cost": 4,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "engines",
          "q": 6,
          "r": 2
        },
        {
          "id": "rigging",
          "name": "Rigging",
          "cost": 4,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "animation",
          "q": 7,
          "r": 2
        },
        {
          "id": "audio_design",
          "name": "Game Audio",
          "cost": 3,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "engines",
          "q": 5,
          "r": 3
        },
        {
          "id": "multiplayer",
          "name": "Multiplayer / Networking",
          "cost": 6,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "gamedev",
          "q": 0,
          "r": 5
        },
        {
          "id": "rollback_netcode",
          "name": "Rollback Netcode",
          "cost": 6,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "multiplayer",
          "q": 0,
          "r": 6
        },
        {
          "id": "server_arch",
          "name": "Server Architecture",
          "cost": 6,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "multiplayer",
          "q": -1,
          "r": 6
        },
        {
          "id": "perf_opt",
          "name": "Performance & Optimization",
          "cost": 5,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "engines",
          "q": 4,
          "r": 4
        },
        {
          "id": "profiling",
          "name": "Profiling Tools",
          "cost": 4,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "perf_opt",
          "q": 5,
          "r": 4
        },
        {
          "id": "monetization",
          "name": "Monetization & Live Ops",
          "cost": 4,
          "level": 2,
          "percentage": 45,
          "rarity": "uncommon",
          "parent": "multiplayer",
          "q": -1,
          "r": 5
        },
        {
          "id": "game_master",
          "name": "Game Architect",
          "cost": 10,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "monetization",
          "q": -2,
          "r": 6
        }
      ]
    },
    {
      "id": "tooling",
      "name": "Tooling & Productivity",
      "icon": "🛠️",
      "skills": [
        {
          "id": "tooling",
          "name": "Developer Tooling",
          "cost": 2,
          "level": 3,
          "percentage": 65,
          "rarity": "rare",
          "parent": "core",
          "q": -1,
          "r": -3
        },
        {
          "id": "git",
          "name": "Git",
          "cost": 1,
          "level": 3,
          "percentage": 65,
          "rarity": "rare",
          "parent": "tooling",
          "q": -2,
          "r": -3
        },
        {
          "id": "ci",
          "name": "CI (GitHub Actions)",
          "cost": 2,
          "level": 2,
          "percentage": 50,
          "rarity": "uncommon",
          "parent": "tooling",
          "q": -3,
          "r": -3
        },
        {
          "id": "editors",
          "name": "Editors & IDEs",
          "cost": 1,
          "level": 3,
          "percentage": 60,
          "rarity": "rare",
          "parent": "tooling",
          "q": -2,
          "r": -4
        }
      ]
    }
  ]
};