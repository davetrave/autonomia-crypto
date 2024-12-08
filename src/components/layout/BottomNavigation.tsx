import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

// Define the navigation item type
interface NavItem {
  path: string;
  label: string;
  icon: string; // Could be a string (emoji) or a JSX.Element (for icons from libraries)
}

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number>(0); // Active tab index
  const holeRef = useRef<HTMLDivElement>(null); // Reference to the animated circle

  // Navigation items
  const navItems: NavItem[] = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/course', label: 'Courses', icon: '📚' },
    { path: '/store', label: 'Store', icon: '🛒' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  useEffect(() => {
    // Determine the active index based on the current path
    const currentIndex = navItems.findIndex((item) => item.path === location.pathname);
    setActiveIndex(currentIndex);

    // Animate the "hole" to the active tab's position
    if (holeRef.current) {
      gsap.to(holeRef.current, {
        x: currentIndex * 80, // Adjust this value based on tab spacing
        duration: 0.5,
        ease: 'power3.out',
      });
    }
  }, [location.pathname, navItems]);

  return (
    <div className="bottom-nav fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl bg-blue-600 rounded-full p-4 shadow-lg flex justify-around relative">
      {/* Animated Hole for Active Tab */}
      <div
        ref={holeRef}
        className="absolute top-[-12px] left-4 w-16 h-16 bg-white rounded-full shadow-lg z-10"
      >
        <div className="flex items-center justify-center w-full h-full text-2xl text-blue-600">
          {navItems[activeIndex]?.icon}
        </div>
      </div>

      {/* Render Navigation Items */}
      {navItems.map((item, index) => (
        <NavItem
          key={item.path}
          to={item.path}
          label={item.label}
          icon={item.icon}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
};

// Props for NavItem
interface NavItemProps {
  to: string;
  label: string;
  icon: string; // Icon can be an emoji or JSX.Element
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, icon, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center text-center ${
        isActive ? 'text-transparent' : 'text-white'
      } relative`}
      style={{ width: '80px' }}
    >
      <span className={`text-2xl ${isActive ? 'opacity-0' : ''}`}>{icon}</span>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default BottomNavigation;