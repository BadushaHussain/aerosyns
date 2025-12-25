import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | AEROSYNS',
    description: 'Privacy Policy for AEROSYNS - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="container-custom py-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Last Updated: December 25, 2024
                    </p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="text-gray-700 mb-4">
                                AEROSYNS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
                            <p className="text-gray-700 mb-4">We may collect personal information that you provide to us, including:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Name and contact information (email address, phone number, mailing address)</li>
                                <li>Company name and job title</li>
                                <li>Account credentials</li>
                                <li>Payment and billing information</li>
                                <li>Communication preferences</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
                            <p className="text-gray-700 mb-4">When you access our services, we automatically collect:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>IP address and device information</li>
                                <li>Browser type and version</li>
                                <li>Usage data and analytics</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-700 mb-4">We use the collected information for:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Providing and maintaining our services</li>
                                <li>Processing transactions and billing</li>
                                <li>Communicating with you about our services</li>
                                <li>Improving our products and services</li>
                                <li>Ensuring security and preventing fraud</li>
                                <li>Complying with legal obligations</li>
                                <li>Marketing and promotional purposes (with your consent)</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
                            <p className="text-gray-700 mb-4">We may share your information with:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
                                <li><strong>Business Partners:</strong> With your consent for joint offerings</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                We do not sell your personal information to third parties.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                            <p className="text-gray-700 mb-4">
                                We implement appropriate technical and organizational measures to protect your personal information, including:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Regular security assessments and audits</li>
                                <li>Access controls and authentication mechanisms</li>
                                <li>Employee training on data protection</li>
                                <li>Incident response procedures</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                            <p className="text-gray-700 mb-4">
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                            <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li><strong>Access:</strong> Request access to your personal information</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Portability:</strong> Request transfer of your data</li>
                                <li><strong>Objection:</strong> Object to processing of your data</li>
                                <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking</h2>
                            <p className="text-gray-700 mb-4">
                                We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
                            <p className="text-gray-700 mb-4">
                                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                            <p className="text-gray-700 mb-4">
                                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
                            <p className="text-gray-700 mb-4">
                                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                            <p className="text-gray-700 mb-4">
                                If you have questions about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-2"><strong>AEROSYNS</strong></p>
                                <p className="text-gray-700 mb-2"><strong>Headquarters:</strong> Abu Dhabi, UAE</p>
                                <p className="text-gray-700 mb-2">Phone: +971 556725264</p>
                                <p className="text-gray-700 mb-2">General: info@aerosyns.com</p>
                                <p className="text-gray-700">Sales: sales@aerosyns.com</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}
