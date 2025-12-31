import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { GlobeAltIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Banking Solutions - Core Banking & Digital Banking Platform',
    description:
        'Complete banking platform with core banking, digital banking channels, loan processing, and payment gateway integration. Built for banks, microfinance, and financial institutions.',
    keywords: [
        'core banking software',
        'digital banking',
        'banking platform',
        'loan management system',
        'payment gateway',
        'banking software UAE',
    ],
})

const modules = [
    {
        title: 'Core Banking',
        description: 'Complete account and transaction management',
        capabilities: ['Account management', 'Transaction processing', 'GL accounting', 'Multi-currency support'],
    },
    {
        title: 'Loan Management',
        description: 'End-to-end loan lifecycle management',
        capabilities: ['Loan origination', 'Credit scoring', 'Repayment schedules', 'Collections management'],
    },
    {
        title: 'Digital Banking',
        description: 'Omnichannel digital banking experience',
        capabilities: ['Internet banking', 'Mobile banking', 'ATM integration', 'Card management'],
    },
    {
        title: 'Payment Gateway',
        description: 'Secure payment processing and integration',
        capabilities: ['Online payments', 'Bill payments', 'Fund transfers', 'Payment reconciliation'],
    },
]

const features = [
    {
        title: 'Account Management',
        description: 'Comprehensive account operations and services',
        items: ['Savings accounts', 'Current accounts', 'Fixed deposits', 'Recurring deposits'],
    },
    {
        title: 'Loan Processing',
        description: 'Streamlined loan origination and servicing',
        items: ['Personal loans', 'Business loans', 'Auto approval', 'EMI calculations'],
    },
    {
        title: 'Digital Banking Channels',
        description: 'Multi-channel banking experience',
        items: ['Web banking', 'Mobile apps', 'USSD banking', 'WhatsApp banking'],
    },
    {
        title: 'Payment Gateway Integration',
        description: 'Secure and compliant payment processing',
        items: ['Card payments', 'UPI integration', 'Wallet integration', 'QR code payments'],
    },
    {
        title: 'Transaction Monitoring',
        description: 'Real-time fraud detection and compliance',
        items: ['AML screening', 'Fraud detection', 'Transaction alerts', 'Suspicious activity reports'],
    },
    {
        title: 'Regulatory Compliance',
        description: 'Built-in compliance and reporting',
        items: ['KYC management', 'AML compliance', 'Regulatory reports', 'Audit trails'],
    },
]

export default function BankingPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                            <GlobeAltIcon className="w-5 h-5 text-purple-400 mr-2" />
                            <span className="text-purple-400 text-sm font-semibold">Banking Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Core Banking & Digital Banking Platform
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Complete banking solution for banks, microfinance institutions, and credit unions.
                            Manage accounts, loans, deposits, and digital banking channels with our enterprise-grade platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=banking-demo" className="btn-primary">
                                Request Demo
                            </Link>
                            <Link href="#features" className="btn-secondary">
                                View Features
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Comprehensive Banking Modules
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to run a modern banking operation
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {modules.map((module, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {module.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{module.description}</p>
                                <div className="space-y-2">
                                    <div className="text-sm font-semibold text-gray-900 mb-3">Key Capabilities:</div>
                                    {module.capabilities.map((capability, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-2" />
                                            {capability}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Powerful Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade banking features for modern financial institutions
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple 4-step process to transform your banking operations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Customer Onboarding', desc: 'KYC verification and account opening' },
                            { step: '2', title: 'Account Services', desc: 'Deposits, withdrawals, and transfers' },
                            { step: '3', title: 'Loan Processing', desc: 'Credit assessment and disbursement' },
                            { step: '4', title: 'Digital Banking', desc: 'Multi-channel customer access' },
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-sm text-gray-600">{phase.desc}</p>
                            </div>
                        ))}
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
                            Choose the deployment model that fits your institution
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: 'Cloud',
                                price: '$2,999',
                                period: '/month',
                                description: 'SaaS deployment on secure cloud',
                                features: ['Up to 10,000 accounts', 'Standard modules', 'Email support', 'Monthly updates', '99.9% uptime SLA'],
                            },
                            {
                                name: 'Hybrid',
                                price: '$5,999',
                                period: '/month',
                                description: 'Private cloud with custom features',
                                features: ['Up to 50,000 accounts', 'All modules', 'Priority support', 'Custom integrations', 'Dedicated instance'],
                                popular: true,
                            },
                            {
                                name: 'On-Premise',
                                price: 'Custom',
                                period: '',
                                description: 'Full on-premise deployment',
                                features: ['Unlimited accounts', 'Source code access', '24/7 support', 'Custom development', 'Complete data sovereignty'],
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 shadow-2xl' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-purple-600 text-white text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-600">{plan.period}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/contact?type=banking-${plan.name.toLowerCase()}`}
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                        ? 'bg-purple-600 text-white hover:bg-purple-700'
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

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-purple-600 to-indigo-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Transform Your Banking Operations Today
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join leading financial institutions using our banking platform
                    </p>
                    <Link href="/contact?type=banking-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Schedule Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
