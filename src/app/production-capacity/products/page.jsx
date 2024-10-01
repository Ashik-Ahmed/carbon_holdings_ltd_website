'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChevronRight, Droplet, Fuel, SquareCheck, Truck, Zap } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const Products = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1,
    });

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="mx-auto py-8">
            <motion.section {...fadeInUp} className="mb-12">
                <ProductionDetails />
            </motion.section>
        </div>
    );
};

const productsData = [
    {
        icon: <Droplet size={40} />,
        title: "Motor Spirit (MS)",
        description: "72% of our production, addressing local petrol demand",
        tableHeaders: ["SL. No.", "Test", "Method", "Limit"],
        details: [
            { sl_no: "01", test: "Density at 15 °C, kg/L", method: "ASTM D 1298", limit: "To be reported" },
            { sl_no: "02", test: "Colour, visual", method: "-", limit: "Orange" },
            { sl_no: "03", test: "Reid Vapour Pressure at 38 °C, psi", method: "ASTM D 323", limit: "Max. 7" },
            { sl_no: "04", test: "Copper Strip Corrosion (3 hours at 50 °C)", method: "ASTM D 130", limit: "Max No. 1" },
            { sl_no: "05", test: "Octane Number, Research Method", method: "ASTM D 2699", limit: "Min. 79.6" },
            { sl_no: "06", test: "Lead content (as pb), g/L", method: "ASTD D 2599 / ASTD D 3341", limit: "Max. 0.013" },
            { sl_no: "07", test: "Oxidation Stability, minutes", method: "ASTM D 525", limit: "Min. 240" },
            { sl_no: "08", test: "Residue on evaporation, mg/100mL", method: "ASTM D 381", limit: "Max. 4" },
            { sl_no: "09", test: "Sulphur, total, % mass", method: "ASTM D 1266 / ASTM D 4294", limit: "Max. 0.1" },
            { sl_no: "10", test: "Doctor Test or Sulphur Mercaptan, % mass", method: "ASTM D 4952 / ASTM D 3227 / IP 104", limit: "Negative, Max. 0.001" },
            {
                sl_no: "11",
                test: ["Distillation", "Initial Boiling Point, °C", "10% vol. recovery, °C", "50% vol. recovery, °C", "90% vol. recovery, °C", "Final Boiling Point, °C", "Residue, % vol."],
                method: ["ASTM D 86", "ASTM D 86", "ASTM D 86", "ASTM D 86", "ASTM D 86", "ASTM D 86", "ASTM D 86"],
                limit: ["To be reported", "Max. 75", "Min. 80", "Max. 125", "Max. 180", "Max. 210", "Max. 2"]
            }
        ]
    },
    {
        icon: <Zap size={40} />,
        title: "High-Speed Diesel (HSD)",
        description: "19% of our production, supporting heavy-duty applications",
        tableHeaders: ["Sl. No.", "Characteristics", "Test Method", "Requirements"],
        details: [
            {
                sl_no: "01",
                test: "Density at 15°C, kg/L",
                method: "ASTM D 1298/ASTM D 4052/ ISO 3675/ ISO 12185/ IP 160/ IP 365",
                limit: "0.820-0.860",
            },
            {
                sl_no: "02",
                test: "Color ASTM, Max.",
                method: "ASTM D 1500/ISO 2049/ IP 196",
                limit: "3.0",
            },
            {
                sl_no: "03",
                test: "Acidity, inorganic",
                method: "ASTM D 664/ASTM D 974",
                limit: "Nil",
            },
            {
                sl_no: "04",
                test: "Acidity, total, mg of KOH/g, Max",
                method: "ASTM D 664/ASTM D 974/ISO 6619/ IP 182",
                limit: "0.20",
            },
            {
                sl_no: "05",
                test: "Ash, percent by mass, Max",
                method: "ASTM D 482/ ISO 6245/IP 4",
                limit: "0.01",
            },
            {
                sl_no: "06",
                test: "Carbon residue on Conradson on 10 percent residue, percent by mass, Max",
                method: "ASTM D 189/ASTM D 4530/ISO 4262/ ISO 10370/ IP 14/IP 398",
                limit: "0.30",
            },
            {
                sl_no: "07",
                test: "Cetane Number, Min",
                method: "ASTM D 613/ASTM D 7668/ ISO 5165/ ISO 15195/IP 41/IP 615",
                limit: "48",
            },
            {
                sl_no: "08",
                test: "Cetane index (calculated), Min",
                method: "ASTM D 4737/ASTM D 976/ ISO 4264/ ISO 380",
                limit: "46",
            },
            {
                sl_no: "09",
                test: "Pour point, Max (Winter/Summer)",
                method: "ASTM D 97/ ASTM D 5949/ ASTM D 5950/ ISO 3016/ IP 15",
                limit: "3°C / 9°C",
            },
            {
                sl_no: "10",
                test: "Copper strip corrosion for 3 hour at 50°C",
                method: "ASTM D 130/ ISO 2160/IP 154",
                limit: "Not worse than No. 1",
            },
            {
                sl_no: "11",
                test: "Distillation: 95% vol. recovery, °C, Max",
                method: "ASTM D 86/ ISO 3405/ IP 123",
                limit: "365",
            },
            {
                sl_no: "12",
                test: "Flash point, Pensky Martens closed cup/ Abel, °C, Min",
                method: "ASTM D 93/ IP 34/ ISO 2719",
                limit: "55",
            },
            {
                sl_no: "13",
                test: "Kinematic viscosity, centistokes at 38°C, Max",
                method: "ASTM D 445/ ISO 3104/ IP 71",
                limit: "2-4.5",
            },
            {
                sl_no: "14",
                test: "Sediment, percent by mass, Max",
                method: "ASTM D 473/ ISO 3735",
                limit: "0.01",
            },
            {
                sl_no: "15",
                test: "Sulphur, parts per million (ppm), Max",
                method: "ASTM D 5453/ ASTM D 2622/ ASTM D 7220/ ISO 20846/ ISO 20884/ IP 490",
                limit: "50",
            },
            {
                sl_no: "16",
                test: "Water content, percent by volume, Max",
                method: "ASTM D 6304/ ASTM D 95/ ISO 6296/ 12937/ IP 74",
                limit: "0.05",
            },
            {
                sl_no: "17",
                test: ["Oxidation stability, g/m3, Max", "Hours, Min"],
                method: ["ASTM D 2274/ ASTM D 7545/", "ISO 12205/ EN 15751/ IP 388/IP 574"],
                limit: ["25", "20"],
            },
            {
                sl_no: "18",
                test: "Polycyclic Aromatic Hydrocarbon (PAH), Percent by mass, Max",
                method: "ASTM D 6591/IP 391/ EN 129169",
                limit: "8",
            },
            {
                sl_no: "19",
                test: "Total Contamination, mg/kg, Max",
                method: "EN 12662/ IP 440",
                limit: "24",
            },
            {
                sl_no: "20",
                test: "Fatty acid methyl ester (FAME) content, % v/v, Max",
                method: "ASTM D 7371/ EN 14078/ IP 579",
                limit: "7",
            },
            {
                sl_no: "21",
                test: "Lubricity corrected wear scar diameter (wsd 1.4) at 60°C, microns, Max",
                method: "ISO 12156/ASTM D 6079/ ASTM D 7688/ IP 450",
                limit: "520",
            }
        ]
    },
    {
        icon: <Truck size={40} />,
        title: "Mineral Turpentine (MTT)",
        description: "7% of our production, available for open market distribution",
        mttSpecifications: [
            {
                slNo: 1,
                characteristics: "Appearance, at ambient temperature",
                requirements: { value: "Clear, bright and free of impurities", colspan: 2 },
                methodsOfTest: { bds: "Visual", astm: "-", ip: "-" }
            },
            {
                slNo: 2,
                characteristics: "Undissolved water",
                requirements: { value: "Absent", colspan: 2 },
                methodsOfTest: { bds: "-", astm: "D 4176\nD 4860\nD 6304", ip: "-" }
            },
            {
                slNo: 3,
                characteristics: "Aromatic content, % (v/v)",
                requirements: { minimum: "15", maximum: "40" },
                methodsOfTest: { bds: "-", astm: "D 1319\nD 6730", ip: "-" }
            },
            {
                slNo: 4,
                characteristics: "Colour, Saybolt",
                requirements: { minimum: "+20", maximum: "-" },
                methodsOfTest: { bds: "p-2", astm: "D 156", ip: "-" }
            },
            {
                slNo: 5,
                characteristics: "Copper strip corrosion, 100°C, 3 hours",
                requirements: { minimum: "-", maximum: "1b" },
                methodsOfTest: { bds: "p-6", astm: "D 130", ip: "-" }
            },
            {
                slNo: 6,
                characteristics: "Density at 15°C, Kg/L",
                requirements: { minimum: "0.77", maximum: "0.82" },
                methodsOfTest: { bds: "p-1", astm: "D 4052\nD 1298", ip: "-" }
            },
            {
                slNo: 7,
                characteristics: "Distillation, °C\nInitial boiling Point\nFinal boiling Point",
                requirements: { minimum: "135\n-", maximum: "-\n215" },
                methodsOfTest: { bds: "-", astm: "D 86(3)", ip: "-" }
            },
            {
                slNo: 8,
                characteristics: "Flash point (Abel closed cup), °C",
                requirements: { minimum: "28", maximum: "-" },
                methodsOfTest: { bds: "p-29", astm: "-", ip: "170" }
            },
            {
                slNo: 9,
                characteristics: "Unwashed gum content, mg/100 mL",
                requirements: { minimum: "-", maximum: "5" },
                methodsOfTest: { bds: "P-12", astm: "D 381", ip: "-" }
            },
            {
                slNo: 10,
                characteristics: "Doctor test",
                requirements: { value: "-ve", colspan: 2 },
                methodsOfTest: { bds: "p-14", astm: "D 4952", ip: "-" }
            }
        ]
    },
    {
        icon: <Fuel size={40} />,
        title: "Kerosene (SKO)",
        description: "Lightweight fuel for use in low-temperature applications",
        details: "Detailed information about Kerosene (SKO)..."
    }
];

const ProductionDetails = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMTTModalOpen, setIsMTTModalOpen] = useState(false);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const openMTTModal = (product) => {
        setSelectedProduct(product);
        setIsMTTModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsMTTModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 border-b-2 border-white w-fit mx-auto">Our Products</h2>
                <div className="my-12 text-center">
                    <p className="text-gray-200 mb-4">
                        As per agreements, a portion of the produced MS and HSD is supplied to the Bangladesh Petroleum Corporation (BPC). However, non-fuel products like MTT can be openly distributed in the local market, providing a valuable resource for various industries.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* {productsData.map((product, index) => (
                        <ProductCard
                            key={index}
                            icon={product.icon}
                            title={product.title}
                            description={product.description}
                            tests={product.details.length}
                            onLearnMore={() => openModal(product)}
                        />
                    ))} */}
                    <ProductCard
                        icon={<Droplet size={40} />}
                        title="Motor Spirit (MS)"
                        description="72% of our production, addressing local petrol demand"
                        onLearnMore={() => openModal(productsData[0])}
                    />
                    <ProductCard
                        icon={<Zap size={40} />}
                        title="High-Speed Diesel (HSD)"
                        description="19% of our production, supporting heavy-duty applications"
                        onLearnMore={() => openModal(productsData[1])}
                    />
                    <ProductCard
                        icon={<Truck size={40} />}
                        title="Mineral Turpentine (MTT)"
                        description="7% of our production, available for open market distribution"
                        onLearnMore={() => openMTTModal(productsData[2])}
                    />
                    {/* <ProductCard
                        icon={<Fuel size={40} />}
                        title="Kerosene (SKO)"
                        description="Lightweight fuel for use in low-temperature applications"
                        onLearnMore={() => openModal(productsData[3])}
                    /> */}
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <Modal product={selectedProduct} onClose={closeModal} />
                )}
                {
                    isMTTModalOpen && (
                        <MTTModal product={selectedProduct} onClose={closeModal} />
                    )
                }
            </AnimatePresence>
        </section>
    );
};


const ProductCard = ({ icon, title, description, onLearnMore }) => (
    <div className="p-4 rounded-lg bg-secondary hover:scale-105 border border-secondary hover:border-white transition-color duration-300 flex flex-col justify-between h-full">
        <div>
            <div className="text-white mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-200">{description}</p>
        </div>
        <div className="mt-4">
            <button onClick={onLearnMore} className="w-fit text-primary bg-white border rounded-full px-4 py-2 font-medium hover:underline flex items-center transition-transform">
                Learn More
                <ChevronRight className="ml-2" />
            </button>
        </div>
    </div>
);

const Modal = ({ product, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
        <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white text-gray-800 rounded-lg p-6 w-[90vw] h-[80vh] mx-4 md:mx-auto overflow-y-scroll"
        >
            <div className='flex justify-between items-start'>
                <h2 className="w-fit text-2xl font-semibold mb-4 border-b-2 pb-2 border-primary">{product.title}</h2>

                <button onClick={onClose} className="text-primary bg-white border border-primary rounded-full px-4 py-2 font-medium hover:bg-secondary hover:text-white transition-colors ease-in duration-200">
                    X
                </button>
            </div>
            <p className="mb-4">{product.description}</p>


            <div className="container mx-auto rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-secondary text-white">
                            <tr>
                                {
                                    product?.tableHeaders?.map((header, index) => (
                                        <th key={index} className="px-4 py-2 text-left">{header}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {product?.details?.map((spec, index) => (
                                <React.Fragment key={index}>
                                    {Array.isArray(spec.test) ? (
                                        spec.test.map((title, subIndex) => (
                                            <tr key={subIndex} className={`${subIndex % 2 === 0 ? 'bg-primary bg-opacity-10' : ''} border hover:bg-primary hover:bg-opacity-30`}>
                                                {subIndex === 0 && (
                                                    <td className="px-4 py-2" rowSpan={spec.test.length}>{spec.sl_no}</td>
                                                )}
                                                <td className="px-4 py-2">{title}</td>
                                                <td className="px-4 py-2">{spec.method[subIndex]}</td>
                                                <td className="px-4 py-2">{spec.limit[subIndex]}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr className={`${index % 2 === 0 ? 'bg-primary bg-opacity-10' : ''} border hover:bg-primary hover:bg-opacity-30`}>
                                            <td className="px-4 py-2">{spec.sl_no}</td>
                                            <td className="px-4 py-2">{spec.test}</td>
                                            <td className="px-4 py-2">{spec.method}</td>
                                            <td className="px-4 py-2">{spec.limit}</td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </motion.div>
    </motion.div >
);
const MTTModal = ({ product, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
        <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white text-gray-800 rounded-lg p-6 w-[90vw] h-[80vh] mx-4 md:mx-auto overflow-y-scroll"
        >
            <div className='flex justify-between items-start'>
                <h2 className="w-fit text-2xl font-semibold mb-4 border-b-2 pb-2 border-primary">{product.title}</h2>

                <button onClick={onClose} className="text-primary bg-white border border-primary rounded-full px-4 py-2 font-medium hover:bg-secondary hover:text-white transition-colors ease-in duration-200">
                    X
                </button>
            </div>
            <p className="mb-4">{product.description}</p>

            <div className="container mx-auto rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Sl. No.</th>
                                <th className="border border-gray-300 px-4 py-2">Characteristics</th>
                                <th className="border border-gray-300 px-4 py-2" colSpan={2}>Requirements</th>
                                <th className="border border-gray-300 px-4 py-2" colSpan={3}>Methods of Test</th>
                            </tr>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2"></th>
                                <th className="border border-gray-300 px-4 py-2"></th>
                                <th className="border border-gray-300 px-4 py-2">Minimum</th>
                                <th className="border border-gray-300 px-4 py-2">Maximum</th>
                                <th className="border border-gray-300 px-4 py-2">Part of BDS 1320</th>
                                <th className="border border-gray-300 px-4 py-2">ASTM</th>
                                <th className="border border-gray-300 px-4 py-2">IP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product?.mttSpecifications.map((spec) => (
                                <tr key={spec.slNo}>
                                    <td className="border border-gray-300 px-4 py-2">{spec.slNo}</td>
                                    <td className="border border-gray-300 px-4 py-2 whitespace-pre-line">{spec.characteristics}</td>
                                    {('value' in spec.requirements) ? (
                                        <td className="border border-gray-300 px-4 py-2" colSpan={2}>{spec.requirements.value}</td>
                                    ) : (
                                        <>
                                            <td className="border border-gray-300 px-4 py-2 whitespace-pre-line">{spec.requirements.minimum}</td>
                                            <td className="border border-gray-300 px-4 py-2">{spec.requirements.maximum}</td>
                                        </>
                                    )}
                                    <td className="border border-gray-300 px-4 py-2">{spec.methodsOfTest.bds}</td>
                                    <td className="border border-gray-300 px-4 py-2 whitespace-pre-line">{spec.methodsOfTest.astm}</td>
                                    <td className="border border-gray-300 px-4 py-2">{spec.methodsOfTest.ip}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </motion.div>
    </motion.div >
);

export default Products;