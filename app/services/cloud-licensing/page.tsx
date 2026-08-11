import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import {
    CloudIcon,
    ShieldCheckIcon,
    ArrowPathIcon,
    CurrencyDollarIcon,
    ChartBarIcon,
    SparklesIcon,
    DocumentCheckIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/solid'
import {
    FaShieldAlt,
    FaQuestionCircle,
    FaCheck,
} from 'react-icons/fa'
import LicenseCalculator from './LicenseCalculator'
import M365PlansMatrix from './M365PlansMatrix'
import LeadForm from '@/components/LeadForm'

export const metadata = genMeta({
    title: 'Cloud Subscription, Business Email & Licensing Management | FinOps & SAM',
    description:
        'Enterprise Cloud Subscription, Business Email & Licensing Management by Aerosyns. Optimize Microsoft 365, Exchange Online, Google Workspace, Azure RIs, AWS Savings Plans, Oracle, and VMware licensing with continuous FinOps and audit defense in UAE & MENA.',
    keywords: [
        'Cloud Subscription Management UAE',
        'Business Email Licensing UAE',
        'Microsoft 365 Exchange Online Licensing',
        'Google Workspace Enterprise UAE',
        'Cloud Licensing Optimization',
        'FinOps Services UAE',
        'Microsoft CSP Partner UAE',
        'Software Asset Management SAM',
        'Azure Reserved Instances optimization',
        'AWS Savings Plans management',
        'Oracle licensing audit defense',
        'VMware VCF licensing transition',
        'Enterprise agreement co-terming',
    ],
})

const kpiStats = [
    { label: 'Avg. Recovered Waste', value: '35%+', detail: 'Immediate cost reduction within 60 days' },
    { label: 'Audit Readiness', value: '100%', detail: 'Zero penalty guarantee with proactive SAM' },
    { label: 'Managed License Spend', value: '$45M+', detail: 'Optimized across Microsoft, AWS, Oracle & Cisco' },
    { label: 'Unused Seat Reclamation', value: '7 Days', detail: 'Automated harvesting & leaver workflow' },
]

const vendorEcosystems = [
    {
        name: 'Business Email & Workspace Solutions',
        badge: 'M365 & Workspace',
        description: 'Complete lifecycle management, licensing rightsizing, and security governance for Microsoft 365 Exchange Online, Google Workspace, and Hybrid Mail Servers.',
        highlights: [
            'Exchange Online & Google Workspace seat harvesting & tier rightsizing',
            'Zero-downtime Tenant-to-Tenant & PST/IMAP email migrations',
            'Inactive mailbox conversion to free shared mailboxes (Save 100% per leaver seat)',
            'Advanced Email Security (Anti-Phishing, DMARC/DKIM/SPF, Email DLP & Archiving)'
        ],
        gradient: 'from-violet-600/20 via-purple-500/10 to-indigo-600/20',
        borderColor: 'border-purple-500/30'
    },
    {
        name: 'Microsoft 365 & Azure CSP / NCE',
        badge: 'Tier-1 Partner',
        description: 'Comprehensive Microsoft Cloud Solution Provider (CSP) license lifecycle, EA to CSP transition, and Azure Reserved Instance (RI) optimization.',
        highlights: [
            'Automated M365 seat harvesting & user rightsizing',
            'Azure Hybrid Benefit (AHB) utilization for Windows & SQL',
            'Azure Savings Plans & 1-yr / 3-yr Reserved Instances',
            'NCE contract terms, co-terming & flex billing'
        ],
        gradient: 'from-blue-600/20 via-sky-500/10 to-indigo-600/20',
        borderColor: 'border-blue-500/30'
    },
    {
        name: 'Amazon Web Services (AWS)',
        badge: 'AWS FinOps',
        description: 'Maximize AWS compute discount coverage without risking lock-in through intelligent Savings Plans and EC2 Instance Reservations.',
        highlights: [
            'Compute & EC2 Savings Plans portfolio management',
            'AWS License Manager for BYOL compliance',
            'Idle resource & orphaned EBS volume purging',
            'AWS Marketplace consolidated enterprise billing'
        ],
        gradient: 'from-amber-600/20 via-orange-500/10 to-yellow-600/20',
        borderColor: 'border-amber-500/30'
    },
    {
        name: 'Oracle Database & Cloud Infrastructure',
        badge: 'ULAs & Partitioning',
        description: 'Protect against aggressive vendor audits, optimize Unlimited License Agreements (ULAs), and ensure compliant virtualized partitioning.',
        highlights: [
            'Hard & soft partitioning audit readiness (VMware / OVM)',
            'ULA exit strategies & certification optimization',
            'Oracle Cloud Infrastructure (OCI) Bring Your Own License (BYOL)',
            'Java SE subscription rightsizing & open-source alternative migration'
        ],
        gradient: 'from-red-600/20 via-rose-500/10 to-red-700/20',
        borderColor: 'border-red-500/30'
    },
    {
        name: 'VMware VCF & Broadcom Subscriptions',
        badge: 'Migration & Optimization',
        description: 'Navigate Broadcom’s subscription model changes, convert per-socket to per-core licensing seamlessly, and control hypervisor costs.',
        highlights: [
            'VMware Cloud Foundation (VCF) core count optimization',
            'Per-socket to per-core subscription migration roadmap',
            'Alternative hypervisor assessment (KVM / Proxmox / Nutanix)',
            'VCPP and MSP partner licensing allocation'
        ],
        gradient: 'from-emerald-600/20 via-teal-500/10 to-green-600/20',
        borderColor: 'border-emerald-500/30'
    },
    {
        name: 'Cisco & Enterprise Security Agreements',
        badge: 'Flex EA Co-terming',
        description: 'Consolidate network, security, and collaboration subscriptions under unified Cisco EA and security software suites.',
        highlights: [
            'Cisco EA 3.0 Flex agreement consolidation',
            'Palo Alto, Fortinet, and CrowdStrike co-terming',
            'True-forward vs true-up expense forecasting',
            'Growth allowance & value incentive management'
        ],
        gradient: 'from-cyan-600/20 via-teal-500/10 to-blue-600/20',
        borderColor: 'border-cyan-500/30'
    },
    {
        name: 'Red Hat & Enterprise Open Source',
        badge: 'RHEL & OpenShift',
        description: 'Streamline container host licensing, Linux subscriptions, and automation tool subscriptions across hybrid clouds.',
        highlights: [
            'Red Hat Enterprise Linux (RHEL) subscription pooling',
            'OpenShift core entitlement management',
            'Ansible Automation Platform node licensing',
            'Hybrid cloud entitlement portability'
        ],
        gradient: 'from-rose-600/20 via-red-500/10 to-orange-600/20',
        borderColor: 'border-rose-500/30'
    }
]

const coreCapabilities = [
    {
        icon: CurrencyDollarIcon,
        title: 'Continuous FinOps & Cost Optimization',
        description: 'Real-time visibility into multi-cloud IaaS/PaaS/SaaS spend with automated anomaly detection, rightsizing recommendations, and waste purging.',
        details: [
            'Automated seat harvesting for inactive accounts (7-day trigger)',
            'Multi-cloud Reserved Instance (RI) & Savings Plan management',
            'Shadow IT discovery & SaaS overlap elimination',
            'Custom chargeback & showback cost allocation by department'
        ]
    },
    {
        icon: DocumentCheckIcon,
        title: 'Software Asset Management (SAM) & Audit Shield',
        description: 'Proactive compliance auditing to defend against vendor audits from Microsoft, Oracle, IBM, and SAP while avoiding costly penalty true-ups.',
        details: [
            'Continuous entitlement vs deployment effective license position (ELP)',
            'Hard-partitioning vs soft-partitioning compliance proofing',
            'Vendor audit representation & true-up negotiation defense',
            'Contract terms optimization & risk mitigation'
        ]
    },
    {
        icon: CloudIcon,
        title: 'Tier-1 Microsoft CSP & Multi-Cloud Procurement',
        description: 'Direct access to enterprise tier discounts, flexible monthly/annual terms, single consolidated billing, and local GCC currency invoicing.',
        details: [
            'Direct Tier-1 Microsoft CSP provisioning portal',
            'Enterprise Agreement (EA) to CSP migration with zero downtime',
            'Unified monthly invoice across multi-vendor software suites',
            'Dedicated licensing concierge & SLA support'
        ]
    },
    {
        icon: ArrowPathIcon,
        title: 'Automated Lifecycle & Seat Harvesting',
        description: 'Integrate HR platforms with licensing pools to automatically grant, upgrade, downgrade, or harvest software seats upon employee onboarding or offboarding.',
        details: [
            'Workday / SAP HR / Azure AD lifecycle triggers',
            'Automatic license pooling & tier re-allocation',
            'Executive & power-user license rightsizing',
            'Unassigned license buffer control'
        ]
    },
    {
        icon: ShieldCheckIcon,
        title: 'Hybrid Cloud BYOL & Sovereign Compliance',
        description: 'Optimize Bring Your Own License (BYOL) mobility across on-premises data centers, local UAE sovereign clouds, and public cloud providers.',
        details: [
            'Azure Hybrid Benefit (AHB) for Windows Server & SQL Server',
            'AWS Dedicated Host and License Manager compliance',
            'UAE & GCC data residency & sovereignty compliance',
            'Cross-cloud entitlement migration'
        ]
    },
    {
        icon: ChartBarIcon,
        title: 'Enterprise Agreement (EA) Co-Terming & Governance',
        description: 'Align disjointed software renewals into co-termed enterprise agreements to maximize purchasing leverage and streamline administrative overhead.',
        details: [
            'Multi-vendor renewal calendar & proactive 90-day alerts',
            'True-forward vs true-up cost modeling',
            'Vendor discount aggregation across global subsidiaries',
            'Executive board reporting & budget forecasting'
        ]
    }
]

const optimizationSteps = [
    {
        number: '01',
        title: 'Discovery & Automated SAM Audit',
        description: 'Deploy non-intrusive discovery agents or API connectors to map total deployed software assets, cloud workloads, active SaaS accounts, and underlying entitlements.',
        tags: ['Asset Discovery', 'ELP Report', 'Entitlement Mapping']
    },
    {
        number: '02',
        title: 'Waste Reclamation & FinOps Rightsizing',
        description: 'Harvest inactive seats, downgrade over-provisioned user tiers, purge unattached cloud volumes, and execute immediate cost reduction initiatives.',
        tags: ['Seat Harvesting', 'RI Matching', 'Immediate Savings']
    },
    {
        number: '03',
        title: 'Strategic Procurement & EA/CSP Structuring',
        description: 'Restructure licensing models—transitioning rigid EAs to flexible Microsoft CSP, reserving long-term compute capacity, and securing Tier-1 discount brackets.',
        tags: ['CSP Restructuring', 'Savings Plans', 'Volume Discounts']
    },
    {
        number: '04',
        title: 'Continuous Governance & Audit Shield',
        description: 'Establish automated policy enforcement, continuous shadow IT monitoring, real-time cost anomaly alerts, and 24/7 audit defense guarantee.',
        tags: ['Continuous Governance', 'Audit Defense', 'Automated Workflows']
    }
]

const faqs = [
    {
        question: 'How does Business Email licensing optimization reduce software spend?',
        answer: 'Many enterprises continue paying monthly Microsoft 365 or Google Workspace seat fees for former employees or generic mailboxes. Aerosyns implements automated seat harvesting and converts inactive user mailboxes into free shared mailboxes or archived mailboxes with full data preservation, immediately recovering 100% of seat licensing costs for those accounts while maintaining compliance.'
    },
    {
        question: 'How does Cloud Subscription & Licensing Management differ from generic subscription tools?',
        answer: 'Generic subscription tools only track recurring credit card payments for simple SaaS apps. Aerosyns’ Cloud Subscription & Licensing Management delivers enterprise-grade Software Asset Management (SAM) and FinOps. We combine deep architectural expertise across Microsoft CSP, AWS Savings Plans, Oracle ULA partitioning, and VMware core licensing with automated seat harvesting, audit defense, and direct Tier-1 enterprise discount procurement.'
    },
    {
        question: 'Can Aerosyns help transition our existing Microsoft Enterprise Agreement (EA) to CSP?',
        answer: 'Yes. We specialize in seamless EA-to-CSP transitions. Moving to Microsoft CSP via Aerosyns eliminates rigid 3-year commitments, allowing you to pay monthly or annually with flex seat counts, access Tier-1 direct discounts, maintain Azure Hybrid Benefit portability, and receive local GCC currency invoicing without any downtime or service interruption.'
    },
    {
        question: 'What happens during a vendor license audit (e.g., Microsoft or Oracle)?',
        answer: 'If you receive an audit notice, our certified SAM and licensing architects act as your audit shield. We generate an verified Effective License Position (ELP) report, inspect virtualized partitioning configurations (such as Oracle on VMware), verify BYOL compliance, and negotiate directly with vendors to eliminate penalty claims and true-up risks.'
    },
    {
        question: 'How quickly can we expect to see financial savings after engaging Aerosyns?',
        answer: 'Most enterprise clients achieve initial savings within 14 to 30 days. Automated seat harvesting (reclaiming unassigned M365/SaaS licenses) and rightsizing idle cloud resources provide immediate cash flow relief, while long-term Reserved Instance and CSP restructuring typically net 30% to 45% annual spend reduction.'
    },
    {
        question: 'How does Bring Your Own License (BYOL) work in multi-cloud environments?',
        answer: 'BYOL allows you to leverage existing on-premises software licenses (like Windows Server, SQL Server, or Oracle Database) in public clouds like Azure or AWS. Aerosyns ensures your licenses meet mobility rules (such as Software Assurance requirements) and maps them via tools like Azure Hybrid Benefit or AWS License Manager to drastically lower cloud compute costs.'
    }
]

export default function CloudLicensingPage() {
    return (
        <div className="bg-slate-950 text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-gray-950 via-slate-900 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/30 via-slate-950/80 to-slate-950 pointer-events-none" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 blur-[140px] rounded-full pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs sm:text-sm font-semibold mb-6 animate-pulse">
                            <SparklesIcon className="w-4 h-4 text-primary-400" />
                            Enterprise FinOps & Software Asset Management
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight">
                            Cloud Subscription &{' '}
                            <span className="bg-gradient-to-r from-primary-400 via-sky-300 to-secondary-400 bg-clip-text text-transparent">
                                Licensing Management
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Stop overpaying for cloud infrastructure and enterprise software. Aerosyns delivers automated 
                            license harvesting, multi-cloud FinOps governance, Tier-1 Microsoft CSP procurement, and 
                            guaranteed vendor audit defense across UAE and MENA enterprise environments.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <a
                                href="#calculator-section"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold hover:from-primary-600 hover:to-secondary-600 transition-all shadow-xl shadow-primary-500/25 flex items-center justify-center gap-2 group"
                            >
                                <span>Calculate Your Licensing Savings</span>
                                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact-section"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 font-semibold hover:bg-gray-800 hover:border-gray-600 transition-all flex items-center justify-center gap-2"
                            >
                                <span>Book SAM Audit Consultation</span>
                            </a>
                        </div>

                        {/* KPI Stats Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
                            {kpiStats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800/80 backdrop-blur-md hover:border-primary-500/40 transition-colors"
                                >
                                    <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold text-gray-200 mb-0.5">
                                        {stat.label}
                                    </div>
                                    <div className="text-[11px] text-gray-400 leading-tight">
                                        {stat.detail}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Calculator Section */}
            <section id="calculator-section" className="py-16 sm:py-24 bg-slate-900/60 border-y border-gray-800/80">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                            Interactive License Waste & Savings Estimator
                        </h2>
                        <p className="text-gray-300">
                            Discover how much budget your organization can recover annually through proactive 
                            Software Asset Management (SAM) and cloud cost governance.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <LicenseCalculator />
                    </div>
                </div>
            </section>

            {/* Microsoft 365 Business & Enterprise Plans Matrix Section */}
            <section id="m365-plans" className="py-16 sm:py-24 bg-slate-950">
                <div className="container-custom">
                    <M365PlansMatrix />
                </div>
            </section>

            {/* Multi-Vendor Enterprise Ecosystem Grid */}
            <section className="py-20 lg:py-28 bg-slate-950">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/30 text-secondary-300 text-xs font-semibold uppercase tracking-wider mb-3">
                            Vendor Expertise
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                            Multi-Vendor Cloud & Software Licensing Optimization
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg">
                            Direct partner status, deep entitlement expertise, and specialized cost optimization 
                            across global technology leaders.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {vendorEcosystems.map((vendor, index) => (
                            <div
                                key={index}
                                className={`rounded-3xl p-8 bg-gradient-to-b ${vendor.gradient} bg-gray-900/80 border ${vendor.borderColor} hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shadow-xl`}
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <h3 className="text-xl font-bold text-white">{vendor.name}</h3>
                                        <span className="px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-[11px] font-mono font-semibold text-primary-300">
                                            {vendor.badge}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                        {vendor.description}
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        {vendor.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start text-xs sm:text-sm text-gray-300 gap-2.5">
                                                <FaCheck className="w-3.5 h-3.5 text-primary-400 flex-shrink-0 mt-1" />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Capabilities Section */}
            <section className="py-20 lg:py-28 bg-slate-900/40 border-t border-gray-800/80">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-semibold uppercase tracking-wider mb-3">
                            Comprehensive Capabilities
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                            Complete Cloud & SaaS Licensing Governance
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg">
                            From automated seat harvesting to audit defense, we ensure your software budget yields maximum enterprise output.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreCapabilities.map((cap, idx) => {
                            const IconComponent = cap.icon
                            return (
                                <div
                                    key={idx}
                                    className="p-8 rounded-3xl bg-gray-900/60 border border-gray-800 hover:border-primary-500/40 hover:bg-gray-900/90 transition-all duration-300 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {cap.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                            {cap.description}
                                        </p>
                                        <div className="space-y-2.5 pt-4 border-t border-gray-800">
                                            {cap.details.map((detail, dIdx) => (
                                                <div key={dIdx} className="flex items-center gap-2 text-xs text-gray-400">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                                                    <span>{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Optimization Process Lifecycle */}
            <section className="py-20 lg:py-28 bg-slate-950">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                            Methodology
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                            4-Step License Optimization Framework
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg">
                            A proven, risk-free methodology that delivers measurable ROI in under 60 days.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {optimizationSteps.map((step, index) => (
                            <div
                                key={index}
                                className="relative p-8 rounded-3xl bg-gray-900/50 border border-gray-800 flex flex-col justify-between hover:border-primary-500/50 transition-all duration-300"
                            >
                                <div>
                                    <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-mono block mb-4">
                                        {step.number}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                                        {step.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800/80">
                                    {step.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-2 py-0.5 rounded bg-gray-800 text-[10px] font-mono text-gray-300"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audit Shield & Compliance Highlight Banner */}
            <section className="py-16 bg-gradient-to-r from-primary-950 via-slate-900 to-secondary-950 border-y border-primary-500/20">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold mb-4">
                                <FaShieldAlt className="w-3.5 h-3.5" />
                                Proactive Audit Defense Shield
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                                Facing a Vendor Audit from Microsoft, Oracle, or IBM?
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                Don’t face vendor audit teams alone. Aerosyns licensing experts perform non-intrusive 
                                dry-run audits, construct verified Effective License Position (ELP) reports, and negotiate 
                                directly to protect your organization from unbudgeted penalties.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <a
                                href="#contact-section"
                                className="px-8 py-4 rounded-xl bg-white text-gray-900 font-bold hover:bg-gray-100 transition-all shadow-xl inline-flex items-center gap-2"
                            >
                                <span>Request Emergency Audit Shield</span>
                                <ArrowRightIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="py-20 lg:py-28 bg-slate-950">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
                            <FaQuestionCircle className="w-3.5 h-3.5" />
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                            Cloud Subscription & Licensing Insights
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="p-6 sm:p-8 rounded-2xl bg-gray-900/60 border border-gray-800"
                            >
                                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                                    <span className="text-primary-400 font-mono">Q.</span>
                                    <span>{faq.question}</span>
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-7">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Form CTA Section */}
            <section id="contact-section" className="py-20 lg:py-28 bg-slate-900/80 border-t border-gray-800">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                                Schedule Your Free Cloud Licensing Audit
                            </h2>
                            <p className="text-gray-300 text-base sm:text-lg">
                                Connect with Aerosyns software licensing architects to uncover immediate savings 
                                and optimize your Microsoft, AWS, Oracle, and VMware investments.
                            </p>
                        </div>

                        <div className="bg-slate-950 p-6 sm:p-10 rounded-3xl border border-gray-800 shadow-2xl">
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
