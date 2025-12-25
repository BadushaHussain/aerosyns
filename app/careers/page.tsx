import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'Careers - Join Our Team',
    description:
        'Join Aerosyns team. Open positions for engineers, architects, and IT professionals. Competitive salary, benefits, and career growth opportunities.',
    keywords: ['careers', 'jobs', 'IT jobs UAE', 'engineer jobs', 'Aerosyns careers'],
})

const openings = [
    {
        title: 'Senior Infrastructure Engineer',
        department: 'Engineering',
        location: 'Dubai, UAE',
        type: 'Full-time',
        description: 'Design and implement enterprise infrastructure solutions',
    },
    {
        title: 'Cloud Solutions Architect',
        department: 'Solutions',
        location: 'Dubai, UAE',
        type: 'Full-time',
        description: 'Lead cloud migration and transformation projects',
    },
    {
        title: 'Cybersecurity Specialist',
        department: 'Security',
        location: 'Dubai, UAE',
        type: 'Full-time',
        description: 'Manage security operations and compliance',
    },
    {
        title: 'DevOps Engineer',
        department: 'Engineering',
        location: 'Dubai, UAE',
        type: 'Full-time',
        description: 'Build and maintain CI/CD pipelines and automation',
    },
]

export default function CareersPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            Join Our Team
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Build your career with Aerosyns. Work on cutting-edge projects with the latest technologies.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Why Work With Us?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Cutting-Edge Projects', desc: 'Work on enterprise-scale infrastructure and AI projects' },
                            { title: 'Career Growth', desc: 'Continuous learning and certification opportunities' },
                            { title: 'Competitive Benefits', desc: 'Attractive salary, health insurance, and perks' },
                            { title: 'Work-Life Balance', desc: 'Flexible working arrangements' },
                            { title: 'Diverse Team', desc: 'Collaborative, multicultural environment' },
                            { title: 'Latest Technology', desc: 'Access to cutting-edge tools and platforms' },
                        ].map((benefit, index) => (
                            <div key={index} className="card-enterprise p-6 text-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Open Positions
                        </h2>
                    </div>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        {openings.map((job, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                        <p className="text-gray-600 mb-4">{job.description}</p>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                                                {job.department}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                                                {job.location}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        href={`/contact?type=career&position=${encodeURIComponent(job.title)}`}
                                        className="ml-6 btn-primary whitespace-nowrap"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Don't See Your Role?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Send us your resume and we'll keep you in mind for future opportunities
                    </p>
                    <Link href="/contact?type=career" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Submit Resume
                    </Link>
                </div>
            </section>
        </>
    )
}
