import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { FingerPrintIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Biometric Software - Access Control & Attendance',
    description:
        'Universal biometric device integration software supporting fingerprint, face recognition, and RFID. Real-time attendance tracking, access control, and comprehensive reporting.',
    keywords: [
        'biometric software',
        'attendance system',
        'access control',
        'fingerprint software',
        'face recognition',
        'ZKTeco integration',
    ],
})

const deviceSupport = [
    { brand: 'ZKTeco', models: 'All fingerprint & face recognition devices' },
    { brand: 'Anviz', models: 'Face recognition terminals' },
    { brand: 'Suprema', models: 'BioStation, BioLite series' },
    { brand: 'Hikvision', models: 'Face recognition terminals' },
    { brand: 'eSSL', models: 'Fingerprint & RFID devices' },
    { brand: 'Generic', models: 'Any device with SDK/API support' },
]

const features = [
    {
        title: 'Multi-Device Integration',
        description: 'Connect unlimited biometric devices across multiple locations',
        items: ['Auto-discovery', 'Real-time sync', 'Centralized management', 'Device health monitoring'],
    },
    {
        title: 'Attendance Tracking',
        description: 'Automated attendance with shift management and overtime',
        items: ['Real-time attendance', 'Shift scheduling', 'Overtime calculation', 'Late/early tracking'],
    },
    {
        title: 'Access Control',
        description: 'Manage door access and security permissions',
        items: ['Time-based access', 'Zone restrictions', 'Access logs', 'Emergency unlock'],
    },
    {
        title: 'Employee Management',
        description: 'Comprehensive employee database and enrollment',
        items: ['Employee profiles', 'Biometric enrollment', 'Department management', 'Bulk operations'],
    },
    {
        title: 'Reports & Analytics',
        description: 'Detailed attendance and access reports',
        items: ['Attendance reports', 'Late/absent reports', 'Access logs', 'Custom reports', 'Excel export'],
    },
    {
        title: 'Integration APIs',
        description: 'Connect with HRMS, payroll, and other systems',
        items: ['RESTful API', 'Webhooks', 'Real-time events', 'Data export'],
    },
]

export default function BiometricPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                            <FingerPrintIcon className="w-5 h-5 text-orange-400 mr-2" />
                            <span className="text-orange-400 text-sm font-semibold">Biometric Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Universal Biometric Software
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Connect any biometric device for attendance tracking and access control. Support for
                            fingerprint, face recognition, RFID, and multi-modal authentication.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=biometric-demo" className="btn-primary">
                                Request Demo
                            </Link>
                            <Link href="#features" className="btn-secondary">
                                View Features
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Device Support */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Universal Device Support
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Compatible with all major biometric device manufacturers
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {deviceSupport.map((device, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{device.brand}</h3>
                                <p className="text-sm text-gray-600">{device.models}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-gray-600">
                            Don't see your device? Contact us for custom integration support
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Powerful Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need for biometric attendance and access control
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible deployment for various industries and scenarios
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Office Attendance', desc: 'Track employee attendance with fingerprint or face' },
                            { title: 'Factory Floor', desc: 'Rugged devices for manufacturing environments' },
                            { title: 'Access Control', desc: 'Secure door access with biometric authentication' },
                            { title: 'Multi-Location', desc: 'Centralized management across branches' },
                            { title: 'Visitor Management', desc: 'Temporary access for visitors and contractors' },
                            { title: 'Canteen Integration', desc: 'Meal tracking and subsidies' },
                            { title: 'Parking Access', desc: 'Vehicle entry/exit with biometric verification' },
                            { title: 'Time & Attendance', desc: 'Integration with payroll systems' },
                        ].map((useCase, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                                <p className="text-sm text-gray-600">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                Technical Specifications
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Enterprise-grade software with high-performance architecture and real-time synchronization.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: 'Device Capacity', value: 'Unlimited devices' },
                                    { label: 'User Capacity', value: 'Unlimited users' },
                                    { label: 'Transaction Storage', value: '10M+ records' },
                                    { label: 'Real-Time Sync', value: '<1 second' },
                                    { label: 'API Response', value: '<100ms' },
                                    { label: 'Uptime SLA', value: '99.9%' },
                                ].map((spec, index) => (
                                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-900">{spec.label}</span>
                                        <span className="text-orange-600 font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card-enterprise p-8 bg-gradient-to-br from-orange-50 to-red-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Authentication Methods</h3>
                            <ul className="space-y-4">
                                {[
                                    { method: 'Fingerprint', desc: 'Optical, capacitive, ultrasonic sensors' },
                                    { method: 'Face Recognition', desc: 'Visible light & infrared cameras' },
                                    { method: 'RFID Card', desc: '125KHz, 13.56MHz cards' },
                                    { method: 'PIN Code', desc: 'Numeric password authentication' },
                                    { method: 'Multi-Modal', desc: 'Combine 2+ methods for security' },
                                    { method: 'Palm Vein', desc: 'Advanced vein pattern recognition' },
                                ].map((auth, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircleIcon className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{auth.method}</div>
                                            <div className="text-sm text-gray-600">{auth.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Simple Pricing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            One-time license or monthly subscription
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                name: 'Cloud Subscription',
                                price: '$2',
                                period: '/employee/month',
                                description: 'Cloud-hosted with automatic updates',
                                features: ['Unlimited devices', 'Cloud storage', 'Mobile apps', 'API access', 'Email support'],
                            },
                            {
                                name: 'On-Premise License',
                                price: 'Custom',
                                period: '',
                                description: 'One-time perpetual license',
                                features: ['Self-hosted', 'Unlimited users', 'Source code option', 'Custom integrations', 'Dedicated support'],
                                popular: true,
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${plan.popular ? 'ring-2 ring-orange-500 shadow-2xl' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-orange-600 text-white text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-600 text-sm">{plan.period}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/contact?type=biometric-${plan.name.toLowerCase().replace(' ', '-')}`}
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                            ? 'bg-orange-600 text-white hover:bg-orange-700'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-orange-600 to-red-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Modernize Your Attendance System?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Connect your biometric devices and start tracking attendance in minutes
                    </p>
                    <Link href="/contact?type=biometric-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-orange-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Demo
                    </Link>
                </div>
            </section>
        </>
    )
}
