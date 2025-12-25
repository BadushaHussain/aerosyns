import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { RocketLaunchIcon, BuildingOfficeIcon, CloudIcon, ShieldCheckIcon, CodeBracketIcon, BriefcaseIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Solutions - Enterprise IT & Digital Transformation',
    description:
        'Complete IT solutions for enterprises. Digital transformation, cloud migration, datacenter build, cybersecurity, DevOps, AI infrastructure, and industry-specific solutions.',
    keywords: ['IT solutions', 'digital transformation', 'cloud migration', 'cybersecurity', 'DevOps'],
})

const solutions = [
    {
        name: 'Digital Transformation',
        tagline: 'Complete business & IT modernization',
        description: 'End-to-end digital transformation from legacy systems to modern cloud-native architecture',
        href: '/solutions/digital-transformation',
        icon: <RocketLaunchIcon className="w-8 h-8" />,
        features: ['IT modernization', 'Process automation', 'Cloud adoption', 'Change management'],
        color: 'from-blue-500 to-cyan-500',
    },
    {
        name: 'Cloud Migration & Optimization',
        tagline: 'Seamless cloud journey',
        description: 'Migrate workloads to cloud with zero downtime and optimize for cost and performance',
        href: '/solutions/cloud-migration',
        icon: <CloudIcon className="w-8 h-8" />,
        features: ['Migration planning', 'Lift-and-shift', 'Re-architecture', 'Cost optimization'],
        color: 'from-cyan-500 to-blue-500',
    },
    {
        name: 'Enterprise IT Transformation',
        tagline: 'Complete IT infrastructure modernization',
        description: 'End-to-end IT transformation from legacy systems to modern cloud-native infrastructure',
        href: '/solutions/enterprise-it',
        icon: <BuildingOfficeIcon className="w-8 h-8" />,
        features: ['Infrastructure assessment', 'Cloud migration', 'Security hardening', 'Managed services'],
        color: 'from-purple-500 to-pink-500',
    },
    {
        name: 'AI Research Infrastructure',
        tagline: 'GPU clusters for AI/ML research',
        description: 'High-performance computing infrastructure for AI research, training, and inference',
        href: '/solutions/ai-research',
        icon: <RocketLaunchIcon className="w-8 h-8" />,
        features: ['GPU clusters', 'MLOps platform', 'Data pipelines', 'Research support'],
        color: 'from-pink-500 to-red-500',
    },
    {
        name: 'Datacenter Build & Consolidation',
        tagline: 'Modern datacenter infrastructure',
        description: 'Design, build, and consolidate datacenters with Tier III/IV standards',
        href: '/solutions/datacenter',
        icon: <BuildingOfficeIcon className="w-8 h-8" />,
        features: ['Datacenter design', 'Infrastructure build', 'Consolidation', 'Tier III/IV compliance'],
        color: 'from-green-500 to-emerald-500',
    },
    {
        name: 'Cybersecurity Transformation',
        tagline: 'Zero-trust security architecture',
        description: 'Implement comprehensive security with zero-trust, SOC, SIEM, and compliance',
        href: '/solutions/security',
        icon: <ShieldCheckIcon className="w-8 h-8" />,
        features: ['Zero-trust architecture', 'SOC/SIEM', 'Compliance (SOC2, ISO)', 'Penetration testing'],
        color: 'from-red-500 to-orange-500',
    },
    {
        name: 'DevOps & Automation',
        tagline: 'CI/CD and infrastructure as code',
        description: 'Implement DevOps practices with automation, CI/CD pipelines, and IaC',
        href: '/solutions/devops',
        icon: <CodeBracketIcon className="w-8 h-8" />,
        features: ['CI/CD pipelines', 'Infrastructure as Code', 'Container orchestration', 'Monitoring'],
        color: 'from-orange-500 to-yellow-500',
    },
    {
        name: 'Industry-Specific Solutions',
        tagline: 'Tailored for your industry',
        description: 'Specialized solutions for banking, healthcare, education, and government sectors',
        href: '/solutions/industry',
        icon: <BriefcaseIcon className="w-8 h-8" />,
        features: ['Banking & finance', 'Healthcare', 'Education', 'Government'],
        color: 'from-indigo-500 to-purple-500',
    },
]

export default function SolutionsOverviewPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Complete IT Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            End-to-end solutions for enterprise IT transformation, cloud migration, cybersecurity,
                            and AI infrastructure. From assessment to implementation and ongoing support.
                        </p>
                        <Link href="/contact?type=solutions" className="btn-primary">
                            Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive solutions tailored to your industry and requirements
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {solutions.map((solution, index) => (
                            <Link
                                key={index}
                                href={solution.href}
                                className="card-enterprise p-8 group hover:scale-105 transition-all duration-300"
                            >
                                <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} mb-6 group-hover:shadow-xl transition-shadow`}>
                                    <div className="text-white">{solution.icon}</div>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                                    {solution.name}
                                </h3>
                                <p className="text-sm text-primary-600 font-semibold mb-3">{solution.tagline}</p>
                                <p className="text-gray-600 mb-6">{solution.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {solution.features.map((feature, idx) => (
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
                                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                                    Learn more
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Approach
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Structured methodology for successful project delivery
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Assess', desc: 'Current state analysis and requirements gathering' },
                            { step: '2', title: 'Design', desc: 'Solution architecture and implementation plan' },
                            { step: '3', title: 'Implement', desc: 'Phased deployment with minimal disruption' },
                            { step: '4', title: 'Support', desc: 'Ongoing managed services and optimization' },
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold">
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
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Transform Your IT?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a consultation to discuss your requirements
                    </p>
                    <Link href="/contact?type=solutions" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
