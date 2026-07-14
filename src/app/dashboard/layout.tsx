import { menus } from '@/constants/dashboard';
import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children, }: { children: React.ReactNode; }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 min-h-screen bg-default-50/50">
      <div className="grid grid-cols-12 gap-6 items-start">

        {/* Sidebar / Aside Container */}
        <aside className="col-span-12 lg:col-span-3 bg-white dark:bg-default-50 border border-default-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
          {/* Subtle Background Accent Line */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-primary via-blue-400 to-cyan-400" />
          
          {/* User Profile Info Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left border-b border-default-100 pb-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-blue-500 text-white flex items-center justify-center text-2xl font-black shadow-md shadow-primary/20 transform hover:rotate-6 transition-transform duration-300 select-none">
              Z
            </div>
            <h2 className="mt-4 text-xl font-bold text-default-800 tracking-tight">
              Zahid
            </h2>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary-50 dark:bg-primary-950/30 px-2 py-0.5 rounded-md mt-1">
              Library Manager
            </p>
          </div>

          {/* Navigation Menus List */}
          <div className="mt-6 space-y-1">
            {
              menus.map((menu) => {
                const Icon = menu.icon;
                return (
                  <Link
                    className="flex items-center gap-3.5 p-3 rounded-xl font-medium text-default-600 hover:text-primary hover:bg-primary-50 dark:hover:bg-primary-950/20 active:scale-[0.98] transition-all duration-200 group/item"
                    key={menu.href}
                    href={menu.href}
                  >
                    <Icon 
                      size={18} 
                      className="text-default-400 group-hover/item:text-primary group-hover/item:scale-110 transition-all duration-200" 
                    />
                    <span className="text-sm group-hover/item:translate-x-0.5 transition-transform duration-200">
                      {menu.name}
                    </span>
                  </Link>
                )
              })
            }
          </div>
        </aside>

        {/* Main Dashboard Panel Area */}
        <main className="col-span-12 lg:col-span-9 bg-white dark:bg-default-50 border border-default-200 rounded-3xl p-6 sm:p-8 shadow-sm min-h-[600px] transition-all duration-300">
          {/* Top Welcome Title Section */}
          <div className="mb-8 relative overflow-hidden pb-4 border-b border-default-100">
            <h1 className="text-3xl md:text-4xl font-extrabold text-default-900 tracking-tight flex items-center gap-2 group/title">
              Welcome Back 
              <span className="inline-block animate-wiggle origin-[70%_70%]">👋</span>
            </h1>

            <p className="text-default-500 text-sm mt-1.5 font-medium">
              Manage your library from one place.
            </p>
          </div>

          {/* Dynamic Nested Content Area wrapper */}
          <div className="animate-fade-in duration-500">
            {children}
          </div>
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;