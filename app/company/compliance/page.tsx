import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'Compliance & Certifications - SOC2, ISO 27001',
    description:
        'Aerosyns compliance certifications and security standards. SOC2 Type II, ISO 27001, UAE data regulations, PCI-DSS ready infrastructure.',
    keywords: ['compliance', 'SOC2', 'ISO 27001', 'security certifications', 'UAE compliance'],
})

const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified', description: 'Security, availability, and confidentiality controls' },
    { name: 'ISO 27001', status: 'Certified', description: 'Information security management system' },
    { name: 'PCI-DSS', status: 'Ready', description: 'Payment card industry data security standard' },
    { name: 'UAE PDPL', status: 'Compliant', description: 'UAE personal data protection law' },
    { name: 'NESA', status: 'Aligned', description: 'UAE National Electronic Security Authority' },
    { name: 'GDPR', status: 'Compliant', description: 'General data protection regulation' },
]

export default function CompliancePage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Compliance & Certifications
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Industry-leading security standards and regulatory compliance
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Certifications
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                                        {cert.status}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6 text-center">
                            Security Practices
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            {[
                                { title: 'Data Encryption', desc: 'End-to-end encryption for data at rest and in transit' },
                                { title: 'Access Control', desc: 'Role-based access control and multi-factor authentication' },
                                { title: 'Audit Logging', desc: 'Comprehensive audit trails for all system activities' },
                                { title: 'Incident Response', desc: '24/7 security monitoring and incident response team' },
                                { title: 'Regular Audits', desc: 'Quarterly security audits and penetration testing' },
                                { title: 'Data Residency', desc: 'UAE-based datacenters for data sovereignty' },
                            ].map((practice, index) => (
                                <div key={index} className="flex items-start">
                                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{practice.title}</h3>
                                        <p className="text-sm text-gray-600">{practice.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Questions About Compliance?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Contact our compliance team for detailed information
                    </p>
                    <Link href="/contact?type=compliance" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Contact Compliance Team
                    </Link>
                </div>
            </section>
        </>
    )
}
