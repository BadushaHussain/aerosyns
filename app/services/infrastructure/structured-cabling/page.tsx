import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaNetworkWired, FaCheckCircle, FaTools } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Structured Cabling Services - Infrastructure',
    description:
        'Professional structured cabling installation with Cat6/Cat6A copper and single/multi-mode fiber. Complete testing, certification, and documentation for office, campus, and datacenter environments.',
    keywords: [
        'structured cabling UAE',
        'Cat6 cabling',
        'Cat6A installation',
        'fiber optic cabling',
        'cable certification',
        'Fluke testing',
    ],
})

const cableTypes = [
    {
        type: 'Cat6 UTP',
        bandwidth: '250 MHz',
        speed: '1 Gbps (100m) / 10 Gbps (55m)',
        applications: 'Office networks, VoIP, IP cameras, general data',
        cost: 'Most economical',
        features: ['TIA/EIA-568-C.2 compliant', 'PoE capable (15.4W)', 'RJ45 termination', 'Backward compatible'],
    },
    {
        type: 'Cat6A UTP/STP',
        bandwidth: '500 MHz',
        speed: '10 Gbps (100m)',
        applications: 'High-density networks, PoE++, Wi-Fi 6, datacenter access',
        cost: 'Mid-range',
        features: ['TIA/EIA-568-C.2 compliant', 'PoE++ capable (60W)', 'Alien crosstalk immunity', '10GBASE-T support'],
        popular: true,
    },
    {
        type: 'Cat7 S/FTP',
        bandwidth: '600 MHz',
        speed: '10 Gbps (100m)',
        applications: 'Industrial environments, high EMI areas',
        cost: 'Premium',
        features: ['Fully shielded', 'EMI/RFI protection', 'GG45/TERA connectors', 'Future-proof'],
    },
    {
        type: 'Single-Mode Fiber',
        bandwidth: 'Unlimited',
        speed: '10/40/100 Gbps+',
        applications: 'Campus backbone, datacenter interconnect, long distance',
        cost: 'High initial, low long-term',
        features: ['OS2 standard', 'LC/SC connectors', 'Up to 40km+', 'Wavelength: 1310/1550nm'],
    },
    {
        type: 'Multi-Mode OM3/OM4',
        bandwidth: '2000/4700 MHz·km',
        speed: '10/40/100 Gbps',
        applications: 'Datacenter, SAN, high-speed links (up to 300m)',
        cost: 'Moderate',
        features: ['50/125μm core', 'LC/MPO connectors', 'Laser-optimized', 'OM4: 150m @ 40G'],
    },
]

const installationProcess = [
    {
        phase: 'Site Survey',
        duration: '1-3 days',
        activities: [
            'Physical site inspection',
            'Cable pathway assessment',
            'Rack/cabinet locations',
            'Power & grounding verification',
            'Documentation review',
        ],
    },
    {
        phase: 'Design & Planning',
        duration: '3-7 days',
        activities: [
            'CAD drawings',
            'Cable schedule & BOM',
            'Pathway design',
            'Labeling scheme',
            'Project timeline',
        ],
    },
    {
        phase: 'Installation',
        duration: '2-8 weeks',
        activities: [
            'Cable pulling & dressing',
            'Termination & patching',
            'Rack installation',
            'Grounding & bonding',
            'Cable management',
        ],
    },
    {
        phase: 'Testing & Certification',
        duration: '3-5 days',
        activities: [
            'Fluke DSX testing',
            'OTDR fiber testing',
            'Documentation generation',
            'As-built drawings',
            'Warranty registration',
        ],
    },
]

const testingEquipment = [
    {
        name: 'Fluke DSX-5000/8000',
        type: 'Copper Certification',
        tests: ['Wire map', 'Length', 'Insertion loss', 'Return loss', 'NEXT', 'PSNEXT', 'ACR', 'DC resistance'],
        standards: ['TIA-568-C.2', 'ISO/IEC 11801', 'EN 50173'],
    },
    {
        name: 'OTDR (Optical Time-Domain Reflectometer)',
        type: 'Fiber Testing',
        tests: ['Insertion loss', 'Return loss', 'Length', 'Splice loss', 'Connector loss', 'Event location'],
        standards: ['TIA-568.3-D', 'ISO/IEC 14763-3'],
    },
    {
        name: 'Fiber Inspection Scope',
        type: 'Visual Inspection',
        tests: ['End-face inspection', 'Contamination detection', 'Scratch/crack detection'],
        standards: ['IEC 61300-3-35'],
    },
]

const certificationLevels = [
    {
        level: 'Basic Verification',
        description: 'Continuity and wire map testing',
        includes: ['Wire map', 'Continuity', 'Length', 'Basic documentation'],
        warranty: '1 year',
    },
    {
        level: 'Performance Certification',
        description: 'Full TIA/ISO compliance testing',
        includes: ['All basic tests', 'Insertion loss', 'Return loss', 'NEXT/PSNEXT', 'Detailed reports', 'Test results database'],
        warranty: '15 years',
        recommended: true,
    },
    {
        level: 'Extended Warranty',
        description: 'Manufacturer extended warranty program',
        includes: ['All performance tests', 'Manufacturer registration', 'Extended warranty coverage', 'Priority support'],
        warranty: '25 years',
    },
]

const pricingTiers = [
    {
        tier: 'Small Office',
        scope: 'Up to 50 drops',
        price: 'Starting at $5,000',
        includes: [
            'Cat6 UTP cabling',
            'Basic patch panels',
            'Cable management',
            'Testing & verification',
            'Basic documentation',
            '1-year warranty',
        ],
        pricePerDrop: '$100-150/drop',
    },
    {
        tier: 'Medium Enterprise',
        scope: '50-500 drops',
        price: 'Starting at $35,000',
        includes: [
            'Cat6A UTP/STP cabling',
            'Enterprise patch panels',
            'Fiber backbone (if needed)',
            'Full Fluke certification',
            'Comprehensive documentation',
            'As-built CAD drawings',
            '15-year warranty',
        ],
        pricePerDrop: '$70-120/drop',
        popular: true,
    },
    {
        tier: 'Large Campus/Datacenter',
        scope: '500+ drops',
        price: 'Custom pricing',
        includes: [
            'Cat6A/Cat7 + fiber infrastructure',
            'MPO/MTP trunk cabling',
            'Redundant pathways',
            'Complete OTDR testing',
            'Full documentation package',
            'Training & handover',
            '25-year warranty',
        ],
        pricePerDrop: '$50-100/drop',
    },
]

export default function StructuredCablingPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/infrastructure" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-4 text-sm">
                            ← Back to Infrastructure Services
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <FaNetworkWired className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Structured Cabling</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Structured Cabling Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Professional Cat6/Cat6A copper and single/multi-mode fiber installation with complete testing,
                            certification, and documentation for office, campus, and datacenter environments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=cabling" className="btn-primary">
                                Request Quote
                            </Link>
                            <Link href="#cable-types" className="btn-secondary">
                                View Cable Types
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cable Types */}
            <section id="cable-types" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cable Types & Specifications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the right cable for your application
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cableTypes.map((cable, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 ${cable.popular ? 'ring-2 ring-primary-500 shadow-2xl' : ''}`}
                            >
                                {cable.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cable.type}</h3>
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
                                        <span className="text-sm text-gray-600">Cost:</span>
                                        <span className="text-sm font-semibold text-gray-900">{cable.cost}</span>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-xs text-gray-500 font-semibold mb-2">Applications:</p>
                                    <p className="text-sm text-gray-700">{cable.applications}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold mb-2">Features:</p>
                                    <ul className="space-y-1">
                                        {cable.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-xs text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-1 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Installation Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Structured approach from survey to certification
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {installationProcess.map((phase, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="text-center mb-4">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                                    <p className="text-sm text-primary-600 font-semibold">{phase.duration}</p>
                                </div>
                                <ul className="space-y-1">
                                    {phase.activities.map((activity, idx) => (
                                        <li key={idx} className="text-xs text-gray-600">• {activity}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testing Equipment */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Testing & Certification Equipment
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Industry-leading test equipment for guaranteed performance
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testingEquipment.map((equipment, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaTools className="w-10 h-10 text-primary-600" />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{equipment.name}</h3>
                                        <p className="text-sm text-gray-600">{equipment.type}</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Test Parameters:</h4>
                                    <div className="grid grid-cols-2 gap-1">
                                        {equipment.tests.map((test, idx) => (
                                            <div key={idx} className="flex items-start text-xs text-gray-600">
                                                <CheckCircleIcon className="w-3 h-3 text-primary-500 mr-1 flex-shrink-0 mt-0.5" />
                                                {test}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Standards:</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {equipment.standards.map((standard, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                                                {standard}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification Levels */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Certification Levels
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the right certification for your warranty needs
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {certificationLevels.map((cert, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 ${cert.recommended ? 'ring-2 ring-primary-500 shadow-2xl' : ''}`}
                            >
                                {cert.recommended && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
                                            Recommended
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{cert.level}</h3>
                                <p className="text-sm text-gray-600 mb-6">{cert.description}</p>
                                <div className="mb-6">
                                    <div className="text-3xl font-bold text-primary-600 mb-2">{cert.warranty}</div>
                                    <p className="text-sm text-gray-600">Warranty Period</p>
                                </div>
                                <ul className="space-y-2">
                                    {cert.includes.map((item, idx) => (
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

            {/* Pricing */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Pricing & Packages
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transparent pricing for every project size
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
                                <p className="text-sm text-gray-600 mb-4">{tier.scope}</p>
                                <div className="text-3xl font-bold text-primary-600 mb-2">{tier.price}</div>
                                <p className="text-sm text-gray-600 mb-6">{tier.pricePerDrop}</p>
                                <ul className="space-y-2">
                                    {tier.includes.map((item, idx) => (
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

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Start Your Cabling Project?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free site survey and detailed quote
                    </p>
                    <Link href="/contact?type=cabling" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Quote
                    </Link>
                </div>
            </section>
        </>
    )
}
