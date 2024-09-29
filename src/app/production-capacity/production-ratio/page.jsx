"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Droplet, Fuel, SquareCheck, Truck, Zap } from "lucide-react";
import { useInView } from 'react-intersection-observer';

const ProductionRatio = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1, // Adjust based on when you want to start the animation
    });

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const dieselProductionRatio = [
        { name: 'MS', value: 75 },
        { name: 'MTT', value: 7 },
        { name: 'HSD', value: 16 },
        { name: 'Process Loss', value: 2 }
    ];

    const naturalGasProductionRatio = [
        { name: 'HSD', value: 98 },
        { name: 'Process Loss', value: 2 }
    ];

    const dieselChartColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF0000'];
    const naturalGasChartColors = ['#FFBB28', '#FF0000'];

    return (
        <div className='my-16'>
            <motion.section {...fadeInUp} className="mb-12">
                <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
                    {/* <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Motor Spirit (MS)</li>
                        <li>High Speed Diesel (HSD)</li>
                        <li>Mineral Turpentine (MTT)</li>
                        <li>Kerosene (SKO)</li>
                    </ul> */}
                    <div>
                        <div className='mb-12'>
                            <h3 className="w-fit text-xl font-semibold mb-2 border-b-2 pb-2 border-primary">Production Capacity</h3>
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
                            <h3 className="w-fit text-xl font-semibold mb-2 border-b-2 pb-2 border-primary">Production Ratio</h3>
                            <div className="w-full" ref={ref}>
                                {
                                    inView && (
                                        <div className='md:flex items-center justify-center p-4'>
                                            <ResponsiveContainer width="100%" height={400} className={''}>
                                                <PieChart>
                                                    <Pie
                                                        data={dieselProductionRatio}
                                                        cx="50%"
                                                        cy="50%"
                                                        labelLine={false}
                                                        innerRadius={80}
                                                        outerRadius={120}
                                                        paddingAngle={2}
                                                        fill="#8884d8"
                                                        dataKey="value"
                                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                                    >
                                                        {dieselProductionRatio.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={dieselChartColors[index % dieselChartColors.length]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip />
                                                </PieChart>
                                                <div className='text-center'>
                                                    <p className='italic bg-secondary rounded-md w-fit mx-auto p-1 text-white'>Fig: Product Yield pattern- Natural gas condensate</p>
                                                </div>
                                            </ResponsiveContainer>

                                            <ResponsiveContainer width="100%" height={400}>
                                                <PieChart>
                                                    <Pie
                                                        data={naturalGasProductionRatio}
                                                        cx="50%"
                                                        cy="50%"
                                                        labelLine={false}
                                                        innerRadius={80}
                                                        outerRadius={120}
                                                        paddingAngle={2}
                                                        fill="#8884d8"
                                                        dataKey="value"
                                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                                    >
                                                        {naturalGasProductionRatio.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={naturalGasChartColors[index % naturalGasChartColors.length]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip />
                                                </PieChart>
                                                <div className='text-center'>
                                                    <p className='italic bg-secondary rounded-md w-fit mx-auto p-1 text-white'>Fig: Product Yield pattern- Diesel riched condensate</p>
                                                </div>
                                            </ResponsiveContainer>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>


        </div>
    );
};

export default ProductionRatio;