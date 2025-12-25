import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'Case Studies - Success Stories',
    description:
        'Aerosyns case studies and success stories. Enterprise IT transformations, datacenter builds, cloud migrations, and AI infrastructure deployments.',
    keywords: ['case studies', 'success stories', 'customer testimonials', 'IT projects'],
})

const caseStudies = [
    {
        title: 'Banking Sector - Core Banking Migration',
        client: 'Major UAE Bank',
        challenge: 'Migrate core banking system to private cloud with zero downtime',
        solution: 'Phased migration with hybrid architecture and comprehensive testing',
        results: ['Zero downtime migration', '40% cost reduction', '3x performance improvement'],
        industry: 'Financial Services',
    },
    {
        title: 'University - AI Research Infrastructure',
        client: 'Leading Research University',
        challenge: 'Build GPU cluster for AI/ML research with limited budget',
        solution: 'Hybrid on-premise + cloud bursting architecture with A100 GPUs',
        results: ['80-node GPU cluster', '50% cost savings vs cloud-only', 'Support for 200+ researchers'],
        industry: 'Education',
    },
    {
        title: 'Healthcare - HIPAA Compliant Infrastructure',
        client: 'Hospital Group',
        challenge: 'Build secure, compliant infrastructure for patient data',
        solution: 'Private cloud with encryption, access controls, and audit logging',
        results: ['HIPAA compliant', '99.99% uptime', 'Reduced IT costs by 35%'],
        industry: 'Healthcare',
    },
]

export default function CaseStudiesPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Case Studies
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Real-world success stories from our enterprise clients
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="space-y-12">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-3xl font-display font-bold text-gray-900">{study.title}</h2>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                                        {study.industry}
                                    </span>
                                </div>
                                <p className="text-lg text-gray-600 mb-6">{study.client}</p>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Challenge</h3>
                                        <p className="text-gray-600">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Solution</h3>
                                        <p className="text-gray-600">{study.solution}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Results</h3>
                                        <ul className="space-y-2">
                                            {study.results.map((result, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-600">
                                                    <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
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
                        Ready to Write Your Success Story?
                    </h2>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </>
    )
}
