import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { HiCpuChip } from 'react-icons/hi2'
import { FaServer, FaBrain, FaCloud, FaShieldAlt } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Technology Stack - HumaNova Robotics',
    description: 'Enterprise-grade robotics technology: ROS2, AI/ML, sensors, cloud platform, and security for assistive robots.',
    keywords: ['ROS2 robotics', 'AI robotics', 'edge computing', 'robotics security', 'assistive technology stack UAE'],
})

const techLayers = [
    {
        title: 'ROS2 Foundation',
        icon: FaServer,
        description: 'Industry-standard robot operating system',
        features: ['Real-time performance', 'Secure communication', 'Hardware abstraction', 'Modular architecture', 'Cross-platform support'],
    },
    {
        title: 'AI & Machine Learning',
        icon: FaBrain,
        description: 'Intelligent decision-making and learning',
        features: ['Computer vision (YOLO, OpenCV)', 'Speech recognition (Whisper)', 'Natural language processing', 'Behavioral learning', 'Predictive analytics'],
    },
    {
        title: 'Edge Computing',
        icon: HiCpuChip,
        description: 'NVIDIA Jetson-powered local processing',
        features: ['Real-time response', 'Privacy protection', 'Offline capability', 'Low latency', 'Power efficiency'],
    },
    {
        title: 'Cloud Platform',
        icon: FaCloud,
        description: 'Scalable backend and analytics',
        features: ['Django/FastAPI backend', 'PostgreSQL database', 'Real-time WebSockets', 'AI model updates', 'Analytics dashboard'],
    },
    {
        title: 'Security & Compliance',
        icon: FaShieldAlt,
        description: 'Enterprise-grade protection',
        features: ['End-to-end encryption', 'HIPAA compliance', 'GDPR compliance', 'Human-in-the-loop safety', 'Audit logging'],
    },
]

const integrations = [
    'Smart home platforms (Alexa, Google Home, HomeKit)',
    'AAC communication devices',
    'Electronic health records (EHR)',
    'Wearable health devices',
    'IoT sensors and actuators',
    'Telehealth platforms',
]

export default function TechnologyPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-violet-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-violet-400 hover:text-violet-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                            <HiCpuChip className="w-5 h-5 text-violet-400 mr-2" />
                            <span className="text-violet-400 text-sm font-semibold">Technology Stack</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Technology Behind the Human Touch
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Enterprise-grade robotics technology combining ROS2, AI/ML, edge computing, cloud platforms,
                            and security—all designed with human-centered principles and safety-first architecture.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Five-Layer Technology Stack
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-ready architecture for reliable, safe, and intelligent assistance
                        </p>
                    </div>
                    <div className="space-y-8">
                        {techLayers.map((layer, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-start gap-6">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex-shrink-0">
                                        <layer.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{layer.title}</h3>
                                        <p className="text-gray-600 mb-6">{layer.description}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                            {layer.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start text-sm text-gray-600">
                                                    <CheckCircleIcon className="w-5 h-5 text-violet-500 mr-2 flex-shrink-0 mt-0.5" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            System Integrations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Seamless connectivity with existing platforms and devices
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {integrations.map((integration, index) => (
                            <div key={index} className="card-enterprise p-4">
                                <CheckCircleIcon className="w-6 h-6 text-violet-500 inline-block mr-2" />
                                <span className="text-gray-900 font-semibold">{integration}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-violet-600 to-purple-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Enterprise-Grade Technology, Human-Centered Design
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Learn more about how our technology stack enables safe, reliable, and intelligent assistance
                    </p>
                    <Link
                        href="/contact?type=robotics-technology"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-violet-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Technical Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
