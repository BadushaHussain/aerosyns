import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import { CloudIcon, GlobeAltIcon, ShieldCheckIcon, ArrowPathIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaServer, FaDatabase, FaNetworkWired, FaLock, FaShieldAlt, FaCheckCircle, FaKey, FaDollarSign, FaChartLine, FaRocket, FaBuilding, FaBolt, FaUsers } from 'react-icons/fa'

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
    { name: 'Microsoft Azure', capabilities: 'Enterprise workloads, AI/ML, hybrid cloud', logo: '/cloud-providers/microsoft-azure.png' },
    { name: 'Amazon AWS', capabilities: 'Scalability, serverless, global infrastructure', logo: '/cloud-providers/aws.png' },
    { name: 'Google Cloud', capabilities: 'Data analytics, Kubernetes, AI/ML', logo: '/cloud-providers/google-cloud.png' },
    { name: 'Deepsea (UAE)', capabilities: 'Local data residency, sovereign cloud' },
    { name: 'Alibaba Cloud', capabilities: 'Asia-Pacific presence, e-commerce', logo: '/cloud-providers/alibaba-cloud.png' },
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

const infrastructureSpecs = [
    {
        category: 'Compute',
        icon: FaServer,
        options: [
            { name: 'General Purpose', specs: '2-96 vCPUs, 4-384 GB RAM', useCase: 'Web servers, app servers' },
            { name: 'Compute Optimized', specs: '2-64 vCPUs, High CPU ratio', useCase: 'Batch processing, HPC' },
            { name: 'Memory Optimized', specs: '2-128 vCPUs, Up to 4 TB RAM', useCase: 'Databases, in-memory caching' },
            { name: 'GPU Instances', specs: 'NVIDIA A100, V100', useCase: 'AI/ML, rendering' },
        ],
    },
    {
        category: 'Storage',
        icon: FaDatabase,
        options: [
            { name: 'SSD Block Storage', specs: 'Up to 64 TB, 20,000 IOPS', useCase: 'Databases, applications' },
            { name: 'NVMe Storage', specs: 'Ultra-low latency, 100,000+ IOPS', useCase: 'High-performance databases' },
            { name: 'Object Storage', specs: 'Unlimited, S3-compatible', useCase: 'Backups, media files' },
            { name: 'Archive Storage', specs: 'Long-term retention', useCase: 'Compliance, cold data' },
        ],
    },
    {
        category: 'Network',
        icon: FaNetworkWired,
        options: [
            { name: 'Bandwidth', specs: 'Up to 100 Gbps', useCase: 'High-throughput applications' },
            { name: 'Load Balancers', specs: 'Application & Network LB', useCase: 'Traffic distribution' },
            { name: 'CDN', specs: 'Global edge locations', useCase: 'Content delivery' },
            { name: 'VPN', specs: 'Site-to-site & client VPN', useCase: 'Secure connectivity' },
        ],
    },
]

const securityCompliance = [
    {
        category: 'Data Protection',
        icon: FaLock,
        features: ['Encryption at rest (AES-256)', 'Encryption in transit (TLS 1.3)', 'Key management (HSM)', 'Data masking & tokenization'],
    },
    {
        category: 'Network Security',
        icon: FaShieldAlt,
        features: ['DDoS protection (up to 2 Tbps)', 'Web Application Firewall (WAF)', 'Network segmentation', 'Intrusion detection (IDS/IPS)'],
    },
    {
        category: 'Compliance Certifications',
        icon: FaCheckCircle,
        certifications: ['ISO 27001', 'SOC 2 Type II', 'PCI-DSS Level 1', 'GDPR', 'UAE DPA', 'HIPAA'],
    },
    {
        category: 'Access Control',
        icon: FaKey,
        features: ['SSO integration (SAML, OAuth)', 'Multi-factor authentication (MFA)', 'Role-based access (RBAC)', 'API key management'],
    },
]

const costOptimization = [
    {
        strategy: 'Right-Sizing',
        description: 'Match resources to actual workload requirements',
        savings: 'Up to 40%',
        features: ['CPU & memory utilization analysis', 'Automated recommendations', 'Resize automation'],
    },
    {
        strategy: 'Reserved Capacity',
        description: 'Commit to 1 or 3-year terms for predictable workloads',
        savings: 'Up to 60%',
        features: ['Flexible payment options', 'Instance size flexibility', 'Convertible options'],
    },
    {
        strategy: 'Auto-Scaling',
        description: 'Scale resources based on demand',
        savings: 'Up to 50%',
        features: ['Schedule-based scaling', 'Metric-based scaling', 'Predictive scaling'],
    },
    {
        strategy: 'Spot Instances',
        description: 'Use spare capacity at discounted rates',
        savings: 'Up to 90%',
        features: ['Fault-tolerant workloads', 'Flexible start times', 'Automated bidding'],
    },
]

const managedServices = [
    {
        service: '24/7 Monitoring',
        description: 'Proactive monitoring and alerting',
        includes: ['Infrastructure monitoring', 'Application performance', 'Log aggregation', 'Custom dashboards'],
    },
    {
        service: 'Patch Management',
        description: 'Automated OS and application patching',
        includes: ['Security patches', 'Scheduled maintenance', 'Rollback capability', 'Compliance reporting'],
    },
    {
        service: 'Performance Optimization',
        description: 'Continuous performance tuning',
        includes: ['Database optimization', 'Cache configuration', 'CDN optimization', 'Query tuning'],
    },
    {
        service: 'Incident Response',
        description: 'Rapid response to incidents',
        includes: ['15-minute response SLA', 'Root cause analysis', 'Post-incident reports', 'Preventive measures'],
    },
]

const integrationAPIs = [
    {
        category: 'APIs & SDKs',
        capabilities: ['RESTful APIs', 'GraphQL support', 'SDKs (Python, Node.js, Java, .NET)', 'CLI tools'],
    },
    {
        category: 'CI/CD Integration',
        capabilities: ['Jenkins, GitLab CI/CD', 'GitHub Actions', 'Azure DevOps', 'Terraform, Ansible'],
    },
    {
        category: 'Third-Party Integrations',
        capabilities: ['Monitoring (Datadog, New Relic)', 'Logging (Splunk, ELK)', 'Security (Palo Alto, Fortinet)', 'Backup (Veeam, Commvault)'],
    },
    {
        category: 'Webhooks & Events',
        capabilities: ['Real-time notifications', 'Custom event triggers', 'Webhook authentication', 'Event filtering'],
    },
]

const pricingModels = [
    {
        model: 'Pay-As-You-Go',
        description: 'Pay only for what you use, billed hourly',
        bestFor: 'Variable workloads, dev/test environments',
        pricing: 'From $0.05/hour',
    },
    {
        model: 'Reserved Capacity',
        description: '1 or 3-year commitment for predictable workloads',
        bestFor: 'Production workloads, steady-state usage',
        pricing: 'Up to 60% savings',
        popular: true,
    },
    {
        model: 'Spot Instances',
        description: 'Bid on unused capacity at discounted rates',
        bestFor: 'Fault-tolerant, flexible workloads',
        pricing: 'Up to 90% savings',
    },
    {
        model: 'Enterprise Agreement',
        description: 'Custom pricing for large deployments',
        bestFor: 'Enterprise-wide cloud adoption',
        pricing: 'Custom discounts + dedicated support',
    },
]

const successMetrics = [
    { metric: 'Enterprise Customers', value: '500+', icon: FaBuilding },
    { metric: 'Uptime Achievement', value: '99.99%', icon: FaBolt },
    { metric: 'Cost Savings Realized', value: '40% Avg', icon: FaDollarSign },
    { metric: 'Migration Success Rate', value: '100%', icon: FaCheckCircle },
    { metric: 'Certified Architects', value: '50+', icon: FaUsers },
    { metric: 'Workloads Managed', value: '10,000+', icon: CloudIcon },
]

export default function CloudPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
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
            <section id="services" className="section-padding bg-gray-50 scroll-mt-20">
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
                                {provider.logo && (
                                    <div className="flex items-center justify-center h-20 mb-4">
                                        <Image
                                            src={provider.logo}
                                            alt={`${provider.name} logo`}
                                            width={200}
                                            height={80}
                                            className="object-contain max-h-20"
                                        />
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{provider.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{provider.capabilities}</p>
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

            {/* Infrastructure Specifications */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Infrastructure Specifications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade infrastructure with flexible configurations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {infrastructureSpecs.map((spec, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="text-center mb-6">
                                    <div className="text-5xl mb-4 text-primary-600">
                                        <spec.icon className="w-16 h-16 mx-auto" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{spec.category}</h3>
                                </div>
                                <div className="space-y-4">
                                    {spec.options.map((option, idx) => (
                                        <div key={idx} className="border-l-4 border-primary-500 pl-4">
                                            <h4 className="font-bold text-gray-900 mb-1">{option.name}</h4>
                                            <p className="text-sm text-gray-600 mb-1">{option.specs}</p>
                                            <p className="text-xs text-gray-500 italic">{option.useCase}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security & Compliance */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Security & Compliance
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade security with global compliance certifications
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {securityCompliance.map((item, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-4xl text-primary-600">
                                        <item.icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{item.category}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {(item.features || item.certifications || []).map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cost Optimization */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cloud Cost Optimization
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            FinOps strategies to maximize your cloud ROI
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {costOptimization.map((strategy, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="text-center mb-4">
                                    <div className="text-3xl font-bold text-primary-600 mb-2">{strategy.savings}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{strategy.strategy}</h3>
                                    <p className="text-sm text-gray-600">{strategy.description}</p>
                                </div>
                                <ul className="space-y-2">
                                    {strategy.features.map((feature, idx) => (
                                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                                            <span className="text-primary-500 mr-1">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Managed Services */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Managed Cloud Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Focus on your business while we manage your cloud
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {managedServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.service}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <div className="space-y-2">
                                    <div className="text-sm font-semibold text-gray-900 mb-3">Includes:</div>
                                    {service.includes.map((item, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration & APIs */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Integration & APIs
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Seamless integration with your existing tools and workflows
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {integrationAPIs.map((integration, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{integration.category}</h3>
                                <div className="space-y-3">
                                    {integration.capabilities.map((capability, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {capability}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Models */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Flexible Pricing Models
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the pricing model that fits your business needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pricingModels.map((model, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-6 relative ${model.popular ? 'ring-2 ring-primary-500 shadow-2xl' : ''}`}
                            >
                                {model.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{model.model}</h3>
                                <div className="text-2xl font-bold text-primary-600 mb-4">{model.pricing}</div>
                                <p className="text-sm text-gray-600 mb-4">{model.description}</p>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-gray-700">{model.bestFor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Proven Track Record
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Trusted by enterprises across the UAE and GCC
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {successMetrics.map((metric, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="text-4xl mb-3 text-primary-600 flex justify-center">
                                    <metric.icon className="w-12 h-12" />
                                </div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">{metric.value}</div>
                                <div className="text-sm text-gray-600">{metric.metric}</div>
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
