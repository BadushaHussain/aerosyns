import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { MdAccessible } from 'react-icons/md'

export const metadata = genMeta({
    title: 'Assistive Robots for Spinal Cord Injuries - HumaNova',
    description: 'Specialized robotic assistance for spinal cord injury survivors, providing mobility, independence, and rehabilitation support.',
    keywords: ['spinal cord injury robotics', 'SCI assistance', 'paraplegia support', 'tetraplegia robotics UAE'],
})

const solutions = [
    { title: 'Upper Limb Assistance', features: ['Robotic arm control', 'Feeding assistance', 'Computer interaction', 'Personal care support'] },
    { title: 'Mobility & Transfer', features: ['Wheelchair navigation', 'Transfer systems', 'Positioning assistance', 'Pressure relief'] },
    { title: 'Environmental Control', features: ['Smart home integration', 'Voice-activated controls', 'Automated door/window operation', 'Climate control'] },
    { title: 'Rehabilitation Support', features: ['Gait training', 'Range of motion exercises', 'Strength building', 'Progress tracking'] },
]

export default function SpinalInjuriesPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                            <MdAccessible className="w-5 h-5 text-indigo-400 mr-2" />
                            <span className="text-indigo-400 text-sm font-semibold">Spinal Cord Injuries</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Assistive Robots for Spinal Cord Injuries
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Specialized robotic solutions designed for individuals with spinal cord injuries—providing upper limb assistance,
                            mobility support, environmental control, and rehabilitation technology tailored to your level of injury.
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
                                            <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
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
                        Specialized Support for SCI
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our assistive robots can be customized for your specific level of injury
                    </p>
                    <Link
                        href="/contact?type=robotics-spinal-injury"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
