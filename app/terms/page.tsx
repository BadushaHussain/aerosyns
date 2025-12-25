import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service | AEROSYNS',
    description: 'Terms of Service for AEROSYNS - Review the terms and conditions for using our services.',
}

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="container-custom py-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Last Updated: December 25, 2024
                    </p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 mb-4">
                                By accessing or using AEROSYNS services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
                            <p className="text-gray-700 mb-4">
                                AEROSYNS provides enterprise IT solutions including:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Cloud infrastructure and managed services</li>
                                <li>SaaS applications (Nizsoft, SafeInn, HRMS, CRM, etc.)</li>
                                <li>AI and data analytics solutions</li>
                                <li>Cybersecurity services</li>
                                <li>Airport and railway IT solutions</li>
                                <li>Professional services and consulting</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Account Registration</h3>
                            <p className="text-gray-700 mb-4">
                                You must provide accurate, current, and complete information during registration and maintain the accuracy of such information.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Security</h3>
                            <p className="text-gray-700 mb-4">
                                You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Account Termination</h3>
                            <p className="text-gray-700 mb-4">
                                We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activities.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
                            <p className="text-gray-700 mb-4">You agree not to:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe on intellectual property rights</li>
                                <li>Transmit malicious code or viruses</li>
                                <li>Attempt unauthorized access to our systems</li>
                                <li>Interfere with service operations</li>
                                <li>Use services for illegal or harmful purposes</li>
                                <li>Resell or redistribute services without authorization</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Our IP Rights</h3>
                            <p className="text-gray-700 mb-4">
                                All content, software, and materials provided through our Services are owned by AEROSYNS or our licensors and protected by intellectual property laws.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Your Content</h3>
                            <p className="text-gray-700 mb-4">
                                You retain ownership of content you upload to our Services. By uploading content, you grant us a license to use, store, and process it to provide our Services.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Fees and Billing</h3>
                            <p className="text-gray-700 mb-4">
                                You agree to pay all fees associated with your subscription or service usage as outlined in your service agreement.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Payment Methods</h3>
                            <p className="text-gray-700 mb-4">
                                We accept various payment methods. You authorize us to charge your chosen payment method for recurring fees.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Refunds</h3>
                            <p className="text-gray-700 mb-4">
                                Refund policies are outlined in your specific service agreement or SLA.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
                            <p className="text-gray-700 mb-4">
                                While we strive for high availability, we do not guarantee uninterrupted service. Scheduled maintenance and unforeseen issues may cause temporary service disruptions.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Protection and Privacy</h2>
                            <p className="text-gray-700 mb-4">
                                Our collection and use of personal information is governed by our Privacy Policy. By using our Services, you consent to such collection and use.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Warranties and Disclaimers</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Service Warranty</h3>
                            <p className="text-gray-700 mb-4">
                                We warrant that our Services will perform substantially as described in our documentation.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Disclaimer</h3>
                            <p className="text-gray-700 mb-4">
                                EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                            <p className="text-gray-700 mb-4">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AEROSYNS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
                            <p className="text-gray-700 mb-4">
                                You agree to indemnify and hold AEROSYNS harmless from any claims, damages, or expenses arising from your use of our Services or violation of these Terms.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Term and Termination</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.1 Term</h3>
                            <p className="text-gray-700 mb-4">
                                These Terms remain in effect while you use our Services.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.2 Termination</h3>
                            <p className="text-gray-700 mb-4">
                                Either party may terminate the agreement with appropriate notice as specified in your service agreement.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.3 Effect of Termination</h3>
                            <p className="text-gray-700 mb-4">
                                Upon termination, your right to use the Services will cease, and we may delete your data according to our retention policies.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modifications to Terms</h2>
                            <p className="text-gray-700 mb-4">
                                We reserve the right to modify these Terms at any time. We will notify you of material changes. Continued use of Services after changes constitutes acceptance.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
                            <p className="text-gray-700 mb-4">
                                These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of Dubai.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
                            <p className="text-gray-700 mb-4">
                                For questions about these Terms, please contact us:
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
