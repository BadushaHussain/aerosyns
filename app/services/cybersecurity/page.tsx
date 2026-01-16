import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { ShieldCheckIcon, LockClosedIcon, EyeIcon, DocumentCheckIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

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

const threatLandscape = [
    { stat: '4.5M+', label: 'Cyber attacks daily', description: 'Global average' },
    { stat: '287 days', label: 'Average breach detection', description: 'Industry average' },
    { stat: '$4.45M', label: 'Average breach cost', description: 'Per incident' },
    { stat: '95%', label: 'Human error factor', description: 'In security incidents' },
]

const securityTechnologies = [
    {
        category: 'SIEM & Analytics',
        tools: ['Splunk Enterprise Security', 'IBM QRadar', 'Microsoft Sentinel', 'Elastic SIEM'],
        capabilities: 'Real-time threat detection, log aggregation, correlation',
    },
    {
        category: 'Endpoint Protection',
        tools: ['CrowdStrike Falcon', 'Microsoft Defender', 'SentinelOne', 'Carbon Black'],
        capabilities: 'EDR, antivirus, behavioral analysis, threat hunting',
    },
    {
        category: 'Network Security',
        tools: ['Palo Alto NGFW', 'Fortinet FortiGate', 'Cisco Firepower', 'Check Point'],
        capabilities: 'NGFW, IPS/IDS, SSL inspection, application control',
    },
    {
        category: 'Identity & Access',
        tools: ['Okta', 'Azure AD', 'CyberArk', 'Duo Security'],
        capabilities: 'SSO, MFA, PAM, identity governance',
    },
    {
        category: 'Cloud Security',
        tools: ['Prisma Cloud', 'CloudGuard', 'AWS Security Hub', 'Azure Security Center'],
        capabilities: 'CSPM, CWPP, container security, compliance',
    },
    {
        category: 'Threat Intelligence',
        tools: ['Recorded Future', 'ThreatConnect', 'MISP', 'AlienVault OTX'],
        capabilities: 'Threat feeds, IOC management, threat hunting',
    },
]

const incidentResponse = [
    {
        phase: 'Preparation',
        duration: 'Ongoing',
        activities: ['IR plan development', 'Team training', 'Tool deployment', 'Runbook creation'],
    },
    {
        phase: 'Detection & Analysis',
        duration: '< 15 minutes',
        activities: ['Alert triage', 'Threat validation', 'Scope assessment', 'Severity classification'],
    },
    {
        phase: 'Containment',
        duration: '< 1 hour',
        activities: ['Isolate affected systems', 'Block malicious IPs', 'Disable compromised accounts', 'Preserve evidence'],
    },
    {
        phase: 'Eradication & Recovery',
        duration: '1-24 hours',
        activities: ['Remove malware', 'Patch vulnerabilities', 'Restore systems', 'Verify integrity'],
    },
    {
        phase: 'Post-Incident',
        duration: '1-2 weeks',
        activities: ['Forensic analysis', 'Lessons learned', 'Report generation', 'Process improvement'],
    },
]



const caseStudies = [
    {
        industry: 'Financial Services',
        challenge: 'PCI-DSS compliance and advanced persistent threats',
        solution: 'Deployed 24/7 SOC, SIEM, and zero-trust architecture',
        results: ['100% PCI-DSS compliance', '99.9% threat detection rate', '< 10 min response time', 'Zero successful breaches'],
    },
    {
        industry: 'Healthcare',
        challenge: 'HIPAA compliance and ransomware protection',
        solution: 'Implemented EDR, backup encryption, and security awareness training',
        results: ['HIPAA certified', 'Blocked 50+ ransomware attempts', '95% reduction in phishing clicks', 'Zero data breaches'],
    },
]

export default function CybersecurityPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
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
            <section id="services" className="section-padding bg-gray-50 scroll-mt-20">
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

            {/* Threat Landscape */}
            <section className="section-padding bg-gray-900 text-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-white mb-4">
                            Current Threat Landscape
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Why advanced cybersecurity is critical for your business
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {threatLandscape.map((item, index) => (
                            <div key={index} className="text-center p-6 bg-gray-800 rounded-2xl border border-gray-700">
                                <div className="text-4xl font-bold text-primary-400 mb-2">{item.stat}</div>
                                <div className="text-lg font-semibold text-white mb-1">{item.label}</div>
                                <div className="text-sm text-gray-400">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Technologies */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Technology Stack
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Best-in-class security tools and platforms we deploy
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {securityTechnologies.map((tech, index) => (
                            <div key={index} className="card-enterprise p-8 hover:border-primary-500 transition-colors">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
                                <div className="mb-4">
                                    <p className="text-xs text-gray-500 font-semibold mb-2">Key Tools:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {tech.tools.map((tool, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 border-t border-gray-100 pt-3">
                                    <span className="font-semibold text-primary-600">Capabilities:</span> {tech.capabilities}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Incident Response */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Incident Response Framework
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Rapid, structured response to security incidents
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
                        <div className="space-y-12">
                            {incidentResponse.map((phase, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="flex-1 w-full md:text-right">
                                        {index % 2 !== 0 && (
                                            <div className="md:pr-8">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                                                <div className="text-primary-600 font-semibold mb-2">{phase.duration}</div>
                                                <div className="flex flex-wrap gap-2 justify-end">
                                                    {phase.activities.map((activity, idx) => (
                                                        <span key={idx} className="bg-white px-3 py-1 rounded shadow-sm text-sm text-gray-600">
                                                            {activity}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-primary-600 border-4 border-white shadow-lg flex items-center justify-center z-10 shrink-0 text-white font-bold">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1 w-full">
                                        {index % 2 === 0 && (
                                            <div className="md:pl-8">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                                                <div className="text-primary-600 font-semibold mb-2">{phase.duration}</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {phase.activities.map((activity, idx) => (
                                                        <span key={idx} className="bg-white px-3 py-1 rounded shadow-sm text-sm text-gray-600">
                                                            {activity}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {/* Mobile view content for odd items */}
                                        {index % 2 !== 0 && (
                                            <div className="block md:hidden">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                                                <div className="text-primary-600 font-semibold mb-2">{phase.duration}</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {phase.activities.map((activity, idx) => (
                                                        <span key={idx} className="bg-white px-3 py-1 rounded shadow-sm text-sm text-gray-600">
                                                            {activity}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Case Studies */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Success Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Proven results in critical sectors
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">{study.industry}</h3>
                                    <ShieldCheckIcon className="w-8 h-8 text-primary-500" />
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                                    <p className="text-sm text-gray-600">{study.challenge}</p>
                                </div>
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                                    <p className="text-sm text-gray-600">{study.solution}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {study.results.map((result, idx) => (
                                            <div key={idx} className="flex items-start text-sm text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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
