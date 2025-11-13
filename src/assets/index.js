export const projects = {
    distributedTodo: {
        id: 1,
        title: "Distributed Todo App Java",
        icon: "FaFolderOpen",
        image: "https://placehold.co/200",
        description:
            "A distributed task manager backend built with Spring Boot and RabbitMQ using microservice architecture. Implements JWT authentication, asynchronous task processing, and persistent storage with MySQL.",
        stacks: [
            "Spring Boot",
            "Spring Data JPA",
            "MySQL",
            "RabbitMQ",
            "JWT Authentication",
            "Spring Security",
            "Microservices",
            "Docker",
            "RESTful APIs",
        ],
        // github: "https://github.com/ayush-may/distributed-todo-app",
        live: "",
        status: "completed"
    },

    jobRecommender: {
        id: 3,
        title: "Spring Boot Job Recommender with Python Integration ",
        icon: "FaFileAlt",
        image: "https://placehold.co/200",
        description:
            `A resume-based job recommendation system where users upload resumes through a Spring Boot app. The backend sends extracted text to a Python Flask service running scikit-learn models, returns matched job roles, and displays results instantly using Thymeleaf, jQuery, Axios, and MySQL.`,
        stacks: [
            "Spring Boot",
            "Spring JPA",
            "Thymeleaf",
            "JQuery",
            "Toastify",
            "Lombok",
            "Python",
            "Flask",
            "scikit-learn",
            "HTML/CSS/JS",
            "Alpine",
            "Axios",
            "MySQL",
        ],
        // github: "https://github.com/ayush-may/resume-analyzer",
        live: "",
        status: "completed"
    },

    UPIpay: {
        id: 4,
        title: "UPI Pay with python integratation",
        icon: "FaFileAlt",
        image: "https://placehold.co/200",
        description:
            `A resume-based job recommendation system where users upload resumes through a Spring Boot app. The backend sends extracted text to a Python Flask service running scikit-learn models, returns matched job roles, and displays results instantly using Thymeleaf, jQuery, Axios, and MySQL.`,
        stacks: [
            "Spring Boot",
            "Spring JPA",
            "Thymeleaf",
            "JQuery",
            "Toastify",
            "Lombok",
            "Python",
            "Flask",
            "scikit-learn",
            "HTML/CSS/JS",
            "Alpine",
            "Axios",
            "MySQL",
        ],
        // github: "https://github.com/ayush-may/resume-analyzer",
        live: "",
        status: "pending"
    },

    realChatApp: {
        id: 5,
        title: "Real Time Chat App using MERN",
        icon: "FaFileAlt",
        image: "https://placehold.co/200",
        description:
            `A resume-based job recommendation system where users upload resumes through a Spring Boot app. The backend sends extracted text to a Python Flask service running scikit-learn models, returns matched job roles, and displays results instantly using Thymeleaf, jQuery, Axios, and MySQL.`,
        stacks: [
            "Next.js(frontend)",
            "Node.js(backend)",
            "Express.js",
            "Spring JPA",
            "Toastify",
            "Axios",
            "MongoDB",
            "WebSocket",
            "RabbitMq",
            "Redis",
        ],
        github: { Frontend: "https://github.com/Ayush-may/chitchat-v2-nextjs", Backend: "https://github.com/Ayush-may/Chitchat-v2-backend" },
        live: "",
        status: "completed"
    }
};


export const techStacks = [
    "HTML",
    "CSS / SCSS / Tailwind",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js / Express.js",
    "Laravel / PHP",
    "Java / Spring Boot",
    "Python / Flask",
    "MySQL / MongoDB / Redis",
    "Git / GitHub / Linux",
    "REST APIs / JWT Auth",
    "Microservices / Message Queues",
    "AI & ML Basics",
];
