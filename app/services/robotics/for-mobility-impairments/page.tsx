import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaWheelchair, FaHandsHelping, FaHome } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Assistive Robots for Mobility Impairments - HumaNova',
    description: 'Personalized robotic assistance for individuals with mobility impairments, wheelchair users, and limited mobility challenges.',
    keywords: ['mobility assistance robots', 'wheelchair robotics', 'mobility impairment support', 'assistive technology UAE'],
})

const solutions = [
    {
        title: 'Wheelchair Integration',
        features: ['Powered wheelchair control', 'Robotic arm attachment', 'Navigation assistance', 'Obstacle avoidance', 'Terrain adaptation'],
    },
    {
        title: 'Transfer Assistance',
        features: ['Bed-to-wheelchair transfers', 'Sit-to-stand support', 'Vehicle entry/exit', 'Bathroom assistance', 'Weight-bearing support'],
    },
    {
        title: 'Reach & Manipulation',
        features: ['Extended reach capabilities', 'Object retrieval', 'Door opening', 'Shelf access', 'Floor-level pickup'],
    },
    {
        title: 'Independence Support',
        features: ['Meal preparation', 'Personal care', 'Dressing assistance', 'Home maintenance', 'Social engagement'],
    },
]

const testimonial = {
    quote: "The robotic assistance has transformed my daily life. I can now do things independently that I previously needed help with.",
    author: "Sarah M.",
    condition: "Wheelchair user, 12 years",
}

export default function MobilityImpairmentsPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <FaWheelchair className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 text-sm font-semibold">Mobility Impairments</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Assistive Robots for Mobility Impairments
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Personalized robotic solutions designed specifically for individuals with mobility challenges—
                            restoring independence, enhancing capabilities, and improving quality of life.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Tailored Solutions for Mobility Challenges
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive assistance designed around your specific needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                                <ul className="space-y-3">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="card-enterprise p-8">
                            <p className="text-2xl text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                            <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.condition}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Restore Your Independence
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our assistive robots can be customized for your mobility needs
                    </p>
                    <Link
                        href="/contact?type=robotics-mobility"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
