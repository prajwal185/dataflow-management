
import React from 'react';
import { useAppContext } from './hooks/useAppContext';
import Auth from './components/Auth';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ActivityFeed from './components/ActivityFeed';
import Dashboard from './components/views/Dashboard';
import ProjectsView from './components/views/ProjectsView';
import BoardView from './components/views/BoardView';
import ListView from './components/views/ListView';
import ReportsView from './components/views/ReportsView';
import ProfileView from './components/views/ProfileView';
import CreateTaskModal from './components/modals/CreateTaskModal';
import CreateProjectModal from './components/modals/CreateProjectModal';
import TaskDetailModal from './components/modals/TaskDetailModal';
import { View } from './types';

const App: React.FC = () => {
    const { state } = useAppContext();
    const { currentUser, currentView, modals } = state;

    const renderView = () => {
        switch (currentView) {
            case View.Dashboard:
                return <Dashboard />;
            case View.Projects:
                return <ProjectsView />;
            case View.Board:
                return <BoardView />;
            case View.List:
                return <ListView />;
            case View.Reports:
                return <ReportsView />;
            case View.Profile:
                return <ProfileView />;
            default:
                return <Dashboard />;
        }
    };

    if (!currentUser) {
        return <Auth />;
    }

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
                    {renderView()}
                </main>
            </div>
            <ActivityFeed />

            {modals.createTask && <CreateTaskModal />}
            {modals.createProject && <CreateProjectModal />}
            {modals.taskDetail && <TaskDetailModal taskId={modals.taskDetail} />}
        </div>
    );
};

export default App;
