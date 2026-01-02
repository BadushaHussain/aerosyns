import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaServer, FaNetworkWired, FaDatabase, FaClock, FaChartLine } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'HPC & Supercomputing - AI Infrastructure',
    description:
        'High-performance computing clusters for research and production workloads. Multi-node deployment, Infiniband networking, parallel filesystems, and job scheduling.',
    keywords: [
        'HPC',
        'supercomputing',
        'Infiniband',
        'parallel filesystem',
        'Slurm',
        'PBS',
        'scientific computing',
        'cluster computing',
    ],
})

const clusterArchitectures = [
    {
        name: 'Small Research Cluster',
        nodes: '8-16 compute nodes',
        cores: '512-1,024 cores',
        memory: '2-4 TB total',
        storage: '100TB shared',
        network: '100GbE',
        useCase: 'Small research groups, development',
    },
    {
        name: 'Medium Production Cluster',
        nodes: '32-64 compute nodes',
        cores: '2,048-4,096 cores',
        memory: '8-16 TB total',
        storage: '500TB parallel FS',
        network: 'Infiniband HDR',
        useCase: 'Production workloads, medium-scale simulations',
    },
    {
        name: 'Large Supercomputer',
        nodes: '128+ compute nodes',
        cores: '8,192+ cores',
        memory: '32+ TB total',
        storage: '2+ PB parallel FS',
        network: 'Infiniband NDR',
        useCase: 'Large-scale simulations, national labs',
    },
]

const networkFabrics = [
    {
        technology: 'Infiniband HDR',
        bandwidth: '200 Gb/s',
        latency: '< 0.6 μs',
        topology: 'Fat-tree',
        features: ['RDMA support', 'MPI optimized', 'GPUDirect', 'Adaptive routing'],
        bestFor: 'Tightly-coupled parallel applications',
    },
    {
        technology: 'Infiniband NDR',
        bandwidth: '400 Gb/s',
        latency: '< 0.5 μs',
        topology: 'Dragonfly',
        features: ['Next-gen RDMA', 'In-network computing', 'Congestion control', 'Quality of Service'],
        bestFor: 'Extreme-scale HPC, exascale computing',
    },
    {
        technology: 'RoCE v2',
        bandwidth: '100-400 Gb/s',
        latency: '< 2 μs',
        topology: 'Leaf-spine',
        features: ['RDMA over Ethernet', 'Cost-effective', 'Lossless Ethernet', 'Priority flow control'],
        bestFor: 'Cost-sensitive deployments, hybrid workloads',
    },
]

const storageSystems = [
    {
        name: 'Lustre Parallel Filesystem',
        performance: 'Up to 1 TB/s',
        capacity: 'Petabyte-scale',
        features: [
            'POSIX-compliant',
            'Parallel I/O',
            'High bandwidth',
            'Scalable metadata',
            'HSM integration',
        ],
        useCase: 'Large-scale scientific workloads',
    },
    {
        name: 'BeeGFS',
        performance: 'Up to 500 GB/s',
        capacity: 'Multi-petabyte',
        features: [
            'Easy deployment',
            'Flexible architecture',
            'RDMA support',
            'Buddy mirroring',
            'Client-side caching',
        ],
        useCase: 'AI/ML workloads, general HPC',
    },
    {
        name: 'GPFS (IBM Spectrum Scale)',
        performance: 'Up to 2 TB/s',
        capacity: 'Exabyte-scale',
        features: [
            'Enterprise features',
            'Active file management',
            'Snapshots',
            'Replication',
            'Encryption',
        ],
        useCase: 'Enterprise HPC, data analytics',
    },
]

const jobSchedulers = [
    {
        name: 'Slurm',
        description: 'Simple Linux Utility for Resource Management',
        features: [
            'Fair-share scheduling',
            'Gang scheduling',
            'Backfill scheduling',
            'Job arrays',
            'Resource limits',
            'Accounting',
        ],
        advantages: ['Open source', 'Widely adopted', 'Scalable', 'Active community'],
    },
    {
        name: 'PBS Professional',
        description: 'Portable Batch System',
        features: [
            'Advanced reservations',
            'Topology-aware scheduling',
            'Power management',
            'Cray support',
            'Cloud bursting',
            'Hooks & plugins',
        ],
        advantages: ['Enterprise support', 'Feature-rich', 'Proven at scale', 'Commercial backing'],
    },
]

const scientificApps = [
    {
        category: 'Molecular Dynamics',
        applications: ['GROMACS', 'LAMMPS', 'NAMD', 'Amber'],
        description: 'Protein folding, drug discovery, materials science',
    },
    {
        category: 'Climate & Weather',
        applications: ['WRF', 'CESM', 'MPAS', 'ICON'],
        description: 'Climate modeling, weather forecasting, atmospheric science',
    },
    {
        category: 'Computational Fluid Dynamics',
        applications: ['OpenFOAM', 'ANSYS Fluent', 'STAR-CCM+', 'SU2'],
        description: 'Aerodynamics, turbulence, heat transfer',
    },
    {
        category: 'Quantum Chemistry',
        applications: ['Gaussian', 'VASP', 'Quantum ESPRESSO', 'NWChem'],
        description: 'Electronic structure, DFT calculations, spectroscopy',
    },
]

const performanceMetrics = [
    {
        metric: 'LINPACK Performance',
        value: 'Up to 10 PFLOPS',
        description: 'Peak theoretical performance',
    },
    {
        metric: 'HPL Efficiency',
        value: '85-90%',
        description: 'Sustained performance vs peak',
    },
    {
        metric: 'MPI Latency',
        value: '< 1 μs',
        description: 'Inter-node communication',
    },
    {
        metric: 'Storage Bandwidth',
        value: 'Up to 1 TB/s',
        description: 'Parallel filesystem throughput',
    },
    {
        metric: 'Job Throughput',
        value: '10,000+ jobs/day',
        description: 'Scheduler capacity',
    },
    {
        metric: 'Uptime',
        value: '99.5%+',
        description: 'System availability',
    },
]

const pricingTiers = [
    {
        tier: 'Research',
        config: '16-node cluster',
        price: '$80,000/month',
        specs: [
            '16x dual-socket compute nodes',
            '1,024 CPU cores',
            '4TB total memory',
            '100GbE networking',
            '100TB Lustre storage',
            'Slurm scheduler',
        ],
        bestFor: 'University research groups, small labs',
    },
    {
        tier: 'Production',
        config: '64-node cluster',
        price: '$350,000/month',
        specs: [
            '64x dual-socket compute nodes',
            '4,096 CPU cores',
            '16TB total memory',
            'Infiniband HDR fabric',
            '500TB parallel filesystem',
            'PBS Professional',
            '24/7 support',
        ],
        popular: true,
        bestFor: 'Production HPC, engineering firms',
    },
    {
        tier: 'Supercomputer',
        config: '256+ node cluster',
        price: 'Custom pricing',
        specs: [
            '256+ compute nodes',
            '16,384+ CPU cores',
            '64TB+ total memory',
            'Infiniband NDR fabric',
            '2PB+ parallel filesystem',
            'Custom scheduler config',
            'White-glove support',
            'On-site engineers',
        ],
        bestFor: 'National labs, large enterprises',
    },
]

export default function HPCPage() {
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
                            <FaServer className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">HPC & Supercomputing</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            HPC & Supercomputing
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            High-performance computing clusters for research and production workloads. Multi-node deployment,
                            Infiniband networking, parallel filesystems, and advanced job scheduling.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=hpc-cluster" className="btn-primary">
                                Request Cluster Design
                            </Link>
                            <Link href="#architectures" className="btn-secondary">
                                View Architectures
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cluster Architectures */}
            <section id="architectures" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Cluster Architectures
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Scalable HPC clusters from small research to large supercomputers
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {clusterArchitectures.map((arch, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <FaServer className="w-10 h-10 text-primary-600" />
                                    <h3 className="text-xl font-bold text-gray-900">{arch.name}</h3>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Nodes:</span>
                                        <span className="text-sm font-semibold text-gray-900">{arch.nodes}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Cores:</span>
                                        <span className="text-sm font-semibold text-gray-900">{arch.cores}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Memory:</span>
                                        <span className="text-sm font-semibold text-gray-900">{arch.memory}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Storage:</span>
                                        <span className="text-sm font-semibold text-gray-900">{arch.storage}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Network:</span>
                                        <span className="text-sm font-semibold text-primary-600">{arch.network}</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-gray-700">{arch.useCase}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Network Fabrics */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Network Fabrics
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            High-bandwidth, low-latency interconnects for HPC workloads
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {networkFabrics.map((fabric, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <FaNetworkWired className="w-10 h-10 text-primary-600" />
                                    <h3 className="text-xl font-bold text-gray-900">{fabric.technology}</h3>
                                </div>
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Bandwidth:</span>
                                        <span className="text-sm font-bold text-primary-600">{fabric.bandwidth}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Latency:</span>
                                        <span className="text-sm font-bold text-primary-600">{fabric.latency}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Topology:</span>
                                        <span className="text-sm font-semibold text-gray-900">{fabric.topology}</span>
                                    </div>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {fabric.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-xs text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-gray-700">{fabric.bestFor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Storage Systems */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Parallel Storage Systems
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            High-performance parallel filesystems for HPC workloads
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {storageSystems.map((storage, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <FaDatabase className="w-10 h-10 text-primary-600" />
                                    <h3 className="text-xl font-bold text-gray-900">{storage.name}</h3>
                                </div>
                                <div className="mb-6">
                                    <div className="text-2xl font-bold text-primary-600 mb-1">{storage.performance}</div>
                                    <div className="text-sm text-gray-600">{storage.capacity}</div>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {storage.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p>
                                    <p className="text-sm text-gray-700">{storage.useCase}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Schedulers */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Job Scheduling
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Advanced workload management and resource allocation
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {jobSchedulers.map((scheduler, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaClock className="w-10 h-10 text-primary-600" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{scheduler.name}</h3>
                                        <p className="text-sm text-gray-600">{scheduler.description}</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Features:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {scheduler.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start text-xs text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-1 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Advantages:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {scheduler.advantages.map((adv, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                                                {adv}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scientific Applications */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Scientific Applications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Pre-configured and optimized for popular HPC applications
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {scientificApps.map((app, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{app.category}</h3>
                                <p className="text-sm text-gray-600 mb-4">{app.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {app.applications.map((application, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded">
                                            {application}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Performance Metrics
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world performance from production HPC systems
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {performanceMetrics.map((metric, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="text-4xl font-bold text-primary-600 mb-2">{metric.value}</div>
                                <div className="text-sm font-semibold text-gray-900 mb-2">{metric.metric}</div>
                                <div className="text-xs text-gray-600">{metric.description}</div>
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
                            Scalable HPC clusters for every budget
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
                        Ready to Deploy Your HPC Cluster?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free cluster design consultation and performance analysis
                    </p>
                    <Link href="/contact?type=hpc-cluster" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Cluster Design
                    </Link>
                </div>
            </section>
        </>
    )
}
