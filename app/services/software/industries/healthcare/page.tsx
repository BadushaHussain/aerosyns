import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Healthcare Software Development Services',
    description: 'Custom healthcare software solutions. EMR/EHR systems, patient management, telemedicine platforms, HIPAA-compliant applications, and healthcare analytics.',
    keywords: ['healthcare software', 'EMR EHR development', 'telemedicine platform', 'patient management system', 'HIPAA compliance', 'healthcare IT UAE'],
})

const solutions = [
    {
        title: 'EMR/EHR Systems',
        description: 'Comprehensive electronic medical records platforms',
        features: ['Patient records management', 'Clinical documentation', 'E-prescribing', 'Lab integration', 'Imaging integration', 'Interoperability (FHIR/HL7)'],
    },
    {
        title: 'Patient Management Systems',
        description: 'End-to-end patient lifecycle management',
        features: ['Appointment scheduling', 'Patient registration', 'Billing & insurance', 'Patient portals', 'Communication tools', 'Waitlist management'],
    },
    {
        title: 'Telemedicine Platforms',
        description: 'Virtual care and remote consultation solutions',
        features: ['Video consultations', 'Remote monitoring', 'E-prescriptions', 'Secure messaging', 'Payment integration', 'Mobile apps'],
    },
    {
        title: 'Healthcare Analytics',
        description: 'Data-driven insights for better outcomes',
        features: ['Population health analytics', 'Predictive modeling', 'Quality metrics', 'Financial analytics', 'Clinical decision support', 'Real-time dashboards'],
    },
    {
        title: 'Medical Billing & RCM',
        description: 'Revenue cycle management automation',
        features: ['Claims processing', 'Insurance verification', 'Payment posting', 'Denial management', 'Patient billing', 'Reporting & analytics'],
    },
]

const challenges = [
    { challenge: 'Data Interoperability', solution: 'FHIR/HL7 integration for seamless data exchange' },
    { challenge: 'HIPAA Compliance', solution: 'Built-in security and compliance frameworks' },
    { challenge: 'Patient Engagement', solution: 'Mobile-first patient portals and telemedicine' },
    { challenge: 'Legacy Systems', solution: 'Gradual modernization with API integration' },
    { challenge: 'Clinical Workflows', solution: 'Customizable workflows for specialty practices' },
    { challenge: 'Data Security', solution: 'End-to-end encryption and access controls' },
]

const technologies = {
    'Core Platform': ['Java Spring', '.NET Core', 'Python Django', 'Node.js'],
    'Standards': ['FHIR', 'HL7', 'DICOM', 'ICD-10', 'SNOMED CT'],
    'Security': ['HIPAA', 'HITECH', 'Encryption', 'Audit Logging'],
    'Integration': ['REST APIs', 'HL7 Interface', 'FHIR Server', 'Cloud Storage'],
}

const caseStudies = [
    {
        title: 'EMR System Implementation',
        client: 'Multi-Specialty Hospital',
        challenge: 'Paper-based records causing inefficiency and errors',
        solution: 'Cloud-based EMR with specialty-specific templates',
        results: ['60% faster documentation', '40% reduction in errors', '99.9% uptime', 'HIPAA compliant'],
    },
    {
        title: 'Telemedicine Platform',
        client: 'Healthcare Network',
        challenge: 'Limited access to specialists in remote areas',
        solution: 'Integrated telemedicine platform with mobile apps',
        results: ['10,000+ virtual visits/month', '95% patient satisfaction', '30% cost reduction', 'Expanded reach'],
    },
]

const compliance = [
    { standard: 'HIPAA Compliance', requirements: ['PHI encryption', 'Access controls', 'Audit trails', 'Business associate agreements'] },
    { standard: 'Data Security', requirements: ['End-to-end encryption', 'Secure authentication', 'Data backup', 'Disaster recovery'] },
    { standard: 'Interoperability', requirements: ['FHIR API', 'HL7 integration', 'DICOM support', 'Standard terminologies'] },
]

export default function HealthcarePage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/software" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to Software Services
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                            <HeartIcon className="w-5 h-5 text-green-400 mr-2" />
                            <span className="text-green-400 text-sm font-semibold">Healthcare</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Healthcare Software Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Transform patient care with modern healthcare software. EMR/EHR systems, telemedicine platforms,
                            and HIPAA-compliant solutions built for better outcomes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=healthcare-consultation" className="btn-primary">
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
                            Digital Health Transformation
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Healthcare organizations need modern software to improve patient outcomes, streamline operations,
                            and meet regulatory requirements. Our HIPAA-compliant solutions enable better care delivery.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                                <div className="text-sm text-gray-600">Faster Documentation</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                                <div className="text-sm text-gray-600">Patient Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
                                <div className="text-sm text-gray-600">Error Reduction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Healthcare Challenges & Solutions
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {challenges.map((item, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.challenge}</h3>
                                <p className="text-sm text-gray-600 mb-4">Solution:</p>
                                <p className="text-sm text-green-600 font-semibold">{item.solution}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="solutions" className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Healthcare Software Solutions
                        </h2>
                    </div>
                    <div className="space-y-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                                <p className="text-gray-600 mb-6">{solution.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Healthcare Technology Stack
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(technologies).map(([category, techs]) => (
                            <div key={category} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
                                <div className="space-y-2">
                                    {techs.map((tech, idx) => (
                                        <div key={idx} className="text-sm text-gray-600">• {tech}</div>
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
                            Healthcare Success Stories
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-4">
                                    {study.client}
                                </div>
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

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            HIPAA Compliance & Security
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {compliance.map((item, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 text-green-600 mb-4">
                                    <ShieldCheckIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.standard}</h3>
                                <ul className="space-y-2">
                                    {item.requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Transform Healthcare Delivery?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free consultation on HIPAA-compliant healthcare software solutions
                    </p>
                    <Link
                        href="/contact?type=healthcare-consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
