import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'Enterprise IT Transformation Solutions',
    description:
        'Complete IT infrastructure modernization. Cloud migration, datacenter consolidation, security hardening, and managed services for enterprise transformation.',
    keywords: ['IT transformation', 'cloud migration', 'infrastructure modernization', 'enterprise IT'],
})

export default function EnterpriseITPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Enterprise IT Transformation
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Modernize your IT infrastructure with cloud migration, datacenter consolidation,
                            security hardening, and ongoing managed services. End-to-end transformation from assessment to support.
                        </p>
                        <Link href="/contact?type=enterprise-it" className="btn-primary">
                            Start Your Transformation
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Transformation Services
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Infrastructure Assessment', desc: 'Current state analysis and gap identification' },
                            { title: 'Cloud Migration', desc: 'Lift-and-shift or re-architecture to cloud' },
                            { title: 'Datacenter Consolidation', desc: 'Optimize and consolidate infrastructure' },
                            { title: 'Security Hardening', desc: 'Zero-trust architecture and compliance' },
                            { title: 'Network Modernization', desc: 'SD-WAN and next-gen networking' },
                            { title: 'Managed Services', desc: '24/7 support and ongoing optimization' },
                        ].map((service, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Transform Your Enterprise IT
                    </h2>
                    <Link href="/contact?type=enterprise-it" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
