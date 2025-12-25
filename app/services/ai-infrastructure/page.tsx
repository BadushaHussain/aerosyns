import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CpuChipIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'AI Infrastructure & GPU Clusters',
    description:
        'Enterprise AI infrastructure with GPU clusters, HPC systems, and ML platform engineering. On-premise deployment with cloud bursting for cost-optimized AI workloads.',
    keywords: [
        'GPU clusters UAE',
        'AI infrastructure',
        'HPC systems',
        'machine learning infrastructure',
        'AI supercomputing',
        'MLOps platform',
    ],
})

const offerings = [
    {
        title: 'GPU Appliances & Clusters',
        description: 'High-density GPU servers with NVLink/NVSwitch fabrics for maximum performance',
        specs: [
            'NVIDIA A100, H100, L40S GPUs',
            'NVLink & NVSwitch interconnect',
            'Density-optimized rack design',
            'Liquid cooling options',
        ],
    },
    {
        title: 'HPC & Supercomputing',
        description: 'High-performance computing clusters for research and production workloads',
        specs: [
            'Multi-node cluster deployment',
            'Infiniband/RoCE networking',
            'Parallel filesystems (Lustre, BeeGFS)',
            'Job scheduling (Slurm, PBS)',
        ],
    },
    {
        title: 'ML Platform Engineering',
        description: 'End-to-end MLOps platform with training pipelines and model serving',
        specs: [
            'Kubernetes-based ML platform',
            'Model training & fine-tuning',
            'Model serving & inference',
            'Experiment tracking & versioning',
        ],
    },
    {
        title: 'Cloud Bursting',
        description: 'Hybrid architecture with on-prem cluster and cloud bursting for cost optimization',
        specs: [
            'On-prem + GCP/Azure/AWS',
            'Automatic workload distribution',
            'Cost-optimized scheduling',
            'Data synchronization',
        ],
    },
]

const clusterSpecs = [
    { label: 'GPU Models', value: 'A100, H100, L40S' },
    { label: 'Interconnect', value: 'NVLink, NVSwitch, Infiniband' },
    { label: 'Storage', value: 'NVMe, Lustre, BeeGFS' },
    { label: 'Network', value: '100GbE, 200GbE, Infiniband' },
    { label: 'Cooling', value: 'Air / Liquid cooling' },
    { label: 'Performance', value: 'Up to 2 PFLOPS' },
]

const useCases = [
    {
        title: 'Large Language Models',
        description: 'Train and fine-tune LLMs with distributed training across multiple GPUs',
    },
    {
        title: 'Computer Vision',
        description: 'Image recognition, object detection, and video analytics at scale',
    },
    {
        title: 'Scientific Computing',
        description: 'Molecular dynamics, climate modeling, and research simulations',
    },
    {
        title: 'Financial Modeling',
        description: 'Risk analysis, algorithmic trading, and portfolio optimization',
    },
]

export default function AIInfrastructurePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <CpuChipIcon className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">AI Infrastructure</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            GPU Clusters & AI Infrastructure
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Deploy enterprise-grade AI infrastructure with GPU clusters, HPC systems, and ML platforms.
                            On-premise deployment with cloud bursting for cost-optimized AI workloads.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=ai-cluster" className="btn-primary">
                                Request Cluster Sizing
                            </Link>
                            <Link href="#offerings" className="btn-secondary">
                                View Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offerings Section */}
            <section id="offerings" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            AI Infrastructure Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From GPU appliances to complete HPC clusters with ML platform engineering
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {offerings.map((offering, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {offering.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{offering.description}</p>
                                <ul className="space-y-3">
                                    {offering.specs.map((spec, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <svg
                                                className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cluster Specifications */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                Enterprise GPU Cluster Specifications
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                High-performance GPU clusters designed for AI training, inference, and HPC workloads
                                with industry-leading performance and reliability.
                            </p>
                            <div className="space-y-4">
                                {clusterSpecs.map((spec, index) => (
                                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-900">{spec.label}</span>
                                        <span className="text-primary-600 font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card-enterprise p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cluster Services</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold text-gray-900">Cluster Design & Sizing</div>
                                        <div className="text-sm text-gray-600">Workload analysis and optimal configuration</div>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold text-gray-900">Rack & Stack</div>
                                        <div className="text-sm text-gray-600">Physical deployment and cabling</div>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold text-gray-900">Performance Tuning</div>
                                        <div className="text-sm text-gray-600">Benchmarking and optimization</div>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold text-gray-900">MLOps Platform</div>
                                        <div className="text-sm text-gray-600">Training pipelines and model serving</div>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-8 p-4 bg-white rounded-lg">
                                <div className="text-sm text-gray-600 mb-2">Starting from</div>
                                <div className="text-3xl font-bold text-gray-900">Custom Quote</div>
                                <div className="text-sm text-gray-600 mt-1">Based on workload requirements</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            AI Infrastructure Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Powering diverse AI and HPC workloads across industries
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                                    <CpuChipIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                                <p className="text-sm text-gray-600">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Diagram Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Hybrid AI Architecture
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            On-premise GPU cluster with cloud bursting for cost-optimized AI workloads
                        </p>
                    </div>
                    <div className="card-enterprise p-8 bg-gray-50">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                                    <ServerIcon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">On-Premise Cluster</h3>
                                <p className="text-sm text-gray-600">
                                    Dedicated GPU nodes for consistent workloads with low latency and data sovereignty
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center">
                                    <CloudIcon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Bursting</h3>
                                <p className="text-sm text-gray-600">
                                    Scale to cloud (GCP, Azure, AWS) for peak workloads and cost optimization
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Deploy Your AI Infrastructure?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free cluster sizing consultation and architecture design
                    </p>
                    <Link href="/contact?type=ai-cluster" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Cluster Sizing
                    </Link>
                </div>
            </section>
        </>
    )
}

function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
    )
}

function CloudIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
    )
}
