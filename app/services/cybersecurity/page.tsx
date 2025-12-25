import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { ShieldCheckIcon, LockClosedIcon, EyeIcon, DocumentCheckIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Cybersecurity Services & Solutions',
    description:
        'Enterprise cybersecurity with managed SOC, SIEM, zero-trust architecture, and compliance. SOC2, ISO 27001, UAE data regulations, penetration testing, and incident response.',
    keywords: [
        'cybersecurity UAE',
        'managed SOC',
        'SIEM',
        'zero trust',
        'SOC2 compliance',
        'ISO 27001',
        'penetration testing',
        'incident response',
    ],
})

const securityServices = [
    {
        icon: <ShieldCheckIcon className="w-8 h-8" />,
        title: 'Managed SOC & SIEM',
        description: '24/7 security operations center with advanced threat detection and response',
        features: [
            'Real-time threat monitoring',
            'SIEM platform (Splunk, QRadar, Sentinel)',
            'Incident response & forensics',
            'Threat intelligence integration',
        ],
    },
    {
        icon: <LockClosedIcon className="w-8 h-8" />,
        title: 'Zero-Trust Architecture',
        description: 'Identity-centric security with continuous verification and least privilege access',
        features: [
            'Identity & Access Management (IAM)',
            'Multi-factor authentication (MFA)',
            'Conditional access policies',
            'Privileged access management (PAM)',
        ],
    },
    {
        icon: <EyeIcon className="w-8 h-8" />,
        title: 'Perimeter & Network Security',
        description: 'Next-generation firewalls, WAF, and DDoS protection for comprehensive defense',
        features: [
            'Next-gen firewalls (NGFW)',
            'Web application firewall (WAF)',
            'DDoS protection & mitigation',
            'Network segmentation',
        ],
    },
    {
        icon: <DocumentCheckIcon className="w-8 h-8" />,
        title: 'Compliance & Governance',
        description: 'SOC2, ISO 27001, and UAE-specific regulatory compliance',
        features: [
            'SOC2 Type II readiness',
            'ISO 27001 certification support',
            'UAE data residency compliance',
            'Policy & procedure development',
        ],
    },
]

const complianceFrameworks = [
    { name: 'SOC 2 Type II', description: 'Security, availability, confidentiality controls' },
    { name: 'ISO 27001', description: 'Information security management system' },
    { name: 'PCI-DSS', description: 'Payment card industry data security' },
    { name: 'GDPR', description: 'General data protection regulation' },
    { name: 'UAE PDPL', description: 'UAE personal data protection law' },
    { name: 'NESA', description: 'UAE National Electronic Security Authority' },
]

const threatServices = [
    {
        title: 'Vulnerability Assessment',
        description: 'Automated and manual scanning to identify security weaknesses',
    },
    {
        title: 'Penetration Testing',
        description: 'Ethical hacking to validate security controls and defenses',
    },
    {
        title: 'Red Team Exercises',
        description: 'Simulated attacks to test detection and response capabilities',
    },
    {
        title: 'Security Audits',
        description: 'Comprehensive review of security posture and compliance',
    },
]

export default function CybersecurityPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <ShieldCheckIcon className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Cybersecurity</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Enterprise Cybersecurity & Compliance
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Protect your enterprise with managed SOC, SIEM, zero-trust architecture, and comprehensive
                            compliance. 24/7 threat monitoring, incident response, and regulatory adherence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=security-assessment" className="btn-primary">
                                Book Security Assessment
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Services */}
            <section id="services" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Comprehensive Security Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Multi-layered security approach from perimeter to endpoint
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {securityServices.map((service, index) => (
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

            {/* Compliance Frameworks */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Compliance & Regulatory Frameworks
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Certified expertise across global and regional compliance standards
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {complianceFrameworks.map((framework, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="flex items-center mb-3">
                                    <DocumentCheckIcon className="w-6 h-6 text-primary-600 mr-2" />
                                    <h3 className="text-lg font-bold text-gray-900">{framework.name}</h3>
                                </div>
                                <p className="text-sm text-gray-600">{framework.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Threat Services */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Offensive Security Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Proactive testing to identify and remediate vulnerabilities
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {threatServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Operations Center */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                24/7 Security Operations Center
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our managed SOC provides round-the-clock monitoring, threat detection, and incident response
                                to protect your enterprise from evolving cyber threats.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: 'Monitoring', value: '24/7/365' },
                                    { label: 'Response Time', value: '<15 minutes' },
                                    { label: 'Threat Detection', value: 'Real-time' },
                                    { label: 'Incident Response', value: 'Immediate' },
                                ].map((spec, index) => (
                                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-900">{spec.label}</span>
                                        <span className="text-primary-600 font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card-enterprise p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">SOC Services Include</h3>
                            <ul className="space-y-4">
                                {[
                                    { title: 'Threat Monitoring', desc: 'Continuous monitoring of security events' },
                                    { title: 'Incident Response', desc: 'Rapid containment and remediation' },
                                    { title: 'Threat Intelligence', desc: 'Global threat feeds and analysis' },
                                    { title: 'Forensics', desc: 'Post-incident investigation and reporting' },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <div>
                                            <div className="font-semibold text-gray-900">{item.title}</div>
                                            <div className="text-sm text-gray-600">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Secure Your Enterprise Today
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free security assessment and vulnerability scan from our certified security experts
                    </p>
                    <Link href="/contact?type=security-assessment" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Book Security Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
