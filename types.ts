
export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  avatar: string;
  status: 'online' | 'away' | 'offline';
}

export interface Project {
  id: string;
  name: string;
  key: string;
  description: string;
  lead: string;
  color: string;
  status: 'active' | 'planning' | 'archived';
  created: string;
  dueDate: string | null;
}

export type TaskStatus = 'To Do' | 'In Progress' | 'In Review' | 'Done';
export type TaskPriority = 'Low' | 'Medium' | 'High' | 'Critical';
export type TaskType = 'Task' | 'Story' | 'Bug' | 'Epic';

export interface Task {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  priority: TaskPriority;
  status: TaskStatus;
  projectId: string;
  assigneeId: string | null;
  reporterId: string;
  dueDate: string | null;
  created: string;
  labels: string[];
  comments: number;
  attachments: number;
}

export interface Comment {
  id: string;
  taskId: string;
  userId: string;
  content: string;
  timestamp: string;
}

export interface Activity {
  id: string;
  userId: string;
  action: 'created' | 'updated' | 'moved' | 'commented' | 'deleted';
  taskId: string | null;
  details: string;
  timestamp: string;
}

export enum View {
    Dashboard = 'dashboard',
    Projects = 'projects',
    Board = 'board',
    List = 'list',
    Reports = 'reports',
    Profile = 'profile',
}
