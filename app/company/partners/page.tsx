import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = genMeta({
    title: 'Technology Partners - Dell, HP, Cisco, Fortinet',
    description:
        'Aerosyns partners with leading technology vendors: Dell EMC, HP Enterprise, Cisco, Fortinet, Palo Alto, NetApp, and more. Authorized reseller and certified integrator.',
    keywords: ['technology partners', 'Dell partner', 'Cisco partner', 'authorized reseller'],
})

const partners = [
    { name: 'Dell Technologies', category: 'Servers, Storage, Workstations', level: 'Gold Partner', logo: '/partners/delltechnologies.png' },
    { name: 'HP Enterprise', category: 'Servers, Storage, Networking', level: 'Platinum Partner', logo: '/partners/hewlettpackardenterprise.png' },
    { name: 'Cisco', category: 'Networking, Security, Collaboration', level: 'Select Partner', logo: '/partners/cisco.png' },
    { name: 'Fortinet', category: 'Network Security, Firewalls', level: 'Platinum Partner', logo: '/partners/fortinet.png' },
    { name: 'Palo Alto Networks', category: 'Next-Gen Firewalls, Security', level: 'Authorized Partner', logo: '/partners/PaloAltoNetworks.png' },
    { name: 'NetApp', category: 'Storage Solutions', level: 'Gold Partner', logo: '/partners/netapp.png' },
    { name: 'Lenovo', category: 'Servers, Workstations', level: 'Authorized Partner', logo: '/partners/lenovo.png' },
    { name: 'Microsoft', category: 'Cloud, Software', level: 'Solution Partner', logo: '/partners/microsoft.png' },
    { name: 'VMware', category: 'Virtualization, Cloud', level: 'Advanced Partner', logo: '/partners/vmware.png' },
    { name: 'NVIDIA', category: 'GPUs, AI Infrastructure', level: 'Elite Partner', logo: '/partners/NVIDIA.png' },
    { name: 'Kingston Technology', category: 'Memory, Storage Solutions', level: 'Authorized Partner', logo: '/partners/kingston.png' },
    { name: 'NEC', category: 'Enterprise Solutions, Displays', level: 'Authorized Partner', logo: '/partners/nec.png' },
    { name: 'D-Link', category: 'Networking, Switches', level: 'Authorized Partner', logo: '/partners/D-Link.png' },
    { name: 'Hikvision', category: 'Security Cameras, Surveillance', level: 'Authorized Partner', logo: '/partners/Hikvision.png' },
    { name: 'Seagate', category: 'Storage, Hard Drives', level: 'Authorized Partner', logo: '/partners/Seagate.png' },
    { name: 'QNAP', category: 'NAS, Storage Solutions', level: 'Authorized Partner', logo: '/partners/qnap.png' },
    { name: 'Supermicro', category: 'Servers, Storage', level: 'Authorized Partner', logo: '/partners/supermicro.png' },
    { name: 'Synology', category: 'NAS, Storage Solutions', level: 'Authorized Partner', logo: '/partners/synology.png' },
    { name: 'Western Digital', category: 'Storage, Hard Drives', level: 'Authorized Partner', logo: '/partners/westerndigital.png' },
    { name: 'ZKTecho', category: 'Access Control, Biometrics', level: 'Authorized Partner', logo: '/partners/zktecho.png' },
]

export default function PartnersPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Technology Partners
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            We partner with leading technology vendors to deliver best-in-class solutions
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Our Partners
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Authorized partnerships with industry-leading manufacturers
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {partners.map((partner, index) => (
                            <div key={index} className="card-enterprise p-6 flex flex-col items-center text-center">
                                {partner.logo ? (
                                    <div className="mb-4 h-20 w-full flex items-center justify-center">
                                        <Image
                                            src={partner.logo}
                                            alt={`${partner.name} logo`}
                                            width={200}
                                            height={80}
                                            className="object-contain max-h-20"
                                        />
                                    </div>
                                ) : (
                                    <div className="mb-4 h-20 w-full flex items-center justify-center bg-gray-100 rounded">
                                        <span className="text-gray-400 text-sm">Logo</span>
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{partner.category}</p>
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">
                                    {partner.level}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                            Why Partner With Us?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            {[
                                { title: 'Certified Expertise', desc: 'Factory-trained and certified engineers' },
                                { title: 'Competitive Pricing', desc: 'Direct manufacturer relationships' },
                                { title: 'Full Support', desc: 'Pre-sales, implementation, and post-sales support' },
                            ].map((benefit, index) => (
                                <div key={index} className="card-enterprise p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Become a Partner
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Interested in partnering with Aerosyns? Get in touch
                    </p>
                    <Link href="/contact?type=partnership" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    )
}
