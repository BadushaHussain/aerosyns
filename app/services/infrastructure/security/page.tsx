import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Security & Firewalls - Network Security Services',
    description: 'Enterprise network security with next-generation firewalls from Fortinet, Palo Alto, and Cisco. NGFW deployment, network segmentation, IPS, and NAC solutions.',
    keywords: ['network security UAE', 'NGFW', 'Fortinet', 'Palo Alto', 'firewall deployment', 'network segmentation'],
})

const firewallSolutions = [
    { brand: 'Fortinet FortiGate', models: ['60F-600F (SMB)', '1000F-3000F (Enterprise)', '4000F+ (Datacenter)'], throughput: 'Up to 1 Tbps', features: ['SD-WAN', 'SSL inspection', 'IPS/IDS', 'Application control'] },
    { brand: 'Palo Alto PA-Series', models: ['PA-400 (Branch)', 'PA-3000/5000 (Enterprise)', 'PA-7000 (Datacenter)'], throughput: 'Up to 1.5 Tbps', features: ['App-ID', 'User-ID', 'Threat prevention', 'WildFire'] },
    { brand: 'Cisco Firepower', models: ['1000/2100 (SMB)', '4100/9300 (Enterprise)'], throughput: 'Up to 100 Gbps', features: ['Snort IPS', 'AMP', 'URL filtering', 'Cisco Talos'] },
]

const securityServices = [
    { service: 'Network Segmentation', description: 'Micro-segmentation and VLAN isolation', deliverables: ['VLAN design', 'ACL policies', 'Zero-trust architecture', 'Compliance mapping'] },
    { service: 'Intrusion Prevention (IPS)', description: 'Real-time threat detection and blocking', deliverables: ['IPS deployment', 'Signature updates', 'Custom rules', 'Threat intelligence'] },
    { service: 'Network Access Control (NAC)', description: '802.1X authentication and device profiling', deliverables: ['NAC deployment', 'Device profiling', 'Guest access', 'Posture assessment'] },
    { service: 'Security Monitoring', description: '24/7 SOC and SIEM integration', deliverables: ['Log aggregation', 'Threat detection', 'Incident response', 'Compliance reporting'] },
]

const pricingTiers = [
    { tier: 'SMB Security', scope: 'Up to 100 users', price: 'Starting at $8,000', includes: ['Entry-level NGFW', 'Basic IPS', 'VPN (50 users)', 'Email support', '1-year license'] },
    { tier: 'Enterprise Security', scope: '100-1000 users', price: 'Starting at $35,000', includes: ['Enterprise NGFW', 'Advanced IPS/IDS', 'NAC deployment', 'SIEM integration', '24/7 support', '3-year license'], popular: true },
    { tier: 'Datacenter Security', scope: '1000+ users', price: 'Custom pricing', includes: ['High-performance NGFW', 'Full security stack', 'Redundant deployment', 'SOC services', 'Dedicated engineer', '5-year license'] },
]

export default function SecurityFirewallsPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/infrastructure" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-4 text-sm">← Back to Infrastructure Services</Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <ShieldCheckIcon className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Security & Firewalls</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Security & Firewalls</h1>
                        <p className="text-xl text-gray-300 mb-8">Next-generation firewall deployment with Fortinet, Palo Alto, and Cisco. Network segmentation, IPS/IDS, and comprehensive security solutions.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=security" className="btn-primary">Request Security Assessment</Link>
                            <Link href="#solutions" className="btn-secondary">View Solutions</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Firewall Solutions</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {firewallSolutions.map((fw, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{fw.brand}</h3>
                                <div className="mb-4"><span className="text-sm text-gray-600">Throughput:</span> <span className="text-primary-600 font-bold">{fw.throughput}</span></div>
                                <div className="mb-6"><p className="text-xs text-gray-500 font-semibold mb-2">Models:</p>{fw.models.map((m, i) => <p key={i} className="text-sm text-gray-700">{m}</p>)}</div>
                                <ul className="space-y-1">{fw.features.map((f, i) => <li key={i} className="flex items-start text-sm text-gray-600"><CheckCircleIcon className="w-4 h-4 text-primary-500 mr-1 flex-shrink-0 mt-0.5" />{f}</li>)}</ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16"><h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Security Services</h2></div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {securityServices.map((s, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.service}</h3>
                                <p className="text-gray-600 mb-6">{s.description}</p>
                                <ul className="space-y-2">{s.deliverables.map((d, i) => <li key={i} className="flex items-start text-sm text-gray-600"><CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />{d}</li>)}</ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16"><h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Pricing Packages</h2></div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, index) => (
                            <div key={index} className={`card-enterprise p-8 relative ${tier.popular ? 'ring-2 ring-primary-500 shadow-2xl' : ''}`}>
                                {tier.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">Most Popular</span></div>}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                                <p className="text-sm text-gray-600 mb-4">{tier.scope}</p>
                                <div className="text-3xl font-bold text-primary-600 mb-6">{tier.price}</div>
                                <ul className="space-y-2">{tier.includes.map((item, idx) => <li key={idx} className="flex items-start text-sm text-gray-600"><CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />{item}</li>)}</ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">Secure Your Network Today</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Get a free security assessment and threat analysis</p>
                    <Link href="/contact?type=security" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">Request Security Assessment</Link>
                </div>
            </section>
        </>
    )
}
