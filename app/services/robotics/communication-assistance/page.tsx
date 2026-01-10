import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaComments, FaMicrophone, FaBell } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Communication Assistance Robotics - HumaNova',
    description: 'Voice control, speech assistance, and emergency communication systems for individuals with communication challenges.',
    keywords: ['voice control robotics', 'speech assistance', 'AAC devices', 'communication aids UAE'],
})

const features = [
    {
        title: 'Voice Control Systems',
        icon: FaMicrophone,
        description: 'Natural language commands for complete robot control',
        capabilities: [
            'Multi-language support',
            'Custom voice profiles',
            'Noise cancellation',
            'Continuous learning',
            'Offline voice processing',
            'Wake word customization',
        ],
    },
    {
        title: 'Speech Assistance',
        icon: FaComments,
        description: 'Support for non-verbal users and speech difficulties',
        capabilities: [
            'Text-to-speech with natural voices',
            'Predictive text and phrase completion',
            'Symbol-based communication',
            'Integration with AAC devices',
            'Emotion and tone expression',
            'Quick phrase libraries',
        ],
    },
    {
        title: 'Emergency Communication',
        icon: FaBell,
        description: 'Rapid alert and emergency contact systems',
        capabilities: [
            'One-touch emergency alerts',
            'Automatic fall detection alerts',
            'Video call initiation',
            'Location sharing',
            'Multi-contact notification',
            'Silent alarm options',
        ],
    },
]

const integrations = [
    'Tobii Dynavox AAC devices',
    'PRC-Saltillo communication aids',
    'Grid 3 software',
    'Proloquo2Go',
    'Amazon Alexa',
    'Google Assistant',
    'Apple Siri',
    'Custom vocabulary databases',
]

export default function CommunicationAssistancePage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                            <FaComments className="w-5 h-5 text-purple-400 mr-2" />
                            <span className="text-purple-400 text-sm font-semibold">Communication Assistance</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Communication Assistance
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Empowering your voice through advanced speech technology, voice control, and emergency communication
                            systems designed for individuals with communication challenges.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Communication Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive communication support tailored to your needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 mb-6">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.capabilities.map((cap, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {cap}
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
                            Device Integrations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Seamless compatibility with leading AAC and voice assistant platforms
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {integrations.map((integration, index) => (
                            <div key={index} className="card-enterprise p-4 text-center">
                                <p className="text-sm font-semibold text-gray-900">{integration}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-purple-600 to-pink-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Find Your Voice with Assistive Communication
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Discover how our communication assistance technology can enhance your ability to connect and express yourself
                    </p>
                    <Link
                        href="/contact?type=robotics-communication"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
