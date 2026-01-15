import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircleIcon, CpuChipIcon } from '@heroicons/react/24/solid'
import { FaServer, FaNetworkWired, FaSnowflake, FaRocket } from 'react-icons/fa'

// Custom NVIDIA Logo Component
const NvidiaLogo = ({ className }: { className?: string }) => {
    // Extract width and height from Tailwind classes (w-8 = 32px, w-12 = 48px, etc.)
    const sizeMap: Record<string, number> = { 'w-8': 32, 'h-8': 32, 'w-12': 48, 'h-12': 48 }
    const classes = className?.split(' ') || []
    const width = classes.find(c => c.startsWith('w-'))
    const height = classes.find(c => c.startsWith('h-'))
    const w = width ? sizeMap[width] || 32 : 32
    const h = height ? sizeMap[height] || 32 : 32

    return (
        <Image
            src="/nvidia-logo.png"
            alt="NVIDIA"
            width={w}
            height={h}
            className={className}
            style={{ objectFit: 'contain' }}
        />
    )
}

export const metadata = genMeta({
    title: 'GPU Appliances & Clusters - AI Infrastructure',
    description:
        'High-density GPU servers with NVIDIA H100, A100, and L40S GPUs. NVLink/NVSwitch fabrics, liquid cooling, and density-optimized rack designs for maximum AI performance.',
    keywords: [
        'GPU clusters',
        'NVIDIA H100',
        'NVIDIA A100',
        'AI infrastructure',
        'GPU servers',
        'NVLink',
        'NVSwitch',
        'liquid cooling',
    ],
})

const gpuModels = [
    {
        model: 'NVIDIA H100',
        memory: '80GB HBM3',
        bandwidth: '3.35 TB/s',
        performance: '4 PFLOPS (FP8)',
        interconnect: 'NVLink 4.0 (900 GB/s)',
        tdp: '700W',
        useCase: 'Large language models, GPT training, transformer models',
        price: 'From $25,000/GPU',
    },
    {
        model: 'NVIDIA A100',
        memory: '40GB/80GB HBM2e',
        bandwidth: '1.6/2.0 TB/s',
        performance: '312 TFLOPS (FP16)',
        interconnect: 'NVLink 3.0 (600 GB/s)',
        tdp: '400W',
        useCase: 'General AI training & inference, computer vision',
        price: 'From $12,000/GPU',
    },
    {
        model: 'NVIDIA L40S',
        memory: '48GB GDDR6',
        bandwidth: '864 GB/s',
        performance: '362 TFLOPS (FP8)',
        interconnect: 'PCIe Gen4',
        tdp: '350W',
        useCase: 'AI inference, graphics rendering, mixed workloads',
        price: 'From $8,000/GPU',
    },
]

const interconnectTech = [
    {
        name: 'NVLink 4.0',
        bandwidth: '900 GB/s per GPU',
        topology: 'All-to-all connectivity',
        features: ['Direct GPU-to-GPU', 'Low latency', 'High bandwidth', 'Scalable to 256 GPUs'],
    },
    {
        name: 'NVSwitch',
        bandwidth: '7.2 TB/s aggregate',
        topology: 'Non-blocking switch fabric',
        features: ['Full bisection bandwidth', 'Up to 256 GPUs', 'Zero contention', 'Hardware acceleration'],
    },
    {
        name: 'Infiniband HDR',
        bandwidth: '200 Gb/s per port',
        topology: 'Fat-tree or dragonfly',
        features: ['RDMA support', 'Low latency (<1μs)', 'Scalable to thousands', 'MPI optimized'],
    },
]

const rackConfigurations = [
    {
        name: 'High-Density 8-GPU',
        gpus: '8x H100/A100',
        formFactor: '4U rackmount',
        power: '6-8 kW',
        cooling: 'Air or liquid',
        features: ['NVLink connected', 'Dual redundant PSU', 'Hot-swappable', 'Remote management'],
    },
    {
        name: 'Ultra-Dense 16-GPU',
        gpus: '16x A100',
        formFactor: '8U rackmount',
        power: '12-15 kW',
        cooling: 'Liquid cooling required',
        features: ['NVSwitch fabric', 'Redundant cooling', 'Modular design', 'Tool-less service'],
    },
    {
        name: 'Inference Optimized',
        gpus: '10x L40S',
        formFactor: '4U rackmount',
        power: '4-5 kW',
        cooling: 'Air cooling',
        features: ['PCIe Gen4', 'High density', 'Low power', 'Cost optimized'],
    },
]

const coolingOptions = [
    {
        type: 'Air Cooling',
        capacity: 'Up to 8 kW/rack',
        efficiency: 'PUE 1.4-1.6',
        pros: ['Lower upfront cost', 'Simpler maintenance', 'Proven technology'],
        cons: ['Higher PUE', 'Noise', 'Space requirements'],
        bestFor: 'Up to 8 GPUs per server',
    },
    {
        type: 'Direct Liquid Cooling',
        capacity: 'Up to 40 kW/rack',
        efficiency: 'PUE 1.1-1.2',
        pros: ['High efficiency', 'Quiet operation', 'Compact design', 'Better performance'],
        cons: ['Higher upfront cost', 'Specialized maintenance'],
        bestFor: '8+ GPUs per server, high-density deployments',
    },
]

const benchmarks = [
    {
        workload: 'GPT-3 Training (175B)',
        h100: '~500 tokens/sec',
        a100: '~200 tokens/sec',
        speedup: '2.5x',
    },
    {
        workload: 'BERT Training (Base)',
        h100: '~8,000 samples/sec',
        a100: '~3,200 samples/sec',
        speedup: '2.5x',
    },
    {
        workload: 'ResNet-50 Training',
        h100: '~5,000 images/sec',
        a100: '~2,000 images/sec',
        speedup: '2.5x',
    },
    {
        workload: 'Stable Diffusion Inference',
        h100: '~100 images/sec',
        a100: '~40 images/sec',
        speedup: '2.5x',
    },
]

const pricingTiers = [
    {
        tier: 'Entry',
        config: '4x A100 (40GB)',
        price: '$60,000/month',
        specs: ['4x NVIDIA A100 40GB', 'NVLink connected', '100GbE networking', 'Air cooling', '10TB NVMe storage'],
        bestFor: 'Small teams, R&D, proof of concepts',
    },
    {
        tier: 'Professional',
        config: '8x H100 (80GB)',
        price: '$250,000/month',
        specs: ['8x NVIDIA H100 80GB', 'NVLink 4.0 fabric', '200GbE networking', 'Liquid cooling', '50TB NVMe storage', 'Dedicated support'],
        popular: true,
        bestFor: 'Production LLM training, large-scale AI',
    },
    {
        tier: 'Enterprise',
        config: '32x H100 (80GB)',
        price: 'Custom pricing',
        specs: ['32x NVIDIA H100 80GB', 'NVSwitch fabric', 'Infiniband HDR', 'Liquid cooling', '200TB parallel storage', 'White-glove support', 'On-site engineers'],
        bestFor: 'Large enterprises, research institutions',
    },
]

export default function GPUClustersPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/ai-infrastructure" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-4 text-sm">
                            ← Back to AI Infrastructure
                        </Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <NvidiaLogo className="w-5 h-5 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">GPU Clusters</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            GPU Appliances & Clusters
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            High-density GPU servers with NVIDIA H100, A100, and L40S GPUs. NVLink/NVSwitch fabrics,
                            liquid cooling, and density-optimized rack designs for maximum AI performance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=gpu-cluster" className="btn-primary">
                                Request Configuration
                            </Link>
                            <Link href="#specifications" className="btn-secondary">
                                View Specifications
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* GPU Models */}
            <section id="specifications" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            GPU Hardware Options
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Latest NVIDIA GPUs optimized for AI training and inference
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {gpuModels.map((gpu, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-primary-600">
                                        <NvidiaLogo className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{gpu.model}</h3>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Memory:</span>
                                        <span className="text-sm font-semibold text-gray-900">{gpu.memory}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Bandwidth:</span>
                                        <span className="text-sm font-semibold text-gray-900">{gpu.bandwidth}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Performance:</span>
                                        <span className="text-sm font-semibold text-gray-900">{gpu.performance}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Interconnect:</span>
                                        <span className="text-sm font-semibold text-gray-900">{gpu.interconnect}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">TDP:</span>
                                        <span className="text-sm font-semibold text-gray-900">{gpu.tdp}</span>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-xs text-gray-500 font-semibold mb-2">Best For:</p>
                                    <p className="text-sm text-gray-700">{gpu.useCase}</p>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <div className="text-2xl font-bold text-primary-600">{gpu.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interconnect Technologies */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Interconnect Technologies
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            High-bandwidth, low-latency GPU interconnects for distributed training
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {interconnectTech.map((tech, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <FaNetworkWired className="w-10 h-10 text-primary-600" />
                                    <h3 className="text-2xl font-bold text-gray-900">{tech.name}</h3>
                                </div>
                                <div className="mb-6">
                                    <div className="text-3xl font-bold text-primary-600 mb-2">{tech.bandwidth}</div>
                                    <div className="text-sm text-gray-600">{tech.topology}</div>
                                </div>
                                <ul className="space-y-2">
                                    {tech.features.map((feature, idx) => (
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

            {/* Rack Configurations */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Rack Configurations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Density-optimized designs for maximum performance per rack
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {rackConfigurations.map((config, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <FaServer className="w-10 h-10 text-primary-600" />
                                    <h3 className="text-xl font-bold text-gray-900">{config.name}</h3>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">GPUs:</span>
                                        <span className="text-sm font-semibold text-primary-600">{config.gpus}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Form Factor:</span>
                                        <span className="text-sm font-semibold text-gray-900">{config.formFactor}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Power:</span>
                                        <span className="text-sm font-semibold text-gray-900">{config.power}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Cooling:</span>
                                        <span className="text-sm font-semibold text-gray-900">{config.cooling}</span>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {config.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-xs text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cooling Solutions */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cooling Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the right cooling solution for your deployment
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {coolingOptions.map((cooling, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <FaSnowflake className="w-12 h-12 text-primary-600" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{cooling.type}</h3>
                                        <p className="text-sm text-gray-600">PUE: {cooling.efficiency}</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="text-lg font-semibold text-gray-900 mb-2">Capacity: {cooling.capacity}</div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-green-600 mb-2">Pros:</h4>
                                        <ul className="space-y-1">
                                            {cooling.pros.map((pro, idx) => (
                                                <li key={idx} className="text-xs text-gray-600">• {pro}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-orange-600 mb-2">Cons:</h4>
                                        <ul className="space-y-1">
                                            {cooling.cons.map((con, idx) => (
                                                <li key={idx} className="text-xs text-gray-600">• {con}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-gray-700">{cooling.bestFor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Benchmarks */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Performance Benchmarks
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world performance comparison across GPU models
                        </p>
                    </div>
                    <div className="card-enterprise p-8">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-gray-200">
                                        <th className="text-left py-4 px-4 font-semibold text-gray-900">Workload</th>
                                        <th className="text-right py-4 px-4 font-semibold text-gray-900">H100</th>
                                        <th className="text-right py-4 px-4 font-semibold text-gray-900">A100</th>
                                        <th className="text-right py-4 px-4 font-semibold text-primary-600">Speedup</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {benchmarks.map((benchmark, index) => (
                                        <tr key={index} className="border-b border-gray-100">
                                            <td className="py-4 px-4 text-sm text-gray-900">{benchmark.workload}</td>
                                            <td className="py-4 px-4 text-sm text-right text-gray-900">{benchmark.h100}</td>
                                            <td className="py-4 px-4 text-sm text-right text-gray-900">{benchmark.a100}</td>
                                            <td className="py-4 px-4 text-sm text-right font-bold text-primary-600">{benchmark.speedup}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Pricing & Configurations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible configurations to match your requirements
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                                <div className="text-sm text-gray-600 mb-4">{tier.config}</div>
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
                        Ready to Deploy Your GPU Cluster?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free cluster sizing consultation and custom configuration
                    </p>
                    <Link href="/contact?type=gpu-cluster" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Configuration
                    </Link>
                </div>
            </section>
        </>
    )
}
