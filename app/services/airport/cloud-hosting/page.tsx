import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaCloud, FaDatabase, FaShieldAlt, FaSync } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Airport Cloud & Hosting Services - Private Cloud, DR, Backup',
    description:
        'Enterprise cloud and hosting services for airports. Private cloud infrastructure, disaster recovery, backup solutions, and 99.99% SLA.',
    keywords: [
        'airport cloud',
        'private cloud',
        'disaster recovery',
        'backup services',
        'high availability',
        'airport hosting',
    ],
})

const cloudServices = [
    {
        title: 'Private Cloud Infrastructure',
        icon: FaCloud,
        description: 'Dedicated cloud infrastructure for airport operations',
        features: [
            'Dedicated compute & storage',
            'VMware/Hyper-V virtualization',
            'Software-defined networking',
            'Self-service portal',
            'Auto-scaling',
            'Resource metering',
        ],
        benefits: ['Full control', 'Enhanced security', 'Compliance', 'Performance'],
    },
    {
        title: 'Disaster Recovery (DR)',
        icon: FaSync,
        description: 'Business continuity with automated failover',
        features: [
            'Hot/warm/cold DR sites',
            'Automated failover',
            'Regular DR testing',
            'RPO: 15 minutes',
            'RTO: 1 hour',
            'Runbook automation',
        ],
        benefits: ['Business continuity', 'Minimal downtime', 'Data protection'],
    },
    {
        title: 'Backup & Archival',
        icon: FaDatabase,
        description: 'Comprehensive backup and long-term archival',
        features: [
            'Automated daily backups',
            'Incremental & full backups',
            'Long-term archival',
            'Point-in-time recovery',
            'Backup encryption',
            'Retention policies',
        ],
        benefits: ['Data protection', 'Compliance', 'Quick recovery'],
    },
    {
        title: 'High Availability (HA)',
        icon: FaShieldAlt,
        description: '99.99% uptime with redundant architecture',
        features: [
            'Redundant infrastructure',
            'Load balancing',
            'Automatic failover',
            'Health monitoring',
            'Zero-downtime maintenance',
            'SLA guarantee',
        ],
        benefits: ['99.99% uptime', 'No single point of failure', 'Reliability'],
    },
]

const hostingOptions = [
    {
        name: 'On-Premise Private Cloud',
        description: 'Dedicated infrastructure at airport premises',
        features: [
            'Full data sovereignty',
            'Low latency',
            'Complete control',
            'Customizable',
            'Compliance-ready',
        ],
        useCase: 'Core operational systems requiring data residency',
    },
    {
        name: 'Colocation',
        description: 'Hosted in our Tier III data center',
        features: [
            'Tier III facility',
            '99.99% uptime',
            'Physical security',
            'Redundant power & cooling',
            'Managed services',
        ],
        useCase: 'Balance of control and managed infrastructure',
    },
    {
        name: 'Hybrid Cloud',
        description: 'On-premise + cloud for flexibility',
        features: [
            'Best of both worlds',
            'Cloud bursting',
            'Unified management',
            'Cost optimization',
            'Scalability',
        ],
        useCase: 'Variable workloads with peak demand',
    },
]

const backupSolutions = [
    {
        tier: 'Bronze',
        rpo: '24 hours',
        rto: '24 hours',
        retention: '30 days',
        features: ['Daily backups', 'Local storage', 'Email notifications'],
    },
    {
        tier: 'Silver',
        rpo: '4 hours',
        rto: '4 hours',
        retention: '90 days',
        features: ['4x daily backups', 'Offsite replication', 'Monthly DR tests'],
        popular: true,
    },
    {
        tier: 'Gold',
        rpo: '15 minutes',
        rto: '1 hour',
        retention: '1 year',
        features: ['Continuous replication', 'Hot DR site', 'Quarterly DR tests', 'Dedicated support'],
    },
]

const slaCommitments = [
    { metric: 'Uptime', commitment: '99.99%' },
    { metric: 'Network Availability', commitment: '99.95%' },
    { metric: 'Support Response', commitment: '15 minutes' },
    { metric: 'Backup Success Rate', commitment: '99.9%' },
    { metric: 'DR Failover Time', commitment: '< 1 hour' },
    { metric: 'Data Recovery', commitment: '100%' },
]

export default function CloudHostingPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/airport" className="inline-flex items-center text-pink-400 hover:text-pink-300 mb-4 text-sm">
                            ← Back to Airport Services
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                            <FaCloud className="w-5 h-5 text-pink-400 mr-2" />
                            <span className="text-pink-400 text-sm font-semibold">Cloud & Hosting</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Airport Cloud & Hosting Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Enterprise-grade cloud and hosting services for mission-critical airport systems.
                            Private cloud infrastructure, disaster recovery, backup solutions, and 99.99% SLA guarantee.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=cloud-hosting" className="btn-primary">
                                Request Consultation
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cloud Services */}
            <section id="services" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cloud & Hosting Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive cloud infrastructure for airport operations
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {cloudServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600">
                                                <CheckCircleIcon className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.benefits.map((benefit, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hosting Options */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Hosting Options
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible deployment models to meet your requirements
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {hostingOptions.map((option, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                                <div className="mb-4">
                                    <ul className="space-y-2">
                                        {option.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-gray-700">{option.useCase}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Backup Tiers */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Backup & DR Tiers
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the right level of data protection
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {backupSolutions.map((solution, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${solution.popular ? 'ring-2 ring-pink-500 shadow-2xl' : ''}`}
                            >
                                {solution.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-pink-600 text-white text-sm font-semibold">
                                            Recommended
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.tier}</h3>
                                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">RPO:</span>
                                        <span className="text-sm font-bold text-pink-600">{solution.rpo}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">RTO:</span>
                                        <span className="text-sm font-bold text-pink-600">{solution.rto}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Retention:</span>
                                        <span className="text-sm font-bold text-pink-600">{solution.retention}</span>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLA Commitments */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our SLA Commitments
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Industry-leading service level agreements
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {slaCommitments.map((sla, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="text-3xl font-bold text-pink-600 mb-2">{sla.commitment}</div>
                                <div className="text-sm text-gray-600">{sla.metric}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-pink-600 to-purple-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Secure, Reliable Cloud Infrastructure
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's design the perfect cloud and hosting solution for your airport
                    </p>
                    <Link href="/contact?type=cloud-hosting" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-pink-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
