"use client"

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Droplet, Home, Info, Phone, Menu, X, Cog, History } from 'lucide-react'
import { Notebook } from 'lucide-react'
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
            <nav className="container mx-auto px-6 py-1">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/" className="flex items-center">
                            {/* <Droplet className="mr-2" />
                            Carbon Holdings Ltd */}
                            {/* <Image src="/logo.png" alt="Logo" width={250} height={32} /> */}
                            <img src="/logo.png" alt="logo" width={300} height={20} />
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:text-gray-300 z-20 relative"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? <X size={24} className='text-white' /> : <Menu size={24} className='text-white' />}
                        </button>
                    </div>
                    <div className={`
            md:flex md:items-center md:space-x-4
            ${isMenuOpen ? 'block absolute right-1 top-8 mt-2 bg-blue-600 rounded-lg shadow-lg' : 'hidden'}
            md:relative md:bg-transparent md:shadow-none
          `}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-black md:p-0">
                            <NavItem href="/" icon={<Home size={18} />} onClick={closeMenu} className={`${currentPath == '/' && 'border-b-4 border-blue-500 text-blue-500 transition-color duration-300'}`}>
                                Home
                            </NavItem>
                            <NavItem href="/machineries" icon={<Cog size={18} />} onClick={closeMenu} className={`${currentPath == '/machineries' && 'border-b-4 border-blue-500 text-blue-500 transition-color duration-300'}`}>
                                Machineries
                            </NavItem>
                            <NavItem href="/about" icon={<Info size={18} />} onClick={closeMenu} className={`${currentPath == '/about' && 'border-b-4 border-blue-500 text-blue-500 transition-color duration-300'}`}>
                                About
                            </NavItem>
                            <NavItem href="/at-a-glance" icon={<History size={18} />} onClick={closeMenu} className={`${currentPath == '/at-a-glance' && 'border-b-4 border-blue-500 text-blue-500 transition-color duration-300'}`}>
                                At A Glance
                            </NavItem>
                            <NavItem href="/contact" icon={<Phone size={18} />} onClick={closeMenu} className={`${currentPath == '/contact' && 'border-b-4 border-blue-500 text-blue-500 transition-color duration-300'}`}>
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
            className="flex items-center hover:text-blue-500 transition-colors duration-200"
            onClick={onClick}
        >
            {icon}
            <span className="ml-1">{children}</span>
        </Link>
    </div>
)

export default Header