import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, CloudIcon } from '@heroicons/react/24/solid'
import { FaServer, FaNetworkWired, FaDollarSign, FaChartLine } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'Cloud Bursting - AI Infrastructure',
    description:
        'Hybrid AI architecture with on-premise GPU cluster and cloud bursting for cost optimization. Automatic workload distribution across on-prem and cloud resources.',
    keywords: [
        'cloud bursting',
        'hybrid cloud',
        'cost optimization',
        'workload distribution',
        'on-premise',
        'cloud GPU',
    ],
})

const costComparison = [
    {
        scenario: 'On-Premise Only',
        upfront: '$500K',
        monthly: '$50K',
        utilization: '40-60%',
        pros: ['Full control', 'Data sovereignty', 'Predictable costs'],
        cons: ['High upfront cost', 'Underutilization', 'Limited scalability'],
    },
    {
        scenario: 'Cloud Only',
        upfront: '$0',
        monthly: '$150K',
        utilization: '100%',
        pros: ['No upfront cost', 'Unlimited scale', 'Pay-as-you-go'],
        cons: ['High ongoing costs', 'Data transfer fees', 'Less control'],
    },
    {
        scenario: 'Hybrid (Recommended)',
        upfront: '$200K',
        monthly: '$70K',
        utilization: '85-95%',
        pros: ['Optimized costs', 'Flexible scaling', 'Best of both worlds'],
        cons: ['Complexity', 'Integration needed'],
        recommended: true,
    },
]

const burstingTriggers = [
    {
        trigger: 'Queue Depth',
        description: 'Burst when job queue exceeds threshold',
        example: '> 50 jobs waiting',
    },
    {
        trigger: 'Resource Utilization',
        description: 'Burst when on-prem GPUs are fully utilized',
        example: '> 90% GPU utilization for 15 minutes',
    },
    {
        trigger: 'Time-based',
        description: 'Scheduled bursting for predictable workloads',
        example: 'Weekday 9 AM - 5 PM',
    },
    {
        trigger: 'Cost-based',
        description: 'Burst based on cloud spot pricing',
        example: 'When spot price < $1.50/hour',
    },
]

const cloudProviders = [
    {
        provider: 'Google Cloud (GCP)',
        gpus: 'A100, V100, T4',
        regions: 'us-central1, europe-west4, asia-southeast1',
        features: ['Preemptible VMs', 'Committed use discounts', 'TPU support'],
    },
    {
        provider: 'Microsoft Azure',
        gpus: 'A100, V100, T4',
        regions: 'East US, West Europe, Southeast Asia',
        features: ['Spot instances', 'Reserved instances', 'Azure ML integration'],
    },
    {
        provider: 'Amazon AWS',
        gpus: 'A100, V100, T4',
        regions: 'us-east-1, eu-west-1, ap-southeast-1',
        features: ['Spot instances', 'Savings plans', 'SageMaker integration'],
    },
]

const implementationSteps = [
    {
        phase: 'Assessment',
        duration: '1-2 weeks',
        activities: ['Workload analysis', 'Cost modeling', 'Architecture design'],
    },
    {
        phase: 'Setup',
        duration: '2-4 weeks',
        activities: ['On-prem cluster setup', 'Cloud account configuration', 'Network connectivity'],
    },
    {
        phase: 'Integration',
        duration: '2-3 weeks',
        activities: ['Scheduler integration', 'Data synchronization', 'Testing & validation'],
    },
    {
        phase: 'Optimization',
        duration: 'Ongoing',
        activities: ['Cost monitoring', 'Performance tuning', 'Policy refinement'],
    },
]

const pricingExample = {
    onPrem: {
        config: '8x A100 GPUs',
        upfront: '$200,000',
        monthly: '$20,000',
        utilization: '60%',
    },
    cloud: {
        usage: '40% burst to cloud',
        monthly: '$50,000',
        savings: '30% vs cloud-only',
    },
    total: {
        monthly: '$70,000',
        vsOnPrem: '40% better utilization',
        vsCloud: '53% cost savings',
    },
}

export default function CloudBurstingPage() {
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
                            <FaNetworkWired className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Cloud Bursting</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Hybrid Cloud Bursting
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Optimize costs with hybrid architecture: on-premise GPU cluster for baseline workloads,
                            automatic bursting to cloud for peak demands. Best of both worlds.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=cloud-bursting" className="btn-primary">
                                Request Cost Analysis
                            </Link>
                            <Link href="#comparison" className="btn-secondary">
                                View Cost Comparison
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Comparison */}
            <section id="comparison" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cost Comparison
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Compare deployment models and find the optimal balance
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {costComparison.map((scenario, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${scenario.recommended ? 'ring-2 ring-primary-500 shadow-2xl' : ''}`}
                            >
                                {scenario.recommended && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
                                            Recommended
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{scenario.scenario}</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Upfront:</span>
                                        <span className="text-sm font-bold text-gray-900">{scenario.upfront}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Monthly:</span>
                                        <span className="text-sm font-bold text-primary-600">{scenario.monthly}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Utilization:</span>
                                        <span className="text-sm font-bold text-gray-900">{scenario.utilization}</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-green-600 mb-2">Pros:</h4>
                                    <ul className="space-y-1">
                                        {scenario.pros.map((pro, idx) => (
                                            <li key={idx} className="text-xs text-gray-600">• {pro}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-orange-600 mb-2">Cons:</h4>
                                    <ul className="space-y-1">
                                        {scenario.cons.map((con, idx) => (
                                            <li key={idx} className="text-xs text-gray-600">• {con}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bursting Triggers */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Bursting Triggers & Policies
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Intelligent workload distribution based on configurable policies
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {burstingTriggers.map((trigger, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{trigger.trigger}</h3>
                                <p className="text-sm text-gray-600 mb-4">{trigger.description}</p>
                                <div className="p-3 bg-gray-50 rounded">
                                    <span className="text-xs text-gray-500 font-semibold">Example:</span>
                                    <p className="text-sm text-gray-700 mt-1">{trigger.example}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cloud Providers */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Supported Cloud Providers
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Burst to major cloud providers with GPU availability
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {cloudProviders.map((provider, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{provider.provider}</h3>
                                <div className="space-y-3 mb-6">
                                    <div>
                                        <span className="text-xs text-gray-500 font-semibold">Available GPUs:</span>
                                        <p className="text-sm text-gray-700">{provider.gpus}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500 font-semibold">Regions:</span>
                                        <p className="text-sm text-gray-700">{provider.regions}</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                                    <ul className="space-y-1">
                                        {provider.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-xs text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-1 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Implementation Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Structured approach to hybrid cloud deployment
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {implementationSteps.map((step, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="text-center mb-4">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.phase}</h3>
                                    <p className="text-sm text-primary-600 font-semibold">{step.duration}</p>
                                </div>
                                <ul className="space-y-1">
                                    {step.activities.map((activity, idx) => (
                                        <li key={idx} className="text-xs text-gray-600">• {activity}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Example */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Pricing Example
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world cost breakdown for hybrid deployment
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="card-enterprise p-8">
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">On-Premise</h3>
                                    <div className="space-y-2">
                                        <div className="text-sm text-gray-600">{pricingExample.onPrem.config}</div>
                                        <div className="text-2xl font-bold text-gray-900">{pricingExample.onPrem.monthly}/mo</div>
                                        <div className="text-xs text-gray-500">Upfront: {pricingExample.onPrem.upfront}</div>
                                        <div className="text-xs text-gray-500">{pricingExample.onPrem.utilization} utilization</div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Cloud Burst</h3>
                                    <div className="space-y-2">
                                        <div className="text-sm text-gray-600">{pricingExample.cloud.usage}</div>
                                        <div className="text-2xl font-bold text-primary-600">+{pricingExample.cloud.monthly}/mo</div>
                                        <div className="text-xs text-green-600 font-semibold">{pricingExample.cloud.savings}</div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Total</h3>
                                    <div className="space-y-2">
                                        <div className="text-sm text-gray-600">Hybrid Model</div>
                                        <div className="text-3xl font-bold text-primary-600">{pricingExample.total.monthly}/mo</div>
                                        <div className="text-xs text-green-600 font-semibold">{pricingExample.total.vsOnPrem}</div>
                                        <div className="text-xs text-green-600 font-semibold">{pricingExample.total.vsCloud}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-gray-200 text-center">
                                <p className="text-sm text-gray-600">
                                    Actual costs vary based on workload patterns, cloud pricing, and configuration.
                                    <Link href="/contact?type=cloud-bursting" className="text-primary-600 hover:text-primary-700 ml-1">
                                        Get a custom cost analysis →
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Optimize Your AI Infrastructure Costs?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free cost analysis and hybrid architecture design
                    </p>
                    <Link href="/contact?type=cloud-bursting" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Cost Analysis
                    </Link>
                </div>
            </section>
        </>
    )
}
