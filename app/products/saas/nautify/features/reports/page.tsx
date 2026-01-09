'use client'

import Link from 'next/link'
import { CheckCircleIcon, ChartBarIcon, DocumentChartBarIcon, ArrowDownTrayIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

export default function ReportsPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-display font-bold mb-6">Reports & Analytics</h1>
                        <p className="text-xl mb-8 text-indigo-100">
                            Comprehensive reporting and compliance analytics
                        </p>
                        <Link href="/contact?type=nautify-reports" className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">Reporting Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: 'Compliance Reports', description: 'Detailed compliance status reports for audits', icon: DocumentChartBarIcon },
                            { title: 'Expiry Forecasts', description: 'Predictive analytics for upcoming expiries', icon: PresentationChartLineIcon },
                            { title: 'Department Analytics', description: 'Track compliance by department and team', icon: ChartBarIcon },
                            { title: 'Export to Excel/PDF', description: 'Download reports in multiple formats', icon: ArrowDownTrayIcon }
                        ].map((feature, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold mb-6">Make Data-Driven Decisions</h2>
                    <Link href="/contact?type=nautify-reports" className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                        Start Your 30-Day Free Trial
                    </Link>
                </div>
            </section>
        </main>
    )
}
