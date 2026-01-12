import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, RocketLaunchIcon, CloudIcon } from '@heroicons/react/24/solid'
import { FaServer, FaDatabase, FaCloud, FaCode } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Digital Transformation Services - Legacy Modernization & Cloud Migration',
    description: 'Modernize legacy systems, migrate to cloud, and enable digital-first operations. Transform your business with modern architecture, DevOps, and data-driven solutions.',
    keywords: ['digital transformation', 'legacy modernization', 'cloud migration', 'DevOps', 'application modernization', 'digital transformation UAE'],
})

const transformationServices = [
    {
        title: 'Legacy System Modernization',
        description: 'Transform outdated systems into modern, cloud-ready applications',
        icon: FaServer,
        features: ['Application re-architecture', 'Technology stack upgrade', 'Database modernization', 'UI/UX redesign', 'API enablement', 'Performance optimization'],
        useCases: ['Mainframe migration', 'Monolith to microservices', 'Desktop to web/mobile', 'On-premise to cloud'],
    },
    {
        title: 'Cloud Migration & Optimization',
        description: 'Move to cloud with minimal risk and maximum efficiency',
        icon: FaCloud,
        features: ['Cloud readiness assessment', 'Migration strategy', 'Lift-and-shift', 'Re-platform & re-architect', 'Cost optimization', 'Multi-cloud strategy'],
        useCases: ['AWS migration', 'Azure migration', 'GCP migration', 'Hybrid cloud'],
    },
    {
        title: 'Data-Driven Transformation',
        description: 'Unlock insights with modern data platforms',
        icon: FaDatabase,
        features: ['Data lake architecture', 'Real-time analytics', 'BI platform implementation', 'Data governance', 'ML/AI integration', 'Self-service analytics'],
        useCases: ['Data warehouse modernization', 'Real-time dashboards', 'Predictive analytics', 'Customer 360'],
    },
    {
        title: 'DevOps Enablement',
        description: 'Accelerate delivery with modern DevOps practices',
        icon: FaCode,
        features: ['CI/CD pipelines', 'Infrastructure as code', 'Automated testing', 'Container orchestration', 'Monitoring & observability', 'GitOps practices'],
        useCases: ['Continuous deployment', 'Infrastructure automation', 'Release automation', 'Quality gates'],
    },
]

const modernizationStrategies = [
    {
        strategy: 'Rehost (Lift-and-Shift)',
        description: 'Move applications to cloud with minimal changes',
        benefits: ['Quick migration', 'Low risk', 'Immediate cloud benefits', 'Cost savings'],
        bestFor: 'Applications that work well but need cloud infrastructure',
    },
    {
        strategy: 'Replatform',
        description: 'Minor optimizations to leverage cloud capabilities',
        benefits: ['Moderate effort', 'Cloud optimization', 'Better performance', 'Managed services'],
        bestFor: 'Applications needing cloud-native features without full rewrite',
    },
    {
        strategy: 'Refactor (Re-architect)',
        description: 'Redesign for cloud-native architecture',
        benefits: ['Maximum cloud benefits', 'Scalability', 'Resilience', 'Modern architecture'],
        bestFor: 'Critical applications requiring significant improvements',
    },
    {
        strategy: 'Rebuild',
        description: 'Complete rewrite with modern technology stack',
        benefits: ['Latest technology', 'Best practices', 'Future-proof', 'Technical debt elimination'],
        bestFor: 'Legacy systems that are difficult to maintain',
    },
]

const cloudMigrationJourney = [
    { phase: 'Assessment & Planning', activities: ['Current state analysis', 'Cloud readiness', 'Migration strategy', 'Cost estimation', 'Risk assessment'] },
    { phase: 'Pilot Migration', activities: ['Select pilot applications', 'Proof of concept', 'Validate approach', 'Refine processes'] },
    { phase: 'Full Migration', activities: ['Phased migration', 'Data migration', 'Testing & validation', 'Cutover planning'] },
    { phase: 'Optimization', activities: ['Performance tuning', 'Cost optimization', 'Security hardening', 'Compliance validation'] },
    { phase: 'Ongoing Management', activities: ['Monitoring', 'Incident management', 'Continuous improvement', 'FinOps practices'] },
]

const industryTransformations = [
    {
        industry: 'Banking & Finance',
        transformations: ['Core banking modernization', 'Digital banking platforms', 'Open banking APIs', 'Real-time payments', 'Cloud-native architecture'],
    },
    {
        industry: 'Insurance',
        transformations: ['Policy admin modernization', 'Digital claims processing', 'Agent portals', 'Customer self-service', 'Data analytics platforms'],
    },
    {
        industry: 'Healthcare',
        transformations: ['EMR/EHR modernization', 'Telehealth platforms', 'Patient portals', 'FHIR integration', 'Cloud migration'],
    },
    {
        industry: 'Retail',
        transformations: ['E-commerce platforms', 'Omnichannel retail', 'Inventory modernization', 'Customer data platforms', 'Personalization engines'],
    },
    {
        industry: 'Manufacturing',
        transformations: ['Smart factory', 'IoT integration', 'Supply chain digitization', 'Predictive maintenance', 'Digital twins'],
    },
]

const devOpsCapabilities = [
    { capability: 'CI/CD Pipelines', description: 'Automated build, test, and deployment', tools: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps'] },
    { capability: 'Infrastructure as Code', description: 'Version-controlled infrastructure', tools: ['Terraform', 'CloudFormation', 'Ansible', 'Pulumi'] },
    { capability: 'Container Orchestration', description: 'Scalable container management', tools: ['Kubernetes', 'Docker', 'ECS', 'AKS'] },
    { capability: 'Monitoring & Observability', description: 'Full-stack monitoring and logging', tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'] },
]

const caseStudies = [
    {
        title: 'Insurance Platform Modernization',
        industry: 'Insurance',
        challenge: 'Legacy policy admin system causing business constraints',
        solution: 'Cloud-native microservices platform with modern tech stack',
        results: ['40% cost savings', '3x faster deployment', '99.9% uptime', 'Zero downtime releases'],
    },
    {
        title: 'Banking Core System Migration',
        industry: 'Banking',
        challenge: 'Mainframe system limiting digital innovation',
        solution: 'Phased migration to cloud-native core banking platform',
        results: ['50% TCO reduction', 'Real-time processing', 'API-enabled', 'Scalable architecture'],
    },
    {
        title: 'Healthcare Cloud Transformation',
        industry: 'Healthcare',
        challenge: 'On-premise infrastructure limiting scalability',
        solution: 'Complete AWS migration with DevOps automation',
        results: ['60% infrastructure cost reduction', '3x faster deployment', 'HIPAA compliant', 'Auto-scaling'],
    },
]

export default function DigitalTransformationPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/software" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to Software Services
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                            <RocketLaunchIcon className="w-5 h-5 text-indigo-400 mr-2" />
                            <span className="text-indigo-400 text-sm font-semibold">Digital Transformation</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Digital Transformation Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Modernize legacy systems and enable digital-first operations. From cloud migration to DevOps—
                            transform your business with modern architecture and data-driven solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=transformation-consultation" className="btn-primary">
                                Start Your Transformation
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                            Why Digital Transformation?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Legacy systems hold businesses back. Digital transformation modernizes your technology stack,
                            enabling innovation, reducing costs, and improving customer experience.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-indigo-600 mb-2">50%</div>
                                <div className="text-sm text-gray-600">Cost Reduction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-indigo-600 mb-2">3x</div>
                                <div className="text-sm text-gray-600">Faster Deployment</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
                                <div className="text-sm text-gray-600">Uptime</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
                                <div className="text-sm text-gray-600">Cloud-Native</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Transformation Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            End-to-end digital transformation capabilities
                        </p>
                    </div>
                    <div className="space-y-12">
                        {transformationServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                        <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Features</h4>
                                                <ul className="space-y-2">
                                                    {service.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                                            <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Use Cases</h4>
                                                <ul className="space-y-2">
                                                    {service.useCases.map((useCase, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                                            {useCase}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Modernization Strategies
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the right approach for your transformation journey
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {modernizationStrategies.map((strategy, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{strategy.strategy}</h3>
                                <p className="text-gray-600 mb-6">{strategy.description}</p>
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Benefits:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {strategy.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-start text-sm text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                                                {benefit}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-gray-700">{strategy.bestFor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cloud Migration Journey
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Structured approach to successful cloud adoption
                        </p>
                    </div>
                    <div className="space-y-6">
                        {cloudMigrationJourney.map((phase, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.phase}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {phase.activities.map((activity, idx) => (
                                                <span key={idx} className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                                                    {activity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Industry Transformations
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industryTransformations.map((industry, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                                <ul className="space-y-2">
                                    {industry.transformations.map((transformation, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {transformation}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            DevOps & Automation
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Modern DevOps practices for continuous delivery
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {devOpsCapabilities.map((capability, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{capability.capability}</h3>
                                <p className="text-gray-600 mb-6">{capability.description}</p>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Tools:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {capability.tools.map((tool, idx) => (
                                            <span key={idx} className="text-sm px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Transformation Success Stories
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-4">
                                    {study.industry}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Challenge:</h4>
                                        <p className="text-sm text-gray-600">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Solution:</h4>
                                        <p className="text-sm text-gray-600">{study.solution}</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Results:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {study.results.map((result, idx) => (
                                            <div key={idx} className="flex items-start text-xs text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
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

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free digital transformation assessment and roadmap from our experts
                    </p>
                    <Link
                        href="/contact?type=transformation-consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Request Transformation Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
