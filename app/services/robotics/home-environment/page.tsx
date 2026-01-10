import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaHome, FaDoorOpen, FaLightbulb, FaTemperatureHigh } from 'react-icons/fa'
import { MdOutlineSensors } from 'react-icons/md'

export const metadata = genMeta({
    title: 'Home & Environment Control - HumaNova Robotics',
    description: 'Smart home integration and environmental control systems for enhanced accessibility and independence.',
    keywords: ['smart home accessibility', 'environmental control', 'home automation disability', 'IoT accessibility UAE'],
})

const capabilities = [
    {
        title: 'Door & Window Control',
        icon: FaDoorOpen,
        features: ['Automatic door opening', 'Window operation', 'Lock/unlock control', 'Sensor-based automation'],
    },
    {
        title: 'Lighting Control',
        icon: FaLightbulb,
        features: ['Voice-activated lighting', 'Brightness adjustment', 'Color temperature control', 'Scene programming'],
    },
    {
        title: 'Climate Control',
        icon: FaTemperatureHigh,
        features: ['Temperature adjustment', 'Fan control', 'Humidity monitoring', 'Automated comfort settings'],
    },
    {
        title: 'Smart Device Integration',
        icon: MdOutlineSensors,
        features: ['IoT device control', 'Appliance operation', 'Entertainment systems', 'Security systems'],
    },
]

const smartHomeIntegrations = [
    'Amazon Alexa',
    'Google Home',
    'Apple HomeKit',
    'Samsung SmartThings',
    'Philips Hue',
    'Nest Thermostat',
    'Ring Security',
    'August Smart Locks',
]

export default function HomeEnvironmentPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                            <FaHome className="w-5 h-5 text-green-400 mr-2" />
                            <span className="text-green-400 text-sm font-semibold">Home & Environment</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Home & Environment Control
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Transform your living space into an accessible, responsive environment with intelligent automation
                            and seamless smart home integration designed for maximum independence.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Environmental Control Capabilities
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Complete control over your home environment
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {capabilities.map((cap, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 mb-4">
                                    <cap.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{cap.title}</h3>
                                <ul className="space-y-2">
                                    {cap.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Smart Home Integrations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Compatible with leading smart home platforms
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {smartHomeIntegrations.map((integration, index) => (
                            <div key={index} className="card-enterprise p-4 text-center">
                                <p className="text-sm font-semibold text-gray-900">{integration}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-green-600 to-teal-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Create Your Accessible Smart Home
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's design a home environment that responds to your needs
                    </p>
                    <Link
                        href="/contact?type=robotics-home-environment"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-green-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
