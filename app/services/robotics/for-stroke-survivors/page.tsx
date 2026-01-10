import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { MdHealthAndSafety } from 'react-icons/md'

export const metadata = genMeta({
    title: 'Assistive Robots for Stroke Survivors - HumaNova',
    description: 'Rehabilitation and daily living support robots for stroke survivors, aiding recovery and independence.',
    keywords: ['stroke rehabilitation robots', 'stroke recovery assistance', 'hemiplegia support', 'neuro-rehabilitation UAE'],
})

const solutions = [
    { title: 'Rehabilitation Therapy', features: ['Gait training', 'Upper limb exercises', 'Range of motion therapy', 'Strength building', 'Progress tracking'] },
    { title: 'Daily Living Support', features: ['Dressing assistance', 'Meal preparation', 'Personal hygiene', 'Medication management', 'Object manipulation'] },
    { title: 'Mobility Assistance', features: ['Balance support', 'Walking assistance', 'Transfer help', 'Fall prevention', 'Navigation aid'] },
    { title: 'Communication Aid', features: ['Speech therapy support', 'Aphasia assistance', 'Voice amplification', 'Text-to-speech', 'Emergency communication'] },
]

export default function StrokeSurvivorsPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                            <MdHealthAndSafety className="w-5 h-5 text-teal-400 mr-2" />
                            <span className="text-teal-400 text-sm font-semibold">Stroke Survivors</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Assistive Robots for Stroke Survivors
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Comprehensive robotic support for stroke recovery and daily living—combining rehabilitation therapy,
                            mobility assistance, communication aid, and independence support tailored to your recovery journey.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                                <ul className="space-y-3">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-teal-600 to-cyan-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Support Your Recovery Journey
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Discover how our assistive robots can support your stroke recovery and independence
                    </p>
                    <Link
                        href="/contact?type=robotics-stroke-recovery"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-teal-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
