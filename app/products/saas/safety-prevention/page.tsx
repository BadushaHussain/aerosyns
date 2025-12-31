import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { ShieldCheckIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Safety Prevention Platform - Unified Safety Management System',
    description:
        'Comprehensive safety management platform for Railway, Airport, and Seaport operations. 100+ integrated modules for compliance, incident management, risk assessment, and analytics.',
    keywords: [
        'safety management system',
        'railway safety',
        'airport safety',
        'maritime safety',
        'ICAO SMS',
        'IMO compliance',
        'safety compliance',
    ],
})

const industries = [
    {
        title: 'Railway Safety',
        subtitle: 'SafeInn Rail',
        description: 'Comprehensive railway safety platform with 32 integrated modules',
        modules: '32+ Modules',
        features: [
            'Incident & accident management',
            'Risk assessment & CAPA',
            'Real-time track monitoring',
            'Predictive maintenance',
            'Safety inspections & audits',
            'Compliance reporting',
        ],
        color: 'from-red-500 to-red-600',
        link: '/products/saas/safeinn-rail',
    },
    {
        title: 'Airport Safety',
        subtitle: 'SafeInn Airport',
        description: 'ICAO SMS-compliant aviation safety platform with 35+ modules',
        modules: '35+ Modules',
        features: [
            'Airside operations safety',
            'ICAO Annex 14 compliance',
            'Emergency response management',
            'Wildlife hazard tracking',
            'Runway & taxiway safety',
            'Aviation analytics & AI',
        ],
        color: 'from-blue-500 to-blue-600',
        link: '/products/saas/safeinn-airport',
    },
    {
        title: 'Maritime Safety',
        subtitle: 'SafeInn Seaport',
        description: 'IMO & ISPS-compliant maritime safety platform with 38+ modules',
        modules: '38+ Modules',
        features: [
            'Vessel & marine operations',
            'IMO & ISPS compliance',
            'Cargo handling safety',
            'Port security management',
            'Oil spill response',
            'Maritime analytics & AI',
        ],
        color: 'from-cyan-500 to-cyan-600',
        link: '/products/saas/safeinn-seaport',
    },
]

const coreFeatures = [
    {
        title: 'Incident Management',
        description: 'Comprehensive incident tracking, investigation, and root cause analysis',
        items: ['Incident reporting', 'Investigation workflows', 'Root cause analysis', 'CAPA management'],
    },
    {
        title: 'Risk Assessment',
        description: 'Proactive risk identification and mitigation strategies',
        items: ['Risk registers', 'Hazard identification', 'Risk matrix', 'Mitigation tracking'],
    },
    {
        title: 'Compliance Management',
        description: 'Stay compliant with industry regulations and standards',
        items: ['Regulatory tracking', 'Audit management', 'Document control', 'Compliance dashboards'],
    },
    {
        title: 'Safety Inspections',
        description: 'Digital checklists and mobile inspection capabilities',
        items: ['Mobile inspections', 'Photo documentation', 'Offline mode', 'Auto-scoring'],
    },
    {
        title: 'Analytics & Reporting',
        description: 'Powerful insights with AI-driven analytics',
        items: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Trend analysis'],
    },
    {
        title: 'Emergency Response',
        description: 'Coordinated emergency management and response',
        items: ['Emergency plans', 'Drill management', 'Resource allocation', 'Communication tools'],
    },
]

export default function SafetyPreventionPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                            <ShieldCheckIcon className="w-5 h-5 text-red-400 mr-2" />
                            <span className="text-red-400 text-sm font-semibold">Safety Management</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Safety Prevention Platform
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Unified safety management system for Railway, Airport, and Seaport operations.
                            100+ integrated modules for compliance, incident management, risk assessment, and analytics.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?type=safety-demo" className="btn-primary">
                                Request Demo
                            </Link>
                            <Link href="#industries" className="btn-secondary">
                                View Industries
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section id="industries" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Industry-Specific Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Tailored safety management for Railway, Airport, and Maritime operations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} mb-6`}>
                                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                                </div>
                                <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700 mb-3">
                                    {industry.modules}
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                                    {industry.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-semibold mb-3">{industry.subtitle}</p>
                                <p className="text-gray-600 mb-6">{industry.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {industry.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={industry.link}
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold bg-gradient-to-r ${industry.color} text-white hover:shadow-lg transition-all`}
                                >
                                    Learn More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Core Safety Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive features across all safety domains
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreFeatures.map((feature, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Why Choose Safety Prevention?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Proven benefits across industries
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { stat: '100+', label: 'Integrated Modules' },
                            { stat: '99.9%', label: 'System Uptime' },
                            { stat: '50+', label: 'Enterprise Clients' },
                            { stat: '24/7', label: 'Support Available' },
                        ].map((item, index) => (
                            <div key={index} className="card-enterprise p-8 text-center">
                                <div className="text-4xl font-bold text-red-600 mb-2">{item.stat}</div>
                                <div className="text-sm text-gray-600 font-medium">{item.label}</div>
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
                            Choose the plan that fits your organization
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: 'Single Domain',
                                price: '$499',
                                period: '/month',
                                description: 'For one industry (Rail, Airport, or Seaport)',
                                features: ['One industry module', '5 users', 'Standard support', 'Mobile apps', 'Basic analytics'],
                            },
                            {
                                name: 'Multi-Domain',
                                price: '$1,299',
                                period: '/month',
                                description: 'For multiple industries',
                                features: ['All industry modules', '20 users', 'Priority support', 'Advanced analytics', 'API access', 'Custom integrations'],
                                popular: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                period: '',
                                description: 'For large organizations',
                                features: ['Unlimited users', 'Dedicated support', 'On-premise deployment', 'Custom development', 'SLA guarantee', 'Training & onboarding'],
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${plan.popular ? 'ring-2 ring-red-500 shadow-2xl' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-red-600 text-white text-sm font-semibold">
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
                                            <CheckCircleIcon className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/contact?type=safety-${plan.name.toLowerCase()}`}
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                        ? 'bg-red-600 text-white hover:bg-red-700'
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
            <section className="section-padding bg-gradient-to-br from-red-600 to-orange-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Transform Your Safety Operations Today
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join leading organizations using Safety Prevention to enhance safety and compliance
                    </p>
                    <Link href="/contact?type=safety-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-red-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Schedule Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
