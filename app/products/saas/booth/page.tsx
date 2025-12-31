import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Booth - Cloud Call Center & Contact Center Platform',
    description:
        'Complete cloud-based call center solution with IVR, call routing, recording, analytics, and CRM integration. Built for customer support teams and contact centers.',
    keywords: [
        'call center software',
        'contact center platform',
        'cloud call center',
        'IVR system',
        'call recording',
        'call center UAE',
    ],
})

const useCases = [
    {
        title: 'Customer Support',
        description: 'Deliver exceptional customer service with intelligent routing',
        capabilities: ['Inbound call handling', 'Ticket integration', 'Call recording', 'Quality monitoring'],
    },
    {
        title: 'Sales Teams',
        description: 'Boost sales productivity with outbound calling',
        capabilities: ['Auto dialer', 'Lead management', 'Call scripts', 'Performance tracking'],
    },
    {
        title: 'Help Desk',
        description: 'Streamline technical support operations',
        capabilities: ['Multi-level IVR', 'Skill-based routing', 'Screen recording', 'Knowledge base'],
    },
    {
        title: 'Collections',
        description: 'Optimize debt collection campaigns',
        capabilities: ['Predictive dialer', 'Payment integration', 'Compliance tracking', 'Campaign management'],
    },
]

const features = [
    {
        title: 'Interactive Voice Response (IVR)',
        description: 'Multi-level IVR with voice recognition and self-service',
        items: ['Multi-level menus', 'Voice recognition', 'Text-to-speech', 'Custom greetings'],
    },
    {
        title: 'Intelligent Call Routing',
        description: 'Route calls to the right agent every time',
        items: ['Skill-based routing', 'Round-robin', 'Priority routing', 'Time-based routing'],
    },
    {
        title: 'Call Recording & Monitoring',
        description: 'Record, monitor, and analyze all interactions',
        items: ['Automatic recording', 'Call monitoring', 'Call whisper', 'Quality scoring'],
    },
    {
        title: 'Real-time Analytics',
        description: 'Monitor performance with live dashboards',
        items: ['Live dashboards', 'Agent performance', 'Queue metrics', 'Call analytics'],
    },
    {
        title: 'CRM Integration',
        description: 'Seamless integration with popular CRM systems',
        items: ['Screen pop', 'Click-to-dial', 'Call logging', 'Contact sync'],
    },
    {
        title: 'Omnichannel Support',
        description: 'Handle voice, email, chat, and social media',
        items: ['Voice calls', 'Email tickets', 'Live chat', 'WhatsApp integration'],
    },
]

export default function BoothPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                            <PhoneIcon className="w-5 h-5 text-green-400 mr-2" />
                            <span className="text-green-400 text-sm font-semibold">Call Center Platform</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Booth Call Center Platform
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Cloud-based call center solution for customer support, sales, and help desk teams.
                            Handle inbound and outbound calls with intelligent routing, IVR, recording, and real-time analytics.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=booth-demo" className="btn-primary">
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
                            Built for Every Contact Center
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Empower your customer support, sales, help desk, and collections teams
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
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
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
                            Everything you need to run a modern call center
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
                                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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
                            How Booth Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple 4-step process to transform your call center operations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Setup IVR', desc: 'Configure call flows and menus' },
                            { step: '2', title: 'Add Agents', desc: 'Onboard team with skills and routing' },
                            { step: '3', title: 'Route Calls', desc: 'Intelligent routing to right agent' },
                            { step: '4', title: 'Analyze & Improve', desc: 'Monitor metrics and optimize' },
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
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
                            Choose the plan that fits your call center size
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: 'Starter',
                                price: '$19',
                                period: '/agent/month',
                                description: 'Perfect for small teams',
                                features: ['Up to 10 agents', 'Basic IVR', 'Call recording', 'Email support', 'Basic analytics'],
                            },
                            {
                                name: 'Professional',
                                price: '$39',
                                period: '/agent/month',
                                description: 'For growing call centers',
                                features: ['Up to 50 agents', 'Advanced IVR', 'Call monitoring', 'CRM integration', 'Real-time analytics', 'Priority support'],
                                popular: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                period: '',
                                description: 'For large contact centers',
                                features: ['Unlimited agents', 'Custom integrations', 'Dedicated support', 'Advanced security', 'SLA guarantee', 'Custom development'],
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${plan.popular ? 'ring-2 ring-green-500 shadow-2xl' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-green-600 text-white text-sm font-semibold">
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
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/contact?type=booth-${plan.name.toLowerCase()}`}
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                        ? 'bg-green-600 text-white hover:bg-green-700'
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
            <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Transform Your Call Center Today
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join leading contact centers using Booth to deliver exceptional customer experiences
                    </p>
                    <Link href="/contact?type=booth-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-green-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Start Free Trial
                    </Link>
                </div>
            </section>
        </>
    )
}
