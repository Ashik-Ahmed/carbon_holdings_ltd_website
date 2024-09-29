"use client"

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Home, Info, Phone, Menu, X, Cog, History, TrendingUp, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const currentPath = usePathname()

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev)
    }, [])

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <header className="bg-white text-white sticky top-0 z-50">
            <nav className="container px-6 py-1 mx-auto">
                <div className="flex items-center justify-between mx-auto w-full max-w-9xl">
                    <div>
                        <Link href="/" className="flex items-center">
                            <Image src="/logo.png" alt="Logo" width={250} height={32} />
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:text-gray-300 z-20 relative"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? <X size={24} className='text-primary' /> : <Menu size={24} className='text-primary' />}
                        </button>
                    </div>
                    <div className={`md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'block absolute right-1 top-8 p-2 mt-2 bg-white rounded-lg shadow-lg' : 'hidden'} md:relative md:bg-transparent md:shadow-none`}>
                        <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-black md:p-0 items-center">
                            <NavItem href="/" icon={<Home size={18} />} onClick={closeMenu} className={`${currentPath == '/' && 'border-b-4 border-primary text-primary transition-color duration-300 px-2'}`}>
                                Home
                            </NavItem>
                            {/* Parent menu item "The Plant" with submenu */}
                            <div className="relative group">
                                {/* The Plant main menu */}
                                <div className="flex items-center px-2 cursor-pointer group-hover:text-primary">
                                    <span className="mr-2">The Plant</span>
                                    <ChevronDown size={18} className="text-primary" />
                                </div>
                                {/* Submenu that appears on hover */}
                                <div className="absolute left-0 w-48 bg-white shadow-lg rounded-lg z-30 hidden group-hover:flex flex-col" onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
                                    <NavItem href="/machineries" icon={<Cog size={18} />} onClick={closeMenu} className={`${currentPath == '/machineries' && 'text-primary'}`}>
                                        Machineries
                                    </NavItem>
                                    <NavItem href="/firefighting-equipments" icon={<Cog size={18} />} onClick={closeMenu} className={`${currentPath == '/firefighting-equipments' && 'text-primary'}`}>
                                        Firefighting Equipments
                                    </NavItem>
                                </div>
                            </div>
                            <NavItem href="/production-and-capacities" icon={<TrendingUp size={18} />} onClick={closeMenu} className={`${currentPath == '/production-and-capacities' && 'border-b-4 border-primary text-primary transition-color duration-300 px-2'}`}>
                                Capacity
                            </NavItem>
                            <NavItem href="/about" icon={<Info size={18} />} onClick={closeMenu} className={`${currentPath == '/about' && 'border-b-4 border-primary text-primary transition-color duration-300 px-2'}`}>
                                About
                            </NavItem>
                            <NavItem href="/at-a-glance" icon={<History size={18} />} onClick={closeMenu} className={`${currentPath == '/at-a-glance' && 'border-b-4 border-primary text-primary transition-color duration-300 px-2'}`}>
                                At A Glance
                            </NavItem>
                            <NavItem href="/contact" icon={<Phone size={18} />} onClick={closeMenu} className={`${currentPath == '/contact' && 'border-b-4 border-primary text-primary transition-color duration-300 px-2'}`}>
                                Contact
                            </NavItem>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const NavItem = ({ href, children, icon, onClick, className }) => (
    <div className={`${className} transition-transform duration-200 ease-in-out py-1 mx-2`}>
        <Link
            href={href}
            className="flex items-center hover:text-primary transition-colors duration-200"
            onClick={onClick}
        >
            {icon}
            <span className="ml-1">{children}</span>
        </Link>
    </div>
)

export default Header
