import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import {
    DocumentTextIcon,
    BellAlertIcon,
    UserGroupIcon,
    FingerPrintIcon,
    ChartBarIcon,
    GlobeAltIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'SaaS Products - Cloud-Native Enterprise Solutions',
    description:
        'Enterprise-ready SaaS products built by Aerosyns. Insurance platform, document management, HRMS, biometric software, and CRM. Deploy on public, private, or on-premise infrastructure.',
    keywords: [
        'enterprise SaaS',
        'insurance software',
        'HRMS UAE',
        'CRM software',
        'document management',
        'biometric software',
    ],
})

const products = [
    {
        name: 'Nizsoft',
        tagline: 'Modern Insurance Platform',
        description: 'End-to-end insurance management with policy, claims, KYC, and agent modules',
        icon: <DocumentTextIcon className="w-8 h-8" />,
        href: '/products/saas/nizsoft',
        features: [
            'Policy lifecycle management',
            'Claims processing & tracking',
            'Agent portal & commissions',
            'KYC & document management',
            'Payment integration',
            'Analytics & reporting',
        ],
        color: 'from-blue-500 to-cyan-500',
    },
    {
        name: 'Nautify',
        tagline: 'Document Expiry & Compliance',
        description: 'Automated document expiry tracking with notifications and compliance management',
        icon: <BellAlertIcon className="w-8 h-8" />,
        href: '/products/saas/nautify',
        features: [
            'Document expiry tracking',
            'Automated notifications',
            'Compliance dashboards',
            'Escalation workflows',
            'Multi-channel alerts',
            'Audit trail & reports',
        ],
        color: 'from-purple-500 to-pink-500',
    },
    {
        name: 'HRMS',
        tagline: 'Human Resource Management',
        description: 'Complete employee lifecycle management with payroll, leave, and attendance',
        icon: <UserGroupIcon className="w-8 h-8" />,
        href: '/products/saas/hrms',
        features: [
            'Employee onboarding',
            'Leave & attendance',
            'Payroll processing',
            'Performance management',
            'Document management',
            'Self-service portal',
        ],
        color: 'from-green-500 to-emerald-500',
    },
    {
        name: 'Biometric Software',
        tagline: 'Access Control & Attendance',
        description: 'Device integration for fingerprint, face recognition, and RFID access control',
        icon: <FingerPrintIcon className="w-8 h-8" />,
        href: '/products/saas/biometric',
        features: [
            'Multi-device integration',
            'Fingerprint & face recognition',
            'RFID card support',
            'Real-time attendance',
            'Access control logs',
            'Integration APIs',
        ],
        color: 'from-orange-500 to-red-500',
    },
    {
        name: 'CRM',
        tagline: 'Customer Relationship Management',
        description: 'Sales pipeline, customer support, and marketing automation in one platform',
        icon: <ChartBarIcon className="w-8 h-8" />,
        href: '/products/saas/crm',
        features: [
            'Lead & pipeline management',
            'Customer support ticketing',
            'Email & WhatsApp integration',
            'Sales automation',
            'Analytics & forecasting',
            'Mobile apps',
        ],
        color: 'from-indigo-500 to-purple-500',
    },
    {
        name: 'Banking Solutions',
        tagline: 'Core Banking & Digital Banking',
        description: 'Complete banking platform with accounts, loans, deposits, and digital banking channels',
        icon: <GlobeAltIcon className="w-8 h-8" />,
        href: '/products/saas/banking',
        features: [
            'Account management',
            'Loan processing',
            'Digital banking',
            'Payment gateway',
            'Transaction monitoring',
            'Regulatory compliance',
        ],
        color: 'from-indigo-500 to-purple-500',
    },
    {
        name: 'SafeInn Rail',
        tagline: 'Railway Safety Management',
        description: 'Comprehensive railway safety platform with 32 integrated modules for incident management, compliance, and analytics',
        icon: <ShieldCheckIcon className="w-8 h-8" />,
        href: '/products/saas/safeinn-rail',
        features: [
            'Incident & accident management',
            'Risk assessment & CAPA',
            'Real-time track monitoring',
            'Predictive maintenance',
            'Compliance reporting',
            'Railway analytics & AI',
        ],
        color: 'from-red-500 to-red-600',
    },
    {
        name: 'SafeInn Airport',
        tagline: 'Airport Safety Management',
        description: 'ICAO SMS-compliant aviation safety platform with 35+ modules for airside operations, emergency response, and compliance',
        icon: <ShieldCheckIcon className="w-8 h-8" />,
        href: '/products/saas/safeinn-airport',
        features: [
            'Airside operations safety',
            'ICAO Annex 14 compliance',
            'Emergency response management',
            'Wildlife hazard tracking',
            'Runway & taxiway safety',
            'Aviation analytics & AI',
        ],
        color: 'from-blue-500 to-blue-600',
    },
    {
        name: 'SafeInn Seaport',
        tagline: 'Maritime Safety Management',
        description: 'IMO & ISPS-compliant maritime safety platform with 38+ modules for vessel operations, cargo handling, and port security',
        icon: <ShieldCheckIcon className="w-8 h-8" />,
        href: '/products/saas/safeinn-seaport',
        features: [
            'Vessel & marine operations',
            'IMO & ISPS compliance',
            'Cargo handling safety',
            'Port security management',
            'Oil spill response',
            'Maritime analytics & AI',
        ],
        color: 'from-cyan-500 to-cyan-600',
    },
]

const deploymentOptions = [
    {
        title: 'Public Cloud',
        description: 'Multi-tenant SaaS hosted on enterprise cloud infrastructure',
        benefits: ['Fastest deployment', 'Automatic updates', 'Pay-as-you-grow pricing'],
    },
    {
        title: 'Private Cloud',
        description: 'Dedicated instance on your preferred cloud provider',
        benefits: ['Data isolation', 'Custom configurations', 'Enhanced security'],
    },
    {
        title: 'On-Premise',
        description: 'Deploy on your own infrastructure for complete control',
        benefits: ['Full data sovereignty', 'No internet dependency', 'Custom integrations'],
    },
]

export default function SaaSOverviewPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <span className="text-primary-400 text-sm font-semibold">SaaS Products</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Enterprise SaaS Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Cloud-native applications built for enterprise scale. Deploy on public cloud,
                            private cloud, or on-premise infrastructure with complete data sovereignty.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?type=saas-demo" className="btn-primary">
                                Request Demo
                            </Link>
                            <Link href="#products" className="btn-secondary">
                                View Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section id="products" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our SaaS Product Portfolio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-ready applications for insurance, HR, CRM, compliance, and safety management
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <Link
                                key={index}
                                href={product.href}
                                className="card-enterprise p-8 group hover:scale-105 transition-all duration-300"
                            >
                                <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} mb-6 group-hover:shadow-xl transition-shadow`}>
                                    <div className="text-white">{product.icon}</div>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-primary-600 font-semibold mb-3">{product.tagline}</p>
                                <p className="text-gray-600 mb-6">{product.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {product.features.slice(0, 4).map((feature, idx) => (
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
                                    <svg
                                        className="w-5 h-5 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deployment Options */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Flexible Deployment Options
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the deployment model that fits your security and compliance requirements
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {deploymentOptions.map((option, index) => (
                            <div key={index} className="card-enterprise p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h3>
                                <p className="text-gray-600 mb-6">{option.description}</p>
                                <ul className="space-y-2">
                                    {option.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center justify-center text-sm text-gray-600">
                                            <svg
                                                className="w-5 h-5 text-primary-500 mr-2"
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
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Enterprise-Grade Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built with security, scalability, and compliance in mind
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'API-First', desc: 'RESTful APIs for all integrations' },
                            { title: 'Role-Based Access', desc: 'Granular permissions & access control' },
                            { title: 'Audit Logs', desc: 'Complete activity tracking & compliance' },
                            { title: 'Multi-Tenant', desc: 'Secure data isolation per tenant' },
                            { title: 'SSO Integration', desc: 'SAML, OAuth, LDAP support' },
                            { title: 'Mobile Apps', desc: 'iOS & Android native apps' },
                            { title: 'Customizable', desc: 'White-label & custom branding' },
                            { title: '99.9% Uptime', desc: 'SLA-backed availability' },
                        ].map((feature, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a demo to see how our SaaS products can streamline your operations
                    </p>
                    <Link href="/contact?type=saas-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
