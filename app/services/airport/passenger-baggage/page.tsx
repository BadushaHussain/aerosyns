import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaUsers, FaSuitcase, FaFingerprint, FaQrcode } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Passenger & Baggage Systems - CUPPS, CUSS, BHS, Biometric',
    description:
        'Complete passenger processing and baggage handling systems. CUPPS, CUSS kiosks, BHS integration, biometric e-gates, and security screening solutions.',
    keywords: [
        'CUPPS system',
        'CUSS kiosks',
        'baggage handling system',
        'biometric gates',
        'passenger processing',
        'airport security',
    ],
})

const systems = [
    {
        title: 'Common Use Passenger Processing (CUPPS)',
        icon: FaUsers,
        description: 'Shared check-in and boarding infrastructure for multiple airlines',
        features: [
            'Multi-airline check-in counters',
            'Boarding gate systems',
            'Bag drop integration',
            'Departure control system (DCS) connectivity',
            'Resource pooling & optimization',
            'Real-time counter allocation',
        ],
        benefits: ['Reduced infrastructure costs', 'Flexible resource allocation', 'Improved passenger flow'],
    },
    {
        title: 'Common Use Self-Service (CUSS)',
        icon: FaQrcode,
        description: 'Self-service kiosks for passenger check-in and boarding passes',
        features: [
            'Multi-airline self-service kiosks',
            'Boarding pass printing',
            'Baggage tag printing',
            'Seat selection',
            'Payment processing',
            'Accessibility features',
        ],
        benefits: ['Reduced queue times', 'Lower operational costs', '24/7 availability'],
    },
    {
        title: 'Baggage Handling System (BHS)',
        icon: FaSuitcase,
        description: 'Automated baggage sorting, tracking, and reconciliation',
        features: [
            'Automated baggage sorting',
            'RFID/barcode tracking',
            'Baggage Reconciliation System (BRS)',
            'Early bag storage',
            'Carousel management',
            'Lost & found integration',
        ],
        benefits: ['Reduced mishandling', 'Faster processing', 'Improved tracking'],
    },
    {
        title: 'Biometric e-Gates',
        icon: FaFingerprint,
        description: 'Facial recognition and biometric authentication for passenger processing',
        features: [
            'Facial recognition technology',
            'Fingerprint authentication',
            'Iris scanning',
            'Passport verification',
            'Boarding gate biometrics',
            'Immigration integration',
        ],
        benefits: ['Faster processing', 'Enhanced security', 'Improved passenger experience'],
    },
]

const additionalCapabilities = [
    {
        title: 'Passenger Flow Analytics',
        description: 'Real-time monitoring and prediction of passenger movement',
        features: ['Queue management', 'Congestion prediction', 'Wait time estimation', 'Resource optimization'],
    },
    {
        title: 'Security Screening Integration',
        description: 'Integration with security checkpoint systems',
        features: ['X-ray systems', 'Body scanners', 'Explosive detection', 'Access control'],
    },
    {
        title: 'Mobile Integration',
        description: 'Mobile boarding passes and digital identity',
        features: ['Mobile check-in', 'Digital boarding passes', 'Mobile bag tracking', 'Push notifications'],
    },
]

const vendors = [
    'SITA WorldTracer & BagManager',
    'Amadeus Altéa Suite',
    'ICM Airport Technics',
    'Daifuku BHS',
    'Vanderlande Industries',
    'Vision-Box Biometrics',
]

export default function PassengerBaggagePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/airport" className="inline-flex items-center text-green-400 hover:text-green-300 mb-4 text-sm">
                            ← Back to Airport Services
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                            <FaUsers className="w-5 h-5 text-green-400 mr-2" />
                            <span className="text-green-400 text-sm font-semibold">Passenger & Baggage Systems</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Passenger & Baggage Systems
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Complete passenger processing and baggage handling solutions. CUPPS, CUSS kiosks,
                            BHS integration, biometric e-gates, and advanced security screening systems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=passenger-systems" className="btn-primary">
                                Request Consultation
                            </Link>
                            <Link href="#systems" className="btn-secondary">
                                View Systems
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Systems */}
            <section id="systems" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Core Passenger & Baggage Systems
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive solutions for passenger processing and baggage management
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {systems.map((system, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
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
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {system.benefits.map((benefit, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
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

            {/* Additional Capabilities */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Additional Capabilities
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enhanced features for superior passenger experience
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {additionalCapabilities.map((capability, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{capability.description}</p>
                                <ul className="space-y-2">
                                    {capability.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
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

            {/* Compatible Vendors */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Compatible Vendors & Systems
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Integration with leading passenger and baggage system providers
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {vendors.map((vendor, index) => (
                            <div key={index} className="card-enterprise p-4 text-center">
                                <div className="text-sm font-semibold text-gray-900">{vendor}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Enhance Your Passenger Experience
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can modernize your passenger processing and baggage handling systems
                    </p>
                    <Link href="/contact?type=passenger-systems" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-green-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
