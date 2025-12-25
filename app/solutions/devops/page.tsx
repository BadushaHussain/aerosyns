import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'

export const metadata = genMeta({
    title: 'DevOps & Automation Solutions',
    description:
        'Implement DevOps practices with CI/CD pipelines, infrastructure as code, container orchestration, and monitoring. Accelerate software delivery.',
    keywords: ['DevOps', 'CI/CD', 'infrastructure as code', 'Kubernetes', 'automation'],
})

export default function DevOpsPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            DevOps & Automation
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Accelerate software delivery with DevOps practices. CI/CD pipelines, infrastructure
                            as code, container orchestration, and comprehensive monitoring.
                        </p>
                        <Link href="/contact?type=devops" className="btn-primary">
                            Start DevOps Journey
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'CI/CD Pipelines', desc: 'Automated build, test, and deployment' },
                            { title: 'Infrastructure as Code', desc: 'Terraform, CloudFormation, Ansible' },
                            { title: 'Container Orchestration', desc: 'Kubernetes, Docker, ECS' },
                            { title: 'Monitoring & Logging', desc: 'Prometheus, Grafana, ELK stack' },
                            { title: 'GitOps', desc: 'Git-based deployment workflows' },
                            { title: 'Security Automation', desc: 'DevSecOps and compliance as code' },
                        ].map((service, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-orange-600 to-yellow-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Automate Your Delivery
                    </h2>
                    <Link href="/contact?type=devops" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-orange-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
