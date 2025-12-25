import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaLock, FaShieldAlt, FaUserShield, FaEye } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Airport Cybersecurity & Compliance - Zero Trust, SOC, ICAO',
    description:
        'Comprehensive cybersecurity for airports. Zero Trust architecture, SOC, SIEM, ICAO Annex 17 compliance, and ISO 27001 certification.',
    keywords: [
        'airport cybersecurity',
        'Zero Trust',
        'SOC',
        'SIEM',
        'ICAO compliance',
        'ISO 27001',
        'airport security',
    ],
})

const securityServices = [
    {
        title: 'Zero Trust Architecture',
        icon: FaLock,
        description: 'Never trust, always verify - comprehensive security model',
        features: [
            'Identity-based access control',
            'Micro-segmentation',
            'Least privilege access',
            'Continuous verification',
            'Multi-factor authentication (MFA)',
            'Device trust validation',
        ],
        benefits: ['Prevent lateral movement', 'Reduce attack surface', 'Enhanced security'],
    },
    {
        title: 'Security Operations Center (SOC)',
        icon: FaEye,
        description: '24/7 security monitoring and incident response',
        features: [
            '24/7 security monitoring',
            'Threat detection & analysis',
            'Incident response',
            'Threat intelligence',
            'Security event correlation',
            'Forensic analysis',
        ],
        benefits: ['Rapid threat detection', 'Quick incident response', 'Proactive security'],
    },
    {
        title: 'Identity & Access Management (IAM)',
        icon: FaUserShield,
        description: 'Centralized identity and access control',
        features: [
            'Single Sign-On (SSO)',
            'Multi-factor authentication',
            'Role-based access control (RBAC)',
            'Privileged access management',
            'Identity federation',
            'Access certification',
        ],
        benefits: ['Simplified access', 'Enhanced security', 'Compliance'],
    },
    {
        title: 'Security Information & Event Management (SIEM)',
        icon: FaShieldAlt,
        description: 'Centralized security event management and analysis',
        features: [
            'Log aggregation & correlation',
            'Real-time alerting',
            'Threat detection',
            'Compliance reporting',
            'Security dashboards',
            'Forensic investigation',
        ],
        benefits: ['Unified visibility', 'Faster detection', 'Compliance'],
    },
]

const complianceFrameworks = [
    {
        title: 'ICAO Annex 17',
        description: 'Aviation security standards',
        requirements: ['Security management system', 'Access control', 'Screening procedures', 'Incident response'],
    },
    {
        title: 'ISO 27001',
        description: 'Information security management',
        requirements: ['Risk assessment', 'Security controls', 'Incident management', 'Continuous improvement'],
    },
    {
        title: 'PCI-DSS',
        description: 'Payment card security',
        requirements: ['Network security', 'Data encryption', 'Access control', 'Monitoring & testing'],
    },
    {
        title: 'GDPR',
        description: 'Data privacy regulation',
        requirements: ['Data protection', 'Privacy by design', 'Breach notification', 'Data subject rights'],
    },
]

const securityLayers = [
    {
        layer: 'Perimeter Security',
        controls: ['Next-gen firewalls', 'DDoS protection', 'Web application firewall', 'Email security'],
    },
    {
        layer: 'Network Security',
        controls: ['Network segmentation', 'IDS/IPS', 'Network access control', 'VPN'],
    },
    {
        layer: 'Endpoint Security',
        controls: ['Antivirus/EDR', 'Device encryption', 'Mobile device management', 'Patch management'],
    },
    {
        layer: 'Application Security',
        controls: ['Secure coding', 'Vulnerability scanning', 'Penetration testing', 'Code review'],
    },
    {
        layer: 'Data Security',
        controls: ['Encryption at rest', 'Encryption in transit', 'Data loss prevention', 'Backup & recovery'],
    },
]

export default function CybersecurityPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/airport" className="inline-flex items-center text-red-400 hover:text-red-300 mb-4 text-sm">
                            ← Back to Airport Services
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                            <FaLock className="w-5 h-5 text-red-400 mr-2" />
                            <span className="text-red-400 text-sm font-semibold">Cybersecurity & Compliance</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Airport Cybersecurity & Compliance
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Comprehensive cybersecurity for mission-critical airport operations. Zero Trust architecture,
                            24/7 SOC, SIEM, and full compliance with ICAO Annex 17 and ISO 27001 standards.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=cybersecurity" className="btn-primary">
                                Request Security Assessment
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
                            Cybersecurity Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Multi-layered security approach for comprehensive protection
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {securityServices.map((service, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600">
                                                <CheckCircleIcon className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.benefits.map((benefit, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>
                                </div>
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
                            Full compliance with aviation and security standards
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {complianceFrameworks.map((framework, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{framework.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{framework.description}</p>
                                <ul className="space-y-2">
                                    {framework.requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-start text-xs text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Layers */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Defense in Depth
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Multi-layered security controls for comprehensive protection
                        </p>
                    </div>
                    <div className="space-y-4">
                        {securityLayers.map((layer, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    <div className="md:w-1/4">
                                        <h3 className="text-lg font-bold text-gray-900">{layer.layer}</h3>
                                    </div>
                                    <div className="md:w-3/4">
                                        <div className="flex flex-wrap gap-2">
                                            {layer.controls.map((control, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200">
                                                    {control}
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

            {/* Services Included */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            What's Included
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Security Assessment', desc: 'Comprehensive vulnerability and risk assessment' },
                            { title: 'Architecture Design', desc: 'Zero Trust and defense-in-depth architecture' },
                            { title: 'Implementation', desc: 'Deploy security controls and monitoring' },
                            { title: '24/7 SOC', desc: 'Round-the-clock security monitoring and response' },
                            { title: 'Compliance Support', desc: 'ICAO, ISO 27001, PCI-DSS compliance' },
                            { title: 'Training', desc: 'Security awareness and technical training' },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3 bg-gray-50 p-6 rounded-lg">
                                <CheckCircleIcon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-red-600 to-pink-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Secure Your Airport Infrastructure
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a comprehensive security assessment and roadmap to compliance
                    </p>
                    <Link href="/contact?type=cybersecurity" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-red-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Security Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
