"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';


const MachineItem = ({ title, image, details, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    const BulletPoint = ({ children }) => (
        <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-start space-x-3 text-gray-700 transition-all duration-200 ease-in-out group"
        >
            <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="flex-shrink-0 mt-1 text-primary group-hover:text-secondary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.circle
                    cx="10"
                    cy="10"
                    r="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.path
                    d="M6 10l3 3 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                />
            </motion.svg>
            <span className="group-hover:text-secondary">{children}</span>
        </motion.li>
    );

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="overflow-hidden mb-16"
        >
            <motion.h3
                variants={contentVariants}
                className="relative w-fit text-2xl font-bold text-gray-600 p-6 text-center border-b-2 border-primary hover:text-white hover:shadow-md hover:shadow-secondary rounded-full transition-all duration-300 group z-10"
            >
                {/* {title} */}
                <span className="absolute inset-0 rounded-full bg-primary left-0 w-full h-full transition-all duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left z-0"></span>
                <span className="relative z-10">{title}</span>
            </motion.h3>
            <div className={`flex flex-col md:flex-row my-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                    variants={imageVariants}
                    className="md:w-1/2"
                >
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        className="w-[600px] h-[450px] object-contain bg-white rounded-lg shadow-lg"
                    />
                </motion.div>
                <motion.div
                    variants={contentVariants}
                    className="p-6 md:w-1/2"
                >
                    <ul className="space-y-4">
                        {details.map((detail, idx) => (
                            <BulletPoint key={idx}>{detail}</BulletPoint>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
};

const MachineryPage = () => {
    const machines = [
        {
            title: "Thermal Oil Boiler ATTSU Model FT 3000/3489 kW",
            image: "/mechinaries/thermal_oil_boiler_ATTSU_ft_3000.jpg",
            details: [
                "Inlet/outlet manifold: seamless steel ASTM A106b sch 40 tube",
                "Metallic shell: S235 JR",
                "Steel beams: S265 JR o F 112",
                "External shell: AISI-304",
                "Country of Origin: Spain",
                "Manufacturer: ATTSU Termica, S.L.",
            ],
        },
        {
            title: "Reboiler B101",
            image: "/mechinaries/reboiler_b101.png",
            details: [
                "Operating Pressure: 0.25MPa",
                "Operating Temperature: 275℃",
                "Joint Efficiency: 0.85",
                "Heat Transfer Surface: 500m2",
                "Country of Origin: China",
                "Manufacturer: Shandong Kerui Petroleum Equipment Co., Ltd",
            ],
        },
        {
            title: "Distillation Column C101",
            image: "/mechinaries/distillation_column_c101.png",
            details: [
                "Operating Pressure: 0.25MPa",
                "Operating Temperature: 275℃",
                "Joint Efficiency: 0.85",
                "Internal material: Pall Ring, 38 × 38 × 0.8 Aluminum, 7.5m3",
                "Packing Grid Plate and Pressure Ring: Φ 912, 304 SS, 2 SET",
                "Country of Origin: China",
                "Manufacturer: Shandong Kerui Petroleum Equipment Co., Ltd",
            ],
        },
        {
            title: "Nitrogen Generation Plant",
            image: "/mechinaries/nitrogen_generation_plant.jpg",
            details: [
                "Nitrogen displacement: 20 Nm3/h",
                "Air needed: 2.6m³/min",
                "Nitrogen Purity: 99.99%",
                "Country of Origin: China",
                "Manufacturer: Shandong Kerui Petroleum Equipment Co., Ltd",
            ],
        },
        {
            title: "Shell & Tube Heat Exchanger (E-101, E-102, E-103)",
            image: "/mechinaries/heat_exchanger_e-101.png",
            details: [
                "Size: 16'' NPS Sch. 40 x 6,400 mm OAL",
                "Tube: SA213 TP304 SMLS OD 19.05 mm x 1.65 mm (Min.). Thick x approx.5,486 mm in length",
                "Total Tube Qty. 427",
                "Tube Sheet: SA182- F304L",
                "Channel: SA312- TP304L",
                "ASME U Stamp: Included",
                "Manufacturer: DCF Engineering Pte Ltd.",
            ],
        },
        {
            title: "Air Cooled Heat Exchanger",
            image: "/mechinaries/air_cooled_heat_exchanger.png",
            details: [
                "Tube Material: A179",
                "Tube Size: OD 25.40mm x Thickness 2.11mm x 6,650mm in length",
                "Total Tube Qty: 439 pcs",
                "Fin: OD 57.15 mm/ Aluminium A1060-O",
                "Fin Type: *KL*",
                "No. of Fin per inch: 10 FPI",
                "Fan & Motor: Included",
            ],
        },
        {
            title: "Process Pumps API-610",
            image: "/mechinaries/process_pumps_api-610.jpg",
            details: [
                "Applications: Petroleum Refinery and Petrochemical Industry",
                "Capacity: 6 m³/min",
                "Head: 400 m",
                "Temperature: 120℃",
                "Size: 150 mm",
                "Country of Origin: South Korea",
                "Manufacturer: CW- Hydro, Inc.",
            ],
        },
        {
            title: "Cooling Water Pump API-610",
            image: "/mechinaries/cooling_water_pump_api-610.jpg",
            details: [
                "Applications: Boiler Feed Water, Processing Water, High Pressure Water",
                "Capacity: 2.5 m³/min",
                "Head: 500 m",
                "Temperature: 180℃",
                "Size: 100 mm",
                "Country of Origin: South Korea",
                "Manufacturer: CW- Hydro, Inc.",
            ],
        },
        {
            title: "UFO-ENV Non-Visible Flare (50 Nm3hr)",
            image: "/mechinaries/UFO_ENV_Non_Visible_Flare.jpg",
            details: [
                "Stainless Steel Construction",
                "Approx 850 deg C",
                "Integrated Safety System",
                "Latest PLC Controlled Operation",
                "Compatible with SCADA Control",
                "Leading Cyclonic Burner Technology",
                "Gas Pressure Protection",
                "IS Barriers",
                "Local Isolators",
                "Flush Back Protected Flame Arrestor",
                "Pressure and Temperature Monitoring",
                "Pneumatic Slam Shut Operation",
                "Country of Origin: UK",
                "Manufacturer: Uniflare Ltd."
            ],
        },
        {
            title: "FRP Cooling Tower (MODEL No: SA 032)",
            image: "/mechinaries/FRP_Cooling_Tower.jpg",
            details: [
                "Country of Origin: India",
                "Manufacturer: Towertech Cooling Systems Pvt ltd. "

            ],
        },
        {
            title: "Diesel Generator, 400 KVA",
            image: "/mechinaries/Diesel_Generator.jpg",
            details: [
                "Brand: FW Wilson",
                "Supplied By: Energypac Power Generation Ltd.",
                "Model: P400-3",
                "Rating: Prime 350.0 kVA /280.0 kW",
                "Rating: Standby 400.0 kVA /320.0 kW",
                "Voltage: 380-415 Volts",
                "Phase: 3",
                "Frequency: 50 Hz",
                "Engine Operating Speed: 1500 rpm at NTP conditions",
                "Diesel Engine: Perkins",
                "Class: ISO 8528 G2",
                "No of Cylinder / Alignment: 6 in line",
                "Cycle: 4 Strokes",
                "Fuel Tank Capacity: 888 Litres",
                "Fuel Consumption: 59.3 L/hr @ 75% load",
                "Alternator Model: EG315M-280N",
                "Insulation Class: H",
                "Base Frame Type: Heavy Duty Fabricated Steel",
                "Battery: 24 volt",
                "Cooling System: Water Cooled"
            ],
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <Hero />
            <div className="container mx-auto px-4 py-16">
                <div className="space-y-16">
                    {machines.map((machine, index) => (
                        <MachineItem key={index} {...machine} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};


const Hero = () => (
    <section className="relative text-white py-40" style={{
        backgroundImage: 'url(/machineries-cover2.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', objectFit: 'fill'
    }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative container mx-auto px-6 text-center">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-4"
            >
                Machineries
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8"
            >
                We have the best machineries for your needs
            </motion.p>
        </div>
    </section >
);

export default MachineryPage;