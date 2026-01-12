import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, CodeBracketIcon, ServerIcon, CpuChipIcon, CloudIcon } from '@heroicons/react/24/solid'
import { FaDatabase, FaShieldAlt, FaMobile, FaChartLine } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Custom Enterprise Application Development Services',
    description: 'Build scalable ERP, CRM, HRMS, and SCM solutions with microservices architecture, cloud-native development, and API-first design. Enterprise-grade custom applications for complex business requirements.',
    keywords: ['enterprise application development', 'ERP development', 'CRM development', 'HRMS development', 'SCM solutions', 'microservices', 'cloud-native', 'custom software UAE'],
})

const coreSolutions = [
    {
        title: 'ERP Systems',
        description: 'Comprehensive enterprise resource planning solutions',
        icon: ServerIcon,
        features: [
            'Financial management & accounting',
            'Inventory & warehouse management',
            'Procurement & vendor management',
            'Manufacturing & production planning',
            'Multi-company & multi-currency support',
            'Real-time reporting & analytics',
        ],
        useCases: ['Manufacturing operations', 'Distribution management', 'Financial consolidation', 'Supply chain visibility'],
    },
    {
        title: 'CRM Platforms',
        description: 'Customer relationship management for sales excellence',
        icon: FaChartLine,
        features: [
            'Sales pipeline & opportunity management',
            'Customer 360-degree view',
            'Marketing automation & campaigns',
            'Service desk & ticketing',
            'Email, WhatsApp, telephony integration',
            'AI-powered lead scoring',
        ],
        useCases: ['Sales automation', 'Customer support', 'Marketing campaigns', 'Partner management'],
    },
    {
        title: 'HRMS Solutions',
        description: 'Complete employee lifecycle management',
        icon: FaMobile,
        features: [
            'Recruitment & onboarding',
            'Payroll & benefits administration',
            'Time & attendance tracking',
            'Performance management',
            'Learning & development',
            'Employee self-service portal',
        ],
        useCases: ['Payroll processing', 'Performance reviews', 'Leave management', 'Training programs'],
    },
    {
        title: 'SCM Systems',
        description: 'End-to-end supply chain visibility and control',
        icon: CloudIcon,
        features: [
            'Demand planning & forecasting',
            'Supplier relationship management',
            'Logistics & transportation',
            'Warehouse management',
            'Order fulfillment tracking',
            'Real-time inventory visibility',
        ],
        useCases: ['Logistics optimization', 'Vendor management', 'Demand forecasting', 'Distribution planning'],
    },
]

const architectureFeatures = [
    {
        title: 'Microservices Architecture',
        description: 'Independently deployable services for flexibility and scalability',
        benefits: ['Independent scaling', 'Technology diversity', 'Fault isolation', 'Faster deployment'],
    },
    {
        title: 'API-First Design',
        description: 'RESTful and GraphQL APIs for seamless integration',
        benefits: ['Third-party integration', 'Mobile app support', 'Partner ecosystems', 'Future-proof design'],
    },
    {
        title: 'Cloud-Native Deployment',
        description: 'Built for AWS, Azure, and GCP with containerization',
        benefits: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization'],
    },
    {
        title: 'Event-Driven Architecture',
        description: 'Real-time data processing and asynchronous communication',
        benefits: ['Real-time updates', 'System decoupling', 'Better performance', 'Scalable processing'],
    },
]

const techStack = {
    frontend: ['React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Java Spring Boot', '.NET Core', 'Python Django', 'Node.js Express', 'Go', 'Microservices'],
    databases: ['PostgreSQL', 'MongoDB', 'SQL Server', 'Oracle', 'Redis', 'Elasticsearch'],
    integration: ['Apache Kafka', 'RabbitMQ', 'REST APIs', 'GraphQL', 'gRPC', 'WebSockets'],
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Terraform', 'Ansible'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'Serverless', 'CDN', 'Load Balancers'],
}

const industryApplications = [
    {
        industry: 'Insurance',
        applications: ['Policy administration', 'Claims processing', 'Agent portal', 'Underwriting automation', 'Reinsurance management'],
    },
    {
        industry: 'Healthcare',
        applications: ['Patient management', 'EMR/EHR systems', 'Billing & claims', 'Appointment scheduling', 'Telemedicine platform'],
    },
    {
        industry: 'Manufacturing',
        applications: ['Production planning', 'Quality control', 'Equipment maintenance', 'Shop floor management', 'Supply chain tracking'],
    },
    {
        industry: 'Retail',
        applications: ['Inventory management', 'POS systems', 'E-commerce platform', 'Customer loyalty', 'Omnichannel retail'],
    },
    {
        industry: 'Banking',
        applications: ['Core banking', 'Loan management', 'Digital banking', 'Payment processing', 'Risk management'],
    },
    {
        industry: 'Logistics',
        applications: ['Fleet management', 'Route optimization', 'Warehouse management', 'Shipment tracking', 'Last-mile delivery'],
    },
]

const keyFeatures = [
    { feature: 'Role-Based Access Control (RBAC)', description: 'Fine-grained permissions and security' },
    { feature: 'Multi-Tenant Architecture', description: 'Support multiple organizations with data isolation' },
    { feature: 'Real-Time Analytics', description: 'Live dashboards and business intelligence' },
    { feature: 'Mobile-First Design', description: 'Responsive web and native mobile apps' },
    { feature: 'Offline Capabilities', description: 'Work without internet, sync when online' },
    { feature: 'Third-Party Integrations', description: 'Connect with existing systems and tools' },
    { feature: 'Audit Logging', description: 'Complete audit trail for compliance' },
    { feature: 'Workflow Engine', description: 'Customizable business process automation' },
]

const caseStudies = [
    {
        title: 'Insurance Platform Transformation',
        industry: 'Insurance',
        challenge: 'Legacy policy administration system causing delays and errors',
        solution: 'Built cloud-native microservices platform with AI-powered underwriting and automated claims processing',
        results: ['70% faster policy issuance', '50% reduction in manual work', '99.9% uptime achieved', '40% cost savings'],
        technologies: ['Next.js', 'Java Spring Boot', 'PostgreSQL', 'AWS', 'Kafka'],
    },
    {
        title: 'Manufacturing ERP Implementation',
        industry: 'Manufacturing',
        challenge: 'Disconnected systems causing production delays and inventory issues',
        solution: 'Integrated ERP system with real-time production tracking, inventory management, and quality control',
        results: ['30% reduction in inventory costs', '25% faster production cycles', 'Real-time visibility', 'Zero stockouts'],
        technologies: ['.NET Core', 'Angular', 'SQL Server', 'Azure', 'SignalR'],
    },
    {
        title: 'Healthcare CRM Deployment',
        industry: 'Healthcare',
        challenge: 'Poor patient engagement and fragmented communication',
        solution: 'Custom CRM with patient portal, appointment scheduling, and multi-channel communication',
        results: ['60% increase in patient engagement', '40% reduction in no-shows', '95% patient satisfaction', 'Automated reminders'],
        technologies: ['React', 'Python Django', 'PostgreSQL', 'GCP', 'Twilio'],
    },
]

const implementationProcess = [
    {
        phase: 'Discovery & Requirements',
        duration: '2-4 weeks',
        activities: ['Stakeholder interviews', 'Process mapping', 'Requirements documentation', 'Feasibility study', 'Project roadmap'],
    },
    {
        phase: 'Architecture Design',
        duration: '2-3 weeks',
        activities: ['System architecture', 'Database design', 'API contracts', 'UI/UX mockups', 'Technology selection'],
    },
    {
        phase: 'Development & Testing',
        duration: '12-24 weeks',
        activities: ['Agile sprints (2 weeks)', 'Continuous integration', 'Automated testing', 'Code reviews', 'Security testing'],
    },
    {
        phase: 'Deployment & Training',
        duration: '2-4 weeks',
        activities: ['Production deployment', 'User training', 'Documentation', 'Performance tuning', 'Go-live support'],
    },
    {
        phase: 'Support & Maintenance',
        duration: 'Ongoing',
        activities: ['24/7 monitoring', 'Bug fixes', 'Feature enhancements', 'Performance optimization', 'Security updates'],
    },
]

const pricingModels = [
    {
        model: 'Fixed-Price Projects',
        description: 'Well-defined scope with fixed timeline and budget',
        bestFor: 'Projects with clear requirements and defined scope',
        pricing: 'Starting from $50,000',
    },
    {
        model: 'Time & Material',
        description: 'Flexible scope with hourly or daily rates',
        bestFor: 'Evolving requirements and exploratory projects',
        pricing: '$75-150 per hour',
    },
    {
        model: 'Dedicated Development Teams',
        description: 'Full-time team working exclusively on your project',
        bestFor: 'Long-term development and ongoing enhancements',
        pricing: 'Starting from $15,000/month',
        popular: true,
    },
]

export default function EnterpriseApplicationsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/software" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to Software Services
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <CodeBracketIcon className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Enterprise Applications</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Custom Enterprise Application Development
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Build scalable, secure enterprise systems with modern architecture. From ERP and CRM to HRMS and SCM—
                            custom-engineered for your complex business requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=enterprise-app-consultation" className="btn-primary">
                                Request Consultation
                            </Link>
                            <Link href="#solutions" className="btn-secondary">
                                View Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6 text-center">
                            Enterprise-Grade Custom Applications
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="text-lg mb-4">
                                Enterprise applications are mission-critical systems that power large organizations. Unlike off-the-shelf software,
                                custom enterprise applications are built specifically for your unique business processes, workflows, and requirements.
                            </p>
                            <p className="text-lg mb-4">
                                We specialize in building scalable, secure, and maintainable enterprise systems using modern architecture patterns
                                like microservices, cloud-native deployment, and API-first design. Our applications are built to handle high transaction
                                volumes, complex business logic, and integrate seamlessly with your existing systems.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                                    <div className="text-sm text-gray-600">Enterprise Apps Built</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
                                    <div className="text-sm text-gray-600">Uptime SLA</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary-600 mb-2">50M+</div>
                                    <div className="text-sm text-gray-600">Transactions/Day</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Solutions */}
            <section id="solutions" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Core Enterprise Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive systems for every aspect of your business operations
                        </p>
                    </div>
                    <div className="space-y-12">
                        {coreSolutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500">
                                            <solution.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                                        <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                                                <ul className="space-y-2">
                                                    {solution.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                                            <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Common Use Cases</h4>
                                                <ul className="space-y-2">
                                                    {solution.useCases.map((useCase, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                                            <CheckCircleIcon className="w-5 h-5 text-secondary-500 mr-2 flex-shrink-0 mt-0.5" />
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

            {/* Architecture Approach */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Modern Architecture Approach
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built for scale, performance, and future growth
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {architectureFeatures.map((arch, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{arch.title}</h3>
                                <p className="text-gray-600 mb-6">{arch.description}</p>
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Benefits:</h4>
                                    {arch.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Technology Stack
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade technologies for robust, scalable applications
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(techStack).map(([category, technologies]) => (
                            <div key={category} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 capitalize">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech, idx) => (
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

            {/* Industry Applications */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Industry Applications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Specialized solutions for diverse industry verticals
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industryApplications.map((industry, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                                <ul className="space-y-2">
                                    {industry.applications.map((app, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {app}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Enterprise Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built-in capabilities for enterprise-grade applications
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {keyFeatures.map((item, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 mb-4">
                                    <FaShieldAlt className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
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
                            Real results from our enterprise application projects
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
                                <div className="mb-6">
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
                                <div>
                                    <h4 className="text-xs font-semibold text-gray-500 mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {study.technologies.map((tech, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Implementation Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Structured approach to deliver enterprise applications on time
                        </p>
                    </div>
                    <div className="space-y-6">
                        {implementationProcess.map((phase, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                                            <span className="text-sm font-semibold text-primary-600">{phase.duration}</span>
                                        </div>
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

            {/* Pricing Models */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Engagement Models
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible pricing to match your project needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingModels.map((model, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${model.popular ? 'ring-2 ring-primary-500 shadow-xl' : ''}`}
                            >
                                {model.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{model.model}</h3>
                                <div className="text-3xl font-bold text-primary-600 mb-4">{model.pricing}</div>
                                <p className="text-gray-600 mb-4">{model.description}</p>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-gray-700">{model.bestFor}</p>
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
                        Ready to Build Your Enterprise Application?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free consultation and project estimate from our enterprise application development team
                    </p>
                    <Link
                        href="/contact?type=enterprise-app-consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
