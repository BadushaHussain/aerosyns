import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaHospital, FaDumbbell, FaChartLine } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Rehabilitation Center Robotics - HumaNova',
    description: 'Advanced robotic systems for rehabilitation centers, supporting therapy, recovery, and patient progress tracking.',
    keywords: ['rehabilitation robotics', 'therapy robots', 'recovery assistance', 'physical therapy technology UAE'],
})

const services = [
    { title: 'Gait Training', features: ['Treadmill integration', 'Balance support', 'Step pattern correction', 'Progress tracking'] },
    { title: 'Upper Limb Therapy', features: ['Range of motion exercises', 'Strength building', 'Fine motor skills', 'Bilateral training'] },
    { title: 'Transfer Training', features: ['Safe practice environment', 'Graduated assistance', 'Confidence building', 'Independence preparation'] },
    { title: 'Progress Monitoring', features: ['Detailed analytics', 'Objective measurements', 'Therapy plan adjustments', 'Patient reporting'] },
]

export default function RehabilitationCentersPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <FaDumbbell className="w-5 h-5 text-cyan-400 mr-2" />
                            <span className="text-cyan-400 text-sm font-semibold">Rehabilitation Centers</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Rehabilitation Center Robotics
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Advanced robotic systems designed for rehabilitation centers—supporting therapy sessions,
                            accelerating recovery, and providing objective progress tracking for patients and therapists.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-cyan-600 to-blue-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Enhance Your Rehabilitation Services
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Discover how our robotic systems can support your therapy programs
                    </p>
                    <Link
                        href="/contact?type=robotics-rehabilitation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-cyan-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Facility Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
