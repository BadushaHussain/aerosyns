import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import {
    CodeBracketIcon,
    CogIcon,
    RocketLaunchIcon,
    ArrowPathIcon,
    CpuChipIcon,
    ShieldCheckIcon,
    BuildingOfficeIcon,
    CheckCircleIcon,
    SparklesIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
    ChartBarIcon
} from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Enterprise Software Development Services',
    description:
        'Enterprise software development with AI & intelligent systems, process automation, and digital transformation. Custom ERP, CRM, HRMS solutions with microservices architecture, cloud-native development, and enterprise security.',
    keywords: [
        'software development UAE',
        'enterprise software',
        'custom applications',
        'AI software development',
        'process automation',
        'digital transformation',
        'ERP development',
        'CRM development',
        'microservices',
        'cloud-native',
    ],
})

const softwareServices = [
    {
        icon: <CodeBracketIcon className="w-8 h-8" />,
        title: 'Custom Enterprise Application Development',
        description: 'Scalable enterprise systems built for complex business requirements',
        features: [
            'Web & mobile enterprise systems',
            'ERP, CRM, HRMS, SCM solutions',
            'Microservices & cloud-native applications',
            'API-first architecture',
        ],
        link: '/services/software/enterprise-applications',
    },
    {
        icon: <CpuChipIcon className="w-8 h-8" />,
        title: 'AI & Intelligent Systems',
        description: 'AI-powered solutions for automation and intelligent decision-making',
        features: [
            'AI-powered analytics & dashboards',
            'Machine learning models',
            'Chatbots, virtual assistants & RPA',
            'Predictive intelligence',
        ],
        link: '/services/software/ai-intelligent-systems',
    },
    {
        icon: <CogIcon className="w-8 h-8" />,
        title: 'Process Automation',
        description: 'Automate workflows and eliminate manual processes',
        features: [
            'Workflow automation',
            'Robotic Process Automation (RPA)',
            'Document & approval automation',
            'Integration with legacy systems',
        ],
        link: '/services/software/process-automation',
    },
    {
        icon: <CloudArrowUpIcon className="w-8 h-8" />,
        title: 'Digital Transformation',
        description: 'Modernize legacy systems and enable digital-first operations',
        features: [
            'Legacy system modernization',
            'Cloud migration & optimization',
            'Data-driven transformation',
            'Enterprise DevOps enablement',
        ],
        link: '/services/software/digital-transformation',
    },
]

const architectureTech = [
    {
        title: 'Microservices & Event-Driven',
        description: 'Scalable, resilient architecture for enterprise applications',
        icon: <RocketLaunchIcon className="w-6 h-6" />,
    },
    {
        title: 'Cloud-Native Development',
        description: 'AWS, Azure, GCP with containerization and orchestration',
        icon: <CloudArrowUpIcon className="w-6 h-6" />,
    },
    {
        title: 'Secure APIs & Integrations',
        description: 'RESTful, GraphQL APIs with OAuth2 and API gateways',
        icon: <LockClosedIcon className="w-6 h-6" />,
    },
    {
        title: 'Scalable Data Pipelines',
        description: 'Real-time data processing and analytics infrastructure',
        icon: <ChartBarIcon className="w-6 h-6" />,
    },
]

import {
    SiReact, SiNextdotjs, SiAngular, SiVuedotjs, SiTypescript,
    SiDotnet, SiGo,
    SiPostgresql, SiMongodb, SiRedis, SiElasticsearch,
    SiTensorflow, SiPytorch, SiOpenai, SiScikitlearn, SiHuggingface,
    SiDocker, SiKubernetes, SiTerraform, SiJenkins,
    SiGooglecloud, SiServerless
} from 'react-icons/si'
import { FaJava, FaPython, FaNodeJs, FaAws, FaNetworkWired, FaSync, FaDatabase, FaWindows, FaBuilding, FaShieldAlt, FaRocket, FaCog, FaLandmark, FaCheckCircle } from 'react-icons/fa'

const techStack = [
    {
        category: 'Frontend',
        technologies: [
            { name: 'React', icon: <SiReact className="w-4 h-4" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
            { name: 'Angular', icon: <SiAngular className="w-4 h-4" /> },
            { name: 'Vue.js', icon: <SiVuedotjs className="w-4 h-4" /> },
            { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" /> },
        ],
    },
    {
        category: 'Backend',
        technologies: [
            { name: 'Java', icon: <FaJava className="w-4 h-4" /> },
            { name: '.NET', icon: <SiDotnet className="w-4 h-4" /> },
            { name: 'Python', icon: <FaPython className="w-4 h-4" /> },
            { name: 'Node.js', icon: <FaNodeJs className="w-4 h-4" /> },
            { name: 'Go', icon: <SiGo className="w-4 h-4" /> },
        ],
    },
    {
        category: 'Databases',
        technologies: [
            { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4" /> },
            { name: 'MongoDB', icon: <SiMongodb className="w-4 h-4" /> },
            { name: 'SQL Server', icon: <FaDatabase className="w-4 h-4" /> },
            { name: 'Redis', icon: <SiRedis className="w-4 h-4" /> },
            { name: 'Elasticsearch', icon: <SiElasticsearch className="w-4 h-4" /> },
        ],
    },
    {
        category: 'AI/ML',
        technologies: [
            { name: 'TensorFlow', icon: <SiTensorflow className="w-4 h-4" /> },
            { name: 'PyTorch', icon: <SiPytorch className="w-4 h-4" /> },
            { name: 'OpenAI', icon: <SiOpenai className="w-4 h-4" /> },
            { name: 'Scikit-learn', icon: <SiScikitlearn className="w-4 h-4" /> },
            { name: 'Hugging Face', icon: <SiHuggingface className="w-4 h-4" /> },
        ],
    },
    {
        category: 'DevOps',
        technologies: [
            { name: 'Docker', icon: <SiDocker className="w-4 h-4" /> },
            { name: 'Kubernetes', icon: <SiKubernetes className="w-4 h-4" /> },
            { name: 'CI/CD', icon: <FaSync className="w-4 h-4" /> },
            { name: 'Terraform', icon: <SiTerraform className="w-4 h-4" /> },
            { name: 'Jenkins', icon: <SiJenkins className="w-4 h-4" /> },
        ],
    },
    {
        category: 'Cloud',
        technologies: [
            { name: 'AWS', icon: <FaAws className="w-4 h-4" /> },
            { name: 'Azure', icon: <FaWindows className="w-4 h-4" /> },
            { name: 'GCP', icon: <SiGooglecloud className="w-4 h-4" /> },
            { name: 'Serverless', icon: <SiServerless className="w-4 h-4" /> },
            { name: 'Edge Computing', icon: <FaNetworkWired className="w-4 h-4" /> },
        ],
    },
]

const securityCompliance = [
    {
        title: 'Enterprise-Grade Security',
        features: ['End-to-end encryption', 'Secure coding practices', 'Vulnerability scanning', 'Security audits'],
    },
    {
        title: 'Role-Based Access Control',
        features: ['Fine-grained permissions', 'Multi-factor authentication', 'SSO integration', 'Audit logging'],
    },
    {
        title: 'Data Protection',
        features: ['Data encryption at rest & transit', 'Secure APIs', 'Data masking', 'Backup & recovery'],
    },
    {
        title: 'Compliance Standards',
        features: ['ISO 27001', 'SOC 2 Type II', 'GDPR', 'Industry-specific compliance'],
    },
]

const industries = [
    {
        name: 'Insurance & FinTech',
        description: 'Policy management, claims processing, underwriting automation',
        icon: <FaBuilding className="w-8 h-8" />,
        link: '/services/software/industries/insurance-fintech',
    },
    {
        name: 'Healthcare',
        description: 'Patient management, EMR/EHR systems, telemedicine platforms',
        icon: <FaShieldAlt className="w-8 h-8" />,
        link: '/services/software/industries/healthcare',
    },
    {
        name: 'Logistics & Fleet Management',
        description: 'Route optimization, tracking systems, warehouse management',
        icon: <FaRocket className="w-8 h-8" />,
        link: '/services/software/industries/logistics',
    },
    {
        name: 'Manufacturing',
        description: 'Production planning, quality control, supply chain management',
        icon: <FaCog className="w-8 h-8" />,
        link: '/services/software/industries/manufacturing',
    },
    {
        name: 'Government & Enterprises',
        description: 'Citizen services, compliance systems, workflow automation',
        icon: <FaLandmark className="w-8 h-8" />,
        link: '/services/software/industries/government',
    },
    {
        name: 'HR & Compliance',
        description: 'HRMS, payroll, attendance, compliance tracking',
        icon: <FaCheckCircle className="w-8 h-8" />,
        link: '/services/software/industries/hr-compliance',
    },
]

const developmentProcess = [
    {
        step: '1',
        title: 'Discovery & Requirement Analysis',
        description: 'Stakeholder interviews, requirements gathering, feasibility study',
    },
    {
        step: '2',
        title: 'Architecture & Solution Design',
        description: 'System architecture, database design, API contracts, UI/UX mockups',
    },
    {
        step: '3',
        title: 'Agile Development & Iterations',
        description: '2-week sprints, continuous integration, regular demos',
    },
    {
        step: '4',
        title: 'Testing & Quality Assurance',
        description: 'Automated testing, security testing, performance testing, UAT',
    },
    {
        step: '5',
        title: 'Deployment & Optimization',
        description: 'Production deployment, monitoring setup, performance tuning',
    },
    {
        step: '6',
        title: 'Ongoing Support & Scaling',
        description: 'Maintenance, feature enhancements, scaling, 24/7 support',
    },
]

const whyChooseUs = [
    {
        title: 'Enterprise-Focused Engineering',
        description: 'Deep expertise in building mission-critical enterprise systems',
        icon: <BuildingOfficeIcon className="w-6 h-6" />,
    },
    {
        title: 'Scalable & Future-Proof',
        description: 'Architecture designed to scale with your business growth',
        icon: <RocketLaunchIcon className="w-6 h-6" />,
    },
    {
        title: 'AI-First Approach',
        description: 'Leverage AI and automation for competitive advantage',
        icon: <SparklesIcon className="w-6 h-6" />,
    },
    {
        title: 'Security by Design',
        description: 'Enterprise-grade security and compliance built-in',
        icon: <ShieldCheckIcon className="w-6 h-6" />,
    },
    {
        title: 'Long-Term Partnership',
        description: 'Ongoing support and continuous improvement',
        icon: <CheckCircleIcon className="w-6 h-6" />,
    },
    {
        title: 'Performance Optimized',
        description: 'High-performance systems built for speed and reliability',
        icon: <ChartBarIcon className="w-6 h-6" />,
    },
]

const caseStudies = [
    {
        title: 'Insurance Platform Digital Transformation',
        industry: 'Insurance',
        challenge: 'Legacy system modernization for a leading insurance provider',
        solution: 'Built cloud-native microservices platform with AI-powered underwriting',
        results: ['70% faster policy processing', '50% reduction in manual work', '99.9% uptime achieved', '40% cost savings'],
    },
    {
        title: 'AI-Powered Document Management',
        industry: 'Healthcare',
        challenge: 'Manual document tracking and compliance management',
        solution: 'Automated document expiry tracking with ML-based classification',
        results: ['100% compliance tracking', '80% time savings', 'Zero missed renewals', 'Real-time notifications'],
    },
    {
        title: 'Fleet Management Automation',
        industry: 'Logistics',
        challenge: 'Inefficient route planning and vehicle tracking',
        solution: 'AI-driven route optimization with real-time tracking and analytics',
        results: ['30% fuel cost reduction', 'Real-time visibility', '25% faster deliveries', 'Predictive maintenance'],
    },
]

const engagementModels = [
    {
        title: 'Fixed-Price Projects',
        description: 'Well-defined scope with fixed timeline and budget',
        bestFor: 'Projects with clear requirements',
        features: ['Fixed cost & timeline', 'Detailed project plan', 'Milestone-based delivery', 'Quality guarantees'],
    },
    {
        title: 'Dedicated Development Teams',
        description: 'Extended team working exclusively on your project',
        bestFor: 'Long-term development needs',
        features: ['Full-time dedicated team', 'Direct team management', 'Flexible scaling', 'Monthly billing'],
        popular: true,
    },
    {
        title: 'Time & Material',
        description: 'Flexible scope with hourly or daily rates',
        bestFor: 'Evolving requirements and R&D',
        features: ['Flexible scope', 'Pay for actual time', 'Agile methodology', 'Regular reporting'],
    },
    {
        title: 'Enterprise Retainers',
        description: 'Ongoing support and development services',
        bestFor: 'Continuous enhancement needs',
        features: ['Priority support', 'Reserved capacity', 'Predictable costs', 'SLA guarantees'],
    },
]

export default function SoftwarePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <CodeBracketIcon className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Enterprise Software Development</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Enterprise Software Development
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Build scalable enterprise applications with AI & intelligent systems, process automation,
                            and digital transformation. Modern architecture, enterprise security, and long-term support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=software-consultation" className="btn-primary">
                                Request a Consultation
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                            What is Enterprise Software Development?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Enterprise software development focuses on building mission-critical applications that power
                            large organizations. We help enterprises modernize legacy systems, automate processes, and
                            scale operations with cloud-native, AI-powered solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                                <div className="text-sm text-gray-600">Enterprise Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
                                <div className="text-sm text-gray-600">Uptime SLA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section id="services" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive software development services for enterprise transformation
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {softwareServices.map((service, index) => (
                            <Link
                                key={index}
                                href={service.link}
                                className="card-enterprise p-8 group hover:shadow-2xl transition-all duration-300 block"
                            >
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-6 group-hover:scale-110 transition-transform">
                                    <div className="text-white">{service.icon}</div>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <span className="text-sm font-semibold text-primary-600 group-hover:text-primary-700 flex items-center mt-auto">
                                    Learn More →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture & Technology */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Architecture & Technology
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Modern architecture patterns and cutting-edge technologies
                        </p>
                    </div>

                    {/* Architecture Patterns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {architectureTech.map((item, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-lg bg-primary-100 text-primary-600 mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Tech Stack Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {techStack.map((stack, index) => (
                                <div key={index} className="card-enterprise p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">{stack.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {stack.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium"
                                            >
                                                <span className="mr-2">{tech.icon}</span>
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Compliance */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Security & Compliance
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade security standards and regulatory compliance
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {securityCompliance.map((item, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-4">
                                    <ShieldCheckIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
                                <ul className="space-y-2">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Industries We Serve
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Specialized expertise across key industry verticals
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <Link
                                key={index}
                                href={industry.link}
                                className="card-enterprise p-8 text-center hover:border-primary-500 transition-colors group"
                            >
                                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-6 group-hover:scale-110 transition-transform">
                                    {industry.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{industry.description}</p>
                                <span className="text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                                    Learn More →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Development Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Structured, agile approach to deliver quality software on time
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {developmentProcess.map((phase, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="w-12 h-12 mb-4 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                                    {phase.step}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-sm text-gray-600">{phase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Why Choose Us
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            What sets us apart in enterprise software development
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600">
                                        {item.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Case Studies & Success Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real results from our enterprise software projects
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
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
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Results:</h4>
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

            {/* Engagement Models */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Engagement Models
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible engagement options to match your project needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {engagementModels.map((model, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-6 relative ${model.popular ? 'ring-2 ring-primary-500 shadow-xl' : ''}`}
                            >
                                {model.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{model.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{model.description}</p>
                                <div className="mb-4 pb-4 border-b border-gray-200">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-primary-600 font-medium">{model.bestFor}</p>
                                </div>
                                <ul className="space-y-2">
                                    {model.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-xs text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Start Your Digital Transformation
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free consultation and project estimate from our enterprise software engineering team
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact?type=software-consultation"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                        >
                            Request a Consultation
                        </Link>
                        <Link
                            href="/contact?type=enterprise-architect"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary-600 transition-all duration-200"
                        >
                            Talk to an Enterprise Architect
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
