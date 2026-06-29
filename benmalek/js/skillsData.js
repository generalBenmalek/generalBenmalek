window.skillsDataFallback = {
  "nodes": [
    {
      "id": "Start",
      "name": "Core",
      "r": 15,
      "c": 15,
      "logo": null,
      "cost": 0,
      "parents": [],
      "isStart": true,
      "isSetPiece": true,
      "category": "languages"
    },
    {
      "id": "python",
      "name": "Python",
      "r": 13,
      "c": 8,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "cost": 3,
      "parents": [
        "Start"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "languages"
    },
    {
      "id": "javascript",
      "name": "JavaScript",
      "r": 13,
      "c": 17,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "cost": 3,
      "parents": [
        "Start"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "languages"
    },
    {
      "id": "cplusplus",
      "name": "C++",
      "r": 13,
      "c": 18,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      "cost": 3,
      "parents": [
        "Start"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "languages"
    },
    {
      "id": "csharp",
      "name": "C#",
      "r": 14,
      "c": 19,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      "cost": 3,
      "parents": [
        "cplusplus"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "languages"
    },
    {
      "id": "java",
      "name": "Java",
      "r": 15,
      "c": 18,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      "cost": 3,
      "parents": [
        "Start"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "languages"
    },
    {
      "id": "rust",
      "name": "Rust",
      "r": 12,
      "c": 19,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
      "cost": 4,
      "parents": [
        "cplusplus"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "languages"
    },
    {
      "id": "go",
      "name": "Go",
      "r": 11,
      "c": 14,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
      "cost": 4,
      "parents": [
        "Start"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "languages"
    },
    {
      "id": "ds_algo",
      "name": "DSA",
      "r": 15,
      "c": 13,
      "logo": null,
      "cost": 4,
      "parents": [
        "Start"
      ],
      "isStart": false,
      "isSetPiece": true,
      "category": "ds_algo"
    },
    {
      "id": "complexity",
      "name": "Complexity",
      "r": 13,
      "c": 13,
      "logo": null,
      "cost": 2,
      "parents": [
        "ds_algo"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ds_algo"
    },
    {
      "id": "system_design",
      "name": "Sys Design",
      "r": 15,
      "c": 11,
      "logo": null,
      "cost": 5,
      "parents": [
        "ds_algo"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ds_algo"
    },
    {
      "id": "graph_algos",
      "name": "Graph Algos",
      "r": 14,
      "c": 12,
      "logo": null,
      "cost": 3,
      "parents": [
        "ds_algo"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ds_algo"
    },
    {
      "id": "dynamic_prog",
      "name": "Dynamic Prog",
      "r": 13,
      "c": 12,
      "logo": null,
      "cost": 3,
      "parents": [
        "ds_algo"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ds_algo"
    },
    {
      "id": "databases",
      "name": "Databases",
      "r": 16,
      "c": 14,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      "cost": 3,
      "parents": [
        "Start"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "databases"
    },
    {
      "id": "sql",
      "name": "SQL",
      "r": 17,
      "c": 13,
      "logo": null,
      "cost": 3,
      "parents": [
        "databases"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "databases"
    },
    {
      "id": "data_eng",
      "name": "Data Eng",
      "r": 19,
      "c": 12,
      "logo": null,
      "cost": 5,
      "parents": [
        "sql"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "databases"
    },
    {
      "id": "postgresql",
      "name": "PostgreSQL",
      "r": 18,
      "c": 12,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      "cost": 4,
      "parents": [
        "sql"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "databases"
    },
    {
      "id": "mysql",
      "name": "MySQL",
      "r": 17,
      "c": 12,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      "cost": 4,
      "parents": [
        "sql"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "databases"
    },
    {
      "id": "nosql",
      "name": "NoSQL",
      "r": 17,
      "c": 14,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "cost": 3,
      "parents": [
        "databases"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "databases"
    },
    {
      "id": "mongodb",
      "name": "MongoDB",
      "r": 18,
      "c": 15,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "cost": 4,
      "parents": [
        "nosql"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "databases"
    },
    {
      "id": "redis",
      "name": "Redis",
      "r": 17,
      "c": 15,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      "cost": 4,
      "parents": [
        "nosql"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "databases"
    },
    {
      "id": "etl",
      "name": "ETL Pipelines",
      "r": 19,
      "c": 11,
      "logo": null,
      "cost": 4,
      "parents": [
        "data_eng"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "databases"
    },
    {
      "id": "spark",
      "name": "Apache Spark",
      "r": 20,
      "c": 13,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg",
      "cost": 5,
      "parents": [
        "data_eng"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "databases"
    },
    {
      "id": "dataanalysis",
      "name": "Data Analysis",
      "r": 10,
      "c": 6,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      "cost": 4,
      "parents": [
        "pandas"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "pandas",
      "name": "Pandas",
      "r": 10,
      "c": 7,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      "cost": 4,
      "parents": [
        "dataanalysis",
        "numpy"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "numpy",
      "name": "NumPy",
      "r": 12,
      "c": 8,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      "cost": 4,
      "parents": [
        "pandas",
        "python"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "viz",
      "name": "Visualization",
      "r": 9,
      "c": 6,
      "logo": null,
      "cost": 3,
      "parents": [
        "pandas"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "ml",
      "name": "ML",
      "r": 9,
      "c": 11,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      "cost": 5,
      "parents": [
        "python",
        "ds_algo"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "sklearn",
      "name": "scikit-learn",
      "r": 8,
      "c": 11,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
      "cost": 4,
      "parents": [
        "ml"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "tensorflow",
      "name": "TensorFlow",
      "r": 8,
      "c": 12,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      "cost": 6,
      "parents": [
        "ml"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "pytorch",
      "name": "PyTorch",
      "r": 9,
      "c": 12,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
      "cost": 6,
      "parents": [
        "ml"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "deeplearning",
      "name": "Deep Learning",
      "r": 7,
      "c": 13,
      "logo": null,
      "cost": 7,
      "parents": [
        "tensorflow",
        "pytorch"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "nlp",
      "name": "NLP",
      "r": 6,
      "c": 13,
      "logo": null,
      "cost": 7,
      "parents": [
        "deeplearning"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "cv",
      "name": "Comp Vision",
      "r": 6,
      "c": 14,
      "logo": null,
      "cost": 7,
      "parents": [
        "deeplearning"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "mlops",
      "name": "MLOps",
      "r": 6,
      "c": 11,
      "logo": null,
      "cost": 6,
      "parents": [
        "tensorflow"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "rl",
      "name": "RL",
      "r": 7,
      "c": 15,
      "logo": null,
      "cost": 7,
      "parents": [
        "deeplearning"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "transformers",
      "name": "Transformers",
      "r": 4,
      "c": 13,
      "logo": null,
      "cost": 7,
      "parents": [
        "nlp"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "ml"
    },
    {
      "id": "ai_master",
      "name": "AI Mastery",
      "r": 4,
      "c": 15,
      "logo": null,
      "cost": 10,
      "parents": [
        "rl",
        "transformers",
        "cv"
      ],
      "isStart": false,
      "isSetPiece": true,
      "category": "ml"
    },
    {
      "id": "frontend",
      "name": "Frontend",
      "r": 10,
      "c": 21,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "cost": 4,
      "parents": [
        "javascript"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "web"
    },
    {
      "id": "react",
      "name": "React",
      "r": 9,
      "c": 22,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "cost": 4,
      "parents": [
        "frontend"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "web"
    },
    {
      "id": "vue",
      "name": "Vue.js",
      "r": 10,
      "c": 23,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      "cost": 4,
      "parents": [
        "frontend"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "web"
    },
    {
      "id": "svelte",
      "name": "Svelte",
      "r": 11,
      "c": 23,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
      "cost": 4,
      "parents": [
        "frontend"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "web"
    },
    {
      "id": "ssr",
      "name": "Next.js",
      "r": 8,
      "c": 25,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "cost": 5,
      "parents": [
        "react"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "web"
    },
    {
      "id": "backend",
      "name": "Backend",
      "r": 12,
      "c": 22,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "cost": 4,
      "parents": [
        "javascript"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "web"
    },
    {
      "id": "nodejs",
      "name": "Node.js",
      "r": 14,
      "c": 21,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "cost": 4,
      "parents": [
        "backend"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "web"
    },
    {
      "id": "express",
      "name": "Express.js",
      "r": 16,
      "c": 22,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "cost": 4,
      "parents": [
        "nodejs"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "web"
    },
    {
      "id": "nest",
      "name": "NestJS",
      "r": 14,
      "c": 23,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      "cost": 5,
      "parents": [
        "nodejs"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "web"
    },
    {
      "id": "apis",
      "name": "REST/GraphQL",
      "r": 13,
      "c": 25,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
      "cost": 4,
      "parents": [
        "backend"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "web"
    },
    {
      "id": "fullstack_master",
      "name": "Full-Stack Master",
      "r": 18,
      "c": 26,
      "logo": null,
      "cost": 8,
      "parents": [
        "backend",
        "react",
        "sql"
      ],
      "isStart": false,
      "isSetPiece": true,
      "category": "web"
    },
    {
      "id": "mobile",
      "name": "Mobile Dev",
      "r": 10,
      "c": 19,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      "cost": 4,
      "parents": [
        "javascript"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "mobile"
    },
    {
      "id": "flutter",
      "name": "Flutter",
      "r": 8,
      "c": 19,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      "cost": 5,
      "parents": [
        "mobile"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "mobile"
    },
    {
      "id": "reactnative",
      "name": "React Native",
      "r": 7,
      "c": 20,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "cost": 5,
      "parents": [
        "react"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "mobile"
    },
    {
      "id": "android",
      "name": "Android Kotlin",
      "r": 16,
      "c": 20,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
      "cost": 5,
      "parents": [
        "mobile",
        "java"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "mobile"
    },
    {
      "id": "cloud",
      "name": "Cloud",
      "r": 5,
      "c": 18,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      "cost": 5,
      "parents": [
        "Start"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "cloud"
    },
    {
      "id": "docker",
      "name": "Docker",
      "r": 3,
      "c": 17,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      "cost": 4,
      "parents": [
        "cloud"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "cloud"
    },
    {
      "id": "kubernetes",
      "name": "Kubernetes",
      "r": 1,
      "c": 16,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      "cost": 7,
      "parents": [
        "docker"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "cloud"
    },
    {
      "id": "ci_cd",
      "name": "CI/CD",
      "r": 3,
      "c": 18,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
      "cost": 5,
      "parents": [
        "docker",
        "cloud"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "cloud"
    },
    {
      "id": "aws",
      "name": "AWS",
      "r": 3,
      "c": 19,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      "cost": 7,
      "parents": [
        "cloud"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "cloud"
    },
    {
      "id": "security",
      "name": "Security",
      "r": 1,
      "c": 21,
      "logo": null,
      "cost": 6,
      "parents": [
        "cloud",
        "backend"
      ],
      "isStart": false,
      "isSetPiece": true,
      "category": "cloud"
    },
    {
      "id": "web3",
      "name": "Web3",
      "r": 4,
      "c": 21,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
      "cost": 6,
      "parents": [
        "javascript"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "cloud"
    },
    {
      "id": "solidity",
      "name": "Solidity",
      "r": 3,
      "c": 24,
      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
      "cost": 6,
      "parents": [
        "web3"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "cloud"
    },
    {
      "id": "testing",
      "name": "Testing",
      "r": 11,
      "c": 15,
      "logo": null,
      "cost": 3,
      "parents": [
        "Start"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "testing"
    },
    {
      "id": "unit_tests",
      "name": "Unit Tests",
      "r": 11,
      "c": 16,
      "logo": null,
      "cost": 2,
      "parents": [
        "testing"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "testing"
    },
    {
      "id": "integration",
      "name": "Integration",
      "r": 10,
      "c": 16,
      "logo": null,
      "cost": 3,
      "parents": [
        "testing"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "testing"
    },
    {
      "id": "e2e",
      "name": "E2E Tests",
      "r": 10,
      "c": 15,
      "logo": null,
      "cost": 3,
      "parents": [
        "testing"
      ],
      "isStart": false,
      "isSetPiece": false,
      "category": "testing"
    },
    {
      "id": "silent_1",
      "name": "Path",
      "r": 15,
      "c": 12,
      "logo": null,
      "cost": 0,
      "parents": [],
      "isStart": false,
      "isSetPiece": false,
      "category": "spacer"
    },
    {
      "id": "silent_3",
      "name": "Path",
      "r": 15,
      "c": 14,
      "logo": null,
      "cost": 0,
      "parents": [],
      "isStart": false,
      "isSetPiece": false,
      "category": "spacer"
    },
    {
      "id": "silent_4",
      "name": "Path",
      "r": 14,
      "c": 13,
      "logo": null,
      "cost": 0,
      "parents": [],
      "isStart": false,
      "isSetPiece": false,
      "category": "spacer"
    },
    {
      "id": "silent_5",
      "name": "Path",
      "r": 18,
      "c": 13,
      "logo": null,
      "cost": 0,
      "parents": [],
      "isStart": false,
      "isSetPiece": false,
      "category": "spacer"
    }
  ]
};