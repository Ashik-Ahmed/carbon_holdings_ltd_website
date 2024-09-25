"use client"

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Droplet, Home, Info, Phone, Menu, X } from 'lucide-react'
import { Notebook } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev)
    }, [])

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <header className="bg-green-400 text-white sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-1">
                <div className="flex items-center justify-between">
                    <div className="transition-transform duration-200 ease-in-out hover:scale-105">
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
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-black p-4 md:p-0">
                            <NavItem href="/" icon={<Home size={18} />} onClick={closeMenu}>
                                Home
                            </NavItem>
                            <NavItem href="/machineries" icon={<Home size={18} />} onClick={closeMenu}>
                                Machineries
                            </NavItem>
                            <NavItem href="/about" icon={<Info size={18} />} onClick={closeMenu}>
                                About
                            </NavItem>
                            <NavItem href="/at-a-glance" icon={<Info size={18} />} onClick={closeMenu}>
                                At A Glance
                            </NavItem>
                            <NavItem href="/contact" icon={<Phone size={18} />} onClick={closeMenu}>
                                Contact
                            </NavItem>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const NavItem = ({ href, children, icon, onClick }) => (
    <div className="transition-transform duration-200 ease-in-out hover:scale-110">
        <Link
            href={href}
            className="flex items-center hover:text-gray-200 transition-colors duration-200"
            onClick={onClick}
        >
            {icon}
            <span className="ml-1">{children}</span>
        </Link>
    </div>
)

export default Header