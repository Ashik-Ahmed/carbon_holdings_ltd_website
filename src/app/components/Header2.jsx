"use client";

import React, { useState } from 'react';
import { Menu, X, Home, Users, ChevronDown, Phone, TrendingUp, Info, Factory } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header2 = () => {
    const currentPath = usePathname();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleSubmenu = (index) => setActiveSubmenu(activeSubmenu === index ? null : index);

    const menuItems = [
        { icon: <Home size={20} />, label: 'Home', link: '/' },
        {
            icon: <Factory size={20} />,
            label: 'The Plant',
            submenu: [
                { label: 'Machineries', link: '/plant/machineries' },
                { label: 'Lab & Testing Facilities', link: '/plant/lab-facilities' },
                { label: 'Firefighting Equipments', link: '/plant/firefighting-equipment' },
            ]
        },
        {
            icon: <TrendingUp size={20} />,
            label: 'Production & Capacities',
            submenu: [
                { label: 'Processing & Storage Unit', link: '/production-capacity/processing-storage-unit' },
                { label: 'Our Products', link: '/production-capacity/products' },
                { label: 'Production Ratio', link: '/production-capacity/production-ratio' },
                { label: 'Raw Material Specs', link: '/production-capacity/raw-material-specs' },
            ]
        },
        {
            icon: <Info size={20} />,
            label: 'About Us',
            submenu: [
                { label: 'Company Details', link: '/about/company-details' },
                { label: 'Our Team', link: '/about/our-team' },
                // { label: 'Organogram', link: '/about/organogram' },
                { label: 'At a Glance', link: '/about/at-a-glance' },
            ]
        },
        { icon: <Phone size={20} />, label: 'Contact', link: '/contact' },
    ];

    return (
        <header className="bg-white text-gray-900 p-1 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link href="/" className="flex items-center">
                        <Image src="/logo.png" alt="Logo" width={250} height={32} priority />
                    </Link>
                </div>
                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-4">
                    {menuItems?.map((item, index) => (
                        <div
                            key={index}
                            className={`relative group ${currentPath === item?.link ? 'border-b-4 border-primary pr-2 text-primary transition-color duration-300' : ''}`}
                        >
                            {/* Main Menu Item */}
                            <Link
                                href={item?.link ? item?.link : '#'}
                                className="flex items-center space-x-1 hover:text-primary"
                            >
                                {item?.icon}
                                <span>{item?.label}</span>
                                {item?.submenu && <ChevronDown size={16} />}
                            </Link>
                            {/* Submenu */}
                            {item?.submenu && (
                                <div
                                    className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 hidden group-hover:block"
                                >
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        {item?.submenu.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={subItem?.link}
                                                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${currentPath === subItem?.link ? 'border-b-2 pr-2 border-primary text-primary transition-color duration-300' : ''}`}
                                                role="menuitem"
                                            >
                                                {subItem?.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Toggle Button */}
                <button className="md:hidden" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav
                    className="fixed inset-0 bg-black bg-opacity-70 z-40 flex flex-col p-6 md:hidden" // Position fixed and overlay style
                    style={{ top: '56px' }} // Adjust to match your header height
                >
                    <div className="bg-white rounded-lg p-4 w-full max-w-sm mx-auto">
                        {menuItems?.map((item, index) => (
                            <div key={index} className="py-2">
                                <Link
                                    href={item?.link ? item?.link : '#'}
                                    className={`flex items-center space-x-2 w-fit pr-2 text-left ${currentPath === item?.link ? 'border-b-4 border-primary text-primary transition-color duration-300' : ''}`}
                                    onClick={() => { item?.submenu ? toggleSubmenu(index) : toggleMobileMenu() }}
                                >
                                    {item?.icon}
                                    <span>{item?.label}</span>
                                    {item?.submenu && <ChevronDown size={16} className="ml-auto" />}
                                </Link>
                                {item?.submenu && activeSubmenu === index && (
                                    <div className="ml-6 mt-2 space-y-2">
                                        {item?.submenu.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={subItem?.link}
                                                className={`w-fit pr-2 block text-sm text-gray-700 hover:text-black ${currentPath === subItem?.link ? 'border-b-4 border-primary text-primary transition-color duration-300' : ''}`}
                                            >
                                                <span onClick={toggleMobileMenu}>{subItem.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header2;
