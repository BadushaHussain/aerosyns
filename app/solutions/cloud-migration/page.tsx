import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'Cloud Migration & Optimization Solutions',
    description:
        'Seamless cloud migration services. Lift-and-shift, re-architecture, multi-cloud strategy, and cost optimization for AWS, Azure, and Google Cloud.',
    keywords: ['cloud migration', 'AWS migration', 'Azure migration', 'cloud optimization'],
})

export default function CloudMigrationPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Cloud Migration & Optimization
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Migrate to cloud with zero downtime. Comprehensive migration services including
                            assessment, planning, execution, and post-migration optimization.
                        </p>
                        <Link href="/contact?type=cloud-migration" className="btn-primary">
                            Plan Your Migration
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Migration Assessment', desc: 'Workload analysis and readiness evaluation' },
                            { title: 'Lift-and-Shift', desc: 'Quick migration with minimal changes' },
                            { title: 'Re-architecture', desc: 'Cloud-native redesign for optimal performance' },
                            { title: 'Multi-Cloud Strategy', desc: 'AWS, Azure, Google Cloud deployment' },
                            { title: 'Cost Optimization', desc: 'Right-sizing and reserved instances' },
                            { title: 'Performance Tuning', desc: 'Optimization for speed and efficiency' },
                        ].map((service, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-cyan-600 to-blue-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Migrate to Cloud Today
                    </h2>
                    <Link href="/contact?type=cloud-migration" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-cyan-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Get Migration Plan
                    </Link>
                </div>
            </section>
        </>
    )
}
