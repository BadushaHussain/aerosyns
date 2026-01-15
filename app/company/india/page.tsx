'use client'

import Link from 'next/link'
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'
import { Globe as GlobeIcon } from 'lucide-react'

export default function IndiaExpansionPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gray-900 text-white py-32 lg:py-48">
                <div className="absolute inset-0 opacity-20">
                    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                    </svg>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 font-medium text-sm mb-8 border border-blue-500/30">
                        <GlobeIcon className="w-4 h-4" />
                        <span>Global Expansion</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Namaste, India! 🇮🇳
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Aerosyns is expanding its global footprint with a new center of excellence in <span className="text-white font-semibold">Palakkad, Kerala</span>.
                    </p>
                    <div className="inline-block bg-white text-gray-900 px-8 py-4 rounded font-bold text-lg shadow-xl">
                        Opening Soon
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                            <FaMapMarkerAlt className="w-10 h-10 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Strategic Expansion in God's Own Country
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            We are thrilled to announce our upcoming office in Palakkad, a city known for its rich heritage and emerging tech talent. This new location will serve as a key hub for our software engineering and AI infrastructure operations, enabling us to better serve our global clients with 24/7 support and rapid innovation.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">Location</h3>
                                <p className="text-gray-600">Palakkad, Kerala, India</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">Focus Areas</h3>
                                <p className="text-gray-600">AI Research, Software Development, 24/7 NOC</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">Status</h3>
                                <p className="text-green-600 font-medium">Coming Soon</p>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Want to join our India team?</h3>
                            <Link
                                href="/contact?type=careers"
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                            >
                                Contact our HR team <FaArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
