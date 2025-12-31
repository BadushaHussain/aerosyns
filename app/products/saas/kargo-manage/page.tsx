import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { TruckIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Kargo Manage - Cargo & Logistics Management Platform',
    description:
        'End-to-end cargo and logistics management solution for freight forwarding, warehousing, customs clearance, and supply chain operations.',
    keywords: [
        'cargo management',
        'logistics software',
        'freight forwarding',
        'warehouse management',
        'customs clearance',
        'supply chain management',
    ],
})

const useCases = [
    {
        title: 'Freight Forwarding',
        description: 'Streamline international and domestic freight operations',
        documents: ['Shipment tracking', 'Rate management', 'Carrier coordination', 'Documentation'],
    },
    {
        title: 'Warehouse Management',
        description: 'Optimize warehouse operations and inventory control',
        documents: ['Inventory tracking', 'Space optimization', 'Pick & pack', 'Stock management'],
    },
    {
        title: 'Customs Clearance',
        description: 'Simplify customs documentation and compliance',
        documents: ['Customs declarations', 'Duty calculations', 'Compliance tracking', 'Document generation'],
    },
    {
        title: 'Supply Chain',
        description: 'End-to-end visibility across your supply chain',
        documents: ['Order management', 'Vendor coordination', 'Route optimization', 'Performance analytics'],
    },
]

const features = [
    {
        title: 'Shipment Tracking & Tracing',
        description: 'Real-time visibility of cargo movement across all modes',
        items: ['GPS tracking', 'Multi-modal tracking', 'Customer portal', 'Automated updates'],
    },
    {
        title: 'Warehouse Management',
        description: 'Complete warehouse operations and inventory control',
        items: ['Bin location management', 'Barcode scanning', 'Stock alerts', 'Cycle counting'],
    },
    {
        title: 'Customs Documentation',
        description: 'Automated customs clearance and compliance',
        items: ['Auto document generation', 'HS code management', 'Duty calculation', 'Compliance checks'],
    },
    {
        title: 'Fleet & Route Optimization',
        description: 'Optimize delivery routes and fleet utilization',
        items: ['Route planning', 'Load optimization', 'Driver management', 'Fuel tracking'],
    },
    {
        title: 'Rate Management',
        description: 'Comprehensive pricing and quotation system',
        items: ['Multi-currency support', 'Rate cards', 'Auto quotations', 'Margin analysis'],
    },
    {
        title: 'Reports & Analytics',
        description: 'Powerful insights into your logistics operations',
        items: ['Performance dashboards', 'Revenue reports', 'Shipment analytics', 'Custom reports'],
    },
]

export default function KargoManagePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                            <TruckIcon className="w-5 h-5 text-teal-400 mr-2" />
                            <span className="text-teal-400 text-sm font-semibold">Cargo & Logistics</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Kargo Manage Platform
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Complete cargo and logistics management solution for freight forwarders, 3PLs, and supply chain operators.
                            Streamline operations from booking to delivery with real-time tracking and automated workflows.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=kargo-demo" className="btn-primary">
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
                            Kargo Manage adapts to your specific logistics and supply chain needs
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
                                    <div className="text-sm font-semibold text-gray-900 mb-3">Key Capabilities:</div>
                                    {useCase.documents.map((doc, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-teal-500 mr-2" />
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
                            Everything you need for comprehensive cargo and logistics management
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
                                            <CheckCircleIcon className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
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
                            How Kargo Manage Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple 4-step process to streamline your logistics operations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Create Shipment', desc: 'Book and document cargo details' },
                            { step: '2', title: 'Track Movement', desc: 'Real-time tracking across modes' },
                            { step: '3', title: 'Manage Customs', desc: 'Automated clearance documentation' },
                            { step: '4', title: 'Deliver & Invoice', desc: 'Proof of delivery and billing' },
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl font-bold">
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
                            Choose the plan that fits your logistics operation
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: 'Starter',
                                price: '$99',
                                period: '/month',
                                description: 'Perfect for small freight forwarders',
                                features: ['Up to 100 shipments/month', '3 users', 'Basic tracking', 'Email support'],
                            },
                            {
                                name: 'Professional',
                                price: '$299',
                                period: '/month',
                                description: 'For growing logistics companies',
                                features: ['Up to 500 shipments/month', '10 users', 'Advanced tracking', 'Customs integration', 'API access'],
                                popular: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                period: '',
                                description: 'For large 3PL operations',
                                features: ['Unlimited shipments', 'Unlimited users', 'Multi-warehouse', 'Dedicated support', 'Custom integrations'],
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${plan.popular ? 'ring-2 ring-teal-500 shadow-2xl' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-teal-600 text-white text-sm font-semibold">
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
                                            <CheckCircleIcon className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/contact?type=kargo-${plan.name.toLowerCase()}`}
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                        ? 'bg-teal-600 text-white hover:bg-teal-700'
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
            <section className="section-padding bg-gradient-to-br from-teal-600 to-cyan-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Transform Your Logistics Operations Today
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join leading freight forwarders and 3PLs using Kargo Manage to streamline operations
                    </p>
                    <Link href="/contact?type=kargo-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-teal-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Start Free Trial
                    </Link>
                </div>
            </section>
        </>
    )
}
