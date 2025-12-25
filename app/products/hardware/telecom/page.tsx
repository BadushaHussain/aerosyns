import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'Telecom Equipment - IP Phones, PBX, Video Conferencing',
    description:
        'Enterprise telecom equipment. IP phones, PBX systems, video conferencing from Cisco, Yealink, Grandstream, Poly. VoIP and unified communications.',
    keywords: ['IP phones', 'PBX system', 'video conferencing', 'VoIP UAE', 'Cisco phones'],
})

const telecomCategories = [
    {
        category: 'IP Phones',
        brands: ['Cisco', 'Yealink', 'Grandstream', 'Poly'],
        types: ['Desktop phones', 'Conference phones', 'Cordless phones', 'Executive phones'],
    },
    {
        category: 'PBX Systems',
        brands: ['Cisco CUCM', 'Grandstream UCM', '3CX', 'Asterisk'],
        types: ['On-premise PBX', 'Cloud PBX', 'Hybrid systems', 'SIP trunking'],
    },
    {
        category: 'Video Conferencing',
        brands: ['Cisco Webex', 'Poly Studio', 'Logitech', 'Yealink'],
        types: ['Room systems', 'Personal devices', 'All-in-one bars', 'PTZ cameras'],
    },
]

export default function TelecomPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Telecom & Unified Communications
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            IP phones, PBX systems, and video conferencing solutions. Build modern unified
                            communications infrastructure for your enterprise.
                        </p>
                        <Link href="/contact?type=telecom-quote" className="btn-primary">
                            Request Quote
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {telecomCategories.map((cat, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cat.category}</h3>
                                <div className="mb-6">
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Brands:</div>
                                    <ul className="space-y-1">
                                        {cat.brands.map((brand, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {brand}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Solutions:</div>
                                    <ul className="space-y-1">
                                        {cat.types.map((type, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {type}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-teal-600 to-cyan-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Upgrade Your Communications
                    </h2>
                    <Link href="/contact?type=telecom-quote" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-teal-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Quote
                    </Link>
                </div>
            </section>
        </>
    )
}
