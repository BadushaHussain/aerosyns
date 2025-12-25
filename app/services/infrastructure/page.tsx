import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import {
    ServerIcon,
    WifiIcon,
    ShieldCheckIcon,
    VideoCameraIcon,
    PhoneIcon,
} from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Infrastructure & Structured Cabling Services',
    description:
        'Enterprise-grade structured cabling, datacenter infrastructure, networking, and security systems. From SMB to Tier-ready datacenters with complete testing and certification.',
    keywords: [
        'structured cabling UAE',
        'datacenter infrastructure',
        'enterprise networking',
        'fiber optic cabling',
        'CCTV installation',
        'PBX systems',
    ],
})

const services = [
    {
        icon: <ServerIcon className="w-8 h-8" />,
        title: 'Structured Cabling',
        description: 'Cat6/Cat6A copper and single/multi-mode fiber for office, campus, and datacenter environments',
        features: [
            'Copper: Cat6, Cat6A, Cat7',
            'Fiber: SM/MM, MPO/MTP trunks',
            'Testing & certification (OTDR, Fluke)',
            'Complete documentation & labeling',
        ],
    },
    {
        icon: <WifiIcon className="w-8 h-8" />,
        title: 'Network Infrastructure',
        description: 'Core switches, routers, and wireless infrastructure with enterprise-grade configuration',
        features: [
            'Cisco, Aruba, Juniper deployment',
            'Layer 2/3 switching & routing',
            'Wireless access points & controllers',
            'SD-WAN & VPN solutions',
        ],
    },
    {
        icon: <ShieldCheckIcon className="w-8 h-8" />,
        title: 'Security & Firewalls',
        description: 'Perimeter and internal firewalls with next-generation threat protection',
        features: [
            'NGFW deployment (Fortinet, Palo Alto)',
            'Network segmentation',
            'Intrusion prevention systems',
            'Access control & NAC',
        ],
    },
    {
        icon: <VideoCameraIcon className="w-8 h-8" />,
        title: 'CCTV & Surveillance',
        description: 'IP camera systems with NVR, analytics, and enterprise-grade monitoring',
        features: [
            'IP cameras (2MP to 4K)',
            'Network video recorders',
            'Video analytics & AI detection',
            'Remote monitoring & mobile access',
        ],
    },
    {
        icon: <PhoneIcon className="w-8 h-8" />,
        title: 'Unified Communications',
        description: 'PBX, VoIP, and intercom systems for enterprise communication',
        features: [
            'IP-PBX & cloud telephony',
            'SIP trunking & GSM gateways',
            'Intercom & paging systems',
            'Call recording & analytics',
        ],
    },
    {
        icon: <ServerIcon className="w-8 h-8" />,
        title: 'Datacenter Infrastructure',
        description: 'Tier-ready datacenter design with redundant power, cooling, and monitoring',
        features: [
            'Rack & stack services',
            'PDU & UPS deployment',
            'Hot/cold aisle containment',
            'BMS & environmental monitoring',
        ],
    },
]

const datacenterSpecs = [
    { label: 'Tier Classification', value: 'Tier I - IV Design' },
    { label: 'Power Density', value: 'Up to 20kW per rack' },
    { label: 'Cooling Strategy', value: 'CRAC/Chiller/Hot-aisle' },
    { label: 'Redundancy', value: 'N+1 / N+2 / 2N' },
    { label: 'Fire Suppression', value: 'FM-200 / Inergen' },
    { label: 'Uptime Target', value: '99.99% - 99.995%' },
]

export default function InfrastructurePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <span className="text-primary-400 text-sm font-semibold">Infrastructure Services</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Enterprise Infrastructure & Structured Cabling
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            From structured cabling to Tier-ready datacenters — complete infrastructure design, deployment,
                            and certification for mission-critical operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=assessment" className="btn-primary">
                                Request Site Assessment
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Complete Infrastructure Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            End-to-end infrastructure services from cabling to datacenter deployment
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-6">
                                    <div className="text-white">{service.icon}</div>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <svg
                                                className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Datacenter Specs */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                Tier-Ready Datacenter Infrastructure
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Design and deploy enterprise datacenters with Tier I-IV classification, redundant power and cooling,
                                and comprehensive monitoring for maximum uptime and reliability.
                            </p>
                            <div className="space-y-4">
                                {datacenterSpecs.map((spec, index) => (
                                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-900">{spec.label}</span>
                                        <span className="text-primary-600 font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card-enterprise p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Datacenter Services</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold text-gray-900">Site Planning & Design</div>
                                        <div className="text-sm text-gray-600">Rack layout, power distribution, cooling strategy</div>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold text-gray-900">Cabling & Connectivity</div>
                                        <div className="text-sm text-gray-600">OSP, MPO backbone, fiber management</div>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold text-gray-900">Power & Cooling</div>
                                        <div className="text-sm text-gray-600">UPS, PDU, generator, CRAC/chiller deployment</div>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold text-gray-900">Testing & Certification</div>
                                        <div className="text-sm text-gray-600">OTDR testing, Tier certification, commissioning</div>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link href="/contact?type=datacenter" className="btn-primary w-full text-center">
                                    Request Datacenter Assessment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Build Your Infrastructure?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free site assessment and infrastructure design consultation
                    </p>
                    <Link href="/contact?type=assessment" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Schedule Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
