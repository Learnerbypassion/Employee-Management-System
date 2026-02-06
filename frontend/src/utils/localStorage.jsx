 
const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update website",
        "taskDescription": "This task involves completely revamping the homepage design to improve user engagement and overall visual appeal. The focus is on creating a modern, clean, and responsive layout that works well across different screen sizes. The employee must analyze the existing design, identify usability issues, and apply updated UI principles. Attention should be given to color contrast, typography, spacing, and alignment. Collaboration with content teams may be required. The final output should improve navigation clarity, user satisfaction, and overall brand perception.",
        "taskDate": "12/10/2024",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Client meeting",
        "taskDescription": "This task required attending a detailed client meeting to gather project requirements, expectations, and deadlines. Important discussions included feature scope, technical limitations, and future scalability plans. Notes were taken carefully and shared with the internal team after the meeting. The employee clarified client doubts and proposed feasible solutions. This task ensured alignment between stakeholders and helped reduce future misunderstandings during project execution.",
        "taskDate": "10/10/2024",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix bugs",
        "taskDescription": "The objective of this task is to resolve reported bugs from the issue tracker. Each issue must be reproduced, analyzed, and fixed without breaking existing functionality. The employee should write clean and maintainable code while applying fixes. After resolution, thorough testing is required to ensure stability. This task improves application reliability and enhances the overall user experience.",
        "taskDate": "14/10/2024",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Performance audit",
        "taskDescription": "This task focuses on evaluating website performance metrics such as load time, responsiveness, and resource usage. The employee should identify bottlenecks, optimize assets, and suggest improvements. Tools like Lighthouse or browser developer tools may be used. Results should be documented and shared with the development team for further action.",
        "taskDate": "15/10/2024",
        "category": "Optimization"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Content update",
        "taskDescription": "This task involved reviewing and updating outdated content across various pages. The employee ensured accuracy, clarity, and consistency with current branding guidelines. Grammar and readability improvements were made. Updated content helps maintain credibility and improves search engine visibility.",
        "taskDate": "09/10/2024",
        "category": "Content"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Accessibility improvements",
        "taskDescription": "The goal of this task is to make the website more accessible to users with disabilities. This includes improving contrast ratios, keyboard navigation, and screen reader compatibility. Proper labels, alt text, and semantic HTML elements must be used to meet accessibility standards.",
        "taskDate": "16/10/2024",
        "category": "Accessibility"
      }
    ]
  },

  {
    "id": 2,
    "firstName": "Sneha",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 0,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database optimization",
        "taskDescription": "This task involves analyzing database queries to identify performance issues and inefficiencies. The employee must refactor slow queries, add proper indexing, and reduce redundant database calls. Testing should be performed to validate improvements. The goal is to ensure faster data retrieval and improved system scalability.",
        "taskDate": "11/10/2024",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Design new feature",
        "taskDescription": "This task required creating design mockups for a new application feature. The employee worked on wireframes, user flows, and visual components. Feedback from stakeholders was incorporated to refine the design. The final mockups help developers implement the feature accurately.",
        "taskDate": "09/10/2024",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Schema review",
        "taskDescription": "The employee reviewed the existing database schema to identify normalization issues and potential improvements. Recommendations were documented and discussed with the backend team. This task helps maintain data consistency and long-term maintainability.",
        "taskDate": "13/10/2024",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Backup setup",
        "taskDescription": "This task involved setting up automated database backups to prevent data loss. Backup schedules were configured and tested for reliability. The employee ensured secure storage and easy recovery procedures.",
        "taskDate": "08/10/2024",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Query monitoring",
        "taskDescription": "This task focuses on monitoring live database queries to detect slow execution patterns. Logs were analyzed and performance thresholds were defined. Continuous monitoring helps proactively resolve issues.",
        "taskDate": "14/10/2024",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Data cleanup",
        "taskDescription": "This task involved removing obsolete and duplicate records from the database. Validation checks were applied to ensure data integrity. The cleanup improved database performance and reduced storage usage.",
        "taskDate": "07/10/2024",
        "category": "Database"
      }
    ]
  },

  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare presentation",
        "taskDescription": "This task involves creating a professional presentation for an upcoming client meeting. The employee must prepare structured slides with clear visuals and concise explanations. The presentation should communicate ideas effectively and reflect project progress accurately.",
        "taskDate": "13/10/2024",
        "category": "Presentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code review",
        "taskDescription": "The employee reviewed code written by team members to ensure quality, performance, and adherence to coding standards. Suggestions were provided to improve maintainability and reduce technical debt.",
        "taskDate": "12/10/2024",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Testing",
        "taskDescription": "This task focused on testing the latest application build to identify bugs and usability issues. Test cases were executed and results documented. Feedback was shared with developers for fixes.",
        "taskDate": "08/10/2024",
        "category": "QA"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug verification",
        "taskDescription": "After fixes were implemented, this task ensured that reported bugs were fully resolved. Regression testing was conducted to confirm no new issues were introduced.",
        "taskDate": "09/10/2024",
        "category": "QA"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Feature planning",
        "taskDescription": "This task involved planning upcoming features by analyzing requirements and technical feasibility. Discussions were held with product managers to prioritize tasks.",
        "taskDate": "14/10/2024",
        "category": "Planning"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Documentation review",
        "taskDescription": "The employee reviewed technical documentation to ensure clarity and accuracy. Corrections and updates were suggested to help future developers understand the system.",
        "taskDate": "07/10/2024",
        "category": "Documentation"
      }
    ]
  },

  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Write documentation",
        "taskDescription": "This task involves updating project documentation to reflect recent changes. The employee must ensure clarity, structure, and accuracy. Proper formatting and examples should be included for better understanding.",
        "taskDate": "13/10/2024",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Set up CI/CD",
        "taskDescription": "This task focuses on implementing an automated CI/CD pipeline. Build, test, and deployment stages were configured to ensure faster and safer releases.",
        "taskDate": "11/10/2024",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Environment setup",
        "taskDescription": "The employee configured development and staging environments to match production settings. This reduces deployment-related issues.",
        "taskDate": "09/10/2024",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Release planning",
        "taskDescription": "This task involved planning upcoming releases, coordinating with teams, and defining timelines. Proper planning reduces risks and delays.",
        "taskDate": "14/10/2024",
        "category": "Planning"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Tool evaluation",
        "taskDescription": "The employee evaluated new tools and technologies to improve workflow efficiency. Findings were documented for management review.",
        "taskDate": "08/10/2024",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Monitoring setup",
        "taskDescription": "This task focused on configuring monitoring tools to track system health and performance. Alerts were set up to detect failures early.",
        "taskDate": "15/10/2024",
        "category": "DevOps"
      }
    ]
  },

  {
    "id": 5,
    "firstName": "Karan",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "UI redesign",
        "taskDescription": "This task involves redesigning the application UI to improve user experience. The employee focused on layout consistency, usability, and responsiveness across devices.",
        "taskDate": "14/10/2024",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Deploy new build",
        "taskDescription": "This task required deploying the latest application build to production. Pre-deployment checks and post-deployment validation were performed.",
        "taskDate": "09/10/2024",
        "category": "DevOps"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client feedback",
        "taskDescription": "This task focused on collecting and analyzing client feedback after product launch. Insights were documented and shared with the team.",
        "taskDate": "12/10/2024",
        "category": "Support"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Usability testing",
        "taskDescription": "The employee conducted usability tests with real users to identify pain points. Findings were used to improve product flow.",
        "taskDate": "13/10/2024",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Design system update",
        "taskDescription": "This task involved updating the design system components to ensure consistency across the application.",
        "taskDate": "08/10/2024",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "UX research",
        "taskDescription": "This task focused on researching user behavior through surveys and analytics. Insights were used to guide future design decisions.",
        "taskDate": "15/10/2024",
        "category": "Research"
      }
    ]
  }
];

const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('Employees', JSON.stringify(employees));
    localStorage.setItem('Admin', JSON.stringify(admin));
}


export const getLocalStorage = ()=>{
    const employeesStr = localStorage.getItem('Employees');
    const adminStr = localStorage.getItem('Admin');
    // console.log(employeesStr , adminStr);
    return {employees: JSON.parse(employeesStr), admin: JSON.parse(adminStr)}
}