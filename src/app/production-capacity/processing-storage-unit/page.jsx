"use client";

import React from 'react';
import { motion } from 'framer-motion';

const page = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const pumpData = [
        { slNo: "01", name: "Feed Pump (P-101A/101B)", capacity: 4.97, pressure: 11 },
        { slNo: "02", name: "Reflux Pump (P-102A/102B)", capacity: 6.58, pressure: 11 },
        { slNo: "03", name: "Product Pump (P-103/104)", capacity: 2.70, pressure: 11 },
        { slNo: "04", name: "Reflux/ Product Pump (P-105)", capacity: 2.51, pressure: 7.5 },
        { slNo: "05", name: "Reflux Product Pump (P-106)", capacity: 2.61, pressure: 7.5 },
        { slNo: "06", name: "Product Pump (P-107A/107B)", capacity: 5.08, pressure: 11 }
    ];

    return (
        <div className='my-16'>
            <motion.section {...fadeInUp} className="mb-12">
                <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
                    <h2 className="w-fit text-2xl font-semibold mb-4 border-b-2 pb-2 border-primary">Processing and Storage</h2>
                    <h3 className="text-gray-700 text-xl font-semibold mb-2">Daily Production Facility: 100 Metric Ton</h3>
                    <ul className="list-disc list-inside mb-4">
                        <div className='flex items-center gap-x-4'>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                className="flex-shrink-0 mt-1 text-primary"
                            >
                                <circle
                                    cx="10"
                                    cy="10"
                                    r="8"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M6 10l3 3 5-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                            Condensate Splitter Unit: 60 MT
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                className="flex-shrink-0 mt-1 text-primary"
                            >
                                <circle
                                    cx="10"
                                    cy="10"
                                    r="8"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M6 10l3 3 5-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                            <span>Condensate Fractionation Unit: 40 MT</span>
                        </div>
                    </ul>
                    <h3 className="text-gray-700 text-xl font-semibold mb-2">Tank Storage Capacity</h3>
                    <ul className="list-disc list-inside mb-4">
                        <div className='flex items-center gap-x-4'>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                className="flex-shrink-0 mt-1 text-primary"
                            >
                                <circle
                                    cx="10"
                                    cy="10"
                                    r="8"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M6 10l3 3 5-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                            <span>Raw Material Storage: 3,143.431 MT</span>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                className="flex-shrink-0 mt-1 text-primary"
                            >
                                <circle
                                    cx="10"
                                    cy="10"
                                    r="8"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M6 10l3 3 5-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                            <span>Finished Product Storage: 1,457.883 MT</span>
                        </div>
                    </ul>
                    <div>
                        <h2 className="text-gray-700 text-xl font-semibold mb-2">Pump Requirement & Capacity</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead className="bg-secondary text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Sl. No</th>
                                        <th className="px-4 py-2 text-left">Pump</th>
                                        <th className="px-4 py-2 text-left">Requirement (kW)</th>
                                        <th className="px-4 py-2 text-left">Existing Capacity (kW)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pumpData.map((spec, index) => (
                                        <tr key={index} className={`${index % 2 === 0 ? 'bg-primary bg-opacity-10' : ''} border hover:bg-primary hover:bg-opacity-30`}>
                                            <td className="px-4 py-2">{spec.slNo}</td>
                                            <td className="px-4 py-2">{spec.name}</td>
                                            <td className="px-4 py-2">{spec.capacity}</td>
                                            <td className="px-4 py-2">{spec.pressure}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default page;