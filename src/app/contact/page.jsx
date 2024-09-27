"use client"

import Head from 'next/head'
import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the form data to your server
        console.log('Form submitted:', formData)
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <>
            <Head>
                <title>Contact Us - Carbon Holdings Ltd</title>
                <meta name="description" content="Get in touch with Carbon Holdings Ltd for inquiries about our petrochemical products and services." />
            </Head>
            <div className="min-h-screen bg-gray-100">
                <main className="container mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold text-center mb-12 animate-fadeInDown border-b-2 border-blue-500 w-fit mx-auto">Contact Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                        <ContactInfo />
                    </div>
                </main>
                <Map />
            </div>
        </>
    )
}

const ContactForm = ({ formData, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 animate-fadeInLeft">
        <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>
        <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            ></textarea>
        </div>
        <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
        >
            <Send size={18} className="mr-2" />
            Send Message
        </button>
    </form>
)

const ContactInfo = () => (
    <div className="bg-white shadow-lg rounded-lg p-8 animate-fadeInRight">
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        <div className="space-y-4">
            <ContactInfoItem
                icon={<MapPin size={24} />}
                title="Corporate Head Office"
                content={
                    <>
                        BTMC Bhaban (7th Floor)<br />
                        7-9 Kawran Bazar<br />
                        Dhaka- 1217, Bangladesh
                    </>
                }
            />
            <ContactInfoItem
                icon={<MapPin size={24} />}
                title="Factory Address"
                content={
                    <>
                        Golra Chorkhondo, Jagir, Manikganj<br />
                    </>
                }
            />
            <ContactInfoItem
                icon={<Phone size={24} />}
                title="Phone"
                content={
                    <>
                        +880-2-8189244<br />
                        +880-2-8189321<br />
                        +880-2-58155623 <br />
                        +880-2-55012252
                    </>
                }
            />
            <ContactInfoItem
                icon={<Mail size={24} />}
                title="Email"
                content="info@carbonholdings.com"
            />
        </div>
    </div>
)

const ContactInfoItem = ({ icon, title, content }) => (
    <div className="flex items-start">
        <div className="text-blue-600 mr-4">{icon}</div>
        <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </div>
    </div>
)

const Map = () => (
    <div className="w-full md:px-16 px-6 py-16">
        <div className='w-full h-96 shadow-md bg-white p-4 rounded-md'>
            <h2 className="text-2xl font-semibold mb-6  border-b-2 border-blue-500 w-fit">Corporate Office Location</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d767.720257942813!2d90.39386207045591!3d23.750461243514565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b897f9400001%3A0x7d74993af65c7dad!2sCarbon%20Holdings%20Ltd!5e0!3m2!1sen!2sbd!4v1727454055609!5m2!1sen!2sbd"
                width="100%"
                height="80%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
        <div className='w-full h-96 shadow-md bg-white mt-12 p-4 rounded-md'>
            <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-500 w-fit">Factory Location</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d466941.99728691654!2d89.4252622!3d23.8901735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755f6591dea5ef1%3A0x6183db04978c0696!2sCarbon%20Holdings%20Limited.%20Condensate%20Fractionation%20Plant!5e0!3m2!1sen!2sbd!4v1727454616992!5m2!1sen!2sbd"
                width="100%"
                height="80%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    </div>
)