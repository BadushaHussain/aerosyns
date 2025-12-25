import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CircleStackIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Enterprise Storage - SAN, NAS, DAS Solutions',
    description:
        'Enterprise storage solutions from Dell EMC, NetApp, Synology, QNAP. SAN, NAS, and DAS for datacenters and backup. All-flash and hybrid storage arrays.',
    keywords: ['enterprise storage', 'SAN storage', 'NAS storage', 'Dell EMC storage', 'NetApp'],
})

const storageTypes = [
    {
        type: 'SAN (Storage Area Network)',
        description: 'Block-level storage for high-performance applications',
        brands: ['Dell EMC Unity', 'NetApp AFF', 'HPE 3PAR'],
        useCases: ['Databases', 'Virtualization', 'Mission-critical apps'],
    },
    {
        type: 'NAS (Network Attached Storage)',
        description: 'File-level storage for shared access',
        brands: ['Synology', 'QNAP', 'NetApp FAS'],
        useCases: ['File sharing', 'Backup', 'Media storage'],
    },
    {
        type: 'DAS (Direct Attached Storage)',
        description: 'Direct-connect storage for single servers',
        brands: ['Dell PowerVault', 'HP MSA', 'Lenovo DM'],
        useCases: ['Local backup', 'Archive', 'Small deployments'],
    },
]

export default function StoragePage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                            <CircleStackIcon className="w-5 h-5 text-green-400 mr-2" />
                            <span className="text-green-400 text-sm font-semibold">Enterprise Storage</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Enterprise Storage Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            SAN, NAS, and DAS storage from leading manufacturers. All-flash, hybrid, and HDD arrays
                            for datacenters, backup, and archival.
                        </p>
                        <Link href="/contact?type=storage-quote" className="btn-primary">
                            Request Quote
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {storageTypes.map((storage, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{storage.type}</h3>
                                <p className="text-gray-600 mb-6">{storage.description}</p>
                                <div className="mb-6">
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Brands:</div>
                                    <ul className="space-y-1">
                                        {storage.brands.map((brand, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {brand}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</div>
                                    <ul className="space-y-1">
                                        {storage.useCases.map((useCase, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {useCase}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Scale Your Storage
                    </h2>
                    <Link href="/contact?type=storage-quote" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-green-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Quote
                    </Link>
                </div>
            </section>
        </>
    )
}
