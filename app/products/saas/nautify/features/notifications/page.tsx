'use client'

import Link from 'next/link'
import { CheckCircleIcon, EnvelopeIcon, DevicePhoneMobileIcon, ChatBubbleLeftRightIcon, BellIcon } from '@heroicons/react/24/outline'

export default function NotificationsPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-display font-bold mb-6">Multi-Channel Notifications</h1>
                        <p className="text-xl mb-8 text-orange-100">
                            Reach stakeholders through their preferred channels
                        </p>
                        <Link href="/contact?type=nautify-notifications" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">Notification Channels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: 'Email Notifications', description: 'Detailed email alerts with document information and action links', icon: EnvelopeIcon },
                            { title: 'SMS Alerts', description: 'Instant SMS notifications for urgent expiries', icon: DevicePhoneMobileIcon },
                            { title: 'WhatsApp Messages', description: 'Reach users on their preferred messaging platform', icon: ChatBubbleLeftRightIcon },
                            { title: 'In-App Notifications', description: 'Real-time alerts within the Nautify dashboard', icon: BellIcon }
                        ].map((channel, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <channel.icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{channel.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{channel.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold mb-6">Ensure Critical Alerts Reach Everyone</h2>
                    <Link href="/contact?type=nautify-notifications" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                        Start Your 30-Day Free Trial
                    </Link>
                </div>
            </section>
        </main>
    )
}
