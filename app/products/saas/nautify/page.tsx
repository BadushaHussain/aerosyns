import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { BellAlertIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Nautify - Document Expiry & Compliance Platform',
    description:
        'Automated document expiry tracking with multi-channel notifications. Perfect for insurance, HR, fleet management, immigration, and licensing compliance.',
    keywords: [
        'document expiry tracking',
        'compliance management',
        'document management UAE',
        'expiry notifications',
        'compliance software',
    ],
})

const useCases = [
    {
        title: 'Insurance',
        description: 'Track policy documents, licenses, and regulatory compliance',
        documents: ['Insurance policies', 'Agent licenses', 'Regulatory filings', 'Certificates'],
    },
    {
        title: 'Human Resources',
        description: 'Monitor employee documents and certifications',
        documents: ['Work permits', 'Visas', 'Passports', 'Professional certifications'],
    },
    {
        title: 'Fleet Management',
        description: 'Manage vehicle and driver documentation',
        documents: ['Vehicle registration', 'Insurance', 'Driver licenses', 'Inspection certificates'],
    },
    {
        title: 'Immigration',
        description: 'Track visa and permit expiries',
        documents: ['Visas', 'Work permits', 'Residence permits', 'Travel documents'],
    },
]

const features = [
    {
        title: 'Document Upload & Storage',
        description: 'Secure cloud storage with OCR and metadata extraction',
        items: ['Drag-and-drop upload', 'OCR text extraction', 'Automatic categorization', 'Version control'],
    },
    {
        title: 'Expiry Tracking',
        description: 'Automated tracking with configurable alert timelines',
        items: ['Custom alert schedules', 'Multi-level reminders', 'Grace period management', 'Bulk tracking'],
    },
    {
        title: 'Multi-Channel Notifications',
        description: 'Reach stakeholders through their preferred channels',
        items: ['Email notifications', 'SMS alerts', 'WhatsApp messages', 'In-app notifications'],
    },
    {
        title: 'Compliance Dashboards',
        description: 'Real-time visibility into compliance status',
        items: ['Expiry calendar', 'Risk indicators', 'Compliance reports', 'Audit trails'],
    },
    {
        title: 'Escalation Workflows',
        description: 'Automated escalation for overdue documents',
        items: ['Multi-level escalation', 'Manager notifications', 'Auto-assignment', 'SLA tracking'],
    },
    {
        title: 'Reports & Analytics',
        description: 'Comprehensive reporting and compliance analytics',
        items: ['Compliance reports', 'Expiry forecasts', 'Department analytics', 'Export to Excel/PDF'],
    },
]

export default function NautifyPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                            <BellAlertIcon className="w-5 h-5 text-purple-400 mr-2" />
                            <span className="text-purple-400 text-sm font-semibold">Document Compliance</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Nautify Document Expiry Platform
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Never miss a document expiry again. Automated tracking, multi-channel notifications,
                            and compliance dashboards for insurance, HR, fleet, and immigration documents.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=nautify-demo" className="btn-primary">
                                Request Demo
                            </Link>
                            <Link href="#features" className="btn-secondary">
                                View Features
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Industry Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nautify adapts to your industry's specific document tracking needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {useCase.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{useCase.description}</p>
                                <div className="space-y-2">
                                    <div className="text-sm font-semibold text-gray-900 mb-3">Common Documents:</div>
                                    {useCase.documents.map((doc, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-2" />
                                            {doc}
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
                            Everything you need for comprehensive document compliance management
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
                            How Nautify Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple 4-step process to stay compliant
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Upload Documents', desc: 'Upload documents with expiry dates' },
                            { step: '2', title: 'Set Alerts', desc: 'Configure notification schedules' },
                            { step: '3', title: 'Get Notified', desc: 'Receive timely reminders' },
                            { step: '4', title: 'Stay Compliant', desc: 'Renew before expiry' },
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
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the plan that fits your organization
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: 'Starter',
                                price: '$49',
                                period: '/month',
                                description: 'Perfect for small teams',
                                features: ['Up to 500 documents', '2 users', 'Email notifications', 'Basic reports'],
                            },
                            {
                                name: 'Professional',
                                price: '$149',
                                period: '/month',
                                description: 'For growing organizations',
                                features: ['Up to 5,000 documents', '10 users', 'Multi-channel alerts', 'Advanced reports', 'API access'],
                                popular: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                period: '',
                                description: 'For large organizations',
                                features: ['Unlimited documents', 'Unlimited users', 'Custom integrations', 'Dedicated support', 'SLA guarantee'],
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
                                    href={`/contact?type=nautify-${plan.name.toLowerCase()}`}
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
            <section className="section-padding bg-gradient-to-br from-purple-600 to-pink-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Start Tracking Documents Today
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join hundreds of organizations using Nautify to stay compliant
                    </p>
                    <Link href="/contact?type=nautify-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Start Free Trial
                    </Link>
                </div>
            </section>
        </>
    )
}
