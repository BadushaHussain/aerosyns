import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaHandsHelping } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Robotics & Prosthetics for Amputees - HumaNova',
    description: 'Advanced bionic limbs and robotic assistive devices for amputees. Seamless integration with natural movement and sensory feedback.',
    keywords: ['amputee robotics', 'bionic limbs', 'prosthetic technology', 'assistive devices for amputees'],
})

const solutions = [
    {
        title: 'Advanced Prosthetics',
        features: ['Myoelectric control sensors', 'Pattern recognition AI', 'Multi-articulating digits', 'Waterproof & durable designs', 'Custom aesthetic covers'],
    },
    {
        title: 'Sensory Feedback',
        features: ['Haptic feedback systems', 'Pressure sensitivity', 'Temperature sensing', 'Proprioception support', 'Natural touch response'],
    },
    {
        title: 'Integrative Control',
        features: ['Mind-controlled interfaces', 'Intuitive gesture control', 'Smartphone app integration', 'Neural interface compatibility', 'Adaptive grip patterns'],
    },
    {
        title: 'Daily Life Tools',
        features: ['Quick-change tool attachments', 'Driving assistants', 'Household task modules', 'Workplace adaptation kits', 'Sports & recreation add-ons'],
    },
]

const testimonial = {
    quote: "It doesn't just feel like a tool; it feels like part of me. I can hold my daughter's hand and feel it.",
    author: "Elena K.",
    condition: "Upper-limb amputee",
}

export default function AmputeesPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-800 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <FaHandsHelping className="w-5 h-5 text-cyan-400 mr-2" />
                            <span className="text-cyan-400 text-sm font-semibold">Amputee Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Redefining Possibility for Amputees
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            State-of-the-art prosthetic robotics that bridge the gap between human intent and mechanical action.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Seamless Integration & Control
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Technology that moves with you, feels with you, and works for you
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                                <ul className="space-y-3">
                                    {solution.features.map((feature, idx) => (
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

            <section className="section-padding bg-gradient-to-br from-cyan-600 to-blue-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Regain Function?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Contact us to explore our latest bionic solutions and scheduled fittings
                    </p>
                    <Link
                        href="/contact?type=robotics-amputee"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-cyan-700 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
