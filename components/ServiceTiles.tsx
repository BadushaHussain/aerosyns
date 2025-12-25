import Link from 'next/link'

interface ServiceTile {
    title: string
    description: string
    icon: React.ReactNode
    href: string
    features: string[]
}

interface ServiceTilesProps {
    tiles: ServiceTile[]
}

export default function ServiceTiles({ tiles }: ServiceTilesProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiles.map((tile, index) => (
                <Link
                    key={index}
                    href={tile.href}
                    className="card-enterprise p-8 group hover:scale-105 transition-all duration-300"
                >
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-6 group-hover:shadow-xl transition-shadow">
                        <div className="text-white">{tile.icon}</div>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3">
                        {tile.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {tile.description}
                    </p>
                    <ul className="space-y-2">
                        {tile.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                <svg
                                    className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                        Learn more
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </div>
                </Link>
            ))}
        </div>
    )
}
