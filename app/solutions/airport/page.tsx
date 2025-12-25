import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaPlane, FaNetworkWired, FaDatabase, FaChartLine, FaUsers, FaSuitcase, FaBrain, FaLock } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'AEROSYNS Airport IT Architecture - Complete Airport Integration',
    description:
        'Layered integration model for vendor-agnostic, unified airport operations. Complete IT architecture from stakeholder integration to smart airport AI and cybersecurity.',
    keywords: [
        'airport IT architecture',
        'airport integration platform',
        'AODB integration',
        'airport operations',
        'smart airport',
        'airport cybersecurity',
    ],
})

const architectureLayers = [
    {
        number: '1',
        title: 'External Stakeholder Integration',
        description: 'Secure integration with airlines, ATC, immigration, customs, and payment gateways via APIs, VPN, MPLS.',
        color: 'from-blue-500 to-blue-600',
        icon: FaPlane,
        features: [
            'Airline systems integration (SITA, Amadeus)',
            'ATC data exchange',
            'Immigration & customs connectivity',
            'Payment gateway integration',
            'Secure VPN & MPLS connections',
            'Real-time data synchronization',
        ],
    },
    {
        number: '2',
        title: 'AEROSYNS Integration Platform',
        description: 'API Gateway, ESB, real-time streaming, vendor-agnostic connectors. Eliminates silos, enables real-time decisions.',
        color: 'from-purple-500 to-purple-600',
        icon: FaNetworkWired,
        features: [
            'Enterprise Service Bus (ESB)',
            'API Gateway & management',
            'Real-time event streaming',
            'Vendor-agnostic connectors',
            'Data transformation & routing',
            'Message queue management',
        ],
    },
    {
        number: '3',
        title: 'Core Airport Systems',
        description: 'Integrates AODB, FIDS, RMS, A-CDM. Compatible with SITA, Amadeus, Indra, TAV Technologies.',
        color: 'from-green-500 to-green-600',
        icon: FaDatabase,
        features: [
            'Airport Operational Database (AODB)',
            'Flight Information Display System (FIDS)',
            'Resource Management System (RMS)',
            'Airport Collaborative Decision Making (A-CDM)',
            'SITA, Amadeus, Indra compatibility',
            'TAV Technologies integration',
        ],
    },
    {
        number: '4',
        title: 'Operations Dashboards',
        description: 'Centralized AOCC with real-time flight status, resource management, incident handling, role-based views.',
        color: 'from-orange-500 to-orange-600',
        icon: FaChartLine,
        features: [
            'Airport Operations Control Center (AOCC)',
            'Real-time flight status monitoring',
            'Resource allocation & tracking',
            'Incident management system',
            'Role-based access control',
            'Customizable dashboards',
        ],
    },
    {
        number: '5',
        title: 'Passenger Processing',
        description: 'CUPPS/CUSS, boarding gates, biometric e-gates, flow analytics. Faster processing, reduced congestion.',
        color: 'from-red-500 to-red-600',
        icon: FaUsers,
        features: [
            'Common Use Passenger Processing (CUPPS)',
            'Common Use Self-Service (CUSS)',
            'Biometric e-gates integration',
            'Boarding gate systems',
            'Passenger flow analytics',
            'Queue management',
        ],
    },
    {
        number: '6',
        title: 'Baggage & Security',
        description: 'Unified BHS, BRS, CCTV analytics, access control, BMS, IoT sensors in single control view.',
        color: 'from-cyan-500 to-cyan-600',
        icon: FaSuitcase,
        features: [
            'Baggage Handling System (BHS)',
            'Baggage Reconciliation System (BRS)',
            'CCTV analytics & monitoring',
            'Access control systems',
            'Building Management System (BMS)',
            'IoT sensor integration',
        ],
    },
    {
        number: '7',
        title: 'Smart Airport & AI',
        description: 'Data lake, congestion prediction, delay forecasting, predictive maintenance, Digital Twin readiness.',
        color: 'from-indigo-500 to-indigo-600',
        icon: FaBrain,
        features: [
            'Centralized data lake',
            'AI-powered congestion prediction',
            'Flight delay forecasting',
            'Predictive maintenance',
            'Digital Twin readiness',
            'Machine learning analytics',
        ],
    },
    {
        number: '8',
        title: 'Cloud & Cybersecurity',
        description: 'Hybrid cloud, HA/DR, IAM, SIEM, SOC, Zero Trust. ICAO & ISO compliant.',
        color: 'from-pink-500 to-pink-600',
        icon: FaLock,
        features: [
            'Hybrid cloud architecture',
            'High Availability & Disaster Recovery (HA/DR)',
            'Identity & Access Management (IAM)',
            'Security Information & Event Management (SIEM)',
            'Security Operations Center (SOC)',
            'Zero Trust security model',
            'ICAO & ISO 27001 compliance',
        ],
    },
]

const benefits = [
    'Vendor-agnostic airport IT integration',
    'Unified operational visibility',
    'Real-time analytics & dashboards',
    'Secure, scalable, future-ready architecture',
    'Smart airport enablement',
]

const compatibleSystems = [
    { name: 'SITA', description: 'WorldTracer, AirportConnect, Flight Management' },
    { name: 'Amadeus', description: 'Altéa Suite, Airport Common Use Service' },
    { name: 'Indra', description: 'Airplan, Bagplan, Resourceplan' },
    { name: 'TAV Technologies', description: 'TAV AODB, TAV BHS, TAV FIDS' },
    { name: 'Rockwell Collins', description: 'ARINC vMUSE, Common Use' },
    { name: 'Siemens', description: 'BHS, Security Systems' },
]

export default function AirportSolutionPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <FaPlane className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 text-sm font-semibold">Airport IT Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            AEROSYNS Airport IT Architecture
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Layered integration model for vendor-agnostic, unified airport operations.
                            Complete IT architecture from stakeholder integration to smart airport AI and cybersecurity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=airport-architecture" className="btn-primary">
                                Request Consultation
                            </Link>
                            <Link href="#architecture" className="btn-secondary">
                                View Architecture
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What AEROSYNS Delivers */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            🏆 What AEROSYNS Delivers
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive airport IT integration platform
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-xl border-2 border-gray-200">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                                </div>
                                <p className="text-gray-700 text-sm font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Layers */}
            <section id="architecture" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            8-Layer Architecture
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive integration platform covering all aspects of airport operations
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {architectureLayers.map((layer, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${layer.color}`}></div>
                                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 bg-gradient-to-br ${layer.color} text-white`}>
                                    <layer.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {layer.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    {layer.description}
                                </p>
                                <ul className="space-y-2">
                                    {layer.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-xs text-gray-600">
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

            {/* Compatible Systems */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Compatible Airport Systems
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Seamless integration with major airport technology vendors
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {compatibleSystems.map((system, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{system.name}</h3>
                                <p className="text-sm text-gray-600">{system.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Approach */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Implementation Approach
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Phased deployment for minimal disruption
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Assessment', description: 'Current systems audit and requirements gathering' },
                            { step: '2', title: 'Design', description: 'Architecture design and integration planning' },
                            { step: '3', title: 'Implementation', description: 'Phased rollout with testing and validation' },
                            { step: '4', title: 'Optimization', description: 'Performance tuning and continuous improvement' },
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-sm text-gray-600">{phase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Transform Your Airport Operations
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a consultation to discuss how AEROSYNS can modernize your airport IT infrastructure
                    </p>
                    <Link href="/contact?type=airport-architecture" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
