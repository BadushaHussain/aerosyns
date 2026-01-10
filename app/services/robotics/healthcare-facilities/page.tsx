import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaHospital, FaUserNurse, FaBed } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Healthcare Facility Robotics - HumaNova',
    description: 'Assistive robotics for hospitals, clinics, and long-term care facilities supporting patient mobility and care.',
    keywords: ['hospital robotics', 'patient care robots', 'healthcare assistive technology', 'medical robotics UAE'],
})

const applications = [
    { title: 'Patient Mobility', features: ['Bed-to-chair transfers', 'Ambulation assistance', 'Fall prevention', 'Safe positioning'] },
    { title: 'Care Support', features: ['Medication delivery', 'Vital sign monitoring', 'Patient communication', 'Emergency response'] },
    { title: 'Rehabilitation', features: ['Physical therapy support', 'Occupational therapy', 'Progress tracking', 'Exercise assistance'] },
    { title: 'Long-term Care', features: ['Daily living assistance', 'Social engagement', 'Activity monitoring', 'Family connection'] },
]

export default function HealthcareFacilitiesPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <FaHospital className="w-5 h-5 text-emerald-400 mr-2" />
                            <span className="text-emerald-400 text-sm font-semibold">Healthcare Facilities</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Healthcare Facility Robotics
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Advanced assistive robotics for hospitals, clinics, and long-term care facilities—supporting patient
                            mobility, care delivery, rehabilitation, and quality of life.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {applications.map((app, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{app.title}</h3>
                                <ul className="space-y-3">
                                    {app.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-emerald-600 to-teal-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Enhance Patient Care with Robotics
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Discover how our assistive robots can support your healthcare facility
                    </p>
                    <Link
                        href="/contact?type=robotics-healthcare"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-emerald-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Facility Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
