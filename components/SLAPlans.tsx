'use client'

import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'

interface SLAFeature {
    name: string
    bronze: boolean | string
    silver: boolean | string
    gold: boolean | string
    platinum: boolean | string
}

interface SLAPlan {
    name: string
    price: string
    period: string
    description: string
    popular?: boolean
}

const plans: SLAPlan[] = [
    {
        name: 'Bronze',
        price: '$499',
        period: '/month',
        description: 'Basic support for small teams',
    },
    {
        name: 'Silver',
        price: '$999',
        period: '/month',
        description: 'Enhanced support for growing businesses',
    },
    {
        name: 'Gold',
        price: '$1,999',
        period: '/month',
        description: 'Priority support for enterprises',
        popular: true,
    },
    {
        name: 'Platinum',
        price: '$3,999',
        period: '/month',
        description: 'Mission-critical 24/7 support',
    },
]

const features: SLAFeature[] = [
    { name: 'Response Time', bronze: '4 hours', silver: '2 hours', gold: '1 hour', platinum: '15 minutes' },
    { name: 'Support Hours', bronze: '9-5 weekdays', silver: '24/5', gold: '24/7', platinum: '24/7' },
    { name: 'Support Channels', bronze: 'Email', silver: 'Email, Phone', gold: 'Email, Phone, Chat', platinum: 'All channels + Dedicated' },
    { name: 'Dedicated Account Manager', bronze: false, silver: false, gold: true, platinum: true },
    { name: 'Monthly Reviews', bronze: false, silver: false, gold: true, platinum: true },
    { name: 'Proactive Monitoring', bronze: false, silver: true, gold: true, platinum: true },
    { name: 'Patch Management', bronze: false, silver: true, gold: true, platinum: true },
    { name: 'Security Scans', bronze: false, silver: 'Monthly', gold: 'Weekly', platinum: 'Daily' },
    { name: 'Backup Management', bronze: false, silver: true, gold: true, platinum: true },
    { name: 'Disaster Recovery', bronze: false, silver: false, gold: true, platinum: true },
    { name: 'Performance Optimization', bronze: false, silver: false, gold: true, platinum: true },
    { name: 'Custom Integrations', bronze: false, silver: false, gold: false, platinum: true },
    { name: 'On-site Support', bronze: false, silver: false, gold: 'Quarterly', platinum: 'Monthly' },
]

export default function SLAPlans() {
    const renderFeatureValue = (value: boolean | string) => {
        if (typeof value === 'boolean') {
            return value ? (
                <CheckCircleIcon className="w-6 h-6 text-green-500 mx-auto" />
            ) : (
                <XMarkIcon className="w-6 h-6 text-gray-300 mx-auto" />
            )
        }
        return <span className="text-sm text-gray-900 font-medium">{value}</span>
    }

    return (
        <div className="container-custom">
            {/* Plans Header */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`card-enterprise p-6 text-center relative ${plan.popular ? 'ring-2 ring-primary-500 shadow-xl' : ''
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
                                    Most Popular
                                </span>
                            </div>
                        )}
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <div className="mb-2">
                            <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                            <span className="text-gray-600 text-sm">{plan.period}</span>
                        </div>
                        <p className="text-sm text-gray-600">{plan.description}</p>
                    </div>
                ))}
            </div>

            {/* Features Comparison Table */}
            <div className="card-enterprise overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                    Feature
                                </th>
                                {plans.map((plan, index) => (
                                    <th
                                        key={index}
                                        className={`px-6 py-4 text-center text-sm font-semibold ${plan.popular ? 'text-primary-600' : 'text-gray-900'
                                            }`}
                                    >
                                        {plan.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {features.map((feature, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                                        {feature.name}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {renderFeatureValue(feature.bronze)}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {renderFeatureValue(feature.silver)}
                                    </td>
                                    <td className="px-6 py-4 text-center bg-primary-50/30">
                                        {renderFeatureValue(feature.gold)}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {renderFeatureValue(feature.platinum)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                {plans.map((plan, index) => (
                    <a
                        key={index}
                        href={`/contact?type=sla-${plan.name.toLowerCase()}`}
                        className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${plan.popular
                                ? 'bg-primary-600 text-white hover:bg-primary-700'
                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                            }`}
                    >
                        Get Started
                    </a>
                ))}
            </div>
        </div>
    )
}
