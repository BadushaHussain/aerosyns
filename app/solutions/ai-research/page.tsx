import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { FaMicrochip, FaNetworkWired, FaServer, FaCode, FaCogs, FaShieldAlt, FaChartLine, FaDna, FaLayerGroup, FaCheckCircle } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'AI Research Infrastructure - High Performance Computing',
    description:
        'Advanced GPU clusters and HPC infrastructure for AI research. NVIDIA H100/A100, 400Gbps InfiniBand, MLOps, and scalable storage for LLM training and scientific computing.',
    keywords: ['AI infrastructure', 'HPC', 'GPU cluster', 'NVIDIA H100', 'LLM training', 'MLOps', 'Bioinformatics'],
})

const hardwareSpecs = [
    {
        category: 'Compute Power',
        icon: <FaMicrochip className="w-8 h-8 text-purple-400" />,
        items: [
            'NVIDIA H100 / A100 Tensor Core GPUs',
            'Multi-node distributed training support',
            'FP8 / FP16 / BF16 precision optimization',
            'High-density CPU compute nodes (AMD EPYC / Intel Xeon)',
        ],
    },
    {
        category: 'High-Speed Networking',
        icon: <FaNetworkWired className="w-8 h-8 text-blue-400" />,
        items: [
            '400Gbps NDR InfiniBand low-latency fabric',
            '200Gbps Ethernet for management & data',
            'RDMA / GPUDirect support',
            'Non-blocking spine-leaf topology',
        ],
    },
    {
        category: 'Storage Infrastructure',
        icon: <FaServer className="w-8 h-8 text-green-400" />,
        items: [
            'High-performance NVMe flash tiers for hot data',
            'Parallel File Systems (Lustre / GPFS / Weka)',
            'Scalable Object Storage (S3 compatible) for datasets',
            'Automated data lifecycle management',
        ],
    },
]

const softwareStack = [
    {
        name: 'AI Frameworks',
        description: 'PyTorch, TensorFlow, JAX, Hugging Face',
        icon: <FaCode className="w-5 h-5" />,
    },
    {
        name: 'MLOps Platform',
        description: 'Kubeflow, MLflow, Weights & Biases',
        icon: <FaCogs className="w-5 h-5" />,
    },
    {
        name: 'Orchestration',
        description: 'Slurm Workload Manager, Kubernetes (EKS/AKS)',
        icon: <FaLayerGroup className="w-5 h-5" />,
    },
    {
        name: 'Interactive Computing',
        description: 'JupyterHub, RStudio Server',
        icon: <FaChartLine className="w-5 h-5" />,
    },
]

const useCases = [
    {
        title: 'Large Language Models (LLM)',
        description: 'Train and fine-tune massive parameter models with distributed computing strategies.',
        icon: <FaLayerGroup className="w-10 h-10 text-pink-500" />,
    },
    {
        title: 'Generative AI & Vision',
        description: 'Accelerate image generation, 3D rendering, and video synthesis workflows.',
        icon: <FaMicrochip className="w-10 h-10 text-indigo-500" />,
    },
    {
        title: 'Bioinformatics & Simulation',
        description: 'Protein folding (AlphaFold), genomics, and molecular dynamics simulations.',
        icon: <FaDna className="w-10 h-10 text-teal-500" />,
    },
]

export default function AIResearchPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-black section-padding overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900 to-black z-0"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                            <FaMicrochip className="w-5 h-5 text-purple-400 mr-2" />
                            <span className="text-purple-400 text-sm font-semibold">High Performance Computing (HPC)</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Accelerating Discovery with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Infrastructure</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                            Purpose-built GPU clusters and storage systems designed to power the next generation of AI research.
                            From LLM training to scientific simulation, we provide the compute you need.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=ai-research" className="btn-primary transform hover:scale-105 transition-transform duration-200">
                                Discuss Infrastructure
                            </Link>
                            <Link href="#specs" className="px-8 py-3 rounded-lg border border-gray-700 text-white font-semibold hover:bg-gray-800 transition-colors text-center">
                                View Specifications
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hardware Specs */}
            <section id="specs" className="section-padding bg-gray-900">
                <div className="container-custom">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Enterprise-Grade Hardware
                        </h2>
                        <p className="text-xl text-gray-400">
                            Forged for performance, built for scale.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {hardwareSpecs.map((spec, index) => (
                            <div key={index} className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl hover:border-purple-500/50 transition-colors">
                                <div className="mb-6">{spec.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-6">{spec.category}</h3>
                                <ul className="space-y-3">
                                    {spec.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-gray-300">
                                            <FaCheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Software Stack */}
            <section className="section-padding bg-black">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                Fully Integrated Software Stack
                            </h2>
                            <p className="text-xl text-gray-400 mb-8">
                                Don't waste time on configuration. Our environment comes pre-loaded with optimized frameworks, MLOps tools, and orchestration engines, ready for your code.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {softwareStack.map((sw, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="p-2 rounded-lg bg-gray-800 text-purple-400">
                                            {sw.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{sw.name}</h4>
                                            <p className="text-sm text-gray-400">{sw.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
                            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                    <FaShieldAlt className="mr-2 text-green-400" /> Security & Compliance
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        'ISO 27001 Certified Environment',
                                        'Air-gapped deployment options',
                                        'Role-Based Access Control (RBAC)',
                                        'Encrypted operational storage'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center text-gray-300 border-b border-gray-800 pb-3 last:border-0 last:pb-0">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-gray-900">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Powering Breakthroughs
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Scalable infrastructure for diverse research domains
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="text-center p-8 rounded-2xl bg-gray-800 hover:bg-gray-750 transition-colors">
                                <div className="inline-block p-4 rounded-full bg-gray-700 mb-6">
                                    {useCase.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {useCase.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-purple-900 to-indigo-900">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-8">
                        Ready to Scale Your Research?
                    </h2>
                    <Link href="/contact?type=ai-research" className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors">
                        Get a Custom Quote
                    </Link>
                </div>
            </section>
        </>
    )
}
