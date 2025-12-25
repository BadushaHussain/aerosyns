import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CloudIcon, GlobeAltIcon, ShieldCheckIcon, ArrowPathIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Cloud & Hybrid IT Solutions',
    description:
        'Multi-cloud orchestration, hybrid work enablement, and sovereign cloud solutions. Azure, AWS, GCP, and local UAE cloud providers with enterprise SLAs and compliance.',
    keywords: [
        'cloud engineering UAE',
        'hybrid cloud',
        'multi-cloud management',
        'Azure UAE',
        'AWS UAE',
        'sovereign cloud',
        'core banking hosting',
    ],
})

const cloudServices = [
    {
        icon: <CloudIcon className="w-8 h-8" />,
        title: 'Multi-Cloud Management',
        description: 'Unified orchestration across Azure, AWS, GCP, and regional cloud providers',
        features: [
            'Cross-cloud VPC peering',
            'Unified identity & access management',
            'Cost optimization (FinOps)',
            'Multi-cloud monitoring & logging',
        ],
    },
    {
        icon: <GlobeAltIcon className="w-8 h-8" />,
        title: 'Hybrid Work Enablement',
        description: 'Secure remote access, VDI, and device management for distributed teams',
        features: [
            'Virtual Desktop Infrastructure (VDI)',
            'Secure remote access (VPN, Zero Trust)',
            'Device management (MDM/MAM)',
            'Collaboration platforms',
        ],
    },
    {
        icon: <ShieldCheckIcon className="w-8 h-8" />,
        title: 'Core Banking Hosting',
        description: 'Secure, compliant hosting for core banking and financial systems',
        features: [
            'PCI-DSS compliant infrastructure',
            'High availability (99.99% SLA)',
            'Data residency & sovereignty',
            'Disaster recovery & backup',
        ],
    },
    {
        icon: <ArrowPathIcon className="w-8 h-8" />,
        title: 'Cloud Migration',
        description: 'Lift-and-shift, replatform, or refactor your applications to the cloud',
        features: [
            'Migration assessment & planning',
            'Lift-and-shift automation',
            'Application modernization',
            'Post-migration optimization',
        ],
    },
]

const cloudProviders = [
    { name: 'Microsoft Azure', capabilities: 'Enterprise workloads, AI/ML, hybrid cloud' },
    { name: 'Amazon AWS', capabilities: 'Scalability, serverless, global infrastructure' },
    { name: 'Google Cloud', capabilities: 'Data analytics, Kubernetes, AI/ML' },
    { name: 'Deepsea (UAE)', capabilities: 'Local data residency, sovereign cloud' },
    { name: 'Alibaba Cloud', capabilities: 'Asia-Pacific presence, e-commerce' },
]

const architecturePatterns = [
    {
        title: 'Hybrid Cloud',
        description: 'On-premise + public cloud with seamless connectivity',
        useCases: ['Legacy system integration', 'Data sovereignty', 'Burst capacity'],
    },
    {
        title: 'Multi-Cloud',
        description: 'Workloads distributed across multiple cloud providers',
        useCases: ['Vendor diversification', 'Best-of-breed services', 'Geographic distribution'],
    },
    {
        title: 'Cloud-Native',
        description: 'Microservices, containers, and serverless architecture',
        useCases: ['Modern applications', 'Rapid scaling', 'DevOps automation'],
    },
]

export default function CloudPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <CloudIcon className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Cloud & Hybrid IT</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Multi-Cloud & Hybrid IT Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Orchestrate workloads across Azure, AWS, GCP, and sovereign clouds with unified management,
                            security, and compliance. Enable hybrid work and migrate legacy systems with confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=cloud-assessment" className="btn-primary">
                                Request Cloud Assessment
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                View Solutions
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
                            Cloud Engineering Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From migration to ongoing management — complete cloud lifecycle services
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {cloudServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-6">
                                    <div className="text-white">{service.icon}</div>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <svg
                                                className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cloud Providers */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Multi-Cloud Expertise
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Certified architects across all major cloud platforms
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cloudProviders.map((provider, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{provider.name}</h3>
                                <p className="text-sm text-gray-600">{provider.capabilities}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Patterns */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cloud Architecture Patterns
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Proven architectures for modern cloud deployments
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {architecturePatterns.map((pattern, index) => (
                            <div key={index} className="card-enterprise p-8 text-center">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                                    <CloudIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pattern.title}</h3>
                                <p className="text-gray-600 mb-6">{pattern.description}</p>
                                <div className="space-y-2">
                                    <div className="text-sm font-semibold text-gray-900">Use Cases:</div>
                                    {pattern.useCases.map((useCase, idx) => (
                                        <div key={idx} className="text-sm text-gray-600">• {useCase}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Migration Process */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cloud Migration Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Structured approach to minimize risk and downtime
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Assessment', description: 'Inventory, dependencies, TCO analysis' },
                            { step: '2', title: 'Planning', description: 'Migration strategy, architecture design' },
                            { step: '3', title: 'Migration', description: 'Phased migration with validation' },
                            { step: '4', title: 'Optimization', description: 'Performance tuning, cost optimization' },
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-sm text-gray-600">{phase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Transform Your Cloud Strategy?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free cloud assessment and migration roadmap from our certified architects
                    </p>
                    <Link href="/contact?type=cloud-assessment" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Cloud Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
