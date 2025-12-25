import { Metadata } from 'next'

interface SEOConfig {
    title: string
    description: string
    keywords?: string[]
    canonical?: string
    ogImage?: string
    ogType?: string
    twitterCard?: 'summary' | 'summary_large_image'
    noindex?: boolean
}

export function generateMetadata(config: SEOConfig): Metadata {
    const {
        title,
        description,
        keywords = [],
        canonical,
        ogImage = '/images/og-default.jpg',
        ogType = 'website',
        twitterCard = 'summary_large_image',
        noindex = false,
    } = config

    const fullTitle = title.includes('Aerosyns') ? title : `${title} | Aerosyns`
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aerosyns.com'

    return {
        title: fullTitle,
        description,
        keywords: keywords.join(', '),
        authors: [{ name: 'Aerosyns' }],
        creator: 'Aerosyns',
        publisher: 'Aerosyns',
        robots: noindex ? 'noindex, nofollow' : 'index, follow',
        alternates: {
            canonical: canonical || baseUrl,
        },
        openGraph: {
            title: fullTitle,
            description,
            url: canonical || baseUrl,
            siteName: 'Aerosyns',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: 'en_AE',
            type: ogType as any,
        },
        twitter: {
            card: twitterCard,
            title: fullTitle,
            description,
            images: [ogImage],
            creator: '@aerosyns',
        },
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
        },
    }
}

export const defaultSEO: SEOConfig = {
    title: 'Aerosyns - Enterprise IT & AI Infrastructure Solutions',
    description:
        'Full-lifecycle IT and AI infrastructure services for enterprises in UAE and MENA. Structured cabling, Tier-ready datacenters, cloud engineering, GPU/HPC clusters, cybersecurity, and managed services with 99.99% SLA.',
    keywords: [
        'enterprise IT UAE',
        'datacenter infrastructure',
        'AI infrastructure',
        'GPU clusters',
        'cloud engineering',
        'cybersecurity UAE',
        'managed IT services',
        'structured cabling',
        'HPC solutions',
        'hybrid cloud',
        'SOC2 compliance',
        'enterprise SaaS',
    ],
}
