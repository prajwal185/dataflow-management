
import { User, Project, Task, Comment, Activity } from './types';

export const sampleData: {
    users: User[];
    projects: Project[];
    tasks: Task[];
    comments: Comment[];
    activity: Activity[];
} = {
    "users": [
        { "id": "user1", "name": "John Smith", "email": "admin@demo.com", "password": "demo123", "role": "Admin", "avatar": "👨‍💼", "status": "online" },
        { "id": "user2", "name": "Sarah Johnson", "email": "pm@demo.com", "password": "demo123", "role": "Project Manager", "avatar": "👩‍💼", "status": "online" },
        { "id": "user3", "name": "Mike Chen", "email": "dev@demo.com", "password": "demo123", "role": "Developer", "avatar": "👨‍💻", "status": "away" },
        { "id": "user4", "name": "Emily Davis", "email": "tester@demo.com", "password": "demo123", "role": "Tester", "avatar": "👩‍🔬", "status": "online" },
        { "id": "user5", "name": "Alex Rodriguez", "email": "designer@demo.com", "password": "demo123", "role": "Designer", "avatar": "👨‍🎨", "status": "offline" }
    ],
    "projects": [
        { "id": "proj1", "name": "Mobile App Development", "key": "MAD", "description": "Development of the new mobile application for customer engagement", "lead": "user2", "color": "#2196F3", "status": "active", "created": "2025-08-01", "dueDate": "2025-12-15" },
        { "id": "proj2", "name": "Website Redesign", "key": "WEB", "description": "Complete redesign of the company website with modern UI/UX", "lead": "user5", "color": "#4CAF50", "status": "active", "created": "2025-07-15", "dueDate": "2025-11-30" },
        { "id": "proj3", "name": "Marketing Campaign", "key": "MKT", "description": "Q4 marketing campaign for product launch", "lead": "user1", "color": "#FF9800", "status": "active", "created": "2025-08-10", "dueDate": "2025-10-31" },
        { "id": "proj4", "name": "Infrastructure Upgrade", "key": "INF", "description": "Server infrastructure modernization and cloud migration", "lead": "user3", "color": "#9C27B0", "status": "planning", "created": "2025-08-20", "dueDate": "2026-02-28" }
    ],
    "tasks": [
        { "id": "MAD-1", "title": "Design user authentication screens", "description": "Create mockups and prototypes for login, signup, and password reset screens", "type": "Story", "priority": "High", "status": "Done", "projectId": "proj1", "assigneeId": "user5", "reporterId": "user2", "dueDate": "2025-09-05", "created": "2025-08-15", "labels": ["UI", "Authentication"], "comments": 3, "attachments": 2 },
        { "id": "MAD-2", "title": "Implement user registration API", "description": "Backend API endpoint for user registration with validation and email verification", "type": "Task", "priority": "High", "status": "In Progress", "projectId": "proj1", "assigneeId": "user3", "reporterId": "user2", "dueDate": "2025-09-10", "created": "2025-08-18", "labels": ["Backend", "API"], "comments": 1, "attachments": 0 },
        { "id": "MAD-3", "title": "Setup push notification service", "description": "Configure Firebase Cloud Messaging for push notifications", "type": "Task", "priority": "Medium", "status": "To Do", "projectId": "proj1", "assigneeId": "user3", "reporterId": "user2", "dueDate": "2025-09-15", "created": "2025-08-20", "labels": ["Backend", "Notifications"], "comments": 0, "attachments": 1 },
        { "id": "MAD-4", "title": "Test user authentication flow", "description": "End-to-end testing of login, logout, and password reset functionality", "type": "Task", "priority": "High", "status": "In Review", "projectId": "proj1", "assigneeId": "user4", "reporterId": "user2", "dueDate": "2025-09-08", "created": "2025-08-22", "labels": ["Testing", "Authentication"], "comments": 2, "attachments": 0 },
        { "id": "WEB-1", "title": "Create new homepage design", "description": "Design modern, responsive homepage with improved user experience", "type": "Story", "priority": "Critical", "status": "In Progress", "projectId": "proj2", "assigneeId": "user5", "reporterId": "user1", "dueDate": "2025-09-12", "created": "2025-08-16", "labels": ["Design", "Homepage"], "comments": 4, "attachments": 3 },
        { "id": "WEB-2", "title": "Optimize website performance", "description": "Improve page load times and implement lazy loading for images", "type": "Task", "priority": "High", "status": "To Do", "projectId": "proj2", "assigneeId": "user3", "reporterId": "user5", "dueDate": "2025-09-20", "created": "2025-08-19", "labels": ["Performance", "Frontend"], "comments": 1, "attachments": 0 },
        { "id": "WEB-3", "title": "Implement responsive navigation", "description": "Create mobile-friendly navigation menu with hamburger menu", "type": "Task", "priority": "Medium", "status": "Done", "projectId": "proj2", "assigneeId": "user3", "reporterId": "user5", "dueDate": "2025-08-30", "created": "2025-08-12", "labels": ["Frontend", "Responsive"], "comments": 2, "attachments": 1 },
        { "id": "MKT-1", "title": "Plan social media campaign", "description": "Create content calendar and strategy for social media promotion", "type": "Epic", "priority": "High", "status": "In Progress", "projectId": "proj3", "assigneeId": "user1", "reporterId": "user1", "dueDate": "2025-09-25", "created": "2025-08-14", "labels": ["Marketing", "Social Media"], "comments": 5, "attachments": 2 },
        { "id": "MKT-2", "title": "Design promotional banners", "description": "Create banner ads for online advertising campaign", "type": "Task", "priority": "Medium", "status": "To Do", "projectId": "proj3", "assigneeId": "user5", "reporterId": "user1", "dueDate": "2025-09-18", "created": "2025-08-17", "labels": ["Design", "Marketing"], "comments": 0, "attachments": 0 },
        { "id": "INF-1", "title": "Assess current infrastructure", "description": "Audit existing servers and identify migration requirements", "type": "Task", "priority": "High", "status": "In Progress", "projectId": "proj4", "assigneeId": "user3", "reporterId": "user1", "dueDate": "2025-09-30", "created": "2025-08-21", "labels": ["Infrastructure", "Assessment"], "comments": 1, "attachments": 3 },
        { "id": "MAD-5", "title": "Database schema optimization", "description": "Optimize database queries and improve indexing for better performance", "type": "Task", "priority": "Medium", "status": "To Do", "projectId": "proj1", "assigneeId": "user3", "reporterId": "user2", "dueDate": "2025-09-22", "created": "2025-08-23", "labels": ["Database", "Performance"], "comments": 0, "attachments": 0 },
        { "id": "WEB-4", "title": "SEO optimization implementation", "description": "Implement meta tags, structured data, and improve site SEO", "type": "Task", "priority": "Low", "status": "To Do", "projectId": "proj2", "assigneeId": "user3", "reporterId": "user5", "dueDate": "2025-10-05", "created": "2025-08-24", "labels": ["SEO", "Frontend"], "comments": 0, "attachments": 0 }
    ],
    "comments": [
        { "id": "comment1", "taskId": "MAD-1", "userId": "user2", "content": "Great work on the initial designs! Could we add a dark mode option?", "timestamp": "2025-08-25T10:30:00Z" },
        { "id": "comment2", "taskId": "MAD-1", "userId": "user5", "content": "Sure, I'll include dark mode in the next iteration.", "timestamp": "2025-08-25T14:15:00Z" },
        { "id": "comment3", "taskId": "WEB-1", "userId": "user1", "content": "The new homepage looks fantastic! Really captures our brand identity.", "timestamp": "2025-08-26T09:20:00Z" }
    ],
    "activity": [
        { "id": "act1", "userId": "user4", "action": "moved", "taskId": "MAD-4", "details": "moved from In Progress to In Review", "timestamp": "2025-08-31T08:30:00Z" },
        { "id": "act2", "userId": "user3", "action": "updated", "taskId": "MAD-2", "details": "updated task description", "timestamp": "2025-08-31T07:45:00Z" },
        { "id": "act3", "userId": "user5", "action": "commented", "taskId": "MAD-1", "details": "added a comment", "timestamp": "2025-08-30T16:20:00Z" }
    ]
};
