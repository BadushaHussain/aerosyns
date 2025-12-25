import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { ServerIcon, ShieldCheckIcon, ComputerDesktopIcon, CircleStackIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Enterprise Hardware Sales - Servers, Storage, Networking',
    description:
        'Enterprise IT hardware sales and procurement. Servers, firewalls, workstations, storage, networking equipment from Dell, HP, Cisco, Fortinet, and more. Competitive pricing and expert consultation.',
    keywords: [
        'enterprise hardware UAE',
        'server sales',
        'firewall sales',
        'networking equipment',
        'IT hardware Dubai',
        'Dell servers',
        'Cisco networking',
    ],
})

const categories = [
    {
        name: 'Servers',
        icon: ServerIcon,
        description: 'Rack, tower, and blade servers from Dell, HP, Lenovo',
        href: '/products/hardware/servers',
        brands: ['Dell EMC', 'HP Enterprise', 'Lenovo', 'Supermicro'],
        color: 'from-blue-500 to-cyan-500',
    },
    {
        name: 'Firewalls',
        icon: ShieldCheckIcon,
        description: 'Next-gen firewalls and security appliances',
        href: '/products/hardware/firewalls',
        brands: ['Fortinet', 'Palo Alto', 'Cisco', 'SonicWall'],
        color: 'from-red-500 to-orange-500',
    },
    {
        name: 'Workstations',
        icon: ComputerDesktopIcon,
        description: 'High-performance workstations for CAD, rendering, AI',
        href: '/products/hardware/workstations',
        brands: ['Dell Precision', 'HP Z Series', 'Lenovo ThinkStation'],
        color: 'from-purple-500 to-pink-500',
    },
    {
        name: 'Storage',
        icon: CircleStackIcon,
        description: 'SAN, NAS, and DAS storage solutions',
        href: '/products/hardware/storage',
        brands: ['Dell EMC', 'NetApp', 'Synology', 'QNAP'],
        color: 'from-green-500 to-emerald-500',
    },
    {
        name: 'End-User Devices',
        icon: ComputerDesktopIcon,
        description: 'Laptops, desktops, monitors, and peripherals',
        href: '/products/hardware/end-user',
        brands: ['Dell', 'HP', 'Lenovo', 'Apple'],
        color: 'from-indigo-500 to-blue-500',
    },
    {
        name: 'Networking',
        icon: ServerIcon,
        description: 'Switches, routers, wireless access points',
        href: '/products/hardware/networking',
        brands: ['Cisco', 'Aruba', 'Juniper', 'Ubiquiti'],
        color: 'from-yellow-500 to-orange-500',
    },
    {
        name: 'Telecom',
        icon: ServerIcon,
        description: 'IP phones, PBX systems, video conferencing',
        href: '/products/hardware/telecom',
        brands: ['Cisco', 'Yealink', 'Grandstream', 'Poly'],
        color: 'from-teal-500 to-cyan-500',
    },
]

const services = [
    {
        title: 'Procurement & Sourcing',
        description: 'Competitive pricing with direct manufacturer relationships',
    },
    {
        title: 'Technical Consultation',
        description: 'Expert guidance on hardware selection and sizing',
    },
    {
        title: 'Installation & Setup',
        description: 'Professional installation and configuration services',
    },
    {
        title: 'Warranty & Support',
        description: 'Extended warranties and 24/7 support options',
    },
]

export default function HardwareOverviewPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <span className="text-primary-400 text-sm font-semibold">Enterprise Hardware</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Enterprise IT Hardware Sales
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Comprehensive hardware procurement for datacenters, offices, and enterprise IT.
                            Competitive pricing, expert consultation, and professional installation services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?type=hardware-quote" className="btn-primary">
                                Request Quote
                            </Link>
                            <Link href="#categories" className="btn-secondary">
                                Browse Categories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section id="categories" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Hardware Categories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Browse our complete range of enterprise IT hardware
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href={category.href}
                                className="card-enterprise p-8 group hover:scale-105 transition-all duration-300"
                            >
                                <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} mb-6 group-hover:shadow-xl transition-shadow`}>
                                    <category.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                    {category.name}
                                </h3>
                                <p className="text-gray-600 mb-6">{category.description}</p>
                                <div className="mb-6">
                                    <div className="text-sm font-semibold text-gray-900 mb-2">Brands:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.brands.map((brand, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
                                            >
                                                {brand}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                                    View Products
                                    <svg
                                        className="w-5 h-5 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Complete Hardware Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            More than just hardware sales — complete lifecycle support
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Why Choose Aerosyns for Hardware?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Trusted partner for enterprise IT procurement
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Competitive Pricing',
                                desc: 'Direct manufacturer relationships for best pricing',
                            },
                            {
                                title: 'Expert Consultation',
                                desc: 'Technical architects to help you choose the right hardware',
                            },
                            {
                                title: 'Fast Delivery',
                                desc: 'Stock availability and quick delivery across UAE',
                            },
                            {
                                title: 'Professional Installation',
                                desc: 'Certified engineers for installation and configuration',
                            },
                            {
                                title: 'Extended Warranties',
                                desc: 'Flexible warranty and support options',
                            },
                            {
                                title: 'Trade-In Programs',
                                desc: 'Upgrade your existing hardware with trade-in value',
                            },
                        ].map((benefit, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Authorized Partners
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We work with leading enterprise hardware manufacturers
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            'Dell EMC',
                            'HP Enterprise',
                            'Cisco',
                            'Fortinet',
                            'Lenovo',
                            'NetApp',
                            'Palo Alto',
                            'Aruba',
                            'Supermicro',
                            'Synology',
                            'Juniper',
                            'SonicWall',
                        ].map((brand, index) => (
                            <div key={index} className="card-enterprise p-4 text-center">
                                <div className="text-sm font-semibold text-gray-900">{brand}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Upgrade Your Infrastructure?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a customized quote for your hardware requirements
                    </p>
                    <Link href="/contact?type=hardware-quote" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Quote
                    </Link>
                </div>
            </section>
        </>
    )
}
