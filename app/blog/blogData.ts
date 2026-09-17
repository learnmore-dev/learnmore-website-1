export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  icon: string;
  iconColor: string;
  tags: string[];
}

export const blogsData: { blogs: BlogPost[] } = {
  blogs: [
    {
      id: 1,
      slug: "15-features-of-python-that-make-everyone-love-it",
      title: "15 Features Of Python That Make Everyone Love It",
      excerpt: "Python has become one of the most popular programming languages in the world. Discover the key features that make developers fall in love with Python.",
      content: `<p>Python has taken the programming world by storm. Its simplicity, readability, and versatility have made it a favorite among beginners and experts alike.</p>
      <h2>1. Simple and Easy to Learn</h2>
      <p>Python's syntax is clean and intuitive, making it an excellent choice for beginners.</p>
      <h2>2. Interpreted Language</h2>
      <p>Python is an interpreted language, meaning you can run code line by line without compilation.</p>
      <h2>3. Dynamically Typed</h2>
      <p>You don't need to declare variable types in Python.</p>
      <h2>4. Extensive Standard Library</h2>
      <p>Python comes with "batteries included" - a vast standard library.</p>
      <h2>5. Cross-Platform Compatibility</h2>
      <p>Python runs on Windows, Mac, Linux, and even mobile platforms.</p>
      <h2>Conclusion</h2>
      <p>Python's combination of simplicity, power, and versatility makes it an invaluable tool.</p>`,
      author: "Rahul Sharma",
      date: "April 15, 2026",
      category: "Python",
      readTime: "5 min read",
      icon: "fab fa-python",
      iconColor: "from-blue-500 to-blue-700",
      tags: ["Python", "Programming", "Beginners"]
    },
    {
      id: 2,
      slug: "cloud-computing-trends-2026",
      title: "Cloud Computing Trends in 2026",
      excerpt: "Stay ahead of the curve with the latest cloud computing trends that are shaping the future of IT infrastructure.",
      content: `<p>Cloud computing continues to evolve at a rapid pace. Here are the top trends shaping the future.</p>
      <h2>1. Multi-Cloud and Hybrid Cloud Adoption</h2>
      <p>Organizations are increasingly adopting multi-cloud strategies.</p>
      <h2>2. Serverless Computing Growth</h2>
      <p>Serverless architectures are becoming mainstream.</p>
      <h2>3. Edge Computing Expansion</h2>
      <p>Processing data closer to the source is becoming critical.</p>
      <h2>Conclusion</h2>
      <p>Staying current with these cloud trends is essential for IT professionals.</p>`,
      author: "Priya Patel",
      date: "April 12, 2026",
      category: "Cloud",
      readTime: "7 min read",
      icon: "fas fa-cloud",
      iconColor: "from-cyan-500 to-blue-600",
      tags: ["Cloud", "AWS", "Azure", "DevOps"]
    },
    {
      id: 3,
      slug: "data-science-career-guide",
      title: "Data Science Career Guide: Complete Roadmap for 2026",
      excerpt: "Everything you need to know to start and grow your career in Data Science. From skills to salary expectations.",
      content: `<p>Data Science continues to be one of the most promising career paths in technology.</p>
      <h2>Essential Skills for Data Scientists</h2>
      <ul>
        <li>Python Programming</li>
        <li>SQL and Database Management</li>
        <li>Statistics and Mathematics</li>
        <li>Machine Learning Algorithms</li>
      </ul>
      <h2>Salary Expectations</h2>
      <p>Entry-level: ₹4-6 LPA, Mid-level: ₹8-12 LPA, Senior: ₹15-25 LPA</p>
      <h2>Conclusion</h2>
      <p>Data Science offers excellent career growth and financial rewards.</p>`,
      author: "Amit Kumar",
      date: "April 10, 2026",
      category: "Data Science",
      readTime: "10 min read",
      icon: "fas fa-chart-line",
      iconColor: "from-green-500 to-teal-600",
      tags: ["Data Science", "Career", "Machine Learning"]
    },
    {
      id: 4,
      slug: "devops-best-practices",
      title: "DevOps Best Practices for Modern Development Teams",
      excerpt: "Learn the essential DevOps practices that can transform your development workflow and improve collaboration.",
      content: `<p>DevOps has revolutionized how teams develop, deploy, and maintain software.</p>
      <h2>1. Continuous Integration/Continuous Deployment</h2>
      <p>Automate your build, test, and deployment processes.</p>
      <h2>2. Infrastructure as Code</h2>
      <p>Manage infrastructure using configuration files.</p>
      <h2>3. Monitoring and Logging</h2>
      <p>Implement comprehensive monitoring and centralized logging.</p>
      <h2>Conclusion</h2>
      <p>Adopting these practices leads to faster delivery and better quality.</p>`,
      author: "Rohit Mehra",
      date: "April 8, 2026",
      category: "DevOps",
      readTime: "8 min read",
      icon: "fas fa-cogs",
      iconColor: "from-purple-500 to-pink-600",
      tags: ["DevOps", "CI/CD", "Automation"]
    },
    {
      id: 5,
      slug: "top-10-python-libraries-for-data-science",
      title: "Top 10 Python Libraries for Data Science in 2026",
      excerpt: "Discover the must-know Python libraries for data analysis and machine learning.",
      content: `<p>Python's ecosystem of libraries makes it the top choice for data science.</p>
      <h2>1. NumPy</h2>
      <p>Fundamental package for numerical computing.</p>
      <h2>2. Pandas</h2>
      <p>Data manipulation and analysis library.</p>
      <h2>3. Matplotlib</h2>
      <p>Comprehensive plotting and visualization library.</p>
      <h2>4. Scikit-learn</h2>
      <p>Machine learning library with various algorithms.</p>
      <h2>Conclusion</h2>
      <p>Mastering these libraries will make you a proficient data scientist.</p>`,
      author: "Sanjana Nagraj",
      date: "April 5, 2026",
      category: "Python",
      readTime: "6 min read",
      icon: "fab fa-python",
      iconColor: "from-blue-500 to-blue-700",
      tags: ["Python", "Data Science", "Libraries"]
    },
    {
      id: 6,
      slug: "aws-vs-azure-vs-gcp-comparison",
      title: "AWS vs Azure vs GCP: Which Cloud Platform is Right for You?",
      excerpt: "A comprehensive comparison of the top three cloud platforms.",
      content: `<p>Choosing the right cloud platform can be challenging. Here's a detailed comparison.</p>
      <h2>AWS (Amazon Web Services)</h2>
      <p>The market leader with the most extensive service offerings.</p>
      <h2>Azure (Microsoft Azure)</h2>
      <p>Strong enterprise integration and excellent hybrid cloud capabilities.</p>
      <h2>GCP (Google Cloud Platform)</h2>
      <p>Leader in data analytics, AI/ML, and container technologies.</p>
      <h2>Conclusion</h2>
      <p>Consider factors like pricing, services, and existing tech stack when choosing.</p>`,
      author: "Karthik R",
      date: "April 3, 2026",
      category: "Cloud",
      readTime: "12 min read",
      icon: "fas fa-cloud-upload-alt",
      iconColor: "from-cyan-500 to-blue-600",
      tags: ["AWS", "Azure", "GCP", "Cloud"]
    },
    {
      id: 7,
      slug: "java-vs-python-which-is-better-for-career",
      title: "Java vs Python: Which Programming Language is Better for Your Career?",
      excerpt: "A detailed comparison of Java and Python to help you decide which language to learn.",
      content: `<p>Both Java and Python are powerful languages with their own strengths.</p>
      <h2>Java Strengths</h2>
      <p>Platform independence, strong typing, excellent for enterprise applications.</p>
      <h2>Python Strengths</h2>
      <p>Easy to learn, great for data science, AI, and rapid development.</p>
      <h2>Conclusion</h2>
      <p>Choose based on your career goals and project requirements.</p>`,
      author: "Rahul Sharma",
      date: "March 28, 2026",
      category: "Programming",
      readTime: "8 min read",
      icon: "fab fa-java",
      iconColor: "from-orange-500 to-red-600",
      tags: ["Java", "Python", "Career"]
    },
    {
      id: 8,
      slug: "cybersecurity-fundamentals",
      title: "Cybersecurity Fundamentals: Essential Concepts Every Professional Should Know",
      excerpt: "Learn the core concepts of cybersecurity and how to protect systems from modern threats.",
      content: `<p>Cybersecurity is more important than ever in today's digital world.</p>
      <h2>Network Security</h2>
      <p>Protecting networks from unauthorized access and attacks.</p>
      <h2>Application Security</h2>
      <p>Securing software applications from vulnerabilities.</p>
      <h2>Information Security</h2>
      <p>Protecting data integrity and privacy.</p>
      <h2>Conclusion</h2>
      <p>Understanding cybersecurity fundamentals is essential for all IT professionals.</p>`,
      author: "Anjali Singh",
      date: "March 25, 2026",
      category: "Cybersecurity",
      readTime: "9 min read",
      icon: "fas fa-shield-alt",
      iconColor: "from-red-500 to-red-700",
      tags: ["Cybersecurity", "Security", "Networking"]
    },
    {
      id: 9,
      slug: "full-stack-development-roadmap",
      title: "Full Stack Development Roadmap: From Beginner to Pro",
      excerpt: "A complete guide to becoming a full stack developer with the right skills and tools.",
      content: `<p>Full stack development is one of the most sought-after skills in the industry.</p>
      <h2>Frontend Technologies</h2>
      <p>HTML, CSS, JavaScript, React, Angular, or Vue.js</p>
      <h2>Backend Technologies</h2>
      <p>Node.js, Python, Java, or PHP with appropriate frameworks</p>
      <h2>Database Management</h2>
      <p>SQL, MongoDB, or PostgreSQL</p>
      <h2>Conclusion</h2>
      <p>Follow this roadmap to become a successful full stack developer.</p>`,
      author: "Amit Kumar",
      date: "March 20, 2026",
      category: "Web Development",
      readTime: "10 min read",
      icon: "fas fa-code",
      iconColor: "from-indigo-500 to-purple-600",
      tags: ["Full Stack", "Web Development", "Career"]
    },
    {
      id: 10,
      slug: "react-js-complete-guide",
      title: "React JS Complete Guide for Beginners and Beyond",
      excerpt: "Master React JS from components, props, and state to hooks, context API, and performance optimization.",
      content: `<p>React JS has redefined frontend development with modern component-driven architectures.</p>
      <h2>1. Component-Based Architecture</h2>
      <p>Build encapsulated components that manage their own state and compose them to make complex UIs.</p>
      <h2>2. Virtual DOM Efficiency</h2>
      <p>React creates an in-memory data-structure cache to compute UI diffs efficiently.</p>
      <h2>3. Hooks & Modern State Management</h2>
      <p>Leverage useState, useEffect, and custom hooks for clean functional components.</p>
      <h2>Conclusion</h2>
      <p>React continues to lead modern web UI development across industry leaders.</p>`,
      author: "Rahul Sharma",
      date: "March 18, 2026",
      category: "Web Development",
      readTime: "8 min read",
      icon: "fab fa-react",
      iconColor: "from-cyan-400 to-blue-600",
      tags: ["React", "JavaScript", "Web Development"]
    }
  ]
};
