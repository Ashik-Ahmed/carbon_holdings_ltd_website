"use client"

import { motion } from 'framer-motion'
import { Droplet, Zap, Truck } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      <About />
    </div>
  )
}

const Hero = () => (
  <section className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Powering Progress
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl md:text-2xl mb-8"
      >
        Innovative energy solutions for a sustainable future
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200"
      >
        Learn More
      </motion.button>
    </div>
  </section>
)

const Products = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </div>
  </section>
)

const ProductCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const About = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src="/placeholder.svg?height=400&width=600"
            alt="Carbon Holdings Ltd Facility"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold mb-4"
          >
            About Carbon Holdings Ltd
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 mb-4"
          >
            Established in 2016, Carbon Holdings Ltd operates a state-of-the-art condensate-based fractionation plant in Manikganj. With a daily production capacity of 100 metric tons, we are committed to addressing the local markets energy needs.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Read More
          </motion.button>
        </div>
      </div>
    </div>
  </section>
)