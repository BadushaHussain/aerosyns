'use client'

import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export interface ProductCardProps {
    name: string
    tagline?: string
    description: string
    href: string
    icon?: React.ReactNode
    features?: string[]
    price?: string
    priceLabel?: string
    color?: string
    badge?: string
    imageUrl?: string
}

export default function ProductCard({
    name,
    tagline,
    description,
    href,
    icon,
    features = [],
    price,
    priceLabel,
    color = 'from-primary-500 to-secondary-500',
    badge,
    imageUrl,
}: ProductCardProps) {
    return (
        <Link
            href={href}
            className="card-enterprise p-8 group hover:scale-105 transition-all duration-300 flex flex-col h-full"
        >
            {/* Badge */}
            {badge && (
                <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">
                        {badge}
                    </span>
                </div>
            )}

            {/* Icon or Image */}
            {imageUrl ? (
                <div className="mb-6 rounded-lg overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
            ) : icon ? (
                <div
                    className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${color} mb-6 group-hover:shadow-xl transition-shadow`}
                >
                    <div className="text-white">{icon}</div>
                </div>
            ) : null}

            {/* Content */}
            <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                    {name}
                </h3>

                {tagline && (
                    <p className="text-sm text-primary-600 font-semibold mb-3">{tagline}</p>
                )}

                <p className="text-gray-600 mb-6">{description}</p>

                {/* Features List */}
                {features.length > 0 && (
                    <ul className="space-y-2 mb-6 flex-1">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                                <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Price */}
                {price && (
                    <div className="mb-6">
                        <div className="text-3xl font-bold text-gray-900">{price}</div>
                        {priceLabel && <div className="text-sm text-gray-600">{priceLabel}</div>}
                    </div>
                )}

                {/* CTA */}
                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform mt-auto">
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
            </div>
        </Link>
    )
}
