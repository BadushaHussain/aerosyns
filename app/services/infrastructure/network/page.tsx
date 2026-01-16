import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaNetworkWired, FaWifi, FaServer } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Network Infrastructure Services',
    description: 'Enterprise network infrastructure deployment with Cisco, Aruba, and Juniper equipment. Core switches, routers, wireless, SD-WAN, and VPN solutions.',
    keywords: ['network infrastructure', 'Cisco deployment', 'Aruba wireless', 'SD-WAN', 'enterprise networking UAE'],
})

interface NetworkEquipment {
    brand: string
    ports?: string
    standard?: string
    speed: string
    features: string
}

const equipmentCategories: { category: string; description: string; models: NetworkEquipment[] }[] = [
    {
        category: 'Core Switches',
        description: 'High-performance backbone switching',
        models: [
            { brand: 'Cisco Catalyst 9500/9600', ports: '24-48 ports', speed: '10/25/40/100G', features: 'Stacking, redundant PSU, Layer 3' },
            { brand: 'Aruba CX 8360/8400', ports: '24-48 ports', speed: '10/25/40/100G', features: 'VSX, cloud-managed, Layer 3' },
            { brand: 'Juniper EX4650/EX9200', ports: '24-96 ports', speed: '10/40/100G', features: 'Virtual Chassis, EVPN/VXLAN' },
        ],
    },
    {
        category: 'Access Switches',
        description: 'Edge connectivity with PoE',
        models: [
            { brand: 'Cisco Catalyst 9200/9300', ports: '24-48 ports', speed: '1G/Multi-gig', features: 'PoE++, stacking, Layer 2/3' },
            { brand: 'Aruba 6300/6400', ports: '24-48 ports', speed: '1G/Multi-gig', features: 'PoE++, VSF, cloud-managed' },
            { brand: 'HPE Aruba 2930F/2540', ports: '24-48 ports', speed: '1G', features: 'PoE+, stacking, Layer 2' },
        ],
    },
    {
        category: 'Wireless Infrastructure',
        description: 'Wi-Fi 6/6E enterprise access points',
        models: [
            { brand: 'Cisco Catalyst 9100', standard: 'Wi-Fi 6E', speed: 'Up to 5.4 Gbps', features: 'MU-MIMO, cloud/on-prem' },
            { brand: 'Aruba AP-600 Series', standard: 'Wi-Fi 6E', speed: 'Up to 5.4 Gbps', features: 'AI-powered, IoT ready' },
            { brand: 'Ruckus R750/R850', standard: 'Wi-Fi 6', speed: 'Up to 3.5 Gbps', features: 'BeamFlex+, mesh' },
        ],
    },
]

const networkServices = [
    {
        service: 'Network Design & Architecture',
        description: 'Complete network planning and design',
        deliverables: ['Network topology diagrams', 'IP addressing scheme', 'VLAN design', 'Redundancy planning', 'Capacity planning'],
    },
    {
        service: 'Configuration & Deployment',
        description: 'Professional installation and configuration',
        deliverables: ['Device configuration', 'VLAN/routing setup', 'Security policies', 'QoS configuration', 'Documentation'],
    },
    {
        service: 'SD-WAN & VPN',
        description: 'Software-defined WAN and secure connectivity',
        deliverables: ['SD-WAN deployment', 'Site-to-site VPN', 'Remote access VPN', 'Traffic optimization', 'Failover configuration'],
    },
    {
        service: 'Network Management',
        description: '24/7 monitoring and management',
        deliverables: ['Centralized management', 'Performance monitoring', 'Alerting & reporting', 'Firmware updates', 'Technical support'],
    },
]



export default function NetworkInfrastructurePage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/infrastructure" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-4 text-sm">
                            ← Back to Infrastructure Services
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <FaNetworkWired className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Network Infrastructure</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Network Infrastructure Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Enterprise-grade network deployment with Cisco, Aruba, and Juniper equipment. Core switches, routers, wireless infrastructure, SD-WAN, and VPN solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=network" className="btn-primary">Request Consultation</Link>
                            <Link href="#equipment" className="btn-secondary">View Equipment</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="equipment" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Network Equipment</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Enterprise-grade equipment from leading manufacturers</p>
                    </div>
                    {equipmentCategories.map((cat, index) => (
                        <div key={index} className="mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{cat.category}</h3>
                            <p className="text-gray-600 mb-6">{cat.description}</p>
                            <div className="grid md:grid-cols-3 gap-6">
                                {cat.models.map((model, idx) => (
                                    <div key={idx} className="card-enterprise p-6">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4">{model.brand}</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between"><span className="text-gray-600">Ports:</span><span className="font-semibold">{model.ports || model.standard}</span></div>
                                            <div className="flex justify-between"><span className="text-gray-600">Speed:</span><span className="font-semibold text-primary-600">{model.speed}</span></div>
                                            <div className="pt-2 border-t"><p className="text-xs text-gray-600">{model.features}</p></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Network Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Complete network lifecycle management</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {networkServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.service}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.deliverables.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to Upgrade Your Network?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Get a free network assessment and design consultation</p>
                    <Link href="/contact?type=network" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
