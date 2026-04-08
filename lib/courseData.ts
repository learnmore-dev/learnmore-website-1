// AWS Training Data
export const awsCourse = {
  id: 1,
  slug: "aws-training",
  displayName: "AWS Training",
  title: "AWS Training",
  fullTitle: "Amazon Web Services Training",
  tagline: "Master Cloud Computing with AWS",
  description: "Master Amazon Web Services with hands-on training. Learn EC2, S3, VPC, Lambda, and more.",
  fullDescription: "Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform. Our AWS training program is designed to make you job-ready from day one. You'll learn cloud computing concepts, AWS core services, security best practices, and real-world deployment strategies.",
  duration: "3 months",
  price: 29999,
  priceDisplay: "₹29,999",
  level: "Beginner to Advanced",
  icon: "fab fa-aws",
  certification: "AWS Certified Solutions Architect",
  careerPaths: [
    "AWS Solutions Architect",
    "Cloud Engineer",
    "DevOps Engineer",
    "Cloud Consultant",
    "SysOps Administrator"
  ],
  features: [
    { title: "EC2 & Compute Services", description: "Master EC2 instances, Auto Scaling, and Load Balancing", icon: "fas fa-server" },
    { title: "S3 & Storage Solutions", description: "Learn S3, EBS, Glacier, and Storage Gateway", icon: "fas fa-database" },
    { title: "VPC Networking", description: "Design secure Virtual Private Cloud networks", icon: "fas fa-network-wired" },
    { title: "Lambda & Serverless", description: "Build serverless applications with AWS Lambda", icon: "fas fa-code" },
    { title: "IAM & Security", description: "Implement identity and access management", icon: "fas fa-shield-alt" },
    { title: "Real-time Projects", description: "Work on live industry projects", icon: "fas fa-project-diagram" }
  ],
  tools: ["AWS", "Linux", "Docker", "Terraform", "CloudFormation", "Jenkins"],
  salaryRange: "₹6 LPA - ₹25 LPA",
  jobRoles: ["AWS Solutions Architect", "Cloud Engineer", "DevOps Engineer", "Cloud Consultant"],
  syllabus: [
    { module: 1, title: "Cloud Computing Fundamentals", topics: ["Introduction to Cloud Computing", "AWS Global Infrastructure", "AWS Free Tier", "AWS Management Console"] },
    { module: 2, title: "Compute Services", topics: ["EC2 Instances", "Auto Scaling", "Elastic Load Balancing", "Lambda Functions"] },
    { module: 3, title: "Storage Services", topics: ["S3 Buckets & Objects", "EBS Volumes", "EFS File Systems", "Glacier Archive"] },
    { module: 4, title: "Networking", topics: ["VPC Architecture", "Subnets & Route Tables", "Security Groups & NACLs", "NAT Gateways"] },
    { module: 5, title: "Database Services", topics: ["RDS Databases", "DynamoDB NoSQL", "Redshift Data Warehouse", "Aurora"] },
    { module: 6, title: "Security & Compliance", topics: ["IAM Users & Roles", "Security Policies", "CloudTrail & CloudWatch", "KMS Encryption"] }
  ],
  projects: [
    { name: "3-Tier Web Application Deployment", description: "Deploy a complete web application using EC2, RDS, and S3 with Auto Scaling", tools: ["EC2", "RDS", "S3", "ELB"] },
    { name: "Serverless REST API", description: "Build a serverless REST API using API Gateway, Lambda, and DynamoDB", tools: ["API Gateway", "Lambda", "DynamoDB"] },
    { name: "CI/CD Pipeline Automation", description: "Set up a complete CI/CD pipeline using CodeCommit, CodeBuild, and CodeDeploy", tools: ["CodeCommit", "CodeBuild", "CodeDeploy"] }
  ]
};

// Python Training Data
export const pythonCourse = {
  id: 2,
  slug: "python-training",
  displayName: "Python Training",
  title: "Python Training",
  fullTitle: "Python Programming Training",
  tagline: "Master Python Programming from Basics to Advanced",
  description: "Learn Python programming from basics to advanced. Master Django, Flask, and data science libraries.",
  fullDescription: "Python is one of the most popular programming languages in the world. Our comprehensive Python training covers everything from basic syntax to advanced concepts like OOP, web development with Django/Flask, and data science with Pandas/NumPy.",
  duration: "4 months",
  price: 34999,
  priceDisplay: "₹34,999",
  level: "Beginner to Advanced",
  icon: "fab fa-python",
  certification: "Python Developer Professional",
  careerPaths: ["Python Developer", "Full Stack Developer", "Data Scientist", "Machine Learning Engineer", "Backend Developer"],
  features: [
    { title: "Python Fundamentals", description: "Learn variables, data types, loops, and functions", icon: "fas fa-code" },
    { title: "Object Oriented Programming", description: "Master classes, inheritance, and polymorphism", icon: "fas fa-cubes" },
    { title: "Django Framework", description: "Build web applications with Django", icon: "fab fa-python" },
    { title: "Flask Framework", description: "Create REST APIs with Flask", icon: "fas fa-flask" },
    { title: "Data Science Libraries", description: "Learn Pandas, NumPy, Matplotlib for data analysis", icon: "fas fa-chart-line" },
    { title: "Real-world Projects", description: "Build e-commerce, blog, and data analysis projects", icon: "fas fa-project-diagram" }
  ],
  tools: ["Python", "Django", "Flask", "Pandas", "NumPy", "Git", "PostgreSQL"],
  salaryRange: "₹5 LPA - ₹20 LPA",
  jobRoles: ["Python Developer", "Full Stack Developer", "Data Analyst", "Backend Developer"],
  syllabus: [
    { module: 1, title: "Python Basics", topics: ["Variables & Data Types", "Operators & Expressions", "Strings & String Methods", "Lists & Tuples", "Dictionaries & Sets", "Control Flow"] },
    { module: 2, title: "Functions & Modules", topics: ["Defining Functions", "Lambda Functions", "Scope & Namespace", "Modules & Packages", "Decorators"] },
    { module: 3, title: "Object Oriented Programming", topics: ["Classes & Objects", "Inheritance", "Polymorphism", "Encapsulation", "Magic Methods"] },
    { module: 4, title: "Django Framework", topics: ["Django Architecture", "Models & Migrations", "Views & Templates", "URL Routing", "Forms & Validation"] },
    { module: 5, title: "REST APIs with DRF", topics: ["API Design Principles", "Serializers", "Views & ViewSets", "Authentication & Permissions"] },
    { module: 6, title: "Data Science with Python", topics: ["NumPy Arrays", "Pandas DataFrames", "Data Cleaning", "Matplotlib Visualization"] }
  ],
  projects: [
    { name: "E-Commerce Website", description: "Build a complete e-commerce website with Django", tools: ["Django", "PostgreSQL", "Bootstrap"] },
    { name: "Blog Platform", description: "Create a blog platform with user authentication and comments", tools: ["Django", "SQLite", "CKEditor"] },
    { name: "Data Analysis Dashboard", description: "Analyze sales data and create interactive dashboards", tools: ["Pandas", "Matplotlib", "Plotly"] }
  ]
};

// DevOps Training Data
export const devopsCourse = {
  id: 3,
  slug: "devops-training",
  displayName: "DevOps Training",
  title: "DevOps Training",
  fullTitle: "DevOps Engineering Training",
  tagline: "Master DevOps Practices and Tools",
  description: "Master DevOps practices, CI/CD pipelines, Docker, Kubernetes, and Jenkins.",
  fullDescription: "DevOps is revolutionizing software development. Learn the culture, practices, and tools that enable rapid, reliable software delivery. Master CI/CD pipelines, containerization, orchestration, and infrastructure as code.",
  duration: "3 months",
  price: 39999,
  priceDisplay: "₹39,999",
  level: "Intermediate",
  icon: "fas fa-cogs",
  certification: "DevOps Engineer Professional",
  careerPaths: ["DevOps Engineer", "Site Reliability Engineer", "Cloud Engineer", "Build & Release Engineer", "Automation Engineer"],
  features: [
    { title: "CI/CD Pipelines", description: "Build automated deployment pipelines with Jenkins & GitLab CI", icon: "fas fa-sync-alt" },
    { title: "Containerization with Docker", description: "Package applications using Docker containers", icon: "fab fa-docker" },
    { title: "Orchestration with Kubernetes", description: "Manage containerized applications with Kubernetes", icon: "fas fa-cubes" },
    { title: "Infrastructure as Code", description: "Automate infrastructure with Terraform & CloudFormation", icon: "fas fa-code-branch" },
    { title: "Configuration Management", description: "Manage servers with Ansible & Puppet", icon: "fas fa-cog" },
    { title: "Monitoring & Logging", description: "Implement monitoring with Prometheus & Grafana", icon: "fas fa-chart-line" }
  ],
  tools: ["Docker", "Kubernetes", "Jenkins", "Git", "Ansible", "Terraform", "Prometheus", "Grafana"],
  salaryRange: "₹8 LPA - ₹30 LPA",
  jobRoles: ["DevOps Engineer", "Site Reliability Engineer", "Cloud Engineer", "Platform Engineer"],
  syllabus: [
    { module: 1, title: "DevOps Fundamentals", topics: ["DevOps Culture & Principles", "SDLC & Agile Methodologies", "Version Control with Git", "Branching Strategies"] },
    { module: 2, title: "Continuous Integration", topics: ["Jenkins Installation & Setup", "Pipeline as Code", "Build Automation", "Unit Testing"] },
    { module: 3, title: "Containerization", topics: ["Docker Architecture", "Docker Images & Containers", "Dockerfile & Docker Compose", "Container Registry"] },
    { module: 4, title: "Orchestration with Kubernetes", topics: ["Kubernetes Architecture", "Pods & Services", "Deployments & ReplicaSets", "ConfigMaps & Secrets"] },
    { module: 5, title: "Configuration Management", topics: ["Ansible Playbooks", "Roles & Modules", "Idempotency", "Puppet & Chef Overview"] },
    { module: 6, title: "Infrastructure as Code", topics: ["Terraform Basics", "Providers & Resources", "State Management", "Modules & Reusability"] }
  ],
  projects: [
    { name: "CI/CD Pipeline Implementation", description: "Build a complete CI/CD pipeline using Jenkins, Docker, and Kubernetes", tools: ["Jenkins", "Docker", "Kubernetes", "Git"] },
    { name: "Infrastructure Automation", description: "Automate AWS infrastructure using Terraform", tools: ["Terraform", "AWS", "GitHub Actions"] },
    { name: "Monitoring Dashboard", description: "Set up monitoring and alerting with Prometheus and Grafana", tools: ["Prometheus", "Grafana", "Node Exporter"] }
  ]
};

// Software Testing Data
export const softwareTestingCourse = {
  id: 4,
  slug: "software-testing",
  displayName: "Software Testing Training",
  title: "Software Testing Training",
  fullTitle: "Manual & Automation Testing",
  tagline: "Become a Quality Assurance Expert",
  description: "Learn manual and automation testing with Selenium, JUnit, and TestNG.",
  fullDescription: "Quality assurance is crucial in software development. Our software testing course covers both manual and automation testing methodologies. Master Selenium WebDriver, test frameworks, and testing best practices.",
  duration: "2.5 months",
  price: 24999,
  priceDisplay: "₹24,999",
  level: "Beginner",
  icon: "fas fa-bug",
  certification: "Software Testing Professional",
  careerPaths: ["QA Tester", "Automation Engineer", "Test Analyst", "SDET", "Test Lead"],
  features: [
    { title: "Manual Testing Concepts", description: "Learn SDLC, STLC, test case design", icon: "fas fa-clipboard-list" },
    { title: "Selenium WebDriver", description: "Automate web applications with Selenium", icon: "fas fa-globe" },
    { title: "TestNG & JUnit", description: "Framework for test automation", icon: "fas fa-vial" },
    { title: "API Testing", description: "Test REST APIs with Postman", icon: "fas fa-code-branch" },
    { title: "Database Testing", description: "Validate data integrity with SQL", icon: "fas fa-database" },
    { title: "Agile Methodology", description: "Work in Agile/Scrum environment", icon: "fas fa-users" }
  ],
  tools: ["Selenium", "TestNG", "JUnit", "Postman", "JIRA", "SQL", "Git"],
  salaryRange: "₹3.5 LPA - ₹12 LPA",
  jobRoles: ["QA Tester", "Automation Test Engineer", "SDET", "Test Analyst", "Quality Assurance Engineer"],
  syllabus: [
    { module: 1, title: "Software Testing Fundamentals", topics: ["SDLC & STLC", "Testing Principles", "Test Case Design", "Bug Life Cycle", "Test Plan & Strategy"] },
    { module: 2, title: "Manual Testing", topics: ["Functional Testing", "Non-Functional Testing", "Black Box Testing", "White Box Testing", "Regression Testing"] },
    { module: 3, title: "Selenium WebDriver", topics: ["Selenium Architecture", "Locators & Waits", "Handling Alerts & Frames", "Page Object Model", "Data-Driven Testing"] },
    { module: 4, title: "Test Frameworks", topics: ["TestNG Annotations", "Assertions", "TestNG XML Configuration", "Parallel Execution", "Reporting"] },
    { module: 5, title: "API Testing", topics: ["REST API Basics", "Postman Tool", "API Automation", "JSON & XML Validation", "Authentication"] },
    { module: 6, title: "Database Testing", topics: ["SQL Basics", "CRUD Operations", "Joins & Subqueries", "Data Validation", "Database Connectivity"] }
  ],
  projects: [
    { name: "E-Commerce Website Testing", description: "Test an e-commerce website using manual and automation testing", tools: ["Selenium", "TestNG", "Postman"] },
    { name: "API Test Automation Framework", description: "Build a framework for API testing", tools: ["Postman", "Newman", "JavaScript"] }
  ]
};

// Java Full Stack Data
export const javaFullStackCourse = {
  id: 5,
  slug: "java-full-stack",
  displayName: "Java Full Stack Training",
  title: "Java Full Stack Training",
  fullTitle: "Java Full Stack Development",
  tagline: "Become a Complete Java Developer",
  description: "Complete Java full stack development with Spring Boot, Hibernate, and React.",
  fullDescription: "Become a full stack Java developer. Master Java programming, Spring Boot for backend, React for frontend, and database integration. Build complete web applications from scratch.",
  duration: "5 months",
  price: 44999,
  priceDisplay: "₹44,999",
  level: "Beginner to Advanced",
  icon: "fab fa-java",
  certification: "Java Full Stack Developer",
  careerPaths: ["Java Developer", "Full Stack Developer", "Backend Developer", "Software Engineer"],
  features: [
    { title: "Core Java", description: "Master Java fundamentals and OOP concepts", icon: "fab fa-java" },
    { title: "Spring Boot", description: "Build enterprise applications with Spring Boot", icon: "fas fa-leaf" },
    { title: "Hibernate ORM", description: "Object-relational mapping with Hibernate", icon: "fas fa-database" },
    { title: "React.js", description: "Build modern frontend with React", icon: "fab fa-react" },
    { title: "REST API Development", description: "Create RESTful web services", icon: "fas fa-code-branch" },
    { title: "Database Integration", description: "Work with MySQL, PostgreSQL, MongoDB", icon: "fas fa-database" }
  ],
  tools: ["Java", "Spring Boot", "Hibernate", "React", "MySQL", "MongoDB", "Git", "Maven"],
  salaryRange: "₹6 LPA - ₹25 LPA",
  jobRoles: ["Java Developer", "Full Stack Developer", "Backend Developer", "Software Engineer"],
  syllabus: [
    { module: 1, title: "Core Java", topics: ["Java Basics", "OOP Concepts", "Collections Framework", "Exception Handling", "Multithreading"] },
    { module: 2, title: "Advanced Java", topics: ["JDBC", "Servlets & JSP", "Design Patterns", "Java 8 Features", "Lambdas & Streams"] },
    { module: 3, title: "Spring Framework", topics: ["Spring Core", "Spring MVC", "Spring Boot", "Spring Security", "Spring Data JPA"] },
    { module: 4, title: "Hibernate ORM", topics: ["Hibernate Architecture", "Entity Mapping", "Relationships", "HQL & Criteria API", "Caching"] },
    { module: 5, title: "React.js Frontend", topics: ["React Components", "Props & State", "Hooks", "React Router", "API Integration"] },
    { module: 6, title: "REST API & Microservices", topics: ["REST Principles", "Spring REST", "API Documentation", "Microservices Architecture"] }
  ],
  projects: [
    { name: "E-Learning Platform", description: "Build a complete e-learning platform with course management", tools: ["Spring Boot", "React", "MySQL"] },
    { name: "Employee Management System", description: "Create HR management system with authentication", tools: ["Spring Security", "Hibernate", "Thymeleaf"] }
  ]
};

// Python Full Stack Data
export const pythonFullStackCourse = {
  id: 6,
  slug: "python-full-stack",
  displayName: "Python Full Stack Training",
  title: "Python Full Stack Training",
  fullTitle: "Python Full Stack Development",
  tagline: "Become a Complete Python Developer",
  description: "Complete Python full stack development with Django, Flask, and React.",
  fullDescription: "Become a full stack Python developer. Master Python programming, Django and Flask for backend, React for frontend, and database integration.",
  duration: "5 months",
  price: 44999,
  priceDisplay: "₹44,999",
  level: "Beginner to Advanced",
  icon: "fab fa-python",
  certification: "Python Full Stack Developer",
  careerPaths: ["Python Developer", "Full Stack Developer", "Backend Developer", "Web Developer"],
  features: [
    { title: "Python Programming", description: "Master Python fundamentals and advanced concepts", icon: "fab fa-python" },
    { title: "Django Framework", description: "Build web applications with Django", icon: "fab fa-python" },
    { title: "Flask Framework", description: "Create REST APIs with Flask", icon: "fas fa-flask" },
    { title: "React.js Frontend", description: "Build modern UI with React", icon: "fab fa-react" },
    { title: "REST API Development", description: "Create RESTful web services", icon: "fas fa-code-branch" },
    { title: "Database Integration", description: "Work with PostgreSQL, MongoDB", icon: "fas fa-database" }
  ],
  tools: ["Python", "Django", "Flask", "React", "PostgreSQL", "MongoDB", "Git", "Docker"],
  salaryRange: "₹6 LPA - ₹24 LPA",
  jobRoles: ["Python Developer", "Full Stack Developer", "Backend Developer", "Web Developer"],
  syllabus: [
    { module: 1, title: "Python Programming", topics: ["Python Basics", "Data Structures", "Functions & Modules", "OOP Concepts", "File Handling"] },
    { module: 2, title: "Django Framework", topics: ["Django Architecture", "Models & Migrations", "Views & Templates", "URL Routing", "Authentication"] },
    { module: 3, title: "REST APIs with DRF", topics: ["Django REST Framework", "Serializers", "Views & ViewSets", "Authentication & Permissions"] },
    { module: 4, title: "Flask Framework", topics: ["Flask Basics", "Routing", "Templates", "Flask-RESTful", "Database with SQLAlchemy"] },
    { module: 5, title: "React.js Frontend", topics: ["React Components", "Props & State", "Hooks", "React Router", "API Integration"] }
  ],
  projects: [
    { name: "Social Media Platform", description: "Build a social media platform with Django and React", tools: ["Django", "React", "PostgreSQL"] },
    { name: "Task Management App", description: "Create a task management app with Flask and React", tools: ["Flask", "React", "MongoDB"] }
  ]
};

// Data Analytics Data
export const dataAnalyticsCourse = {
  id: 7,
  slug: "data-analytics",
  displayName: "Data Analytics Training",
  title: "Data Analytics Training",
  fullTitle: "Data Analytics Professional",
  tagline: "Transform Data into Insights",
  description: "Master Excel, SQL, Power BI, Tableau, and Python for data analysis.",
  fullDescription: "Data analytics is the future of business decision-making. Learn to extract insights from data using industry-standard tools. Master Excel formulas and functions, SQL queries, Power BI dashboards, Tableau visualizations, and Python analytics.",
  duration: "3 months",
  price: 32999,
  priceDisplay: "₹32,999",
  level: "Beginner",
  icon: "fas fa-chart-line",
  certification: "Data Analytics Professional",
  careerPaths: ["Data Analyst", "Business Analyst", "BI Analyst", "Data Visualization Specialist"],
  features: [
    { title: "Advanced Excel", description: "Master formulas, pivot tables, and dashboards", icon: "fas fa-file-excel" },
    { title: "SQL Queries", description: "Extract and manipulate data from databases", icon: "fas fa-database" },
    { title: "Power BI", description: "Create interactive dashboards", icon: "fas fa-chart-bar" },
    { title: "Tableau", description: "Build stunning visualizations", icon: "fas fa-chart-pie" },
    { title: "Python Analytics", description: "Use Pandas and NumPy for data analysis", icon: "fab fa-python" },
    { title: "Statistical Analysis", description: "Apply statistics to business problems", icon: "fas fa-chart-line" }
  ],
  tools: ["Excel", "SQL", "Power BI", "Tableau", "Python", "Pandas", "NumPy"],
  salaryRange: "₹4 LPA - ₹18 LPA",
  jobRoles: ["Data Analyst", "Business Analyst", "BI Analyst", "Reporting Analyst"],
  syllabus: [
    { module: 1, title: "Excel for Analytics", topics: ["Advanced Formulas", "Pivot Tables & Charts", "Power Query", "Dashboard Creation"] },
    { module: 2, title: "SQL for Data Analysis", topics: ["SQL Basics", "Joins & Subqueries", "Window Functions", "Query Optimization"] },
    { module: 3, title: "Power BI", topics: ["Power BI Desktop", "DAX Formulas", "Data Modeling", "Dashboard Design"] },
    { module: 4, title: "Tableau", topics: ["Tableau Interface", "Calculations", "Visual Analytics", "Dashboards & Stories"] },
    { module: 5, title: "Python for Analytics", topics: ["Pandas DataFrames", "Data Cleaning", "Data Visualization", "Statistical Analysis"] }
  ],
  projects: [
    { name: "Sales Dashboard", description: "Create an interactive sales dashboard in Power BI", tools: ["Power BI", "Excel", "SQL"] },
    { name: "Customer Segmentation", description: "Segment customers using Python and Tableau", tools: ["Python", "Tableau", "SQL"] }
  ]
};

// Microsoft Azure Data
export const azureCourse = {
  id: 8,
  slug: "microsoft-azure",
  displayName: "Microsoft Azure Training",
  title: "Microsoft Azure Training",
  fullTitle: "Microsoft Azure Cloud Training",
  tagline: "Master Microsoft Azure Cloud Platform",
  description: "Learn cloud computing with Microsoft Azure. Master Azure services and deployment.",
  fullDescription: "Microsoft Azure is a leading cloud platform. Learn to deploy, manage, and scale applications on Azure. Master virtual machines, containers, serverless computing, and Azure DevOps.",
  duration: "3 months",
  price: 32999,
  priceDisplay: "₹32,999",
  level: "Beginner to Advanced",
  icon: "fab fa-microsoft",
  certification: "Microsoft Azure Administrator",
  careerPaths: ["Azure Administrator", "Cloud Engineer", "DevOps Engineer", "Azure Solutions Architect"],
  features: [
    { title: "Azure Virtual Machines", description: "Deploy and manage VMs in Azure", icon: "fas fa-server" },
    { title: "Azure App Services", description: "Host web applications in Azure", icon: "fas fa-globe" },
    { title: "Azure Functions", description: "Build serverless applications", icon: "fas fa-code" },
    { title: "Azure Storage", description: "Manage cloud storage solutions", icon: "fas fa-database" },
    { title: "Azure DevOps", description: "Implement CI/CD pipelines", icon: "fas fa-sync-alt" },
    { title: "Azure Security", description: "Secure Azure resources", icon: "fas fa-shield-alt" }
  ],
  tools: ["Azure", "Docker", "Kubernetes", "Azure DevOps", "Terraform", "PowerShell"],
  salaryRange: "₹6 LPA - ₹28 LPA",
  jobRoles: ["Azure Administrator", "Cloud Engineer", "DevOps Engineer", "Azure Solutions Architect"],
  syllabus: [
    { module: 1, title: "Azure Fundamentals", topics: ["Cloud Concepts", "Azure Architecture", "Azure Portal", "Azure CLI"] },
    { module: 2, title: "Compute Services", topics: ["Azure Virtual Machines", "VM Scale Sets", "Azure App Services", "Azure Functions"] },
    { module: 3, title: "Storage Services", topics: ["Azure Blob Storage", "Azure Files", "Azure Disk Storage", "Storage Security"] },
    { module: 4, title: "Networking", topics: ["Azure Virtual Network", "Load Balancers", "Application Gateway", "VPN Gateway"] },
    { module: 5, title: "Azure DevOps", topics: ["Azure Repos", "Azure Pipelines", "Azure Boards", "Azure Artifacts"] },
    { module: 6, title: "Security & Identity", topics: ["Azure Active Directory", "RBAC", "Key Vault", "Azure Security Center"] }
  ],
  projects: [
    { name: "Web App Deployment", description: "Deploy a web application on Azure App Services", tools: ["Azure App Services", "Azure SQL", "Azure DevOps"] },
    { name: "Containerized Application", description: "Deploy containers on Azure Kubernetes Service", tools: ["AKS", "Docker", "Azure Container Registry"] }
  ]
};

// Export all courses for mapping
export const allCourses = {
  'aws-training': awsCourse,
  'python-training': pythonCourse,
  'devops-training': devopsCourse,
  'software-testing': softwareTestingCourse,
  'java-full-stack': javaFullStackCourse,
  'python-full-stack': pythonFullStackCourse,
  'data-analytics': dataAnalyticsCourse,
  'microsoft-azure': azureCourse,
};