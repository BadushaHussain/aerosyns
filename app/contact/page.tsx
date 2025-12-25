import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata = genMeta({
    title: 'Contact Us - Aerosyns',
    description:
        'Get in touch with Aerosyns for enterprise IT infrastructure, AI solutions, and managed services. Request a quote, schedule a consultation, or speak with our team.',
    keywords: ['contact Aerosyns', 'IT consultation UAE', 'enterprise support'],
})

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Let's Build Your Infrastructure
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Get in touch with our enterprise architects for a free consultation
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                                Request a Consultation
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Fill out the form and our team will get back to you within 24 hours.
                                For urgent inquiries, please call us directly.
                            </p>
                            <LeadForm />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                                            <p className="text-gray-600">Dubai, United Arab Emirates</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                                            <p className="text-gray-600">+971 XX XXX XXXX</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                                            <p className="text-gray-600">info@aerosyns.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-enterprise p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Enterprise Support
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    24/7 NOC support available for existing customers
                                </p>
                                <Link href="tel:+971XXXXXXXX" className="btn-primary w-full text-center">
                                    Call Support Hotline
                                </Link>
                            </div>

                            <div className="card-enterprise p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Office Hours
                                </h3>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="font-semibold">10:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="font-semibold">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
