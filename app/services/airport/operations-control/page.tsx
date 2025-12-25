import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaChartLine, FaExclamationTriangle, FaMapMarkedAlt, FaClock } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Airport Operations Control Center (AOCC) - Real-Time Monitoring',
    description:
        'Centralized Airport Operations Control Center with real-time monitoring, incident management, resource optimization, and role-based dashboards.',
    keywords: [
        'AOCC',
        'airport operations center',
        'real-time monitoring',
        'incident management',
        'airport dashboards',
        'resource management',
    ],
})

const aoccModules = [
    {
        title: 'Real-Time Operations Dashboard',
        icon: FaChartLine,
        description: 'Comprehensive view of all airport operations in real-time',
        features: [
            'Live flight status tracking',
            'Gate & stand occupancy',
            'Resource utilization metrics',
            'Performance KPIs',
            'Weather integration',
            'Customizable widgets',
        ],
    },
    {
        title: 'Incident Management',
        icon: FaExclamationTriangle,
        description: 'Centralized incident tracking and resolution workflow',
        features: [
            'Incident logging & categorization',
            'Automated escalation',
            'Task assignment',
            'SLA tracking',
            'Root cause analysis',
            'Incident history',
        ],
    },
    {
        title: 'Resource Management',
        icon: FaMapMarkedAlt,
        description: 'Optimize allocation of airport resources',
        features: [
            'Stand & gate allocation',
            'Equipment tracking',
            'Staff scheduling',
            'Vehicle management',
            'Conflict resolution',
            'Utilization analytics',
        ],
    },
    {
        title: 'Performance Analytics',
        icon: FaClock,
        description: 'Data-driven insights for operational excellence',
        features: [
            'On-time performance (OTP)',
            'Turnaround time analysis',
            'Resource efficiency',
            'Delay analysis',
            'Trend identification',
            'Predictive analytics',
        ],
    },
]

const dashboardFeatures = [
    {
        title: 'Role-Based Access',
        description: 'Customized views for different stakeholders',
        roles: ['Airport Manager', 'Operations Controller', 'Ground Handler', 'Airline Coordinator'],
    },
    {
        title: 'Multi-Screen Support',
        description: 'Video wall integration for control room',
        features: ['4K display support', 'Multi-monitor layouts', 'Touch screen capability', 'Remote access'],
    },
    {
        title: 'Alert & Notification System',
        description: 'Proactive alerting for critical events',
        features: ['Email notifications', 'SMS alerts', 'Mobile push', 'Audio alarms'],
    },
]

const integrations = [
    'AODB integration',
    'FIDS connectivity',
    'Weather systems',
    'ATC data feeds',
    'Airline systems',
    'Ground handling systems',
    'Security systems',
    'BHS integration',
]

export default function OperationsControlPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/airport" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-4 text-sm">
                            ← Back to Airport Services
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                            <FaChartLine className="w-5 h-5 text-purple-400 mr-2" />
                            <span className="text-purple-400 text-sm font-semibold">Operations Control</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Airport Operations Control Center (AOCC)
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Centralized command and control for airport operations. Real-time monitoring, incident
                            management, resource optimization, and performance analytics in a unified platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=aocc" className="btn-primary">
                                Request Demo
                            </Link>
                            <Link href="#modules" className="btn-secondary">
                                View Modules
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* AOCC Modules */}
            <section id="modules" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            AOCC Core Modules
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive modules for complete operational visibility and control
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {aoccModules.map((module, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <module.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{module.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{module.description}</p>
                                <ul className="space-y-2">
                                    {module.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Features */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Advanced Dashboard Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Powerful features for enhanced operational control
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {dashboardFeatures.map((feature, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                                <ul className="space-y-2">
                                    {(feature.roles || feature.features).map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* System Integrations */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            System Integrations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Unified view of all airport systems in one control center
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {integrations.map((integration, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                                <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                <span className="text-sm text-gray-700 font-medium">{integration}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Business Benefits
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: 'Improved OTP', desc: 'Better on-time performance through proactive monitoring' },
                            { title: 'Faster Response', desc: 'Quick incident resolution with automated workflows' },
                            { title: 'Resource Optimization', desc: 'Maximize utilization of airport resources' },
                            { title: 'Data-Driven Decisions', desc: 'Analytics-powered operational insights' },
                        ].map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <CheckCircleIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-purple-600 to-pink-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Transform Your Airport Operations
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a demo to see our AOCC platform in action
                    </p>
                    <Link href="/contact?type=aocc" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
