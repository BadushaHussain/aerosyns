import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, UserGroupIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'HR & Compliance Software Development Services',
    description: 'Custom HR and compliance software solutions. HRMS, payroll, attendance, performance management, compliance tracking, and employee self-service portals.',
    keywords: ['HRMS software', 'payroll system', 'attendance management', 'compliance tracking', 'HR software', 'employee management UAE'],
})

const solutions = [
    {
        title: 'Human Resource Management System (HRMS)',
        features: ['Employee database', 'Onboarding/offboarding', 'Organization structure', 'Document management', 'Employee self-service', 'Mobile access'],
    },
    {
        title: 'Payroll Management',
        features: ['Salary processing', 'Tax calculations', 'Benefits administration', 'Payslip generation', 'Bank integration', 'Compliance reporting'],
    },
    {
        title: 'Attendance & Leave Management',
        features: ['Time tracking', 'Biometric integration', 'Leave requests', 'Shift management', 'Overtime tracking', 'Mobile check-in'],
    },
    {
        title: 'Performance Management',
        features: ['Goal setting', 'Performance reviews', 'KPI tracking', '360-degree feedback', 'Succession planning', 'Analytics & reporting'],
    },
]

const caseStudies = [
    {
        title: 'Enterprise HRMS Implementation',
        challenge: 'Manual HR processes across 500+ employees',
        solution: 'Integrated HRMS with employee self-service',
        results: ['70% reduction in HR workload', '100% paperless', 'Real-time reporting', '95% employee adoption'],
    },
    {
        title: 'Payroll Automation',
        challenge: 'Manual payroll causing errors and delays',
        solution: 'Automated payroll with compliance tracking',
        results: ['99.9% accuracy', '5 days → 2 hours processing', '100% compliance', 'Zero payroll errors'],
    },
]

export default function HRCompliancePage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/software" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to Software Services
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <UserGroupIcon className="w-5 h-5 text-cyan-400 mr-2" />
                            <span className="text-cyan-400 text-sm font-semibold">HR & Compliance</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            HR & Compliance Software Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Streamline HR operations with modern HRMS solutions. Payroll, attendance, performance management,
                            and compliance tracking—all in one platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=hr-consultation" className="btn-primary">
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
                            Modern HR Management
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            HR departments need automation to manage employees efficiently. Our HRMS solutions reduce manual work,
                            ensure compliance, and improve employee experience.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-cyan-600 mb-2">70%</div>
                                <div className="text-sm text-gray-600">Less HR Workload</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-cyan-600 mb-2">99.9%</div>
                                <div className="text-sm text-gray-600">Payroll Accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
                                <div className="text-sm text-gray-600">Compliance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            HR Software Solutions
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
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
                        Ready to Automate HR Operations?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free consultation on HRMS and compliance software solutions
                    </p>
                    <Link
                        href="/contact?type=hr-consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
