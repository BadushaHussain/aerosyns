import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { ServerIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Enterprise Servers - Dell, HP, Lenovo Servers',
    description:
        'Rack, tower, and blade servers for datacenters and enterprise IT. Dell PowerEdge, HP ProLiant, Lenovo ThinkSystem. Competitive pricing and professional installation.',
    keywords: ['enterprise servers', 'Dell servers UAE', 'HP servers', 'rack servers', 'blade servers'],
})

const serverTypes = [
    {
        type: 'Rack Servers',
        description: 'Space-efficient 1U, 2U, 4U rack-mount servers',
        useCases: ['Datacenters', 'Virtualization', 'High-density deployments'],
        models: ['Dell PowerEdge R650', 'HP ProLiant DL380', 'Lenovo ThinkSystem SR650'],
    },
    {
        type: 'Tower Servers',
        description: 'Standalone servers for offices and small datacenters',
        useCases: ['Small businesses', 'Branch offices', 'Entry-level deployments'],
        models: ['Dell PowerEdge T550', 'HP ProLiant ML350', 'Lenovo ThinkSystem ST650'],
    },
    {
        type: 'Blade Servers',
        description: 'Ultra-dense blade chassis for maximum efficiency',
        useCases: ['Large datacenters', 'Cloud providers', 'HPC clusters'],
        models: ['Dell PowerEdge MX', 'HP Synergy', 'Lenovo ThinkSystem SD650'],
    },
]

const configurations = [
    { name: 'Entry-Level', cpu: 'Intel Xeon Bronze/Silver', ram: '16-64GB', storage: '2-4 drives', price: 'From $2,000' },
    { name: 'Mid-Range', cpu: 'Intel Xeon Gold', ram: '128-256GB', storage: '4-8 drives', price: 'From $5,000' },
    { name: 'High-End', cpu: 'Intel Xeon Platinum/AMD EPYC', ram: '512GB-2TB', storage: '8-24 drives', price: 'From $15,000' },
]

export default function ServersPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <ServerIcon className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 text-sm font-semibold">Enterprise Servers</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Enterprise Server Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Rack, tower, and blade servers from Dell, HP, and Lenovo. Configured to your specifications
                            with professional installation and support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=server-quote" className="btn-primary">
                                Request Quote
                            </Link>
                            <Link href="#types" className="btn-secondary">
                                View Options
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="types" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Server Types</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serverTypes.map((server, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{server.type}</h3>
                                <p className="text-gray-600 mb-6">{server.description}</p>
                                <div className="mb-6">
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</div>
                                    <ul className="space-y-1">
                                        {server.useCases.map((useCase, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {useCase}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Popular Models:</div>
                                    <ul className="space-y-1">
                                        {server.models.map((model, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {model}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Configuration Options
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {configurations.map((config, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{config.name}</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">CPU</span>
                                        <span className="font-semibold text-gray-900">{config.cpu}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">RAM</span>
                                        <span className="font-semibold text-gray-900">{config.ram}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Storage</span>
                                        <span className="font-semibold text-gray-900">{config.storage}</span>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-blue-600 mb-4">{config.price}</div>
                                <Link href="/contact?type=server-quote" className="btn-primary w-full text-center">
                                    Get Quote
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Need Help Choosing?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Our server specialists can help you select the right configuration
                    </p>
                    <Link href="/contact?type=server-consultation" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
