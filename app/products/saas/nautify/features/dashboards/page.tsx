'use client'

import Link from 'next/link'
import { CheckCircleIcon, ChartBarIcon, CalendarDaysIcon, ShieldCheckIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'

export default function DashboardsPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-display font-bold mb-6">Compliance Dashboards</h1>
                        <p className="text-xl mb-8 text-green-100">
                            Real-time visibility into compliance status
                        </p>
                        <Link href="/contact?type=nautify-dashboards" className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">Dashboard Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: 'Expiry Calendar', description: 'Visual calendar showing all upcoming document expiries', icon: CalendarDaysIcon },
                            { title: 'Risk Indicators', description: 'Color-coded alerts for high-risk expiring documents', icon: ShieldCheckIcon },
                            { title: 'Compliance Reports', description: 'Real-time compliance status across all departments', icon: DocumentCheckIcon },
                            { title: 'Audit Trails', description: 'Complete history of all document activities and changes', icon: ChartBarIcon }
                        ].map((feature, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold mb-6">Get Complete Visibility</h2>
                    <Link href="/contact?type=nautify-dashboards" className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                        Start Your 30-Day Free Trial
                    </Link>
                </div>
            </section>
        </main>
    )
}
