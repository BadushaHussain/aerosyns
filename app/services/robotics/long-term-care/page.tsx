import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaHeartbeat } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Robotics for Long-Term Care - HumaNova',
    description: 'Specialized robotic assistance for long-term care facilities and chronic condition management.',
    keywords: ['long-term care robotics', 'chronic care technology', 'patient lifting robots', 'hygiene assistance'],
})

const solutions = [
    {
        title: 'Patient Transfer & Mobility',
        features: ['Zero-effort lifting assistance', 'Safe bed-to-chair transfers', 'Gait training support', 'Pressure sore prevention', 'Fall risk reduction'],
    },
    {
        title: 'Hygiene & Personal Care',
        features: ['Robotic bathing assistance', 'Dignified toileting support', 'Grooming aids', 'Incontinence management', 'Privacy-focused design'],
    },
    {
        title: 'Continuous Monitoring',
        features: ['Non-invasive vitals tracking', 'Sleep pattern analysis', 'Pain level assessment', 'Hydration monitoring', 'Behavioral change alerts'],
    },
    {
        title: 'Therapeutic Support',
        features: ['Physical therapy guidance', 'Range of motion exercises', 'Cognitive stimulation', 'Music & reminiscence therapy', 'Comfort companionship'],
    },
]

const testimonial = {
    quote: "The lifting robot has saved our nurses' backs and given our patients a smoother, safer transfer experience.",
    author: "Dr. Emily W.",
    condition: "Chief Medical Officer",
}

export default function LongTermCarePage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-rose-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-rose-400 hover:text-rose-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                            <FaHeartbeat className="w-5 h-5 text-rose-400 mr-2" />
                            <span className="text-rose-400 text-sm font-semibold">Long-Term Care</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Compassionate Innovation
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Supporting the most vulnerable with technology that prioritizes dignity, safety, and comfort.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            24/7 Care & Support
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Reliable assistance for complex care needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                                <ul className="space-y-3">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-rose-500 mr-2 flex-shrink-0 mt-0.5" />
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

            <section className="section-padding bg-gradient-to-br from-rose-600 to-red-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Improving Care Outcomes
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        See how advanced robotics can transform your long-term care capabilities
                    </p>
                    <Link
                        href="/contact?type=robotics-ltc"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-rose-700 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Learn More
                    </Link>
                </div>
            </section>
        </>
    )
}
