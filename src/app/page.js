"use client"

import { motion } from 'framer-motion'
import { Droplet, Zap, Truck, BarChart, Globe, Award } from 'lucide-react'
import Slider from 'react-slick'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      {/* <About /> */}
      <Stats />
      <Features />
      <Testimonials />
    </div>
  )
}

// const Hero = () => (
//   <section className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-20">
//     <div className="container mx-auto px-6 text-center">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="text-4xl md:text-6xl font-bold mb-4"
//       >
//         Powering Progress
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="text-xl md:text-2xl mb-8"
//       >
//         Innovative energy solutions for a sustainable future
//       </motion.p>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200"
//       >
//         Learn More
//       </motion.button>
//     </div>
//   </section>
// )


const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-10 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown text-center">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200 animate-fadeIn">
          Learn More
        </motion.button>
      </div>
      <Slider {...settings} className="h-full">
        <div className="relative h-screen w-full">
          <img src="/about-us-cover.jpg" alt="Carbon Holdings Facility" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-screen w-full">
          <img src="/about-us-cover.jpg" alt="Motor Spirit Production" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-screen w-full">
          <img src="/about-us-cover.jpg" alt="Sustainable Energy" className="w-full h-full object-cover" />
        </div>
      </Slider>
    </section >
  )
}

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
  <div
    className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
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


const Stats = () => (
  <section className="py-20 bg-blue-600 text-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <StatItem number="100+" label="Metric Tons Daily Production" />
        <StatItem number="72%" label="Motor Spirit Production" />
        <StatItem number="5+" label="Years of Excellence" />
      </div>
    </div>
  </section>
)

const StatItem = ({ number, label }) => (
  <div className="p-4 rounded-lg bg-blue-700 hover:bg-blue-800 transition-colors duration-300">
    <h3 className="text-4xl font-bold mb-2">{number}</h3>
    <p className="text-xl">{label}</p>
  </div>
)

const Features = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<BarChart size={40} />}
          title="Industry Leadership"
          description="Leading the way in petrochemical processing and innovation"
        />
        <FeatureCard
          icon={<Globe size={40} />}
          title="Sustainable Practices"
          description="Committed to environmentally responsible operations"
        />
        <FeatureCard
          icon={<Award size={40} />}
          title="Quality Assurance"
          description="Rigorous standards ensuring top-tier product quality"
        />
      </div>
    </div>
  </section>
)

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const Testimonials = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Partners Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialCard
          quote="Carbon Holdings Ltd has been an invaluable partner in our energy initiatives. Their commitment to quality and innovation is unparalleled."
          author="John Doe"
          position="CEO, Energy Solutions Inc."
        />
        <TestimonialCard
          quote="The products from Carbon Holdings Ltd consistently meet our high standards. Their reliability and efficiency have greatly improved our operations."
          author="Jane Smith"
          position="Operations Manager, Petrotech Industries"
        />
      </div>
    </div>
  </section>
)

const TestimonialCard = ({ quote, author, position }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <div className="font-semibold">{author}</div>
    <div className="text-sm text-gray-500">{position}</div>
  </div>
)