import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'About Aerosyns - Enterprise IT & AI Infrastructure',
    description:
        'Aerosyns provides enterprise IT infrastructure, cloud solutions, and AI/ML platforms across UAE and MENA. 15+ years of experience with 500+ successful deployments.',
    keywords: ['Aerosyns', 'IT company UAE', 'enterprise IT Dubai', 'about us'],
})

export default function AboutPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            About Aerosyns
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Leading provider of enterprise IT infrastructure and AI solutions across UAE and MENA region
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Our Story</h2>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="mb-4">
                                Aerosyns was founded with a mission to deliver world-class IT infrastructure and cloud
                                solutions to enterprises across the Middle East. With over 15 years of experience, we've
                                successfully deployed 500+ projects ranging from datacenter builds to AI/ML infrastructure.
                            </p>
                            <p className="mb-4">
                                Our team of certified engineers and architects brings deep expertise in enterprise IT,
                                cloud computing, cybersecurity, and artificial intelligence. We partner with leading
                                technology vendors to deliver best-in-class solutions tailored to your business needs.
                            </p>
                            <p>
                                From small businesses to large enterprises, we provide comprehensive services including
                                infrastructure design, implementation, and 24/7 managed services to ensure your IT
                                operations run smoothly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Excellence', desc: 'Delivering the highest quality solutions and services' },
                            { title: 'Innovation', desc: 'Staying ahead with latest technologies and best practices' },
                            { title: 'Partnership', desc: 'Building long-term relationships with our clients' },
                            { title: 'Integrity', desc: 'Honest, transparent communication in all interactions' },
                            { title: 'Expertise', desc: 'Deep technical knowledge and certified professionals' },
                            { title: 'Support', desc: '24/7 availability and rapid response to your needs' },
                        ].map((value, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-sm text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '15+', label: 'Years Experience' },
                            { number: '500+', label: 'Projects Delivered' },
                            { number: '99.99%', label: 'Uptime SLA' },
                            { number: '24/7', label: 'Support Available' },
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Join Our Team
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        We're always looking for talented engineers and architects
                    </p>
                    <Link href="/careers" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        View Openings
                    </Link>
                </div>
            </section>
        </>
    )
}
