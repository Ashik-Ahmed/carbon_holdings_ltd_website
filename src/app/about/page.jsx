"use client"

import Head from 'next/head'
import { Factory, Droplet, Zap, Truck, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const futureGoals = ["Investing in cutting-edge technology to improve production efficiency", "Developing our workforce through ongoing training and skill enhancement", "Exploring opportunities for expansion and diversification in the energy sector", "Strengthening our partnerships and fostering new collaborations within the industry"]


export default function About() {
    return (
        <>
            <Head>
                <title>About Us - Carbon Holdings Ltd</title>
                <meta name="description" content="Learn about Carbon Holdings Ltd, our history, operations, and commitment to addressing Bangladesh's energy needs." />
            </Head>
            <div className="min-h-screen">
                <Hero />
                <CompanyOverview />
                <ProductionDetails />
                <StrategicPartnership />
                <FutureGrowth />
            </div>
        </>
    )
}

const Hero = () => (
    <section className="relative  text-white py-40" style={{
        backgroundImage: 'url(/about-us-cover.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', objectFit: 'fill'
    }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown">
                About Carbon Holdings Ltd
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeInUp">
                Powering Bangladesh&apos;s energy future since 2016
            </p>
        </div>
    </section>
)

const CompanyOverview = () => (
    <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Image
                        src="/site_pic3.jpg"
                        alt="Carbon Holdings Ltd Facility in Manikganj"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-lg animate-fadeInLeft"
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-10">
                    <h2 className="text-3xl font-bold mb-4 animate-fadeInRight border-b-2 border-primary w-fit mx-auto">
                        About the Company
                    </h2>
                    <p className="text-gray-600 mb-4 animate-fadeInRight">
                        Carbon Holdings Ltd., established in April 2016, is a privately owned midstream and downstream petrochemical process industrial plant company. With a focus on refining natural gas condensate, our fractionation plant in Manikganj is designed to produce 100 metric tonnes of finished products daily.
                    </p>
                    <p className="text-gray-600 mb-4 animate-fadeInRight">
                        Our primary objective is to address the growing demand for Motor Spirit (MS), Mineral Turpentine (MTT), and High-Speed Diesel (HSD) in Bangladesh. By producing these essential fuels, we aim to significantly reduce the country&apos;s reliance on imported fuels and contribute to energy security.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

const ProductionDetails = () => (
    <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 border-b-2 border-white w-fit mx-auto">Our Production</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProductCard
                    icon={<Droplet size={40} />}
                    title="Motor Spirit (MS)"
                    description="72% of our production, addressing local petrol demand"
                />
                <ProductCard
                    icon={<Zap size={40} />}
                    title="High-Speed Diesel (HSD)"
                    description="19% of our production, supporting heavy-duty applications"
                />
                <ProductCard
                    icon={<Truck size={40} />}
                    title="Mineral Turpentine (MTT)"
                    description="7% of our production, available for open market distribution"
                />
            </div>
            <div className="mt-12 text-center">
                <p className="text-gray-200 mb-4">
                    As per agreements, a portion of the produced MS and HSD is supplied to the Bangladesh Petroleum Corporation (BPC). However, non-fuel products like MTT can be openly distributed in the local market, providing a valuable resource for various industries.
                </p>
            </div>
        </div>
    </section>
)

const ProductCard = ({ icon, title, description }) => (
    <div className="p-4 rounded-lg bg-secondary hover:bg-tertiary transition-color duration-300">
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2  text-white">{title}</h3>
        <p className="text-gray-200 ">{description}</p>
    </div>
)

const StrategicPartnership = () => (
    <section className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 border-b-2 border-primary w-fit mx-auto">Strategic Partnership and Future Growth</h2>
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Image
                        src="/site_pic2.jpg"
                        alt="Carbon Holdings Ltd Strategic Partnership"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-lg animate-fadeInLeft"
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-10">
                    <h3 className="text-gray-700 text-2xl font-bold mb-4 animate-fadeInRight">
                        Collaboration for Energy Security
                    </h3>
                    <p className="text-gray-600 mb-4 animate-fadeInRight">
                        Our operations are centered around a strategic partnership with Petrobangla and BPC. We receive natural gas condensate, process it into valuable products, and deliver the finished goods to BPC&apos;s marketing company. This collaboration plays a crucial role in ensuring a stable and reliable supply of fuels within Bangladesh.
                    </p>
                    <h3 className="text-gray-700 text-2xl font-bold mb-4 animate-fadeInRight">
                        Expanding Our Capabilities
                    </h3>
                    <p className="text-gray-600 mb-4 animate-fadeInRight">
                        To enhance our operational capabilities and workforce, Carbon Holdings Ltd. has recently secured import permissions. This expansion will allow us to further contribute to Bangladesh&apos;s energy sector and meet the evolving needs of the country.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

const FutureGrowth = () => (
    <div className='container mx-auto px-6 py-20'>
        <h2 className="text-3xl font-bold text-center mb-12 border-b-2 border-primary w-fit mx-auto">Continuous Improvement and Growth</h2>
        {/* <div className="flex items-center text-blue-600 mb-4">
            <span className="font-semibold">Continuous Improvement and Growth</span>
        </div> */}
        <p className="text-gray-600 animate-fadeInRight">
            At Carbon Holdings Ltd., we are committed to continuous improvement and sustainable growth. Our focus on innovation, efficiency, and environmental responsibility drives us to constantly refine our processes and explore new opportunities. We aim to play a pivotal role in Bangladesh&apos;s energy future by:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2 animate-fadeInRight">

            {
                futureGoals.map((goal, index) => (
                    <div key={index} className='flex items-center gap-x-2'>
                        <motion.svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="flex-shrink-0 mt-1 text-primary"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.circle
                                cx="10"
                                cy="10"
                                r="8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            />
                            <motion.path
                                d="M6 10l3 3 5-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            />
                        </motion.svg>

                        <p>{goal}</p>
                    </div>
                ))
            }

        </ul>
    </div>
)