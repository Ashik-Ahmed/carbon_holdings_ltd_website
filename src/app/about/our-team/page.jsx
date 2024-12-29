"use client"

import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const leaders = [
    { name: "A.H.M. Shamsud Duha", designation: "Project Director", image: "/team/ahm_shamsud_duha.jpg" },
    { name: "Ahammed Ali ", designation: "Manager (Quality Control)", image: "/team/ahammed_ali.png" },
    { name: "Rahatul Islam", designation: "Manager (Accounts & Finance)", image: "/team/rahatul_islam.jpg" },
    { name: "Md. Helal Uddin", designation: "Manager (Operations)", image: "/team/helal_uddin.jpg" },
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
                        src="/organogram2.png"
                        alt="Organogram"
                        width={800}
                        height={700}
                        quality={100}
                        className=" mx-auto w-[90%] h-auto object-contain object-center"
                    />

                    {/* <Organogram /> */}
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
                src={leader?.image}
                alt={leader?.name}
                width={200}
                height={200}
                className="w-[200px] h-[200px] object-center rounded-full mx-auto border-2 p-1 border-primary m-2"
            />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{leader?.name}</h2>
                <p className="text-gray-600">{leader?.designation}</p>
            </div>
        </motion.div>
    )
}


const Organogram = () => {
    const boxVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.2
            }
        }
    }

    const arrowVariants = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: {
                duration: 0.5,
                delay: 0.5
            }
        }
    }

    const Arrow = ({ start, end }) => (
        <motion.path
            d={`M${start.x},${start.y} L${end.x},${end.y}`}
            stroke="black"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
            variants={arrowVariants}
        />
    )

    return (
        <div className="w-full overflow-x-auto">
            <svg width="1400" height="1000" viewBox="0 0 1400 1000">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7"
                        refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                    </marker>
                </defs>
                <motion.g initial="hidden" animate="visible">
                    {/* Managing Director */}
                    <motion.rect x="600" y="20" width="200" height="40" rx="5" fill="white" stroke="black" variants={boxVariants} />
                    <motion.text x="700" y="45" textAnchor="middle" variants={boxVariants}>MANAGING DIRECTOR</motion.text>

                    <Arrow start={{ x: 700, y: 60 }} end={{ x: 700, y: 100 }} />

                    {/* Executive Director */}
                    <motion.rect x="600" y="100" width="200" height="40" rx="5" fill="white" stroke="black" variants={boxVariants} />
                    <motion.text x="700" y="125" textAnchor="middle" variants={boxVariants}>Executive Director</motion.text>

                    <Arrow start={{ x: 700, y: 140 }} end={{ x: 700, y: 180 }} />

                    {/* General Manager - Plant */}
                    <motion.rect x="575" y="180" width="250" height="40" rx="5" fill="white" stroke="black" variants={boxVariants} />
                    <motion.text x="700" y="205" textAnchor="middle" variants={boxVariants}>General Manager - Plant</motion.text>

                    <Arrow start={{ x: 700, y: 220 }} end={{ x: 700, y: 260 }} />

                    {/* Managers */}
                    <Arrow start={{ x: 700, y: 260 }} end={{ x: 150, y: 300 }} />
                    <Arrow start={{ x: 700, y: 260 }} end={{ x: 425, y: 300 }} />
                    <Arrow start={{ x: 700, y: 260 }} end={{ x: 700, y: 300 }} />
                    <Arrow start={{ x: 700, y: 260 }} end={{ x: 975, y: 300 }} />
                    <Arrow start={{ x: 700, y: 260 }} end={{ x: 1250, y: 300 }} />

                    {[
                        { title: 'Sales & Marketing', x: 150 },
                        { title: 'A&F', x: 425 },
                        { title: 'Chemist', x: 700 },
                        { title: 'Operation', x: 975 },
                        { title: 'HR & Admin', x: 1250 }
                    ].map(({ title, x }) => (
                        <g key={title}>
                            <motion.rect x={x - 75} y="300" width="150" height="40" rx="5" fill="white" stroke="black" variants={boxVariants} />
                            <motion.text x={x} y="325" textAnchor="middle" fontSize="12" variants={boxVariants}>Manager {title}</motion.text>
                        </g>
                    ))}

                    {/* Subordinates */}
                    <SubordinateGroup x={150} y={400} title="Executive" count={2} parentX={150} />
                    <SubordinateGroup x={425} y={400} title="Accounts Astt." parentX={425} />
                    <SubordinateGroup x={700} y={400} title="Asstt. Chemist" parentX={700} />
                    <SubordinateGroup x={875} y={400} title="Technician" count={2} subtitle="Mech/Elec" parentX={975} />
                    <SubordinateGroup x={1075} y={400} title="Process Operator" count={10} subtitle="Persons" parentX={975} />
                    <SubordinateGroup x={1150} y={400} title="Peon" count={2} parentX={1250} />
                    <SubordinateGroup x={1250} y={400} title="Security" count={12} subtitle="Persons" parentX={1250} />
                    <SubordinateGroup x={1350} y={400} title="Driver" count={2} parentX={1250} />
                    <SubordinateGroup x={1350} y={480} title="Cleaner" count={2} subtitle="Persons" parentX={1250} />

                    {/* Additional subordinates */}
                    <SubordinateGroup x={700} y={480} title="Lab Technician" count={2} parentX={700} parentY={440} />
                    <SubordinateGroup x={875} y={480} title="Jr. Technician" count={2} parentX={875} parentY={440} />

                    {/* Helpers */}
                    <SubordinateGroup x={1075} y={480} title="Helper" count={3} parentX={1075} parentY={440} />
                    <SubordinateGroup x={875} y={560} title="Helper" count={2} parentX={875} parentY={520} />
                </motion.g>
            </svg>
        </div>
    )
}

const SubordinateGroup = ({ x, y, title, count, subtitle, parentX, parentY = 340 }) => {
    const boxVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.3
            }
        }
    }

    const arrowVariants = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: {
                duration: 0.5,
                delay: 0.5
            }
        }
    }

    return (
        <motion.g initial="hidden" animate="visible">
            <motion.path
                d={`M${parentX},${parentY} L${x},${y}`}
                stroke="black"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                variants={arrowVariants}
            />
            <motion.rect x={x - 75} y={y} width="150" height="40" rx="5" fill="white" stroke="black" variants={boxVariants} />
            <motion.text x={x} y={y + 20} textAnchor="middle" fontSize="12" variants={boxVariants}>{title}</motion.text>
            {count && (
                <motion.text x={x} y={y + 35} textAnchor="middle" fontSize="10" variants={boxVariants}>
                    ({count} {subtitle || (count > 1 ? 'Persons' : 'Person')})
                </motion.text>
            )}
            {subtitle && !count && (
                <motion.text x={x} y={y + 35} textAnchor="middle" fontSize="10" variants={boxVariants}>
                    {subtitle}
                </motion.text>
            )}
        </motion.g>
    )
}
