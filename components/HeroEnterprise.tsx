import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface HeroEnterpriseProps {
    headline: string
    subheadline: string
    description: string
    primaryCTA: {
        text: string
        href: string
    }
    secondaryCTA?: {
        text: string
        href: string
    }
    stats?: Array<{
        value: string
        label: string
    }>
}

export default function HeroEnterprise({
    headline,
    subheadline,
    description,
    primaryCTA,
    secondaryCTA,
    stats,
}: HeroEnterpriseProps) {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container-custom section-padding relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <span className="text-primary-400 text-sm font-semibold">{subheadline}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            {headline}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href={primaryCTA.href} className="btn-primary group">
                                {primaryCTA.text}
                                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            {secondaryCTA && (
                                <Link href={secondaryCTA.href} className="btn-secondary">
                                    {secondaryCTA.text}
                                </Link>
                            )}
                        </div>
                        {stats && stats.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                                        <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="relative animate-fade-in animation-delay-200">
                        <div className="relative z-10">
                            <div className="card-enterprise p-8 glass-effect">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow"></div>
                                        <span className="text-white font-semibold">99.99% Uptime SLA</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse-slow animation-delay-200"></div>
                                        <span className="text-white font-semibold">24/7 NOC Support</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse-slow animation-delay-400"></div>
                                        <span className="text-white font-semibold">SOC2 & ISO 27001</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse-slow animation-delay-600"></div>
                                        <span className="text-white font-semibold">UAE Data Residency</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
