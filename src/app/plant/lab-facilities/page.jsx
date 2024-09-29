"use client";

import { motion } from 'framer-motion';
import React from 'react';

const page = () => {


    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };


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

    return (
        <div className='my-16'>
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

export default page;