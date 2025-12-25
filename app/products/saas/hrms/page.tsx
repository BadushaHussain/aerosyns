import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'HRMS - Human Resource Management System',
    description:
        'Complete employee lifecycle management with payroll, leave, attendance, performance, and self-service portal. Biometric integration and mobile apps included.',
    keywords: [
        'HRMS software UAE',
        'HR management system',
        'payroll software',
        'employee management',
        'attendance system',
    ],
})

const modules = [
    {
        title: 'Employee Onboarding',
        features: ['Digital offer letters', 'Document collection', 'Asset assignment', 'Training schedules'],
    },
    {
        title: 'Leave Management',
        features: ['Leave requests & approvals', 'Leave balance tracking', 'Leave calendar', 'Carry-forward rules'],
    },
    {
        title: 'Attendance Tracking',
        features: ['Biometric integration', 'Shift management', 'Overtime calculation', 'Attendance reports'],
    },
    {
        title: 'Payroll Processing',
        features: ['Salary calculation', 'Tax & deductions', 'Payslip generation', 'Bank file export'],
    },
    {
        title: 'Performance Management',
        features: ['Goal setting', 'Performance reviews', 'Feedback system', '360-degree appraisals'],
    },
    {
        title: 'Document Management',
        features: ['Employee documents', 'Contract management', 'Expiry tracking', 'Digital signatures'],
    },
]

const integrations = [
    'Biometric devices (ZKTeco, Anviz, Suprema)',
    'Accounting systems (QuickBooks, Tally, Xero)',
    'Payroll engines',
    'Email & calendar (Outlook, Gmail)',
    'Single Sign-On (SSO)',
    'Banking systems',
]

export default function HRMSPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                            <UserGroupIcon className="w-5 h-5 text-green-400 mr-2" />
                            <span className="text-green-400 text-sm font-semibold">Human Resources</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            HRMS - Complete HR Solution
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Streamline your HR operations with our comprehensive HRMS. From recruitment to retirement,
                            manage the complete employee lifecycle with payroll, attendance, and performance management.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=hrms-demo" className="btn-primary">
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
                            Why Choose Our HRMS?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built for modern HR teams with automation and employee self-service
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Biometric Integration', desc: 'Connect with any biometric device' },
                            { title: 'Mobile Apps', desc: 'iOS & Android for employees' },
                            { title: 'Payroll Ready', desc: 'Integrated payroll processing' },
                            { title: 'Self-Service', desc: 'Employee & manager portals' },
                            { title: 'Compliance', desc: 'UAE labor law compliant' },
                            { title: 'Multi-Company', desc: 'Manage multiple entities' },
                            { title: 'Cloud-Based', desc: 'Access from anywhere' },
                            { title: 'Customizable', desc: 'Flexible workflows & fields' },
                        ].map((benefit, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.desc}</p>
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
                            HRMS Modules
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive modules covering all HR functions
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modules.map((module, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{module.title}</h3>
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

            {/* Employee Self-Service */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                Employee Self-Service Portal
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Empower employees with self-service access to HR functions, reducing administrative
                                burden and improving employee satisfaction.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { title: 'Leave Requests', desc: 'Apply for leave and track approvals' },
                                    { title: 'Attendance View', desc: 'Check attendance and work hours' },
                                    { title: 'Payslips', desc: 'Download payslips and tax documents' },
                                    { title: 'Profile Update', desc: 'Update personal information' },
                                    { title: 'Documents', desc: 'Access employment documents' },
                                    { title: 'Announcements', desc: 'Company news and updates' },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{item.title}</div>
                                            <div className="text-sm text-gray-600">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-enterprise p-8 bg-gradient-to-br from-green-50 to-emerald-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Integrations</h3>
                            <ul className="space-y-3">
                                {integrations.map((integration, index) => (
                                    <li key={index} className="flex items-start text-gray-700">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                        {integration}
                                    </li>
                                ))}
                            </ul>
                        </div>
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
                            Pay per employee with all features included
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: 'Small Business',
                                price: '$3',
                                period: '/employee/month',
                                description: 'Up to 50 employees',
                                features: ['All core modules', 'Mobile apps', 'Email support', 'Basic reports'],
                            },
                            {
                                name: 'Growing Business',
                                price: '$2.50',
                                period: '/employee/month',
                                description: '51-200 employees',
                                features: ['All features', 'Biometric integration', 'Priority support', 'Advanced reports', 'API access'],
                                popular: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                period: '',
                                description: '200+ employees',
                                features: ['Unlimited employees', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'On-premise option'],
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-600 text-sm">{plan.period}</span>
                                </div>
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
                                    href={`/contact?type=hrms-${plan.name.toLowerCase().replace(' ', '-')}`}
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                            ? 'bg-green-600 text-white hover:bg-green-700'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    Get Started
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
                        Modernize Your HR Operations
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a demo to see how our HRMS can transform your HR department
                    </p>
                    <Link href="/contact?type=hrms-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-green-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
