import React from 'react';
import { Factory, Users, Calendar, MapPin, Maximize, Briefcase, Building, Shield, Scale, Book } from 'lucide-react'
import Head from 'next/head';

const page = () => {
    return (
        <>
            <Head>
                <title>At a glance - Carbon Holdings Ltd</title>
                <meta name="description" content="Learn about Carbon Holdings Ltd, our history, operations, and commitment to addressing Bangladesh's energy needs." />
            </Head>
            <div>
                <Hero />
                <KeyInformation />
                <Timeline />
            </div>
        </>
    );
};

export default page;

const Hero = () => (
    <section className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-20">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown">
                At A Glance
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeInUp">
                Learn about Carbon Holdings Ltd, our history, operations, and commitment to addressing Bangladesh&apos;s energy needs.
            </p>
        </div>
    </section>
)

const KeyInformation = () => (
    <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Carbon Holdings Ltd at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <InfoCard icon={<Building size={40} />} title="Organization Type" description="Private Limited Company" /> */}
                <InfoCard icon={<Users size={40} />} title="Number of Employees" description="50" />
                <InfoCard icon={<MapPin size={40} />} title="Factory Location" description="Golra Chorkhondo, Jagir, Manikganj" />
                <InfoCard icon={<Maximize size={40} />} title="Factory Area" description="2.18 Acre" />
                <InfoCard icon={<Factory size={40} />} title="Production Capacity" description="33,000 MT/Year" />
                <InfoCard icon={<Briefcase size={40} />} title="Financed By" description="One Bank PLC Ltd." />
                <InfoCard icon={<Shield size={40} />} title="Insurance" description="Eastern Insurance Co. Ltd." />
                {/* <InfoCard icon={<Scale size={40} />} title="Audits & Compliance" description="T. Hussain & Co." />
                <InfoCard icon={<Book size={40} />} title="Legal Advisor" description="Farooq & Associates" /> */}
            </div>
        </div>
    </section>
)

const InfoCard = ({ icon, title, description }) => (
    <div className="p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
)

const Timeline = () => (
    <section className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
                <TimelineItem year="2016" event="Establishment of Carbon Holdings Ltd" side="left" />
                <TimelineItem year="2016" event="Construction of fractionation plant begins" side="right" />
                <TimelineItem year="2017" event="Plant becomes operational" side="left" />
                <TimelineItem year="2018" event="Reached full production capacity" side="right" />
                <TimelineItem year="2020" event="Expanded workforce to 50 employees" side="left" />
                <TimelineItem year="2023" event="Received permission for resource imports" side="right" />
            </div>
        </div>
    </section>
)

const TimelineItem = ({ year, event, side }) => (
    <div className={`flex ${side === 'left' ? 'flex-row-reverse' : ''}  items-center justify-between w-full mb-8`}>
        <div className="w-5/12"></div>
        <div className="z-20">
            <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center ">
                <Calendar size={20} className="text-white" />
            </div>
        </div>
        <div className="w-5/12 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
            <div className={`bg-white p-4 rounded shadow ${side === 'left' ? 'text-right' : ''} `}>
                <h3 className="font-bold text-lg mb-1">{year}</h3>
                <p className="text-gray-700">{event}</p>
            </div>
        </div>
    </div>
)