import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaNetworkWired, FaServer, FaWifi, FaShieldAlt } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Airport Network & IT Infrastructure Services',
    description:
        'Enterprise-grade network infrastructure for airports. Data centers, wireless networks, high availability architecture, and hybrid cloud deployment.',
    keywords: [
        'airport network',
        'data center',
        'airport WiFi',
        'network infrastructure',
        'high availability',
        'airport IT infrastructure',
    ],
})

const infrastructureServices = [
    {
        title: 'Enterprise Networking',
        icon: FaNetworkWired,
        description: 'Airport-wide network infrastructure with redundancy and high availability',
        features: [
            'Core network design',
            'Distribution & access layers',
            'Redundant architecture',
            'Load balancing',
            'Network segmentation',
            'VLAN management',
        ],
    },
    {
        title: 'Data Center Infrastructure',
        icon: FaServer,
        description: 'Mission-critical data center for airport operations',
        features: [
            'Tier III/IV data center design',
            'Server virtualization',
            'Storage area network (SAN)',
            'Backup & disaster recovery',
            'Environmental monitoring',
            'Power & cooling systems',
        ],
    },
    {
        title: 'Wireless Networks',
        icon: FaWifi,
        description: 'Comprehensive WiFi coverage for passengers and operations',
        features: [
            'Public passenger WiFi',
            'Operational WiFi networks',
            'IoT device connectivity',
            'Location-based services',
            'Bandwidth management',
            'Guest portal',
        ],
    },
    {
        title: 'Network Security',
        icon: FaShieldAlt,
        description: 'Multi-layered security for airport networks',
        features: [
            'Next-gen firewalls',
            'Intrusion detection/prevention',
            'Network access control (NAC)',
            'DDoS protection',
            'VPN infrastructure',
            'Security monitoring',
        ],
    },
]

const networkComponents = [
    {
        category: 'Core Infrastructure',
        items: ['Core switches (Cisco, Juniper, Arista)', 'Distribution switches', 'Access switches', 'Routers & gateways'],
    },
    {
        category: 'Wireless',
        items: ['WiFi 6/6E access points', 'Wireless controllers', 'Guest WiFi portal', 'Location analytics'],
    },
    {
        category: 'Data Center',
        items: ['Blade servers', 'Hypervisors (VMware, Hyper-V)', 'SAN storage', 'Backup appliances'],
    },
    {
        category: 'Security',
        items: ['Firewalls (Palo Alto, Fortinet)', 'IDS/IPS systems', 'NAC solutions', 'SIEM platform'],
    },
]

const cloudServices = [
    {
        title: 'Hybrid Cloud Architecture',
        description: 'Best of both worlds - on-premise and cloud',
        benefits: ['Data sovereignty', 'Scalability', 'Cost optimization', 'Disaster recovery'],
    },
    {
        title: 'Private Cloud',
        description: 'Dedicated cloud infrastructure for airport',
        benefits: ['Full control', 'Enhanced security', 'Compliance', 'Performance'],
    },
    {
        title: 'Cloud Connectivity',
        description: 'Secure connections to public cloud providers',
        benefits: ['AWS Direct Connect', 'Azure ExpressRoute', 'GCP Interconnect', 'Multi-cloud'],
    },
]

export default function NetworkInfrastructurePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/airport" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-4 text-sm">
                            ← Back to Airport Services
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                            <FaNetworkWired className="w-5 h-5 text-orange-400 mr-2" />
                            <span className="text-orange-400 text-sm font-semibold">Network & Infrastructure</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Airport Network & IT Infrastructure
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Enterprise-grade network infrastructure for mission-critical airport operations.
                            Data centers, wireless networks, high availability architecture, and hybrid cloud deployment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=network-infrastructure" className="btn-primary">
                                Request Assessment
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Services */}
            <section id="services" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Infrastructure Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Complete network and IT infrastructure solutions for airports
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {infrastructureServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Network Components */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Network Components & Technologies
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade equipment from leading vendors
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {networkComponents.map((component, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{component.category}</h3>
                                <ul className="space-y-2">
                                    {component.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cloud Services */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cloud Infrastructure Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible cloud deployment options for airport systems
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {cloudServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                                <div className="space-y-2">
                                    {service.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Key Features
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: '99.99% Uptime', desc: 'High availability architecture with redundancy' },
                            { title: 'Scalable', desc: 'Grow infrastructure as airport expands' },
                            { title: 'Secure', desc: 'Multi-layered security and compliance' },
                            { title: '24/7 Monitoring', desc: 'Proactive monitoring and support' },
                        ].map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                                    <CheckCircleIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-orange-600 to-red-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Build a Robust Airport Network
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's assess your current infrastructure and design a future-ready network
                    </p>
                    <Link href="/contact?type=network-infrastructure" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-orange-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
