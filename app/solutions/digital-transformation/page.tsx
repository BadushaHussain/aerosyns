import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'Digital Transformation Solutions',
    description:
        'Complete digital transformation services. IT modernization, process automation, cloud adoption, and change management for enterprise-wide transformation.',
    keywords: ['digital transformation', 'IT modernization', 'business transformation', 'cloud adoption'],
})

export default function DigitalTransformationPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Digital Transformation
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Transform your business with modern technology. End-to-end digital transformation
                            covering IT modernization, process automation, cloud adoption, and organizational change.
                        </p>
                        <Link href="/contact?type=digital-transformation" className="btn-primary">
                            Start Your Transformation
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'IT Modernization', desc: 'Legacy system migration and modernization' },
                            { title: 'Process Automation', desc: 'RPA and workflow automation' },
                            { title: 'Cloud Adoption', desc: 'Multi-cloud and hybrid strategies' },
                            { title: 'Data & Analytics', desc: 'Business intelligence and data lakes' },
                            { title: 'Customer Experience', desc: 'Digital channels and CX platforms' },
                            { title: 'Change Management', desc: 'Training and organizational change' },
                            { title: 'Innovation Labs', desc: 'Proof of concepts and pilots' },
                            { title: 'Continuous Improvement', desc: 'Agile and DevOps practices' },
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
                        Ready to Transform?
                    </h2>
                    <Link href="/contact?type=digital-transformation" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
