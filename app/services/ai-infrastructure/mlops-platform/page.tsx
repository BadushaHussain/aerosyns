import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaRobot, FaDocker, FaChartLine, FaCog } from 'react-icons/fa'
import { SiKubernetes, SiPytorch, SiTensorflow } from 'react-icons/si'

export const metadata = genMeta({
    title: 'MLOps Platform Engineering - AI Infrastructure',
    description:
        'End-to-end MLOps platform with Kubernetes-based infrastructure, training pipelines, model serving, and experiment tracking for production ML workflows.',
    keywords: [
        'MLOps',
        'Kubernetes',
        'ML platform',
        'model serving',
        'ML training',
        'experiment tracking',
        'MLflow',
    ],
})

const platformComponents = [
    {
        name: 'Training Infrastructure',
        icon: SiPytorch,
        features: [
            'Distributed training (PyTorch DDP, Horovod)',
            'Multi-GPU orchestration',
            'Hyperparameter tuning (Optuna, Ray Tune)',
            'Automatic checkpointing & recovery',
            'Mixed precision training',
        ],
    },
    {
        name: 'Model Management',
        icon: FaChartLine,
        features: [
            'Model versioning (MLflow, DVC)',
            'Experiment tracking & comparison',
            'Model registry & lineage',
            'A/B testing framework',
            'Model governance',
        ],
    },
    {
        name: 'Deployment & Serving',
        icon: FaDocker,
        features: [
            'Model serving (TorchServe, TF Serving)',
            'Auto-scaling inference endpoints',
            'Batch inference pipelines',
            'Real-time prediction APIs',
            'Canary deployments',
        ],
    },
    {
        name: 'Monitoring & Observability',
        icon: FaCog,
        features: [
            'Model performance monitoring',
            'Data drift detection',
            'GPU utilization tracking',
            'Cost attribution',
            'Alert management',
        ],
    },
]

const supportedFrameworks = [
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'Kubernetes', icon: SiKubernetes },
    { name: 'Docker', icon: FaDocker },
]

const pricingTiers = [
    {
        tier: 'Starter',
        price: '$5,000/month',
        specs: [
            'Kubernetes cluster (3 nodes)',
            'Basic MLOps platform',
            'MLflow tracking',
            'Model registry',
            'Email support',
        ],
        bestFor: 'Small ML teams, experimentation',
    },
    {
        tier: 'Professional',
        price: '$20,000/month',
        specs: [
            'Kubernetes cluster (10+ nodes)',
            'Full MLOps platform',
            'Distributed training',
            'Auto-scaling serving',
            'Monitoring & alerting',
            '24/7 support',
        ],
        popular: true,
        bestFor: 'Production ML workloads',
    },
    {
        tier: 'Enterprise',
        price: 'Custom pricing',
        specs: [
            'Multi-cluster setup',
            'Custom platform features',
            'Dedicated infrastructure',
            'White-glove support',
            'On-site training',
            'SLA guarantees',
        ],
        bestFor: 'Large enterprises',
    },
]

export default function MLOpsPlatformPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/ai-infrastructure" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-4 text-sm">
                            ← Back to AI Infrastructure
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <FaRobot className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">MLOps Platform</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            ML Platform Engineering
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            End-to-end MLOps platform with Kubernetes-based infrastructure, training pipelines, model serving,
                            and experiment tracking for production ML workflows.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=mlops-platform" className="btn-primary">
                                Request Platform Demo
                            </Link>
                            <Link href="#components" className="btn-secondary">
                                View Components
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Components */}
            <section id="components" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Platform Components
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Complete MLOps infrastructure for the entire ML lifecycle
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {platformComponents.map((component, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-primary-600">
                                        <component.icon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{component.name}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {component.features.map((feature, idx) => (
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

            {/* Supported Frameworks */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Supported Frameworks
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Pre-configured with popular ML frameworks and tools
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {supportedFrameworks.map((framework, index) => (
                            <div key={index} className="card-enterprise p-8 text-center">
                                <div className="text-primary-600 flex justify-center mb-4">
                                    <framework.icon className="w-16 h-16" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{framework.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Pricing & Configurations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible MLOps platform for teams of all sizes
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${tier.popular ? 'ring-2 ring-primary-500 shadow-2xl' : ''}`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{tier.tier}</h3>
                                <div className="text-3xl font-bold text-primary-600 mb-6">{tier.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {tier.specs.map((spec, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-gray-700">{tier.bestFor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Deploy Your MLOps Platform?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free platform demo and architecture consultation
                    </p>
                    <Link href="/contact?type=mlops-platform" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Platform Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
