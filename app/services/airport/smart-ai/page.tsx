import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaBrain, FaRobot, FaChartArea, FaCube } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Smart Airport & AI Solutions - Predictive Analytics & IoT',
    description:
        'Transform your airport with AI and IoT. Predictive maintenance, passenger flow analytics, delay forecasting, and Digital Twin readiness.',
    keywords: [
        'smart airport',
        'airport AI',
        'predictive maintenance',
        'passenger analytics',
        'Digital Twin',
        'airport IoT',
    ],
})

const aiSolutions = [
    {
        title: 'Predictive Maintenance',
        icon: FaRobot,
        description: 'AI-powered maintenance scheduling to prevent equipment failures',
        features: [
            'Equipment health monitoring',
            'Failure prediction',
            'Maintenance optimization',
            'Parts inventory forecasting',
            'Downtime reduction',
            'Cost savings analytics',
        ],
        benefits: ['30% reduction in maintenance costs', 'Prevent unexpected failures', 'Extend equipment life'],
    },
    {
        title: 'Passenger Flow Analytics',
        icon: FaChartArea,
        description: 'Real-time and predictive analytics for passenger movement',
        features: [
            'Queue length prediction',
            'Congestion forecasting',
            'Wait time estimation',
            'Resource allocation optimization',
            'Heat mapping',
            'Anomaly detection',
        ],
        benefits: ['Reduce wait times', 'Optimize staffing', 'Improve passenger experience'],
    },
    {
        title: 'Delay Forecasting',
        icon: FaBrain,
        description: 'Predict and mitigate flight delays using machine learning',
        features: [
            'Weather impact analysis',
            'Historical pattern recognition',
            'Resource availability prediction',
            'Turnaround time optimization',
            'Proactive alerting',
            'What-if scenario analysis',
        ],
        benefits: ['Improve OTP', 'Better resource planning', 'Reduced delays'],
    },
    {
        title: 'Digital Twin',
        icon: FaCube,
        description: 'Virtual replica of airport for simulation and optimization',
        features: [
            '3D airport model',
            'Real-time data integration',
            'Scenario simulation',
            'Capacity planning',
            'Process optimization',
            'Training & visualization',
        ],
        benefits: ['Test changes virtually', 'Optimize operations', 'Strategic planning'],
    },
]

const iotCapabilities = [
    {
        category: 'Sensors & Devices',
        items: ['Environmental sensors', 'People counters', 'Asset trackers', 'Energy meters', 'Security cameras', 'Beacons'],
    },
    {
        category: 'Data Collection',
        items: ['Real-time data ingestion', 'Edge computing', 'Data lake', 'Time-series database', 'Stream processing', 'Data quality'],
    },
    {
        category: 'Analytics',
        items: ['Machine learning models', 'Predictive analytics', 'Anomaly detection', 'Pattern recognition', 'Forecasting', 'Optimization'],
    },
    {
        category: 'Visualization',
        items: ['Real-time dashboards', '3D visualization', 'Heat maps', 'Trend analysis', 'Mobile apps', 'Alerts & notifications'],
    },
]

const useCases = [
    'Predictive equipment maintenance',
    'Passenger flow optimization',
    'Energy consumption optimization',
    'Security threat detection',
    'Baggage tracking & prediction',
    'Parking occupancy prediction',
    'Retail analytics',
    'Environmental monitoring',
]

export default function SmartAIPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/airport" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-4 text-sm">
                            ← Back to Airport Services
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <FaBrain className="w-5 h-5 text-cyan-400 mr-2" />
                            <span className="text-cyan-400 text-sm font-semibold">Smart Airport & AI</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Smart Airport & AI Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Transform your airport with artificial intelligence and IoT. Predictive maintenance,
                            passenger flow analytics, delay forecasting, and Digital Twin readiness for next-generation operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=smart-airport" className="btn-primary">
                                Request Consultation
                            </Link>
                            <Link href="#solutions" className="btn-secondary">
                                View Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Solutions */}
            <section id="solutions" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            AI-Powered Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Leverage artificial intelligence for smarter airport operations
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {aiSolutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                                        <solution.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{solution.description}</p>
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                                    <ul className="space-y-2">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600">
                                                <CheckCircleIcon className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {solution.benefits.map((benefit, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-full">
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IoT Capabilities */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            IoT Platform Capabilities
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Complete IoT infrastructure for connected airport operations
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {iotCapabilities.map((capability, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{capability.category}</h3>
                                <ul className="space-y-2">
                                    {capability.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Smart Airport Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world applications of AI and IoT in airports
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                                <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                                <span className="text-sm text-gray-700 font-medium">{useCase}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-cyan-600 to-blue-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Build Your Smart Airport
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss how AI and IoT can transform your airport operations
                    </p>
                    <Link href="/contact?type=smart-airport" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-cyan-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
