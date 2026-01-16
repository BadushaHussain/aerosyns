import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { MdElderly } from 'react-icons/md'

export const metadata = genMeta({
    title: 'Robotics for Elderly & Aging in Place - HumaNova',
    description: 'Assistive robotics designed to help elderly individuals maintain independence, safety, and connection while aging in the comfort of their own homes.',
    keywords: ['elderly care robots', 'aging in place technology', 'robotic companions', 'senior safety monitoring'],
})

const solutions = [
    {
        title: 'Fall Prevention & Detection',
        features: ['Gait analysis & stability support', 'Automated fall detection', 'Emergency response triggering', 'Obstacle clearing', 'Lighting assistance'],
    },
    {
        title: 'Medication & Health',
        features: ['Smart medication dispensing', 'Vitals monitoring', 'Hydration reminders', 'Telehealth integration', 'Appointment tracking'],
    },
    {
        title: 'Home Maintenance',
        features: ['Automated cleaning', 'Fetching & carrying items', 'Door & window management', 'Appliance control', 'Security monitoring'],
    },
    {
        title: 'Cognitive & Social',
        features: ['Memory exercises', 'Routine management', 'Video calling assistance', 'Conversation & companionship', 'Family connection updates'],
    },
]

const testimonial = {
    quote: "My mother can stay in the home she loves because we know she has 24/7 support and safety monitoring.",
    author: "David L.",
    condition: "Son of 82-year-old user",
}

export default function ElderlyPage() {
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
                            <MdElderly className="w-5 h-5 text-teal-400 mr-2" />
                            <span className="text-teal-400 text-sm font-semibold">Elderly Care Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Aging with Grace & Independence
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Robotic companions that provide the safety net needed to age comfortably in your own home.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Safety, Support & Companionship
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive support for daily living and peace of mind
                        </p>
                    </div>
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

            <section className="section-padding bg-gradient-to-br from-teal-600 to-green-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Support Your Loved Ones
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Learn how our solutions can provide a safer home environment
                    </p>
                    <Link
                        href="/contact?type=robotics-elderly"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-teal-700 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </>
    )
}
