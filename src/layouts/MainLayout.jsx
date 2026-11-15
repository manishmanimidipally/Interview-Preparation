import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Sidebar } from '../components/common/Sidebar';
import { Footer } from '../components/common/Footer';

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        
        <main className="flex-1 lg:pl-64 flex flex-col min-w-0">
          <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};
