import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'End-User Devices - Laptops, Desktops, Monitors',
    description:
        'Enterprise laptops, desktops, monitors, and peripherals. Dell, HP, Lenovo, Apple. Business-class devices with warranty and support.',
    keywords: ['business laptops', 'enterprise desktops', 'Dell laptops UAE', 'HP business'],
})

const deviceCategories = [
    {
        category: 'Laptops',
        brands: ['Dell Latitude', 'HP EliteBook', 'Lenovo ThinkPad', 'Apple MacBook'],
        types: ['Ultrabooks', 'Business laptops', '2-in-1 convertibles', 'Mobile workstations'],
    },
    {
        category: 'Desktops',
        brands: ['Dell OptiPlex', 'HP ProDesk', 'Lenovo ThinkCentre', 'Apple iMac'],
        types: ['Small form factor', 'Mini PCs', 'All-in-one', 'Tower desktops'],
    },
    {
        category: 'Monitors & Peripherals',
        brands: ['Dell', 'HP', 'LG', 'BenQ', 'Logitech'],
        types: ['Business monitors', 'Ultrawide displays', 'Keyboards & mice', 'Webcams & headsets'],
    },
]

export default function EndUserPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            End-User Devices
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Business-class laptops, desktops, monitors, and peripherals. Bulk pricing available
                            for enterprise deployments with warranty and support.
                        </p>
                        <Link href="/contact?type=enduser-quote" className="btn-primary">
                            Request Quote
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {deviceCategories.map((cat, index) => (
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
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Options:</div>
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

            <section className="section-padding bg-gradient-to-br from-indigo-600 to-blue-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Equip Your Team
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Bulk pricing available for enterprise deployments
                    </p>
                    <Link href="/contact?type=enduser-quote" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Quote
                    </Link>
                </div>
            </section>
        </>
    )
}
