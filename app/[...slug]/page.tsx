'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';
import coursesData from '@/data/courses.json';
import locationsData from '@/data/locations.json';

interface CatchAllPageProps {
  params: {
    slug: string[];
  };
}

// Syllabus PDF mapping
const syllabusPDFs: Record<string, string> = {
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
const syllabusDetails: Record<string, { modules: { title: string; topics: string[] }[] }> = {
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
const defaultSyllabus = {
  modules: [
    { title: "Introduction to the Course", topics: ["Course Overview", "Learning Objectives", "Industry Applications", "Tools Setup", "Career Path"] },
    { title: "Core Concepts", topics: ["Fundamentals", "Key Terminology", "Best Practices", "Common Use Cases", "Hands-on Exercise"] },
    { title: "Advanced Topics", topics: ["Advanced Techniques", "Optimization Strategies", "Real-world Scenarios", "Case Studies", "Project Work"] },
    { title: "Practical Implementation", topics: ["Project Planning", "Implementation Guide", "Testing & Debugging", "Deployment", "Portfolio Building"] },
    { title: "Career Preparation", topics: ["Resume Building", "Interview Questions", "Mock Interviews", "Certification Guide", "Job Search Strategy"] }
  ]
};

// કોર્સ મેપિંગ - બધા કોર્સ
const courseMapping = {
  // AWS & Cloud DevOps
  'aws': { 
    slug: 'cloud-devops', 
    name: 'AWS Training', 
    fullName: 'AWS & Cloud DevOps Training',
    icon: 'fab fa-aws', 
    color: 'blue',
    image: '/images/courses/aws-hero.jpg',
    bannerImage: '/images/courses/aws-banner.jpg',
    logo: '/images/courses/aws-logo.png',
    shortDesc: 'Master AWS cloud computing, Linux, Docker, Kubernetes, Jenkins, and DevOps practices.',
    features: ['AWS Cloud Services', 'Linux Administration', 'Docker Containers', 'Kubernetes', 'Jenkins CI/CD', 'Terraform IaC']
  },
  
  // Python Training
  'python': { 
    slug: 'python-fullstack', 
    name: 'Python Training', 
    fullName: 'Python Training Program',
    icon: 'fab fa-python', 
    color: 'yellow',
    image: '/images/courses/python-hero.jpg',
    bannerImage: '/images/courses/python-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master Python programming from basics to advanced with real-world projects and applications.',
    features: ['Python Basics', 'Object Oriented Programming', 'Data Structures', 'File Handling', 'Modules & Packages', 'Web Development']
  },
  
  // Python Full Stack Training
  'python-fullstack': { 
    slug: 'python-fullstack', 
    name: 'Python Full Stack Training', 
    fullName: 'Python Full Stack Development',
    icon: 'fab fa-python', 
    color: 'yellow',
    image: '/images/courses/fullstack-hero.jpg',
    bannerImage: '/images/courses/fullstack-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master Python, Django, React, and full-stack web development.',
    features: ['Python Programming', 'Django Framework', 'React.js', 'REST APIs', 'Database Design', 'Deployment']
  },
  
  // DevOps Training
  'devops': { 
    slug: 'cloud-devops', 
    name: 'DevOps Training', 
    fullName: 'DevOps Training Program',
    icon: 'fas fa-cogs', 
    color: 'blue',
    image: '/images/courses/aws-hero.jpg',
    bannerImage: '/images/courses/aws-banner.jpg',
    logo: '/images/courses/aws-logo.png',
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
    image: '/images/courses/testing-hero.jpg',
    bannerImage: '/images/courses/testing-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
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
    image: '/images/courses/fullstack-hero.jpg',
    bannerImage: '/images/courses/fullstack-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
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
    image: '/images/courses/fullstack-hero.jpg',
    bannerImage: '/images/courses/fullstack-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master Java, Spring Boot, Hibernate, React, and full-stack development.',
    features: ['Core Java', 'Spring Boot', 'Hibernate', 'React.js', 'REST APIs', 'Database Management', 'Microservices']
  },
  
  // Data Analytics Training
  'data-analytics': { 
    slug: 'data-analytics', 
    name: 'Data Analytics Training', 
    fullName: 'Data Analytics Program',
    icon: 'fas fa-chart-line', 
    color: 'green',
    image: '/images/courses/analytics-hero.jpg',
    bannerImage: '/images/courses/analytics-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
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
    image: '/images/courses/aws-hero.jpg',
    bannerImage: '/images/courses/aws-banner.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
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
    image: '/images/courses/datascience-hero.jpg',
    bannerImage: '/images/courses/datascience-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
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
    image: '/images/courses/datascience-hero.jpg',
    bannerImage: '/images/courses/datascience-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
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
    image: '/images/courses/analytics-hero.jpg',
    bannerImage: '/images/courses/analytics-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
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
    image: '/images/courses/placeholder-hero.jpg',
    bannerImage: '/images/courses/placeholder-banner.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
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
    image: '/images/courses/placeholder-hero.jpg',
    bannerImage: '/images/courses/placeholder-banner.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
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
    image: '/images/courses/fullstack-hero.jpg',
    bannerImage: '/images/courses/fullstack-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master React.js, hooks, state management, and modern frontend development.',
    features: ['React Basics', 'Hooks', 'State Management', 'React Router', 'API Integration', 'Deployment']
  }
};

export default function CatchAllPage({ params }: CatchAllPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const fullSlug = params.slug.join('-');
  
  // કોર્સ શોધો
  let foundCourse = null;
  let courseKey = null;
  
  for (const key of Object.keys(courseMapping)) {
    if (fullSlug.startsWith(`${key}-training-in-`)) {
      courseKey = key;
      foundCourse = courseMapping[key as keyof typeof courseMapping];
      break;
    }
  }
  
  if (!foundCourse) {
    notFound();
  }
  
  // લોકેશન શોધો
  const locationPart = fullSlug.replace(`${courseKey}-training-in-`, '');
  const location = locationsData.locations.find(l => 
    l.slug === locationPart || 
    l.name.toLowerCase().replace(/\s+/g, '-') === locationPart
  );
  
  if (!location) {
    notFound();
  }
  
  // કોર્સ ડેટા લોડ કરો
  const course = coursesData.courses.find(c => c.slug === courseKey);
  
  // Get syllabus PDF path
  const syllabusPDFPath = syllabusPDFs[courseKey!] || '/pdfs/default-syllabus.pdf';
  
  // Get syllabus details for this course
  const syllabus = syllabusDetails[courseKey!] || defaultSyllabus;
  
  // Handle syllabus download (only after enrollment)
  const handleDownloadSyllabus = () => {
    if (isEnrolled) {
      const link = document.createElement('a');
      link.href = syllabusPDFPath;
      link.download = `${foundCourse.name.toLowerCase().replace(/\s+/g, '-')}-syllabus.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setShowSyllabusModal(true);
    }
  };
  
  // Handle successful enrollment
  const handleEnrollmentSuccess = () => {
    setIsEnrolled(true);
    setIsModalOpen(false);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = syllabusPDFPath;
      link.download = `${foundCourse.name.toLowerCase().replace(/\s+/g, '-')}-syllabus.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };
  
  // કલર કોડ
  const colorClasses = {
    blue: { bg: "from-blue-600 to-blue-800", light: "bg-blue-50", hover: "blue-700", text: "text-blue-600", border: "border-blue-600" },
    yellow: { bg: "from-yellow-600 to-yellow-800", light: "bg-yellow-50", hover: "yellow-700", text: "text-yellow-600", border: "border-yellow-600" },
    purple: { bg: "from-purple-600 to-purple-800", light: "bg-purple-50", hover: "purple-700", text: "text-purple-600", border: "border-purple-600" },
    green: { bg: "from-green-600 to-green-800", light: "bg-green-50", hover: "green-700", text: "text-green-600", border: "border-green-600" },
    orange: { bg: "from-orange-600 to-orange-800", light: "bg-orange-50", hover: "orange-700", text: "text-orange-600", border: "border-orange-600" },
    red: { bg: "from-red-600 to-red-800", light: "bg-red-50", hover: "red-700", text: "text-red-600", border: "border-red-600" },
    teal: { bg: "from-teal-600 to-teal-800", light: "bg-teal-50", hover: "teal-700", text: "text-teal-600", border: "border-teal-600" }
  };
  
  const colors = colorClasses[foundCourse.color as keyof typeof colorClasses] || colorClasses.blue;
  
  // કોર્સ ફીચર્સ
  const features = course?.features || foundCourse.features || [
    "Expert-led training sessions",
    "Hands-on practical projects",
    "Industry-recognized certification",
    "Placement assistance",
    "Real-world case studies",
    "24/7 mentor support"
  ];
  
  const tools = course?.tools || ["Industry Tools", "Modern Technologies", "Best Practices"];
  const duration = course?.duration || "3-6 Months";
  const price = course?.price || 29999;
  const level = course?.level || "Beginner to Intermediate";
  const certification = course?.certification || `${foundCourse.name} Certification`;
  const fullDescription = course?.fullDescription || foundCourse.shortDesc || `Comprehensive ${foundCourse.name} program designed to make you industry-ready with hands-on experience and real-world projects.`;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <Link href="/" className="hover:text-red-500 transition">Home</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              <Link href="/course" className="hover:text-red-500 transition">Courses</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              <span className="text-gray-800 font-medium">{foundCourse.name}</span>
              <i className="fas fa-chevron-right text-xs"></i>
              <span className="text-gray-800 font-medium">{location.name}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className={`bg-gradient-to-r ${colors.bg} text-white`}>
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 rounded-xl p-3 backdrop-blur">
                    <i className={`${foundCourse.icon} text-4xl`}></i>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold">{foundCourse.name}</h1>
                    <p className="text-white/80 mt-1">Training at {location.name}</p>
                  </div>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">{foundCourse.shortDesc}</p>
                
                {/* Stats */}
                <div className="flex gap-3 flex-wrap mb-6">
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 text-sm">
                    <i className="fas fa-star text-yellow-400"></i>
                    <span>4.9 Rating</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 text-sm">
                    <i className="fas fa-users"></i>
                    <span>5,000+ Students</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 text-sm">
                    <i className="fas fa-briefcase"></i>
                    <span>95% Placement</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex gap-4 flex-wrap">
                  <button onClick={() => setIsModalOpen(true)} className={`bg-white ${colors.text} px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg text-sm md:text-base`}>
                    Enroll Now at {location.name}
                  </button>
                  <button 
                    onClick={handleDownloadSyllabus}
                    className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition text-sm md:text-base"
                  >
                    <i className="fas fa-download mr-2"></i> Download Syllabus
                  </button>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                    <Image
                      src={foundCourse.image || '/images/courses/placeholder-course.jpg'}
                      alt={`${foundCourse.name} Training`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/courses/placeholder-course.jpg';
                      }}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <i className={`${foundCourse.icon} text-4xl mb-2`}></i>
                    <p className="text-lg font-bold">Certified Training Program</p>
                    <p className="text-white/70 text-sm">Industry Recognized Certification</p>
                    <div className="flex justify-center gap-6 mt-4">
                      <div className="text-center">
                        <p className="text-xl font-bold">₹{price.toLocaleString()}</p>
                        <p className="text-xs text-white/70">Course Fee</p>
                      </div>
                      <div className="w-px bg-white/30"></div>
                      <div className="text-center">
                        <p className="text-xl font-bold">{duration}</p>
                        <p className="text-xs text-white/70">Duration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location Info Bar */}
        <div className="bg-white shadow-md sticky top-0 z-10">
          <div className="container mx-auto px-4 py-2.5">
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-red-500"></i>
                <span className="font-semibold">{location.name}:</span>
                <span className="text-gray-600 truncate max-w-[300px]">{location.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <a href={`tel:${location.phone}`} className="text-red-500 hover:text-red-600">
                  <i className="fas fa-phone"></i> {location.phone}
                </a>
                <Link href="/location" className="text-blue-500 hover:text-blue-600 text-sm">
                  View All Locations →
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-200 mb-6 overflow-x-auto">
            {['overview', 'syllabus', 'projects', 'career', 'certificate'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 font-semibold text-sm md:text-base transition whitespace-nowrap ${
                  activeTab === tab
                    ? `border-b-2 ${colors.border} ${colors.text}`
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'overview' && '📖 Overview'}
                {tab === 'syllabus' && '📚 Syllabus'}
                {tab === 'projects' && '🚀 Projects'}
                {tab === 'career' && '💼 Career'}
                {tab === 'certificate' && '🎓 Certificate'}
              </button>
            ))}
          </div>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <i className={`${foundCourse.icon} ${colors.text}`}></i>
                    About the Course
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{fullDescription}</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-5">
                  <h2 className="text-xl font-bold mb-3">What You'll Learn</h2>
                  <div className="grid md:grid-cols-2 gap-2">
                    {features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <i className="fas fa-check-circle text-green-500 mt-0.5 text-xs"></i>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
                  <div className="text-center mb-4">
                    <div className={`w-20 h-20 ${colors.light} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <i className={`${foundCourse.icon} text-3xl ${colors.text}`}></i>
                    </div>
                    <h3 className="text-lg font-bold">Course Highlights</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-semibold">{duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Level</span>
                      <span className="font-semibold">{level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Certification</span>
                      <span className="font-semibold text-right">{certification}</span>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-2">Tools Covered</p>
                      <div className="flex flex-wrap gap-2">
                        {tools.slice(0, 5).map((tool: string, idx: number) => (
                          <span key={idx} className="bg-gray-100 px-2 py-1 rounded-full text-xs">{tool}</span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-2xl font-bold text-center text-blue-600">₹{price.toLocaleString()}</p>
                      <button onClick={() => setIsModalOpen(true)} className="w-full mt-3 bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Syllabus Tab */}
          {activeTab === 'syllabus' && (
            <div className="bg-white rounded-xl shadow-md p-5">
              <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <i className={`fas fa-book-open ${colors.text}`}></i>
                  Course Syllabus
                </h2>
                <button
                  onClick={handleDownloadSyllabus}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${
                    isEnrolled 
                      ? `bg-${colors.text} text-white hover:bg-${colors.hover}` 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!isEnrolled}
                >
                  <i className="fas fa-download"></i> Download PDF
                  {!isEnrolled && <span className="text-xs ml-1">(Enroll first)</span>}
                </button>
              </div>
              
              <div className="space-y-4">
                {syllabus.modules.map((module, idx) => (
                  <details key={idx} className="border rounded-lg p-4 hover:shadow-md transition">
                    <summary className="font-semibold text-md cursor-pointer hover:text-blue-600 flex items-center gap-2">
                      <div className={`w-6 h-6 ${colors.light} rounded-full flex items-center justify-center`}>
                        <span className={`${colors.text} text-sm font-bold`}>{idx + 1}</span>
                      </div>
                      {module.title}
                    </summary>
                    <ul className="mt-3 ml-6 space-y-2">
                      {module.topics.map((topic, tidx) => (
                        <li key={tidx} className="text-gray-600 text-sm flex items-start gap-2">
                          <i className={`fas fa-circle ${colors.text} text-[6px] mt-1.5`}></i>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
              
              {!isEnrolled && (
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-lock text-yellow-600"></i>
                    <p className="text-yellow-700 text-sm">
                      <strong>Full syllabus is locked.</strong> Please enroll to access the complete syllabus and download PDF.
                    </p>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="ml-auto bg-yellow-500 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Real-World Projects</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Project 1: Application Development", description: "Build a complete application using the technologies learned in this course." },
                  { name: "Project 2: Real-World Implementation", description: "Implement real-world scenarios and industry best practices." },
                  { name: "Project 3: Deployment & Showcase", description: "Deploy your project and showcase it in your portfolio." },
                  { name: "Project 4: Capstone Project", description: "Work on a comprehensive capstone project that demonstrates all skills learned." }
                ].map((project, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 ${colors.light} rounded-lg flex items-center justify-center`}>
                        <i className={`fas fa-code ${colors.text}`}></i>
                      </div>
                      <h3 className="font-bold">{project.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Career Tab */}
          {activeTab === 'career' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-5">
                <h2 className="text-xl font-bold mb-3">Career Opportunities</h2>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Software Developer", "Web Developer", "Application Developer",
                    "Full Stack Developer", "Backend Engineer", "Frontend Developer",
                    "Cloud Engineer", "DevOps Engineer"
                  ].map((career, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <i className={`fas fa-check-circle ${colors.text} text-xs`}></i>
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5">
                <h2 className="text-xl font-bold mb-3">Top Hiring Companies</h2>
                <div className="flex flex-wrap gap-2">
                  {["Amazon", "Google", "Microsoft", "TCS", "Infosys", "Accenture", "IBM", "Deloitte", "Wipro", "Capgemini"].map((company, idx) => (
                    <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{company}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Certificate Tab */}
          {activeTab === 'certificate' && (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <i className="fas fa-certificate text-yellow-500"></i>
                Course Completion Certificate
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="relative rounded-xl overflow-hidden border-4 border-yellow-500 mb-6 bg-white shadow-lg">
                  <Image
                    src="/images/courses/certificate-sample.png"
                    alt="Course Completion Certificate"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const textVersion = document.createElement('div');
                        textVersion.className = "bg-gradient-to-br from-yellow-50 to-amber-50 p-8 text-center";
                        textVersion.innerHTML = `
                          <i class="fas fa-certificate text-6xl text-yellow-500 mb-4"></i>
                          <h3 class="text-3xl font-bold text-gray-800 mb-2">CERTIFICATE OF COMPLETION</h3>
                          <div class="w-24 h-1 bg-yellow-500 mx-auto my-3"></div>
                          <p class="text-gray-600 text-lg mb-6">This certifies that</p>
                          <p class="text-4xl font-bold text-red-600 mb-4">[Student Name]</p>
                          <p class="text-gray-600 text-lg mb-3">has successfully completed the course</p>
                          <p class="text-2xl font-bold text-blue-600 mb-8 bg-blue-50 inline-block px-6 py-2 rounded-lg">
                            ${foundCourse.name}
                          </p>
                          <div class="flex justify-center gap-12 mb-6">
                            <div>
                              <p class="text-gray-500 text-sm">Awarded on</p>
                              <p class="font-semibold">[Date]</p>
                            </div>
                            <div>
                              <p class="text-gray-500 text-sm">Issued by</p>
                              <p class="font-semibold">Learnmore Technologies</p>
                            </div>
                          </div>
                          <div class="border-t-2 border-gray-300 pt-6 mt-4">
                            <div class="flex justify-between px-8">
                              <div class="text-center">
                                <div class="w-40 h-0.5 bg-gray-400 mb-2"></div>
                                <p class="text-sm text-gray-500">Authorized Signature</p>
                              </div>
                              <div class="text-center">
                                <div class="w-40 h-0.5 bg-gray-400 mb-2"></div>
                                <p class="text-sm text-gray-500">Program Director</p>
                              </div>
                            </div>
                          </div>
                          <p class="text-xs text-gray-400 mt-6">
                            Certificate ID: LMT-${courseKey?.toUpperCase()}-2026-XXXX
                          </p>
                        `;
                        parent.appendChild(textVersion);
                      }
                    }}
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Upon successful completion, you'll receive an industry-recognized certificate that validates your skills in {foundCourse.name}.
                </p>
                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={() => window.open('/images/courses/certificate-sample.png', '_blank')}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
                  >
                    View Certificate
                  </button>
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/images/courses/certificate-sample.png';
                      link.download = `${courseKey}-certificate.png`;
                      link.click();
                    }}
                    className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
                  >
                    Download Certificate
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* CTA Section */}
        <section className={`bg-gradient-to-r ${colors.bg} text-white py-10 mt-4`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Your {foundCourse.name.split(' ')[0]} Career?</h2>
            <p className="text-base mb-5">Join our training at {location.name} and become a certified professional</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-800 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                Enroll Now
              </button>
              <button 
                onClick={handleDownloadSyllabus}
                className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition text-sm"
              >
                <i className="fas fa-download mr-2"></i> Download Syllabus
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EnrollModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        courseName={foundCourse.name}
        onSuccess={handleEnrollmentSuccess}
      />
      
      {/* Syllabus Download Modal - Message for non-enrolled users */}
      {showSyllabusModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] p-4" onClick={() => setShowSyllabusModal(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-download text-yellow-500 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Download Syllabus</h3>
            <p className="text-gray-600 mb-4">
              Please complete the enrollment form to download the syllabus.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setShowSyllabusModal(false);
                  setIsModalOpen(true);
                }}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => setShowSyllabusModal(false)}
                className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}