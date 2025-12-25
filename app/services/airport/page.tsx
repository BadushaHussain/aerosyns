import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaPlane, FaNetworkWired, FaDatabase, FaChartLine, FaUsers, FaSuitcase, FaBrain, FaLock, FaServer, FaCloud, FaTools } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Airport IT Infrastructure Services - Complete Solutions',
    description:
        'Complete IT infrastructure services for airports. From core systems integration to smart airport AI, cybersecurity, and managed services. End-to-end airport technology solutions.',
    keywords: [
        'airport IT services',
        'airport infrastructure',
        'airport technology',
        'airport IT management',
        'airport systems integration',
        'smart airport solutions',
    ],
})

const serviceCategories = [
    {
        title: 'Core Systems Integration',
        description: 'AODB, FIDS, RMS, A-CDM integration with major vendors',
        icon: FaDatabase,
        color: 'from-blue-500 to-blue-600',
        link: '/services/airport/core-systems',
        capabilities: [
            'Airport Operational Database (AODB)',
            'Flight Information Display Systems (FIDS)',
            'Resource Management Systems (RMS)',
            'Airport Collaborative Decision Making (A-CDM)',
        ],
    },
    {
        title: 'Passenger & Baggage Systems',
        description: 'CUPPS, CUSS, BHS, biometric gates, and security systems',
        icon: FaUsers,
        color: 'from-green-500 to-green-600',
        link: '/services/airport/passenger-baggage',
        capabilities: [
            'Common Use Passenger Processing (CUPPS)',
            'Self-Service Kiosks (CUSS)',
            'Baggage Handling Systems (BHS)',
            'Biometric e-Gates',
        ],
    },
    {
        title: 'Operations & Control Centers',
        description: 'AOCC, real-time monitoring, incident management',
        icon: FaChartLine,
        color: 'from-purple-500 to-purple-600',
        link: '/services/airport/operations-control',
        capabilities: [
            'Airport Operations Control Center (AOCC)',
            'Real-time dashboards',
            'Incident management',
            'Resource optimization',
        ],
    },
    {
        title: 'Network & Infrastructure',
        description: 'Enterprise networking, data centers, cloud infrastructure',
        icon: FaNetworkWired,
        color: 'from-orange-500 to-orange-600',
        link: '/services/airport/network-infrastructure',
        capabilities: [
            'Airport-wide networking',
            'Data center infrastructure',
            'Hybrid cloud deployment',
            'High availability architecture',
        ],
    },
    {
        title: 'Smart Airport & AI',
        description: 'Predictive analytics, IoT, Digital Twin, AI/ML solutions',
        icon: FaBrain,
        color: 'from-cyan-500 to-cyan-600',
        link: '/services/airport/smart-ai',
        capabilities: [
            'Predictive maintenance',
            'Passenger flow analytics',
            'Delay forecasting',
            'Digital Twin readiness',
        ],
    },
    {
        title: 'Cybersecurity & Compliance',
        description: 'Zero Trust, SIEM, SOC, ICAO/ISO compliance',
        icon: FaLock,
        color: 'from-red-500 to-red-600',
        link: '/services/airport/cybersecurity',
        capabilities: [
            'Zero Trust architecture',
            'Security Operations Center (SOC)',
            'ICAO Annex 17 compliance',
            'ISO 27001 certification',
        ],
    },
    {
        title: 'Managed IT Services',
        description: '24/7 monitoring, maintenance, and support',
        icon: FaTools,
        color: 'from-indigo-500 to-indigo-600',
        link: '/services/airport/managed-services',
        capabilities: [
            '24/7 NOC monitoring',
            'Preventive maintenance',
            'Helpdesk support',
            'SLA-based service delivery',
        ],
    },
    {
        title: 'Cloud & Hosting',
        description: 'Private cloud, disaster recovery, backup solutions',
        icon: FaCloud,
        color: 'from-pink-500 to-pink-600',
        link: '/services/airport/cloud-hosting',
        capabilities: [
            'Private cloud infrastructure',
            'Disaster recovery (DR)',
            'Backup & archival',
            'High availability (99.99% SLA)',
        ],
    },
]

const whyChooseUs = [
    {
        title: 'Airport-Specific Expertise',
        description: 'Deep understanding of airport operations, regulations, and technology ecosystems',
    },
    {
        title: 'Vendor-Agnostic Approach',
        description: 'Integration with SITA, Amadeus, Indra, TAV, and all major airport technology vendors',
    },
    {
        title: 'End-to-End Solutions',
        description: 'From consultation and design to implementation, support, and optimization',
    },
    {
        title: 'Proven Track Record',
        description: 'Successfully deployed solutions at major airports across the Middle East',
    },
    {
        title: '24/7 Support',
        description: 'Round-the-clock monitoring and support for mission-critical airport systems',
    },
    {
        title: 'Compliance & Security',
        description: 'ICAO, ISO 27001, PCI-DSS compliant infrastructure and processes',
    },
]

const clientTypes = [
    'International Airports',
    'Regional Airports',
    'Airport Authorities',
    'Ground Handling Companies',
    'Airlines',
    'Airport Retailers',
]

export default function AirportServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <FaPlane className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 text-sm font-semibold">Airport IT Infrastructure</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Complete Airport IT Infrastructure Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            End-to-end IT infrastructure management for airports. From core operational systems
                            to smart airport AI, cybersecurity, and 24/7 managed services. We handle your entire
                            airport technology ecosystem.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=airport-services" className="btn-primary">
                                Request Consultation
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Categories */}
            <section id="services" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Airport IT Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive IT infrastructure services covering every aspect of airport operations
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {serviceCategories.map((service, index) => (
                            <Link
                                key={index}
                                href={service.link}
                                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-gradient-to-br ${service.color} text-white`}>
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.capabilities.map((capability, idx) => (
                                        <li key={idx} className="flex items-start text-xs text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {capability}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 text-sm font-semibold text-blue-600 group-hover:gap-2 flex items-center gap-1 transition-all">
                                    Learn more
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Why Choose AEROSYNS?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Your trusted partner for airport IT infrastructure
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((reason, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <CheckCircleIcon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                                <p className="text-gray-600">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Who We Serve
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Trusted by airports and aviation stakeholders across the region
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {clientTypes.map((client, index) => (
                            <div key={index} className="card-enterprise p-4 text-center">
                                <div className="text-sm font-semibold text-gray-900">{client}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Delivery Model */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Service Delivery Model
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible engagement models to suit your needs
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Project-Based',
                                description: 'Fixed-scope projects with defined deliverables and timelines',
                                features: ['Design & implementation', 'System integration', 'Migration projects', 'Infrastructure upgrades'],
                            },
                            {
                                title: 'Managed Services',
                                description: 'Ongoing management and support with SLA commitments',
                                features: ['24/7 monitoring', 'Preventive maintenance', 'Helpdesk support', 'Performance optimization'],
                            },
                            {
                                title: 'Staff Augmentation',
                                description: 'Skilled IT professionals to supplement your team',
                                features: ['Airport IT specialists', 'Network engineers', 'Security experts', 'Project managers'],
                            },
                        ].map((model, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{model.title}</h3>
                                <p className="text-gray-600 mb-6">{model.description}</p>
                                <ul className="space-y-2">
                                    {model.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Transform Your Airport IT Infrastructure?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help modernize and optimize your airport technology ecosystem
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact?type=airport-services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                            Request Consultation
                        </Link>
                        <Link href="/solutions/airport" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-all duration-200">
                            View Architecture
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
