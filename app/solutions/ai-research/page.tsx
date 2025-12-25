import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'AI Research Infrastructure Solutions',
    description:
        'GPU clusters and HPC infrastructure for AI/ML research. A100/H100 GPUs, MLOps platforms, data pipelines, and research support for universities and research institutions.',
    keywords: ['AI infrastructure', 'GPU cluster', 'ML research', 'HPC', 'research computing'],
})

export default function AIResearchPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            AI Research Infrastructure
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            High-performance GPU clusters for AI/ML research. A100/H100 GPUs, MLOps platforms,
                            data pipelines, and dedicated research support for universities and institutions.
                        </p>
                        <Link href="/contact?type=ai-research" className="btn-primary">
                            Discuss Your Research Needs
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'GPU Clusters', desc: 'A100/H100 GPU clusters for training and inference' },
                            { title: 'MLOps Platform', desc: 'Complete ML lifecycle management' },
                            { title: 'Data Pipelines', desc: 'ETL and data preprocessing infrastructure' },
                            { title: 'Research Support', desc: 'Dedicated technical support for researchers' },
                            { title: 'Cloud Bursting', desc: 'Hybrid on-premise + cloud capacity' },
                            { title: 'Collaboration Tools', desc: 'Jupyter, TensorBoard, experiment tracking' },
                        ].map((service, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-purple-600 to-pink-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Accelerate Your Research
                    </h2>
                    <Link href="/contact?type=ai-research" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
