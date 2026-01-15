'use client'

import Link from 'next/link'

export default function InternshipTermsPage() {
    return (
        <div className="bg-white min-h-screen py-24">
            <section className="bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Internship Program – Terms & Disclaimer
                            </h1>
                            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                                (Kerala Campus Outreach)
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-sm text-gray-600 leading-relaxed text-justify mb-12">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Program Nature</h4>
                                <p>The internship program is an opportunity-based learning initiative intended to provide eligible candidates with practical exposure to software engineering and technology-related projects. The program is educational in nature and does not constitute employment.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Eligibility & Selection</h4>
                                <p>Participation is open to newly graduated candidates or final-year students from Computer Science or related disciplines from recognized institutions. Selection is based on academic background, technical assessment, aptitude, availability, and organizational requirements. Meeting eligibility criteria does not guarantee selection.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Project Assignment</h4>
                                <p>Interns may be assigned to internal or client-related projects based on business needs, skill alignment, and project availability. The scope, duration, and nature of assignments may vary and are subject to change at the company’s discretion.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">No Guarantee of Employment</h4>
                                <p>Completion of the internship does not guarantee employment or future engagement with the company. While interns who demonstrate strong performance, professionalism, and alignment with company values may be considered for future roles, any such consideration is subject to business needs, formal hiring processes, and applicable approvals.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Performance Evaluation</h4>
                                <p>Intern performance may be evaluated based on technical contribution, learning progress, adherence to company policies, teamwork, and professional conduct. Evaluation outcomes are internal and non-binding.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Confidentiality & Conduct</h4>
                                <p>Interns are required to comply with all company policies, including confidentiality, information security, and professional conduct guidelines. Any violation may result in immediate termination of the internship.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Program Modification or Discontinuation</h4>
                                <p>The company reserves the right to modify, suspend, or discontinue the internship program, in whole or in part, at any time without prior notice, subject to applicable laws.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">No Fees or Placement Assurance</h4>
                                <p>The company does not charge any fees for participation in the internship program and does not provide placement guarantees. Candidates are advised to rely only on official company communication channels.</p>
                            </div>

                            <div className="md:col-span-2 border-t border-gray-200 pt-6 mt-2">
                                <h4 className="font-bold text-gray-900 mb-2">Governing Policies</h4>
                                <p>All internship-related decisions are made at the sole discretion of the company and in accordance with applicable laws, internal policies, and operational requirements.</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-8 text-center">
                            <Link href="/company/india/internships" className="text-blue-600 hover:text-blue-800 font-medium">
                                ← Back to Internship Program
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
