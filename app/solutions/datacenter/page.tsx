import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'Datacenter Build & Consolidation',
    description:
        'Design and build modern datacenters with Tier III/IV standards. Datacenter consolidation, migration, and infrastructure optimization services.',
    keywords: ['datacenter build', 'datacenter design', 'Tier III datacenter', 'datacenter consolidation'],
})

export default function DatacenterPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Datacenter Build & Consolidation
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Design, build, and consolidate enterprise datacenters with Tier III/IV standards.
                            Complete infrastructure planning, implementation, and migration services.
                        </p>
                        <Link href="/contact?type=datacenter" className="btn-primary">
                            Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Datacenter Design', desc: 'Architecture and capacity planning' },
                            { title: 'Infrastructure Build', desc: 'Complete datacenter construction' },
                            { title: 'Tier III/IV Compliance', desc: 'Uptime Institute standards' },
                            { title: 'Consolidation', desc: 'Multi-datacenter consolidation' },
                            { title: 'Migration Services', desc: 'Zero-downtime migrations' },
                            { title: 'Disaster Recovery', desc: 'DR site setup and testing' },
                        ].map((service, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Build Your Datacenter
                    </h2>
                    <Link href="/contact?type=datacenter" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-green-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
