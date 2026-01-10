'use client'

import Link from 'next/link'
import { BellAlertIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

const useCases = [
    {
        title: 'Fleet Management',
        description: 'Manage vehicle and driver documentation',
        documents: ['Vehicle registration', 'Insurance', 'Driver licenses', 'Inspection certificates'],
    },
    {
        title: 'Human Resources',
        description: 'Monitor employee documents and certifications',
        documents: ['Work permits', 'Visas', 'Passports', 'Professional certifications'],
    },
    {
        title: 'Immigration',
        description: 'Track visa and permit expiries',
        documents: ['Visas', 'Work permits', 'Residence permits', 'Travel documents'],
    },
    {
        title: 'Insurance',
        description: 'Track policy documents, licenses, and regulatory compliance',
        documents: ['Insurance policies', 'Agent licenses', 'Regulatory filings', 'Certificates'],
    },
]

const features = [
    {
        title: 'Document Upload & Storage',
        description: 'Secure cloud storage with OCR and metadata extraction',
        items: ['Drag-and-drop upload', 'OCR text extraction', 'Automatic categorization', 'Version control'],
    },
    {
        title: 'Expiry Tracking',
        description: 'Automated tracking with configurable alert timelines',
        items: ['Custom alert schedules', 'Multi-level reminders', 'Grace period management', 'Bulk tracking'],
    },
    {
        title: 'Multi-Channel Notifications',
        description: 'Reach stakeholders through their preferred channels',
        items: ['Email notifications', 'SMS alerts', 'WhatsApp messages', 'In-app notifications'],
    },
    {
        title: 'Compliance Dashboards',
        description: 'Real-time visibility into compliance status',
        items: ['Expiry calendar', 'Risk indicators', 'Compliance reports', 'Audit trails'],
    },
    {
        title: 'Escalation Workflows',
        description: 'Automated escalation for overdue documents',
        items: ['Multi-level escalation', 'Manager notifications', 'Auto-assignment', 'SLA tracking'],
    },
    {
        title: 'Reports & Analytics',
        description: 'Comprehensive reporting and compliance analytics',
        items: ['Compliance reports', 'Expiry forecasts', 'Department analytics', 'Export to Excel/PDF'],
    },
]

export default function NautifyPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                            <BellAlertIcon className="w-5 h-5 text-purple-400 mr-2" />
                            <span className="text-purple-400 text-sm font-semibold">Document Compliance</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Nautify Document Expiry Platform
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Never miss a document expiry again. Automated tracking, multi-channel notifications,
                            and compliance dashboards for insurance, HR, fleet, and immigration documents.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=nautify-demo" className="btn-primary">
                                Request Demo
                            </Link>
                            <Link href="#features" className="btn-secondary">
                                View Features
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Gallery */}
            <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            See Nautify in Action
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore the intuitive interface and powerful features that make document compliance effortless
                        </p>
                    </div>

                    {/* Responsive Box Carousel */}
                    <div className="max-w-6xl mx-auto relative group">
                        {/* Carousel Container */}
                        <div
                            id="carousel-container"
                            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-12 py-4 gap-4 sm:gap-6 lg:gap-8"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {[
                                { src: '/nautify/01.JPG', title: 'Dashboard Overview', desc: 'Real-time insights' },
                                { src: '/nautify/02.JPG', title: 'Document Management', desc: 'Centralized storage' },
                                { src: '/nautify/03.JPG', title: 'Compliance Tracking', desc: 'Stay compliant' },
                                { src: '/nautify/04.JPG', title: 'Expiry Alerts', desc: 'Never miss a deadline' },
                                { src: '/nautify/05.JPG', title: 'Notifications', desc: 'Multi-channel alerts' },
                                { src: '/nautify/06.JPG', title: 'Reports & Analytics', desc: 'Data-driven decisions' },
                                { src: '/nautify/07.JPG', title: 'User Management', desc: 'Role-based access' },
                                { src: '/nautify/08.JPG', title: 'Settings', desc: 'Customize your experience' },
                                { src: '/nautify/09.JPG', title: 'Search & Filter', desc: 'Find documents fast' },
                                { src: '/nautify/10.JPG', title: 'Calendar View', desc: 'Visual timeline' },
                                { src: '/nautify/11.JPG', title: 'Upload Interface', desc: 'Drag & drop files' },
                                { src: '/nautify/12.JPG', title: 'Document Details', desc: 'Complete metadata' },
                                { src: '/nautify/13.JPG', title: 'Workflow Automation', desc: 'Streamline processes' },
                                { src: '/nautify/14.JPG', title: 'Audit Trail', desc: 'Complete transparency' },
                                { src: '/nautify/15.JPG', title: 'Mobile View', desc: 'Access anywhere' },
                                { src: '/nautify/16.JPG', title: 'Team Collaboration', desc: 'Work together' },
                                { src: '/nautify/17.JPG', title: 'Custom Fields', desc: 'Tailor to your needs' },
                                { src: '/nautify/18.JPG', title: 'Integration Hub', desc: 'Connect your tools' },
                                { src: '/nautify/19.JPG', title: 'Security Center', desc: 'Enterprise-grade protection' },
                                { src: '/nautify/20.JPG', title: 'Batch Operations', desc: 'Bulk actions' },
                                { src: '/nautify/21.JPG', title: 'Version Control', desc: 'Track changes' },
                                { src: '/nautify/22.JPG', title: 'Export Options', desc: 'Multiple formats' },
                            ].map((image, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-[45%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-24px)] snap-center first:pl-2 last:pr-2"
                                >
                                    <button
                                        onClick={() => {
                                            const modal = document.getElementById('image-modal');
                                            const modalImg = document.getElementById('modal-image') as HTMLImageElement;
                                            const modalTitle = document.getElementById('modal-title');
                                            const modalDesc = document.getElementById('modal-desc');
                                            if (modal && modalImg && modalTitle && modalDesc) {
                                                modal.classList.remove('hidden');
                                                modalImg.src = image.src;
                                                modalTitle.textContent = image.title;
                                                modalDesc.textContent = image.desc;
                                                (modal as any).currentIndex = index;
                                            }
                                        }}
                                        className="w-full group/card cursor-pointer text-left h-full block"
                                    >
                                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                                            <div className="aspect-[2/3] relative bg-gray-50">
                                                <img
                                                    src={image.src}
                                                    alt={image.title}
                                                    className="w-full h-full object-cover object-top"
                                                />
                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium flex items-center">
                                                        <span>Expand</span>
                                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3 text-center bg-white border-t border-gray-50 flex-grow">
                                                <h4 className="font-bold text-gray-900 text-sm mb-0.5">{image.title}</h4>
                                                <p className="text-xs text-gray-500 line-clamp-1">{image.desc}</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Previous Button */}
                        <button
                            onClick={() => {
                                const container = document.getElementById('carousel-container');
                                if (container) {
                                    const scrollAmount = container.clientWidth;
                                    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                                }
                            }}
                            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl hover:shadow-2xl flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-200 z-10 opacity-0 group-hover:opacity-100 sm:opacity-100"
                            aria-label="Previous slide"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={() => {
                                const container = document.getElementById('carousel-container');
                                if (container) {
                                    const scrollAmount = container.clientWidth;
                                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                                }
                            }}
                            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl hover:shadow-2xl flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-200 z-10 opacity-0 group-hover:opacity-100 sm:opacity-100"
                            aria-label="Next slide"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* View Demo CTA */}
                    <div className="text-center mt-12">
                        <Link
                            href="/contact?type=nautify-demo"
                            className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Request Live Demo
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Modal for Full-Size Image */}
                <div
                    id="image-modal"
                    className="hidden fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            document.getElementById('image-modal')?.classList.add('hidden');
                        }
                    }}
                >
                    <button
                        onClick={() => document.getElementById('image-modal')?.classList.add('hidden')}
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-white transition-all duration-200 z-[110] backdrop-blur-md"
                        aria-label="Close modal"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={() => {
                            const modal = document.getElementById('image-modal') as any;
                            const images = [
                                { src: '/nautify/01.JPG', title: 'Dashboard Overview', desc: 'Real-time insights' },
                                { src: '/nautify/02.JPG', title: 'Document Management', desc: 'Centralized storage' },
                                { src: '/nautify/03.JPG', title: 'Compliance Tracking', desc: 'Stay compliant' },
                                { src: '/nautify/04.JPG', title: 'Expiry Alerts', desc: 'Never miss a deadline' },
                                { src: '/nautify/05.JPG', title: 'Notifications', desc: 'Multi-channel alerts' },
                                { src: '/nautify/06.JPG', title: 'Reports & Analytics', desc: 'Data-driven decisions' },
                                { src: '/nautify/07.JPG', title: 'User Management', desc: 'Role-based access' },
                                { src: '/nautify/08.JPG', title: 'Settings', desc: 'Customize your experience' },
                                { src: '/nautify/09.JPG', title: 'Search & Filter', desc: 'Find documents fast' },
                                { src: '/nautify/10.JPG', title: 'Calendar View', desc: 'Visual timeline' },
                                { src: '/nautify/11.JPG', title: 'Upload Interface', desc: 'Drag & drop files' },
                                { src: '/nautify/12.JPG', title: 'Document Details', desc: 'Complete metadata' },
                                { src: '/nautify/13.JPG', title: 'Workflow Automation', desc: 'Streamline processes' },
                                { src: '/nautify/14.JPG', title: 'Audit Trail', desc: 'Complete transparency' },
                                { src: '/nautify/15.JPG', title: 'Mobile View', desc: 'Access anywhere' },
                                { src: '/nautify/16.JPG', title: 'Team Collaboration', desc: 'Work together' },
                                { src: '/nautify/17.JPG', title: 'Custom Fields', desc: 'Tailor to your needs' },
                                { src: '/nautify/18.JPG', title: 'Integration Hub', desc: 'Connect your tools' },
                                { src: '/nautify/19.JPG', title: 'Security Center', desc: 'Enterprise-grade protection' },
                                { src: '/nautify/20.JPG', title: 'Batch Operations', desc: 'Bulk actions' },
                                { src: '/nautify/21.JPG', title: 'Version Control', desc: 'Track changes' },
                                { src: '/nautify/22.JPG', title: 'Export Options', desc: 'Multiple formats' },
                            ];
                            const currentIndex = modal.currentIndex || 0;
                            const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                            const modalImg = document.getElementById('modal-image') as HTMLImageElement;
                            const modalTitle = document.getElementById('modal-title');
                            const modalDesc = document.getElementById('modal-desc');
                            if (modalImg && modalTitle && modalDesc) {
                                modalImg.src = images[newIndex].src;
                                modalTitle.textContent = images[newIndex].title;
                                modalDesc.textContent = images[newIndex].desc;
                                modal.currentIndex = newIndex;
                            }
                        }}
                        className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div className="max-w-md w-full">
                        <div className="aspect-[9/16] relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                id="modal-image"
                                src=""
                                alt="Full size screenshot"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="mt-4 text-center text-white">
                            <h3 id="modal-title" className="text-xl font-bold mb-2"></h3>
                            <p id="modal-desc" className="text-white/80"></p>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => {
                            const modal = document.getElementById('image-modal') as any;
                            const images = [
                                { src: '/nautify/01.JPG', title: 'Dashboard Overview', desc: 'Real-time insights' },
                                { src: '/nautify/02.JPG', title: 'Document Management', desc: 'Centralized storage' },
                                { src: '/nautify/03.JPG', title: 'Compliance Tracking', desc: 'Stay compliant' },
                                { src: '/nautify/04.JPG', title: 'Expiry Alerts', desc: 'Never miss a deadline' },
                                { src: '/nautify/05.JPG', title: 'Notifications', desc: 'Multi-channel alerts' },
                                { src: '/nautify/06.JPG', title: 'Reports & Analytics', desc: 'Data-driven decisions' },
                                { src: '/nautify/07.JPG', title: 'User Management', desc: 'Role-based access' },
                                { src: '/nautify/08.JPG', title: 'Settings', desc: 'Customize your experience' },
                                { src: '/nautify/09.JPG', title: 'Search & Filter', desc: 'Find documents fast' },
                                { src: '/nautify/10.JPG', title: 'Calendar View', desc: 'Visual timeline' },
                                { src: '/nautify/11.JPG', title: 'Upload Interface', desc: 'Drag & drop files' },
                                { src: '/nautify/12.JPG', title: 'Document Details', desc: 'Complete metadata' },
                                { src: '/nautify/13.JPG', title: 'Workflow Automation', desc: 'Streamline processes' },
                                { src: '/nautify/14.JPG', title: 'Audit Trail', desc: 'Complete transparency' },
                                { src: '/nautify/15.JPG', title: 'Mobile View', desc: 'Access anywhere' },
                                { src: '/nautify/16.JPG', title: 'Team Collaboration', desc: 'Work together' },
                                { src: '/nautify/17.JPG', title: 'Custom Fields', desc: 'Tailor to your needs' },
                                { src: '/nautify/18.JPG', title: 'Integration Hub', desc: 'Connect your tools' },
                                { src: '/nautify/19.JPG', title: 'Security Center', desc: 'Enterprise-grade protection' },
                                { src: '/nautify/20.JPG', title: 'Batch Operations', desc: 'Bulk actions' },
                                { src: '/nautify/21.JPG', title: 'Version Control', desc: 'Track changes' },
                                { src: '/nautify/22.JPG', title: 'Export Options', desc: 'Multiple formats' },
                            ];
                            const currentIndex = modal.currentIndex || 0;
                            const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                            const modalImg = document.getElementById('modal-image') as HTMLImageElement;
                            const modalTitle = document.getElementById('modal-title');
                            const modalDesc = document.getElementById('modal-desc');
                            if (modalImg && modalTitle && modalDesc) {
                                modalImg.src = images[newIndex].src;
                                modalTitle.textContent = images[newIndex].title;
                                modalDesc.textContent = images[newIndex].desc;
                                modal.currentIndex = newIndex;
                            }
                        }}
                        className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Industry Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nautify adapts to your industry's specific document tracking needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <Link
                                key={index}
                                href={`/products/saas/nautify/${useCase.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="card-enterprise p-8 hover:scale-105 transition-transform duration-200"
                            >
                                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3">
                                    {useCase.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">{useCase.description}</p>
                                <div className="space-y-2">
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Common Documents:</div>
                                    {useCase.documents.map((doc, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-2" />
                                            {doc}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 text-purple-600 font-semibold flex items-center">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-16 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Powerful Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need for comprehensive document compliance management
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <Link
                                key={index}
                                href={`/products/saas/nautify/features/${feature.title === 'Document Upload & Storage' ? 'document-upload' :
                                    feature.title === 'Reports & Analytics' ? 'reports' :
                                        feature.title === 'Escalation Workflows' ? 'escalation' :
                                            feature.title === 'Compliance Dashboards' ? 'dashboards' :
                                                feature.title === 'Multi-Channel Notifications' ? 'notifications' :
                                                    'expiry-tracking'
                                    }`}
                                className="card-enterprise p-8 hover:scale-105 transition-transform duration-200"
                            >
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                            <CheckCircleIcon className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 text-purple-600 font-semibold flex items-center">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            How Nautify Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple 4-step process to stay compliant
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Upload Documents', desc: 'Upload documents with expiry dates' },
                            { step: '2', title: 'Set Alerts', desc: 'Configure notification schedules' },
                            { step: '3', title: 'Get Notified', desc: 'Receive timely reminders' },
                            { step: '4', title: 'Stay Compliant', desc: 'Renew before expiry' },
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-sm text-gray-600">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                            Choose the plan that fits your organization
                        </p>

                        {/* Free Trial Banner */}
                        <div className="inline-flex flex-col items-center justify-center px-8 py-6 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl mb-12">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-3xl font-bold text-white">30 Days Absolutely FREE</span>
                            </div>
                            <p className="text-white/90 text-sm mb-4">No credit card required • Cancel anytime</p>
                            <Link
                                href="/contact?type=nautify-trial"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Start Free Trial Now
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: 'Starter',
                                price: '$49',
                                offerPrice: '$19.60',
                                period: '/month/user',
                                description: 'Perfect for small teams',
                                features: ['Up to 500 documents', '1 users', 'Email notifications', 'Basic reports'],
                            },
                            {
                                name: 'Professional',
                                price: '$149',
                                offerPrice: '$89.40',
                                period: '/month/user',
                                description: 'For growing organizations',
                                features: ['Up to 5,000 documents', '1 users', 'Multi-channel alerts', 'Advanced reports', 'API access'],
                                popular: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                offerPrice: null,
                                period: '',
                                description: 'For large organizations',
                                features: ['Unlimited documents', 'Unlimited users', 'Custom integrations', 'Dedicated support', 'SLA guarantee'],
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`card-enterprise p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 shadow-2xl' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-purple-600 text-white text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                                <div className="mb-4">
                                    {plan.offerPrice ? (
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through mb-1">
                                                {plan.price}{plan.period}
                                            </span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.offerPrice}</span>
                                                <span className="text-gray-600 dark:text-gray-300">{plan.period}</span>
                                            </div>
                                            <span className="text-xs text-purple-600 font-semibold mt-1">Offer Price</span>
                                        </div>
                                    ) : (
                                        <>
                                            <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                                            <span className="text-gray-600 dark:text-gray-300">{plan.period}</span>
                                        </>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/contact?type=nautify-${plan.name.toLowerCase()}`}
                                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Start Tracking Documents Today
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join hundreds of organizations using Nautify to stay compliant
                    </p>
                    <Link href="/contact?type=nautify-demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Start Free Trial
                    </Link>
                </div>
            </section>
        </>
    )
}
