'use client'

import Link from 'next/link'
import { CheckCircleIcon, ClockIcon, BellIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function InsurancePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-display font-bold mb-6">
                            Insurance Document Management
                        </h1>
                        <p className="text-xl mb-8 text-blue-100">
                            Track policy documents, licenses, and regulatory compliance with automated expiry management
                        </p>
                        <Link
                            href="/contact?type=nautify-insurance"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
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
                        Challenges in Insurance Document Management
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: 'Policy Expiry Tracking',
                                description: 'Managing hundreds of policies with different renewal dates across multiple clients',
                                icon: ClockIcon
                            },
                            {
                                title: 'License Compliance',
                                description: 'Ensuring all agents maintain valid licenses and certifications',
                                icon: ShieldCheckIcon
                            },
                            {
                                title: 'Regulatory Deadlines',
                                description: 'Meeting strict regulatory filing deadlines to avoid penalties',
                                icon: BellIcon
                            },
                            {
                                title: 'Certificate Management',
                                description: 'Tracking insurance certificates for clients and third parties',
                                icon: CheckCircleIcon
                            }
                        ].map((challenge, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <challenge.icon className="w-12 h-12 text-blue-600 mb-4" />
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
                                title: 'Insurance Policies',
                                items: ['Commercial policies', 'Personal policies', 'Reinsurance agreements', 'Policy endorsements']
                            },
                            {
                                title: 'Agent Licenses',
                                items: ['State licenses', 'Professional certifications', 'Continuing education', 'E&O insurance']
                            },
                            {
                                title: 'Regulatory Filings',
                                items: ['Annual reports', 'Rate filings', 'Form approvals', 'Compliance certificates']
                            },
                            {
                                title: 'Certificates',
                                items: ['COI certificates', 'Proof of insurance', 'Binder documents', 'Declarations pages']
                            }
                        ].map((category, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                            <CheckCircleIcon className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
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
                        How Nautify Helps Insurance Companies
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: 'Automated Alerts',
                                description: 'Get notified 90, 60, and 30 days before any policy or license expires',
                                benefit: 'Never miss a renewal deadline'
                            },
                            {
                                title: 'Compliance Dashboard',
                                description: 'See all upcoming expirations and compliance requirements in one view',
                                benefit: 'Stay audit-ready at all times'
                            },
                            {
                                title: 'Multi-Channel Notifications',
                                description: 'Receive alerts via email, SMS, and in-app notifications',
                                benefit: 'Ensure critical updates reach the right people'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="card-enterprise p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                                <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold">
                                    {feature.benefit}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold mb-6">
                        Ready to Streamline Your Insurance Document Management?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        Join insurance companies already using Nautify to stay compliant and never miss a deadline
                    </p>
                    <Link
                        href="/contact?type=nautify-insurance"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                    >
                        Start Your 30-Day Free Trial
                    </Link>
                </div>
            </section>
        </main>
    )
}
