'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { HiChartBar } from 'react-icons/hi2'
import { FaTrophy, FaCheckCircle, FaTools, FaArrowRight } from 'react-icons/fa'
import { MdCheckCircle } from 'react-icons/md'
import { Shield, Lock, Globe, TrendingUp, Handshake, Settings } from 'lucide-react'
import { HiCpuChip, HiCloudArrowUp, HiShieldExclamation, HiCircleStack, HiLifebuoy, HiCodeBracketSquare } from 'react-icons/hi2'
import { FaPlane, FaNetworkWired, FaDatabase, FaChartLine, FaUsers, FaSuitcase, FaBrain, FaLock, FaFileAlt, FaBriefcase, FaFingerprint, FaUserTie, FaWarehouse, FaUniversity } from 'react-icons/fa'

export default function HomePage() {
    const services = [
        {
            title: 'AI Infrastructure',
            description: 'GPU clusters, HPC systems, and AI platform engineering for research workloads.',
            icon: HiCpuChip,
            href: '/services/ai-infrastructure',
        },
        {
            title: 'Cloud & Hybrid IT',
            description: 'Multi-cloud orchestration, hybrid work enablement, and sovereign cloud solutions.',
            icon: HiCloudArrowUp,
            href: '/services/cloud',
        },
        {
            title: 'Cybersecurity',
            description: 'Comprehensive security operations, compliance, and zero-trust architecture.',
            icon: HiShieldExclamation,
            href: '/services/cybersecurity',
        },
        {
            title: 'Infrastructure & Cabling',
            description: 'Enterprise-grade structured cabling, networking, and datacenter infrastructure with Tier-ready certification.',
            icon: HiCircleStack,
            href: '/services/infrastructure',
        },
        {
            title: 'Managed Services',
            description: '24/7 NOC support with SLA-backed service tiers and proactive monitoring.',
            icon: HiLifebuoy,
            href: '/services/managed-services',
        },
        {
            title: 'Software Engineering',
            description: 'Custom enterprise software development, automation, and digital transformation.',
            icon: HiCodeBracketSquare,
            href: '/services/software',
        },
    ]

    const stats = [
        { value: '500+', label: 'Projects Delivered', number: 500, suffix: '+' },
        { value: '15+', label: 'Years of Experience', number: 15, suffix: '+' },
        { value: '99.99%', label: 'Uptime SLA', number: 99.99, suffix: '%' },
        { value: '24/7', label: 'Support Available', number: 24, suffix: '/7' },
    ]

    const trustBadges = [
        { label: '99.99% Uptime SLA', icon: MdCheckCircle },
        { label: '24/7 NOC Support', icon: MdCheckCircle },
        { label: 'SOC2 & ISO 27001', icon: MdCheckCircle },
        { label: 'UAE Data Residency', icon: MdCheckCircle },
    ]

    // Counter animation component
    const AnimatedCounter = ({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) => {
        const [count, setCount] = useState(0)
        const [isVisible, setIsVisible] = useState(false)
        const counterRef = useRef<HTMLDivElement>(null)

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                },
                { threshold: 0.3 }
            )

            if (counterRef.current) {
                observer.observe(counterRef.current)
            }

            return () => observer.disconnect()
        }, [])

        useEffect(() => {
            if (!isVisible) return

            let startTime: number | null = null
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime
                const progress = Math.min((currentTime - startTime) / duration, 1)

                const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                setCount(Math.floor(easeOutQuart * end * 100) / 100)

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }

            requestAnimationFrame(animate)
        }, [isVisible, end, duration])

        return (
            <div ref={counterRef} className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                {count.toFixed(suffix === '%' ? 2 : 0)}{suffix}
            </div>
        )
    }

    return (
        <>
            {/* Hero Section with Graphics */}
            <section className="bg-white border-b border-gray-200 relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Floating Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

                <div className="container-custom relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
                        {/* Left Column - Content */}
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
                                From fiber to supercomputing, delivering enterprise IT with zero-downtime assurance
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in animation-delay-200">
                                Aerosyns delivers secure, high-performance IT ecosystems across on-premise, private, and public clouds.
                                We design Tier-ready data centers, deploy AI supercomputing clusters, and operate mission-critical
                                systems with enterprise SLAs, compliance, and local UAE residency options.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in animation-delay-400">
                                <Link
                                    href="/contact?type=assessment"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded transition-colors"
                                >
                                    Request Assessment
                                    <FaArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/solutions"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-900 font-semibold rounded transition-colors"
                                >
                                    View Solutions
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Trust Badges Card with Animation */}
                        <div className="relative animate-fade-in animation-delay-600">
                            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Enterprise Assurance</h3>
                                <div className="space-y-4">
                                    {trustBadges.map((badge, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 hover:scale-105">
                                            <badge.icon className="w-6 h-6 text-green-600 flex-shrink-0" />
                                            <span className="font-medium text-gray-900">{badge.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Decorative Animated Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-2xl animate-pulse animation-delay-1000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section with Icons */}
            <section className="bg-white border-b border-gray-200">
                <div className="container-custom">
                    <div className="py-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-all duration-300 ${index === 0 ? 'bg-blue-100 group-hover:bg-blue-500' :
                                        index === 1 ? 'bg-amber-100 group-hover:bg-amber-500' :
                                            index === 2 ? 'bg-green-100 group-hover:bg-green-500' :
                                                'bg-orange-100 group-hover:bg-orange-500'
                                        }`}>
                                        {index === 0 && <HiChartBar className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />}
                                        {index === 1 && <FaTrophy className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />}
                                        {index === 2 && <FaCheckCircle className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />}
                                        {index === 3 && <FaTools className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />}
                                    </div>
                                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section with Enhanced Cards */}
            <section className="bg-white py-20 border-b border-gray-200">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive IT services designed for mission-critical enterprise operations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 relative overflow-hidden animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${index === 0 ? 'bg-gradient-to-br from-purple-100 to-purple-200 group-hover:from-purple-500 group-hover:to-purple-600' :
                                        index === 1 ? 'bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-500 group-hover:to-blue-600' :
                                            index === 2 ? 'bg-gradient-to-br from-red-100 to-red-200 group-hover:from-red-500 group-hover:to-red-600' :
                                                index === 3 ? 'bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-500 group-hover:to-green-600' :
                                                    index === 4 ? 'bg-gradient-to-br from-orange-100 to-orange-200 group-hover:from-orange-500 group-hover:to-orange-600' :
                                                        'bg-gradient-to-br from-cyan-100 to-cyan-200 group-hover:from-cyan-500 group-hover:to-cyan-600'
                                        }`}>
                                        <service.icon className={`w-7 h-7 transition-colors ${index === 0 ? 'text-purple-600 group-hover:text-white' :
                                            index === 1 ? 'text-blue-600 group-hover:text-white' :
                                                index === 2 ? 'text-red-600 group-hover:text-white' :
                                                    index === 3 ? 'text-green-600 group-hover:text-white' :
                                                        index === 4 ? 'text-orange-600 group-hover:text-white' :
                                                            'text-cyan-600 group-hover:text-white'
                                            }`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link
                                        href={service.href}
                                        className="inline-flex items-center text-gray-900 hover:text-gray-700 font-semibold group-hover:gap-2 transition-all duration-300"
                                    >
                                        Learn more
                                        <FaArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* SaaS Products Section */}
            <section className="bg-white py-20 border-b border-gray-200">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our SaaS Product Portfolio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-ready applications for insurance, HR, CRM, compliance, and safety management
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Nizsoft',
                                tagline: 'Modern Insurance Platform',
                                description: 'End-to-end insurance management with policy, claims, KYC, and agent modules',
                                features: ['Policy lifecycle management', 'Claims processing & tracking', 'Agent portal & commissions', 'KYC & document management'],
                                color: 'from-blue-500 to-blue-600',
                                url: 'https://www.nizsoft.cloud/'
                            },
                            {
                                name: 'Nautify',
                                tagline: 'Document Expiry & Compliance',
                                description: 'Automated document expiry tracking with notifications and compliance management',
                                features: ['Document expiry tracking', 'Automated notifications', 'Compliance dashboards', 'Escalation workflows'],
                                color: 'from-purple-500 to-purple-600',
                                url: '/products/saas/nautify'
                            },
                            {
                                name: 'Resourcegate',
                                tagline: 'Human Resource Management',
                                description: 'Complete employee lifecycle management with payroll, leave, and attendance',
                                features: ['Employee onboarding', 'Leave & attendance', 'Payroll processing', 'Performance management'],
                                color: 'from-green-500 to-green-600',
                                url: '/products/saas/resourcegate'
                            },
                            {
                                name: 'Metricslog',
                                tagline: 'Access Control & Attendance',
                                description: 'Device integration for fingerprint, face recognition, and RFID access control',
                                features: ['Multi-device integration', 'Fingerprint & face recognition', 'RFID card support', 'Real-time attendance'],
                                color: 'from-orange-500 to-orange-600',
                                url: '/products/saas/metricslog'
                            },
                            {
                                name: 'CRM',
                                tagline: 'Customer Relationship Management',
                                description: 'Sales pipeline, customer support, and marketing automation in one platform',
                                features: ['Lead & pipeline management', 'Customer support ticketing', 'Email & WhatsApp integration', 'Sales automation'],
                                color: 'from-red-500 to-red-600',
                                url: '/products'
                            },
                            {
                                name: 'Banking Solutions',
                                tagline: 'Core Banking & Digital Banking',
                                description: 'Complete banking platform with accounts, loans, deposits, and digital banking channels',
                                features: ['Account management', 'Loan processing', 'Digital banking', 'Payment gateway'],
                                color: 'from-indigo-500 to-indigo-600',
                                url: '/products'
                            },
                            {
                                name: 'SafeInn',
                                tagline: 'Railway Safety Management',
                                description: 'Comprehensive railway safety platform with 32 integrated modules for incident management, compliance, and analytics',
                                features: ['Incident & accident management', 'Risk assessment & CAPA', 'Real-time track monitoring', 'Predictive maintenance'],
                                color: 'from-red-500 to-red-600',
                                url: '/products/saas/safeinn'
                            },
                            {
                                name: 'SafeInn Airport',
                                tagline: 'Airport Safety Management',
                                description: 'ICAO SMS-compliant aviation safety platform with 35+ modules for airside operations, emergency response, and compliance',
                                features: ['Airside operations safety', 'ICAO Annex 14 compliance', 'Emergency response management', 'Wildlife hazard tracking'],
                                color: 'from-blue-500 to-blue-600',
                                url: '/products/saas/safeinn-airport'
                            },
                            {
                                name: 'SafeInn Seaport',
                                tagline: 'Maritime Safety Management',
                                description: 'IMO & ISPS-compliant maritime safety platform with 38+ modules for vessel operations, cargo handling, and port security',
                                features: ['Vessel & marine operations', 'IMO & ISPS compliance', 'Cargo handling safety', 'Port security management'],
                                color: 'from-cyan-500 to-cyan-600',
                                url: '/products/saas/safeinn-seaport'
                            },
                        ].map((product, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}></div>

                                <div className="relative z-10">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gradient-to-br ${product.color}`}>
                                        {index === 0 ? <FaFileAlt className="w-6 h-6 text-white" /> :
                                            index === 1 ? <FaFileAlt className="w-6 h-6 text-white" /> :
                                                index === 2 ? <FaBriefcase className="w-6 h-6 text-white" /> :
                                                    index === 3 ? <FaFingerprint className="w-6 h-6 text-white" /> :
                                                        index === 4 ? <FaUserTie className="w-6 h-6 text-white" /> :
                                                            index === 5 ? <FaWarehouse className="w-6 h-6 text-white" /> :
                                                                <FaUniversity className="w-6 h-6 text-white" />}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {product.name}
                                    </h3>

                                    <p className="text-sm font-medium text-gray-500 mb-3">
                                        {product.tagline}
                                    </p>

                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {product.description}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {product.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <FaCheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={product.url}
                                        target={product.url.startsWith('http') ? '_blank' : undefined}
                                        rel={product.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${product.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                                    >
                                        Learn more
                                        <FaArrowRight className={`w-3 h-3 bg-gradient-to-r ${product.color} bg-clip-text`} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Airport IT Architecture Section */}
            < section className="bg-gradient-to-br from-gray-50 to-white py-20 border-b border-gray-200" >
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            AEROSYNS Airport IT Architecture
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Layered integration model for vendor-agnostic, unified airport operations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                number: '1',
                                title: 'External Stakeholder Integration',
                                description: 'Secure integration with airlines, ATC, immigration, customs, and payment gateways via APIs, VPN, MPLS.',
                                color: 'from-blue-500 to-blue-600',
                                href: '/services/airport'
                            },
                            {
                                number: '2',
                                title: 'AEROSYNS Integration Platform',
                                description: 'API Gateway, ESB, real-time streaming, vendor-agnostic connectors. Eliminates silos, enables real-time decisions.',
                                color: 'from-purple-500 to-purple-600',
                                href: '/solutions/airport'
                            },
                            {
                                number: '3',
                                title: 'Core Airport Systems',
                                description: 'Integrates AODB, FIDS, RMS, A-CDM. Compatible with SITA, Amadeus, Indra, TAV Technologies.',
                                color: 'from-green-500 to-green-600',
                                href: '/services/airport/core-systems'
                            },
                            {
                                number: '4',
                                title: 'Operations Dashboards',
                                description: 'Centralized AOCC with real-time flight status, resource management, incident handling, role-based views.',
                                color: 'from-orange-500 to-orange-600',
                                href: '/services/airport/operations-control'
                            },
                            {
                                number: '5',
                                title: 'Passenger Processing',
                                description: 'CUPPS/CUSS, boarding gates, biometric e-gates, flow analytics. Faster processing, reduced congestion.',
                                color: 'from-red-500 to-red-600',
                                href: '/services/airport/passenger-baggage'
                            },
                            {
                                number: '6',
                                title: 'Baggage & Security',
                                description: 'Unified BHS, BRS, CCTV analytics, access control, BMS, IoT sensors in single control view.',
                                color: 'from-cyan-500 to-cyan-600',
                                href: '/services/airport/network-infrastructure'
                            },
                            {
                                number: '7',
                                title: 'Smart Airport & AI',
                                description: 'Data lake, congestion prediction, delay forecasting, predictive maintenance, Digital Twin readiness.',
                                color: 'from-indigo-500 to-indigo-600',
                                href: '/services/airport/smart-ai'
                            },
                            {
                                number: '8',
                                title: 'Cloud & Cybersecurity',
                                description: 'Hybrid cloud, HA/DR, IAM, SIEM, SOC, Zero Trust. ICAO & ISO compliant.',
                                color: 'from-pink-500 to-pink-600',
                                href: '/services/airport/cybersecurity'
                            },
                        ].map((layer, index) => (
                            <Link
                                key={index}
                                href={layer.href}
                                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                            >
                                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${layer.color}`}></div>
                                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 bg-gradient-to-br ${layer.color} text-white`}>
                                    {index === 0 ? <FaPlane className="w-5 h-5" /> :
                                        index === 1 ? <FaNetworkWired className="w-5 h-5" /> :
                                            index === 2 ? <FaDatabase className="w-5 h-5" /> :
                                                index === 3 ? <FaChartLine className="w-5 h-5" /> :
                                                    index === 4 ? <FaUsers className="w-5 h-5" /> :
                                                        index === 5 ? <FaSuitcase className="w-5 h-5" /> :
                                                            index === 6 ? <FaBrain className="w-5 h-5" /> :
                                                                <FaLock className="w-5 h-5" />}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    {layer.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {layer.description}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            🏆 What AEROSYNS Delivers
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                'Vendor-agnostic airport IT integration',
                                'Unified operational visibility',
                                'Real-time analytics & dashboards',
                                'Secure, scalable, future-ready architecture',
                                'Smart airport enablement'
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                        <FaCheckCircle className="w-4 h-4 text-green-600" />
                                    </div>
                                    <p className="text-gray-700 text-sm font-medium">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* Why Choose Aerosyns Section */}
            < section className="bg-white py-20 border-b border-gray-200" >
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Aerosyns
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Trusted by enterprises for reliability, security, and performance
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Mission-Critical Uptime',
                                description: 'SLA-backed 99.99% uptime with 24/7 NOC and on-call engineering support for zero-downtime operations.',
                                icon: Shield
                            },
                            {
                                title: 'Enterprise Security',
                                description: 'SOC2 Type II and ISO 27001 certified with zero-trust architecture, SIEM, and managed detection.',
                                icon: Lock
                            },
                            {
                                title: 'Local Data Residency',
                                description: 'UAE-based infrastructure options ensuring compliance with local data sovereignty requirements.',
                                icon: Globe
                            },
                            {
                                title: 'Proven Track Record',
                                description: 'Over 15 years of experience delivering 500+ successful enterprise IT projects across MENA.',
                                icon: TrendingUp
                            },
                            {
                                title: 'Technology Partners',
                                description: 'Authorized partnerships with Dell, HP, Cisco, Fortinet, and other leading technology vendors.',
                                icon: Handshake
                            },
                            {
                                title: 'Comprehensive Support',
                                description: 'End-to-end lifecycle management from assessment and design to implementation and ongoing support.',
                                icon: Settings
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-lg mb-4">
                                    <item.icon className="w-7 h-7 text-gray-900" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* CTA Section with Visual Enhancement */}
            < section className="bg-white py-20 relative overflow-hidden" >
                {/* Background decoration */}
                < div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" ></div >

                <div className="container-custom text-center relative">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to Transform Your IT Infrastructure?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Schedule a consultation with our enterprise architects to discuss your requirements
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact?type=consultation"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition-colors shadow-lg"
                            >
                                Schedule Consultation
                                <FaArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="/contact?type=quote"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded hover:bg-gray-50 hover:border-gray-400 transition-colors"
                            >
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
