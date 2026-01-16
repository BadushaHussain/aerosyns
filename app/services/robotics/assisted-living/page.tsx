import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaUsers } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Robotics for Assisted Living Communities - HumaNova',
    description: 'Enhancing the quality of care in assisted living facilities with robotic support for residents and staff.',
    keywords: ['assisted living robotics', 'care facility robots', 'nursing home automation', 'resident support technology'],
})

const solutions = [
    {
        title: 'Resident Independence',
        features: ['Personal mobility aids', 'In-room assistance', 'Wayfinding support', 'Activity reminders', 'Social connection tools'],
    },
    {
        title: 'Staff augmentation',
        features: ['Supplies delivery', 'Heavy lifting assistance', 'Routine monitoring', 'Administrative automation', 'Cleaning & sanitization'],
    },
    {
        title: 'Facility Safety',
        features: ['Wander management', 'Fall detection & alerts', 'Secure access control', 'Emergency response coordination', 'Environmental monitoring'],
    },
    {
        title: 'Social Engagement',
        features: ['Group activity facilitation', 'Telepresence for families', 'Cognitive games', 'Community announcements', 'Event reminders'],
    },
]

const testimonial = {
    quote: "Our staff can focus on connecting with residents instead of pushing carts. The robots handle the logistics, we handle the care.",
    author: "Sarah J.",
    condition: "Facility Director",
}

export default function AssistedLivingPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                            <FaUsers className="w-5 h-5 text-orange-400 mr-2" />
                            <span className="text-orange-400 text-sm font-semibold">Assisted Living</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Smart Communities for Better Living
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Empowering residents and supporting staff with integrated robotic solutions for modern care communities.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Enhancing Community Life
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Operational efficiency meets personalized care
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                                <ul className="space-y-3">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
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

            <section className="section-padding bg-gradient-to-br from-orange-600 to-red-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Upgrade Your Facility
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Partner with HumaNova to bring the future of care to your community
                    </p>
                    <Link
                        href="/contact?type=robotics-facility"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-orange-700 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
