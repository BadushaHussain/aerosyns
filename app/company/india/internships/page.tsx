'use client'

import Link from 'next/link'
import { Rocket, Bot, Globe, Zap } from 'lucide-react'

export default function InternshipPage() {
    return (
        <div className="bg-white">
            {/* Hero / Header Section */}
            <section className="py-24 bg-gray-900 text-white min-h-[50vh] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-black z-0" />
                    <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                    </svg>
                </div>

                <div className="container-custom relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        Building Future Engineers
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-300 font-medium mb-6">
                        Welcoming the Next Generation of Software Engineers
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        As part of our expansion in Palakkad and Calicut, we plan to introduce a structured internship program for newly graduated Computer Science and related discipline candidates.
                    </p>
                </div>
            </section>

            {/* Internship Details Section */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Content Copy */}
                        <div className="mb-16 text-center">
                            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
                                The internship is designed to provide participants with practical exposure to software engineering and technology-driven projects under the guidance of experienced professionals.
                            </p>
                        </div>

                        {/* Highlights Cards */}
                        <div className="grid md:grid-cols-2 gap-6 mb-16">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
                                    👨‍💻
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Projects, Not Simulations</h3>
                                <p className="text-gray-600">Work on ongoing client and internal projects from day one, gaining real-world experience.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
                                    🧠
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Mentorship by Senior Engineers</h3>
                                <p className="text-gray-600">Guided by experienced developers, architects, and AI engineers throughout your journey.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
                                    🚀
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Performance-Based Hiring</h3>
                                <p className="text-gray-600">Top performers who demonstrate strong potential may receive full-time offers.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
                                    🌍
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Exposure</h3>
                                <p className="text-gray-600">Contribute to solutions used by clients across multiple regions including MENA and APAC.</p>
                            </div>
                        </div>

                        {/* Eligibility & CTAs */}
                        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-8">Eligibility Snapshot</h3>
                                <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-300 mb-10">
                                    <span className="bg-gray-800 px-4 py-2 rounded-full border border-gray-700">🎓 Fresh CS / IT graduates</span>
                                    <span className="bg-gray-800 px-4 py-2 rounded-full border border-gray-700">💡 Strong programming fundamentals</span>
                                    <span className="bg-gray-800 px-4 py-2 rounded-full border border-gray-700">🔥 Passion to build & ship</span>
                                    <span className="bg-gray-800 px-4 py-2 rounded-full border border-gray-700">📍 Palakkad / Calicut based</span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                                    <Link
                                        href="/contact?type=internship-apply"
                                        className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2"
                                    >
                                        🚀 Apply for Internship
                                    </Link>
                                    <Link
                                        href="/contact?type=internship-notify"
                                        className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
                                    >
                                        📩 Get Notified
                                    </Link>
                                </div>
                                <p className="text-gray-400 text-sm">Limited seats • Merit-based selection</p>
                            </div>
                        </div>

                        <div className="mt-16 text-center bg-blue-900 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800/50 to-transparent opacity-50" />
                            <div className="relative z-10">
                                <p className="text-2xl md:text-4xl font-bold italic mb-6 leading-tight">
                                    "Your First Line of Production Code Starts Here."
                                </p>
                                <Link
                                    href="/company/india/internships/terms"
                                    className="inline-flex items-center text-blue-200 hover:text-white transition-colors border-b border-blue-400/30 hover:border-white pb-0.5"
                                >
                                    Read Internship Program – Terms & Disclaimer
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
