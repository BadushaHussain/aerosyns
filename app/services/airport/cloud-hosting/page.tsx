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

const dataCenterSpecs = {
    tier: 'Tier III Certified',
    uptime: '99.982% design availability',
    power: 'N+1 redundant UPS, Diesel generators with 72-hour fuel',
    cooling: 'N+1 precision cooling, Hot/cold aisle containment',
    connectivity: 'Multiple fiber paths, 4+ ISP redundancy, 100 Gbps backbone',
    security: 'Biometric access, 24/7 guards, CCTV, Mantrap, Vehicle barriers',
    locations: ['Abu Dhabi Data Center', 'Dubai Internet City', 'Sharjah Airport Zone'],
    certifications: ['ISO 27001', 'ISO 9001', 'Tier III Design'],
}

const airportCompliance = [
    {
        standard: 'ICAO Annex 17',
        description: 'Aviation Security',
        requirements: ['Access control', 'Security screening', 'Incident reporting', 'Audit trails'],
    },
    {
        standard: 'AVSEC Requirements',
        description: 'Aviation Security Standards',
        requirements: ['Personnel screening', 'Cargo security', 'Restricted area access', 'Security training'],
    },
    {
        standard: 'Data Sovereignty',
        description: 'UAE Data Protection',
        requirements: ['Data residency in UAE', 'No cross-border transfers', 'Local encryption keys', 'Compliance audits'],
    },
    {
        standard: 'ISO 27001',
        description: 'Information Security',
        requirements: ['Risk assessment', 'Security controls', 'Incident management', 'Continuous monitoring'],
    },
]

const performanceMetrics = [
    { metric: 'Actual Uptime (2024)', value: '99.997%', trend: 'up' },
    { metric: 'Average Response Time', value: '< 50ms', trend: 'stable' },
    { metric: 'Backup Success Rate', value: '99.98%', trend: 'up' },
    { metric: 'DR Test Success', value: '100%', trend: 'stable' },
    { metric: 'Customer Satisfaction', value: '4.9/5', trend: 'up' },
    { metric: 'Mean Time to Repair', value: '< 2 hours', trend: 'down' },
]

const airportIntegrations = [
    {
        system: 'AODB (Airport Operational Database)',
        description: 'Real-time operational data synchronization',
        features: ['Flight schedule updates', 'Resource allocation', 'Stand management', 'Gate assignments'],
        benefits: ['Real-time accuracy', 'Automated workflows', 'Reduced manual errors'],
    },
    {
        system: 'FIDS (Flight Information Display)',
        description: 'Live flight information distribution',
        features: ['Multi-screen support', 'Real-time updates', 'Failover capability', 'Custom layouts'],
        benefits: ['Passenger information', 'Brand consistency', 'High availability'],
    },
    {
        system: 'BHS (Baggage Handling System)',
        description: 'Baggage tracking and management',
        features: ['Real-time tracking', 'Mishandled baggage alerts', 'Performance monitoring', 'Reconciliation'],
        benefits: ['Reduced lost baggage', 'Improved efficiency', 'Better passenger experience'],
    },
    {
        system: 'Security & Access Control',
        description: 'Integrated security systems',
        features: ['CCTV integration', 'Access control', 'Biometric systems', 'Incident management'],
        benefits: ['Centralized monitoring', 'Compliance reporting', 'Enhanced security'],
    },
]

const supportServices = [
    {
        service: '24/7 Network Operations Center',
        description: 'Round-the-clock monitoring and support',
        features: ['Proactive monitoring', 'Incident detection', 'Performance optimization', 'Capacity planning'],
    },
    {
        service: 'Dedicated Account Manager',
        description: 'Single point of contact for all needs',
        features: ['Monthly reviews', 'Capacity planning', 'Budget optimization', 'Strategic guidance'],
    },
    {
        service: 'Emergency Response',
        description: 'Rapid response to critical incidents',
        features: ['15-minute response SLA', 'On-site engineers', 'War room setup', 'Executive escalation'],
    },
    {
        service: 'Planned Maintenance',
        description: 'Scheduled maintenance windows',
        features: ['Advance notification', 'Change management', 'Rollback procedures', 'Zero-downtime updates'],
    },
]

const migrationServices = [
    {
        phase: 'Assessment',
        duration: '2-4 weeks',
        activities: ['Infrastructure audit', 'Dependency mapping', 'Risk assessment', 'TCO analysis'],
        deliverables: ['Assessment report', 'Migration roadmap', 'Risk mitigation plan'],
    },
    {
        phase: 'Planning',
        duration: '3-6 weeks',
        activities: ['Architecture design', 'Cutover planning', 'Testing strategy', 'Training plan'],
        deliverables: ['Detailed design', 'Migration runbook', 'Test plans', 'Training materials'],
    },
    {
        phase: 'Migration',
        duration: '8-16 weeks',
        activities: ['Phased migration', 'Data transfer', 'System validation', 'User acceptance testing'],
        deliverables: ['Migrated systems', 'Test results', 'Documentation', 'Knowledge transfer'],
    },
    {
        phase: 'Optimization',
        duration: 'Ongoing',
        activities: ['Performance tuning', 'Cost optimization', 'Security hardening', 'Continuous improvement'],
        deliverables: ['Optimization reports', 'Cost savings', 'Performance metrics'],
    },
]

const caseStudies = [
    {
        title: 'Major UAE Airport Cloud Migration',
        airport: 'International Hub Airport',
        challenge: 'Migrate 50+ critical systems to private cloud with zero downtime',
        solution: 'Phased migration with hot DR site and automated failover',
        results: ['Zero downtime achieved', '40% cost reduction', '99.99% uptime maintained', '3-month completion'],
    },
    {
        title: 'Regional Airport DR Implementation',
        airport: 'Regional Airport',
        challenge: 'Implement disaster recovery for AODB and FIDS systems',
        solution: 'Hot DR site with 15-minute RPO and automated failover',
        results: ['15-minute RPO achieved', '1-hour RTO', 'Quarterly DR tests', '100% success rate'],
    },
]

const pricingTiers = [
    {
        tier: 'Bronze',
        price: 'Starting at $2,999/month',
        description: 'Essential cloud hosting for small airports',
        features: [
            'On-premise private cloud',
            'Daily backups (24h RPO)',
            'Standard support (8x5)',
            'Up to 10 VMs',
            '99.9% uptime SLA',
            'Email support',
        ],
        bestFor: 'Small regional airports with basic requirements',
    },
    {
        tier: 'Silver',
        price: 'Starting at $5,999/month',
        description: 'Advanced cloud with DR for growing airports',
        features: [
            'Hybrid cloud setup',
            '4-hour RPO/RTO',
            'Priority support (24x7)',
            'Up to 50 VMs',
            '99.95% uptime SLA',
            'Monthly DR tests',
            'Dedicated account manager',
        ],
        popular: true,
        bestFor: 'Medium airports with moderate traffic',
    },
    {
        tier: 'Gold',
        price: 'Starting at $12,999/month',
        description: 'Enterprise cloud with hot DR for major airports',
        features: [
            'Multi-site redundancy',
            '15-minute RPO, 1-hour RTO',
            'Dedicated support team',
            'Unlimited VMs',
            '99.99% uptime SLA',
            'Hot DR site',
            'Quarterly DR tests',
            'Performance optimization',
        ],
        bestFor: 'Large airports with high traffic',
    },
    {
        tier: 'Platinum',
        price: 'Custom pricing',
        description: 'Fully managed service for international hubs',
        features: [
            'Fully managed service',
            'Continuous replication',
            'White-glove support',
            'Custom SLA',
            'Dedicated infrastructure',
            'On-site engineers',
            'Executive escalation',
            'Strategic consulting',
        ],
        bestFor: 'International hub airports',
    },
]

const cloudArchitecture = [
    {
        layer: 'Compute Layer',
        components: ['VMware vSphere/Hyper-V', 'Auto-scaling groups', 'Load balancers', 'Container orchestration'],
        specs: 'Up to 10,000 VMs, 99.99% availability',
    },
    {
        layer: 'Storage Layer',
        components: ['SAN/NAS storage', 'Object storage', 'Backup storage', 'Archive tier'],
        specs: 'Multi-PB capacity, 3-way replication',
    },
    {
        layer: 'Network Layer',
        components: ['Software-defined networking', 'Micro-segmentation', 'VPN/Direct Connect', 'DDoS protection'],
        specs: '10/40/100 Gbps, redundant paths',
    },
    {
        layer: 'Security Layer',
        components: ['NGFW', 'IPS/IDS', 'WAF', 'SIEM', 'Encryption at rest/transit'],
        specs: 'Multi-layered security, 24/7 SOC',
    },
]

const slaDetails = [
    {
        metric: 'Uptime SLA',
        standard: '99.99%',
        enterprise: '99.995%',
        description: 'Monthly uptime guarantee',
    },
    {
        metric: 'Network Latency',
        standard: '< 10ms',
        enterprise: '< 5ms',
        description: 'Within same region',
    },
    {
        metric: 'Support Response',
        standard: '< 1 hour',
        enterprise: '< 15 minutes',
        description: 'For critical issues',
    },
    {
        metric: 'Backup RPO',
        standard: '1 hour',
        enterprise: '15 minutes',
        description: 'Recovery point objective',
    },
    {
        metric: 'DR RTO',
        standard: '4 hours',
        enterprise: '1 hour',
        description: 'Recovery time objective',
    },
]

const securityCertifications = [
    { cert: 'ISO 27001', description: 'Information security management' },
    { cert: 'SOC 2 Type II', description: 'Security, availability, confidentiality' },
    { cert: 'PCI DSS', description: 'Payment card industry compliance' },
    { cert: 'GDPR Compliant', description: 'Data protection regulation' },
    { cert: 'HIPAA', description: 'Healthcare data protection' },
    { cert: 'ICAO Annex 17', description: 'Aviation security standards' },
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

            {/* Infrastructure Details */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Data Center Infrastructure
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade facilities with redundant systems
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="card-enterprise p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Facility Specifications</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="font-semibold text-gray-700">Tier Certification:</span>
                                    <span className="text-pink-600 font-bold">{dataCenterSpecs.tier}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="font-semibold text-gray-700">Design Availability:</span>
                                    <span className="text-pink-600 font-bold">{dataCenterSpecs.uptime}</span>
                                </div>
                                <div className="border-b border-gray-200 pb-3">
                                    <span className="font-semibold text-gray-700 block mb-2">Power:</span>
                                    <span className="text-gray-600 text-sm">{dataCenterSpecs.power}</span>
                                </div>
                                <div className="border-b border-gray-200 pb-3">
                                    <span className="font-semibold text-gray-700 block mb-2">Cooling:</span>
                                    <span className="text-gray-600 text-sm">{dataCenterSpecs.cooling}</span>
                                </div>
                                <div className="border-b border-gray-200 pb-3">
                                    <span className="font-semibold text-gray-700 block mb-2">Connectivity:</span>
                                    <span className="text-gray-600 text-sm">{dataCenterSpecs.connectivity}</span>
                                </div>
                                <div className="pb-3">
                                    <span className="font-semibold text-gray-700 block mb-2">Security:</span>
                                    <span className="text-gray-600 text-sm">{dataCenterSpecs.security}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-enterprise p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Locations & Certifications</h3>
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Data Center Locations:</h4>
                                <ul className="space-y-2">
                                    {dataCenterSpecs.locations.map((location, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {location}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Certifications:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {dataCenterSpecs.certifications.map((cert, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-pink-100 text-pink-700 text-sm font-medium rounded-full">
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Airport Compliance */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Airport-Specific Compliance
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Meeting aviation industry standards and regulations
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {airportCompliance.map((compliance, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{compliance.standard}</h3>
                                <p className="text-gray-600 mb-6">{compliance.description}</p>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                                    <ul className="space-y-2">
                                        {compliance.requirements.map((req, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600">
                                                <CheckCircleIcon className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Performance Metrics
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real performance data from our production environment
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {performanceMetrics.map((metric, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="text-4xl font-bold text-pink-600 mb-2">{metric.value}</div>
                                <div className="text-sm text-gray-600 mb-2">{metric.metric}</div>
                                <div className={`text-xs font-semibold ${metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
                                    {metric.trend === 'up' && '↑ Improving'}
                                    {metric.trend === 'down' && '↓ Improving'}
                                    {metric.trend === 'stable' && '→ Stable'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Airport System Integrations */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Airport System Integrations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Seamless integration with critical airport systems
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {airportIntegrations.map((integration, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{integration.system}</h3>
                                <p className="text-gray-600 mb-6">{integration.description}</p>
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                                    <ul className="space-y-2">
                                        {integration.features.map((feature, idx) => (
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
                                        {integration.benefits.map((benefit, idx) => (
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

            {/* Support & Maintenance */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Support & Maintenance
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive support for mission-critical operations
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {supportServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.service}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
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

            {/* Migration Services */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Migration Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Structured migration process with minimal risk
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {migrationServices.map((phase, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="text-center mb-4">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                                    <p className="text-sm text-pink-600 font-semibold">{phase.duration}</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Activities:</h4>
                                    <ul className="space-y-1">
                                        {phase.activities.map((activity, idx) => (
                                            <li key={idx} className="text-xs text-gray-600">• {activity}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Deliverables:</h4>
                                    <ul className="space-y-1">
                                        {phase.deliverables.map((deliverable, idx) => (
                                            <li key={idx} className="text-xs text-gray-600">• {deliverable}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Success Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world implementations and results
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                                <p className="text-sm text-pink-600 font-semibold mb-6">{study.airport}</p>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                                    <p className="text-sm text-gray-600">{study.challenge}</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                                    <p className="text-sm text-gray-600">{study.solution}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {study.results.map((result, idx) => (
                                            <div key={idx} className="flex items-start text-sm text-gray-600">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                {result}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Pricing Tiers
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible pricing to match your airport's needs
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-6 relative ${tier.popular ? 'ring-2 ring-pink-500 shadow-2xl' : ''}`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink-600 text-white text-xs font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{tier.tier}</h3>
                                <div className="text-xl font-bold text-pink-600 mb-4">{tier.price}</div>
                                <p className="text-sm text-gray-600 mb-6">{tier.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-xs text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-gray-700">{tier.bestFor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cloud Architecture */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cloud Architecture
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Multi-layered architecture for maximum performance and security
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {cloudArchitecture.map((layer, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{layer.layer}</h3>
                                <p className="text-sm text-pink-600 font-semibold mb-6">{layer.specs}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {layer.components.map((component, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {component}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLA Details */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Service Level Agreements
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Guaranteed performance and availability metrics
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-300">
                                    <th className="text-left py-4 px-6 font-bold text-gray-900">Metric</th>
                                    <th className="text-center py-4 px-6 font-bold text-gray-900">Standard</th>
                                    <th className="text-center py-4 px-6 font-bold text-gray-900">Enterprise</th>
                                    <th className="text-left py-4 px-6 font-bold text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {slaDetails.map((sla, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="py-4 px-6 font-semibold text-gray-900">{sla.metric}</td>
                                        <td className="py-4 px-6 text-center text-gray-700">{sla.standard}</td>
                                        <td className="py-4 px-6 text-center text-pink-600 font-semibold">{sla.enterprise}</td>
                                        <td className="py-4 px-6 text-sm text-gray-600">{sla.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Security Certifications */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Security & Compliance Certifications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Industry-leading security standards and compliance
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {securityCertifications.map((cert, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                                    <FaShieldAlt className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.cert}</h3>
                                <p className="text-sm text-gray-600">{cert.description}</p>
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
