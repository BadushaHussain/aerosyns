import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaDatabase, FaPlane, FaClock, FaChartBar } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Airport Core Systems Integration - AODB, FIDS, RMS, A-CDM',
    description:
        'Complete integration of core airport operational systems including AODB, FIDS, RMS, and A-CDM. Compatible with SITA, Amadeus, Indra, and TAV Technologies.',
    keywords: [
        'AODB integration',
        'FIDS system',
        'airport resource management',
        'A-CDM implementation',
        'SITA integration',
        'Amadeus airport systems',
    ],
})

const coreSystems = [
    {
        title: 'Airport Operational Database (AODB)',
        icon: FaDatabase,
        description: 'Central repository for all flight and operational data',
        features: [
            'Real-time flight data management',
            'Stand and gate allocation',
            'Aircraft turnaround tracking',
            'Integration with airline systems',
            'Historical data archival',
            'Multi-airport support',
        ],
        vendors: ['SITA AMS', 'Amadeus Altéa', 'Indra Airplan', 'TAV AODB'],
    },
    {
        title: 'Flight Information Display System (FIDS)',
        icon: FaPlane,
        description: 'Real-time flight information across all airport displays',
        features: [
            'Arrival & departure displays',
            'Gate information screens',
            'Baggage claim displays',
            'Multi-language support',
            'Emergency messaging',
            'Mobile app integration',
        ],
        vendors: ['SITA AirportConnect', 'Amadeus FIDS', 'Indra FIDS', 'TAV FIDS'],
    },
    {
        title: 'Resource Management System (RMS)',
        icon: FaChartBar,
        description: 'Optimize allocation of airport resources',
        features: [
            'Stand & gate management',
            'Check-in counter allocation',
            'Baggage carousel assignment',
            'Equipment scheduling',
            'Staff rostering',
            'Conflict resolution',
        ],
        vendors: ['SITA ResourceManager', 'Indra Resourceplan', 'TAV RMS'],
    },
    {
        title: 'Airport Collaborative Decision Making (A-CDM)',
        icon: FaClock,
        description: 'Collaborative platform for stakeholder coordination',
        features: [
            'Milestone monitoring',
            'Target off-block time (TOBT)',
            'Variable taxi time',
            'Pre-departure sequencing',
            'Stakeholder messaging',
            'Performance analytics',
        ],
        vendors: ['Eurocontrol A-CDM', 'SITA A-CDM', 'Custom implementations'],
    },
]

const integrationCapabilities = [
    'Vendor-agnostic integration platform',
    'Real-time data synchronization',
    'API-based connectivity',
    'Legacy system integration',
    'Data transformation & mapping',
    'High availability architecture',
    'Disaster recovery',
    'Performance monitoring',
]

const benefits = [
    {
        title: 'Unified Operations',
        description: 'Single source of truth for all operational data across systems',
    },
    {
        title: 'Real-Time Visibility',
        description: 'Instant access to flight status, resource allocation, and operational metrics',
    },
    {
        title: 'Improved Efficiency',
        description: 'Optimized resource utilization and reduced turnaround times',
    },
    {
        title: 'Better Collaboration',
        description: 'Enhanced coordination between airlines, ground handlers, and airport operators',
    },
]

export default function CoreSystemsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/airport" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 text-sm">
                            ← Back to Airport Services
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <FaDatabase className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 text-sm font-semibold">Core Systems Integration</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Airport Core Systems Integration
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Complete integration of AODB, FIDS, RMS, and A-CDM systems. Compatible with all major
                            airport technology vendors including SITA, Amadeus, Indra, and TAV Technologies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=core-systems" className="btn-primary">
                                Request Consultation
                            </Link>
                            <Link href="#systems" className="btn-secondary">
                                View Systems
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Systems */}
            <section id="systems" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Core Airport Systems
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive integration of mission-critical airport operational systems
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {coreSystems.map((system, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <system.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{system.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{system.description}</p>
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {system.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Compatible Vendors:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {system.vendors.map((vendor, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                                {vendor}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Capabilities */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Integration Capabilities
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive integration platform for seamless system connectivity
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {integrationCapabilities.map((capability, index) => (
                            <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700 font-medium">{capability}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Business Benefits
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transform your airport operations with integrated core systems
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                    <CheckCircleIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Integrate Your Core Systems?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss your airport's core systems integration requirements
                    </p>
                    <Link href="/contact?type=core-systems" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
