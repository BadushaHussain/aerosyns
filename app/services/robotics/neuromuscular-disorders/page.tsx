import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaBrain } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Assistive Robots for Neuromuscular Disorders - HumaNova',
    description: 'Robotic solutions for neuromuscular conditions like ALS, MS, and Muscular Dystrophy. Preserving energy and enhancing independence.',
    keywords: ['neuromuscular robotics', 'ALS assistive technology', 'muscular dystrophy robots', 'robotic exoskeletons'],
})

const solutions = [
    {
        title: 'Strength Augmentation',
        features: ['Active exoskeleton support', 'Reduced muscle fatigue', 'Joint stabilization', 'Load distribution', 'Adaptive power assist'],
    },
    {
        title: 'Daily Living Assistance',
        features: ['Feeding assistance arms', 'Grip strengthening', 'Object manipulation', 'Personal grooming support', 'Hydration management'],
    },
    {
        title: 'Mobility & conservation',
        features: ['Energy-saving navigation', 'Smart wheelchair integration', 'Posture management', 'Pressure relief', 'Transfer support'],
    },
    {
        title: 'Communication',
        features: ['Eye-tracking integration', 'Speech synthesis', 'Subtle gesture recognition', 'Smart home control', 'Caregiver alerting'],
    },
]

const testimonial = {
    quote: "The exoskeleton arm allows me to feed myself again. It's a small thing that means the world to my dignity.",
    author: "James R.",
    condition: "Living with ALS",
}

export default function NeuromuscularPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                            <FaBrain className="w-5 h-5 text-purple-400 mr-2" />
                            <span className="text-purple-400 text-sm font-semibold">Neuromuscular Disorders</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Robotics for Neuromuscular Independence
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Advanced robotic support designed to conserve energy and maximize capability for conditions like ALS, MS, and Muscular Dystrophy.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Technology That Empowers Capability
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Adaptive support that evolves with your changing needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                                <ul className="space-y-3">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
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

            <section className="section-padding bg-gradient-to-br from-purple-600 to-indigo-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Explore Your Options
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Discover how our technology can support your specific condition and goals
                    </p>
                    <Link
                        href="/contact?type=robotics-neuromuscular"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
