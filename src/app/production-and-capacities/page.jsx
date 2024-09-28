'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Droplet, Fuel, SquareCheck, Truck, Zap } from "lucide-react";

const ProductionCapacitiesPage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const productionRatioData = [
        { name: 'MS', value: 75 },
        { name: 'MTT', value: 7 },
        { name: 'HSD', value: 16 },
        { name: 'Process Loss', value: 2 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const rawMaterialSpec = [
        { test: 'Range of Boiling Point, °C', method: 'D 1160', results: '21-345' },
        { test: 'Density at 15°C, Kg/L', method: 'D 1298', results: '0.8184' },
        { test: 'API Gravity, 60/60° F', method: 'D 287-64', results: '43' },
        { test: 'Kinematic Viscosity, cSt 122° F', method: 'D 445-65', results: '0.999' },
        { test: 'Pour Point, °C', method: 'D 97-57', results: 'Below -20' },
        { test: 'Sulphur Content, mass%', method: 'D 129-64', results: '0.245' },
        { test: 'Carbon Residue, %', method: 'D 189-65', results: '1.50' },
    ];

    const labTestingFacility = [
        { slNo: '01', testName: 'Density of liquid Hydrocarbon', standardMethod: 'ASTM D1298', apparatus: 'Hydrometer & Thermometer' },
        { slNo: '02', testName: 'Distillation of petroleum liquid hydrocarbon', standardMethod: 'ASTM D86', apparatus: 'Distillation Apparatus, Stanhope-seta' },
        { slNo: '03', testName: 'RVP (Reid Vapor Pressure) of petroleum', standardMethod: 'ASTM D323', apparatus: 'RVP Pressure Cylinder and Water Bath' },
        { slNo: '04', testName: 'Sulfur of petroleum products', standardMethod: 'ASTM D4294', apparatus: 'Energy Dispersive X-ray Fluorescent Analyzer' },
        { slNo: '05', testName: 'Viscosity (Kinematic) of transparent liquids', standardMethod: 'ASTM D445', apparatus: 'Viscometer and Silicone Oil/ Water bath' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.h1
                className="text-4xl font-bold mb-8 text-center text-primary"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Production & Capacities
            </motion.h1>

            <motion.section {...fadeInUp} className="mb-12">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Processing and Storage</h2>
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
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Pump</th>
                                        <th className="px-4 py-2 text-left">Requirement (kW)</th>
                                        <th className="px-4 py-2 text-left">Existing Capacity (kW)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="px-4 py-2">Feed Pump (P-101A/101B)</td><td className="px-4 py-2">4.97</td><td className="px-4 py-2">11</td></tr>
                                    <tr className="bg-gray-50"><td className="px-4 py-2">Reflux Pump (P-102A/102B)</td><td className="px-4 py-2">6.58</td><td className="px-4 py-2">11</td></tr>
                                    <tr><td className="px-4 py-2">Product Pump (P-103/104)</td><td className="px-4 py-2">2.70</td><td className="px-4 py-2">11</td></tr>
                                    <tr className="bg-gray-50"><td className="px-4 py-2">Reflux/ Product Pump (P-105)</td><td className="px-4 py-2">2.51</td><td className="px-4 py-2">7.5</td></tr>
                                    <tr><td className="px-4 py-2">Reflux Product Pump (P-106)</td><td className="px-4 py-2">2.61</td><td className="px-4 py-2">7.5</td></tr>
                                    <tr className="bg-gray-50"><td className="px-4 py-2">Product Pump (P-107A/107B)</td><td className="px-4 py-2">5.08</td><td className="px-4 py-2">11</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* <motion.section {...fadeInUp} className="mb-12">
                <div className="bg-white shadow-md rounded-lg p-6">

                </div>
            </motion.section> */}

            <motion.section {...fadeInUp} className="mb-12">
                <Products />
            </motion.section>


            <motion.section {...fadeInUp} className="mb-12">
                <div className="bg-white shadow-md rounded-lg p-6">
                    {/* <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Motor Spirit (MS)</li>
                        <li>High Speed Diesel (HSD)</li>
                        <li>Mineral Turpentine (MTT)</li>
                        <li>Kerosene (SKO)</li>
                    </ul> */}
                    <h3 className="text-xl font-semibold mb-2">Production Capacity</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Capacity: 33,000 MT/year</li>
                        <li>Daily Production Capacity: 100 MT/day</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Production Ratio</h3>
                    <div className="w-full">
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart>
                                <Pie
                                    data={productionRatioData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    innerRadius={80}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {productionRatioData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className='text-center'>
                            <p className='text-primary'>Fig: Product Yield pattern- Natural gas condensate</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section {...fadeInUp} className="mb-12">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Raw Material Specification</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="px-4 py-2 text-left">Test</th>
                                    <th className="px-4 py-2 text-left">Method</th>
                                    <th className="px-4 py-2 text-left">Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rawMaterialSpec.map((spec, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                        <td className="px-4 py-2">{spec.test}</td>
                                        <td className="px-4 py-2">{spec.method}</td>
                                        <td className="px-4 py-2">{spec.results}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.section>

            <motion.section {...fadeInUp} className="mb-12">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Laboratory Testing & Quality Control Facility</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="px-4 py-2 text-left">SL No</th>
                                    <th className="px-4 py-2 text-left">Test Name/Purpose</th>
                                    <th className="px-4 py-2 text-left">Standard Method</th>
                                    <th className="px-4 py-2 text-left">Apparatus/Instrument</th>
                                </tr>
                            </thead>
                            <tbody>
                                {labTestingFacility.map((facility, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                        <td className="px-4 py-2">{facility.slNo}</td>
                                        <td className="px-4 py-2">{facility.testName}</td>
                                        <td className="px-4 py-2">{facility.standardMethod}</td>
                                        <td className="px-4 py-2">{facility.apparatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};



export const Products = () => (
    <section className="py-20 bg-primary rounded-lg">
        <div className="container mx-auto px-6">
            <h2 className="text-white text-3xl font-bold text-center mb-8 border-b-2 border-white w-fit mx-auto ">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <ProductCard
                    icon={<Droplet size={40} />}
                    title="Motor Spirit (MS)"
                    description="High-quality petrol for optimal engine performance"
                />
                <ProductCard
                    icon={<Zap size={40} />}
                    title="High-Speed Diesel (HSD)"
                    description="Efficient diesel fuel for heavy-duty applications"
                />
                <ProductCard
                    icon={<Truck size={40} />}
                    title="Mineral Turpentine (MTT)"
                    description="Versatile solvent for various industrial uses"
                />
                <ProductCard
                    icon={<Fuel size={40} />}
                    title="Kerosene (SKO)"
                    description="Lightweight fuel for use in low-temperature applications"
                />
            </div>
        </div>
    </section>
)

const ProductCard = ({ icon, title, description }) => (
    <div
        className="bg-secondary p-6 hover:border rounded-lg hover:border-gray-200 transition-all duration-300 transform hover:scale-105"
    >
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-100">{description}</p>
    </div>
)

export default ProductionCapacitiesPage;