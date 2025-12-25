import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'CRM - Customer Relationship Management',
    description:
        'Complete CRM with sales pipeline, customer support, marketing automation, and analytics. Email, WhatsApp, and telephony integration. Mobile apps for iOS and Android.',
    keywords: [
        'CRM software',
        'sales pipeline',
        'customer support',
        'marketing automation',
        'CRM UAE',
        'WhatsApp CRM',
    ],
})

const modules = [
    {
        title: 'Lead Management',
        features: ['Lead capture', 'Lead scoring', 'Auto-assignment', 'Lead nurturing'],
    },
    {
        title: 'Sales Pipeline',
        features: ['Visual pipeline', 'Deal tracking', 'Sales forecasting', 'Win/loss analysis'],
    },
    {
        title: 'Customer Support',
        features: ['Ticket management', 'SLA tracking', 'Knowledge base', 'Customer portal'],
    },
    {
        title: 'Marketing Automation',
        features: ['Email campaigns', 'Drip sequences', 'Landing pages', 'Campaign analytics'],
    },
    {
        title: 'Contact Management',
        features: ['360° customer view', 'Interaction history', 'Custom fields', 'Segmentation'],
    },
    {
        title: 'Analytics & Reports',
        features: ['Sales dashboards', 'Performance metrics', 'Custom reports', 'Forecasting'],
    },
]

const integrations = [
    { name: 'Email', desc: 'Gmail, Outlook, SMTP' },
    { name: 'WhatsApp', desc: 'WhatsApp Business API' },
    { name: 'Telephony', desc: 'VoIP, call tracking' },
    { name: 'Calendar', desc: 'Google Calendar, Outlook' },
    { name: 'Accounting', desc: 'QuickBooks, Xero' },
    { name: 'E-commerce', desc: 'Shopify, WooCommerce' },
]

export default function CRMPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                            <ChartBarIcon className="w-5 h-5 text-indigo-400 mr-2" />
                            <span className="text-indigo-400 text-sm font-semibold">Customer Relationship Management</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            All-in-One CRM Platform
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Manage your entire customer lifecycle from lead to loyalty. Sales pipeline, customer
                            support, marketing automation, and analytics in one unified platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=crm-demo" className="btn-primary">
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
                            Why Choose Our CRM?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built for modern sales and support teams
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'WhatsApp Integration', desc: 'Native WhatsApp Business API' },
                            { title: 'Mobile Apps', desc: 'iOS & Android for sales teams' },
                            { title: 'Email Tracking', desc: 'Track opens, clicks, replies' },
                            { title: 'Sales Automation', desc: 'Automate repetitive tasks' },
                            { title: 'Custom Workflows', desc: 'Build your own processes' },
                            { title: 'Multi-Currency', desc: 'Support global sales' },
                            { title: 'API Access', desc: 'RESTful API for integrations' },
                            { title: 'White-Label', desc: 'Fully customizable branding' },
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
                            CRM Modules
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Complete suite for sales, marketing, and customer support
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modules.map((module, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{module.title}</h3>
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
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Powerful Integrations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Connect with your favorite tools and platforms
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {integrations.map((integration, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{integration.name}</h3>
                                <p className="text-sm text-gray-600">{integration.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sales Pipeline */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                Visual Sales Pipeline
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Drag-and-drop deals through your sales stages. Get real-time visibility into your
                                pipeline and forecast revenue with confidence.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { title: 'Customizable Stages', desc: 'Define your own sales process' },
                                    { title: 'Deal Tracking', desc: 'Track every opportunity from lead to close' },
                                    { title: 'Activity Timeline', desc: 'Complete history of interactions' },
                                    { title: 'Sales Forecasting', desc: 'Predict revenue based on pipeline' },
                                    { title: 'Win/Loss Analysis', desc: 'Learn from closed deals' },
                                    { title: 'Team Collaboration', desc: 'Share notes and mentions' },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircleIcon className="w-6 h-6 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{item.title}</div>
                                            <div className="text-sm text-gray-600">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-enterprise p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Communication Channels</h3>
                            <ul className="space-y-4">
                                {[
                                    { channel: 'Email', desc: 'Send and track emails from CRM' },
                                    { channel: 'WhatsApp', desc: 'Chat with customers via WhatsApp' },
                                    { channel: 'Phone', desc: 'Click-to-call with call logging' },
                                    { channel: 'SMS', desc: 'Bulk SMS campaigns' },
                                    { channel: 'Live Chat', desc: 'Website chat widget' },
                                    { channel: 'Social Media', desc: 'Facebook, LinkedIn integration' },
                                ].map((comm, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircleIcon className="w-6 h-6 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{comm.channel}</div>
                                            <div className="text-sm text-gray-600">{comm.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
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
                            Choose the plan that fits your team size
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: 'Starter',
                                price: '$15',
                                period: '/user/month',
                                description: 'For small sales teams',
                                features: ['Up to 5 users', 'Lead & deal management', 'Email integration', 'Mobile apps', 'Basic reports'],
                            },
                            {
                                name: 'Professional',
                                price: '$35',
                                period: '/user/month',
                                description: 'For growing businesses',
                                features: ['Unlimited users', 'WhatsApp integration', 'Marketing automation', 'Advanced reports', 'API access', 'Priority support'],
                                popular: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                period: '',
                                description: 'For large organizations',
                                features: ['Custom integrations', 'Dedicated support', 'SLA guarantee', 'White-label option', 'On-premise deployment'],
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-600 text-sm">{plan.period}</span>
                                </div>
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
                                    href={`/contact?type=crm-${plan.name.toLowerCase()}`}
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
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
            <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Transform Your Sales Process
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        See how our CRM can help you close more deals and delight customers
                    </p>
                    <Link href="/contact?type=crm-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
