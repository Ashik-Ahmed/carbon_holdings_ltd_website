"use client"

import Head from 'next/head'
import { Factory, Droplet, Zap, Truck, RefreshCw } from 'lucide-react'

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
    <section className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-20">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown">
                About Carbon Holdings Ltd
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeInUp">
                Powering Bangladesh's energy future since 2016
            </p>
        </div>
    </section>
)

const CompanyOverview = () => (
    <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="/placeholder.svg?height=400&width=600"
                        alt="Carbon Holdings Ltd Facility in Manikganj"
                        className="rounded-lg shadow-lg animate-fadeInLeft"
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-10">
                    <h2 className="text-3xl font-bold mb-4 animate-fadeInRight">
                        About the Company
                    </h2>
                    <p className="text-gray-600 mb-4 animate-fadeInRight">
                        Carbon Holdings Ltd., established in April 2016, is a privately owned midstream and downstream petrochemical process industrial plant company. With a focus on refining natural gas condensate, our fractionation plant in Manikganj is designed to produce 100 metric tonnes of finished products daily.
                    </p>
                    <p className="text-gray-600 mb-4 animate-fadeInRight">
                        Our primary objective is to address the growing demand for Motor Spirit (MS), Mineral Turpentine (MTT), and High-Speed Diesel (HSD) in Bangladesh. By producing these essential fuels, we aim to significantly reduce the country's reliance on imported fuels and contribute to energy security.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

const ProductionDetails = () => (
    <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Production</h2>
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
                <p className="text-gray-600 mb-4">
                    As per agreements, a portion of the produced MS and HSD is supplied to the Bangladesh Petroleum Corporation (BPC). However, non-fuel products like MTT can be openly distributed in the local market, providing a valuable resource for various industries.
                </p>
            </div>
        </div>
    </section>
)

const ProductCard = ({ icon, title, description }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 transform hover:scale-105">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
)

const StrategicPartnership = () => (
    <section className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Strategic Partnership and Future Growth</h2>
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="/placeholder.svg?height=400&width=600"
                        alt="Carbon Holdings Ltd Strategic Partnership"
                        className="rounded-lg shadow-lg animate-fadeInLeft"
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-10">
                    <h3 className="text-2xl font-bold mb-4 animate-fadeInRight">
                        Collaboration for Energy Security
                    </h3>
                    <p className="text-gray-600 mb-4 animate-fadeInRight">
                        Our operations are centered around a strategic partnership with Petrobangla and BPC. We receive natural gas condensate, process it into valuable products, and deliver the finished goods to BPC's marketing company. This collaboration plays a crucial role in ensuring a stable and reliable supply of fuels within Bangladesh.
                    </p>
                    <h3 className="text-2xl font-bold mb-4 animate-fadeInRight">
                        Expanding Our Capabilities
                    </h3>
                    <p className="text-gray-600 mb-4 animate-fadeInRight">
                        To enhance our operational capabilities and workforce, Carbon Holdings Ltd. has recently secured import permissions. This expansion will allow us to further contribute to Bangladesh's energy sector and meet the evolving needs of the country.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

const FutureGrowth = () => (
    <div className='container mx-auto px-6 py-20'>
        <h2 className="text-3xl font-bold text-center mb-12">Continuous Improvement and Growth</h2>
        {/* <div className="flex items-center text-blue-600 mb-4">
            <span className="font-semibold">Continuous Improvement and Growth</span>
        </div> */}
        <p className="text-gray-600 animate-fadeInRight">
            At Carbon Holdings Ltd., we are committed to continuous improvement and sustainable growth. Our focus on innovation, efficiency, and environmental responsibility drives us to constantly refine our processes and explore new opportunities. We aim to play a pivotal role in Bangladesh's energy future by:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2 animate-fadeInRight">
            <li>Investing in cutting-edge technology to improve production efficiency</li>
            <li>Developing our workforce through ongoing training and skill enhancement</li>
            <li>Exploring opportunities for expansion and diversification in the energy sector</li>
            <li>Strengthening our partnerships and fostering new collaborations within the industry</li>
        </ul>
    </div>
)