import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { ComputerDesktopIcon } from '@heroicons/react/24/solid'

export const metadata = genMeta({
    title: 'Workstations - Dell Precision, HP Z Series',
    description:
        'High-performance workstations for CAD, 3D rendering, AI/ML, and video editing. Dell Precision, HP Z Series, Lenovo ThinkStation with professional GPUs.',
    keywords: ['workstation UAE', 'CAD workstation', 'Dell Precision', 'HP Z Series', 'rendering workstation'],
})

const workstations = [
    {
        series: 'Dell Precision',
        models: ['3660 Tower', '5860 Tower', '7960 Tower'],
        cpu: 'Intel Xeon W / Core i9',
        gpu: 'NVIDIA RTX A2000 - RTX A6000',
        useCases: ['CAD/CAM', '3D Rendering', 'Video Editing'],
    },
    {
        series: 'HP Z Series',
        models: ['Z2 Tower', 'Z4 G5', 'Z8 G5'],
        cpu: 'Intel Xeon W / Core i9',
        gpu: 'NVIDIA RTX A2000 - RTX A6000',
        useCases: ['Engineering', 'Architecture', 'Media Production'],
    },
    {
        series: 'Lenovo ThinkStation',
        models: ['P360', 'P520', 'P920'],
        cpu: 'Intel Xeon W / AMD Threadripper',
        gpu: 'NVIDIA RTX A2000 - RTX A6000',
        useCases: ['AI/ML Development', 'Scientific Computing', 'VFX'],
    },
]

export default function WorkstationsPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                            <ComputerDesktopIcon className="w-5 h-5 text-purple-400 mr-2" />
                            <span className="text-purple-400 text-sm font-semibold">Professional Workstations</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            High-Performance Workstations
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Professional workstations for CAD, 3D rendering, AI/ML, and content creation.
                            Configured with Intel Xeon processors and NVIDIA professional GPUs.
                        </p>
                        <Link href="/contact?type=workstation-quote" className="btn-primary">
                            Request Quote
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {workstations.map((ws, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{ws.series}</h3>
                                <div className="space-y-3 mb-6">
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">CPU:</div>
                                        <div className="text-sm text-gray-600">{ws.cpu}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">GPU:</div>
                                        <div className="text-sm text-gray-600">{ws.gpu}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900 mb-1">Models:</div>
                                        <ul className="space-y-1">
                                            {ws.models.map((model, idx) => (
                                                <li key={idx} className="text-sm text-gray-600">• {model}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900 mb-1">Use Cases:</div>
                                        <ul className="space-y-1">
                                            {ws.useCases.map((useCase, idx) => (
                                                <li key={idx} className="text-sm text-gray-600">• {useCase}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-purple-600 to-pink-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Power Your Creative Work
                    </h2>
                    <Link href="/contact?type=workstation-quote" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200">
                        Request Quote
                    </Link>
                </div>
            </section>
        </>
    )
}
