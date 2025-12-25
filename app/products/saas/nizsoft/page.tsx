import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Nizsoft - Modern Insurance Platform',
    description:
        'End-to-end insurance management platform with policy lifecycle, claims processing, agent management, KYC, and analytics. API-first, cloud-native, and compliance-ready.',
    keywords: [
        'insurance software',
        'policy management',
        'claims processing',
        'insurance platform UAE',
        'agent portal',
    ],
})

const modules = [
    {
        title: 'Policy Management',
        description: 'Complete policy lifecycle from quotation to renewal',
        features: [
            'Quote generation & comparison',
            'Policy issuance & activation',
            'Endorsements & modifications',
            'Renewal management',
            'Multi-product support',
            'Automated workflows',
        ],
    },
    {
        title: 'Claims Processing',
        description: 'Streamlined claims workflow with automated tracking',
        features: [
            'Online claim submission',
            'Document upload & verification',
            'Automated claim routing',
            'Approval workflows',
            'Settlement processing',
            'Claims analytics',
        ],
    },
    {
        title: 'Agent Portal',
        description: 'Dedicated portal for agents with commission tracking',
        features: [
            'Lead & opportunity management',
            'Policy sales dashboard',
            'Commission calculation',
            'Performance analytics',
            'Customer management',
            'Mobile app access',
        ],
    },
    {
        title: 'KYC & Documents',
        description: 'Digital KYC and document management system',
        features: [
            'Digital KYC verification',
            'Document upload & storage',
            'OCR & data extraction',
            'Expiry tracking',
            'Compliance checks',
            'Audit trail',
        ],
    },
    {
        title: 'Payments',
        description: 'Integrated payment processing and reconciliation',
        features: [
            'Multiple payment gateways',
            'Installment plans',
            'Auto-debit setup',
            'Payment reconciliation',
            'Receipt generation',
            'Refund processing',
        ],
    },
    {
        title: 'Analytics & Reports',
        description: 'Business intelligence and regulatory reporting',
        features: [
            'Real-time dashboards',
            'Custom report builder',
            'Regulatory reports',
            'Performance metrics',
            'Predictive analytics',
            'Data export',
        ],
    },
]

const integrations = [
    'Payment gateways (Stripe, PayPal, local banks)',
    'SMS & email providers',
    'WhatsApp Business API',
    'Accounting systems (QuickBooks, Tally)',
    'CRM platforms',
    'Third-party APIs',
]

export default function NizsoftPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <DocumentTextIcon className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 text-sm font-semibold">Insurance Platform</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Nizsoft Insurance Platform
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Modern, cloud-native insurance management platform covering the complete lifecycle
                            from quotation to claims settlement. Built for insurers, brokers, and MGAs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=nizsoft-demo" className="btn-primary">
                                Request Demo
                            </Link>
                            <Link href="#modules" className="btn-secondary">
                                View Modules
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
                            Why Choose Nizsoft?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built specifically for the insurance industry with modern technology
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'API-First Design', desc: 'RESTful APIs for all operations' },
                            { title: 'Multi-Product', desc: 'Life, health, motor, property insurance' },
                            { title: 'Compliance Ready', desc: 'Built-in regulatory compliance' },
                            { title: 'Cloud-Native', desc: 'Scalable microservices architecture' },
                            { title: 'Mobile Apps', desc: 'iOS & Android for agents & customers' },
                            { title: 'White-Label', desc: 'Fully customizable branding' },
                            { title: 'Real-Time', desc: 'Instant updates & notifications' },
                            { title: '99.9% Uptime', desc: 'Enterprise SLA guarantee' },
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
                            Comprehensive modules covering every aspect of insurance operations
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

            {/* Integrations */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                Seamless Integrations
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Connect Nizsoft with your existing systems through our comprehensive API and
                                pre-built integrations with popular platforms.
                            </p>
                            <ul className="space-y-3">
                                {integrations.map((integration, index) => (
                                    <li key={index} className="flex items-start text-gray-700">
                                        <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                                        {integration}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-enterprise p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Architecture', value: 'Microservices, Cloud-Native' },
                                    { label: 'API', value: 'RESTful, GraphQL' },
                                    { label: 'Database', value: 'PostgreSQL, MongoDB' },
                                    { label: 'Authentication', value: 'OAuth 2.0, SSO, MFA' },
                                    { label: 'Deployment', value: 'Public, Private, On-Premise' },
                                    { label: 'Mobile', value: 'iOS, Android native apps' },
                                ].map((spec, index) => (
                                    <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span className="font-semibold text-gray-900">{spec.label}</span>
                                        <span className="text-blue-600 text-sm">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Flexible Pricing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the pricing model that works for your business
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Per-User',
                                price: 'Custom',
                                description: 'Monthly subscription per active user',
                                features: ['All modules included', 'Unlimited policies', 'Mobile apps', 'Email support'],
                            },
                            {
                                title: 'Per-Policy',
                                price: 'Custom',
                                description: 'Transaction-based pricing per policy',
                                features: ['Pay per policy issued', 'No user limits', 'API access', 'Priority support'],
                                popular: true,
                            },
                            {
                                title: 'Enterprise',
                                price: 'Custom',
                                description: 'Custom deployment and pricing',
                                features: ['On-premise option', 'Dedicated support', 'Custom integrations', 'SLA guarantee'],
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-2xl' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{plan.price}</div>
                                <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact?type=nizsoft-quote"
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
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
            <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        See Nizsoft in Action
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a personalized demo to see how Nizsoft can transform your insurance operations
                    </p>
                    <Link href="/contact?type=nizsoft-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
