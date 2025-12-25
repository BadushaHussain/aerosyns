import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { FingerPrintIcon, CheckCircleIcon, ClockIcon, ShieldCheckIcon, UserGroupIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Metricslog - Biometric Access Control & Attendance',
    description:
        'Complete biometric access control and attendance management system with fingerprint, face recognition, and RFID integration. Real-time tracking and comprehensive reporting.',
    keywords: [
        'biometric attendance system',
        'access control UAE',
        'fingerprint attendance',
        'face recognition',
        'time attendance software',
        'biometric integration',
    ],
})

const modules = [
    {
        title: 'Biometric Integration',
        description: 'Seamless integration with all major biometric devices',
        icon: FingerPrintIcon,
        features: [
            'Fingerprint scanners',
            'Face recognition cameras',
            'RFID card readers',
            'Palm vein scanners',
            'Iris recognition',
            'Multi-device support',
        ],
    },
    {
        title: 'Time & Attendance',
        description: 'Automated attendance tracking with shift management',
        icon: ClockIcon,
        features: [
            'Real-time attendance tracking',
            'Shift scheduling',
            'Overtime calculation',
            'Late/early tracking',
            'Break management',
            'Attendance reports',
        ],
    },
    {
        title: 'Access Control',
        description: 'Secure access management for doors and restricted areas',
        icon: ShieldCheckIcon,
        features: [
            'Door access control',
            'Zone-based restrictions',
            'Time-based access',
            'Visitor management',
            'Access logs & audit trail',
            'Emergency unlock',
        ],
    },
    {
        title: 'Employee Management',
        description: 'Complete employee database and profile management',
        icon: UserGroupIcon,
        features: [
            'Employee profiles',
            'Department management',
            'Shift assignment',
            'Leave integration',
            'Photo capture',
            'Bulk enrollment',
        ],
    },
    {
        title: 'Mobile Access',
        description: 'Mobile apps for employees and administrators',
        icon: DevicePhoneMobileIcon,
        features: [
            'Mobile attendance',
            'GPS location tracking',
            'Remote check-in/out',
            'Leave requests',
            'Attendance history',
            'Push notifications',
        ],
    },
    {
        title: 'Reports & Analytics',
        description: 'Comprehensive reporting and analytics dashboard',
        icon: CheckCircleIcon,
        features: [
            'Attendance reports',
            'Late/absent reports',
            'Overtime reports',
            'Access logs',
            'Custom report builder',
            'Export to Excel/PDF',
        ],
    },
]

const supportedDevices = [
    {
        brand: 'ZKTeco',
        models: 'All models (F18, K40, MB360, etc.)',
    },
    {
        brand: 'Anviz',
        models: 'Face recognition and fingerprint devices',
    },
    {
        brand: 'Suprema',
        models: 'BioStation, BioLite series',
    },
    {
        brand: 'Hikvision',
        models: 'Face recognition terminals',
    },
    {
        brand: 'Dahua',
        models: 'Access control and attendance devices',
    },
    {
        brand: 'eSSL',
        models: 'All fingerprint and face models',
    },
]

const features = [
    {
        title: 'Real-Time Sync',
        description: 'Instant synchronization of attendance data from all devices',
    },
    {
        title: 'Cloud-Based',
        description: 'Access from anywhere with secure cloud infrastructure',
    },
    {
        title: 'Multi-Location',
        description: 'Manage multiple offices and branches from single dashboard',
    },
    {
        title: 'Payroll Integration',
        description: 'Seamless integration with payroll systems for accurate salary processing',
    },
    {
        title: 'Shift Management',
        description: 'Flexible shift scheduling with automatic rotation',
    },
    {
        title: 'Leave Integration',
        description: 'Integrated with leave management for accurate attendance',
    },
    {
        title: 'Visitor Management',
        description: 'Track and manage visitor access with photo capture',
    },
    {
        title: 'Alerts & Notifications',
        description: 'Real-time alerts for late arrivals, absences, and unauthorized access',
    },
]

const useCases = [
    {
        industry: 'Corporate Offices',
        description: 'Employee attendance tracking, access control for restricted areas, visitor management',
    },
    {
        industry: 'Manufacturing',
        description: 'Shift-based attendance, production floor access, overtime tracking',
    },
    {
        industry: 'Healthcare',
        description: 'Staff attendance, restricted area access, visitor tracking, compliance reporting',
    },
    {
        industry: 'Education',
        description: 'Faculty attendance, student access control, campus security',
    },
    {
        industry: 'Retail',
        description: 'Store staff attendance, shift management, multi-location tracking',
    },
    {
        industry: 'Hospitality',
        description: 'Hotel staff attendance, guest area access, shift scheduling',
    },
]

export default function MetricslogPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                            <FingerPrintIcon className="w-5 h-5 text-orange-400 mr-2" />
                            <span className="text-orange-400 text-sm font-semibold">Biometric Access Control</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Metricslog Biometric System
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Complete biometric access control and attendance management system with fingerprint,
                            face recognition, and RFID integration. Real-time tracking with comprehensive reporting.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=metricslog-demo" className="btn-primary">
                                Request Demo
                            </Link>
                            <Link href="#modules" className="btn-secondary">
                                View Features
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Why Choose Metricslog?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive biometric solution for modern businesses
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                    <CheckCircleIcon className="w-7 h-7 text-orange-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
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
                            Comprehensive Modules
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need for complete access control and attendance management
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modules.map((module, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                                    <module.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {module.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{module.description}</p>
                                <ul className="space-y-2">
                                    {module.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supported Devices */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Device Compatibility
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Metricslog supports all major biometric device brands
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {supportedDevices.map((device, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{device.brand}</h3>
                                <p className="text-sm text-gray-600">{device.models}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            Don't see your device? <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-semibold">Contact us</Link> for custom integration
                        </p>
                    </div>
                </div>
            </section>

            {/* Industry Use Cases */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Industry Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Metricslog serves businesses across various industries
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.industry}</h3>
                                <p className="text-sm text-gray-600">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration & Technical Specs */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                Seamless Integrations
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Connect Metricslog with your existing HR and payroll systems for a unified workforce management solution.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'HRMS systems (Resourcegate, SAP, Oracle)',
                                    'Payroll software (QuickBooks, Tally)',
                                    'Access control systems',
                                    'Door locks and turnstiles',
                                    'Email and SMS gateways',
                                    'RESTful API for custom integrations',
                                ].map((integration, index) => (
                                    <li key={index} className="flex items-start text-gray-700">
                                        <CheckCircleIcon className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                                        {integration}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-enterprise p-8 bg-gradient-to-br from-orange-50 to-red-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Architecture', value: 'Cloud-based SaaS' },
                                    { label: 'Deployment', value: 'Cloud / On-Premise' },
                                    { label: 'Database', value: 'MySQL / PostgreSQL' },
                                    { label: 'API', value: 'RESTful API' },
                                    { label: 'Security', value: 'AES-256 Encryption' },
                                    { label: 'Mobile Apps', value: 'iOS & Android' },
                                ].map((spec, index) => (
                                    <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span className="font-semibold text-gray-900">{spec.label}</span>
                                        <span className="text-orange-600 text-sm">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            How Metricslog Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple 4-step process to get started
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Device Setup', desc: 'Install and connect biometric devices' },
                            { step: '2', title: 'Employee Enrollment', desc: 'Register employees with biometric data' },
                            { step: '3', title: 'Configure Rules', desc: 'Set up shifts, access rules, and policies' },
                            { step: '4', title: 'Track & Report', desc: 'Monitor attendance and generate reports' },
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-bold">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-sm text-gray-600">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Flexible Pricing Plans
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the plan that fits your organization
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Starter',
                                price: 'AED 999',
                                period: '/month',
                                description: 'For small businesses (up to 50 employees)',
                                features: ['Up to 50 employees', '2 devices', 'Basic reports', 'Email support', 'Cloud-based'],
                            },
                            {
                                title: 'Professional',
                                price: 'AED 1,999',
                                period: '/month',
                                description: 'For growing companies (up to 200 employees)',
                                features: ['Up to 200 employees', '5 devices', 'Advanced reports', 'Priority support', 'Mobile apps', 'API access'],
                                popular: true,
                            },
                            {
                                title: 'Enterprise',
                                price: 'Custom',
                                period: '',
                                description: 'For large organizations (200+ employees)',
                                features: ['Unlimited employees', 'Unlimited devices', 'Custom integrations', 'Dedicated support', 'On-premise option', 'SLA guarantee'],
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${plan.popular ? 'ring-2 ring-orange-500 shadow-2xl' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-orange-600 text-white text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                                <div className="mb-2">
                                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-600 text-sm">{plan.period}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact?type=metricslog-quote"
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                        ? 'bg-orange-600 text-white hover:bg-orange-700'
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
            <section className="section-padding bg-gradient-to-br from-orange-600 to-red-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Modernize Your Attendance System?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a demo to see how Metricslog can streamline your access control and attendance tracking
                    </p>
                    <Link href="/contact?type=metricslog-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-orange-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
