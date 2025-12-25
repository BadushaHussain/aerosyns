import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { UserGroupIcon, CheckCircleIcon, ClockIcon, CurrencyDollarIcon, ChartBarIcon, DocumentTextIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Resourcegate - Complete HRMS Solution',
    description:
        'Complete Human Resource Management System with employee lifecycle management, payroll processing, leave & attendance tracking, performance management, and HR analytics.',
    keywords: [
        'HRMS software',
        'HR management system',
        'payroll software UAE',
        'employee management',
        'attendance tracking',
        'performance management',
    ],
})

const modules = [
    {
        title: 'Employee Management',
        description: 'Complete employee lifecycle from onboarding to exit',
        icon: UserGroupIcon,
        features: [
            'Digital onboarding workflows',
            'Employee database & profiles',
            'Document management',
            'Organization chart',
            'Employee self-service portal',
            'Exit management',
        ],
    },
    {
        title: 'Leave & Attendance',
        description: 'Automated leave management and attendance tracking',
        icon: ClockIcon,
        features: [
            'Multiple leave types',
            'Leave balance tracking',
            'Approval workflows',
            'Biometric integration',
            'Shift management',
            'Overtime tracking',
        ],
    },
    {
        title: 'Payroll Processing',
        description: 'Automated payroll with compliance and tax calculations',
        icon: CurrencyDollarIcon,
        features: [
            'Salary structure management',
            'Automated payroll processing',
            'Tax calculations',
            'WPS file generation',
            'Payslip generation',
            'Bank transfer integration',
        ],
    },
    {
        title: 'Performance Management',
        description: 'Goal setting, reviews, and performance tracking',
        icon: ChartBarIcon,
        features: [
            'Goal setting & OKRs',
            '360-degree feedback',
            'Performance reviews',
            'KPI tracking',
            'Appraisal workflows',
            'Performance analytics',
        ],
    },
    {
        title: 'Recruitment',
        description: 'End-to-end recruitment and applicant tracking',
        icon: UserGroupIcon,
        features: [
            'Job posting management',
            'Applicant tracking system',
            'Resume parsing',
            'Interview scheduling',
            'Candidate evaluation',
            'Offer letter generation',
        ],
    },
    {
        title: 'Reports & Analytics',
        description: 'Comprehensive HR analytics and reporting',
        icon: DocumentTextIcon,
        features: [
            'HR dashboards',
            'Custom report builder',
            'Headcount analytics',
            'Turnover analysis',
            'Payroll reports',
            'Compliance reports',
        ],
    },
]

const integrations = [
    'Biometric devices (ZKTeco, Anviz, Suprema)',
    'WPS (Wages Protection System) UAE',
    'Accounting systems (QuickBooks, Tally, SAP)',
    'Email & calendar (Outlook, Gmail)',
    'Document signing (DocuSign)',
    'Background verification services',
]

const benefits = [
    {
        title: 'Streamlined Operations',
        description: 'Automate repetitive HR tasks and reduce manual work by 70%',
    },
    {
        title: 'UAE Compliance',
        description: 'Built-in compliance with UAE labor law and WPS requirements',
    },
    {
        title: 'Employee Self-Service',
        description: 'Empower employees with self-service portal for leave, documents, and payslips',
    },
    {
        title: 'Data-Driven Decisions',
        description: 'Real-time analytics and insights for strategic HR planning',
    },
    {
        title: 'Mobile Access',
        description: 'iOS and Android apps for managers and employees',
    },
    {
        title: 'Scalable Solution',
        description: 'Grows with your organization from 10 to 10,000+ employees',
    },
]

export default function ResourcegatePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                            <UserGroupIcon className="w-5 h-5 text-green-400 mr-2" />
                            <span className="text-green-400 text-sm font-semibold">HR Management System</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Resourcegate HRMS
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Complete Human Resource Management System covering employee lifecycle, payroll,
                            attendance, performance, and recruitment. Built for UAE businesses with WPS compliance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=resourcegate-demo" className="btn-primary">
                                Request Demo
                            </Link>
                            <Link href="#modules" className="btn-secondary">
                                View Modules
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Why Choose Resourcegate?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Modern HRMS designed for the Middle East market
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <CheckCircleIcon className="w-7 h-7 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modules */}
            <section id="modules" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Comprehensive HR Modules
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to manage your workforce effectively
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modules.map((module, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                    <module.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {module.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{module.description}</p>
                                <ul className="space-y-2">
                                    {module.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UAE Compliance */}
            <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                            UAE Labor Law Compliant
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Resourcegate is built with UAE-specific compliance features to ensure your HR operations
                            meet all regulatory requirements
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'WPS Integration',
                                    description: 'Automated WPS file generation and submission for salary transfers',
                                },
                                {
                                    title: 'UAE Labor Law',
                                    description: 'Leave policies, gratuity calculations, and end-of-service benefits',
                                },
                                {
                                    title: 'MOL Compliance',
                                    description: 'Ministry of Labour reporting and documentation requirements',
                                },
                                {
                                    title: 'Visa & Work Permit',
                                    description: 'Track employee visas, work permits, and Emirates ID expiry',
                                },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border-2 border-green-200 text-left">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                Seamless Integrations
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Connect Resourcegate with your existing systems and devices for a unified
                                HR ecosystem.
                            </p>
                            <ul className="space-y-3">
                                {integrations.map((integration, index) => (
                                    <li key={index} className="flex items-start text-gray-700">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                        {integration}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-enterprise p-8 bg-gradient-to-br from-green-50 to-emerald-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Architecture', value: 'Cloud-Native SaaS' },
                                    { label: 'API', value: 'RESTful API' },
                                    { label: 'Security', value: 'AES-256 Encryption' },
                                    { label: 'Authentication', value: 'SSO, MFA, RBAC' },
                                    { label: 'Deployment', value: 'Cloud, On-Premise' },
                                    { label: 'Mobile Apps', value: 'iOS & Android' },
                                ].map((spec, index) => (
                                    <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span className="font-semibold text-gray-900">{spec.label}</span>
                                        <span className="text-green-600 text-sm">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Employee Self-Service */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Employee Self-Service Portal
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Empower your employees with 24/7 access to their HR information
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Leave Requests', desc: 'Apply for leave and track balance' },
                            { title: 'Payslips', desc: 'Download payslips and tax documents' },
                            { title: 'Attendance', desc: 'View attendance and timesheet' },
                            { title: 'Documents', desc: 'Access employment documents' },
                            { title: 'Profile Update', desc: 'Update personal information' },
                            { title: 'Expense Claims', desc: 'Submit and track expenses' },
                            { title: 'Performance', desc: 'View goals and feedback' },
                            { title: 'Directory', desc: 'Employee directory and org chart' },
                        ].map((feature, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Flexible Pricing Plans
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the plan that fits your organization size
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Starter',
                                price: 'AED 15',
                                period: '/employee/month',
                                description: 'For small businesses (10-50 employees)',
                                features: ['Core HR modules', 'Leave & Attendance', 'Basic payroll', 'Employee self-service', 'Email support'],
                                minEmployees: 'Minimum 10 employees',
                            },
                            {
                                title: 'Professional',
                                price: 'AED 12',
                                period: '/employee/month',
                                description: 'For growing companies (51-200 employees)',
                                features: ['All Starter features', 'Performance management', 'Recruitment module', 'Advanced reports', 'Priority support', 'API access'],
                                popular: true,
                                minEmployees: 'Minimum 50 employees',
                            },
                            {
                                title: 'Enterprise',
                                price: 'Custom',
                                period: '',
                                description: 'For large organizations (200+ employees)',
                                features: ['All Professional features', 'Custom workflows', 'Dedicated account manager', 'On-premise option', 'SLA guarantee', 'Custom integrations'],
                                minEmployees: 'Custom pricing',
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${plan.popular ? 'ring-2 ring-green-500 shadow-2xl' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-green-600 text-white text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                                <div className="mb-2">
                                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-600 text-sm">{plan.period}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">{plan.minEmployees}</p>
                                <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact?type=resourcegate-quote"
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                        ? 'bg-green-600 text-white hover:bg-green-700'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    Get Quote
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Transform Your HR Operations
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a demo to see how Resourcegate can streamline your HR processes
                    </p>
                    <Link href="/contact?type=resourcegate-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-green-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
