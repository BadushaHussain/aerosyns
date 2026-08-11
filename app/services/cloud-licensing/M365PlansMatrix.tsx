'use client'

import { useState } from 'react'
import {
    FaCheck,
    FaTimes,
    FaCrown,
    FaShieldAlt,
    FaEnvelope,
    FaDesktop,
    FaUsers,
    FaArrowRight,
    FaMobileAlt
} from 'react-icons/fa'

interface Plan {
    id: string
    name: string
    badge?: string
    popular?: boolean
    description: string
    targetUsers: string
    desktopApps: boolean
    webMobileApps: boolean
    emailHosting: string // '50 GB' | '100 GB' | 'No'
    cloudStorage: string // '1 TB' | 'Unlimited'
    teamsWebinars: boolean
    advancedSecurity: boolean
    deviceManagement: boolean
    idealFor: string[]
    aerosynsValue: string
}

const businessPlans: Plan[] = [
    {
        id: 'basic',
        name: 'M365 Business Basic',
        description: 'Best for web & mobile productivity, business email, and Teams collaboration without desktop apps.',
        targetUsers: 'Frontline & Hybrid Workers',
        desktopApps: false,
        webMobileApps: true,
        emailHosting: '50 GB Exchange',
        cloudStorage: '1 TB OneDrive',
        teamsWebinars: true,
        advancedSecurity: false,
        deviceManagement: false,
        idealFor: ['Web-only workers', 'Shift & deskless staff', 'Essential business email'],
        aerosynsValue: 'Flex monthly seat counts with zero long-term commitment.'
    },
    {
        id: 'apps',
        name: 'M365 Apps for Business',
        description: 'Best for desktop Office applications and cloud storage without business email or Teams.',
        targetUsers: 'Desktop App Power Users',
        desktopApps: true,
        webMobileApps: true,
        emailHosting: 'No Email Hosting',
        cloudStorage: '1 TB OneDrive',
        teamsWebinars: false,
        advancedSecurity: false,
        deviceManagement: false,
        idealFor: ['Staff with third-party email', 'Heavy Excel & Word users', 'Offline app access'],
        aerosynsValue: 'Combine with third-party or on-prem email servers.'
    },
    {
        id: 'standard',
        name: 'M365 Business Standard',
        popular: true,
        badge: 'Most Popular',
        description: 'Complete suite with installed desktop Office apps, business email, Teams webinars, and Bookings.',
        targetUsers: 'Full Workstation Staff',
        desktopApps: true,
        webMobileApps: true,
        emailHosting: '50 GB Exchange',
        cloudStorage: '1 TB OneDrive',
        teamsWebinars: true,
        advancedSecurity: false,
        deviceManagement: false,
        idealFor: ['Standard office staff', 'Webinar hosts & client scheduling', 'Full desktop productivity'],
        aerosynsValue: 'Tier-1 CSP volume discounts & automated seat harvesting.'
    },
    {
        id: 'premium',
        name: 'M365 Business Premium',
        badge: 'Enterprise Security',
        description: 'Ultimate all-in-one plan combining Standard productivity with Intune MDM, Defender endpoint protection, and Entra ID P1.',
        targetUsers: 'Executives & Sensitive Roles',
        desktopApps: true,
        webMobileApps: true,
        emailHosting: '50 GB Exchange',
        cloudStorage: '1 TB OneDrive',
        teamsWebinars: true,
        advancedSecurity: true,
        deviceManagement: true,
        idealFor: ['Remote & mobile workforces', 'Regulated industries (Fintech, Healthcare)', 'Full cyber defense & MDM'],
        aerosynsValue: 'Includes Aerosyns SOC monitoring & security policy template setup.'
    }
]

const enterprisePlans: Plan[] = [
    {
        id: 'e3',
        name: 'Microsoft 365 E3',
        description: 'Enterprise-wide productivity, core security, compliance, and OS entitlement for 300+ user organizations.',
        targetUsers: 'Large Scale Enterprises (>300 seats)',
        desktopApps: true,
        webMobileApps: true,
        emailHosting: '100 GB Exchange',
        cloudStorage: '1 TB - 5 TB OneDrive',
        teamsWebinars: true,
        advancedSecurity: true,
        deviceManagement: true,
        idealFor: ['Large corporate workforces', 'Windows 11 Enterprise licensing', 'Information protection'],
        aerosynsValue: 'EA to CSP migration with volume discounting.'
    },
    {
        id: 'e5',
        name: 'Microsoft 365 E5',
        badge: 'Top Tier Enterprise',
        description: 'Comprehensive enterprise plan with XDR security, Power BI Pro, Teams Phone, and eDiscovery.',
        targetUsers: 'Enterprise Execs & Security Teams',
        desktopApps: true,
        webMobileApps: true,
        emailHosting: '100 GB Exchange',
        cloudStorage: '1 TB - 5 TB OneDrive',
        teamsWebinars: true,
        advancedSecurity: true,
        deviceManagement: true,
        idealFor: ['SOC teams & compliance officers', 'Enterprise telephony voice users', 'Advanced analytics'],
        aerosynsValue: 'Managed Sentinel SOC integration & license harvesting.'
    },
    {
        id: 'exo1',
        name: 'Exchange Online Plan 1',
        description: 'Dedicated business email & shared mailbox hosting without Office apps or Teams.',
        targetUsers: 'Email-Only Staff & Service Mailboxes',
        desktopApps: false,
        webMobileApps: true,
        emailHosting: '50 GB Exchange',
        cloudStorage: 'No OneDrive',
        teamsWebinars: false,
        advancedSecurity: false,
        deviceManagement: false,
        idealFor: ['Kiosk & email-only staff', 'Shared department mailboxes', 'Low-cost mail hosting'],
        aerosynsValue: 'Convert leaver seats to free shared mailboxes.'
    }
]

export default function M365PlansMatrix() {
    const [segment, setSegment] = useState<'business' | 'enterprise'>('business')
    const plansToDisplay = segment === 'business' ? businessPlans : enterprisePlans

    return (
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-gray-800 shadow-2xl">
            {/* Header & Segment Switcher */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-8 border-b border-gray-800">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        <FaEnvelope className="w-3.5 h-3.5" />
                        Microsoft 365 Licensing Guide
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                        Microsoft 365 Business & Enterprise Plans Matrix
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                        Compare features, security controls, and email capacities to structure your optimal license mix.
                    </p>
                </div>

                {/* Segment Selector Toggle */}
                <div className="flex items-center bg-gray-800/80 p-1.5 rounded-2xl border border-gray-700/80">
                    <button
                        type="button"
                        onClick={() => setSegment('business')}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                            segment === 'business'
                                ? 'bg-primary-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Business Plans (&lt; 300 Seats)
                    </button>
                    <button
                        type="button"
                        onClick={() => setSegment('enterprise')}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                            segment === 'enterprise'
                                ? 'bg-primary-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Enterprise Plans (&gt; 300 Seats)
                    </button>
                </div>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {plansToDisplay.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                            plan.popular
                                ? 'bg-gradient-to-b from-blue-950/80 via-slate-900 to-gray-900 border-2 border-primary-500 shadow-xl shadow-primary-500/10'
                                : 'bg-gray-800/40 border border-gray-700/60 hover:border-gray-600'
                        }`}
                    >
                        {plan.badge && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                                {plan.badge}
                            </div>
                        )}

                        <div>
                            <h4 className="text-xl font-bold text-white mb-2 pt-2">{plan.name}</h4>
                            <p className="text-gray-300 text-xs leading-relaxed mb-4 min-h-[48px]">
                                {plan.description}
                            </p>

                            <div className="px-3 py-1.5 rounded-lg bg-gray-900/80 border border-gray-800 text-[11px] text-primary-300 font-mono mb-6">
                                Target: {plan.targetUsers}
                            </div>

                            {/* Features List */}
                            <div className="space-y-3 pt-4 border-t border-gray-800 text-xs text-gray-200 mb-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">Desktop Office Apps:</span>
                                    {plan.desktopApps ? (
                                        <span className="flex items-center text-emerald-400 font-semibold gap-1">
                                            <FaCheck className="w-3 h-3" /> Installed
                                        </span>
                                    ) : (
                                        <span className="text-gray-500">Web/Mobile Only</span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">Email Hosting:</span>
                                    <span className="font-semibold text-sky-300">{plan.emailHosting}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">Cloud Storage:</span>
                                    <span className="font-medium text-gray-300">{plan.cloudStorage}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">Teams & Webinars:</span>
                                    {plan.teamsWebinars ? (
                                        <FaCheck className="w-3.5 h-3.5 text-emerald-400" />
                                    ) : (
                                        <FaTimes className="w-3.5 h-3.5 text-gray-600" />
                                    )}
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">Defender Security:</span>
                                    {plan.advancedSecurity ? (
                                        <span className="flex items-center text-emerald-400 font-semibold gap-1">
                                            <FaShieldAlt className="w-3 h-3 text-emerald-400" /> Included
                                        </span>
                                    ) : (
                                        <FaTimes className="w-3.5 h-3.5 text-gray-600" />
                                    )}
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">Intune MDM/MAM:</span>
                                    {plan.deviceManagement ? (
                                        <FaCheck className="w-3.5 h-3.5 text-emerald-400" />
                                    ) : (
                                        <FaTimes className="w-3.5 h-3.5 text-gray-600" />
                                    )}
                                </div>
                            </div>

                            {/* Ideal Use Cases */}
                            <div className="space-y-1.5 mb-6">
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Best Suited For:</span>
                                {plan.idealFor.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-300">
                                        <span className="w-1 h-1 rounded-full bg-primary-400" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-800">
                            <div className="p-2.5 rounded-xl bg-primary-950/40 border border-primary-500/20 text-[11px] text-primary-300 mb-4">
                                💡 <strong className="text-white">Aerosyns Edge:</strong> {plan.aerosynsValue}
                            </div>
                            <a
                                href="#contact-section"
                                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-800 hover:bg-primary-600 text-white font-semibold text-xs transition-colors"
                            >
                                <span>Request Quote for {plan.name}</span>
                                <FaArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Smart Mixed-Licensing Tip Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/90 via-slate-900 to-indigo-950 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0">
                        <FaUsers className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white">Pro Tip: Save 30%+ with Aerosyns Hybrid Licensing Mix</h4>
                        <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-2xl">
                            You don't need to assign expensive Business Premium licenses to everyone. Aerosyns architects custom 
                            license mixes (e.g., Business Basic for frontline staff + Business Premium for management), reducing 
                            your monthly Microsoft spend by thousands of dollars while maintaining total compliance.
                        </p>
                    </div>
                </div>
                <a
                    href="#contact-section"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-colors whitespace-nowrap shadow-lg"
                >
                    Get Free License Mix Audit
                </a>
            </div>
        </div>
    )
}
