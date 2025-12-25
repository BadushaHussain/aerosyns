import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaTools, FaHeadset, FaChartLine, FaClock } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Airport Managed IT Services - 24/7 NOC, Support & Maintenance',
    description:
        '24/7 managed IT services for airports. Network Operations Center, helpdesk support, preventive maintenance, and SLA-based service delivery.',
    keywords: [
        'managed IT services',
        'airport NOC',
        '24/7 support',
        'IT maintenance',
        'helpdesk',
        'SLA management',
    ],
})

const managedServices = [
    {
        title: 'Network Operations Center (NOC)',
        icon: FaChartLine,
        description: '24/7 monitoring and management of IT infrastructure',
        features: [
            '24/7/365 monitoring',
            'Proactive issue detection',
            'Performance monitoring',
            'Capacity planning',
            'Incident escalation',
            'Change management',
        ],
        sla: '99.9% uptime guarantee',
    },
    {
        title: 'Helpdesk & Support',
        icon: FaHeadset,
        description: 'Multi-tier support for end users and IT systems',
        features: [
            'L1/L2/L3 support',
            'Ticket management',
            'Remote support',
            'On-site support',
            'User training',
            'Knowledge base',
        ],
        sla: '15-min response time',
    },
    {
        title: 'Preventive Maintenance',
        icon: FaTools,
        description: 'Scheduled maintenance to prevent issues',
        features: [
            'Patch management',
            'Firmware updates',
            'Health checks',
            'Performance tuning',
            'Backup verification',
            'Security updates',
        ],
        sla: 'Monthly maintenance windows',
    },
    {
        title: 'Performance Management',
        icon: FaClock,
        description: 'Continuous optimization of IT systems',
        features: [
            'Performance monitoring',
            'Bottleneck identification',
            'Capacity planning',
            'Resource optimization',
            'Trend analysis',
            'Reporting',
        ],
        sla: 'Monthly performance reports',
    },
]

const servicePackages = [
    {
        name: 'Essential',
        description: 'Basic monitoring and support',
        features: [
            '24/7 NOC monitoring',
            'Business hours helpdesk',
            'Monthly maintenance',
            'Email support',
            'Quarterly reviews',
        ],
        sla: '99.5% uptime',
        response: '30 minutes',
    },
    {
        name: 'Professional',
        description: 'Comprehensive managed services',
        features: [
            '24/7 NOC monitoring',
            '24/7 helpdesk support',
            'Weekly maintenance',
            'Phone & email support',
            'Monthly reviews',
            'On-site support (8 hours/month)',
        ],
        sla: '99.9% uptime',
        response: '15 minutes',
        popular: true,
    },
    {
        name: 'Enterprise',
        description: 'Premium support with dedicated team',
        features: [
            '24/7 NOC monitoring',
            '24/7 priority helpdesk',
            'Continuous maintenance',
            'Dedicated account manager',
            'Weekly reviews',
            'Unlimited on-site support',
            'Proactive optimization',
        ],
        sla: '99.99% uptime',
        response: '5 minutes',
    },
]

const monitoredSystems = [
    'Network infrastructure',
    'Servers & storage',
    'AODB & core systems',
    'Passenger processing systems',
    'Baggage handling systems',
    'Security systems',
    'WiFi networks',
    'Cloud infrastructure',
]

const benefits = [
    {
        title: 'Reduced Downtime',
        description: 'Proactive monitoring prevents issues before they impact operations',
    },
    {
        title: 'Cost Savings',
        description: 'Predictable monthly costs instead of unpredictable break-fix expenses',
    },
    {
        title: 'Expert Team',
        description: 'Access to specialized airport IT expertise 24/7',
    },
    {
        title: 'Focus on Core Business',
        description: 'Let us handle IT while you focus on airport operations',
    },
]

export default function ManagedServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/airport" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-4 text-sm">
                            ← Back to Airport Services
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                            <FaTools className="w-5 h-5 text-indigo-400 mr-2" />
                            <span className="text-indigo-400 text-sm font-semibold">Managed IT Services</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Airport Managed IT Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            24/7 managed IT services for mission-critical airport operations. Network Operations Center,
                            helpdesk support, preventive maintenance, and SLA-based service delivery.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=managed-services" className="btn-primary">
                                Request Proposal
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Managed Services */}
            <section id="services" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Managed Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive IT management for airport infrastructure
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {managedServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                        <span className="text-sm text-indigo-600 font-semibold">{service.sla}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Packages */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Service Packages
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the right level of support for your airport
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {servicePackages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${pkg.popular ? 'ring-2 ring-indigo-500 shadow-2xl' : ''}`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-600 text-white text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <p className="text-sm text-gray-600 mb-6">{pkg.description}</p>
                                <div className="mb-6 pb-6 border-b border-gray-200">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-sm text-gray-600">SLA:</span>
                                        <span className="text-lg font-bold text-indigo-600">{pkg.sla}</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-sm text-gray-600">Response:</span>
                                        <span className="text-lg font-bold text-indigo-600">{pkg.response}</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact?type=managed-services"
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${pkg.popular
                                            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
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

            {/* Monitored Systems */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Systems We Monitor & Manage
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive coverage of all airport IT systems
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {monitoredSystems.map((system, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                                <CheckCircleIcon className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                                <span className="text-sm text-gray-700 font-medium">{system}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Benefits of Managed Services
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                                    <CheckCircleIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Let Us Manage Your Airport IT
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a customized managed services proposal for your airport
                    </p>
                    <Link href="/contact?type=managed-services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Proposal
                    </Link>
                </div>
            </section>
        </>
    )
}
