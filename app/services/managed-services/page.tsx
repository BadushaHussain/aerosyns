import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { WrenchScrewdriverIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Managed IT Services & Support',
    description:
        '24/7 NOC support with SLA-backed service tiers. Bronze, Silver, Gold, and Platinum managed services with proactive monitoring, patch management, and enterprise support.',
    keywords: [
        'managed IT services UAE',
        'NOC support',
        'IT support SLA',
        'managed services',
        'IT outsourcing',
        '24/7 support',
    ],
})

const slaTiers = [
    {
        name: 'Bronze',
        price: 'Custom',
        description: 'Business hours support for small teams',
        features: [
            'Business hours support (Mon-Fri 9AM-6PM)',
            '8-hour response time',
            'Remote support only',
            'Email & ticket support',
            'Quarterly reporting',
        ],
        responseTime: '8 hours',
        coverage: 'Business hours',
        onsite: 'Not included',
    },
    {
        name: 'Silver',
        price: 'Custom',
        description: '24/7 remote support with standard SLA',
        features: [
            '24/7 remote support',
            '4-hour response time',
            'Phone & email support',
            'Standard spare parts',
            'Monthly reporting',
        ],
        responseTime: '4 hours',
        coverage: '24/7',
        onsite: 'Next business day',
        popular: true,
    },
    {
        name: 'Gold',
        price: 'Custom',
        description: 'Premium support with on-site response',
        features: [
            '24/7 remote + on-site support',
            '2-hour response time',
            'Priority phone support',
            'Guaranteed spare parts',
            'Weekly reporting',
            'Dedicated account manager',
        ],
        responseTime: '2 hours',
        coverage: '24/7',
        onsite: '4 hours (UAE)',
    },
    {
        name: 'Platinum',
        price: 'Custom',
        description: 'White-glove service with dedicated resources',
        features: [
            'Dedicated technical lead',
            '1-hour response time',
            'Guaranteed replacement hardware',
            'Priority engineering',
            'Real-time reporting & dashboards',
            'Quarterly business reviews',
        ],
        responseTime: '1 hour',
        coverage: '24/7',
        onsite: '2 hours (UAE)',
    },
]

const managedServices = [
    {
        icon: <ClockIcon className="w-8 h-8" />,
        title: '24/7 NOC Monitoring',
        description: 'Round-the-clock network operations center monitoring all critical systems',
    },
    {
        icon: <CheckCircleIcon className="w-8 h-8" />,
        title: 'Patch Management',
        description: 'Automated patch deployment with testing and rollback capabilities',
    },
    {
        icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
        title: 'Backup & DR',
        description: 'Automated backups with disaster recovery runbooks and testing',
    },
    {
        icon: <CheckCircleIcon className="w-8 h-8" />,
        title: 'Performance Monitoring',
        description: 'Proactive monitoring with alerting and capacity planning',
    },
]

export default function ManagedServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <WrenchScrewdriverIcon className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Managed Services</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            24/7 Managed IT Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Enterprise-grade managed services with SLA-backed support tiers. 24/7 NOC monitoring,
                            proactive maintenance, and dedicated account management for mission-critical operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=managed-services" className="btn-primary">
                                Review SLA Options
                            </Link>
                            <Link href="#tiers" className="btn-secondary">
                                View Service Tiers
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Managed Services Overview */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Comprehensive Managed Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Proactive monitoring and management to ensure maximum uptime
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {managedServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                                    <div className="text-white">{service.icon}</div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLA Tiers */}
            <section id="tiers" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Service Level Agreement Tiers
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the right support level for your business needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {slaTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${tier.popular ? 'ring-2 ring-primary-500 shadow-2xl' : ''
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary-600 text-white text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                                        {tier.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
                                    <div className="text-3xl font-bold text-gray-900">{tier.price}</div>
                                    <div className="text-sm text-gray-600">per month</div>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Response Time</span>
                                        <span className="font-semibold text-gray-900">{tier.responseTime}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Coverage</span>
                                        <span className="font-semibold text-gray-900">{tier.coverage}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">On-site</span>
                                        <span className="font-semibold text-gray-900">{tier.onsite}</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, idx) => (
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
                                <Link
                                    href={`/contact?type=managed-services&tier=${tier.name.toLowerCase()}`}
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${tier.popular
                                            ? 'bg-primary-600 text-white hover:bg-primary-700'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscription Models */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Flexible Subscription Models
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Predictable monthly costs with no hidden fees
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Per-Device',
                                description: 'Fixed monthly cost per managed device (server, workstation, network device)',
                                example: 'Starting from $50/device/month',
                            },
                            {
                                title: 'Per-User',
                                description: 'Subscription based on number of users with unlimited devices',
                                example: 'Starting from $75/user/month',
                            },
                            {
                                title: 'Per-Core',
                                description: 'Pricing based on CPU cores for datacenter and cloud infrastructure',
                                example: 'Starting from $25/core/month',
                            },
                        ].map((model, index) => (
                            <div key={index} className="card-enterprise p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{model.title}</h3>
                                <p className="text-gray-600 mb-4">{model.description}</p>
                                <div className="text-primary-600 font-semibold">{model.example}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Portal */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                Customer Portal & Reporting
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Access real-time dashboards, submit tickets, and view monthly reports through our
                                dedicated customer portal.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { title: 'Real-time Dashboards', desc: 'Monitor system health and performance' },
                                    { title: 'Ticket Management', desc: 'Submit and track support requests' },
                                    { title: 'Monthly Reports', desc: 'Detailed service and performance reports' },
                                    { title: 'Asset Inventory', desc: 'Complete inventory of managed assets' },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <div>
                                            <div className="font-semibold text-gray-900">{item.title}</div>
                                            <div className="text-sm text-gray-600">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-enterprise p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
                            <div className="space-y-4">
                                {[
                                    '24/7 access to customer portal',
                                    'Mobile app for iOS & Android',
                                    'Automated alerting & notifications',
                                    'Monthly service review meetings',
                                    'Dedicated account manager',
                                    'Priority escalation path',
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center text-gray-700">
                                        <CheckCircleIcon className="w-5 h-5 text-primary-600 mr-3" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Optimize Your IT Operations?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free consultation to determine the right managed services tier for your business
                    </p>
                    <Link href="/contact?type=managed-services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Review SLA Options
                    </Link>
                </div>
            </section>
        </>
    )
}
