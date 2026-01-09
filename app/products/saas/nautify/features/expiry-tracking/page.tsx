'use client'

import Link from 'next/link'
import { CheckCircleIcon, ClockIcon, BellAlertIcon, CalendarIcon } from '@heroicons/react/24/outline'

export default function ExpiryTrackingPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-display font-bold mb-6">Expiry Tracking</h1>
                        <p className="text-xl mb-8 text-purple-100">
                            Automated tracking with configurable alert timelines
                        </p>
                        <Link href="/contact?type=nautify-tracking" className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">Tracking Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: 'Custom Alert Schedules', description: 'Set up alerts 90, 60, 30, 15, or custom days before expiry', icon: CalendarIcon },
                            { title: 'Multi-Level Reminders', description: 'Progressive reminders that escalate as expiry approaches', icon: BellAlertIcon },
                            { title: 'Grace Period Management', description: 'Define grace periods for different document types', icon: ClockIcon },
                            { title: 'Bulk Tracking', description: 'Track thousands of documents with automated monitoring', icon: CheckCircleIcon }
                        ].map((feature, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold mb-6">Never Miss an Expiry Again</h2>
                    <Link href="/contact?type=nautify-tracking" className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                        Start Your 30-Day Free Trial
                    </Link>
                </div>
            </section>
        </main>
    )
}
