'use client'

import Link from 'next/link'
import { CheckCircleIcon, CloudArrowUpIcon, DocumentTextIcon, FolderIcon } from '@heroicons/react/24/outline'

export default function DocumentUploadPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-display font-bold mb-6">
                            Document Upload & Storage
                        </h1>
                        <p className="text-xl mb-8 text-blue-100">
                            Secure cloud storage with OCR and intelligent metadata extraction
                        </p>
                        <Link
                            href="/contact?type=nautify-upload"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                        >
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
                        Powerful Upload & Storage Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: 'Drag-and-Drop Upload',
                                description: 'Simply drag files from your computer directly into Nautify. Supports bulk uploads of multiple documents at once.',
                                icon: CloudArrowUpIcon,
                                benefits: ['Batch upload hundreds of files', 'Progress tracking', 'Resume interrupted uploads']
                            },
                            {
                                title: 'OCR Text Extraction',
                                description: 'Automatically extract text from scanned documents and images using advanced OCR technology.',
                                icon: DocumentTextIcon,
                                benefits: ['Searchable documents', 'Data extraction', 'Multi-language support']
                            },
                            {
                                title: 'Automatic Categorization',
                                description: 'AI-powered categorization automatically organizes documents by type, department, and expiry date.',
                                icon: FolderIcon,
                                benefits: ['Smart tagging', 'Auto-filing', 'Custom categories']
                            },
                            {
                                title: 'Version Control',
                                description: 'Track document revisions with complete version history and rollback capabilities.',
                                icon: CheckCircleIcon,
                                benefits: ['Revision history', 'Compare versions', 'Restore previous versions']
                            }
                        ].map((feature, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                            <CheckCircleIcon className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
                        How Document Upload Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { step: '1', title: 'Upload', description: 'Drag and drop your documents or select files from your computer' },
                            { step: '2', title: 'Extract', description: 'OCR automatically extracts text and metadata from your documents' },
                            { step: '3', title: 'Categorize', description: 'AI categorizes and tags documents automatically' },
                            { step: '4', title: 'Store', description: 'Documents are securely stored in the cloud with version control' }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supported Formats */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
                        Supported File Formats
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {['PDF', 'DOCX', 'XLSX', 'JPG', 'PNG', 'TIFF', 'CSV', 'TXT'].map((format, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <div className="text-2xl font-bold text-blue-600 mb-2">{format}</div>
                                <div className="text-sm text-gray-600">Supported</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold mb-6">
                        Ready to Streamline Your Document Management?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        Start uploading and organizing your documents with intelligent automation
                    </p>
                    <Link
                        href="/contact?type=nautify-upload"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                    >
                        Start Your 30-Day Free Trial
                    </Link>
                </div>
            </section>
        </main>
    )
}
