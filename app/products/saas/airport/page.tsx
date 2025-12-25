import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Airport Device Management - IoT & Asset Tracking',
    description:
        'Comprehensive airport device and asset management system. Track equipment, manage maintenance schedules, monitor IoT devices, and optimize airport operations with real-time visibility.',
    keywords: [
        'airport management',
        'device tracking',
        'asset management',
        'IoT monitoring',
        'airport operations',
        'equipment tracking',
    ],
})

const modules = [
    {
        title: 'Device & Asset Tracking',
        description: 'Real-time tracking of all airport equipment and devices',
        features: [
            'GPS-enabled asset tracking',
            'QR code & RFID tagging',
            'Location history & analytics',
            'Geofencing & alerts',
            'Multi-location support',
            'Mobile scanning apps',
        ],
    },
    {
        title: 'Maintenance Management',
        description: 'Preventive and corrective maintenance scheduling',
        features: [
            'Scheduled maintenance plans',
            'Work order management',
            'Technician assignment',
            'Spare parts inventory',
            'Maintenance history logs',
            'Compliance tracking',
        ],
    },
    {
        title: 'IoT Device Monitoring',
        description: 'Monitor connected devices and sensors in real-time',
        features: [
            'Sensor data collection',
            'Real-time dashboards',
            'Automated alerts',
            'Predictive analytics',
            'Integration APIs',
            'Custom thresholds',
        ],
    },
    {
        title: 'Equipment Lifecycle',
        description: 'Complete lifecycle management from procurement to disposal',
        features: [
            'Procurement tracking',
            'Warranty management',
            'Depreciation tracking',
            'End-of-life planning',
            'Vendor management',
            'Cost analysis',
        ],
    },
    {
        title: 'Compliance & Reporting',
        description: 'Regulatory compliance and comprehensive reporting',
        features: [
            'Aviation authority compliance',
            'Safety certifications',
            'Audit trails',
            'Custom reports',
            'Export to Excel/PDF',
            'Scheduled reports',
        ],
    },
    {
        title: 'Mobile Operations',
        description: 'Field operations with mobile apps',
        features: [
            'iOS & Android apps',
            'Offline mode',
            'Barcode scanning',
            'Photo documentation',
            'Digital signatures',
            'Push notifications',
        ],
    },
]

const deviceCategories = [
    'Ground Support Equipment (GSE)',
    'Baggage Handling Systems',
    'Security Screening Devices',
    'Communication Equipment',
    'Airfield Lighting',
    'HVAC Systems',
    'Fire Safety Equipment',
    'Passenger Boarding Bridges',
]

export default function AirportDeviceManagementPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <span className="text-cyan-400 text-sm font-semibold">Airport Operations</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Airport Device Management
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Comprehensive asset and device management platform for airports. Track equipment,
                            manage maintenance, monitor IoT devices, and ensure operational excellence with
                            real-time visibility across your entire airport infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=airport-demo" className="btn-primary">
                                Request Demo
                            </Link>
                            <Link href="#modules" className="btn-secondary">
                                View Features
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Why Choose Our Platform?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built specifically for airport operations and compliance
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Real-Time Tracking', desc: 'GPS and RFID-enabled asset tracking' },
                            { title: 'Compliance Ready', desc: 'Aviation authority compliance built-in' },
                            { title: 'Mobile First', desc: 'iOS & Android apps for field operations' },
                            { title: 'IoT Integration', desc: 'Connect sensors and monitoring devices' },
                            { title: 'Predictive Maintenance', desc: 'AI-powered maintenance scheduling' },
                            { title: 'Multi-Airport', desc: 'Manage multiple locations centrally' },
                            { title: 'Offline Mode', desc: 'Work without internet connectivity' },
                            { title: 'Custom Workflows', desc: 'Configurable to your processes' },
                        ].map((benefit, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modules */}
            <section id="modules" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Platform Modules
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive modules covering all aspects of airport device management
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modules.map((module, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {module.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{module.description}</p>
                                <ul className="space-y-2">
                                    {module.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Device Categories */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Supported Equipment Categories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Manage all types of airport equipment and devices
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {deviceCategories.map((category, index) => (
                            <div key={index} className="card-enterprise p-4 text-center">
                                <div className="text-sm font-semibold text-gray-900">{category}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                Seamless Integration
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Connect with your existing airport systems and third-party platforms for
                                unified operations management.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { title: 'Airport Operations Systems', desc: 'AODB, FIDS, BHS integration' },
                                    { title: 'ERP Systems', desc: 'SAP, Oracle, Microsoft Dynamics' },
                                    { title: 'CMMS', desc: 'Computerized maintenance management' },
                                    { title: 'IoT Platforms', desc: 'AWS IoT, Azure IoT, custom sensors' },
                                    { title: 'GIS Systems', desc: 'Geographic information systems' },
                                    { title: 'Mobile Apps', desc: 'Native iOS and Android applications' },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircleIcon className="w-6 h-6 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{item.title}</div>
                                            <div className="text-sm text-gray-600">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-enterprise p-8 bg-gradient-to-br from-cyan-50 to-blue-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Architecture', value: 'Cloud-native microservices' },
                                    { label: 'API', value: 'RESTful, GraphQL, WebSocket' },
                                    { label: 'Database', value: 'PostgreSQL, TimescaleDB' },
                                    { label: 'Real-time', value: 'MQTT, WebSocket, Server-Sent Events' },
                                    { label: 'Mobile', value: 'React Native (iOS & Android)' },
                                    { label: 'Deployment', value: 'Cloud, on-premise, hybrid' },
                                ].map((spec, index) => (
                                    <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span className="font-semibold text-gray-900">{spec.label}</span>
                                        <span className="text-cyan-600 text-sm">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Flexible Pricing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the pricing model that works for your airport
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Per Device',
                                price: '$5',
                                period: '/device/month',
                                description: 'Pay per tracked device',
                                features: ['All modules included', 'Unlimited users', 'Mobile apps', 'Email support'],
                            },
                            {
                                title: 'Per Terminal',
                                price: 'Custom',
                                period: '',
                                description: 'Flat rate per terminal',
                                features: ['Unlimited devices', 'Unlimited users', 'Priority support', 'Custom integrations'],
                                popular: true,
                            },
                            {
                                title: 'Enterprise',
                                price: 'Custom',
                                period: '',
                                description: 'Multi-airport deployment',
                                features: ['Unlimited everything', 'Dedicated support', 'On-premise option', 'SLA guarantee'],
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500 shadow-2xl' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-cyan-600 text-white text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-600 text-sm">{plan.period}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/contact?type=airport-${plan.title.toLowerCase()}`}
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                            ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    Get Quote
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-cyan-600 to-blue-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Optimize Your Airport Operations
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a demo to see how our platform can transform your airport device management
                    </p>
                    <Link href="/contact?type=airport-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-cyan-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
