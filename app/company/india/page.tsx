'use client'

import Link from 'next/link'
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'
import { Globe as GlobeIcon, Rocket, Bot, Globe, Zap } from 'lucide-react'


export default function IndiaExpansionPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gray-900 text-white min-h-[90vh] flex items-center justify-center">
                {/* Background with Gradient and Grid */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-blue-900/40 to-black z-0" />
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-sm mb-8 animate-fade-in-up">
                        <GlobeIcon className="w-4 h-4 text-green-400" />
                        <span className="tracking-wide uppercase text-xs">Global Expansion</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        Opening Soon in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">God’s Own Country</span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-gray-200 font-light mb-4">
                        Strategic Expansion in Palakkad & Calicut
                    </p>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                        Building world-class software & AI infrastructure from Kerala for the world.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact?type=notify"
                            className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
                        >
                            <span>🔔</span> Notify Me
                        </Link>
                        <Link
                            href="/careers"
                            className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
                        >
                            <span>💼</span> Careers – Coming Soon
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Kerala Section */}
            <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                                Why Palakkad & Calicut?
                            </h2>
                            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex gap-4 items-start group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                    <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Access to Emerging Tech Talent</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Tapping into a vibrant ecosystem of skilled engineers and innovators from top-tier institutions in the region.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                                    <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cost-Efficient, High-Quality Engineering</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Delivering premium software solutions with optimized operational costs without compromising on quality or performance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors duration-300">
                                    <svg className="w-6 h-6 text-purple-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Time-Zone Advantage</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Strategic 24/7 global delivery capabilities, ensuring seamless support and rapid turnaround times for our international clients.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 transition-colors duration-300">
                                    <svg className="w-6 h-6 text-orange-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strong Academic & Innovation Ecosystem</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Benefit from a robust network of academic institutions and a government-backed push for IT and startup innovation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What This Office Means Section */}
            <section className="py-24 bg-gray-900 text-white border-t border-gray-800">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            What This Office Means
                        </h2>
                        <div className="w-20 h-1.5 bg-blue-500 rounded-full mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl hover:bg-gray-800 transition-colors duration-300 group">
                            <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                                <Rocket className="w-7 h-7 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Engineering Excellence</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Advanced software development & system architecture
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl hover:bg-gray-800 transition-colors duration-300 group">
                            <div className="w-14 h-14 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                                <Bot className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">AI Infrastructure Hub</h3>
                            <p className="text-gray-400 leading-relaxed">
                                ML pipelines, data platforms, AI ops & automation
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl hover:bg-gray-800 transition-colors duration-300 group">
                            <div className="w-14 h-14 bg-green-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-green-500/20">
                                <Globe className="w-7 h-7 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Global Delivery</h3>
                            <p className="text-gray-400 leading-relaxed">
                                24/7 support across MENA, Europe & APAC
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl hover:bg-gray-800 transition-colors duration-300 group">
                            <div className="w-14 h-14 bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20">
                                <Zap className="w-7 h-7 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Faster Innovation</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Shorter release cycles & rapid experimentation
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Talent Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Local Talent. <span className="text-blue-600">Global Vision.</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            We’re building high-impact products from Kerala for the world. Join us to shape the future of technology.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="p-6 bg-gray-50 rounded-2xl">
                                <span className="text-4xl mb-4 block">🚀</span>
                                <h3 className="font-bold text-gray-900 text-lg">High-Impact Products</h3>
                                <p className="text-gray-600 mt-2">Build software that matters</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-2xl">
                                <span className="text-4xl mb-4 block">🤖</span>
                                <h3 className="font-bold text-gray-900 text-lg">Advanced Tech Stack</h3>
                                <p className="text-gray-600 mt-2">Work on AI, SaaS & Enterprise</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-2xl">
                                <span className="text-4xl mb-4 block">🌍</span>
                                <h3 className="font-bold text-gray-900 text-lg">Real-World Scale</h3>
                                <p className="text-gray-600 mt-2">Solve global problems</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/careers"
                                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-lg group"
                            >
                                👉 Join Our Founding Team <span className="ml-2 text-gray-400 font-normal text-sm group-hover:text-white transition-colors">(Opens Soon)</span>
                            </Link>

                            <Link
                                href="/company/india/internships"
                                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-bold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-lg group"
                            >
                                🎓 Join Our Internship Program <span className="ml-2 text-gray-500 font-normal text-sm group-hover:text-gray-900 transition-colors">(Opens Soon)</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
