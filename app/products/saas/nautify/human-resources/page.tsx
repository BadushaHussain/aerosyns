'use client'

import Link from 'next/link'
import { CheckCircleIcon, ClockIcon, BellIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function HRPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-display font-bold mb-6">
                            Human Resources Document Management
                        </h1>
                        <p className="text-xl mb-8 text-purple-100">
                            Monitor employee documents and certifications with automated expiry tracking
                        </p>
                        <Link
                            href="/contact?type=nautify-hr"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                        >
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </section>

            {/* Key Challenges */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
                        HR Document Management Challenges
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: 'Work Permit Compliance',
                                description: 'Tracking work permits for international employees across multiple countries',
                                icon: DocumentTextIcon
                            },
                            {
                                title: 'Visa & Immigration',
                                description: 'Managing visa expirations and renewal processes for global workforce',
                                icon: ClockIcon
                            },
                            {
                                title: 'Professional Certifications',
                                description: 'Ensuring employees maintain required certifications and licenses',
                                icon: CheckCircleIcon
                            },
                            {
                                title: 'Compliance Deadlines',
                                description: 'Meeting strict immigration and labor law deadlines',
                                icon: BellIcon
                            }
                        ].map((challenge, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <challenge.icon className="w-12 h-12 text-purple-600 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{challenge.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{challenge.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Documents */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
                        Documents We Track
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: 'Work Permits',
                                items: ['Employment authorization', 'Labor permits', 'Sponsorship documents', 'Work visa extensions']
                            },
                            {
                                title: 'Visas',
                                items: ['H-1B visas', 'L-1 visas', 'Student visas', 'Dependent visas']
                            },
                            {
                                title: 'Passports',
                                items: ['Employee passports', 'Passport renewals', 'Travel documents', 'Emergency passports']
                            },
                            {
                                title: 'Certifications',
                                items: ['Professional licenses', 'Safety certifications', 'Industry credentials', 'Training certificates']
                            }
                        ].map((category, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                            <CheckCircleIcon className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
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
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
                        How Nautify Helps HR Teams
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: 'Centralized Tracking',
                                description: 'Manage all employee documents in one secure platform',
                                benefit: 'Reduce administrative overhead'
                            },
                            {
                                title: 'Automated Reminders',
                                description: 'Get alerts before work permits, visas, and certifications expire',
                                benefit: 'Avoid compliance violations'
                            },
                            {
                                title: 'Audit Trail',
                                description: 'Complete history of all document updates and notifications',
                                benefit: 'Stay audit-ready'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="card-enterprise p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                                <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-semibold">
                                    {feature.benefit}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold mb-6">
                        Simplify Your HR Document Management
                    </h2>
                    <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                        Join HR teams using Nautify to stay compliant and manage employee documents effortlessly
                    </p>
                    <Link
                        href="/contact?type=nautify-hr"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                    >
                        Start Your 30-Day Free Trial
                    </Link>
                </div>
            </section>
        </main>
    )
}
