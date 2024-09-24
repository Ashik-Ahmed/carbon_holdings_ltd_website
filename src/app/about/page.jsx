import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - Carbon Holdings Ltd</title>
                <meta name="description" content="Learn about Carbon Holdings Ltd, our history, operations, and commitment to addressing Bangladesh's energy needs." />
            </Head>
            <div className="min-h-screen">
                <Hero />
                <CompanyOverview />
            </div>
        </>
    )
}

const Hero = () => (
    <section className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-20">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown">
                About Carbon Holdings Ltd
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeInUp">
                Powering Bangladesh's energy future since 2016
            </p>
        </div>
    </section>
)

const CompanyOverview = () => (
    <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="/placeholder.svg?height=400&width=600"
                        alt="Carbon Holdings Ltd Facility in Manikganj"
                        className="rounded-lg shadow-lg animate-fadeInLeft"
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-10">
                    <h2 className="text-3xl font-bold mb-4 animate-fadeInRight">
                        Our Story
                    </h2>
                    <p className="text-gray-600 mb-4 animate-fadeInRight">
                        Established on April 24, 2016, Carbon Holdings Ltd has been at the forefront of addressing Bangladesh's energy needs. We operate a state-of-the-art condensate-based fractionation plant in Manikganj, with a daily production capacity of 100 metric tons of finished products.
                    </p>
                    <p className="text-gray-600 mb-4 animate-fadeInRight">
                        Our plant is specifically designed to address the local market's shortage of Motor Spirit (MS), Mineral Turpentine (MTT), and High-Speed Diesel (HSD). We're proud to contribute to Bangladesh's energy security and economic growth.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

