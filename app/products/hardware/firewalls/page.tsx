import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Enterprise Firewalls - Fortinet, Palo Alto, Cisco',
    description:
        'Next-generation firewalls and security appliances. Fortinet FortiGate, Palo Alto Networks, Cisco Firepower. UTM, IPS, VPN, and advanced threat protection.',
    keywords: ['firewall UAE', 'Fortinet firewall', 'Palo Alto', 'next-gen firewall', 'UTM'],
})

const firewalls = [
    {
        brand: 'Fortinet FortiGate',
        models: ['FortiGate 60F', 'FortiGate 100F', 'FortiGate 200F', 'FortiGate 600F'],
        throughput: '10 Gbps - 100 Gbps',
        features: ['UTM', 'IPS/IDS', 'VPN', 'SD-WAN', 'Cloud management'],
    },
    {
        brand: 'Palo Alto Networks',
        models: ['PA-220', 'PA-440', 'PA-850', 'PA-3220'],
        throughput: '1 Gbps - 25 Gbps',
        features: ['App-ID', 'User-ID', 'Threat Prevention', 'URL Filtering', 'WildFire'],
    },
    {
        brand: 'Cisco Firepower',
        models: ['FPR1010', 'FPR2110', 'FPR4120', 'FPR9300'],
        throughput: '1 Gbps - 120 Gbps',
        features: ['NGIPS', 'AMP', 'URL Filtering', 'Malware Defense', 'VPN'],
    },
]

export default function FirewallsPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                            <ShieldCheckIcon className="w-5 h-5 text-red-400 mr-2" />
                            <span className="text-red-400 text-sm font-semibold">Network Security</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Enterprise Firewalls
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Next-generation firewalls from Fortinet, Palo Alto, and Cisco. Advanced threat protection,
                            VPN, and unified threat management for enterprise security.
                        </p>
                        <Link href="/contact?type=firewall-quote" className="btn-primary">
                            Request Quote
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Firewall Solutions
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {firewalls.map((fw, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{fw.brand}</h3>
                                <div className="mb-4">
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Throughput:</div>
                                    <div className="text-red-600 font-medium">{fw.throughput}</div>
                                </div>
                                <div className="mb-6">
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Models:</div>
                                    <ul className="space-y-1">
                                        {fw.models.map((model, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {model}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Features:</div>
                                    <ul className="space-y-1">
                                        {fw.features.map((feature, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-red-600 to-orange-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Secure Your Network
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get expert recommendations for your firewall requirements
                    </p>
                    <Link href="/contact?type=firewall-quote" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-red-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Quote
                    </Link>
                </div>
            </section>
        </>
    )
}
