import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaRobot, FaBrain, FaHandsHelping, FaWheelchair, FaHome, FaBell, FaComments, FaHeart } from 'react-icons/fa'
import { HiCpuChip } from 'react-icons/hi2'
import { MdAccessible, MdHealthAndSafety, MdElderly } from 'react-icons/md'
import { GiRobotGrab } from 'react-icons/gi'

export const metadata = genMeta({
    title: 'HumaNova Robotics - Assistive Robots for Physical Challenges',
    description:
        'Personalized AI-powered assistive robots designed around individual physical challenges. Custom-engineered for independence, dignity, and quality of life.',
    keywords: [
        'assistive robotics UAE',
        'personalized disability robots',
        'mobility assistance technology',
        'independence robots',
        'adaptive assistive technology',
        'custom accessibility robots',
        'ROS2 assistive devices',
    ],
})

const differentiators = [
    {
        title: 'Personalized by Design',
        description: 'Not one-size-fits-all — built after assessing your unique needs',
        icon: FaRobot,
        features: ['Mobility limitations assessment', 'Strength & range of motion analysis', 'Living environment adaptation', 'Daily routine customization'],
    },
    {
        title: 'AI That Understands You',
        description: 'Learns your patterns, preferences, and needs over time',
        icon: FaBrain,
        features: ['Voice recognition', 'Gesture & motion tracking', 'Behavioral learning', 'Context awareness'],
    },
    {
        title: 'Independence & Dignity',
        description: 'Supports, not replaces — giving you control over your life',
        icon: FaHeart,
        features: ['User-controlled assistance', 'Privacy protection', 'Caregiver collaboration', 'Dignity-centered design'],
    },
]

const coreCapabilities = [
    {
        category: 'Physical Assistance',
        icon: GiRobotGrab,
        capabilities: ['Robotic arms for object handling', 'Mobility support & navigation', 'Transfer assistance', 'Exoskeleton support modules'],
        link: '/services/robotics/physical-assistance',
    },
    {
        category: 'Communication Assistance',
        icon: FaComments,
        capabilities: ['Voice-controlled actions', 'Speech assistance for non-verbal users', 'Emergency voice alerts', 'Natural conversation'],
        link: '/services/robotics/communication-assistance',
    },
    {
        category: 'Home & Environment',
        icon: FaHome,
        capabilities: ['Opening doors', 'Turning switches on/off', 'Fetching items', 'Smart home integration'],
        link: '/services/robotics/home-environment',
    },
    {
        category: 'Safety & Monitoring',
        icon: FaBell,
        capabilities: ['Fall detection', 'Emergency alerts', 'Health & activity tracking', 'Caregiver notifications'],
        link: '/services/robotics/safety-monitoring',
    },
]

const targetUsers = [
    { group: 'Mobility Impairments', icon: FaWheelchair, link: '/services/robotics/for-mobility-impairments' },
    { group: 'Spinal Cord Injuries', icon: MdAccessible, link: '/services/robotics/for-spinal-injuries' },
    { group: 'Stroke Survivors', icon: MdHealthAndSafety, link: '/services/robotics/for-stroke-survivors' },
    { group: 'Neuromuscular Disorders', icon: FaBrain, link: null },
    { group: 'Amputees', icon: FaHandsHelping, link: null },
    { group: 'Elderly with Physical Limitations', icon: MdElderly, link: null },
]

const usageEnvironments = [
    { name: 'Private Homes', description: 'Personalized home assistance', link: '/services/robotics/private-homes' },
    { name: 'Rehabilitation Centers', description: 'Therapy support & recovery', link: '/services/robotics/rehabilitation-centers' },
    { name: 'Hospitals', description: 'Patient mobility & care', link: '/services/robotics/healthcare-facilities' },
    { name: 'Assisted Living', description: 'Independent living support', link: null },
    { name: 'Long-term Care', description: 'Ongoing assistance & monitoring', link: null },
]

const techHighlights = [
    { tech: 'ROS2', description: 'Safe robotic control' },
    { tech: 'Edge AI', description: 'Real-time response' },
    { tech: 'Computer Vision', description: 'Environment awareness' },
    { tech: 'NLP', description: 'Natural conversation' },
    { tech: 'Human-in-the-loop', description: 'Safety system' },
    { tech: 'Cloud Updates', description: 'Personalization' },
]

export default function RoboticsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <FaRobot className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 text-sm font-semibold">♿ HumaNova Robotics</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Assistive Robots for Humans with Physical Challenges
                        </h1>
                        <p className="text-2xl text-blue-200 mb-4 font-semibold">
                            "Robots built around your abilities — designed for your independence."
                        </p>
                        <p className="text-xl text-gray-300 mb-6">
                            We design and build AI-powered assistive robots that are custom-engineered around each individual's
                            physical challenges, not generic disabilities.
                        </p>
                        <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-8">
                            <p className="text-lg text-gray-200 leading-relaxed">
                                <span className="font-semibold text-blue-200">Every human body is different.</span><br />
                                <span className="font-semibold text-blue-200">Every challenge is unique.</span><br />
                                <span className="font-semibold text-blue-200">So every robot should be too.</span>
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=robotics-consultation" className="btn-primary">
                                Request Consultation
                            </Link>
                            <Link href="#differentiators" className="btn-secondary">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                            Our Mission
                        </h2>
                        <p className="text-2xl text-gray-700 leading-relaxed">
                            To enable people with physical challenges to live more independently, confidently, and safely—
                            <span className="text-primary-600 font-semibold"> with technology that respects human dignity.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section id="differentiators" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            What Makes Our Assistive Robots Different
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The robot adapts to the human — not the other way around
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {differentiators.map((diff, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-6">
                                    <diff.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {diff.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{diff.description}</p>
                                <ul className="space-y-3">
                                    {diff.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Core Capabilities
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive assistance for daily living and independence
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreCapabilities.map((cap, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                                    <cap.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{cap.category}</h3>
                                <ul className="space-y-2 mb-4">
                                    {cap.capabilities.map((capability, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {capability}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={cap.link}
                                    className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who It's Built For */}
            <section className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Who It's Built For
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Personalized solutions for diverse physical challenges
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {targetUsers.map((user, index) => (
                            user.link ? (
                                <Link key={index} href={user.link} className="card-enterprise p-6 text-center hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-4 mx-auto">
                                        <user.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">{user.group}</h3>
                                    <p className="text-xs text-primary-600 font-semibold">Learn More →</p>
                                </Link>
                            ) : (
                                <div key={index} className="card-enterprise p-6 text-center">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-4 mx-auto">
                                        <user.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-900">{user.group}</h3>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>

            {/* Where It's Used */}
            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Where It's Used
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Supporting independence across multiple environments
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {usageEnvironments.map((env, index) => (
                            env.link ? (
                                <Link key={index} href={env.link} className="card-enterprise p-6 text-center hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{env.name}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{env.description}</p>
                                    <p className="text-xs text-primary-600 font-semibold">Learn More →</p>
                                </Link>
                            ) : (
                                <div key={index} className="card-enterprise p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{env.name}</h3>
                                    <p className="text-sm text-gray-600">{env.description}</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Behind the Human Touch */}
            <section className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Technology Behind the Human Touch
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade robotics with human-centered design
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {techHighlights.map((tech, index) => (
                            <div key={index} className="card-enterprise p-4 text-center">
                                <div className="text-primary-600 font-bold text-lg mb-1">{tech.tech}</div>
                                <div className="text-sm text-gray-600">{tech.description}</div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/services/robotics/technology"
                            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-base font-medium rounded-lg text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200"
                        >
                            View Full Technology Stack →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why This Matters */}
            <section className="section-padding bg-gradient-to-br from-blue-900 to-gray-900">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-display font-bold text-white mb-8">
                            Why This Matters
                        </h2>
                        <div className="space-y-4 text-2xl text-blue-100 leading-relaxed">
                            <p>Because <span className="font-semibold text-white">independence is not a luxury.</span></p>
                            <p>Because <span className="font-semibold text-white">dignity should never be compromised.</span></p>
                            <p>Because <span className="font-semibold text-white">technology should serve humanity, not intimidate it.</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Technology That Restores Freedom
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can design a custom robot solution built around your unique abilities and challenges
                    </p>
                    <Link
                        href="/contact?type=robotics-consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
