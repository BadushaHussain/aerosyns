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
        title: 'Engineering - Greenfields Infrastructure',
        client: 'Penta Global Engineering LLC',
        website: 'https://penta-global.com/',
        challenge: 'Establishing complete IT infrastructure for new operations from the ground up',
        solution: 'End-to-end infrastructure build from scratch, including cabling, networking, security, and server deployment',
        results: ['Fully operational IT environment', 'Scalable network architecture', 'Secure and compliant infrastructure setup'],
        industry: 'Engineering & Construction',
    },
    {
        title: 'Education - Smart Campus Solution',
        client: 'Al Rashid Al Saleh Private School',
        website: 'https://alrashed-alsaleh.com/',
        challenge: 'Modernizing legacy school infrastructure to support digital learning and administrative efficiency',
        solution: 'Implemented a centralized schooling solution integrating connectivity, digital classrooms, and management systems',
        results: ['Unified campus network', 'Enhanced digital learning experience', 'Streamlined administrative operations'],
        industry: 'Education',
    },
    {
        title: 'Retail Chain - Regional Connectivity',
        client: 'Al Ershad Group (20 Branches across GCC)',
        website: 'https://www.alershadgroup.com/',
        challenge: 'Fragmented network across 20 branches limiting access to centralized ERP and Inventory systems',
        solution: 'Enabled centralized secure connectivity across all branches to ensure seamless access to locally deployed applications',
        results: ['100% network uptime across branches', 'Real-time inventory synchronization', 'Seamless ERP access for all staff'],
        industry: 'Retail',
    },
    {
        title: 'Real Estate - AI & Hybrid Cloud',
        client: 'AQARY HOLDING',
        website: 'https://aqaryholding.com/',
        challenge: 'Modernizing legacy infrastructure to leverage AI insights and ensure scalability for growing portfolio',
        solution: 'Implemented a robust AI & Hybrid Cloud solution enabling predictive analytics and secure, scalable data management',
        results: ['Enhanced data-driven decision making', 'Secure hybrid cloud architecture', 'Operational efficiency optimization'],
        industry: 'Real Estate & Investment',
    },
    {
        title: 'Real Estate - Integrated IT Infrastructure',
        client: 'FINE HOME REAL ESTATE',
        website: 'https://finehomeint.com/',
        challenge: 'Establishing a comprehensive, secure, and resilient IT foundation for real estate operations from the ground up',
        solution: 'Complete infrastructure build including AD, Application Servers, DR Solution, NAS, Call Center, PBX, CCTV, Firewall & Wireless',
        results: ['Robust multi-server environment', 'Business continuity via DR', 'Integrated security & communications'],
        industry: 'Real Estate',
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
                                <div className="mb-6">
                                    <p className="text-lg text-gray-600 inline">
                                        {study.client}
                                    </p>
                                    {study.website && (
                                        <a
                                            href={study.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-3 inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium hover:underline"
                                        >
                                            Visit Website
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
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
