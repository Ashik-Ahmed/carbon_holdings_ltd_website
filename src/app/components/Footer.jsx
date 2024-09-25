"use client"

import { Facebook, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-2">Carbon Holdings Ltd</h3>
                        <p className="text-sm">Transforming energy for a sustainable future</p>
                    </div>
                    <div className="w-full md:w-1/3 text-center my-4 md:my-0">
                        <p className="text-sm">&copy; 2023 Carbon Holdings Ltd. All rights reserved.</p>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4">
                        <SocialIcon icon={<Facebook size={20} />} href="#" />
                        <SocialIcon icon={<Twitter size={20} />} href="#" />
                        <SocialIcon icon={<Linkedin size={20} />} href="#" />
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <p className='text-center text-sm font-light'>Developed by Ashik Ahmed</p>
            </div>
        </footer>
    )
}

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        className="text-white hover:text-gray-300 transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
    >
        {icon}
    </a>
)

export default Footer