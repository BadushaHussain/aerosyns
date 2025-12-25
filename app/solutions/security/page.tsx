import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'Cybersecurity Transformation Solutions',
    description:
        'Comprehensive cybersecurity transformation. Zero-trust architecture, SOC/SIEM, compliance (SOC2, ISO 27001), and penetration testing services.',
    keywords: ['cybersecurity', 'zero-trust', 'SOC', 'SIEM', 'penetration testing', 'security transformation'],
})

export default function SecurityPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Cybersecurity Transformation
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Implement comprehensive security with zero-trust architecture, 24/7 SOC, SIEM,
                            compliance frameworks, and offensive security services.
                        </p>
                        <Link href="/contact?type=security" className="btn-primary">
                            Assess Your Security
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Zero-Trust Architecture', desc: 'Never trust, always verify approach' },
                            { title: 'SOC/SIEM', desc: '24/7 security operations center' },
                            { title: 'Compliance', desc: 'SOC2, ISO 27001, PCI-DSS' },
                            { title: 'Penetration Testing', desc: 'Offensive security assessments' },
                            { title: 'Vulnerability Management', desc: 'Continuous scanning and remediation' },
                            { title: 'Incident Response', desc: 'Rapid response and forensics' },
                        ].map((service, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-red-600 to-orange-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Secure Your Enterprise
                    </h2>
                    <Link href="/contact?type=security" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-red-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Get Security Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
