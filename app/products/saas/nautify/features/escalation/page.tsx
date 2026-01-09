'use client'

import Link from 'next/link'
import { CheckCircleIcon, ArrowTrendingUpIcon, UserGroupIcon, ClockIcon, BellAlertIcon } from '@heroicons/react/24/outline'

export default function EscalationPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-display font-bold mb-6">Escalation Workflows</h1>
                        <p className="text-xl mb-8 text-red-100">
                            Automated escalation for overdue documents
                        </p>
                        <Link href="/contact?type=nautify-escalation" className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">Escalation Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: 'Multi-Level Escalation', description: 'Automatically escalate to higher management levels', icon: ArrowTrendingUpIcon },
                            { title: 'Manager Notifications', description: 'Alert supervisors when team members miss deadlines', icon: UserGroupIcon },
                            { title: 'Auto-Assignment', description: 'Automatically reassign overdue tasks to backup owners', icon: BellAlertIcon },
                            { title: 'SLA Tracking', description: 'Monitor and enforce service level agreements', icon: ClockIcon }
                        ].map((feature, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <feature.icon className="w-12 h-12 text-red-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold mb-6">Ensure Accountability</h2>
                    <Link href="/contact?type=nautify-escalation" className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                        Start Your 30-Day Free Trial
                    </Link>
                </div>
            </section>
        </main>
    )
}
