import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'Networking Equipment - Switches, Routers, WiFi',
    description:
        'Enterprise networking equipment from Cisco, Aruba, Juniper, Ubiquiti. Managed switches, routers, wireless access points, and network controllers.',
    keywords: ['networking equipment', 'Cisco switches', 'Aruba WiFi', 'enterprise networking'],
})

const categories = [
    {
        category: 'Switches',
        description: 'Managed and unmanaged switches for enterprise networks',
        brands: ['Cisco Catalyst', 'Aruba CX', 'Juniper EX', 'Ubiquiti UniFi'],
        types: ['Access switches (24/48 port)', 'Distribution switches', 'Core switches', 'PoE switches'],
    },
    {
        category: 'Routers',
        description: 'Enterprise routers for WAN and internet connectivity',
        brands: ['Cisco ISR', 'Juniper MX', 'Aruba EdgeConnect'],
        types: ['Branch routers', 'Edge routers', 'SD-WAN appliances', 'VPN routers'],
    },
    {
        category: 'Wireless',
        description: 'WiFi 6/6E access points and controllers',
        brands: ['Aruba', 'Cisco Meraki', 'Ubiquiti', 'Ruckus'],
        types: ['Indoor APs', 'Outdoor APs', 'WiFi 6E', 'Mesh systems'],
    },
]

export default function NetworkingPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Enterprise Networking Equipment
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Switches, routers, and wireless access points from Cisco, Aruba, and Juniper.
                            Build reliable, high-performance enterprise networks.
                        </p>
                        <Link href="/contact?type=networking-quote" className="btn-primary">
                            Request Quote
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((cat, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{cat.category}</h3>
                                <p className="text-gray-600 mb-6">{cat.description}</p>
                                <div className="mb-6">
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Brands:</div>
                                    <ul className="space-y-1">
                                        {cat.brands.map((brand, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {brand}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Types:</div>
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

            <section className="section-padding bg-gradient-to-br from-yellow-600 to-orange-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Build Your Network
                    </h2>
                    <Link href="/contact?type=networking-quote" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-yellow-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Quote
                    </Link>
                </div>
            </section>
        </>
    )
}
