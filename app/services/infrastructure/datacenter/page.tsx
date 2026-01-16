import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ServerIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Datacenter Infrastructure Services',
    description: 'Tier-ready datacenter design and deployment with redundant power, cooling, and monitoring. Rack & stack, PDU/UPS, hot/cold aisle containment, and BMS integration.',
    keywords: ['datacenter UAE', 'Tier III datacenter', 'rack and stack', 'datacenter cooling', 'BMS', 'datacenter design'],
})

const tierClassifications = [
    { tier: 'Tier I - Basic', uptime: '99.671%', downtime: '28.8 hours/year', redundancy: 'N', features: ['Single path', 'No redundancy', 'Planned downtime'], bestFor: 'Small businesses' },
    { tier: 'Tier II - Redundant', uptime: '99.741%', downtime: '22 hours/year', redundancy: 'N+1 components', features: ['Single path', 'Redundant components', 'Planned downtime'], bestFor: 'SMBs' },
    { tier: 'Tier III - Concurrent', uptime: '99.982%', downtime: '1.6 hours/year', redundancy: 'N+1', features: ['Multiple paths', 'Concurrent maintenance', 'No planned downtime'], bestFor: 'Enterprises', popular: true },
    { tier: 'Tier IV - Fault Tolerant', uptime: '99.995%', downtime: '26 minutes/year', redundancy: '2N/2(N+1)', features: ['Multiple active paths', 'Fault tolerant', 'Zero downtime'], bestFor: 'Mission-critical' },
]

const infrastructureComponents = [
    { component: 'Power Systems', items: ['UPS (N+1/2N)', 'Generators', 'PDUs', 'ATS/STS', 'Power monitoring'] },
    { component: 'Cooling Systems', items: ['CRAC/CRAH units', 'Chiller systems', 'Hot/cold aisle', 'In-row cooling', 'Temperature monitoring'] },
    { component: 'Physical Security', items: ['Biometric access', 'CCTV surveillance', 'Mantrap entry', 'Security guards', '24/7 monitoring'] },
    { component: 'Fire Suppression', items: ['FM-200/Inergen', 'VESDA detection', 'Pre-action sprinklers', 'Manual suppression', 'Alarm systems'] },
]



export default function DatacenterPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/infrastructure" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-4 text-sm">← Back to Infrastructure Services</Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <ServerIcon className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Datacenter Infrastructure</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Datacenter Infrastructure</h1>
                        <p className="text-xl text-gray-300 mb-8">Tier-ready datacenter design with redundant power, cooling, and monitoring. Complete rack & stack, PDU/UPS deployment, and BMS integration.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=datacenter" className="btn-primary">Request Assessment</Link>
                            <Link href="#tiers" className="btn-secondary">View Tier Classifications</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="tiers" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16"><h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Tier Classifications</h2></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tierClassifications.map((tier, index) => (
                            <div key={index} className={`card-enterprise p-6 ${tier.popular ? 'ring-2 ring-primary-500 shadow-2xl' : ''}`}>
                                {tier.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">Most Common</span></div>}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{tier.tier}</h3>
                                <div className="mb-4"><div className="text-2xl font-bold text-primary-600">{tier.uptime}</div><p className="text-xs text-gray-600">{tier.downtime}</p></div>
                                <div className="mb-4"><p className="text-xs text-gray-500 font-semibold mb-1">Redundancy:</p><p className="text-sm font-semibold text-gray-900">{tier.redundancy}</p></div>
                                <ul className="space-y-1 mb-4">{tier.features.map((f, i) => <li key={i} className="text-xs text-gray-600">• {f}</li>)}</ul>
                                <div className="pt-3 border-t"><p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p><p className="text-sm text-gray-700">{tier.bestFor}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16"><h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Infrastructure Components</h2></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {infrastructureComponents.map((comp, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{comp.component}</h3>
                                <ul className="space-y-2">{comp.items.map((item, i) => <li key={i} className="flex items-start text-sm text-gray-600"><CheckCircleIcon className="w-4 h-4 text-primary-500 mr-1 flex-shrink-0 mt-0.5" />{item}</li>)}</ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">Build Your Datacenter</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Get a free datacenter design and assessment</p>
                    <Link href="/contact?type=datacenter" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">Request Assessment</Link>
                </div>
            </section>
        </>
    )
}
