import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import {
    ServerIcon,
    WifiIcon,
    ShieldCheckIcon,
    VideoCameraIcon,
    PhoneIcon,
    CheckCircleIcon,
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

const cableSpecifications = [
    {
        type: 'Cat6 UTP',
        bandwidth: '250 MHz',
        speed: '1 Gbps (up to 100m)',
        applications: 'Office networks, VoIP, IP cameras',
        certification: 'TIA/EIA-568-C.2',
    },
    {
        type: 'Cat6A UTP/STP',
        bandwidth: '500 MHz',
        speed: '10 Gbps (up to 100m)',
        applications: 'High-density networks, PoE++, Wi-Fi 6',
        certification: 'TIA/EIA-568-C.2',
    },
    {
        type: 'Single-Mode Fiber',
        bandwidth: 'Unlimited',
        speed: '10/40/100 Gbps+',
        applications: 'Campus backbone, datacenter interconnect',
        certification: 'TIA-568.3-D',
    },
    {
        type: 'Multi-Mode OM3/OM4',
        bandwidth: '2000/4700 MHz·km',
        speed: '10/40 Gbps (up to 300m)',
        applications: 'Datacenter, SAN, high-speed links',
        certification: 'TIA-568.3-D',
    },
]

const networkEquipment = [
    {
        category: 'Core Switches',
        brands: ['Cisco Catalyst 9000', 'Aruba CX', 'Juniper EX'],
        features: ['10/25/40/100G ports', 'Stacking', 'Redundant PSU', 'Layer 3 routing'],
    },
    {
        category: 'Access Switches',
        brands: ['Cisco Catalyst 9200/9300', 'Aruba 6300', 'HPE Aruba 2930'],
        features: ['PoE/PoE+/PoE++', 'Gigabit/Multi-gig', 'Stacking', 'Layer 2/3'],
    },
    {
        category: 'Wireless',
        brands: ['Cisco Catalyst 9100', 'Aruba AP-600', 'Ruckus R750'],
        features: ['Wi-Fi 6/6E', 'MU-MIMO', 'Cloud management', 'Mesh support'],
    },
    {
        category: 'Firewalls',
        brands: ['Fortinet FortiGate', 'Palo Alto PA-Series', 'Cisco Firepower'],
        features: ['NGFW', 'IPS/IDS', 'SSL inspection', 'SD-WAN'],
    },
]

const certifications = [
    {
        name: 'TIA-568 Compliance',
        description: 'Industry standard for commercial cabling',
        scope: 'Copper and fiber cabling systems',
    },
    {
        name: 'ISO/IEC 11801',
        description: 'International cabling standard',
        scope: 'Generic cabling for customer premises',
    },
    {
        name: 'Fluke Certification',
        description: 'Third-party testing and certification',
        scope: 'Performance verification and documentation',
    },
    {
        name: 'Tier Certification',
        description: 'Uptime Institute datacenter tiers',
        scope: 'Tier I, II, III, IV datacenter design',
    },
]

const testingProcedures = [
    {
        test: 'Copper Cable Testing',
        equipment: 'Fluke DSX-5000/8000',
        parameters: ['Wire map', 'Length', 'Insertion loss', 'Return loss', 'NEXT', 'PSNEXT', 'ACR'],
    },
    {
        test: 'Fiber Optic Testing',
        equipment: 'OTDR, Light Source/Power Meter',
        parameters: ['Insertion loss', 'Return loss', 'Length', 'Splice loss', 'Connector loss'],
    },
    {
        test: 'Network Performance',
        equipment: 'iPerf, Wireshark, PRTG',
        parameters: ['Throughput', 'Latency', 'Packet loss', 'Jitter', 'Bandwidth utilization'],
    },
]

const projectExamples = [
    {
        project: 'Corporate Office Campus',
        scope: '5 buildings, 2,000 drops',
        solution: 'Cat6A cabling, fiber backbone, Cisco switching, Wi-Fi 6',
        duration: '3 months',
        result: '10 Gbps backbone, 99.9% uptime, full certification',
    },
    {
        project: 'Tier III Datacenter',
        scope: '500 racks, 10 MW power',
        solution: 'MPO/MTP fiber, redundant power/cooling, BMS integration',
        duration: '6 months',
        result: 'Tier III certified, 99.982% availability, N+1 redundancy',
    },
    {
        project: 'Airport Terminal',
        scope: '200+ IP cameras, 500 APs',
        solution: 'Cat6A PoE++, fiber backbone, centralized management',
        duration: '4 months',
        result: '24/7 surveillance, seamless Wi-Fi, 99.95% uptime',
    },
]

const pricingTiers = [
    {
        tier: 'SMB Package',
        price: 'Starting at $15,000',
        scope: 'Small office (up to 50 drops)',
        includes: [
            'Cat6 cabling installation',
            'Basic network switches',
            'Wi-Fi access points',
            'Testing & certification',
            '1-year warranty',
        ],
        bestFor: 'Small businesses, startups',
    },
    {
        tier: 'Enterprise Package',
        price: 'Starting at $75,000',
        scope: 'Medium office (up to 500 drops)',
        includes: [
            'Cat6A cabling with fiber backbone',
            'Enterprise switches & routers',
            'Managed Wi-Fi system',
            'CCTV & access control',
            'Full testing & documentation',
            '3-year warranty & support',
        ],
        popular: true,
        bestFor: 'Growing enterprises, multi-floor offices',
    },
    {
        tier: 'Datacenter Package',
        price: 'Custom pricing',
        scope: 'Datacenter (50+ racks)',
        includes: [
            'MPO/MTP fiber infrastructure',
            'Redundant power & cooling',
            'Hot/cold aisle containment',
            'BMS & environmental monitoring',
            'Tier certification support',
            'Comprehensive testing & commissioning',
            '5-year warranty & SLA',
        ],
        bestFor: 'Datacenters, colocation facilities',
    },
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
                                <div className="mt-6">
                                    <Link
                                        href={`/services/infrastructure/${service.title === 'Structured Cabling' ? 'structured-cabling' :
                                                service.title === 'Network Infrastructure' ? 'network' :
                                                    service.title === 'Security & Firewalls' ? 'security' :
                                                        service.title === 'CCTV & Surveillance' ? 'cctv' :
                                                            service.title === 'Unified Communications' ? 'unified-communications' :
                                                                'datacenter'
                                            }`}
                                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
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

            {/* Cable Specifications */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cable Specifications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Industry-standard cabling solutions for every application
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {cableSpecifications.map((cable, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{cable.type}</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Bandwidth:</span>
                                        <span className="text-sm font-semibold text-primary-600">{cable.bandwidth}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Speed:</span>
                                        <span className="text-sm font-semibold text-primary-600">{cable.speed}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Certification:</span>
                                        <span className="text-sm font-semibold text-gray-900">{cable.certification}</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Applications:</p>
                                    <p className="text-sm text-gray-700">{cable.applications}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Network Equipment */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Network Equipment
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade equipment from leading manufacturers
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {networkEquipment.map((equipment, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{equipment.category}</h3>
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Supported Brands:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {equipment.brands.map((brand, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded">
                                                {brand}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Features:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {equipment.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start text-sm text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-1 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Standards */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Certifications & Standards
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Compliance with international cabling and datacenter standards
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                                    <CheckCircleIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{cert.description}</p>
                                <p className="text-xs text-gray-500">{cert.scope}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testing Procedures */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Testing & Verification
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive testing with industry-leading equipment
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testingProcedures.map((procedure, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{procedure.test}</h3>
                                <div className="mb-6">
                                    <p className="text-sm text-gray-600 mb-2">
                                        <span className="font-semibold">Equipment:</span> {procedure.equipment}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Test Parameters:</h4>
                                    <div className="space-y-1">
                                        {procedure.parameters.map((param, idx) => (
                                            <div key={idx} className="flex items-start text-xs text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-1 flex-shrink-0 mt-0.5" />
                                                {param}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Examples */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Project Examples
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world infrastructure deployments
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projectExamples.map((project, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.project}</h3>
                                <div className="mb-6">
                                    <div className="mb-3">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Scope:</h4>
                                        <p className="text-sm text-gray-600">{project.scope}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Solution:</h4>
                                        <p className="text-sm text-gray-600">{project.solution}</p>
                                    </div>
                                    <div className="mb-3">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Duration:</h4>
                                        <p className="text-sm text-primary-600 font-semibold">{project.duration}</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Results:</h4>
                                    <p className="text-sm text-gray-700">{project.result}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Pricing Packages
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible infrastructure solutions for every scale
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${tier.popular ? 'ring-2 ring-primary-500 shadow-2xl' : ''}`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                                <div className="text-xl font-bold text-primary-600 mb-2">{tier.price}</div>
                                <p className="text-sm text-gray-600 mb-6">{tier.scope}</p>
                                <ul className="space-y-2 mb-6">
                                    {tier.includes.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-gray-700">{tier.bestFor}</p>
                                </div>
                            </div>
                        ))}
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
