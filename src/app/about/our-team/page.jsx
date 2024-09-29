"use client"

import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'

const leaders = [
    { name: "A.H.M. Shamsud Duha", designation: "Project Director", image: "/team/ahm_shamsud_duha.jpg" },
    { name: "Ahammed Ali ", designation: "Manager (Quality Control)", image: "/team/ahammed_ali.png" },
    { name: "Rahatul Islam", designation: "Manager (Accounts & Finance)", image: "/team/rahatul_islam.jpg" },
    { name: "Md. Helal Uddin", designation: "Manager (Operations)", image: "/placeholder.svg?height=300&width=300" },
    { name: "Md. Solaiman", designation: "Asst. Manager (Admin)", image: "/team/md_solaiman.jpg" },
]

export default function OurTeam() {
    return (
        <>
            <Head>
                <title>Our Team - Carbon Holdings Ltd</title>
                <meta name="description" content="Meet the top leaders of Carbon Holdings Ltd" />
            </Head>
            <div className="min-h-screen bg-gray-100 py-12 px-2 sm:px-4 lg:px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        className="w-fit mx-auto text-4xl font-bold text-center text-gray-900 mb-12 border-b-4 border-primary"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                    >
                        Our Leadership Team
                    </motion.h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leaders.map((leader, index) => (
                            <LeaderCard key={index} leader={leader} index={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-white py-20'>
                <h1 className='w-fit mx-auto text-4xl font-bold text-center text-gray-900 mb-12 border-b-4 border-primary'>Organogram</h1>
                <div>
                    <img
                        src="/organogram.png"
                        alt="Organogram"
                        width={700}
                        height={600}
                        className=" mx-auto w-[70%] h-auto object-contain object-center"
                    />
                </div>
            </div>
        </>
    )
}

const LeaderCard = ({ leader, index }) => {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Image
                src={leader.image}
                alt={leader.name}
                width={300}
                height={300}
                className="w-full h-64 object-contain object-center"
            />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h2>
                <p className="text-gray-600">{leader.designation}</p>
            </div>
        </motion.div>
    )
}