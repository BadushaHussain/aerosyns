import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaHome, FaBed, FaUtensils, FaShower } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Home-Based Assistive Robotics - HumaNova',
    description: 'Personalized assistive robots for private homes, enabling independent living and daily task support.',
    keywords: ['home assistive robots', 'independent living technology', 'home care robotics', 'smart home accessibility UAE'],
})

const homeAreas = [
    { title: 'Bedroom', icon: FaBed, features: ['Bed transfers', 'Dressing assistance', 'Medication reminders', 'Morning routines'] },
    { title: 'Kitchen', icon: FaUtensils, features: ['Meal preparation', 'Appliance operation', 'Object retrieval', 'Cleanup assistance'] },
    { title: 'Bathroom', icon: FaShower, features: ['Transfer support', 'Personal hygiene', 'Safety monitoring', 'Emergency alerts'] },
    { title: 'Living Areas', icon: FaHome, features: ['Mobility support', 'Entertainment control', 'Social engagement', 'Environmental control'] },
]

export default function PrivateHomesPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                            <FaHome className="w-5 h-5 text-amber-400 mr-2" />
                            <span className="text-amber-400 text-sm font-semibold">Private Homes</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Home-Based Assistive Robotics
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Transform your home into an accessible, supportive environment with personalized robotic assistance
                            for every room and daily activity—enabling true independent living.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Room-by-Room Assistance
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive support throughout your home
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {homeAreas.map((area, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 mb-4">
                                    <area.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{area.title}</h3>
                                <ul className="space-y-2">
                                    {area.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-amber-600 to-orange-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Live Independently at Home
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Discover how our home-based assistive robots can support your independent living
                    </p>
                    <Link
                        href="/contact?type=robotics-home"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-amber-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Home Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
