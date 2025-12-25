import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CodeBracketIcon, CogIcon, RocketLaunchIcon, ArrowPathIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Software Engineering & Development Services',
    description:
        'Enterprise software development, process automation, API integration, and legacy modernization. Custom applications, microservices, and digital transformation solutions.',
    keywords: [
        'software development UAE',
        'enterprise software',
        'custom applications',
        'API integration',
        'legacy modernization',
        'process automation',
        'digital transformation',
    ],
})

const softwareServices = [
    {
        icon: <CodeBracketIcon className="w-8 h-8" />,
        title: 'Enterprise Application Development',
        description: 'Custom software solutions built for enterprise scale and complexity',
        features: [
            'Web & mobile applications',
            'Microservices architecture',
            'Cloud-native development',
            'API-first design',
        ],
    },
    {
        icon: <CogIcon className="w-8 h-8" />,
        title: 'Process Automation',
        description: 'Automate repetitive tasks and workflows to improve efficiency',
        features: [
            'Robotic Process Automation (RPA)',
            'Workflow automation',
            'Business process management',
            'Integration automation',
        ],
    },
    {
        icon: <RocketLaunchIcon className="w-8 h-8" />,
        title: 'API & Integration Services',
        description: 'Connect systems and applications with robust API integration',
        features: [
            'RESTful API development',
            'GraphQL APIs',
            'Third-party integrations',
            'API gateway & management',
        ],
    },
    {
        icon: <ArrowPathIcon className="w-8 h-8" />,
        title: 'Legacy Modernization',
        description: 'Transform legacy systems into modern, cloud-ready applications',
        features: [
            'Application re-architecture',
            'Database migration',
            'Cloud migration',
            'Incremental modernization',
        ],
    },
]

const techStack = [
    {
        category: 'Frontend',
        technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
    },
    {
        category: 'Backend',
        technologies: ['Node.js', 'Python', '.NET', 'Java', 'Go'],
    },
    {
        category: 'Mobile',
        technologies: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)'],
    },
    {
        category: 'Database',
        technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
    },
    {
        category: 'Cloud',
        technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker'],
    },
    {
        category: 'DevOps',
        technologies: ['CI/CD', 'Terraform', 'Ansible', 'GitLab', 'GitHub Actions'],
    },
]

const developmentProcess = [
    {
        step: '1',
        title: 'Discovery & Planning',
        description: 'Requirements gathering, technical feasibility, and project roadmap',
    },
    {
        step: '2',
        title: 'Design & Architecture',
        description: 'System design, database schema, API contracts, and UI/UX',
    },
    {
        step: '3',
        title: 'Development & Testing',
        description: 'Agile development with continuous testing and quality assurance',
    },
    {
        step: '4',
        title: 'Deployment & Support',
        description: 'Production deployment, monitoring, and ongoing maintenance',
    },
]

const useCases = [
    {
        title: 'Insurance Platform',
        description: 'End-to-end insurance management with policy, claims, and agent modules',
        technologies: ['Next.js', 'PostgreSQL', 'AWS'],
    },
    {
        title: 'Document Management',
        description: 'Automated document expiry tracking with notifications and compliance',
        technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
        title: 'HRMS System',
        description: 'Employee lifecycle management with payroll and attendance integration',
        technologies: ['Vue.js', 'Python', 'PostgreSQL'],
    },
    {
        title: 'CRM Platform',
        description: 'Sales pipeline management with email, WhatsApp, and telephony integration',
        technologies: ['React', '.NET', 'Azure'],
    },
]

export default function SoftwarePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <CodeBracketIcon className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Software Engineering</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Enterprise Software Development
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Custom enterprise applications, process automation, and digital transformation.
                            Build scalable, secure software with modern architecture and best practices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=software-development" className="btn-primary">
                                Start Your Project
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Software Services */}
            <section id="services" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Software Engineering Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From concept to deployment — complete software development lifecycle
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {softwareServices.map((service, index) => (
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

            {/* Technology Stack */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Technology Stack
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Modern technologies and frameworks for enterprise-grade applications
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techStack.map((stack, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{stack.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {stack.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Development Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Agile methodology with continuous delivery and quality assurance
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {developmentProcess.map((phase, index) => (
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

            {/* Use Cases */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Recent Projects
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise applications we've built for clients across industries
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                                <p className="text-gray-600 mb-4">{useCase.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {useCase.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Engagement Models
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible engagement options to match your project needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Fixed Price',
                                description: 'Well-defined scope with fixed timeline and budget',
                                bestFor: 'Projects with clear requirements',
                            },
                            {
                                title: 'Time & Materials',
                                description: 'Flexible scope with hourly or daily rates',
                                bestFor: 'Evolving requirements and R&D',
                            },
                            {
                                title: 'Dedicated Team',
                                description: 'Extended team working exclusively on your project',
                                bestFor: 'Long-term development needs',
                            },
                        ].map((model, index) => (
                            <div key={index} className="card-enterprise p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{model.title}</h3>
                                <p className="text-gray-600 mb-4">{model.description}</p>
                                <div className="text-sm text-primary-600 font-semibold">
                                    Best for: {model.bestFor}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Build Your Application?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free consultation and project estimate from our software engineering team
                    </p>
                    <Link href="/contact?type=software-development" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </>
    )
}
