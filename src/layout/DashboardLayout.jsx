import React, { useState } from 'react';
import { Outlet } from 'react-router';
import DashboardSidebar from '../components/Dashboard/DashboardSidebar';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Separate state for mobile visibility
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-base-100 dark:bg-gray-950">
      {/* Mobile Overlay: Darkens the background when sidebar is open on mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[45] lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Wrapper */}
      <div className={`
        fixed inset-y-0 left-0 z-[50] transition-transform duration-300 lg:static lg:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <DashboardSidebar 
          isCollapsed={isCollapsed} 
          setIsCollapsed={setIsCollapsed} 
          // Pass mobile controls if needed inside sidebar
          setIsMobileOpen={setIsMobileOpen}
        />
      </div>
      
      {/* Main Content Area */}
      {/* min-w-0 is critical to stop Recharts/Tables from breaking the layout */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        {/* Navbar with Mobile Toggle Access */}
        <DashboardNavbar 
          setIsMobileOpen={setIsMobileOpen} 
          isMobileOpen={isMobileOpen}
        />

        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="container mx-auto py-6 px-4 md:py-8 md:px-6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;