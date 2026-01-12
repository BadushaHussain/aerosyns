import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, TruckIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Logistics & Fleet Management Software Development',
    description: 'Custom logistics and fleet management software. Route optimization, real-time tracking, warehouse management, and supply chain solutions.',
    keywords: ['logistics software', 'fleet management system', 'route optimization', 'warehouse management', 'supply chain software', 'TMS UAE'],
})

const solutions = [
    {
        title: 'Transportation Management System (TMS)',
        features: ['Route optimization', 'Load planning', 'Carrier management', 'Freight audit', 'Real-time tracking', 'Analytics & reporting'],
    },
    {
        title: 'Fleet Management',
        features: ['Vehicle tracking', 'Maintenance scheduling', 'Fuel management', 'Driver management', 'Telematics integration', 'Compliance tracking'],
    },
    {
        title: 'Warehouse Management System (WMS)',
        features: ['Inventory management', 'Order fulfillment', 'Barcode/RFID scanning', 'Picking optimization', 'Dock management', 'Labor management'],
    },
    {
        title: 'Last-Mile Delivery',
        features: ['Delivery scheduling', 'Route optimization', 'Driver mobile app', 'Customer notifications', 'Proof of delivery', 'Real-time tracking'],
    },
]

const caseStudies = [
    {
        title: 'Fleet Management Platform',
        challenge: 'Manual tracking causing inefficiency and high fuel costs',
        solution: 'Real-time fleet management with route optimization',
        results: ['30% fuel cost reduction', '25% more deliveries/day', 'Real-time visibility', '40% faster dispatch'],
    },
    {
        title: 'Warehouse Automation',
        challenge: 'Inventory errors and slow order fulfillment',
        solution: 'WMS with barcode scanning and automated workflows',
        results: ['99.5% inventory accuracy', '50% faster fulfillment', '60% less manual work', 'Real-time stock visibility'],
    },
]

export default function LogisticsPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/software" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to Software Services
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                            <TruckIcon className="w-5 h-5 text-orange-400 mr-2" />
                            <span className="text-orange-400 text-sm font-semibold">Logistics & Fleet Management</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Logistics & Fleet Management Software
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Optimize operations with modern logistics software. Route optimization, real-time tracking,
                            warehouse management, and supply chain visibility.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=logistics-consultation" className="btn-primary">
                                Request Consultation
                            </Link>
                            <Link href="#solutions" className="btn-secondary">
                                View Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                            Smart Logistics Solutions
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Modern logistics demands real-time visibility, route optimization, and automated workflows.
                            Our solutions reduce costs, improve efficiency, and enhance customer satisfaction.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-600 mb-2">30%</div>
                                <div className="text-sm text-gray-600">Cost Reduction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
                                <div className="text-sm text-gray-600">More Deliveries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-600 mb-2">99.5%</div>
                                <div className="text-sm text-gray-600">Inventory Accuracy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Logistics Software Solutions
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Success Stories
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Challenge:</h4>
                                        <p className="text-sm text-gray-600">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Solution:</h4>
                                        <p className="text-sm text-gray-600">{study.solution}</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Results:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {study.results.map((result, idx) => (
                                            <div key={idx} className="flex items-start text-xs text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                                                {result}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Optimize Your Logistics?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free consultation on logistics and fleet management software
                    </p>
                    <Link
                        href="/contact?type=logistics-consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
