export const syllabusPDFs: Record<string, string> = {
  'python-fullstack': '/pdfs/python-fullstack-syllabus.pdf',
  'data-analytics': '/pdfs/data-analytics-syllabus.pdf',
  'cloud-devops': '/pdfs/cloud-devops-syllabus.pdf',
  'software-testing': '/pdfs/software-testing-syllabus.pdf',
  'data-engineering': '/pdfs/data-engineering-syllabus.pdf',
  'data-science-ai': '/pdfs/data-science-ai-syllabus.pdf',
  'aws': '/pdfs/aws-syllabus.pdf',
  'python': '/pdfs/python-syllabus.pdf',
  'devops': '/pdfs/devops-syllabus.pdf',
  'java': '/pdfs/java-syllabus.pdf',
  'java-fullstack': '/pdfs/java-fullstack-syllabus.pdf',
  'azure': '/pdfs/azure-syllabus.pdf',
  'power-bi': '/pdfs/power-bi-syllabus.pdf',
  'react': '/pdfs/react-syllabus.pdf',
  'data-science': '/pdfs/data-science-syllabus.pdf',
  'digital-marketing': '/pdfs/digital-marketing-syllabus.pdf',
  'cybersecurity': '/pdfs/cybersecurity-syllabus.pdf',
};

// Syllabus Details for each course
export const syllabusDetails: Record<string, { modules: { title: string; topics: string[] }[] }> = {
  'python-fullstack': {
    modules: [
      { title: "Python Fundamentals", topics: ["Python Introduction & Setup", "Variables & Data Types", "Operators & Expressions", "Control Flow (if/else, loops)", "Functions & Modules", "Lambda Functions"] },
      { title: "Data Structures", topics: ["Lists & List Methods", "Tuples & Dictionaries", "Sets & Frozensets", "Strings & String Methods", "List Comprehension", "Generators & Iterators"] },
      { title: "Object Oriented Programming", topics: ["Classes & Objects", "Inheritance & Polymorphism", "Encapsulation & Abstraction", "Magic Methods", "Decorators & Properties", "Exception Handling"] },
      { title: "Database with SQL", topics: ["SQL Basics (SELECT, INSERT, UPDATE, DELETE)", "Joins & Subqueries", "Indexes & Views", "Stored Procedures", "Database Design", "SQL Optimization"] },
      { title: "Django Framework", topics: ["Django Setup & Architecture", "Models & Migrations", "Views & URL Routing", "Templates & Static Files", "Forms & Validation", "Django REST Framework"] },
      { title: "React.js Frontend", topics: ["React Components & JSX", "Props & State", "Hooks (useState, useEffect)", "Event Handling", "API Integration", "React Router & Deployment"] }
    ]
  },
  'data-analytics': {
    modules: [
      { title: "Excel & Advanced Excel", topics: ["Excel Basics & Formulas", "Pivot Tables & Charts", "VLOOKUP & HLOOKUP", "Data Validation", "Conditional Formatting", "Macros & VBA"] },
      { title: "SQL for Data Analysis", topics: ["SQL Fundamentals", "Complex Queries", "Window Functions", "CTEs & Subqueries", "Data Aggregation", "Performance Optimization"] },
      { title: "Power BI", topics: ["Power BI Desktop", "Data Modeling", "DAX Formulas", "Visualizations", "Dashboards & Reports", "Power BI Service"] },
      { title: "Tableau", topics: ["Tableau Basics", "Data Connections", "Calculations", "Charts & Graphs", "Dashboards", "Storytelling with Data"] },
      { title: "Python for Analytics", topics: ["Pandas for Data Manipulation", "NumPy for Numerical Computing", "Data Visualization (Matplotlib, Seaborn)", "Exploratory Data Analysis", "Statistical Analysis"] }
    ]
  },
  'cloud-devops': {
    modules: [
      { title: "Linux Administration", topics: ["Linux Commands", "File System Management", "User & Group Management", "Shell Scripting", "Process Management", "Network Configuration"] },
      { title: "AWS Cloud Services", topics: ["EC2 & EBS", "S3 Storage", "VPC Networking", "IAM Security", "Load Balancers", "Auto Scaling"] },
      { title: "Docker Containerization", topics: ["Docker Architecture", "Dockerfile & Images", "Container Management", "Docker Compose", "Docker Networking", "Container Registry"] },
      { title: "Kubernetes Orchestration", topics: ["K8s Architecture", "Pods & Services", "Deployments & ReplicaSets", "ConfigMaps & Secrets", "Ingress & Networking", "Helm Charts"] },
      { title: "CI/CD with Jenkins", topics: ["Jenkins Setup", "Pipeline as Code", "Integration with Git", "Build & Test Automation", "Deployment Strategies", "Monitoring & Logging"] },
      { title: "Infrastructure as Code", topics: ["Terraform Basics", "AWS Provider", "Modules & Variables", "State Management", "Remote Backends", "IaC Best Practices"] }
    ]
  },
  'software-testing': {
    modules: [
      { title: "Manual Testing", topics: ["SDLC & STLC", "Test Case Design", "Bug Life Cycle", "Test Planning", "Agile Testing", "Test Management Tools"] },
      { title: "Selenium WebDriver", topics: ["Selenium Architecture", "Locators & Waits", "WebDriver Commands", "Handling Alerts & Windows", "Page Object Model", "Data-Driven Testing"] },
      { title: "TestNG & Frameworks", topics: ["TestNG Annotations", "Assertions", "Test Suites", "Parameterization", "Report Generation", "Framework Design"] },
      { title: "API Testing", topics: ["REST API Basics", "Postman Tool", "API Automation", "JSON/XML Validation", "Authentication", "Performance Testing"] },
      { title: "Database Testing", topics: ["SQL Queries", "Data Validation", "Stored Procedures Testing", "Database Integrity", "Backend Testing"] }
    ]
  },
  'data-science-ai': {
    modules: [
      { title: "Python for Data Science", topics: ["NumPy Arrays", "Pandas DataFrames", "Data Cleaning", "Data Visualization", "Exploratory Data Analysis"] },
      { title: "Machine Learning", topics: ["Supervised Learning", "Linear Regression", "Classification Algorithms", "Decision Trees", "Random Forest", "Model Evaluation"] },
      { title: "Advanced ML", topics: ["Unsupervised Learning", "Clustering (K-Means, DBSCAN)", "PCA & Dimensionality Reduction", "Ensemble Methods", "XGBoost"] },
      { title: "Deep Learning", topics: ["Neural Networks", "TensorFlow & Keras", "CNN for Image Processing", "RNN/LSTM for Sequences", "Transfer Learning"] },
      { title: "NLP & Generative AI", topics: ["Text Preprocessing", "Sentiment Analysis", "Transformers", "LLM Fine-tuning", "Prompt Engineering", "RAG Implementation"] }
    ]
  },
  'data-engineering': {
    modules: [
      { title: "Advanced SQL", topics: ["Complex Queries", "Query Optimization", "Window Functions", "Stored Procedures", "ETL Design"] },
      { title: "Python for Data Engineering", topics: ["Python Scripting", "File Processing", "API Integration", "Data Pipelines", "Error Handling"] },
      { title: "Apache Spark", topics: ["Spark Architecture", "RDD & DataFrames", "Spark SQL", "Spark Streaming", "Performance Tuning"] },
      { title: "Apache Kafka", topics: ["Kafka Architecture", "Producers & Consumers", "Topics & Partitions", "Stream Processing", "Kafka Connect"] },
      { title: "Cloud Data Platforms", topics: ["AWS Glue", "AWS Redshift", "Google BigQuery", "Azure Synapse", "Data Lake Architecture"] }
    ]
  },
  'aws': {
    modules: [
      { title: "AWS Fundamentals", topics: ["AWS Global Infrastructure", "IAM Users & Roles", "EC2 Instances", "EBS Volumes", "Load Balancing", "Auto Scaling"] },
      { title: "Storage Services", topics: ["S3 Buckets", "S3 Lifecycle Policies", "Glacier Storage", "EFS", "Storage Gateway"] },
      { title: "Networking", topics: ["VPC Design", "Subnets & Route Tables", "Security Groups & NACLs", "VPN & Direct Connect", "Route53 DNS"] },
      { title: "Database Services", topics: ["RDS", "DynamoDB", "Redshift", "Aurora", "ElastiCache"] },
      { title: "DevOps on AWS", topics: ["CodeCommit", "CodeBuild", "CodeDeploy", "CodePipeline", "CloudFormation", "Elastic Beanstalk"] }
    ]
  },
  'python': {
    modules: [
      { title: "Python Basics", topics: ["Variables & Data Types", "Operators", "Strings & String Methods", "Lists & Tuples", "Dictionaries & Sets"] },
      { title: "Control Flow", topics: ["If-Else Statements", "For Loops", "While Loops", "Break & Continue", "List Comprehension"] },
      { title: "Functions & Modules", topics: ["Function Definition", "Arguments & Return", "Lambda Functions", "Built-in Functions", "Custom Modules"] },
      { title: "File Handling", topics: ["Reading Files", "Writing Files", "CSV Processing", "JSON Processing", "Exception Handling"] },
      { title: "OOP Concepts", topics: ["Classes & Objects", "Inheritance", "Polymorphism", "Encapsulation", "Magic Methods"] }
    ]
  },
  'java': {
    modules: [
      { title: "Java Basics", topics: ["JVM Architecture", "Data Types & Variables", "Operators", "Control Statements", "Arrays"] },
      { title: "OOP in Java", topics: ["Classes & Objects", "Inheritance", "Polymorphism", "Abstraction", "Encapsulation", "Interfaces"] },
      { title: "Exception Handling", topics: ["Try-Catch Blocks", "Checked vs Unchecked", "Custom Exceptions", "Finally Block", "Throw & Throws"] },
      { title: "Collections Framework", topics: ["ArrayList", "LinkedList", "HashSet", "HashMap", "Queue & Stack", "Comparators"] },
      { title: "Multithreading", topics: ["Thread Creation", "Thread Lifecycle", "Synchronization", "Executor Service", "Concurrent Collections"] }
    ]
  },
  'java-fullstack': {
    modules: [
      { title: "Core Java", topics: ["OOP Concepts", "Collections", "Multithreading", "JDBC", "Exception Handling"] },
      { title: "Spring Framework", topics: ["Spring Core", "Spring MVC", "Spring Boot", "Dependency Injection", "AOP"] },
      { title: "Spring Boot", topics: ["Auto Configuration", "REST APIs", "Spring Data JPA", "Spring Security", "Microservices"] },
      { title: "Hibernate", topics: ["ORM Mapping", "HQL", "Caching", "Transactions", "Entity Relationships"] },
      { title: "React.js Frontend", topics: ["React Components", "State & Props", "Hooks", "API Integration", "React Router"] }
    ]
  },
  'azure': {
    modules: [
      { title: "Azure Fundamentals", topics: ["Azure Portal", "Resource Groups", "Virtual Machines", "Storage Accounts", "Networking"] },
      { title: "Azure Compute", topics: ["App Services", "Functions", "Container Instances", "AKS", "VM Scale Sets"] },
      { title: "Azure Storage", topics: ["Blob Storage", "File Storage", "Queue Storage", "Table Storage", "Data Lake"] },
      { title: "Azure DevOps", topics: ["Azure Boards", "Azure Repos", "Azure Pipelines", "Azure Test Plans", "Azure Artifacts"] },
      { title: "Azure Security", topics: ["Azure AD", "Role-Based Access", "Key Vault", "Security Center", "Sentinel"] }
    ]
  },
  'power-bi': {
    modules: [
      { title: "Power BI Desktop", topics: ["Data Connection", "Data Transformation", "Data Modeling", "DAX Basics", "Visualizations"] },
      { title: "DAX Formulas", topics: ["Calculated Columns", "Measures", "Time Intelligence", "Filter Functions", "Aggregation Functions"] },
      { title: "Dashboard Design", topics: ["Report Design", "Interactive Dashboards", "Bookmarks & Buttons", "Drill-through", "Mobile View"] },
      { title: "Power BI Service", topics: ["Workspaces", "Sharing & Collaboration", "Scheduled Refresh", "Data Gateway", "Row-Level Security"] }
    ]
  },
  'react': {
    modules: [
      { title: "React Fundamentals", topics: ["JSX", "Components (Class & Functional)", "Props & State", "Event Handling", "Conditional Rendering"] },
      { title: "Hooks", topics: ["useState", "useEffect", "useContext", "useReducer", "useRef", "Custom Hooks"] },
      { title: "State Management", topics: ["Context API", "Redux", "Redux Toolkit", "Zustand", "State Persistence"] },
      { title: "React Router", topics: ["Route Setup", "Nested Routes", "Navigation", "Protected Routes", "Lazy Loading"] },
      { title: "API Integration", topics: ["Fetch API", "Axios", "Error Handling", "Loading States", "Data Caching"] }
    ]
  },
  'digital-marketing': {
    modules: [
      { title: "SEO Fundamentals", topics: ["On-Page SEO", "Off-Page SEO", "Keyword Research", "Link Building", "Technical SEO"] },
      { title: "Social Media Marketing", topics: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "Twitter Marketing", "Content Strategy"] },
      { title: "Google Ads", topics: ["Search Ads", "Display Ads", "Video Ads", "Shopping Ads", "Remarketing"] },
      { title: "Email Marketing", topics: ["Campaign Setup", "List Building", "Automation", "A/B Testing", "Analytics"] },
      { title: "Analytics", topics: ["Google Analytics", "Conversion Tracking", "Data Studio", "Performance Reports", "ROI Analysis"] }
    ]
  },
  'cybersecurity': {
    modules: [
      { title: "Network Security", topics: ["Firewalls", "IDS/IPS", "VPN", "Network Monitoring", "Packet Analysis"] },
      { title: "Ethical Hacking", topics: ["Reconnaissance", "Scanning", "Exploitation", "Post-Exploitation", "Reporting"] },
      { title: "Cryptography", topics: ["Encryption Algorithms", "PKI", "SSL/TLS", "Digital Signatures", "Hash Functions"] },
      { title: "Security Auditing", topics: ["Risk Assessment", "Vulnerability Scanning", "Penetration Testing", "Compliance", "Audit Reporting"] },
      { title: "Incident Response", topics: ["Incident Handling", "Forensics", "Malware Analysis", "Disaster Recovery", "Business Continuity"] }
    ]
  }
};

// Default syllabus for courses without specific details
export const defaultSyllabus = {
  modules: [
    { title: "Introduction to the Course", topics: ["Course Overview", "Learning Objectives", "Industry Applications", "Tools Setup", "Career Path"] },
    { title: "Core Concepts", topics: ["Fundamentals", "Key Terminology", "Best Practices", "Common Use Cases", "Hands-on Exercise"] },
    { title: "Advanced Topics", topics: ["Advanced Techniques", "Optimization Strategies", "Real-world Scenarios", "Case Studies", "Project Work"] },
    { title: "Practical Implementation", topics: ["Project Planning", "Implementation Guide", "Testing & Debugging", "Deployment", "Portfolio Building"] },
    { title: "Career Preparation", topics: ["Resume Building", "Interview Questions", "Mock Interviews", "Certification Guide", "Job Search Strategy"] }
  ]
};

// કોર્સ મેપિંગ - બધા કોર્સ
export const courseMapping = {
  // AWS & Cloud DevOps
  'aws-training-course': { 
    slug: 'aws-training-course', 
    name: 'AWS Training', 
    fullName: 'AWS & Cloud DevOps Training',
    icon: 'fab fa-aws', 
    color: 'blue',
    image: '/images/courses/aws-hero.webp',
    bannerImage: '/images/courses/aws-banner.webp',
    logo: '/images/courses/aws-logo.webp',
    shortDesc: 'Master AWS cloud computing, Linux, Docker, Kubernetes, Jenkins, and DevOps practices.',
    features: ['AWS Cloud Services', 'Linux Administration', 'Docker Containers', 'Kubernetes', 'Jenkins CI/CD', 'Terraform IaC']
  },
  'aws': { 
    slug: 'aws-training-course', 
    name: 'AWS Training', 
    fullName: 'AWS & Cloud DevOps Training',
    icon: 'fab fa-aws', 
    color: 'blue',
    image: '/images/courses/aws-hero.webp',
    bannerImage: '/images/courses/aws-banner.webp',
    logo: '/images/courses/aws-logo.webp',
    shortDesc: 'Master AWS cloud computing, Linux, Docker, Kubernetes, Jenkins, and DevOps practices.',
    features: ['AWS Cloud Services', 'Linux Administration', 'Docker Containers', 'Kubernetes', 'Jenkins CI/CD', 'Terraform IaC']
  },
  
  // Python Training
  'python-training-course': { 
    slug: 'python-training-course', 
    name: 'Python Training', 
    fullName: 'Python Training Program',
    icon: 'fab fa-python', 
    color: 'yellow',
    image: '/images/courses/python-hero.webp',
    bannerImage: '/images/courses/python-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Python programming from basics to advanced with real-world projects and applications.',
    features: ['Python Basics', 'Object Oriented Programming', 'Data Structures', 'File Handling', 'Modules & Packages', 'Web Development']
  },
  'python': { 
    slug: 'python-training-course', 
    name: 'Python Training', 
    fullName: 'Python Training Program',
    icon: 'fab fa-python', 
    color: 'yellow',
    image: '/images/courses/python-hero.webp',
    bannerImage: '/images/courses/python-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Python programming from basics to advanced with real-world projects and applications.',
    features: ['Python Basics', 'Object Oriented Programming', 'Data Structures', 'File Handling', 'Modules & Packages', 'Web Development']
  },
  
  // Python Full Stack Training
  'python-fullstack-training-course': { 
    slug: 'python-fullstack-training-course', 
    name: 'Python Full Stack Training', 
    fullName: 'Python Full Stack Development',
    icon: 'fab fa-python', 
    color: 'yellow',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Python, Django, React, and full-stack web development.',
    features: ['Python Programming', 'Django Framework', 'React.js', 'REST APIs', 'Database Design', 'Deployment']
  },
  'python-fullstack': { 
    slug: 'python-fullstack-training-course', 
    name: 'Python Full Stack Training', 
    fullName: 'Python Full Stack Development',
    icon: 'fab fa-python', 
    color: 'yellow',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Python, Django, React, and full-stack web development.',
    features: ['Python Programming', 'Django Framework', 'React.js', 'REST APIs', 'Database Design', 'Deployment']
  },
  
  // Full Stack Training Aliases
  'full-stack-training-course': { 
    slug: 'full-stack-training-course', 
    name: 'Full Stack Development Training', 
    fullName: 'Full Stack Web Development Certification',
    icon: 'fas fa-code', 
    color: 'blue',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Frontend, Backend API Engineering, Databases, Cloud DevOps & Git with 100% Placement Assistance.',
    features: ['Python, React & Node', '15+ Yrs Mentors', '3 Live Capstone Projects', '100% Placement Call Guarantee']
  },
  'full-stack': { 
    slug: 'full-stack-training-course', 
    name: 'Full Stack Development Training', 
    fullName: 'Full Stack Web Development Certification',
    icon: 'fas fa-code', 
    color: 'blue',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Frontend, Backend API Engineering, Databases, Cloud DevOps & Git with 100% Placement Assistance.',
    features: ['Python, React & Node', '15+ Yrs Mentors', '3 Live Capstone Projects', '100% Placement Call Guarantee']
  },
  'fullstack': { 
    slug: 'full-stack-training-course', 
    name: 'Full Stack Development Training', 
    fullName: 'Full Stack Web Development Certification',
    icon: 'fas fa-code', 
    color: 'blue',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Frontend, Backend API Engineering, Databases, Cloud DevOps & Git with 100% Placement Assistance.',
    features: ['Python, React & Node', '15+ Yrs Mentors', '3 Live Capstone Projects', '100% Placement Call Guarantee']
  },
  
  // DevOps Training
  'devops': { 
    slug: 'cloud-devops', 
    name: 'DevOps Training', 
    fullName: 'DevOps Training Program',
    icon: 'fas fa-cogs', 
    color: 'blue',
    image: '/images/courses/aws-hero.webp',
    bannerImage: '/images/courses/aws-banner.webp',
    logo: '/images/courses/aws-logo.webp',
    shortDesc: 'Master DevOps practices including CI/CD, Docker, Kubernetes, Jenkins, and automation tools.',
    features: ['CI/CD Pipelines', 'Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Prometheus & Grafana']
  },
  
  // Software Testing Training
  'software-testing': { 
    slug: 'software-testing', 
    name: 'Software Testing Training', 
    fullName: 'Software Testing Master Program',
    icon: 'fas fa-bug', 
    color: 'red',
    image: '/images/courses/testing-hero.webp',
    bannerImage: '/images/courses/testing-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master manual and automation testing with Selenium, Java, Python, and API testing.',
    features: ['Manual Testing', 'Selenium WebDriver', 'TestNG Framework', 'API Testing', 'Database Testing', 'Agile Methodology']
  },
  
  // Java Training
  'java': { 
    slug: 'python-fullstack', 
    name: 'Java Training', 
    fullName: 'Java Programming Training',
    icon: 'fab fa-java', 
    color: 'orange',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Java programming, OOP concepts, and application development.',
    features: ['Core Java', 'OOP Concepts', 'Exception Handling', 'Collections Framework', 'Multithreading', 'JDBC']
  },
  
  // Java Full Stack Training
  'java-fullstack': { 
    slug: 'python-fullstack', 
    name: 'Java Full Stack Training', 
    fullName: 'Java Full Stack Development',
    icon: 'fab fa-java', 
    color: 'orange',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Java, Spring Boot, Hibernate, React, and full-stack development.',
    features: ['Core Java', 'Spring Boot', 'Hibernate', 'React.js', 'REST APIs', 'Database Management', 'Microservices']
  },
  
  // Data Analytics Training
  'data-analytics-training-course': { 
    slug: 'data-analytics-training-course', 
    name: 'Data Analytics Training', 
    fullName: 'Data Analytics Certification Program',
    icon: 'fas fa-chart-line', 
    color: 'green',
    image: '/images/courses/analytics-hero.webp',
    bannerImage: '/images/courses/analytics-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Excel, SQL, Power BI, Tableau, and Python for data analysis with 100% Placement Assistance.',
    features: ['Excel & Advanced Excel', 'SQL Queries & Joins', 'Power BI Dashboards', 'Tableau Visualizations', 'Python for Analytics', '100% Placement Support']
  },
  'data-analytics': { 
    slug: 'data-analytics-training-course', 
    name: 'Data Analytics Training', 
    fullName: 'Data Analytics Program',
    icon: 'fas fa-chart-line', 
    color: 'green',
    image: '/images/courses/analytics-hero.webp',
    bannerImage: '/images/courses/analytics-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Excel, SQL, Power BI, Tableau, and Python for data analysis.',
    features: ['Excel & Advanced Excel', 'SQL Queries', 'Power BI Dashboards', 'Tableau Visualizations', 'Python for Analytics', 'Statistical Analysis']
  },
  
  // Microsoft Azure Training
  'azure': { 
    slug: 'cloud-devops', 
    name: 'Microsoft Azure Training', 
    fullName: 'Microsoft Azure Training Program',
    icon: 'fab fa-microsoft', 
    color: 'blue',
    image: '/images/courses/aws-hero.webp',
    bannerImage: '/images/courses/aws-banner.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Microsoft Azure cloud services, virtual machines, networking, and DevOps.',
    features: ['Azure Virtual Machines', 'Azure Storage', 'Azure Networking', 'Azure DevOps', 'Azure Functions', 'Azure Kubernetes Service']
  },
  
  // Data Science Training
  'data-science': { 
    slug: 'data-science-ai', 
    name: 'Data Science Training', 
    fullName: 'Data Science with AI Program',
    icon: 'fas fa-brain', 
    color: 'purple',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master machine learning, deep learning, NLP, and AI with Python.',
    features: ['Python for Data Science', 'Machine Learning Algorithms', 'Deep Learning', 'NLP', 'Computer Vision', 'Model Deployment']
  },
  
  // Data Engineering Training
  'data-engineering': { 
    slug: 'data-engineering', 
    name: 'Data Engineering Training', 
    fullName: 'Data Engineering Program',
    icon: 'fas fa-database', 
    color: 'teal',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master SQL, Python, Spark, Kafka, and cloud data platforms.',
    features: ['Advanced SQL', 'Python for Data Engineering', 'Apache Spark', 'Apache Kafka', 'Data Warehousing', 'Cloud Data Platforms']
  },
  
  // Power BI Training
  'power-bi': { 
    slug: 'data-analytics', 
    name: 'Power BI Training', 
    fullName: 'Power BI Training Program',
    icon: 'fas fa-chart-bar', 
    color: 'green',
    image: '/images/courses/analytics-hero.webp',
    bannerImage: '/images/courses/analytics-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Power BI, DAX, data visualization, and business intelligence.',
    features: ['Power BI Desktop', 'DAX Formulas', 'Data Modeling', 'Dashboard Design', 'Power BI Service', 'Report Publishing']
  },
  
  // Digital Marketing Training
  'digital-marketing': { 
    slug: 'digital-marketing', 
    name: 'Digital Marketing Training', 
    fullName: 'Digital Marketing Program',
    icon: 'fas fa-bullhorn', 
    color: 'orange',
    image: '/images/courses/placeholder-hero.webp',
    bannerImage: '/images/courses/placeholder-banner.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master SEO, Social Media Marketing, Google Ads, and digital marketing strategies.',
    features: ['Search Engine Optimization', 'Social Media Marketing', 'Google Ads', 'Email Marketing', 'Content Marketing', 'Analytics']
  },
  
  // Cybersecurity Training
  'cybersecurity': { 
    slug: 'cybersecurity', 
    name: 'Cybersecurity Training', 
    fullName: 'Cybersecurity Program',
    icon: 'fas fa-shield-alt', 
    color: 'red',
    image: '/images/courses/placeholder-hero.webp',
    bannerImage: '/images/courses/placeholder-banner.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master network security, ethical hacking, cryptography, and security best practices.',
    features: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Security Auditing', 'Risk Management', 'Incident Response']
  },
  
  // React JS Training
  'react': { 
    slug: 'react', 
    name: 'React JS Training', 
    fullName: 'React JS Development',
    icon: 'fab fa-react', 
    color: 'blue',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master React.js, hooks, state management, and modern frontend development.',
    features: ['React Basics', 'Hooks', 'State Management', 'React Router', 'API Integration', 'Deployment']
  }
};
