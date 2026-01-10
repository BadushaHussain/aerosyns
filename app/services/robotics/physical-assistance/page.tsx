import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { GiRobotGrab } from 'react-icons/gi'
import { FaRobot, FaHandsHelping, FaWheelchair } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Physical Assistance Robotics - HumaNova',
    description: 'Robotic arms, mobility support, and transfer assistance technology designed for individuals with physical challenges.',
    keywords: ['robotic assistance', 'mobility support', 'transfer assistance', 'exoskeleton', 'assistive robotics UAE'],
})

const capabilities = [
    {
        title: 'Robotic Arms & Manipulation',
        description: 'Precision robotic arms for object handling and daily tasks',
        features: [
            'Multi-degree-of-freedom manipulation',
            'Soft gripper technology for safe object handling',
            'Force feedback and tactile sensing',
            'Adaptive grip strength based on object type',
            'Voice and gesture control',
            'Reach extension for overhead and floor-level tasks',
        ],
        useCases: ['Meal preparation', 'Object retrieval', 'Personal care items', 'Opening containers', 'Writing and drawing'],
    },
    {
        title: 'Mobility Support Systems',
        description: 'Intelligent navigation and movement assistance',
        features: [
            'Powered wheelchair integration',
            'Walking assistance with balance support',
            'Obstacle detection and avoidance',
            'Indoor/outdoor navigation',
            'Stair and ramp assistance',
            'Adaptive speed control',
        ],
        useCases: ['Daily mobility', 'Shopping assistance', 'Outdoor activities', 'Social engagement', 'Exercise support'],
    },
    {
        title: 'Transfer Assistance',
        description: 'Safe and dignified transfer support',
        features: [
            'Bed-to-wheelchair transfers',
            'Sit-to-stand assistance',
            'Weight-bearing support',
            'Balance monitoring',
            'Fall prevention systems',
            'Caregiver collaboration mode',
        ],
        useCases: ['Morning routines', 'Bathroom transfers', 'Vehicle entry/exit', 'Therapy sessions', 'Daily positioning'],
    },
    {
        title: 'Exoskeleton Modules',
        description: 'Wearable robotic support for enhanced mobility',
        features: [
            'Lower limb support for walking',
            'Upper limb assistance for reaching',
            'Adjustable support levels',
            'Gait training and rehabilitation',
            'Fatigue reduction',
            'Customizable to body measurements',
        ],
        useCases: ['Rehabilitation therapy', 'Extended mobility', 'Strength augmentation', 'Endurance support', 'Independence training'],
    },
]

const technicalSpecs = [
    { spec: 'Payload Capacity', value: 'Up to 5kg per robotic arm' },
    { spec: 'Reach Range', value: '0.3m - 1.5m adjustable' },
    { spec: 'Precision', value: '±2mm positioning accuracy' },
    { spec: 'Safety Rating', value: 'ISO 13482 compliant' },
    { spec: 'Battery Life', value: '8-12 hours continuous use' },
    { spec: 'Control Methods', value: 'Voice, gesture, touch, app' },
]

export default function PhysicalAssistancePage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/robotics" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to HumaNova Robotics
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <GiRobotGrab className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 text-sm font-semibold">Physical Assistance</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Physical Assistance Robotics
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Advanced robotic systems designed to restore physical independence through intelligent manipulation,
                            mobility support, and transfer assistance—all personalized to your unique needs and abilities.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Comprehensive Physical Support
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Four integrated systems working together to enhance your physical capabilities
                        </p>
                    </div>
                    <div className="space-y-12">
                        {capabilities.map((cap, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-3xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                                <p className="text-lg text-gray-600 mb-6">{cap.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                                        <ul className="space-y-2">
                                            {cap.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-600">
                                                    <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Common Use Cases</h4>
                                        <ul className="space-y-2">
                                            {cap.useCases.map((useCase, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-600">
                                                    <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                                    {useCase}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Technical Specifications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade performance with safety-first design
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {technicalSpecs.map((spec, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="text-sm font-semibold text-primary-600 mb-1">{spec.spec}</div>
                                <div className="text-2xl font-bold text-gray-900">{spec.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Restore Your Physical Independence?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a consultation to discuss how our physical assistance robotics can be customized for your needs
                    </p>
                    <Link
                        href="/contact?type=robotics-physical-assistance"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
