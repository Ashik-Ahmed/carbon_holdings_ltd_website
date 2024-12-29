"use client"

import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const firefightingEquipment = [
    { name: "Centrifugal End Suction Fire Pumps", image: "/fire-equiment/centrifugal_fire_pump_end_suction.jpg", description: "UL Listed & FM Approved fire pumps meeting NFPA 20 requirements." },
    { name: "Centrifugal Horizontal Split Case Fire Pumps", image: "/fire-equiment/Split_Case_Fire_Pumps.png", description: "Thru-bore casing, frame-mounted, compact design, balanced impeller, hydrostatic tested." },
    {
        name: "Centrifugal Vertical Turbine Fire Pumps", image: "/fire-equiment/Vertical_Turbine_Fire_Pumps.png", description: "UL 448 & NFPA20 compliant, balanced impeller, modular, space-saving, self-venting design."
    },
    { name: "Fire Pump Controllers", image: "/fire-equiment/fire_pump_controller.png", description: "UL & FM-approved fire pump controllers, NFPA-20 & NFPA-70 compliant, Y2K ready." },
    { name: "Diesel Driven Skids", image: "/fire-equiment/diesel_driven_skids.png", description: "Listed diesel engines, pre-tested skid, corrosion-resistant, compact design, high-quality construction." },
    { name: "Motor Driven Skids", image: "/fire-equiment/motor_driven_skids.png", description: "Listed fire pump motors, pre-tested skid, compact design, corrosion-resistant construction." }
]

export default function FirefightingEquipment() {
    return (
        <>
            <Head>
                <title>Firefighting Equipment - Carbon Holdings Ltd</title>
                <meta name="description" content="Explore the firefighting equipment used by Carbon Holdings Ltd to ensure safety and protection" />
            </Head>
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        className="w-fit mx-auto border-b-4 border-primary text-4xl font-bold text-center mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        Safety & Firefighting Equipment
                    </motion.h1>
                    <motion.p
                        className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                    >
                        At Carbon Holdings Ltd, we prioritize safety above all else. Our state-of-the-art firefighting equipment ensures that we are always prepared to handle any emergency situation. Below, you can explore some of the key equipment we use to maintain a safe working environment.
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {firefightingEquipment.map((equipment, index) => (
                            <EquipmentCard key={index} equipment={equipment} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const EquipmentCard = ({ equipment, index }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 ease-in-out hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="relative">
                <Image
                    src={equipment.image}
                    alt={equipment.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover object-center"
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary to-transparent flex items-end justify-start p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.1 }}
                >
                    <p className="text-white text-sm">{equipment.description}</p>
                </motion.div>
            </div>
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{equipment.name}</h2>
                <motion.div
                    className="w-10 h-1 bg-primary rounded"
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? 40 : 10 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    )
}