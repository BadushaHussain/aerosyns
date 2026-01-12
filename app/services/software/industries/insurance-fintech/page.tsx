import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, BuildingOfficeIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Insurance & FinTech Software Development Services',
    description: 'Custom software solutions for insurance and fintech companies. Policy management, claims processing, underwriting automation, fraud detection, and regulatory compliance systems.',
    keywords: ['insurance software', 'fintech development', 'policy management system', 'claims processing', 'underwriting automation', 'insurance tech UAE'],
})

const solutions = [
    {
        title: 'Policy Administration Systems',
        description: 'End-to-end policy lifecycle management',
        features: ['Policy issuance & renewals', 'Premium calculations', 'Multi-product support', 'Agent portals', 'Customer self-service', 'Document management'],
    },
    {
        title: 'Claims Processing & Management',
        description: 'Automated claims workflow and fraud detection',
        features: ['Claims intake & triage', 'Automated adjudication', 'Fraud detection AI', 'Payment processing', 'Third-party integration', 'Mobile claims app'],
    },
    {
        title: 'Underwriting Automation',
        description: 'AI-powered risk assessment and pricing',
        features: ['Automated risk scoring', 'Pricing optimization', 'Rules engine', 'Data integration', 'Predictive analytics', 'Straight-through processing'],
    },
    {
        title: 'Reinsurance Management',
        description: 'Comprehensive reinsurance operations platform',
        features: ['Treaty management', 'Bordereau processing', 'Claims recovery', 'Reporting & analytics', 'Accounting integration', 'Partner portals'],
    },
    {
        title: 'Agent & Broker Portals',
        description: 'Digital platforms for distribution channels',
        features: ['Quote generation', 'Policy binding', 'Commission tracking', 'Performance dashboards', 'Training & resources', 'Mobile access'],
    },
]

const challenges = [
    { challenge: 'Legacy System Constraints', solution: 'Modernize with cloud-native microservices architecture' },
    { challenge: 'Manual Claims Processing', solution: 'Automate with AI-powered workflow and fraud detection' },
    { challenge: 'Regulatory Compliance', solution: 'Built-in compliance frameworks and audit trails' },
    { challenge: 'Customer Experience', solution: 'Self-service portals and mobile-first design' },
    { challenge: 'Data Silos', solution: 'Integrated platforms with real-time data synchronization' },
    { challenge: 'Fraud & Risk', solution: 'ML-based fraud detection and risk assessment' },
]

const technologies = {
    'Core Platform': ['Java Spring Boot', '.NET Core', 'Python', 'Node.js'],
    'AI & Analytics': ['TensorFlow', 'Scikit-learn', 'Power BI', 'Tableau'],
    'Integration': ['REST APIs', 'GraphQL', 'Apache Kafka', 'MuleSoft'],
    'Compliance': ['ISO 27001', 'SOC 2', 'GDPR', 'Local Regulations'],
}

const caseStudies = [
    {
        title: 'Policy Admin Modernization',
        client: 'Leading Insurance Provider',
        challenge: 'Legacy system causing 5-7 day policy issuance time',
        solution: 'Cloud-native policy admin system with automated workflows',
        results: ['70% faster policy issuance', '50% reduction in manual work', '99.9% uptime', '40% cost savings'],
    },
    {
        title: 'Claims Fraud Detection',
        client: 'Regional Insurance Company',
        challenge: 'Manual claims review missing fraudulent claims',
        solution: 'AI-powered fraud detection analyzing 50+ risk factors',
        results: ['95% fraud detection accuracy', '$2M annual savings', '70% faster review time', '99% false positive reduction'],
    },
]

const compliance = [
    { standard: 'Data Protection', requirements: ['GDPR compliance', 'Data encryption', 'Privacy by design', 'Right to be forgotten'] },
    { standard: 'Financial Regulations', requirements: ['AML/KYC compliance', 'Regulatory reporting', 'Audit trails', 'Transaction monitoring'] },
    { standard: 'Insurance Standards', requirements: ['Solvency II', 'IFRS 17', 'Local regulations', 'Industry best practices'] },
]

export default function InsuranceFinTechPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/software" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to Software Services
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <BuildingOfficeIcon className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 text-sm font-semibold">Insurance & FinTech</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Insurance & FinTech Software Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Transform insurance operations with modern software solutions. From policy administration to claims processing
                            and underwriting automation—built for the digital age.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=insurance-consultation" className="btn-primary">
                                Request Consultation
                            </Link>
                            <Link href="#solutions" className="btn-secondary">
                                View Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                            Digital Transformation for Insurance
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            The insurance industry is undergoing rapid digital transformation. Legacy systems, manual processes, and
                            regulatory complexity demand modern software solutions that enable efficiency, compliance, and superior customer experience.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
                                <div className="text-sm text-gray-600">Faster Processing</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                                <div className="text-sm text-gray-600">Fraud Detection</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">$2M+</div>
                                <div className="text-sm text-gray-600">Annual Savings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Key Challenges & Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Addressing critical pain points in insurance operations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {challenges.map((item, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.challenge}</h3>
                                <p className="text-sm text-gray-600 mb-4">Solution:</p>
                                <p className="text-sm text-primary-600 font-semibold">{item.solution}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="solutions" className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Insurance Software Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive platforms for modern insurance operations
                        </p>
                    </div>
                    <div className="space-y-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                                <p className="text-gray-600 mb-6">{solution.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </div>
                                    ))}
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
                            Technology Stack
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade technologies for insurance platforms
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(technologies).map(([category, techs]) => (
                            <div key={category} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
                                <div className="space-y-2">
                                    {techs.map((tech, idx) => (
                                        <div key={idx} className="text-sm text-gray-600">• {tech}</div>
                                    ))}
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
                            Success Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real results from insurance software implementations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
                                    {study.client}
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

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Compliance & Security
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built-in compliance for insurance regulations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {compliance.map((item, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                                    <ShieldCheckIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.standard}</h3>
                                <ul className="space-y-2">
                                    {item.requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Transform Your Insurance Operations?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free consultation and discover how modern software can revolutionize your insurance business
                    </p>
                    <Link
                        href="/contact?type=insurance-consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
