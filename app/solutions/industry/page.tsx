import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'Industry-Specific IT Solutions',
    description:
        'Specialized IT solutions for banking, healthcare, education, and government sectors. Compliance-ready infrastructure and industry best practices.',
    keywords: ['banking IT', 'healthcare IT', 'education IT', 'government IT', 'industry solutions'],
})

export default function IndustryPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Industry-Specific Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Tailored IT solutions for your industry. Deep expertise in banking, healthcare,
                            education, and government sectors with compliance-ready infrastructure.
                        </p>
                        <Link href="/contact?type=industry" className="btn-primary">
                            Discuss Your Industry Needs
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Banking & Financial Services',
                                desc: 'Core banking, payment systems, regulatory compliance',
                                features: ['Core banking hosting', 'Payment gateway integration', 'PCI-DSS compliance', 'Disaster recovery'],
                            },
                            {
                                title: 'Healthcare',
                                desc: 'HIPAA-compliant infrastructure and healthcare IT',
                                features: ['EMR/EHR systems', 'HIPAA compliance', 'Medical imaging', 'Telemedicine platforms'],
                            },
                            {
                                title: 'Education',
                                desc: 'Learning management and campus infrastructure',
                                features: ['LMS platforms', 'Student portals', 'Research computing', 'Campus WiFi'],
                            },
                            {
                                title: 'Government',
                                desc: 'Secure government IT infrastructure',
                                features: ['E-government services', 'Data sovereignty', 'Cybersecurity', 'Citizen portals'],
                            },
                        ].map((industry, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                                <p className="text-gray-600 mb-6">{industry.desc}</p>
                                <ul className="space-y-2">
                                    {industry.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Industry-Tailored Solutions
                    </h2>
                    <Link href="/contact?type=industry" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
