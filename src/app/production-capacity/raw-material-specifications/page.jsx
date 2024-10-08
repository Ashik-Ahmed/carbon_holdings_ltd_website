"use client";

import React from 'react';
import { motion } from 'framer-motion';

const page = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

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


    return (
        <div className='mx-auto py-16'>
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
        </div>
    );
};

export default page;