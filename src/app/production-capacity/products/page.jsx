'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Droplet, Fuel, SquareCheck, Truck, Zap } from "lucide-react";
import { useInView } from 'react-intersection-observer';

const Products = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1, // Adjust based on when you want to start the animation
    });

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="mx-auto py-8">
            {/* <motion.h1
                className="text-4xl font-bold mb-8 text-center text-primary"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Production & Capacities
            </motion.h1>

            <motion.section {...fadeInUp} className="mb-12">

            </motion.section> */}

            <motion.section {...fadeInUp} className="mb-12">
                {/* <Products /> */}
                <ProductionDetails />
            </motion.section>



        </div>
    );
};


export const ProductionDetails = () => (
    <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 border-b-2 border-white w-fit mx-auto">Our Products</h2>
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

export default Products;