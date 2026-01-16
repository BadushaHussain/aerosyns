import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'CRM - Customer Relationship Management Platform',
    description:
        'Complete CRM solution for sales pipeline management, customer support, marketing automation, and analytics. Streamline your customer relationships with our enterprise-grade platform.',
    keywords: [
        'CRM software',
        'customer relationship management',
        'sales pipeline',
        'customer support',
        'marketing automation',
        'sales CRM UAE',
    ],
})

const useCases = [
    {
        title: 'Sales Teams',
        description: 'Manage leads, opportunities, and close more deals',
        capabilities: ['Lead management', 'Pipeline tracking', 'Sales forecasting', 'Quote generation'],
    },
    {
        title: 'Customer Support',
        description: 'Deliver exceptional customer service and support',
        capabilities: ['Ticket management', 'Knowledge base', 'SLA tracking', 'Customer portal'],
    },
    {
        title: 'Marketing Teams',
        description: 'Execute targeted campaigns and track ROI',
        capabilities: ['Email campaigns', 'Lead nurturing', 'Campaign analytics', 'Marketing automation'],
    },
    {
        title: 'Account Management',
        description: 'Build stronger customer relationships',
        capabilities: ['Account hierarchy', 'Contact management', 'Activity tracking', '360° customer view'],
    },
]

const features = [
    {
        title: 'Lead & Pipeline Management',
        description: 'Capture, qualify, and convert leads efficiently',
        items: ['Lead capture forms', 'Lead scoring', 'Pipeline stages', 'Deal tracking'],
    },
    {
        title: 'Customer Support Ticketing',
        description: 'Resolve customer issues faster',
        items: ['Multi-channel tickets', 'Auto-assignment', 'SLA management', 'Customer satisfaction'],
    },
    {
        title: 'Email & WhatsApp Integration',
        description: 'Communicate with customers on their preferred channels',
        items: ['Email templates', 'WhatsApp messaging', 'SMS notifications', 'Chat integration'],
    },
    {
        title: 'Sales Automation',
        description: 'Automate repetitive tasks and workflows',
        items: ['Workflow automation', 'Task reminders', 'Follow-up sequences', 'Auto-assignment rules'],
    },
    {
        title: 'Analytics & Forecasting',
        description: 'Make data-driven decisions with powerful insights',
        items: ['Sales dashboards', 'Revenue forecasting', 'Performance metrics', 'Custom reports'],
    },
    {
        title: 'Mobile Apps',
        description: 'Access your CRM on the go',
        items: ['iOS & Android apps', 'Offline mode', 'Mobile notifications', 'Quick actions'],
    },
]

export default function CRMPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                            <ChartBarIcon className="w-5 h-5 text-indigo-400 mr-2" />
                            <span className="text-indigo-400 text-sm font-semibold">Customer Relationship Management</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            CRM Platform
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            All-in-one customer relationship management platform for sales, support, and marketing teams.
                            Manage your entire customer lifecycle from lead to loyal customer with powerful automation and insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=crm-demo" className="btn-primary">
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
                            Built for Every Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Empower your sales, support, marketing, and account management teams
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
                                    {useCase.capabilities.map((capability, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-2" />
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
                            Everything you need to manage customer relationships effectively
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
                                            <CheckCircleIcon className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
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
                            How Our CRM Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple 4-step process to transform your customer relationships
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Capture Leads', desc: 'Collect leads from multiple channels' },
                            { step: '2', title: 'Nurture & Qualify', desc: 'Engage and score leads automatically' },
                            { step: '3', title: 'Convert to Sales', desc: 'Close deals with pipeline tracking' },
                            { step: '4', title: 'Support & Retain', desc: 'Deliver exceptional customer service' },
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-sm text-gray-600">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Start Growing Your Business Today
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join thousands of businesses using our CRM to close more deals and delight customers
                    </p>
                    <Link href="/contact?type=crm-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Start Free Trial
                    </Link>
                </div>
            </section>
        </>
    )
}
