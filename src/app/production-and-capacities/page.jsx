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

    const dieselCondensateSpec = [
        { sl: "01", test: "Density@15°C", method: "ASTM D4052", unit: "KG/l", limit: "0.80-0.86" },
        { sl: "02", test: "Distillation", method: "-", unit: "-", limit: "-" },
        { sl: "03", test: "Color", method: "ASTM D1500", unit: "-", limit: "Max 3" },
        { sl: "04", test: "Initial Boiling Point", method: "ASTM D86", unit: "°C", limit: "180" },
        { sl: "05", test: "Final Boiling Point", method: "ASTM D86", unit: "°C", limit: "360" },
        { sl: "06", test: "Sulphur Content", method: "ASTM D4294", unit: "% mass", limit: "Max 0.05" },
        { sl: "07", test: "Cetane Index", method: "ASTM D976", unit: "-", limit: "Min 48" },
        { sl: "08", test: "Flash Point", method: "ASTM D93", unit: "°C", limit: "Min 55" },
        { sl: "09", test: "Aromatics Content", method: "ASTM D1319", unit: "% vol", limit: "Report" },
        { sl: "10", test: "Saturates", method: "ASTM D1319", unit: "% vol", limit: "Report" },
        { sl: "11", test: "Lead Content", method: "ASTM D7111", unit: "Mg/Kg", limit: "Report" },
        { sl: "12", test: "RVP", method: "ASTM D323", unit: "PSI", limit: "Report" }
    ];

    const localGasCondensateProperties = [
        { sl: "01", test: "Range of Boiling Point, °C", method: "D 1160", results: "21-345" },
        { sl: "02", test: "Motor Spirit", method: "-", results: "50" },
        { sl: "03", test: "Kerosene", method: "-", results: "23" },
        { sl: "04", test: "Diesel", method: "-", results: "24" },
        { sl: "05", test: "Density at 15°C, Kg/L", method: "D 1298", results: "0.8184" },
        { sl: "06", test: "API Gravity, 60/60° F", method: "D 287-64", results: "43" },
        { sl: "07", test: "Kinematic Viscosity, cSt 122°F", method: "D 445-65", results: "0.999" },
        { sl: "08", test: "Kinematic Viscosity, cSt 70°F", method: "D 445-65", results: "1.43" },
        { sl: "09", test: "Pour Point, °C", method: "D 97-57", results: "Below -20" },
        { sl: "10", test: "Aniline Point, °C", method: "D 611-64", results: "43" },
        { sl: "11", test: "Acid Value, mg KOH/g", method: "IP-1/58", results: "0.077" },
        { sl: "12", test: "Flash Point, °C", method: "D 93-62", results: "22" },
        { sl: "13", test: "Sulphur Content, mass%", method: "D 129-64", results: "0.245" },
        { sl: "14", test: "Water Content, %", method: "IP-74/57", results: "Zero" },
        { sl: "15", test: "Light Hydrocarbon (Below 50°C), %", method: "D 1160", results: "4.0" },
        { sl: "16", test: "Carbon Residue, %", method: "D 189-65", results: "1.50" },
        { sl: "17", test: "Ash Content, %", method: "D 482-63", results: "0.0075" },
        { sl: "18", test: "Residue on Evaporation, %", method: "IP-131/58", results: "0.387" },
        { sl: "19", test: "Lead", method: "D 1269-61", results: "0.07845" },
        { sl: "20", test: "Arsenic", method: "-", results: "0.00625" },
        { sl: "21", test: "Zinc", method: "D 1549-64", results: "0.78812" },
        { sl: "22", test: "Cadmium", method: "-", results: "0.00013" }
    ]

    const labTestingFacility = [
        { slNo: "01", testName: "Density of liquid Hydrocarbon", standardMethod: "ASTM D1298", apparatus: "Hydrometer & Thermometer" },
        { slNo: "02", testName: "Distillation of petroleum liquid hydrocarbon", standardMethod: "ASTM D86", apparatus: "Distillation Apparatus, Stanhope-seta" },
        { slNo: "03", testName: "RVP (Reid Vapor Pressure) of petroleum", standardMethod: "ASTM D323", apparatus: "RVP Pressure Cylinder and Water Bath" },
        { slNo: "04", testName: "Sulfur of petroleum products", standardMethod: "ASTM D4294", apparatus: "Energy Dispersive X-ray Fluorescent Analyzer" },
        { slNo: "05", testName: "Viscosity (Kinematic) of transparent liquids", standardMethod: "ASTM D445", apparatus: "Viscometer and Silicone Oil/ Water bath" },
        { slNo: "06", testName: "Colour (ASTM/Saybolt) of petroleum products", standardMethod: "ASTM D1500/D156", apparatus: "Seta Multicolor Automatic Colorimeter" },
        { slNo: "07", testName: "Cetane Index (Calculated) Test", standardMethod: "ASTM D4737", apparatus: "Distillation Apparatus, Hydrometer, Thermometer" },
        { slNo: "08", testName: "Copper Strip Corrosion Tester", standardMethod: "ASTM D130", apparatus: "Copper Corrosion Apparatus, Stanhope-seta" },
        { slNo: "09", testName: "Flash Point Tester of petroleum", standardMethod: "ASTM D93", apparatus: "Pensky Martens Tester, Stanhope-seta" },
        { slNo: "10", testName: "Pour point & Cloud Tester of petroleum", standardMethod: "ASTM D97", apparatus: "Pour Point & Cloud Tester, Stanhope-seta" },
        { slNo: "11", testName: "Octane number test of petroleum", standardMethod: "ASTM D2699", apparatus: "Octane Analyzer (Portable), USA" },
        { slNo: "12", testName: "Smoke Point Tester of petroleum", standardMethod: "ASTM D1322", apparatus: "Smoke Point tester, Stanhope-seta" },
        { slNo: "13", testName: "Conductivity Tester of petroleum", standardMethod: "ASTM D1322", apparatus: "Smoke Point tester, Stanhope-seta" }
    ];

    const pumpData = [
        { slNo: "01", name: "Feed Pump (P-101A/101B)", capacity: 4.97, pressure: 11 },
        { slNo: "02", name: "Reflux Pump (P-102A/102B)", capacity: 6.58, pressure: 11 },
        { slNo: "03", name: "Product Pump (P-103/104)", capacity: 2.70, pressure: 11 },
        { slNo: "04", name: "Reflux/ Product Pump (P-105)", capacity: 2.51, pressure: 7.5 },
        { slNo: "05", name: "Reflux Product Pump (P-106)", capacity: 2.61, pressure: 7.5 },
        { slNo: "06", name: "Product Pump (P-107A/107B)", capacity: 5.08, pressure: 11 }
    ];

    return (
        <div className="mx-auto py-8">
            <motion.h1
                className="text-4xl font-bold mb-8 text-center text-primary"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Production & Capacities
            </motion.h1>

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

            {/* <motion.section {...fadeInUp} className="mb-12">
                <div className="bg-white shadow-md rounded-lg p-6">

                </div>
            </motion.section> */}

            <motion.section {...fadeInUp} className="mb-12">
                {/* <Products /> */}
                <ProductionDetails />
            </motion.section>


            <motion.section {...fadeInUp} className="mb-12">
                <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
                    {/* <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Motor Spirit (MS)</li>
                        <li>High Speed Diesel (HSD)</li>
                        <li>Mineral Turpentine (MTT)</li>
                        <li>Kerosene (SKO)</li>
                    </ul> */}
                    <div className='md:grid md:grid-cols-2 md:gap-12'>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2 border-primary">Production Capacity</h3>
                            <ul className="list-disc list-inside mb-4">
                                <div className='flex items-start gap-x-4'>
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
                                    <span>Capacity: 33,000 MT/year</span>
                                </div>
                                <div className='flex items-start gap-x-4'>
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
                                    <span>Daily Production Capacity: 100 MT/day</span>
                                </div>
                                <div className='flex items-start gap-x-4'>
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
                                    <span>Production Ratio: Distilate (MS, MTT) ~80% & Bottom Products (SKO, HSD) ~20% </span>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2 border-primary">Production Ratio</h3>
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
                                    <p className='text-secondary'>Fig: Product Yield pattern- Natural gas condensate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section {...fadeInUp} className="mb-12">
                <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
                    <h2 className="w-fit text-2xl font-semibold mb-4 border-b-2 pb-2 border-primary">Diesel Riched Condensate Specification</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="px-4 py-2 text-left">SL No</th>
                                    <th className="px-4 py-2 text-left">Test</th>
                                    <th className="px-4 py-2 text-left">Method</th>
                                    <th className="px-4 py-2 text-left">Unit</th>
                                    <th className="px-4 py-2 text-left">Limit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dieselCondensateSpec.map((spec, index) => (
                                    <tr key={index} className={`${index % 2 === 0 ? 'bg-primary bg-opacity-10' : ''} border hover:bg-primary hover:bg-opacity-30`}>
                                        <td className="px-4 py-2">{spec.sl}</td>
                                        <td className="px-4 py-2">{spec.test}</td>
                                        <td className="px-4 py-2">{spec.method}</td>
                                        <td className="px-4 py-2">{spec.unit}</td>
                                        <td className="px-4 py-2">{spec.limit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.section>
            <motion.section {...fadeInUp} className="mb-12">
                <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
                    <h2 className="w-fit text-2xl font-semibold mb-4 border-b-2 pb-2 border-primary">Local Gas Condensate Properties</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="px-4 py-2 text-left">SL No</th>
                                    <th className="px-4 py-2 text-left">Test</th>
                                    <th className="px-4 py-2 text-left">Method</th>
                                    <th className="px-4 py-2 text-left">Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                {localGasCondensateProperties.map((spec, index) => (
                                    <tr key={index} className={`${index % 2 === 0 ? 'bg-primary bg-opacity-10' : ''} border hover:bg-primary hover:bg-opacity-30`}>
                                        <td className="px-4 py-2">{spec.sl}</td>
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
                <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
                    <h2 className="w-fit text-2xl font-semibold mb-4 border-b-2 pb-2 border-primary">Laboratory Testing & Quality Control Facility</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="px-4 py-2 text-left">SL No</th>
                                    <th className="px-4 py-2 text-left">Test Name/Purpose</th>
                                    <th className="px-4 py-2 text-left">Standard Method</th>
                                    <th className="px-4 py-2 text-left">Apparatus/Instrument</th>
                                </tr>
                            </thead>
                            <tbody>
                                {labTestingFacility.map((facility, index) => (
                                    <tr key={index} className={`${index % 2 === 0 ? 'bg-primary bg-opacity-10' : ''} border hover:bg-primary hover:bg-opacity-30`}>
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


export const ProductionDetails = () => (
    <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 border-b-2 border-white w-fit mx-auto">Our Production</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <ProductCard
                    icon={<Fuel size={40} />}
                    title="Kerosene (SKO)"
                    description="Lightweight fuel for use in low-temperature applications"
                />
            </div>
        </div>
        <div className="mt-12 text-center">
            <p className="text-gray-200 mb-4">
                As per agreements, a portion of the produced MS and HSD is supplied to the Bangladesh Petroleum Corporation (BPC). However, non-fuel products like MTT can be openly distributed in the local market, providing a valuable resource for various industries.
            </p>
        </div>
    </section >
)

const ProductCard = ({ icon, title, description }) => (
    <div className="p-4 rounded-lg bg-secondary hover:bg-tertiary transition-color duration-300">
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2  text-white">{title}</h3>
        <p className="text-gray-200 ">{description}</p>
    </div>
)

// export const Products = () => (
//     <section className="py-20 bg-primary rounded-lg">
//         <div className="container mx-auto px-6">
//             <h2 className="text-white text-3xl font-bold text-center mb-8 border-b-2 border-white w-fit mx-auto ">Our Products</h2>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                 <ProductCard
//                     icon={<Droplet size={40} />}
//                     title="Motor Spirit (MS)"
//                     description="High-quality petrol for optimal engine performance"
//                 />
//                 <ProductCard
//                     icon={<Zap size={40} />}
//                     title="High-Speed Diesel (HSD)"
//                     description="Efficient diesel fuel for heavy-duty applications"
//                 />
//                 <ProductCard
//                     icon={<Truck size={40} />}
//                     title="Mineral Turpentine (MTT)"
//                     description="Versatile solvent for various industrial uses"
//                 />
//                 <ProductCard
//                     icon={<Fuel size={40} />}
//                     title="Kerosene (SKO)"
//                     description="Lightweight fuel for use in low-temperature applications"
//                 />
//             </div>
//         </div>
//     </section>
// )

// const ProductCard = ({ icon, title, description }) => (
//     <div className="bg-secondary p-4 border border-secondary rounded-lg hover:bg-tertiary hover:border-gray-200 transition-all duration-300 transform">
//         <div className="text-white mb-4">{icon}</div>
//         <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-100">{description}</p>
//     </div>
// )

export default ProductionCapacitiesPage;