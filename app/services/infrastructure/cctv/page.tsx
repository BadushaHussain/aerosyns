import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, VideoCameraIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'CCTV & Surveillance Systems',
    description: 'Professional IP camera systems with NVR, video analytics, and AI detection. 2MP to 4K cameras with remote monitoring and mobile access.',
    keywords: ['CCTV UAE', 'IP cameras', 'video surveillance', 'NVR', 'video analytics', 'AI detection'],
})

const cameraTypes = [
    { type: '2MP HD Cameras', resolution: '1920x1080', features: ['Day/night', 'WDR', 'H.265', 'PoE'], applications: 'Basic monitoring, parking', price: '$150-250/camera' },
    { type: '4MP/5MP Cameras', resolution: '2560x1440 / 2592x1944', features: ['Smart IR', 'WDR Pro', 'Audio', 'PoE+'], applications: 'Retail, offices, warehouses', price: '$250-400/camera', popular: true },
    { type: '4K (8MP) Cameras', resolution: '3840x2160', features: ['Ultra HD', 'Smart analytics', 'Motorized zoom', 'PoE++'], applications: 'Critical areas, forensics', price: '$400-800/camera' },
    { type: 'PTZ Cameras', resolution: 'Up to 4K', features: ['Pan/tilt/zoom', 'Auto-tracking', 'Presets', 'High-power PoE'], applications: 'Large areas, perimeter', price: '$800-2000/camera' },
]

const analyticsFeatures = [
    { feature: 'Motion Detection', description: 'Advanced motion detection with zone configuration' },
    { feature: 'Face Recognition', description: 'AI-powered face detection and recognition' },
    { feature: 'License Plate Recognition', description: 'ANPR for vehicle tracking and access control' },
    { feature: 'People Counting', description: 'Accurate counting for retail and crowd management' },
    { feature: 'Intrusion Detection', description: 'Perimeter protection with virtual fencing' },
    { feature: 'Loitering Detection', description: 'Alert on suspicious loitering behavior' },
]

const pricingTiers = [
    { tier: 'Small Business', scope: '8-16 cameras', price: 'Starting at $5,000', includes: ['4MP IP cameras', '8/16-ch NVR', '2TB storage', 'Basic installation', 'Mobile app', '1-year warranty'] },
    { tier: 'Medium Enterprise', scope: '16-64 cameras', price: 'Starting at $20,000', includes: ['5MP IP cameras', '32/64-ch NVR', '8TB storage', 'Video analytics', 'Professional installation', 'Remote monitoring', '3-year warranty'], popular: true },
    { tier: 'Large Campus', scope: '64+ cameras', price: 'Custom pricing', includes: ['4K cameras + PTZ', 'Enterprise NVR/VMS', '20TB+ storage', 'AI analytics', 'Redundant recording', 'Control room setup', '5-year warranty'] },
]

export default function CCTVPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <Link href="/services/infrastructure" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-4 text-sm">← Back to Infrastructure Services</Link>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <VideoCameraIcon className="w-5 h-5 text-primary-400 mr-2" />
                            <span className="text-primary-400 text-sm font-semibold">CCTV & Surveillance</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">CCTV & Surveillance Systems</h1>
                        <p className="text-xl text-gray-300 mb-8">Professional IP camera systems with NVR, video analytics, and AI detection. 2MP to 4K cameras with remote monitoring and mobile access.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=cctv" className="btn-primary">Request Quote</Link>
                            <Link href="#cameras" className="btn-secondary">View Cameras</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cameras" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16"><h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Camera Types</h2></div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {cameraTypes.map((cam, index) => (
                            <div key={index} className={`card-enterprise p-8 ${cam.popular ? 'ring-2 ring-primary-500 shadow-2xl' : ''}`}>
                                {cam.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">Most Popular</span></div>}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cam.type}</h3>
                                <div className="mb-4"><span className="text-sm text-gray-600">Resolution:</span> <span className="text-primary-600 font-bold">{cam.resolution}</span></div>
                                <div className="mb-4"><p className="text-xs text-gray-500 font-semibold mb-2">Features:</p><div className="flex flex-wrap gap-2">{cam.features.map((f, i) => <span key={i} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">{f}</span>)}</div></div>
                                <div className="mb-4"><p className="text-xs text-gray-500 font-semibold mb-1">Applications:</p><p className="text-sm text-gray-700">{cam.applications}</p></div>
                                <div className="text-xl font-bold text-primary-600">{cam.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16"><h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Video Analytics & AI</h2></div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {analyticsFeatures.map((feature, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center"><CheckCircleIcon className="w-8 h-8 text-white" /></div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.feature}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
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
                    <h2 className="text-4xl font-display font-bold text-white mb-6">Secure Your Premises Today</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Get a free site survey and CCTV design</p>
                    <Link href="/contact?type=cctv" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">Request Quote</Link>
                </div>
            </section>
        </>
    )
}
