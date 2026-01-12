import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Government & Enterprise Software Development Services',
    description: 'Custom government and enterprise software solutions. Citizen services, compliance systems, workflow automation, and digital government platforms.',
    keywords: ['government software', 'e-government', 'citizen services', 'compliance systems', 'enterprise software', 'digital government UAE'],
})

const solutions = [
    {
        title: 'E-Government Platforms',
        features: ['Citizen portals', 'Online services', 'Document management', 'Payment integration', 'Mobile apps', 'Multi-language support'],
    },
    {
        title: 'Compliance & Regulatory Systems',
        features: ['Regulatory tracking', 'Audit management', 'Policy enforcement', 'Reporting automation', 'Document control', 'Workflow automation'],
    },
    {
        title: 'Case Management Systems',
        features: ['Case tracking', 'Workflow automation', 'Document management', 'Collaboration tools', 'Reporting & analytics', 'Integration capabilities'],
    },
    {
        title: 'Enterprise Resource Planning',
        features: ['Financial management', 'Asset management', 'Procurement', 'HR management', 'Project management', 'Business intelligence'],
    },
]

const caseStudies = [
    {
        title: 'E-Government Portal',
        challenge: 'Manual processes causing long wait times for citizens',
        solution: 'Integrated e-government platform with online services',
        results: ['80% reduction in wait time', '100,000+ users', '24/7 availability', '95% satisfaction rate'],
    },
    {
        title: 'Compliance Management System',
        challenge: 'Manual compliance tracking across multiple departments',
        solution: 'Automated compliance platform with real-time monitoring',
        results: ['100% compliance', '70% faster audits', 'Real-time visibility', 'Automated reporting'],
    },
]

export default function GovernmentPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/software" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to Software Services
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                            <BuildingOfficeIcon className="w-5 h-5 text-purple-400 mr-2" />
                            <span className="text-purple-400 text-sm font-semibold">Government & Enterprises</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Government & Enterprise Software Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Transform public services with digital government platforms. E-government, compliance systems,
                            workflow automation, and citizen-centric solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=government-consultation" className="btn-primary">
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
                            Digital Government Transformation
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Modern governments need digital platforms to serve citizens efficiently. Our solutions enable
                            online services, compliance automation, and transparent governance.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
                                <div className="text-sm text-gray-600">Faster Service Delivery</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                                <div className="text-sm text-gray-600">Citizen Access</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                                <div className="text-sm text-gray-600">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Government Software Solutions
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
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
                        Ready to Transform Government Services?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free consultation on e-government and enterprise software solutions
                    </p>
                    <Link
                        href="/contact?type=government-consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
