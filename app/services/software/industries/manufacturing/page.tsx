import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, CogIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Manufacturing Software Development Services',
    description: 'Custom manufacturing software solutions. MES, ERP, quality control, production planning, supply chain management, and Industry 4.0 solutions.',
    keywords: ['manufacturing software', 'MES system', 'production planning', 'quality control software', 'smart factory', 'Industry 4.0 UAE'],
})

const solutions = [
    {
        title: 'Manufacturing Execution System (MES)',
        features: ['Production tracking', 'Work order management', 'Quality control', 'Equipment monitoring', 'Performance analytics', 'Real-time visibility'],
    },
    {
        title: 'Production Planning & Scheduling',
        features: ['Capacity planning', 'Material requirements', 'Shop floor scheduling', 'Resource optimization', 'Demand forecasting', 'What-if analysis'],
    },
    {
        title: 'Quality Management System (QMS)',
        features: ['Inspection management', 'Non-conformance tracking', 'CAPA management', 'Statistical process control', 'Audit management', 'Compliance tracking'],
    },
    {
        title: 'Supply Chain Management',
        features: ['Supplier management', 'Procurement automation', 'Inventory optimization', 'Demand planning', 'Logistics coordination', 'Vendor portals'],
    },
]

const caseStudies = [
    {
        title: 'Smart Factory Implementation',
        challenge: 'Manual production tracking causing delays and quality issues',
        solution: 'IoT-enabled MES with real-time monitoring',
        results: ['25% production increase', '40% defect reduction', 'Real-time visibility', '30% less downtime'],
    },
    {
        title: 'Supply Chain Optimization',
        challenge: 'Inventory costs and stockouts impacting production',
        solution: 'Integrated SCM with demand forecasting',
        results: ['30% inventory reduction', '95% on-time delivery', '20% cost savings', 'Better supplier collaboration'],
    },
]

export default function ManufacturingPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/software" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to Software Services
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                            <CogIcon className="w-5 h-5 text-indigo-400 mr-2" />
                            <span className="text-indigo-400 text-sm font-semibold">Manufacturing</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Manufacturing Software Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Transform manufacturing operations with Industry 4.0 solutions. MES, production planning,
                            quality control, and smart factory automation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=manufacturing-consultation" className="btn-primary">
                                Request Consultation
                            </Link>
                            <Link href="#solutions" className="btn-secondary">
                                View Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                            Industry 4.0 & Smart Manufacturing
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Modern manufacturing requires real-time visibility, quality control, and optimized production.
                            Our solutions enable smart factories with IoT, AI, and automation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-indigo-600 mb-2">25%</div>
                                <div className="text-sm text-gray-600">Production Increase</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-indigo-600 mb-2">40%</div>
                                <div className="text-sm text-gray-600">Defect Reduction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-indigo-600 mb-2">30%</div>
                                <div className="text-sm text-gray-600">Less Downtime</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Manufacturing Software Solutions
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Success Stories
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Challenge:</h4>
                                        <p className="text-sm text-gray-600">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Solution:</h4>
                                        <p className="text-sm text-gray-600">{study.solution}</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Results:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {study.results.map((result, idx) => (
                                            <div key={idx} className="flex items-start text-xs text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
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

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready for Smart Manufacturing?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free consultation on Industry 4.0 and manufacturing software solutions
                    </p>
                    <Link
                        href="/contact?type=manufacturing-consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
