import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Service Level Agreement (SLA) | AEROSYNS',
    description: 'Service Level Agreement for AEROSYNS - Review our service commitments, uptime guarantees, and support terms.',
}

export default function SLAPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="container-custom py-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Service Level Agreement (SLA)
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Last Updated: December 25, 2024
                    </p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
                            <p className="text-gray-700 mb-4">
                                This Service Level Agreement ("SLA") describes the service commitments AEROSYNS makes regarding uptime, performance, and support for our services. This SLA applies to customers with active service subscriptions.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Availability</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Uptime Commitment</h3>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
                                <p className="text-gray-700 font-semibold mb-2">Standard SLA: 99.9% Monthly Uptime</p>
                                <p className="text-gray-700 mb-2">Enterprise SLA: 99.95% Monthly Uptime</p>
                                <p className="text-gray-700">Premium SLA: 99.99% Monthly Uptime</p>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Uptime Calculation</h3>
                            <p className="text-gray-700 mb-4">
                                Uptime percentage is calculated as: (Total Minutes in Month - Downtime Minutes) / Total Minutes in Month × 100
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Exclusions</h3>
                            <p className="text-gray-700 mb-4">The following are excluded from uptime calculations:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Scheduled maintenance windows (notified 72 hours in advance)</li>
                                <li>Emergency maintenance (security patches, critical updates)</li>
                                <li>Issues caused by customer's infrastructure or applications</li>
                                <li>Force majeure events</li>
                                <li>Third-party service provider failures</li>
                                <li>DDoS attacks or security incidents</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Performance Metrics</h2>

                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full bg-white border border-gray-300">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Metric</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Target</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 text-gray-700">API Response Time (95th percentile)</td>
                                            <td className="px-6 py-4 text-gray-700">&lt; 200ms</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 text-gray-700">Page Load Time</td>
                                            <td className="px-6 py-4 text-gray-700">&lt; 2 seconds</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 text-gray-700">Database Query Performance</td>
                                            <td className="px-6 py-4 text-gray-700">&lt; 100ms average</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-gray-700">Data Backup Frequency</td>
                                            <td className="px-6 py-4 text-gray-700">Every 24 hours</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Support Services</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Support Tiers</h3>

                            <div className="space-y-6 mb-6">
                                <div className="border border-gray-300 rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">Standard Support</h4>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Business hours: 9 AM - 6 PM (Mon-Fri, UAE time)</li>
                                        <li>Email and ticket support</li>
                                        <li>Response time: 24 hours for normal priority</li>
                                        <li>Knowledge base access</li>
                                    </ul>
                                </div>

                                <div className="border border-gray-300 rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">Premium Support</h4>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>24/7 support availability</li>
                                        <li>Phone, email, and ticket support</li>
                                        <li>Response time: 4 hours for high priority</li>
                                        <li>Dedicated account manager</li>
                                        <li>Quarterly business reviews</li>
                                    </ul>
                                </div>

                                <div className="border border-gray-300 rounded-lg p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">Enterprise Support</h4>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>24/7/365 support with dedicated team</li>
                                        <li>All communication channels</li>
                                        <li>Response time: 1 hour for critical issues</li>
                                        <li>Named technical account manager</li>
                                        <li>Custom SLA terms available</li>
                                        <li>Proactive monitoring and alerts</li>
                                    </ul>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Response Time Commitments</h3>
                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full bg-white border border-gray-300">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Priority Level</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Response Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 text-gray-700 font-semibold">Critical (P1)</td>
                                            <td className="px-6 py-4 text-gray-700">Service completely unavailable</td>
                                            <td className="px-6 py-4 text-gray-700">1 hour</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 text-gray-700 font-semibold">High (P2)</td>
                                            <td className="px-6 py-4 text-gray-700">Major functionality impaired</td>
                                            <td className="px-6 py-4 text-gray-700">4 hours</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 text-gray-700 font-semibold">Medium (P3)</td>
                                            <td className="px-6 py-4 text-gray-700">Minor functionality issues</td>
                                            <td className="px-6 py-4 text-gray-700">24 hours</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-gray-700 font-semibold">Low (P4)</td>
                                            <td className="px-6 py-4 text-gray-700">General inquiries</td>
                                            <td className="px-6 py-4 text-gray-700">48 hours</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Maintenance Windows</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Scheduled Maintenance</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Standard window: Sundays 2:00 AM - 6:00 AM UAE time</li>
                                <li>Advance notice: 72 hours minimum</li>
                                <li>Maximum duration: 4 hours per month</li>
                                <li>Customer notification via email and dashboard</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Emergency Maintenance</h3>
                            <p className="text-gray-700 mb-4">
                                Emergency maintenance may be performed with minimal notice for critical security patches or system stability issues.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Protection and Backup</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Backup Policy</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Daily automated backups</li>
                                <li>30-day retention period</li>
                                <li>Geo-redundant storage</li>
                                <li>Point-in-time recovery available</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Disaster Recovery</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Recovery Time Objective (RTO): 4 hours</li>
                                <li>Recovery Point Objective (RPO): 24 hours</li>
                                <li>Annual disaster recovery testing</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Security Commitments</h2>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>ISO 27001 certified security practices</li>
                                <li>SOC 2 Type II compliance</li>
                                <li>Data encryption in transit and at rest</li>
                                <li>Regular security audits and penetration testing</li>
                                <li>24/7 security monitoring</li>
                                <li>Incident response within 2 hours</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Credits</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Credit Calculation</h3>
                            <p className="text-gray-700 mb-4">
                                If we fail to meet our uptime commitment, you may be eligible for service credits:
                            </p>
                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full bg-white border border-gray-300">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Monthly Uptime</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Service Credit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 text-gray-700">99.0% - 99.9%</td>
                                            <td className="px-6 py-4 text-gray-700">10% of monthly fee</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 text-gray-700">95.0% - 99.0%</td>
                                            <td className="px-6 py-4 text-gray-700">25% of monthly fee</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-gray-700">&lt; 95.0%</td>
                                            <td className="px-6 py-4 text-gray-700">50% of monthly fee</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Credit Request Process</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Submit credit request within 30 days of incident</li>
                                <li>Provide detailed incident information</li>
                                <li>Credits applied to next billing cycle</li>
                                <li>Maximum credit: 50% of monthly subscription fee</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Monitoring and Reporting</h2>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Real-time service status dashboard</li>
                                <li>Monthly uptime reports</li>
                                <li>Performance metrics tracking</li>
                                <li>Incident post-mortems for major outages</li>
                                <li>Quarterly service reviews (Premium/Enterprise)</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Customer Responsibilities</h2>
                            <p className="text-gray-700 mb-4">To receive SLA benefits, customers must:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Maintain current contact information</li>
                                <li>Report issues promptly through official channels</li>
                                <li>Provide necessary access for troubleshooting</li>
                                <li>Follow recommended best practices</li>
                                <li>Maintain valid payment information</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. SLA Modifications</h2>
                            <p className="text-gray-700 mb-4">
                                We reserve the right to modify this SLA with 30 days' notice. Material changes will be communicated via email and dashboard notifications.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                            <p className="text-gray-700 mb-4">
                                For SLA-related inquiries or to report service issues:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-2"><strong>AEROSYNS Support</strong></p>
                                <p className="text-gray-700 mb-2"><strong>Headquarters:</strong> Abu Dhabi, UAE</p>
                                <p className="text-gray-700 mb-2">Phone: +971 556725264</p>
                                <p className="text-gray-700 mb-2">Emergency Hotline: +971 556725264 (24/7)</p>
                                <p className="text-gray-700 mb-2">Email: support@aerosyns.com</p>
                                <p className="text-gray-700 mb-2">Support Portal: support.aerosyns.com</p>
                                <p className="text-gray-700">Status Page: status.aerosyns.com</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}
