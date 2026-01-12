import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { Award, Target, Users, Shield, Lightbulb, HeadphonesIcon, CheckCircle, TrendingUp } from 'lucide-react'
import { FaCheckCircle } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'About Aerosyns - Enterprise IT & AI Infrastructure',
    description:
        'Aerosyns provides enterprise IT infrastructure, cloud solutions, and AI/ML platforms across UAE and MENA. 15+ years of experience with 500+ successful deployments.',
    keywords: ['Aerosyns', 'IT company UAE', 'enterprise IT Dubai', 'about us'],
})

const values = [
    {
        title: 'Excellence',
        desc: 'Delivering the highest quality solutions and services',
        icon: Award,
        color: 'from-blue-500 to-blue-600'
    },
    {
        title: 'Innovation',
        desc: 'Staying ahead with latest technologies and best practices',
        icon: Lightbulb,
        color: 'from-purple-500 to-purple-600'
    },
    {
        title: 'Partnership',
        desc: 'Building long-term relationships with our clients',
        icon: Users,
        color: 'from-green-500 to-green-600'
    },
    {
        title: 'Integrity',
        desc: 'Honest, transparent communication in all interactions',
        icon: Shield,
        color: 'from-orange-500 to-orange-600'
    },
    {
        title: 'Expertise',
        desc: 'Deep technical knowledge and certified professionals',
        icon: Target,
        color: 'from-cyan-500 to-cyan-600'
    },
    {
        title: 'Support',
        desc: '24/7 availability and rapid response to your needs',
        icon: HeadphonesIcon,
        color: 'from-red-500 to-red-600'
    },
]

const leadership = [
    {
        name: 'Badusha Hussain',
        role: 'Chief Executive Officer',
        bio: 'Visionary leader with 15+ years in enterprise IT and digital transformation',
    },
    {
        name: 'Technical Leadership',
        role: 'Chief Technology Officer',
        bio: 'Expert in cloud architecture, AI/ML infrastructure, and cybersecurity',
    },
    {
        name: 'Operations Team',
        role: 'VP of Operations',
        bio: 'Ensuring 99.99% uptime with world-class managed services',
    },
]

const certifications = [
    { name: 'ISO 27001', desc: 'Information Security Management' },
    { name: 'SOC 2 Type II', desc: 'Security & Compliance' },
    { name: 'UAE Data Residency', desc: 'Local Data Sovereignty' },
    { name: 'ICAO Compliant', desc: 'Aviation IT Standards' },
]

const methodology = [
    {
        step: '1',
        title: 'Assessment',
        desc: 'Comprehensive analysis of your current infrastructure and requirements',
    },
    {
        step: '2',
        title: 'Solution Design',
        desc: 'Tailored architecture and implementation roadmap',
    },
    {
        step: '3',
        title: 'Implementation',
        desc: 'Expert deployment with minimal disruption',
    },
    {
        step: '4',
        title: 'Managed Support',
        desc: '24/7 monitoring, maintenance, and optimization',
    },
]

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-about)" />
                    </svg>
                </div>

                <div className="container-custom relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            About Aerosyns
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Leading provider of enterprise IT infrastructure and AI solutions across UAE and MENA region
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span className="text-white text-sm font-medium">15+ Years Experience</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span className="text-white text-sm font-medium">500+ Projects</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span className="text-white text-sm font-medium">99.99% Uptime</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section - Two Column */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Our Story</h2>
                            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                                <p>
                                    Aerosyns was founded with a mission to deliver world-class IT infrastructure and cloud
                                    solutions to enterprises across the Middle East. With over 15 years of experience, we've
                                    successfully deployed 500+ projects ranging from datacenter builds to AI/ML infrastructure.
                                </p>
                                <p>
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
                        <div className="relative">
                            <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                                <div className="text-center p-8">
                                    <TrendingUp className="w-24 h-24 text-primary-600 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">15+ Years of Growth</h3>
                                    <p className="text-gray-600">Trusted by enterprises across UAE and MENA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="card-enterprise p-8 text-center group hover:shadow-2xl transition-all duration-300">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform`}>
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-sm text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Leadership Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Experienced leaders driving innovation and excellence
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {leadership.map((leader, index) => (
                            <div key={index} className="card-enterprise p-8 text-center">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-6 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                                <p className="text-sm font-semibold text-primary-600 mb-3">{leader.role}</p>
                                <p className="text-sm text-gray-600">{leader.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            The Aerosyns Advantage
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our proven methodology for delivering exceptional results
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {methodology.map((phase, index) => (
                            <div key={index} className="card-enterprise p-6 relative">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-l-xl"></div>
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white text-xl font-bold mb-4">
                                    {phase.step}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-sm text-gray-600">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Compliance */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Certifications & Compliance
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Trusted certifications ensuring security and compliance
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="card-enterprise p-6 text-center group hover:border-primary-500 transition-all">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <Shield className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                                <p className="text-sm text-gray-600">{cert.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '15+', label: 'Years Experience' },
                            { number: '500+', label: 'Projects Delivered' },
                            { number: '99.99%', label: 'Uptime SLA' },
                            { number: '24/7', label: 'Support Available' },
                        ].map((stat, index) => (
                            <div key={index} className="group">
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Join Our Team
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        We're always looking for talented engineers and architects to join our growing team
                    </p>
                    <Link href="/careers" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        View Openings
                    </Link>
                </div>
            </section>
        </>
    )
}
