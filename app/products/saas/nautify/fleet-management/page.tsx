'use client'

import Link from 'next/link'
import { CheckCircleIcon, ClockIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function FleetPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-display font-bold mb-6">
                            Fleet Management Document Tracking
                        </h1>
                        <p className="text-xl mb-8 text-orange-100">
                            Manage vehicle and driver documentation with automated compliance tracking
                        </p>
                        <Link
                            href="/contact?type=nautify-fleet"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                        >
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </section>

            {/* Key Challenges */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
                        Fleet Management Challenges
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: 'Vehicle Registration',
                                description: 'Tracking registration renewals across hundreds of vehicles',
                                icon: TruckIcon
                            },
                            {
                                title: 'Insurance Compliance',
                                description: 'Ensuring all vehicles maintain valid insurance coverage',
                                icon: ShieldCheckIcon
                            },
                            {
                                title: 'Driver Licenses',
                                description: 'Monitoring driver license expirations and endorsements',
                                icon: CheckCircleIcon
                            },
                            {
                                title: 'Inspection Certificates',
                                description: 'Managing safety inspections and compliance certifications',
                                icon: ClockIcon
                            }
                        ].map((challenge, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <challenge.icon className="w-12 h-12 text-orange-600 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{challenge.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{challenge.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Documents */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
                        Documents We Track
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: 'Vehicle Registration',
                                items: ['Registration certificates', 'Title documents', 'License plates', 'Renewal notices']
                            },
                            {
                                title: 'Insurance',
                                items: ['Commercial auto insurance', 'Liability coverage', 'Cargo insurance', 'COI certificates']
                            },
                            {
                                title: 'Driver Licenses',
                                items: ['CDL licenses', 'Medical certificates', 'Endorsements', 'Background checks']
                            },
                            {
                                title: 'Inspection Certificates',
                                items: ['DOT inspections', 'Safety inspections', 'Emissions testing', 'Maintenance records']
                            }
                        ].map((category, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                            <CheckCircleIcon className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How Nautify Helps */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
                        How Nautify Helps Fleet Managers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: 'Fleet-Wide Visibility',
                                description: 'See all vehicle and driver document statuses in one dashboard',
                                benefit: 'Reduce compliance risks'
                            },
                            {
                                title: 'Automated Alerts',
                                description: 'Get notified before registrations, insurance, and licenses expire',
                                benefit: 'Avoid costly violations'
                            },
                            {
                                title: 'Compliance Reports',
                                description: 'Generate compliance reports for audits and regulatory reviews',
                                benefit: 'Pass audits with confidence'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="card-enterprise p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                                <div className="inline-block px-4 py-2 bg-orange-50 text-orange-700 rounded-lg text-sm font-semibold">
                                    {feature.benefit}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold mb-6">
                        Keep Your Fleet Compliant and On the Road
                    </h2>
                    <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
                        Join fleet managers using Nautify to automate compliance and reduce administrative burden
                    </p>
                    <Link
                        href="/contact?type=nautify-fleet"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                    >
                        Start Your 30-Day Free Trial
                    </Link>
                </div>
            </section>
        </main>
    )
}
