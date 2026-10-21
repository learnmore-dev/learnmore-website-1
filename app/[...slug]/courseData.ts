export const syllabusPDFs: Record<string, string> = {
  'python-fullstack': '/pdfs/python-fullstack-syllabus.pdf',
  'data-analytics': '/pdfs/data-analytics-syllabus.pdf',
  'cloud-devops': '/pdfs/cloud-devops-syllabus.pdf',
  'software-testing': '/pdfs/software-testing-syllabus.pdf',
  'data-engineering': '/pdfs/data-engineering-syllabus.pdf',
  'data-engineering-training-course': '/pdfs/data-engineering-syllabus.pdf',
  'data-science-ai': '/pdfs/data-science-ai-syllabus.pdf',
  'aws': '/pdfs/aws-syllabus.pdf',
  'python': '/pdfs/python-syllabus.pdf',
  'devops': '/pdfs/devops-syllabus.pdf',
  'java': '/pdfs/java-syllabus.pdf',
  'java-fullstack': '/pdfs/java-fullstack-syllabus.pdf',
  'azure': '/pdfs/azure-syllabus.pdf',
  'azure-training-course': '/pdfs/azure-syllabus.pdf',
  'power-bi': '/pdfs/power-bi-syllabus.pdf',
  'power-bi-training-course': '/pdfs/power-bi-syllabus.pdf',
  'powerbi': '/pdfs/power-bi-syllabus.pdf',
  'react': '/pdfs/react-syllabus.pdf',
  'react-training-course': '/pdfs/react-syllabus.pdf',
  'reactjs': '/pdfs/react-syllabus.pdf',
  'data-science': '/pdfs/data-science-syllabus.pdf',
  'data-science-training-course': '/pdfs/data-science-syllabus.pdf',
  'digital-marketing': '/pdfs/digital-marketing-syllabus.pdf',
  'digital-marketing-training-course': '/pdfs/digital-marketing-syllabus.pdf',
  'cybersecurity': '/pdfs/cybersecurity-syllabus.pdf',
  'cybersecurity-training-course': '/pdfs/cybersecurity-syllabus.pdf',
  'agentic-ai': '/pdfs/agentic-ai-syllabus.pdf',
  'agentic-ai-training-course': '/pdfs/agentic-ai-syllabus.pdf',
  'generative-ai': '/pdfs/generative-ai-syllabus.pdf',
  'generative-ai-training-course': '/pdfs/generative-ai-syllabus.pdf',
  'genai': '/pdfs/generative-ai-syllabus.pdf',
  'snowflake': '/pdfs/snowflake-syllabus.pdf',
  'snowflake-training-course': '/pdfs/snowflake-syllabus.pdf',
  'dbt': '/pdfs/dbt-syllabus.pdf',
  'dbt-training-course': '/pdfs/dbt-syllabus.pdf',
  'anthropic': '/pdfs/anthropic-syllabus.pdf',
  'anthropic-training-course': '/pdfs/anthropic-syllabus.pdf',
  'claude': '/pdfs/anthropic-syllabus.pdf',
  'sap': '/pdfs/sap-syllabus.pdf',
  'sap-training-course': '/pdfs/sap-syllabus.pdf',
  'aiml-engineering': '/pdfs/aiml-engineering-syllabus.pdf',
  'aiml-engineering-training-course': '/pdfs/aiml-engineering-syllabus.pdf',
  'mobile-app-development': '/pdfs/mobile-app-development-syllabus.pdf',
  'mobile-app-development-training-course': '/pdfs/mobile-app-development-syllabus.pdf',
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
      { title: "Applied Statistics & Probability", topics: ["Descriptive Statistics", "Inferential Testing", "Hypothesis & P-Values", "ANOVA & Chi-Square", "A/B Testing"] },
      { title: "Machine Learning Algorithms", topics: ["Supervised & Unsupervised Learning", "Linear & Logistic Regression", "Decision Trees & Random Forests", "XGBoost & LightGBM", "Model Evaluation"] },
      { title: "Deep Learning & Computer Vision", topics: ["Neural Networks & Backpropagation", "TensorFlow & Keras", "CNNs & Transfer Learning", "Object Detection (YOLOv8)", "PyTorch Basics"] },
      { title: "NLP & Generative AI", topics: ["Text Preprocessing & TF-IDF", "Transformers & BERT", "Large Language Models (LLMs)", "LangChain & Vector DBs", "RAG Pipeline Implementation"] },
      { title: "MLOps & Model Deployment", topics: ["FastAPI Microservices", "Docker Containers", "Streamlit UI", "Model Monitoring", "Capstone Projects"] }
    ]
  },
  'data-science': {
    modules: [
      { title: "Python for Data Science", topics: ["NumPy Arrays", "Pandas DataFrames", "Data Cleaning", "Data Visualization", "Exploratory Data Analysis"] },
      { title: "Applied Statistics & Probability", topics: ["Descriptive Statistics", "Inferential Testing", "Hypothesis & P-Values", "ANOVA & Chi-Square", "A/B Testing"] },
      { title: "Machine Learning Algorithms", topics: ["Supervised & Unsupervised Learning", "Linear & Logistic Regression", "Decision Trees & Random Forests", "XGBoost & LightGBM", "Model Evaluation"] },
      { title: "Deep Learning & Computer Vision", topics: ["Neural Networks & Backpropagation", "TensorFlow & Keras", "CNNs & Transfer Learning", "Object Detection (YOLOv8)", "PyTorch Basics"] },
      { title: "NLP & Generative AI", topics: ["Text Preprocessing & TF-IDF", "Transformers & BERT", "Large Language Models (LLMs)", "LangChain & Vector DBs", "RAG Pipeline Implementation"] },
      { title: "MLOps & Model Deployment", topics: ["FastAPI Microservices", "Docker Containers", "Streamlit UI", "Model Monitoring", "Capstone Projects"] }
    ]
  },
  'data-science-training-course': {
    modules: [
      { title: "Python for Data Science", topics: ["NumPy Arrays", "Pandas DataFrames", "Data Cleaning", "Data Visualization", "Exploratory Data Analysis"] },
      { title: "Applied Statistics & Probability", topics: ["Descriptive Statistics", "Inferential Testing", "Hypothesis & P-Values", "ANOVA & Chi-Square", "A/B Testing"] },
      { title: "Machine Learning Algorithms", topics: ["Supervised & Unsupervised Learning", "Linear & Logistic Regression", "Decision Trees & Random Forests", "XGBoost & LightGBM", "Model Evaluation"] },
      { title: "Deep Learning & Computer Vision", topics: ["Neural Networks & Backpropagation", "TensorFlow & Keras", "CNNs & Transfer Learning", "Object Detection (YOLOv8)", "PyTorch Basics"] },
      { title: "NLP & Generative AI", topics: ["Text Preprocessing & TF-IDF", "Transformers & BERT", "Large Language Models (LLMs)", "LangChain & Vector DBs", "RAG Pipeline Implementation"] },
      { title: "MLOps & Model Deployment", topics: ["FastAPI Microservices", "Docker Containers", "Streamlit UI", "Model Monitoring", "Capstone Projects"] }
    ]
  },
  'data-engineering': {
    modules: [
      { title: "Advanced SQL & Dimensional Modeling", topics: ["Advanced SQL & Window Functions", "OLTP vs OLAP Architecture", "Star & Snowflake Schema Design", "Slowly Changing Dimensions (SCD Type 1/2/3)", "Query Optimization & Partitioning"] },
      { title: "Python for Data Engineering & ETL", topics: ["Python for Large File Formats (Parquet/Avro/ORC)", "API Ingestion & Webhooks", "SQLAlchemy & JDBC Connectivity", "Schema Enforcement & Great Expectations", "Automated ETL Pipelines"] },
      { title: "Apache Spark & PySpark", topics: ["Spark Architecture (Driver/Executors)", "PySpark DataFrames & Catalyst Optimizer", "Spark SQL & Window Aggregations", "Performance Tuning & Data Skew Handling", "Spark Structured Streaming"] },
      { title: "Apache Kafka Real-Time Streaming", topics: ["Kafka Brokers, Topics & Partitions", "Consumer Groups & Exactly-Once Delivery", "Kafka Connect (Source & Sink)", "Schema Registry & Avro", "Kafka + PySpark Integration"] },
      { title: "Orchestration & Cloud Lakehouses", topics: ["Apache Airflow DAGs & Operators", "Delta Lake & Apache Iceberg ACID Formats", "Snowflake Virtual Warehouses & Snowpipe", "AWS Redshift & GCP BigQuery", "Lakehouse Architecture"] },
      { title: "CI/CD, MLOps & Capstone Projects", topics: ["dbt Transformations & Testing", "Docker & Terraform for Data Pipelines", "CI/CD with GitHub Actions", "System Design & Mock Technical Interviews", "Capstone Real-Time Streaming Project"] }
    ]
  },
  'data-engineering-training-course': {
    modules: [
      { title: "Advanced SQL & Dimensional Modeling", topics: ["Advanced SQL & Window Functions", "OLTP vs OLAP Architecture", "Star & Snowflake Schema Design", "Slowly Changing Dimensions (SCD Type 1/2/3)", "Query Optimization & Partitioning"] },
      { title: "Python for Data Engineering & ETL", topics: ["Python for Large File Formats (Parquet/Avro/ORC)", "API Ingestion & Webhooks", "SQLAlchemy & JDBC Connectivity", "Schema Enforcement & Great Expectations", "Automated ETL Pipelines"] },
      { title: "Apache Spark & PySpark", topics: ["Spark Architecture (Driver/Executors)", "PySpark DataFrames & Catalyst Optimizer", "Spark SQL & Window Aggregations", "Performance Tuning & Data Skew Handling", "Spark Structured Streaming"] },
      { title: "Apache Kafka Real-Time Streaming", topics: ["Kafka Brokers, Topics & Partitions", "Consumer Groups & Exactly-Once Delivery", "Kafka Connect (Source & Sink)", "Schema Registry & Avro", "Kafka + PySpark Integration"] },
      { title: "Orchestration & Cloud Lakehouses", topics: ["Apache Airflow DAGs & Operators", "Delta Lake & Apache Iceberg ACID Formats", "Snowflake Virtual Warehouses & Snowpipe", "AWS Redshift & GCP BigQuery", "Lakehouse Architecture"] },
      { title: "CI/CD, MLOps & Capstone Projects", topics: ["dbt Transformations & Testing", "Docker & Terraform for Data Pipelines", "CI/CD with GitHub Actions", "System Design & Mock Technical Interviews", "Capstone Real-Time Streaming Project"] }
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
      { title: "Cloud Fundamentals & Entra ID (Azure AD)", topics: ["Azure Global Infrastructure", "Cloud Shell & CLI Setup", "Microsoft Entra ID", "RBAC & PIM Governance", "Subscriptions & Resource Groups", "Billing & Cost Alerts"] },
      { title: "Azure Compute & Scalability", topics: ["Virtual Machines (Windows/Linux)", "Virtual Machine Scale Sets (VMSS)", "Azure App Services", "Container Instances (ACI)", "Azure Kubernetes Service (AKS)", "Serverless Functions"] },
      { title: "Azure Storage Architecture", topics: ["Storage Accounts & Redundancy (LRS/GRS/ZRS)", "Blob Storage Tiers & Lifecycles", "Azure Files & File Sync", "Managed Disks & Snapshots", "Backup & Recovery Vaults", "SAS Tokens & Security"] },
      { title: "Virtual Networking & Security", topics: ["VNet Architecture & Subnets", "Network Security Groups (NSGs)", "Azure Bastion Host", "VNet Peering & Hub-Spoke", "Load Balancer & App Gateway WAF", "VPN Gateway & ExpressRoute"] },
      { title: "Azure Databases & Cache", topics: ["Azure SQL Database & Managed Instances", "Geo-Replication & Failover Groups", "Azure Cosmos DB NoSQL", "Azure Cache for Redis", "Database Migration Service (DMS)", "Data Lake Integration"] },
      { title: "Azure DevOps & IaC Automation", topics: ["ARM Templates & Bicep IaC", "Terraform for Azure", "Azure Repos & CI/CD Pipelines", "Azure Monitor & Log Analytics", "Azure Key Vault", "AZ-104 & AZ-305 Exam Preparation"] }
    ]
  },
  'azure-training-course': {
    modules: [
      { title: "Cloud Fundamentals & Entra ID (Azure AD)", topics: ["Azure Global Infrastructure", "Cloud Shell & CLI Setup", "Microsoft Entra ID", "RBAC & PIM Governance", "Subscriptions & Resource Groups", "Billing & Cost Alerts"] },
      { title: "Azure Compute & Scalability", topics: ["Virtual Machines (Windows/Linux)", "Virtual Machine Scale Sets (VMSS)", "Azure App Services", "Container Instances (ACI)", "Azure Kubernetes Service (AKS)", "Serverless Functions"] },
      { title: "Azure Storage Architecture", topics: ["Storage Accounts & Redundancy (LRS/GRS/ZRS)", "Blob Storage Tiers & Lifecycles", "Azure Files & File Sync", "Managed Disks & Snapshots", "Backup & Recovery Vaults", "SAS Tokens & Security"] },
      { title: "Virtual Networking & Security", topics: ["VNet Architecture & Subnets", "Network Security Groups (NSGs)", "Azure Bastion Host", "VNet Peering & Hub-Spoke", "Load Balancer & App Gateway WAF", "VPN Gateway & ExpressRoute"] },
      { title: "Azure Databases & Cache", topics: ["Azure SQL Database & Managed Instances", "Geo-Replication & Failover Groups", "Azure Cosmos DB NoSQL", "Azure Cache for Redis", "Database Migration Service (DMS)", "Data Lake Integration"] },
      { title: "Azure DevOps & IaC Automation", topics: ["ARM Templates & Bicep IaC", "Terraform for Azure", "Azure Repos & CI/CD Pipelines", "Azure Monitor & Log Analytics", "Azure Key Vault", "AZ-104 & AZ-305 Exam Preparation"] }
    ]
  },
  'power-bi': {
    modules: [
      { title: "Power BI Fundamentals & Data Extraction", topics: ["BI Lifecycle & Power BI Architecture", "Power BI Desktop Interface", "Connecting to Excel, CSV, SQL & APIs", "Building Quick Interactive Reports"] },
      { title: "Power Query (ETL) & M Language", topics: ["Data Cleansing & Transformation", "Splitting, Merging, Pivoting & Unpivoting", "Custom & Conditional Columns", "Introduction to M Language Scripting"] },
      { title: "Data Modeling & Star Schema", topics: ["Fact & Dimension Table Design", "Relationships & Cardinality (1:1, 1:Many)", "Active vs Inactive Relationships", "Date Dimensions & Performance Optimization"] },
      { title: "DAX Formulas Mastery", topics: ["Calculated Columns vs Measures", "Aggregation & Logical Functions", "CALCULATE, FILTER & ALL Functions", "Time Intelligence (YTD, MTD, YoY Variance)"] },
      { title: "Advanced Visualizations & Storytelling", topics: ["Interactive Dashboards & Custom Tooltips", "Bookmarks, Selection Panes & Navigation", "Decomposition Tree & AI Key Influencers", "Mobile Responsive Layout Design"] },
      { title: "Power BI Service, Security & PL-300", topics: ["Publishing to Cloud Workspaces", "On-Premises Gateways & Scheduled Refresh", "Row-Level Security (Static & Dynamic RLS)", "Microsoft PL-300 Certification Preparation"] }
    ]
  },
  'power-bi-training-course': {
    modules: [
      { title: "Power BI Fundamentals & Data Extraction", topics: ["BI Lifecycle & Power BI Architecture", "Power BI Desktop Interface", "Connecting to Excel, CSV, SQL & APIs", "Building Quick Interactive Reports"] },
      { title: "Power Query (ETL) & M Language", topics: ["Data Cleansing & Transformation", "Splitting, Merging, Pivoting & Unpivoting", "Custom & Conditional Columns", "Introduction to M Language Scripting"] },
      { title: "Data Modeling & Star Schema", topics: ["Fact & Dimension Table Design", "Relationships & Cardinality (1:1, 1:Many)", "Active vs Inactive Relationships", "Date Dimensions & Performance Optimization"] },
      { title: "DAX Formulas Mastery", topics: ["Calculated Columns vs Measures", "Aggregation & Logical Functions", "CALCULATE, FILTER & ALL Functions", "Time Intelligence (YTD, MTD, YoY Variance)"] },
      { title: "Advanced Visualizations & Storytelling", topics: ["Interactive Dashboards & Custom Tooltips", "Bookmarks, Selection Panes & Navigation", "Decomposition Tree & AI Key Influencers", "Mobile Responsive Layout Design"] },
      { title: "Power BI Service, Security & PL-300", topics: ["Publishing to Cloud Workspaces", "On-Premises Gateways & Scheduled Refresh", "Row-Level Security (Static & Dynamic RLS)", "Microsoft PL-300 Certification Preparation"] }
    ]
  },
  'powerbi': {
    modules: [
      { title: "Power BI Fundamentals & Data Extraction", topics: ["BI Lifecycle & Power BI Architecture", "Power BI Desktop Interface", "Connecting to Excel, CSV, SQL & APIs", "Building Quick Interactive Reports"] },
      { title: "Power Query (ETL) & M Language", topics: ["Data Cleansing & Transformation", "Splitting, Merging, Pivoting & Unpivoting", "Custom & Conditional Columns", "Introduction to M Language Scripting"] },
      { title: "Data Modeling & Star Schema", topics: ["Fact & Dimension Table Design", "Relationships & Cardinality (1:1, 1:Many)", "Active vs Inactive Relationships", "Date Dimensions & Performance Optimization"] },
      { title: "DAX Formulas Mastery", topics: ["Calculated Columns vs Measures", "Aggregation & Logical Functions", "CALCULATE, FILTER & ALL Functions", "Time Intelligence (YTD, MTD, YoY Variance)"] },
      { title: "Advanced Visualizations & Storytelling", topics: ["Interactive Dashboards & Custom Tooltips", "Bookmarks, Selection Panes & Navigation", "Decomposition Tree & AI Key Influencers", "Mobile Responsive Layout Design"] },
      { title: "Power BI Service, Security & PL-300", topics: ["Publishing to Cloud Workspaces", "On-Premises Gateways & Scheduled Refresh", "Row-Level Security (Static & Dynamic RLS)", "Microsoft PL-300 Certification Preparation"] }
    ]
  },
  'react': {
    modules: [
      { title: "Modern JavaScript (ES6+) & TypeScript", topics: ["ES6+ Syntax (Arrow Functions, Destructuring, Spread/Rest)", "Promises, Async/Await & Event Loop", "TypeScript Types, Interfaces & Generics", "Modern Tooling with Vite & NPM"] },
      { title: "React Core Fundamentals & JSX", topics: ["Virtual DOM & Component Lifecycle", "Functional Components & JSX Architecture", "Props, State & Event Handling", "Forms, Controlled Components & Lists/Keys"] },
      { title: "Hooks & Custom Hooks Mastery", topics: ["useState & useEffect Deep Dive", "useRef, useMemo & useCallback Optimization", "useReducer for Complex Logic", "Creating Reusable Custom Hooks & Context API"] },
      { title: "Global State with Redux Toolkit", topics: ["Redux Store, Slices & Dispatches", "Async Thunks & RTK Query Caching", "Zustand Lightweight State Management", "Building Full Cart & Checkout States"] },
      { title: "Routing & Next.js Full Stack", topics: ["React Router DOM Dynamic & Protected Routes", "Next.js App Router & Server Components", "SSR, SSG & Static Optimizations", "Tailwind CSS & Framer Motion UI"] },
      { title: "Testing, CI/CD & Capstone Projects", topics: ["Jest & React Testing Library (RTL)", "API Mocking with MSW", "Vercel & Cloud Deployment", "Frontend System Design & Machine Coding Prep"] }
    ]
  },
  'react-training-course': {
    modules: [
      { title: "Modern JavaScript (ES6+) & TypeScript", topics: ["ES6+ Syntax (Arrow Functions, Destructuring, Spread/Rest)", "Promises, Async/Await & Event Loop", "TypeScript Types, Interfaces & Generics", "Modern Tooling with Vite & NPM"] },
      { title: "React Core Fundamentals & JSX", topics: ["Virtual DOM & Component Lifecycle", "Functional Components & JSX Architecture", "Props, State & Event Handling", "Forms, Controlled Components & Lists/Keys"] },
      { title: "Hooks & Custom Hooks Mastery", topics: ["useState & useEffect Deep Dive", "useRef, useMemo & useCallback Optimization", "useReducer for Complex Logic", "Creating Reusable Custom Hooks & Context API"] },
      { title: "Global State with Redux Toolkit", topics: ["Redux Store, Slices & Dispatches", "Async Thunks & RTK Query Caching", "Zustand Lightweight State Management", "Building Full Cart & Checkout States"] },
      { title: "Routing & Next.js Full Stack", topics: ["React Router DOM Dynamic & Protected Routes", "Next.js App Router & Server Components", "SSR, SSG & Static Optimizations", "Tailwind CSS & Framer Motion UI"] },
      { title: "Testing, CI/CD & Capstone Projects", topics: ["Jest & React Testing Library (RTL)", "API Mocking with MSW", "Vercel & Cloud Deployment", "Frontend System Design & Machine Coding Prep"] }
    ]
  },
  'reactjs': {
    modules: [
      { title: "Modern JavaScript (ES6+) & TypeScript", topics: ["ES6+ Syntax (Arrow Functions, Destructuring, Spread/Rest)", "Promises, Async/Await & Event Loop", "TypeScript Types, Interfaces & Generics", "Modern Tooling with Vite & NPM"] },
      { title: "React Core Fundamentals & JSX", topics: ["Virtual DOM & Component Lifecycle", "Functional Components & JSX Architecture", "Props, State & Event Handling", "Forms, Controlled Components & Lists/Keys"] },
      { title: "Hooks & Custom Hooks Mastery", topics: ["useState & useEffect Deep Dive", "useRef, useMemo & useCallback Optimization", "useReducer for Complex Logic", "Creating Reusable Custom Hooks & Context API"] },
      { title: "Global State with Redux Toolkit", topics: ["Redux Store, Slices & Dispatches", "Async Thunks & RTK Query Caching", "Zustand Lightweight State Management", "Building Full Cart & Checkout States"] },
      { title: "Routing & Next.js Full Stack", topics: ["React Router DOM Dynamic & Protected Routes", "Next.js App Router & Server Components", "SSR, SSG & Static Optimizations", "Tailwind CSS & Framer Motion UI"] },
      { title: "Testing, CI/CD & Capstone Projects", topics: ["Jest & React Testing Library (RTL)", "API Mocking with MSW", "Vercel & Cloud Deployment", "Frontend System Design & Machine Coding Prep"] }
    ]
  },
  'digital-marketing': {
    modules: [
      { title: "SEO Mastery & Technical Optimization", topics: ["Keyword Intent Research & Competitor Gap Analysis", "On-Page SEO (Meta Tags, Schema Markup, Content)", "Technical SEO (Core Web Vitals, Crawlability, Sitemaps)", "Off-Page SEO & High-Authority Backlink Strategies"] },
      { title: "Google Ads (PPC) & SEM Strategies", topics: ["Search, Display, Video & Shopping Campaigns", "Bidding Strategies (tCPA, Target ROAS, Maximize Conversions)", "Ad Copywriting, Quality Score & Ad Extensions", "Conversion Tracking & Remarketing Funnels"] },
      { title: "Meta Ads & Social Media Marketing", topics: ["Facebook & Instagram Ad Architecture", "Custom Audiences, Lookalikes & Meta Pixel Setup", "LinkedIn B2B Lead Gen & YouTube Video Ads", "Social Media Content Calendar & Viral Growth Framework"] },
      { title: "Content Marketing & Copywriting", topics: ["High-Converting Copywriting Formulas (AIDA, PAS)", "Blog Strategy & Editorial Calendar", "Email Automation & Drip Marketing (Mailchimp/Klaviyo)", "Lead Magnets & Landing Page Funnel Design"] },
      { title: "GA4, GTM & Performance Analytics", topics: ["Google Analytics 4 (GA4) Setup & Custom Events", "Google Tag Manager (GTM) Container Configuration", "Looker Studio Interactive KPI Dashboards", "CAC, LTV, ROAS & ROI Attribution Modeling"] },
      { title: "AI in Marketing & Capstone Live Campaigns", topics: ["ChatGPT, Midjourney & AI Copywriting Workflows", "Programmatic SEO & Automated Content Systems", "Live Campaign Execution with Real Ad Spend Budget", "Google & Meta Certifications + Placement Prep"] }
    ]
  },
  'digital-marketing-training-course': {
    modules: [
      { title: "SEO Mastery & Technical Optimization", topics: ["Keyword Intent Research & Competitor Gap Analysis", "On-Page SEO (Meta Tags, Schema Markup, Content)", "Technical SEO (Core Web Vitals, Crawlability, Sitemaps)", "Off-Page SEO & High-Authority Backlink Strategies"] },
      { title: "Google Ads (PPC) & SEM Strategies", topics: ["Search, Display, Video & Shopping Campaigns", "Bidding Strategies (tCPA, Target ROAS, Maximize Conversions)", "Ad Copywriting, Quality Score & Ad Extensions", "Conversion Tracking & Remarketing Funnels"] },
      { title: "Meta Ads & Social Media Marketing", topics: ["Facebook & Instagram Ad Architecture", "Custom Audiences, Lookalikes & Meta Pixel Setup", "LinkedIn B2B Lead Gen & YouTube Video Ads", "Social Media Content Calendar & Viral Growth Framework"] },
      { title: "Content Marketing & Copywriting", topics: ["High-Converting Copywriting Formulas (AIDA, PAS)", "Blog Strategy & Editorial Calendar", "Email Automation & Drip Marketing (Mailchimp/Klaviyo)", "Lead Magnets & Landing Page Funnel Design"] },
      { title: "GA4, GTM & Performance Analytics", topics: ["Google Analytics 4 (GA4) Setup & Custom Events", "Google Tag Manager (GTM) Container Configuration", "Looker Studio Interactive KPI Dashboards", "CAC, LTV, ROAS & ROI Attribution Modeling"] },
      { title: "AI in Marketing & Capstone Live Campaigns", topics: ["ChatGPT, Midjourney & AI Copywriting Workflows", "Programmatic SEO & Automated Content Systems", "Live Campaign Execution with Real Ad Spend Budget", "Google & Meta Certifications + Placement Prep"] }
    ]
  },
  'cybersecurity': {
    modules: [
      { title: "Networking, Linux & Security Fundamentals", topics: ["OSI & TCP/IP Model Deep-Dive, Packet Flow & Protocols", "Linux System Administration for Ethical Hackers & Bash Scripting", "Firewalls (iptables, pfSense), Routing & Network Topologies", "VPNs, Proxies, Tor Networks & Anonymous Architectures"] },
      { title: "Ethical Hacking & Penetration Testing", topics: ["Information Gathering, OSINT (Recon-ng, Shodan, Maltego)", "Port Scanning & Vulnerability Assessment with Nmap & Nessus", "System Exploitation with Metasploit Framework & Payloads", "Privilege Escalation (Windows & Linux) & Maintaining Access"] },
      { title: "Web Application Security & OWASP Top 10", topics: ["OWASP Top 10 Vulnerabilities (SQLi, XSS, CSRF, SSRF, IDOR)", "Web App Pentesting with Burp Suite Pro & OWASP ZAP", "API Security Testing (REST / GraphQL) & Auth Bypass", "Secure Code Review, Input Validation & WAF Setup"] },
      { title: "SOC Operations, SIEM & Threat Hunting", topics: ["SOC Tier 1 & Tier 2 Roles, Alert Triaging & Kill Chain", "Splunk & QRadar SIEM: Log Ingestion, SPL & Dashboards", "Threat Intelligence (MITRE ATT&CK Framework, STIX/TAXII)", "Endpoint Detection & Response (EDR) with CrowdStrike"] },
      { title: "Cryptography, Cloud Security & IAM", topics: ["Symmetric vs Asymmetric Encryption (AES, RSA) & Hashing", "PKI Infrastructure, SSL/TLS Handshake & Certificates", "AWS & Azure Cloud Security: IAM Policies, GuardDuty & Vaults", "Zero Trust Security Architecture & Identity Governance"] },
      { title: "Incident Response, Forensics & Certifications", topics: ["NIST Incident Handling Lifecycle (Detection, Containment)", "Memory Forensics with Volatility & Disk Forensics (Autopsy)", "Malware Analysis Basics (Static & Dynamic Sandboxing)", "CEH v12, CompTIA Security+ & Cisco CyberOps Mock Exams"] }
    ]
  },
  'cybersecurity-training-course': {
    modules: [
      { title: "Networking, Linux & Security Fundamentals", topics: ["OSI & TCP/IP Model Deep-Dive, Packet Flow & Protocols", "Linux System Administration for Ethical Hackers & Bash Scripting", "Firewalls (iptables, pfSense), Routing & Network Topologies", "VPNs, Proxies, Tor Networks & Anonymous Architectures"] },
      { title: "Ethical Hacking & Penetration Testing", topics: ["Information Gathering, OSINT (Recon-ng, Shodan, Maltego)", "Port Scanning & Vulnerability Assessment with Nmap & Nessus", "System Exploitation with Metasploit Framework & Payloads", "Privilege Escalation (Windows & Linux) & Maintaining Access"] },
      { title: "Web Application Security & OWASP Top 10", topics: ["OWASP Top 10 Vulnerabilities (SQLi, XSS, CSRF, SSRF, IDOR)", "Web App Pentesting with Burp Suite Pro & OWASP ZAP", "API Security Testing (REST / GraphQL) & Auth Bypass", "Secure Code Review, Input Validation & WAF Setup"] },
      { title: "SOC Operations, SIEM & Threat Hunting", topics: ["SOC Tier 1 & Tier 2 Roles, Alert Triaging & Kill Chain", "Splunk & QRadar SIEM: Log Ingestion, SPL & Dashboards", "Threat Intelligence (MITRE ATT&CK Framework, STIX/TAXII)", "Endpoint Detection & Response (EDR) with CrowdStrike"] },
      { title: "Cryptography, Cloud Security & IAM", topics: ["Symmetric vs Asymmetric Encryption (AES, RSA) & Hashing", "PKI Infrastructure, SSL/TLS Handshake & Certificates", "AWS & Azure Cloud Security: IAM Policies, GuardDuty & Vaults", "Zero Trust Security Architecture & Identity Governance"] },
      { title: "Incident Response, Forensics & Certifications", topics: ["NIST Incident Handling Lifecycle (Detection, Containment)", "Memory Forensics with Volatility & Disk Forensics (Autopsy)", "Malware Analysis Basics (Static & Dynamic Sandboxing)", "CEH v12, CompTIA Security+ & Cisco CyberOps Mock Exams"] }
    ]
  },
  'agentic-ai': {
    modules: [
      { title: "GenAI Foundations & LLM Architecture Mastery", topics: ["Transformers Deep-Dive (Self-Attention, KV Cache & Context Windows)", "GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro & DeepSeek Analysis", "Advanced Prompt Engineering (CoT, ToT, ReAct Framework)", "Structured Outputs with Pydantic & Instructor"] },
      { title: "Autonomous Agent Fundamentals & Tool Calling", topics: ["Anatomy of an AI Agent: Brain, Memory, Planning & Tools", "Function Calling & Dynamic Tool Execution across LLMs", "Building Web Search, SQL, Code Sandbox & API Calling Agents", "Self-Reflection, Error Correction & Plan-and-Solve Loops"] },
      { title: "Multi-Agent Orchestration with CrewAI & AutoGen", topics: ["CrewAI Architecture: Agents, Tasks, Tools & Process Flows", "Role-Playing Crews, Hierarchical Delegation & Entity Memory", "Microsoft AutoGen: Conversable Agents & GroupChatManager", "Inter-Agent Collaboration & Multi-Turn Problem Solving"] },
      { title: "Graph-Based Stateful Agents with LangGraph", topics: ["LangGraph Core: StateGraph, Nodes, Edges & Cyclic Routing", "Persistent State Storage with PostgreSQL Checkpointers", "Human-in-the-Loop (HITL) Approval Workflows & Time Travel", "Complex Supervisor & Multi-Turn Conversational Architectures"] },
      { title: "Agentic RAG, Vector Search & Memory Systems", topics: ["Traditional RAG vs Agentic RAG (Query Routing, Self-RAG, HyDE)", "Vector Databases (Pinecone, ChromaDB) & Hybrid Dense/Sparse Search", "Long-Term Memory Management & Semantic Caching Strategies", "Multi-Modal Agentic RAG with Vision Models & Chart Parsing"] },
      { title: "Agent Deployment, Evaluation (LangSmith) & Capstones", topics: ["LLM Observability, Prompt Tracing & Cost Tracking with LangSmith", "Agent Evaluation Benchmarks (G-Eval, ROUGE & Custom Assertions)", "Containerization & FastAPI Deployment with Docker & Cloud Sandboxes", "Enterprise AI Capstone Systems & AI Engineering Placement Prep"] }
    ]
  },
  'agentic-ai-training-course': {
    modules: [
      { title: "GenAI Foundations & LLM Architecture Mastery", topics: ["Transformers Deep-Dive (Self-Attention, KV Cache & Context Windows)", "GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro & DeepSeek Analysis", "Advanced Prompt Engineering (CoT, ToT, ReAct Framework)", "Structured Outputs with Pydantic & Instructor"] },
      { title: "Autonomous Agent Fundamentals & Tool Calling", topics: ["Anatomy of an AI Agent: Brain, Memory, Planning & Tools", "Function Calling & Dynamic Tool Execution across LLMs", "Building Web Search, SQL, Code Sandbox & API Calling Agents", "Self-Reflection, Error Correction & Plan-and-Solve Loops"] },
      { title: "Multi-Agent Orchestration with CrewAI & AutoGen", topics: ["CrewAI Architecture: Agents, Tasks, Tools & Process Flows", "Role-Playing Crews, Hierarchical Delegation & Entity Memory", "Microsoft AutoGen: Conversable Agents & GroupChatManager", "Inter-Agent Collaboration & Multi-Turn Problem Solving"] },
      { title: "Graph-Based Stateful Agents with LangGraph", topics: ["LangGraph Core: StateGraph, Nodes, Edges & Cyclic Routing", "Persistent State Storage with PostgreSQL Checkpointers", "Human-in-the-Loop (HITL) Approval Workflows & Time Travel", "Complex Supervisor & Multi-Turn Conversational Architectures"] },
      { title: "Agentic RAG, Vector Search & Memory Systems", topics: ["Traditional RAG vs Agentic RAG (Query Routing, Self-RAG, HyDE)", "Vector Databases (Pinecone, ChromaDB) & Hybrid Dense/Sparse Search", "Long-Term Memory Management & Semantic Caching Strategies", "Multi-Modal Agentic RAG with Vision Models & Chart Parsing"] },
      { title: "Agent Deployment, Evaluation (LangSmith) & Capstones", topics: ["LLM Observability, Prompt Tracing & Cost Tracking with LangSmith", "Agent Evaluation Benchmarks (G-Eval, ROUGE & Custom Assertions)", "Containerization & FastAPI Deployment with Docker & Cloud Sandboxes", "Enterprise AI Capstone Systems & AI Engineering Placement Prep"] }
    ]
  },
  'generative-ai': {
    modules: [
      { title: "Module 1: Foundations of Generative AI & Transformer Architecture", topics: ["Evolution of AI: Discriminative vs Generative Models", "Transformer Deep-Dive: Self-Attention & Multi-Head Attention", "LLM Paradigms: GPT-4o, Claude 3.5, Gemini & Llama 3", "Tokenizer Algorithms, Embeddings & Latent Space", "Prompt Engineering: Zero-shot, Few-shot, CoT & Tree-of-Thought"] },
      { title: "Module 2: Building LLM Apps with LangChain & LlamaIndex", topics: ["LangChain Prompts, Chains, Output Parsers & Memory Modules", "LlamaIndex Document Loaders, Node Parsers & Index Structures", "Building Custom Tools & Structured Output Generation", "Conversational Chatbots with Persistent Context & History", "Streaming LLM Responses with SSE & WebSockets"] },
      { title: "Module 3: Retrieval-Augmented Generation (RAG) Architectures", topics: ["RAG Pipeline Design: Chunking Strategies & Embedding Models", "Vector Databases: Pinecone, ChromaDB, Weaviate & Qdrant", "Similarity Metrics (Cosine, Dot Product) & Hybrid Search", "Advanced RAG: Context Compression, Sentence Window & Parent Document", "Re-ranking Techniques with Cohere ReRank & Cross-Encoders"] },
      { title: "Module 4: Open-Source LLMs & PEFT / LoRA Fine-Tuning", topics: ["Hugging Face Transformers, Datasets & Quantization (GGUF, AWQ, GPTQ)", "Open-Source Models: Llama 3, Mistral, Qwen & Gemma Setup", "Fine-Tuning Strategies: Full vs Parameter-Efficient Fine-Tuning (PEFT)", "LoRA & QLoRA Quantized Fine-Tuning on Custom Datasets", "Loss Tracking with Weights & Biases & Benchmark Evaluation"] },
      { title: "Module 5: Multimodal GenAI, Image Generation & Guardrails", topics: ["Multimodal LLMs: GPT-4 Vision, Claude Vision & LLaVA", "Image Generation Models: Stable Diffusion, ControlNet & ComfyUI", "AI Safety, Alignment & RLHF (Reinforcement Learning from Human Feedback)", "Implementing Safety Guardrails (NeMo Guardrails, Llama Guard)", "Semantic Caching with GPTCache & Token Cost Optimization"] },
      { title: "Module 6: Capstone Project, Production Deployment & Career Prep", topics: ["Deploying LLMs with vLLM, Ollama, TensorRT-LLM & FastAPI", "Containerizing GenAI Apps with Docker & AWS SageMaker", "Enterprise Generative AI Portfolio & GitHub Showcase", "Mock Technical Interviews & System Design for GenAI", "100% Placement Support with 300+ Partner Companies"] }
    ]
  },
  'generative-ai-training-course': {
    modules: [
      { title: "Module 1: Foundations of Generative AI & Transformer Architecture", topics: ["Evolution of AI: Discriminative vs Generative Models", "Transformer Deep-Dive: Self-Attention & Multi-Head Attention", "LLM Paradigms: GPT-4o, Claude 3.5, Gemini & Llama 3", "Tokenizer Algorithms, Embeddings & Latent Space", "Prompt Engineering: Zero-shot, Few-shot, CoT & Tree-of-Thought"] },
      { title: "Module 2: Building LLM Apps with LangChain & LlamaIndex", topics: ["LangChain Prompts, Chains, Output Parsers & Memory Modules", "LlamaIndex Document Loaders, Node Parsers & Index Structures", "Building Custom Tools & Structured Output Generation", "Conversational Chatbots with Persistent Context & History", "Streaming LLM Responses with SSE & WebSockets"] },
      { title: "Module 3: Retrieval-Augmented Generation (RAG) Architectures", topics: ["RAG Pipeline Design: Chunking Strategies & Embedding Models", "Vector Databases: Pinecone, ChromaDB, Weaviate & Qdrant", "Similarity Metrics (Cosine, Dot Product) & Hybrid Search", "Advanced RAG: Context Compression, Sentence Window & Parent Document", "Re-ranking Techniques with Cohere ReRank & Cross-Encoders"] },
      { title: "Module 4: Open-Source LLMs & PEFT / LoRA Fine-Tuning", topics: ["Hugging Face Transformers, Datasets & Quantization (GGUF, AWQ, GPTQ)", "Open-Source Models: Llama 3, Mistral, Qwen & Gemma Setup", "Fine-Tuning Strategies: Full vs Parameter-Efficient Fine-Tuning (PEFT)", "LoRA & QLoRA Quantized Fine-Tuning on Custom Datasets", "Loss Tracking with Weights & Biases & Benchmark Evaluation"] },
      { title: "Module 5: Multimodal GenAI, Image Generation & Guardrails", topics: ["Multimodal LLMs: GPT-4 Vision, Claude Vision & LLaVA", "Image Generation Models: Stable Diffusion, ControlNet & ComfyUI", "AI Safety, Alignment & RLHF (Reinforcement Learning from Human Feedback)", "Implementing Safety Guardrails (NeMo Guardrails, Llama Guard)", "Semantic Caching with GPTCache & Token Cost Optimization"] },
      { title: "Module 6: Capstone Project, Production Deployment & Career Prep", topics: ["Deploying LLMs with vLLM, Ollama, TensorRT-LLM & FastAPI", "Containerizing GenAI Apps with Docker & AWS SageMaker", "Enterprise Generative AI Portfolio & GitHub Showcase", "Mock Technical Interviews & System Design for GenAI", "100% Placement Support with 300+ Partner Companies"] }
    ]
  },
  'snowflake': {
    modules: [
      { title: "Module 1: Snowflake Architecture & Cloud Fundamentals", topics: ["Snowflake Tri-Layer Architecture: Storage, Virtual Warehouse Compute & Cloud Services", "Snowsight Modern Web Interface & SnowSQL CLI Configuration", "Virtual Warehouses: Sizing, Scaling Policies, Multi-Cluster Warehouses & Resource Monitors", "Databases, Schemas, Internal/External/Temporary/Transient Tables", "Semi-Structured Data Handling: VARIANT, OBJECT, ARRAY & JSON Path Queries"] },
      { title: "Module 2: Bulk & Continuous Data Loading (Snowpipe)", topics: ["Staging: Internal (User, Table, Named) & External Stages (AWS S3, Azure Blob, GCP GCS)", "Bulk Loading with COPY INTO Command, File Formats & Error Validation Options", "JSON/Parquet/Avro Ingestion & FLATTEN Functions for Semi-Structured Parsing", "Continuous Ingestion with Snowpipe & Cloud Storage Event Notifications (SQS/SNS)", "Data Unloading: Exporting Structured Datasets to Cloud Object Storage"] },
      { title: "Module 3: Continuous Data Protection, Security & Governance", topics: ["Continuous Data Protection (CDP): Time Travel & Fail-safe Architecture", "Zero-Copy Cloning: Cloning Databases, Schemas & Tables with Zero Added Storage Cost", "Access Control: Role-Based Access Control (RBAC), Custom Roles & Hierarchy", "Data Governance: Column-Level Dynamic Data Masking & Row Access Policies", "Secure Data Sharing: Direct Shares, Reader Accounts & Snowflake Marketplace"] },
      { title: "Module 4: Change Data Capture (CDC) with Streams & Tasks", topics: ["Snowflake Streams: Standard, Append-only Streams & CDC Metadata Tracking", "Snowflake Tasks: Scheduling SQL Operations, CRON Scheduling & Task DAGs", "Building Automated Serverless ELT Pipelines with Streams + Tasks", "Stored Procedures (JavaScript, Python, SQL) & User-Defined Functions (UDFs)", "Task Error Notifications, Alerts & Pipeline Monitoring Best Practices"] },
      { title: "Module 5: Snowpark Python & High-Performance Optimization", topics: ["Introduction to Snowpark: Snowpark Python API & DataFrame Operations", "Pushdown Compute: Executing Python Analytics natively on Snowflake Warehouses", "Writing Vectorized UDFs & Snowpark Stored Procedures for Data Engineering", "Micro-partitions, Data Clustering Keys & Avoiding Partition Skew", "Query Profile Deep-Dive, Result/Metadata Caching & Warehouse Cost Optimization"] },
      { title: "Module 6: Capstone Project, SnowPro Core Certification & Placements", topics: ["SnowPro Core (COF-C02) Certification Practice Exams & Question Breakdown", "Integrating Snowflake with dbt (Dataform), Power BI, Tableau & Python", "Enterprise Cloud Data Warehouse Architecture Design Review", "Resume Optimization, GitHub Data Engineering Portfolio & Mock Interviews", "100% Dedicated Placement Assistance with 300+ Partner Companies"] }
    ]
  },
  'snowflake-training-course': {
    modules: [
      { title: "Module 1: Snowflake Architecture & Cloud Fundamentals", topics: ["Snowflake Tri-Layer Architecture: Storage, Virtual Warehouse Compute & Cloud Services", "Snowsight Modern Web Interface & SnowSQL CLI Configuration", "Virtual Warehouses: Sizing, Scaling Policies, Multi-Cluster Warehouses & Resource Monitors", "Databases, Schemas, Internal/External/Temporary/Transient Tables", "Semi-Structured Data Handling: VARIANT, OBJECT, ARRAY & JSON Path Queries"] },
      { title: "Module 2: Bulk & Continuous Data Loading (Snowpipe)", topics: ["Staging: Internal (User, Table, Named) & External Stages (AWS S3, Azure Blob, GCP GCS)", "Bulk Loading with COPY INTO Command, File Formats & Error Validation Options", "JSON/Parquet/Avro Ingestion & FLATTEN Functions for Semi-Structured Parsing", "Continuous Ingestion with Snowpipe & Cloud Storage Event Notifications (SQS/SNS)", "Data Unloading: Exporting Structured Datasets to Cloud Object Storage"] },
      { title: "Module 3: Continuous Data Protection, Security & Governance", topics: ["Continuous Data Protection (CDP): Time Travel & Fail-safe Architecture", "Zero-Copy Cloning: Cloning Databases, Schemas & Tables with Zero Added Storage Cost", "Access Control: Role-Based Access Control (RBAC), Custom Roles & Hierarchy", "Data Governance: Column-Level Dynamic Data Masking & Row Access Policies", "Secure Data Sharing: Direct Shares, Reader Accounts & Snowflake Marketplace"] },
      { title: "Module 4: Change Data Capture (CDC) with Streams & Tasks", topics: ["Snowflake Streams: Standard, Append-only Streams & CDC Metadata Tracking", "Snowflake Tasks: Scheduling SQL Operations, CRON Scheduling & Task DAGs", "Building Automated Serverless ELT Pipelines with Streams + Tasks", "Stored Procedures (JavaScript, Python, SQL) & User-Defined Functions (UDFs)", "Task Error Notifications, Alerts & Pipeline Monitoring Best Practices"] },
      { title: "Module 5: Snowpark Python & High-Performance Optimization", topics: ["Introduction to Snowpark: Snowpark Python API & DataFrame Operations", "Pushdown Compute: Executing Python Analytics natively on Snowflake Warehouses", "Writing Vectorized UDFs & Snowpark Stored Procedures for Data Engineering", "Micro-partitions, Data Clustering Keys & Avoiding Partition Skew", "Query Profile Deep-Dive, Result/Metadata Caching & Warehouse Cost Optimization"] },
      { title: "Module 6: Capstone Project, SnowPro Core Certification & Placements", topics: ["SnowPro Core (COF-C02) Certification Practice Exams & Question Breakdown", "Integrating Snowflake with dbt (Dataform), Power BI, Tableau & Python", "Enterprise Cloud Data Warehouse Architecture Design Review", "Resume Optimization, GitHub Data Engineering Portfolio & Mock Interviews", "100% Dedicated Placement Assistance with 300+ Partner Companies"] }
    ]
  },
  'dbt': {
    modules: [
      { title: "Module 1: Introduction to Modern Data Stack & dbt Architecture", topics: ["Evolution of Data Engineering: ETL vs Modern ELT Paradigm", "Role of Analytics Engineer & dbt (Data Build Tool) Ecosystem", "Installing dbt Core, CLI Setup & Configuring profiles.yml", "dbt Cloud Overview: IDE, Webhooks, Schedules & Environment Setup", "Connecting dbt to Snowflake, Google BigQuery & PostgreSQL"] },
      { title: "Module 2: Modular Data Modeling & Materializations", topics: ["dbt Project Structure: Models, Sources, Seeds & Analysis Folders", "Modular SQL Modeling: Staging, Intermediate & Mart Layers (Medallion Architecture)", "dbt Materializations: View, Table, Incremental & Ephemeral Models", "Custom Incremental Strategies (unique_key, merge, delete+insert)", "dbt Seeds: Loading Reference CSV Files into Data Warehouses"] },
      { title: "Module 3: Jinja Templating, Macros & Dynamic SQL", topics: ["Jinja Control Structures: Variables, Control Loops (if/for) & Expressions", "dbt Ref & Source Functions for Dynamic DAG Lineage", "Writing Custom dbt Macros for Code Reusability & DRY SQL", "Using Popular dbt Packages: dbt-utils, dbt-codegen & dbt-expectations", "Generating Model Boilerplate & Staging Files Automatically"] },
      { title: "Module 4: Data Testing, Quality & Documentation", topics: ["dbt Testing Framework: Generic Tests (unique, not_null, accepted_values, relationships)", "Writing Singular Tests (Custom SQL Queries returning failing rows)", "dbt Expectations Package for Advanced Quality Assertions", "Documenting Models, Columns & Sources in schema.yml Files", "Generating Interactive dbt Documentation & Directed Acyclic Lineage Graphs (DAG)"] },
      { title: "Module 5: Advanced dbt Features & Semantic Layer", topics: ["dbt State & Slim CI: Running Only Modified Models with state:modified", "dbt Hooks: pre-hook, post-hook, & grant_configs for Warehouse Security", "dbt Snapshots: Implementing Type 2 Slowly Changing Dimensions (SCD Type 2)", "dbt Semantic Layer: Defining Centralized Business Metrics & Semantic Models", "Integrating dbt with Orchestrators (Apache Airflow, Astronomer, Dagster)"] },
      { title: "Module 6: CI/CD Pipelines, dbt Certification & Placement Prep", topics: ["CI/CD Workflows: GitHub Actions for Automatic dbt Test & Build on Pull Requests", "dbt Cloud Deployment: Jobs, Triggers, Webhooks & Slack Alerts", "dbt Analytics Engineer Certification Exam Guide & Mock Questions", "Analytics Engineering Resume & GitHub Portfolio Building", "100% Placement Support with 300+ Partner Companies"] }
    ]
  },
  'dbt-training-course': {
    modules: [
      { title: "Module 1: Introduction to Modern Data Stack & dbt Architecture", topics: ["Evolution of Data Engineering: ETL vs Modern ELT Paradigm", "Role of Analytics Engineer & dbt (Data Build Tool) Ecosystem", "Installing dbt Core, CLI Setup & Configuring profiles.yml", "dbt Cloud Overview: IDE, Webhooks, Schedules & Environment Setup", "Connecting dbt to Snowflake, Google BigQuery & PostgreSQL"] },
      { title: "Module 2: Modular Data Modeling & Materializations", topics: ["dbt Project Structure: Models, Sources, Seeds & Analysis Folders", "Modular SQL Modeling: Staging, Intermediate & Mart Layers (Medallion Architecture)", "dbt Materializations: View, Table, Incremental & Ephemeral Models", "Custom Incremental Strategies (unique_key, merge, delete+insert)", "dbt Seeds: Loading Reference CSV Files into Data Warehouses"] },
      { title: "Module 3: Jinja Templating, Macros & Dynamic SQL", topics: ["Jinja Control Structures: Variables, Control Loops (if/for) & Expressions", "dbt Ref & Source Functions for Dynamic DAG Lineage", "Writing Custom dbt Macros for Code Reusability & DRY SQL", "Using Popular dbt Packages: dbt-utils, dbt-codegen & dbt-expectations", "Generating Model Boilerplate & Staging Files Automatically"] },
      { title: "Module 4: Data Testing, Quality & Documentation", topics: ["dbt Testing Framework: Generic Tests (unique, not_null, accepted_values, relationships)", "Writing Singular Tests (Custom SQL Queries returning failing rows)", "dbt Expectations Package for Advanced Quality Assertions", "Documenting Models, Columns & Sources in schema.yml Files", "Generating Interactive dbt Documentation & Directed Acyclic Lineage Graphs (DAG)"] },
      { title: "Module 5: Advanced dbt Features & Semantic Layer", topics: ["dbt State & Slim CI: Running Only Modified Models with state:modified", "dbt Hooks: pre-hook, post-hook, & grant_configs for Warehouse Security", "dbt Snapshots: Implementing Type 2 Slowly Changing Dimensions (SCD Type 2)", "dbt Semantic Layer: Defining Centralized Business Metrics & Semantic Models", "Integrating dbt with Orchestrators (Apache Airflow, Astronomer, Dagster)"] },
      { title: "Module 6: CI/CD Pipelines, dbt Certification & Placement Prep", topics: ["CI/CD Workflows: GitHub Actions for Automatic dbt Test & Build on Pull Requests", "dbt Cloud Deployment: Jobs, Triggers, Webhooks & Slack Alerts", "dbt Analytics Engineer Certification Exam Guide & Mock Questions", "Analytics Engineering Resume & GitHub Portfolio Building", "100% Placement Support with 300+ Partner Companies"] }
    ]
  },
  'anthropic': {
    modules: [
      { title: "Module 1: Anthropic AI, Constitutional AI & Claude 3 Family", topics: ["Anthropic Alignment Philosophy & Constitutional AI Deep-Dive", "Claude 3 Model Architecture: Claude 3.5 Sonnet, Claude 3 Opus & Claude 3 Haiku", "Anthropic Python & TypeScript SDK Configuration & API Key Management", "Anthropic Console & Workbench: Interactive Prompt Testing & System Prompts", "200K Context Window Architecture & Long-Context Needle-In-A-Haystack Analysis"] },
      { title: "Module 2: Advanced Prompt Engineering & Claude Prompt Caching", topics: ["System Prompts Architecture, Prefilling Assistant Responses & Output Formatting", "XML Tags Strategy for Clean Context Segmentation, Prompts & Instruction Separation", "Chain-of-Thought (CoT) Prompting & Structured Reasoning Injections", "Anthropic Prompt Caching API: 90% Cost Reduction & 80% Latency Optimization", "Multimodal Vision Analysis: Processing Charts, PDFs, Architecture Diagrams & UI Screenshots"] },
      { title: "Module 3: Anthropic Tool Use & Function Calling Architecture", topics: ["Defining Tool Use Schemas with JSON Schema (types, properties, required)", "Controlling Tool Selection: auto, any, & specific tool forcing (tool_choice)", "Handling Tool Call Returns, Output Validation & Re-Injecting Tool Results", "Chaining Multi-Step Tools (SQL Database Querying, Search, Calculator, Web APIs)", "Robust Error Handling, Schema Mismatch Retries & Tool Execution Sandboxes"] },
      { title: "Module 4: Anthropic Computer Use API & Autonomous GUI Automation", topics: ["Deep-Dive into Anthropic Computer Use Beta API Architecture & Capabilities", "Automated GUI Control: Mouse Coordinates, Left/Right Clicks, Keypresses & Scrolling", "Executing Computer Use in Secure Docker Containers & Virtual X11 Desktops", "Building Autonomous Web Navigation, Form Filling & Multi-App Desktop Agents", "Security Best Practices, Sandboxing & Human Approval Checkpoints"] },
      { title: "Module 5: Agentic Systems, RAG & LangGraph Workflows with Claude", topics: ["Orchestrating Claude 3.5 Sonnet with LangChain & LangGraph Stateful Agents", "Advanced RAG Pipelines with Claude & Vector Databases (Pinecone, ChromaDB, Qdrant)", "Building Human-in-the-Loop (HITL) Workflows & Supervisor Multi-Agent Crews", "Benchmarking Claude Reasoning Performance, Hallucination Audits & Output Evaluation"] },
      { title: "Module 6: Cloud Deployment (AWS Bedrock / GCP Vertex AI) & Placements", topics: ["Deploying Claude Models on AWS Bedrock & Google Cloud Vertex AI", "Production API Architecture: Rate Limiting, Exponential Backoff & Token Monitoring", "Building Full-Stack Anthropic Applications with Next.js, FastAPI & WebSockets", "Anthropic AI Developer Portfolio & GitHub Showcase", "100% Dedicated Placement Assistance with 300+ Partner Companies"] }
    ]
  },
  'anthropic-training-course': {
    modules: [
      { title: "Module 1: Anthropic AI, Constitutional AI & Claude 3 Family", topics: ["Anthropic Alignment Philosophy & Constitutional AI Deep-Dive", "Claude 3 Model Architecture: Claude 3.5 Sonnet, Claude 3 Opus & Claude 3 Haiku", "Anthropic Python & TypeScript SDK Configuration & API Key Management", "Anthropic Console & Workbench: Interactive Prompt Testing & System Prompts", "200K Context Window Architecture & Long-Context Needle-In-A-Haystack Analysis"] },
      { title: "Module 2: Advanced Prompt Engineering & Claude Prompt Caching", topics: ["System Prompts Architecture, Prefilling Assistant Responses & Output Formatting", "XML Tags Strategy for Clean Context Segmentation, Prompts & Instruction Separation", "Chain-of-Thought (CoT) Prompting & Structured Reasoning Injections", "Anthropic Prompt Caching API: 90% Cost Reduction & 80% Latency Optimization", "Multimodal Vision Analysis: Processing Charts, PDFs, Architecture Diagrams & UI Screenshots"] },
      { title: "Module 3: Anthropic Tool Use & Function Calling Architecture", topics: ["Defining Tool Use Schemas with JSON Schema (types, properties, required)", "Controlling Tool Selection: auto, any, & specific tool forcing (tool_choice)", "Handling Tool Call Returns, Output Validation & Re-Injecting Tool Results", "Chaining Multi-Step Tools (SQL Database Querying, Search, Calculator, Web APIs)", "Robust Error Handling, Schema Mismatch Retries & Tool Execution Sandboxes"] },
      { title: "Module 4: Anthropic Computer Use API & Autonomous GUI Automation", topics: ["Deep-Dive into Anthropic Computer Use Beta API Architecture & Capabilities", "Automated GUI Control: Mouse Coordinates, Left/Right Clicks, Keypresses & Scrolling", "Executing Computer Use in Secure Docker Containers & Virtual X11 Desktops", "Building Autonomous Web Navigation, Form Filling & Multi-App Desktop Agents", "Security Best Practices, Sandboxing & Human Approval Checkpoints"] },
      { title: "Module 5: Agentic Systems, RAG & LangGraph Workflows with Claude", topics: ["Orchestrating Claude 3.5 Sonnet with LangChain & LangGraph Stateful Agents", "Advanced RAG Pipelines with Claude & Vector Databases (Pinecone, ChromaDB, Qdrant)", "Building Human-in-the-Loop (HITL) Workflows & Supervisor Multi-Agent Crews", "Benchmarking Claude Reasoning Performance, Hallucination Audits & Output Evaluation"] },
      { title: "Module 6: Cloud Deployment (AWS Bedrock / GCP Vertex AI) & Placements", topics: ["Deploying Claude Models on AWS Bedrock & Google Cloud Vertex AI", "Production API Architecture: Rate Limiting, Exponential Backoff & Token Monitoring", "Building Full-Stack Anthropic Applications with Next.js, FastAPI & WebSockets", "Anthropic AI Developer Portfolio & GitHub Showcase", "100% Dedicated Placement Assistance with 300+ Partner Companies"] }
    ]
  },
  'sap': {
    modules: [
      { title: "Module 1: SAP S/4HANA ERP Architecture & Navigation", topics: ["Evolution of SAP: R/3, ECC to SAP S/4HANA In-Memory Database Architecture", "Navigating SAP GUI & Modern SAP Fiori Launchpad User Experience", "Enterprise Organizational Structure: Company Code, Plant, Storage Location & Sales Org", "Master Data Management: Unified Business Partner (BP) Architecture in S/4HANA", "Executing SAP T-Codes (Transaction Codes) & SPRO Implementation Guide Customization"] },
      { title: "Module 2: SAP FICO (Financial Accounting & Controlling)", topics: ["General Ledger (G/L) Accounting: Chart of Accounts & Document Postings", "Accounts Payable (AP): Vendor Master, Invoice Verification & Automatic Payment Program (APP)", "Accounts Receivable (AR): Customer Master, Invoicing, Incoming Payments & Dunning", "Asset Accounting: Asset Classes, Depreciation Keys & Asset Acquisition/Scrapping", "Cost Center Accounting & Profit Center Accounting in Controlling (CO)"] },
      { title: "Module 3: SAP MM (Materials Management & Procure-to-Pay)", topics: ["End-to-End Procure-to-Pay (P2P) Cycle Architecture & Business Process Flow", "Material Master Data: Material Types, Industry Sectors, Valuation Classes & Purchasing Views", "Purchasing Documents: Purchase Requisition (PR), Request for Quotation (RFQ) & Purchase Order (PO)", "Inventory Management: Goods Receipt (MIGO), Goods Issue, Stock Transfers & Physical Inventory", "Logistics Invoice Verification (MIRO) & Automatic Account Determination (OBYC)"] },
      { title: "Module 4: SAP SD (Sales & Distribution & Order-to-Cash)", topics: ["Order-to-Cash (O2C) Business Process Cycle Architecture", "Customer Master & Material Determination in S/4HANA", "Sales Document Types: Inquiry, Quotation, Standard Order & Scheduling Agreements", "Pricing Procedure Determination: Condition Technique, Access Sequences & Pricing Conditions (VK11)", "Delivery Processing (VL01N), Picking, Goods Issue & Billing / Invoicing (VF01)"] },
      { title: "Module 5: SAP ABAP Fundamentals & Custom Developments", topics: ["ABAP Workbench Overview: ABAP Dictionary (SE11), Tables, Views & Data Elements", "Developing Classical & Interactive Reports with ALV (ABAP List Viewer) Grid Controls", "Modularization: Subroutines, Function Modules, BAPIs & Remote Function Calls (RFC)", "Form Development: SmartForms & Adobe Document Services (ADS)", "Enhancements: User Exits, Customer Exits, BAdIs & Enhancement Framework"] },
      { title: "Module 6: Implementation Methodology, Data Migration & Placements", topics: ["SAP Activate Methodology: Discover, Prepare, Explore, Realize, Deploy & Run", "Data Migration using LTMC (Legacy Transfer Migration Cockpit) & LSMW", "SAP Functional / Technical Consultant Resume Engineering & GitHub Showcase", "Mock Technical & Scenario-Based Business Process Interviews", "100% Dedicated Placement Assistance with 300+ Partner Companies"] }
    ]
  },
  'sap-training-course': {
    modules: [
      { title: "Module 1: SAP S/4HANA ERP Architecture & Navigation", topics: ["Evolution of SAP: R/3, ECC to SAP S/4HANA In-Memory Database Architecture", "Navigating SAP GUI & Modern SAP Fiori Launchpad User Experience", "Enterprise Organizational Structure: Company Code, Plant, Storage Location & Sales Org", "Master Data Management: Unified Business Partner (BP) Architecture in S/4HANA", "Executing SAP T-Codes (Transaction Codes) & SPRO Implementation Guide Customization"] },
      { title: "Module 2: SAP FICO (Financial Accounting & Controlling)", topics: ["General Ledger (G/L) Accounting: Chart of Accounts & Document Postings", "Accounts Payable (AP): Vendor Master, Invoice Verification & Automatic Payment Program (APP)", "Accounts Receivable (AR): Customer Master, Invoicing, Incoming Payments & Dunning", "Asset Accounting: Asset Classes, Depreciation Keys & Asset Acquisition/Scrapping", "Cost Center Accounting & Profit Center Accounting in Controlling (CO)"] },
      { title: "Module 3: SAP MM (Materials Management & Procure-to-Pay)", topics: ["End-to-End Procure-to-Pay (P2P) Cycle Architecture & Business Process Flow", "Material Master Data: Material Types, Industry Sectors, Valuation Classes & Purchasing Views", "Purchasing Documents: Purchase Requisition (PR), Request for Quotation (RFQ) & Purchase Order (PO)", "Inventory Management: Goods Receipt (MIGO), Goods Issue, Stock Transfers & Physical Inventory", "Logistics Invoice Verification (MIRO) & Automatic Account Determination (OBYC)"] },
      { title: "Module 4: SAP SD (Sales & Distribution & Order-to-Cash)", topics: ["Order-to-Cash (O2C) Business Process Cycle Architecture", "Customer Master & Material Determination in S/4HANA", "Sales Document Types: Inquiry, Quotation, Standard Order & Scheduling Agreements", "Pricing Procedure Determination: Condition Technique, Access Sequences & Pricing Conditions (VK11)", "Delivery Processing (VL01N), Picking, Goods Issue & Billing / Invoicing (VF01)"] },
      { title: "Module 5: SAP ABAP Fundamentals & Custom Developments", topics: ["ABAP Workbench Overview: ABAP Dictionary (SE11), Tables, Views & Data Elements", "Developing Classical & Interactive Reports with ALV (ABAP List Viewer) Grid Controls", "Modularization: Subroutines, Function Modules, BAPIs & Remote Function Calls (RFC)", "Form Development: SmartForms & Adobe Document Services (ADS)", "Enhancements: User Exits, Customer Exits, BAdIs & Enhancement Framework"] },
      { title: "Module 6: Implementation Methodology, Data Migration & Placements", topics: ["SAP Activate Methodology: Discover, Prepare, Explore, Realize, Deploy & Run", "Data Migration using LTMC (Legacy Transfer Migration Cockpit) & LSMW", "SAP Functional / Technical Consultant Resume Engineering & GitHub Showcase", "Mock Technical & Scenario-Based Business Process Interviews", "100% Dedicated Placement Assistance with 300+ Partner Companies"] }
    ]
  },
  'aiml-engineering': {
    modules: [
      { title: "Module 1: Advanced Python, Mathematics & Exploratory Data Analysis", topics: ["Object-Oriented Python for AI Engineers & NumPy Array Vectorization", "Linear Algebra, Vector Calculus, Probability & Statistical Hypothesis Testing", "Pandas Data Wrangling, Feature Scaling, Outlier Imputation & Categorical Encoding", "Data Visualization & Correlation Heatmaps with Matplotlib & Seaborn", "Building Clean, Reproducible Data Pipelines for Model Ingestion"] },
      { title: "Module 2: Supervised & Unsupervised Machine Learning Algorithms", topics: ["Regression Models: Linear, Ridge, Lasso, Polynomial & ElasticNet Regression", "Classification: Logistic Regression, Decision Trees, Random Forests & Support Vector Machines (SVM)", "Ensemble Learning: Gradient Boosting, XGBoost, LightGBM & CatBoost Hyperparameter Tuning", "Unsupervised Clustering & Dimensionality Reduction: K-Means, DBSCAN & PCA", "Model Evaluation Metrics: Precision-Recall, F1-Score, ROC-AUC, Log-Loss & Cross-Validation"] },
      { title: "Module 3: Deep Learning, Neural Networks & Computer Vision with PyTorch", topics: ["Deep Learning Foundations: Perceptrons, Artificial Neural Networks (ANN) & Backpropagation", "PyTorch Tensors, Dynamic Computation Graphs & Autograd Engine", "Convolutional Neural Networks (CNN): Feature Extraction, Transfer Learning & ResNet Architectures", "Computer Vision: Object Detection (YOLO), Image Segmentation & OpenCV Processing", "Recurrent Neural Networks (RNN) & Long Short-Term Memory (LSTM) Networks"] },
      { title: "Module 4: NLP, Hugging Face Transformers & LLM Architectures", topics: ["NLP Foundations: Tokenization, Word Embeddings (Word2Vec, GloVe) & TF-IDF", "Transformer Architecture: Self-Attention Mechanisms, Multi-Head Attention & Positional Encoding", "Hugging Face Transformers: Fine-Tuning BERT, RoBERTa & DeBERTa for Classification", "Generative AI Foundations: Prompt Engineering, LoRA/QLoRA Parameter-Efficient Fine-Tuning", "Vector Databases (ChromaDB, Pinecone) & Retrieval-Augmented Generation (RAG) Basics"] },
      { title: "Module 5: MLOps, Experiment Tracking & Model Deployment APIs", topics: ["MLOps Lifecycle: Data Version Control (DVC) & Experiment Tracking with MLflow", "Model Packaging & Production REST APIs with FastAPI, Pydantic & Docker Containers", "Model Monitoring: Detecting Data Drift, Concept Drift & Model Degradation with Evidently AI", "Container Orchestration: Kubernetes, Triton Inference Server & GPU Optimization", "Deploying End-to-End ML Pipelines on Cloud (AWS SageMaker / GCP Vertex AI)"] },
      { title: "Module 6: Capstone AI Systems, System Design & 100% Placements", topics: ["AI/ML System Design: Recommendation Engines, Search Ranking & Real-Time Computer Vision", "AI/ML Engineer Resume Engineering & Production GitHub Portfolio Development", "Mock Technical Coding Interviews & ML System Architecture Case Studies", "100% Dedicated Placement Assistance with 300+ Partner Companies"] }
    ]
  },
  'aiml-engineering-training-course': {
    modules: [
      { title: "Module 1: Advanced Python, Mathematics & Exploratory Data Analysis", topics: ["Object-Oriented Python for AI Engineers & NumPy Array Vectorization", "Linear Algebra, Vector Calculus, Probability & Statistical Hypothesis Testing", "Pandas Data Wrangling, Feature Scaling, Outlier Imputation & Categorical Encoding", "Data Visualization & Correlation Heatmaps with Matplotlib & Seaborn", "Building Clean, Reproducible Data Pipelines for Model Ingestion"] },
      { title: "Module 2: Supervised & Unsupervised Machine Learning Algorithms", topics: ["Regression Models: Linear, Ridge, Lasso, Polynomial & ElasticNet Regression", "Classification: Logistic Regression, Decision Trees, Random Forests & Support Vector Machines (SVM)", "Ensemble Learning: Gradient Boosting, XGBoost, LightGBM & CatBoost Hyperparameter Tuning", "Unsupervised Clustering & Dimensionality Reduction: K-Means, DBSCAN & PCA", "Model Evaluation Metrics: Precision-Recall, F1-Score, ROC-AUC, Log-Loss & Cross-Validation"] },
      { title: "Module 3: Deep Learning, Neural Networks & Computer Vision with PyTorch", topics: ["Deep Learning Foundations: Perceptrons, Artificial Neural Networks (ANN) & Backpropagation", "PyTorch Tensors, Dynamic Computation Graphs & Autograd Engine", "Convolutional Neural Networks (CNN): Feature Extraction, Transfer Learning & ResNet Architectures", "Computer Vision: Object Detection (YOLO), Image Segmentation & OpenCV Processing", "Recurrent Neural Networks (RNN) & Long Short-Term Memory (LSTM) Networks"] },
      { title: "Module 4: NLP, Hugging Face Transformers & LLM Architectures", topics: ["NLP Foundations: Tokenization, Word Embeddings (Word2Vec, GloVe) & TF-IDF", "Transformer Architecture: Self-Attention Mechanisms, Multi-Head Attention & Positional Encoding", "Hugging Face Transformers: Fine-Tuning BERT, RoBERTa & DeBERTa for Classification", "Generative AI Foundations: Prompt Engineering, LoRA/QLoRA Parameter-Efficient Fine-Tuning", "Vector Databases (ChromaDB, Pinecone) & Retrieval-Augmented Generation (RAG) Basics"] },
      { title: "Module 5: MLOps, Experiment Tracking & Model Deployment APIs", topics: ["MLOps Lifecycle: Data Version Control (DVC) & Experiment Tracking with MLflow", "Model Packaging & Production REST APIs with FastAPI, Pydantic & Docker Containers", "Model Monitoring: Detecting Data Drift, Concept Drift & Model Degradation with Evidently AI", "Container Orchestration: Kubernetes, Triton Inference Server & GPU Optimization", "Deploying End-to-End ML Pipelines on Cloud (AWS SageMaker / GCP Vertex AI)"] },
      { title: "Module 6: Capstone AI Systems, System Design & 100% Placements", topics: ["AI/ML System Design: Recommendation Engines, Search Ranking & Real-Time Computer Vision", "AI/ML Engineer Resume Engineering & Production GitHub Portfolio Development", "Mock Technical Coding Interviews & ML System Architecture Case Studies", "100% Dedicated Placement Assistance with 300+ Partner Companies"] }
    ]
  },
  'mobile-app-development': {
    modules: [
      { title: "Module 1: Mobile Architecture, Modern JS/TS & Dart Basics", topics: ["Mobile App Architecture: Native vs Hybrid vs Cross-Platform Ecosystems", "Modern TypeScript & ES6+ Features for Scalable Mobile Codebases", "Dart Programming Language: Variables, OOPs, Null Safety, Async/Await & Streams", "Setting Up Dev Environments: Android Studio, Xcode, iOS Simulator & Expo CLI", "Designing Responsive Layouts & Safe Area Views across Device Screen Sizes"] },
      { title: "Module 2: React Native Core Components, Styling & Navigation", topics: ["Core Components: View, Text, Image, ScrollView, FlatList, SectionList & TextInput", "Responsive Flexbox Layouts, Animated API & Custom NativeWind (Tailwind) Styling", "React Navigation 6: Stack Navigator, Bottom Tab Navigator & Dynamic Drawers", "Building Custom Reusable UI Kits, Modals & Micro-Interaction Animations", "Form Handling with Formik, React Hook Form & Yup Schema Validation"] },
      { title: "Module 3: Flutter Framework, Widgets & State Management", topics: ["Flutter Engine Architecture: Everything is a Widget (Stateless vs Stateful)", "Building Adaptive UI: Container, Column, Row, ListView, GridView & Slivers", "State Management Patterns: Provider, Riverpod & Bloc Architecture", "Declarative Navigation & Route Guards with GoRouter", "Custom Themes, Material 3 & Cupertino (iOS) Native Widgets"] },
      { title: "Module 4: State Management & Real-Time Backend Integration", topics: ["Global App State Management in React Native with Redux Toolkit & Zustand", "Connecting REST APIs & GraphQL with Axios, Fetch & TanStack Query", "Firebase Backend: Authentication (Email, Google, Phone OTP), Cloud Firestore & Storage", "Offline Data Persistence & Superfast Local Caching with MMKV & SQLite", "Building Real-Time Chat & Activity Feed with Firebase WebSockets"] },
      { title: "Module 5: Device Hardware APIs, Maps & Push Notifications", topics: ["Native Hardware Access: Camera, Image Picker, Biometrics (Face ID/Fingerprint)", "Geolocations & Map Integration: Google Maps SDK, Geofencing & Live Driver Tracking", "Push Notifications Architecture with Firebase Cloud Messaging (FCM) & OneSignal", "Performance Optimization: Memory Leaks, Frame Drops & FlatList Windowing", "Mobile App Security: SSL Pinning, Secure Storage & API Key Protection"] },
      { title: "Module 6: CI/CD, App Store & Play Store Deployment & Placements", topics: ["Generating Android Keystores, Signed APKs & Android App Bundles (AAB)", "iOS Certificate Management, Provisioning Profiles & TestFlight Distribution", "Google Play Console & Apple App Store Connect Publishing Guidelines & ASO", "Mobile Developer Resume Engineering & Production App Store Showcase", "100% Dedicated Placement Assistance with 300+ Partner Companies"] }
    ]
  },
  'mobile-app-development-training-course': {
    modules: [
      { title: "Module 1: Mobile Architecture, Modern JS/TS & Dart Basics", topics: ["Mobile App Architecture: Native vs Hybrid vs Cross-Platform Ecosystems", "Modern TypeScript & ES6+ Features for Scalable Mobile Codebases", "Dart Programming Language: Variables, OOPs, Null Safety, Async/Await & Streams", "Setting Up Dev Environments: Android Studio, Xcode, iOS Simulator & Expo CLI", "Designing Responsive Layouts & Safe Area Views across Device Screen Sizes"] },
      { title: "Module 2: React Native Core Components, Styling & Navigation", topics: ["Core Components: View, Text, Image, ScrollView, FlatList, SectionList & TextInput", "Responsive Flexbox Layouts, Animated API & Custom NativeWind (Tailwind) Styling", "React Navigation 6: Stack Navigator, Bottom Tab Navigator & Dynamic Drawers", "Building Custom Reusable UI Kits, Modals & Micro-Interaction Animations", "Form Handling with Formik, React Hook Form & Yup Schema Validation"] },
      { title: "Module 3: Flutter Framework, Widgets & State Management", topics: ["Flutter Engine Architecture: Everything is a Widget (Stateless vs Stateful)", "Building Adaptive UI: Container, Column, Row, ListView, GridView & Slivers", "State Management Patterns: Provider, Riverpod & Bloc Architecture", "Declarative Navigation & Route Guards with GoRouter", "Custom Themes, Material 3 & Cupertino (iOS) Native Widgets"] },
      { title: "Module 4: State Management & Real-Time Backend Integration", topics: ["Global App State Management in React Native with Redux Toolkit & Zustand", "Connecting REST APIs & GraphQL with Axios, Fetch & TanStack Query", "Firebase Backend: Authentication (Email, Google, Phone OTP), Cloud Firestore & Storage", "Offline Data Persistence & Superfast Local Caching with MMKV & SQLite", "Building Real-Time Chat & Activity Feed with Firebase WebSockets"] },
      { title: "Module 5: Device Hardware APIs, Maps & Push Notifications", topics: ["Native Hardware Access: Camera, Image Picker, Biometrics (Face ID/Fingerprint)", "Geolocations & Map Integration: Google Maps SDK, Geofencing & Live Driver Tracking", "Push Notifications Architecture with Firebase Cloud Messaging (FCM) & OneSignal", "Performance Optimization: Memory Leaks, Frame Drops & FlatList Windowing", "Mobile App Security: SSL Pinning, Secure Storage & API Key Protection"] },
      { title: "Module 6: CI/CD, App Store & Play Store Deployment & Placements", topics: ["Generating Android Keystores, Signed APKs & Android App Bundles (AAB)", "iOS Certificate Management, Provisioning Profiles & TestFlight Distribution", "Google Play Console & Apple App Store Connect Publishing Guidelines & ASO", "Mobile Developer Resume Engineering & Production App Store Showcase", "100% Dedicated Placement Assistance with 300+ Partner Companies"] }
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
    features: ['Python, React & Node', '15+ Yrs Mentors', '3 Live Capstone Projects', '100% Placement Support']
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
    features: ['Python, React & Node', '15+ Yrs Mentors', '3 Live Capstone Projects', '100% Placement Support']
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
    features: ['Python, React & Node', '15+ Yrs Mentors', '3 Live Capstone Projects', '100% Placement Support']
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
  'azure-training-course': { 
    slug: 'azure-training-course', 
    name: 'Microsoft Azure Training', 
    fullName: 'Microsoft Azure Cloud Master Program',
    icon: 'fab fa-microsoft', 
    color: 'blue',
    image: '/images/courses/aws-hero.webp',
    bannerImage: '/images/courses/aws-banner.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Microsoft Azure cloud services, virtual machines, networking, Entra ID, and Azure DevOps.',
    features: ['Azure Virtual Machines', 'Azure Blob Storage', 'Azure Virtual Network (VNet)', 'Microsoft Entra ID (Azure AD)', 'Azure DevOps CI/CD', 'Azure Kubernetes Service']
  },
  'azure': { 
    slug: 'azure-training-course', 
    name: 'Microsoft Azure Training', 
    fullName: 'Microsoft Azure Cloud Master Program',
    icon: 'fab fa-microsoft', 
    color: 'blue',
    image: '/images/courses/aws-hero.webp',
    bannerImage: '/images/courses/aws-banner.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Microsoft Azure cloud services, virtual machines, networking, Entra ID, and Azure DevOps.',
    features: ['Azure Virtual Machines', 'Azure Blob Storage', 'Azure Virtual Network (VNet)', 'Microsoft Entra ID (Azure AD)', 'Azure DevOps CI/CD', 'Azure Kubernetes Service']
  },
  
  // Data Science Training
  'data-science-training-course': { 
    slug: 'data-science-training-course', 
    name: 'Data Science & AI Training', 
    fullName: 'Data Science & AI Master Program',
    icon: 'fas fa-brain', 
    color: 'purple',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Python, Machine Learning, Deep Learning, NLP, and Generative AI with real-world projects.',
    features: ['Python for Data Science', 'Machine Learning Algorithms', 'Deep Learning & Neural Networks', 'NLP & Generative AI', 'LangChain & LLMs', '100% Placement Support']
  },
  'data-science': { 
    slug: 'data-science-training-course', 
    name: 'Data Science & AI Training', 
    fullName: 'Data Science & AI Master Program',
    icon: 'fas fa-brain', 
    color: 'purple',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Python, Machine Learning, Deep Learning, NLP, and Generative AI with real-world projects.',
    features: ['Python for Data Science', 'Machine Learning Algorithms', 'Deep Learning & Neural Networks', 'NLP & Generative AI', 'LangChain & LLMs', '100% Placement Support']
  },
  'data-science-ai': { 
    slug: 'data-science-training-course', 
    name: 'Data Science & AI Training', 
    fullName: 'Data Science & AI Master Program',
    icon: 'fas fa-brain', 
    color: 'purple',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Python, Machine Learning, Deep Learning, NLP, and Generative AI with real-world projects.',
    features: ['Python for Data Science', 'Machine Learning Algorithms', 'Deep Learning & Neural Networks', 'NLP & Generative AI', 'LangChain & LLMs', '100% Placement Support']
  },
  
  // Data Engineering Training
  'data-engineering-training-course': { 
    slug: 'data-engineering-training-course', 
    name: 'Data Engineering Training', 
    fullName: 'Data Engineering Master Program',
    icon: 'fas fa-database', 
    color: 'teal',
    image: '/images/courses/data-engineering-bg.webp',
    bannerImage: '/images/courses/data-engineering-bg.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Apache Spark (PySpark), Apache Kafka, Airflow, Snowflake, Delta Lake, and Cloud Lakehouses.',
    features: ['Apache Spark & PySpark', 'Apache Kafka Streaming', 'Apache Airflow Orchestration', 'Snowflake & BigQuery', 'Delta Lake & dbt', '100% Placement Support']
  },
  'data-engineering': { 
    slug: 'data-engineering-training-course', 
    name: 'Data Engineering Training', 
    fullName: 'Data Engineering Master Program',
    icon: 'fas fa-database', 
    color: 'teal',
    image: '/images/courses/data-engineering-bg.webp',
    bannerImage: '/images/courses/data-engineering-bg.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Apache Spark (PySpark), Apache Kafka, Airflow, Snowflake, Delta Lake, and Cloud Lakehouses.',
    features: ['Apache Spark & PySpark', 'Apache Kafka Streaming', 'Apache Airflow Orchestration', 'Snowflake & BigQuery', 'Delta Lake & dbt', '100% Placement Support']
  },
  
  // Power BI Training
  'power-bi-training-course': { 
    slug: 'power-bi-training-course', 
    name: 'Power BI Training', 
    fullName: 'Power BI & Business Intelligence Master Program',
    icon: 'fas fa-chart-bar', 
    color: 'amber',
    image: '/images/courses/analytics-hero.webp',
    bannerImage: '/images/courses/analytics-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Power BI, Power Query, DAX, Data Modeling, and PL-300 Certification.',
    features: ['Power BI Desktop', 'Power Query & M', 'Advanced DAX Formulas', 'Data Modeling (Star Schema)', 'Power BI Service', '100% Placement Support']
  },
  'power-bi': { 
    slug: 'power-bi-training-course', 
    name: 'Power BI Training', 
    fullName: 'Power BI & Business Intelligence Master Program',
    icon: 'fas fa-chart-bar', 
    color: 'amber',
    image: '/images/courses/analytics-hero.webp',
    bannerImage: '/images/courses/analytics-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Power BI, Power Query, DAX, Data Modeling, and PL-300 Certification.',
    features: ['Power BI Desktop', 'Power Query & M', 'Advanced DAX Formulas', 'Data Modeling (Star Schema)', 'Power BI Service', '100% Placement Support']
  },
  'powerbi': { 
    slug: 'power-bi-training-course', 
    name: 'Power BI Training', 
    fullName: 'Power BI & Business Intelligence Master Program',
    icon: 'fas fa-chart-bar', 
    color: 'amber',
    image: '/images/courses/analytics-hero.webp',
    bannerImage: '/images/courses/analytics-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Power BI, Power Query, DAX, Data Modeling, and PL-300 Certification.',
    features: ['Power BI Desktop', 'Power Query & M', 'Advanced DAX Formulas', 'Data Modeling (Star Schema)', 'Power BI Service', '100% Placement Support']
  },
  
  // React JS Training
  'react-training-course': { 
    slug: 'react-training-course', 
    name: 'React JS Training', 
    fullName: 'React JS & Modern Frontend Master Program',
    icon: 'fab fa-react', 
    color: 'cyan',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master React 18/19, Modern JavaScript (ES6+), TypeScript, Hooks, Redux Toolkit, and Next.js.',
    features: ['React 18/19 & Virtual DOM', 'Modern JavaScript (ES6+) & TypeScript', 'Hooks & Custom Hooks', 'Redux Toolkit & Zustand', 'Next.js & Tailwind CSS', '100% Placement Support']
  },
  'react': { 
    slug: 'react-training-course', 
    name: 'React JS Training', 
    fullName: 'React JS & Modern Frontend Master Program',
    icon: 'fab fa-react', 
    color: 'cyan',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master React 18/19, Modern JavaScript (ES6+), TypeScript, Hooks, Redux Toolkit, and Next.js.',
    features: ['React 18/19 & Virtual DOM', 'Modern JavaScript (ES6+) & TypeScript', 'Hooks & Custom Hooks', 'Redux Toolkit & Zustand', 'Next.js & Tailwind CSS', '100% Placement Support']
  },
  'reactjs': { 
    slug: 'react-training-course', 
    name: 'React JS Training', 
    fullName: 'React JS & Modern Frontend Master Program',
    icon: 'fab fa-react', 
    color: 'cyan',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master React 18/19, Modern JavaScript (ES6+), TypeScript, Hooks, Redux Toolkit, and Next.js.',
    features: ['React 18/19 & Virtual DOM', 'Modern JavaScript (ES6+) & TypeScript', 'Hooks & Custom Hooks', 'Redux Toolkit & Zustand', 'Next.js & Tailwind CSS', '100% Placement Support']
  },
  
  // Digital Marketing Training
  'digital-marketing-training-course': { 
    slug: 'digital-marketing-training-course', 
    name: 'Digital Marketing Training', 
    fullName: 'Digital Marketing & AI-Driven Growth Master Program',
    icon: 'fas fa-bullhorn', 
    color: 'orange',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master SEO, Google Ads, Meta Ads, GA4 Analytics, Content Marketing, and AI Growth Marketing.',
    features: ['Search Engine Optimization (SEO)', 'Google Ads (PPC / SEM)', 'Meta (FB & IG) Ads', 'GA4 & Looker Studio', 'Email & Content Marketing', '100% Placement Support']
  },
  'digital-marketing': { 
    slug: 'digital-marketing-training-course', 
    name: 'Digital Marketing Training', 
    fullName: 'Digital Marketing & AI-Driven Growth Master Program',
    icon: 'fas fa-bullhorn', 
    color: 'orange',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master SEO, Google Ads, Meta Ads, GA4 Analytics, Content Marketing, and AI Growth Marketing.',
    features: ['Search Engine Optimization (SEO)', 'Google Ads (PPC / SEM)', 'Meta (FB & IG) Ads', 'GA4 & Looker Studio', 'Email & Content Marketing', '100% Placement Support']
  },
  
  // Cybersecurity Training
  'cybersecurity-training-course': { 
    slug: 'cybersecurity-training-course', 
    name: 'Cybersecurity Training', 
    fullName: 'Cybersecurity, Ethical Hacking & SOC Defense Master Program',
    icon: 'fas fa-shield-alt', 
    color: 'red',
    image: '/images/courses/placeholder-course.webp',
    bannerImage: '/images/courses/placeholder-banner.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Ethical Hacking, Web Pentesting (OWASP), SOC Operations (Splunk), and Cloud Security.',
    features: ['Ethical Hacking & Pentesting', 'Virtual Cyber Range Labs', 'OWASP Top 10 Security', 'SOC Operations & Splunk SIEM', 'CEH v12 & CompTIA Security+ Prep', '100% Placement Support']
  },
  'cybersecurity': { 
    slug: 'cybersecurity-training-course', 
    name: 'Cybersecurity Training', 
    fullName: 'Cybersecurity, Ethical Hacking & SOC Defense Master Program',
    icon: 'fas fa-shield-alt', 
    color: 'red',
    image: '/images/courses/placeholder-course.webp',
    bannerImage: '/images/courses/placeholder-banner.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Ethical Hacking, Web Pentesting (OWASP), SOC Operations (Splunk), and Cloud Security.',
    features: ['Ethical Hacking & Pentesting', 'Virtual Cyber Range Labs', 'OWASP Top 10 Security', 'SOC Operations & Splunk SIEM', 'CEH v12 & CompTIA Security+ Prep', '100% Placement Support']
  },

  // Agentic AI Training
  'agentic-ai-training-course': {
    slug: 'agentic-ai-training-course',
    name: 'Agentic AI Training',
    fullName: 'Agentic AI, LangGraph & Multi-Agent Master Program',
    icon: 'fas fa-robot',
    color: 'amber',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Autonomous AI Agents, LangGraph, CrewAI, AutoGen, Agentic RAG, and LLMOps.',
    features: ['LangGraph Stateful Agents', 'CrewAI & AutoGen Multi-Agents', 'Agentic RAG & Memory', 'Tool Use & Sandboxes', 'LangSmith LLMOps', '100% Placement Support']
  },
  'agentic-ai': {
    slug: 'agentic-ai-training-course',
    name: 'Agentic AI Training',
    fullName: 'Agentic AI, LangGraph & Multi-Agent Master Program',
    icon: 'fas fa-robot',
    color: 'amber',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Autonomous AI Agents, LangGraph, CrewAI, AutoGen, Agentic RAG, and LLMOps.',
    features: ['LangGraph Stateful Agents', 'CrewAI & AutoGen Multi-Agents', 'Agentic RAG & Memory', 'Tool Use & Sandboxes', 'LangSmith LLMOps', '100% Placement Support']
  },

  // Generative AI Training
  'generative-ai-training-course': {
    slug: 'generative-ai-training-course',
    name: 'Generative AI Training',
    fullName: 'Generative AI & LLM Engineering Master Program',
    icon: 'fas fa-brain',
    color: 'purple',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master LLMs, LangChain, LlamaIndex, RAG Systems, PEFT Fine-Tuning & Vector DBs.',
    features: ['Large Language Models', 'LangChain', 'LlamaIndex', 'RAG Systems', 'LoRA Fine-Tuning', 'Vector DBs']
  },
  'generative-ai': {
    slug: 'generative-ai-training-course',
    name: 'Generative AI Training',
    fullName: 'Generative AI & LLM Engineering Master Program',
    icon: 'fas fa-brain',
    color: 'purple',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master LLMs, LangChain, LlamaIndex, RAG Systems, PEFT Fine-Tuning & Vector DBs.',
    features: ['Large Language Models', 'LangChain', 'LlamaIndex', 'RAG Systems', 'LoRA Fine-Tuning', 'Vector DBs']
  },
  'genai': {
    slug: 'generative-ai-training-course',
    name: 'Generative AI Training',
    fullName: 'Generative AI & LLM Engineering Master Program',
    icon: 'fas fa-brain',
    color: 'purple',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master LLMs, LangChain, LlamaIndex, RAG Systems, PEFT Fine-Tuning & Vector DBs.',
    features: ['Large Language Models', 'LangChain', 'LlamaIndex', 'RAG Systems', 'LoRA Fine-Tuning', 'Vector DBs']
  },

  // Snowflake Training
  'snowflake-training-course': {
    slug: 'snowflake-training-course',
    name: 'Snowflake Training',
    fullName: 'Snowflake Cloud Data Warehouse Master Program',
    icon: 'fas fa-snowflake',
    color: 'blue',
    image: '/images/courses/analytics-hero.webp',
    bannerImage: '/images/courses/analytics-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Snowflake Cloud Data Warehousing, SnowSQL, Snowpipe, Snowpark, and Time Travel.',
    features: ['Snowflake Architecture', 'Snowpipe', 'Snowpark Python', 'Time Travel', 'Streams & Tasks', 'SnowPro Core Prep']
  },
  'snowflake': {
    slug: 'snowflake-training-course',
    name: 'Snowflake Training',
    fullName: 'Snowflake Cloud Data Warehouse Master Program',
    icon: 'fas fa-snowflake',
    color: 'blue',
    image: '/images/courses/analytics-hero.webp',
    bannerImage: '/images/courses/analytics-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Snowflake Cloud Data Warehousing, SnowSQL, Snowpipe, Snowpark, and Time Travel.',
    features: ['Snowflake Architecture', 'Snowpipe', 'Snowpark Python', 'Time Travel', 'Streams & Tasks', 'SnowPro Core Prep']
  },

  // DBT Training
  'dbt-training-course': {
    slug: 'dbt-training-course',
    name: 'dbt Training',
    fullName: 'dbt Analytics Engineering Master Program',
    icon: 'fas fa-cubes',
    color: 'orange',
    image: '/images/courses/analytics-hero.webp',
    bannerImage: '/images/courses/analytics-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master dbt Core & dbt Cloud, Jinja Templating, Modular SQL, and Analytics Engineering.',
    features: ['dbt Core & Cloud', 'Jinja Macros', 'Modular SQL', 'dbt Tests', 'Lineage Graphs', 'Slim CI/CD']
  },
  'dbt': {
    slug: 'dbt-training-course',
    name: 'dbt Training',
    fullName: 'dbt Analytics Engineering Master Program',
    icon: 'fas fa-cubes',
    color: 'orange',
    image: '/images/courses/analytics-hero.webp',
    bannerImage: '/images/courses/analytics-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master dbt Core & dbt Cloud, Jinja Templating, Modular SQL, and Analytics Engineering.',
    features: ['dbt Core & Cloud', 'Jinja Macros', 'Modular SQL', 'dbt Tests', 'Lineage Graphs', 'Slim CI/CD']
  },

  // Anthropic Training
  'anthropic-training-course': {
    slug: 'anthropic-training-course',
    name: 'Anthropic AI Training',
    fullName: 'Anthropic Claude AI Developer Program',
    icon: 'fas fa-brain',
    color: 'amber',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Claude 3.5 Sonnet, Anthropic Computer Use API, Tool Use, and Prompt Caching.',
    features: ['Claude 3.5 Sonnet', 'Computer Use API', 'Tool Use', 'Prompt Caching', '200K Context Window', 'AWS Bedrock']
  },
  'anthropic': {
    slug: 'anthropic-training-course',
    name: 'Anthropic AI Training',
    fullName: 'Anthropic Claude AI Developer Program',
    icon: 'fas fa-brain',
    color: 'amber',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Claude 3.5 Sonnet, Anthropic Computer Use API, Tool Use, and Prompt Caching.',
    features: ['Claude 3.5 Sonnet', 'Computer Use API', 'Tool Use', 'Prompt Caching', '200K Context Window', 'AWS Bedrock']
  },
  'claude': {
    slug: 'anthropic-training-course',
    name: 'Anthropic AI Training',
    fullName: 'Anthropic Claude AI Developer Program',
    icon: 'fas fa-brain',
    color: 'amber',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Claude 3.5 Sonnet, Anthropic Computer Use API, Tool Use, and Prompt Caching.',
    features: ['Claude 3.5 Sonnet', 'Computer Use API', 'Tool Use', 'Prompt Caching', '200K Context Window', 'AWS Bedrock']
  },

  // SAP Training
  'sap-training-course': {
    slug: 'sap-training-course',
    name: 'SAP Training',
    fullName: 'SAP S/4HANA Enterprise Master Program',
    icon: 'fas fa-server',
    color: 'blue',
    image: '/images/courses/placeholder-course.webp',
    bannerImage: '/images/courses/placeholder-banner.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master SAP S/4HANA ERP, SAP FICO, SAP MM, SAP SD, and SAP ABAP Programming.',
    features: ['SAP S/4HANA ERP', 'SAP FICO', 'SAP MM', 'SAP SD', 'SAP ABAP', '24/7 Server Access']
  },
  'sap': {
    slug: 'sap-training-course',
    name: 'SAP Training',
    fullName: 'SAP S/4HANA Enterprise Master Program',
    icon: 'fas fa-server',
    color: 'blue',
    image: '/images/courses/placeholder-course.webp',
    bannerImage: '/images/courses/placeholder-banner.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master SAP S/4HANA ERP, SAP FICO, SAP MM, SAP SD, and SAP ABAP Programming.',
    features: ['SAP S/4HANA ERP', 'SAP FICO', 'SAP MM', 'SAP SD', 'SAP ABAP', '24/7 Server Access']
  },

  // AI/ML Engineering Training
  'aiml-engineering-training-course': {
    slug: 'aiml-engineering-training-course',
    name: 'AI/ML Engineering Training',
    fullName: 'AI/ML Engineering & MLOps Master Program',
    icon: 'fas fa-brain',
    color: 'teal',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Machine Learning, Deep Learning, PyTorch, Scikit-Learn, MLflow, and MLOps.',
    features: ['Machine Learning', 'Deep Learning', 'PyTorch & TensorFlow', 'Computer Vision & NLP', 'MLflow', 'MLOps Cloud Deployment']
  },
  'aiml-engineering': {
    slug: 'aiml-engineering-training-course',
    name: 'AI/ML Engineering Training',
    fullName: 'AI/ML Engineering & MLOps Master Program',
    icon: 'fas fa-brain',
    color: 'teal',
    image: '/images/courses/datascience-hero.webp',
    bannerImage: '/images/courses/datascience-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master Machine Learning, Deep Learning, PyTorch, Scikit-Learn, MLflow, and MLOps.',
    features: ['Machine Learning', 'Deep Learning', 'PyTorch & TensorFlow', 'Computer Vision & NLP', 'MLflow', 'MLOps Cloud Deployment']
  },

  // Mobile App Development Training
  'mobile-app-development-training-course': {
    slug: 'mobile-app-development-training-course',
    name: 'Mobile App Development Training',
    fullName: 'Mobile App Development Master Program (React Native & Flutter)',
    icon: 'fas fa-mobile-alt',
    color: 'emerald',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master React Native, Flutter, Dart, Firebase, and App Store / Play Store Deployment.',
    features: ['React Native & Expo', 'Flutter & Dart', 'Redux & Zustand', 'Firebase & Cloud Storage', 'Native Device APIs', 'App Store Publishing']
  },
  'mobile-app-development': {
    slug: 'mobile-app-development-training-course',
    name: 'Mobile App Development Training',
    fullName: 'Mobile App Development Master Program (React Native & Flutter)',
    icon: 'fas fa-mobile-alt',
    color: 'emerald',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master React Native, Flutter, Dart, Firebase, and App Store / Play Store Deployment.',
    features: ['React Native & Expo', 'Flutter & Dart', 'Redux & Zustand', 'Firebase & Cloud Storage', 'Native Device APIs', 'App Store Publishing']
  },
  'flutter': {
    slug: 'mobile-app-development-training-course',
    name: 'Mobile App Development Training',
    fullName: 'Mobile App Development Master Program (React Native & Flutter)',
    icon: 'fas fa-mobile-alt',
    color: 'emerald',
    image: '/images/courses/fullstack-hero.webp',
    bannerImage: '/images/courses/fullstack-hero.webp',
    logo: '/images/courses/placeholder-logo.webp',
    shortDesc: 'Master React Native, Flutter, Dart, Firebase, and App Store / Play Store Deployment.',
    features: ['React Native & Expo', 'Flutter & Dart', 'Redux & Zustand', 'Firebase & Cloud Storage', 'Native Device APIs', 'App Store Publishing']
  }
};
