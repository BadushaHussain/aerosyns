import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaBell, FaHeartbeat, FaShieldAlt, FaUserMd } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Safety & Monitoring Systems - HumaNova Robotics',
    description: 'Fall detection, emergency alerts, health monitoring, and caregiver notification systems for enhanced safety and peace of mind.',
    keywords: ['fall detection', 'health monitoring', 'emergency alerts', 'caregiver notifications', 'safety systems UAE'],
})

const safetyFeatures = [
    {
        title: 'Fall Detection & Prevention',
        icon: FaShieldAlt,
        description: 'Advanced sensors and AI to detect and prevent falls',
        features: [
            'Real-time balance monitoring',
            'Predictive fall risk assessment',
            'Automatic emergency alerts',
            'Impact detection',
            'Post-fall assistance',
            'Environmental hazard detection',
        ],
    },
    {
        title: 'Health Monitoring',
        icon: FaHeartbeat,
        description: 'Continuous health tracking and vital sign monitoring',
        features: [
            'Heart rate monitoring',
            'Blood pressure tracking',
            'Activity level analysis',
            'Sleep quality monitoring',
            'Medication reminders',
            'Trend analysis and reporting',
        ],
    },
    {
        title: 'Emergency Response',
        icon: FaBell,
        description: 'Rapid emergency detection and notification',
        features: [
            'One-touch emergency button',
            'Automatic emergency detection',
            'Multi-contact notification',
            'GPS location sharing',
            'Two-way voice communication',
            'Integration with emergency services',
        ],
    },
    {
        title: 'Caregiver Collaboration',
        icon: FaUserMd,
        description: 'Keep caregivers informed and connected',
        features: [
            'Real-time activity updates',
            'Customizable alert thresholds',
            'Daily summary reports',
            'Remote monitoring dashboard',
            'Secure family portal',
            'Care team coordination',
        ],
    },
]

const privacyFeatures = [
    'End-to-end encryption',
    'HIPAA compliant data storage',
    'User-controlled data sharing',
    'Anonymized analytics',
    'Local processing options',
    'Audit logs',
]

export default function SafetyMonitoringPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-red-400 hover:text-red-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                            <FaBell className="w-5 h-5 text-red-400 mr-2" />
                            <span className="text-red-400 text-sm font-semibold">Safety & Monitoring</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Safety & Monitoring Systems
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Advanced safety technology providing peace of mind through fall detection, health monitoring,
                            emergency response, and caregiver collaboration—all while respecting your privacy and independence.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Comprehensive Safety Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            24/7 monitoring and protection tailored to your needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {safetyFeatures.map((feature, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 mb-6">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 mb-6">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Privacy & Security
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Your safety data is protected with enterprise-grade security
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {privacyFeatures.map((feature, index) => (
                            <div key={index} className="card-enterprise p-4 text-center">
                                <CheckCircleIcon className="w-6 h-6 text-red-500 mx-auto mb-2" />
                                <p className="text-sm font-semibold text-gray-900">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-red-600 to-orange-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Safety and Independence, Together
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Discover how our safety systems can provide peace of mind while maintaining your independence
                    </p>
                    <Link
                        href="/contact?type=robotics-safety"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-red-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
