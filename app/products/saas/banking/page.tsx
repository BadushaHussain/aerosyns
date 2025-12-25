import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { BuildingLibraryIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Banking Solutions - Core Banking & Digital Banking Platform',
    description:
        'Complete banking platform with account management, loan processing, digital banking channels, and payment gateway. Cloud-native, secure, and compliance-ready.',
    keywords: [
        'core banking software',
        'digital banking platform',
        'banking solution UAE',
        'loan management system',
        'payment gateway',
    ],
})

const modules = [
    {
        title: 'Account Management',
        description: 'Complete customer account lifecycle management',
        features: [
            'Savings & current accounts',
            'Account opening & KYC',
            'Balance & transaction history',
            'Account statements',
            'Multi-currency support',
            'Account closure workflows',
        ],
    },
    {
        title: 'Loan Processing',
        description: 'End-to-end loan origination and management',
        features: [
            'Loan application & approval',
            'Credit scoring & assessment',
            'Disbursement processing',
            'EMI calculation & scheduling',
            'Loan tracking & monitoring',
            'Collections management',
        ],
    },
    {
        title: 'Digital Banking',
        description: 'Modern digital banking channels for customers',
        features: [
            'Internet banking portal',
            'Mobile banking apps',
            'Fund transfers',
            'Bill payments',
            'Card management',
            'Digital wallet integration',
        ],
    },
    {
        title: 'Payment Gateway',
        description: 'Secure payment processing and settlement',
        features: [
            'Multiple payment methods',
            'Real-time transaction processing',
            'Payment reconciliation',
            'Refund management',
            'Fraud detection',
            'PCI-DSS compliance',
        ],
    },
    {
        title: 'Transaction Monitoring',
        description: 'Real-time transaction tracking and alerts',
        features: [
            'Real-time monitoring',
            'Suspicious activity detection',
            'AML/CFT compliance',
            'Transaction alerts',
            'Audit trail',
            'Reporting dashboards',
        ],
    },
    {
        title: 'Regulatory Compliance',
        description: 'Built-in compliance and reporting tools',
        features: [
            'Central bank reporting',
            'AML/KYC compliance',
            'FATCA & CRS reporting',
            'Audit logs',
            'Regulatory updates',
            'Compliance dashboards',
        ],
    },
]

const integrations = [
    'Payment gateways (Visa, Mastercard, local switches)',
    'SMS & email providers',
    'Credit bureaus',
    'Accounting systems',
    'Core banking systems',
    'Third-party APIs',
]

export default function BankingPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                            <BuildingLibraryIcon className="w-5 h-5 text-indigo-400 mr-2" />
                            <span className="text-indigo-400 text-sm font-semibold">Banking Platform</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Banking Solutions Platform
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Modern, cloud-native banking platform covering core banking, digital channels, loan management,
                            and payment processing. Built for banks, microfinance institutions, and fintech companies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=banking-demo" className="btn-primary">
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
                            Why Choose Our Banking Solutions?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built specifically for modern banking with security and compliance at its core
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'API-First Design', desc: 'RESTful APIs for all operations' },
                            { title: 'Multi-Currency', desc: 'Support for multiple currencies' },
                            { title: 'Compliance Ready', desc: 'AML, KYC, FATCA compliant' },
                            { title: 'Cloud-Native', desc: 'Scalable microservices architecture' },
                            { title: 'Mobile Banking', desc: 'iOS & Android native apps' },
                            { title: 'White-Label', desc: 'Fully customizable branding' },
                            { title: 'Real-Time', desc: 'Instant transactions & updates' },
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
                            Comprehensive modules covering every aspect of banking operations
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

            {/* Integrations */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                Seamless Integrations
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Connect our Banking Solutions with your existing systems through our comprehensive API and
                                pre-built integrations with popular platforms.
                            </p>
                            <ul className="space-y-3">
                                {integrations.map((integration, index) => (
                                    <li key={index} className="flex items-start text-gray-700">
                                        <CheckCircleIcon className="w-6 h-6 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
                                        {integration}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-enterprise p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
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
                                        <span className="text-indigo-600 text-sm">{spec.value}</span>
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
                            Choose the pricing model that works for your institution
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Per-User',
                                price: 'Custom',
                                description: 'Monthly subscription per active user',
                                features: ['All modules included', 'Unlimited transactions', 'Mobile apps', 'Email support'],
                            },
                            {
                                title: 'Per-Transaction',
                                price: 'Custom',
                                description: 'Transaction-based pricing',
                                features: ['Pay per transaction', 'No user limits', 'API access', 'Priority support'],
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
                                className={`card-enterprise p-8 relative ${plan.popular ? 'ring-2 ring-indigo-500 shadow-2xl' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-600 text-white text-sm font-semibold">
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
                                            <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact?type=banking-quote"
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
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

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        See Banking Solutions in Action
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a personalized demo to see how our Banking Solutions can transform your financial operations
                    </p>
                    <Link href="/contact?type=banking-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
