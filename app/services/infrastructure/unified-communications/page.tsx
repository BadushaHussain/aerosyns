import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, PhoneIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Unified Communications - PBX & VoIP Systems',
    description: 'Enterprise unified communications with IP-PBX, cloud telephony, SIP trunking, and intercom systems. Call recording, analytics, and mobile integration.',
    keywords: ['IP-PBX UAE', 'VoIP', 'unified communications', 'SIP trunking', 'cloud telephony', 'intercom systems'],
})

const pbxSolutions = [
    { solution: 'On-Premise IP-PBX', description: 'Full-featured on-site PBX system', features: ['100-10,000 extensions', 'SIP/analog support', 'Call routing & IVR', 'Voicemail to email', 'Mobile app'], bestFor: 'Large enterprises, data sovereignty' },
    { solution: 'Cloud PBX', description: 'Hosted telephony with zero hardware', features: ['Unlimited extensions', 'Auto-provisioning', 'Global presence', 'Auto-attendant', 'CRM integration'], bestFor: 'SMBs, remote teams', popular: true },
    { solution: 'Hybrid PBX', description: 'Best of both worlds', features: ['On-prem + cloud', 'Disaster recovery', 'Gradual migration', 'Cost optimization', 'Flexibility'], bestFor: 'Growing enterprises' },
]

const features = [
    { feature: 'Call Management', items: ['Call forwarding', 'Call transfer', 'Call parking', 'Conference calling', 'Call queuing'] },
    { feature: 'Advanced Features', items: ['IVR/Auto-attendant', 'Call recording', 'Voicemail to email', 'Fax to email', 'Music on hold'] },
    { feature: 'Integration', items: ['CRM integration', 'Microsoft Teams', 'Mobile apps', 'Softphones', 'API access'] },
    { feature: 'Analytics', items: ['Call reports', 'Queue statistics', 'Agent performance', 'CDR analysis', 'Real-time dashboards'] },
]

const pricingTiers = [
    { tier: 'Small Office', scope: '10-50 extensions', price: 'Starting at $3,000', includes: ['IP-PBX system', '10-50 IP phones', 'Basic features', 'Installation', '1-year support'] },
    { tier: 'Medium Enterprise', scope: '50-500 extensions', price: 'Starting at $15,000', includes: ['Enterprise PBX', '50-500 IP phones', 'Advanced features', 'SIP trunking', 'Call recording', 'CRM integration', '3-year support'], popular: true },
    { tier: 'Large Enterprise', scope: '500+ extensions', price: 'Custom pricing', includes: ['Redundant PBX', '500+ IP phones', 'Full feature set', 'Contact center', 'Custom integrations', 'Dedicated support', '5-year support'] },
]

export default function UnifiedCommunicationsPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/infrastructure" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-4 text-sm">← Back to Infrastructure Services</Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <PhoneIcon className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">Unified Communications</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Unified Communications</h1>
                        <p className="text-xl text-gray-300 mb-8">Enterprise IP-PBX, cloud telephony, SIP trunking, and intercom systems. Call recording, analytics, and seamless mobile integration.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=pbx" className="btn-primary">Request Demo</Link>
                            <Link href="#solutions" className="btn-secondary">View Solutions</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16"><h2 className="text-4xl font-display font-bold text-gray-900 mb-4">PBX Solutions</h2></div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pbxSolutions.map((sol, index) => (
                            <div key={index} className={`card-enterprise p-8 ${sol.popular ? 'ring-2 ring-primary-500 shadow-2xl' : ''}`}>
                                {sol.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">Most Popular</span></div>}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{sol.solution}</h3>
                                <p className="text-gray-600 mb-6">{sol.description}</p>
                                <ul className="space-y-2 mb-6">{sol.features.map((f, i) => <li key={i} className="flex items-start text-sm text-gray-600"><CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />{f}</li>)}</ul>
                                <div className="pt-4 border-t"><p className="text-xs text-gray-500 font-semibold mb-1">Best For:</p><p className="text-sm text-gray-700">{sol.bestFor}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16"><h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Features & Capabilities</h2></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((cat, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{cat.feature}</h3>
                                <ul className="space-y-2">{cat.items.map((item, i) => <li key={i} className="flex items-start text-sm text-gray-600"><CheckCircleIcon className="w-4 h-4 text-primary-500 mr-1 flex-shrink-0 mt-0.5" />{item}</li>)}</ul>
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
                    <h2 className="text-4xl font-display font-bold text-white mb-6">Transform Your Communications</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Get a free demo and consultation</p>
                    <Link href="/contact?type=pbx" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">Request Demo</Link>
                </div>
            </section>
        </>
    )
}
