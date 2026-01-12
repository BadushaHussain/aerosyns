import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, CogIcon } from '@heroicons/react/24/solid'
import { FaRobot, FaFileAlt, FaExchangeAlt, FaCogs } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Process Automation Services - RPA & Workflow Automation',
    description: 'Automate business processes with RPA, workflow automation, and document processing. Reduce manual work by 80% with intelligent automation solutions.',
    keywords: ['process automation', 'RPA', 'workflow automation', 'document automation', 'business process automation', 'robotic process automation UAE'],
})

const automationSolutions = [
    {
        title: 'Workflow Automation',
        description: 'Automate complex business processes and approval workflows',
        icon: FaCogs,
        features: ['Multi-step workflow design', 'Conditional logic & branching', 'Parallel task execution', 'Email & notification triggers', 'SLA monitoring', 'Audit trail'],
        useCases: ['Purchase approvals', 'Employee onboarding', 'Expense management', 'Contract workflows'],
    },
    {
        title: 'Robotic Process Automation (RPA)',
        description: 'Software robots to automate repetitive tasks',
        icon: FaRobot,
        features: ['UI automation', 'Data entry automation', 'Screen scraping', 'Excel automation', 'Email processing', 'Report generation'],
        useCases: ['Data migration', 'Invoice processing', 'Customer onboarding', 'Report compilation'],
    },
    {
        title: 'Document Automation',
        description: 'Intelligent document processing with OCR and AI',
        icon: FaFileAlt,
        features: ['OCR & text extraction', 'Document classification', 'Data validation', 'Template-based generation', 'E-signature integration', 'Archive & retrieval'],
        useCases: ['Invoice processing', 'Contract management', 'KYC documents', 'Compliance forms'],
    },
    {
        title: 'Integration Automation',
        description: 'Connect systems and automate data flows',
        icon: FaExchangeAlt,
        features: ['API integration', 'Data synchronization', 'ETL pipelines', 'Real-time updates', 'Error handling', 'Monitoring & alerts'],
        useCases: ['CRM-ERP sync', 'Multi-system updates', 'Data warehousing', 'Third-party integration'],
    },
]

const automationTechnologies = {
    'RPA Tools': ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate', 'Robocorp'],
    'Workflow Engines': ['Camunda', 'Apache Airflow', 'Temporal', 'n8n', 'Zapier'],
    'Document AI': ['Google Document AI', 'AWS Textract', 'Azure Form Recognizer', 'ABBYY', 'Tesseract OCR'],
    'Integration': ['MuleSoft', 'Dell Boomi', 'Apache Camel', 'Talend', 'Informatica'],
}

const commonScenarios = [
    { scenario: 'Invoice Processing', description: 'Extract data from invoices, validate, and post to accounting system', savings: '90% time reduction' },
    { scenario: 'Employee Onboarding', description: 'Automate account creation, access provisioning, and documentation', savings: '5 days → 2 hours' },
    { scenario: 'Customer Service Tickets', description: 'Auto-route, categorize, and respond to support tickets', savings: '70% faster resolution' },
    { scenario: 'Data Migration', description: 'Extract, transform, and load data between systems', savings: '95% accuracy' },
    { scenario: 'Report Generation', description: 'Compile data from multiple sources into formatted reports', savings: '80% time savings' },
    { scenario: 'Compliance Reporting', description: 'Automated regulatory report generation and submission', savings: '100% compliance' },
]

const industryApplications = [
    {
        industry: 'Finance & Banking',
        automations: ['Loan processing', 'Account reconciliation', 'Compliance reporting', 'Customer onboarding', 'Fraud detection'],
    },
    {
        industry: 'HR & Payroll',
        automations: ['Employee onboarding', 'Payroll processing', 'Leave management', 'Performance reviews', 'Benefits administration'],
    },
    {
        industry: 'Healthcare',
        automations: ['Patient registration', 'Insurance verification', 'Claims processing', 'Appointment scheduling', 'Billing automation'],
    },
    {
        industry: 'Logistics',
        automations: ['Order processing', 'Shipment tracking', 'Inventory updates', 'Invoice matching', 'Carrier integration'],
    },
    {
        industry: 'Insurance',
        automations: ['Claims processing', 'Policy renewals', 'Underwriting', 'Premium calculations', 'Document verification'],
    },
]

const implementationApproach = [
    { phase: 'Process Discovery', activities: ['Process mapping', 'Automation potential assessment', 'ROI calculation', 'Prioritization'] },
    { phase: 'Automation Design', activities: ['Workflow design', 'Exception handling', 'Integration planning', 'Security review'] },
    { phase: 'Bot Development', activities: ['RPA bot creation', 'Testing', 'Error handling', 'Documentation'] },
    { phase: 'Deployment', activities: ['Production deployment', 'User training', 'Monitoring setup', 'Support handover'] },
    { phase: 'Optimization', activities: ['Performance monitoring', 'Process refinement', 'Scaling', 'Continuous improvement'] },
]

const caseStudies = [
    {
        title: 'Insurance Claims Automation',
        industry: 'Insurance',
        challenge: 'Manual claims processing taking 5-7 days',
        solution: 'RPA bots for data extraction, validation, and system updates',
        results: ['70% time reduction', '95% accuracy', '$500K annual savings', '24/7 processing'],
    },
    {
        title: 'HR Onboarding Automation',
        industry: 'Enterprise',
        challenge: 'Employee onboarding taking 5 days with multiple touchpoints',
        solution: 'Workflow automation for account creation, access provisioning, and documentation',
        results: ['5 days → 2 hours', '100% compliance', 'Zero errors', 'Better employee experience'],
    },
    {
        title: 'Invoice Processing Automation',
        industry: 'Manufacturing',
        challenge: 'Manual invoice processing causing payment delays',
        solution: 'OCR + RPA for invoice extraction and ERP posting',
        results: ['90% faster processing', '98% accuracy', '60% cost reduction', 'Real-time visibility'],
    },
]

export default function ProcessAutomationPage() {
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
                            <CogIcon className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 text-sm font-semibold">Process Automation</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Process Automation Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Automate workflows and eliminate manual processes. From RPA to intelligent document processing—
                            reduce costs by 60% and increase efficiency by 80%.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=automation-consultation" className="btn-primary">
                                Automate Your Processes
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
                            Why Automate Business Processes?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Process automation eliminates repetitive manual tasks, reduces errors, and frees your team to focus on
                            high-value work. Our automation solutions deliver measurable ROI within months.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                                <div className="text-sm text-gray-600">Time Savings</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                                <div className="text-sm text-gray-600">Accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                                <div className="text-sm text-gray-600">Cost Reduction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                                <div className="text-sm text-gray-600">Operation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Automation Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive automation for every business process
                        </p>
                    </div>
                    <div className="space-y-12">
                        {automationSolutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                                            <solution.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                                        <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Features</h4>
                                                <ul className="space-y-2">
                                                    {solution.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                                            <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Use Cases</h4>
                                                <ul className="space-y-2">
                                                    {solution.useCases.map((useCase, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                                            <CheckCircleIcon className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
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
                            Automation Technologies
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Best-in-class automation tools and platforms
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(automationTechnologies).map(([category, tools]) => (
                            <div key={category} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((tool, idx) => (
                                        <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                                            {tool}
                                        </span>
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
                            Common Automation Scenarios
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world automation use cases with proven results
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {commonScenarios.map((scenario, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{scenario.scenario}</h3>
                                <p className="text-sm text-gray-600 mb-4">{scenario.description}</p>
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                                    {scenario.savings}
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
                            Industry Applications
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industryApplications.map((industry, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                                <ul className="space-y-2">
                                    {industry.automations.map((automation, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {automation}
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
                            Implementation Approach
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {implementationApproach.map((phase, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
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
                            Automation Success Stories
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
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
                        Ready to Automate Your Processes?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free automation assessment and ROI analysis from our process automation experts
                    </p>
                    <Link
                        href="/contact?type=automation-consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Request Automation Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
