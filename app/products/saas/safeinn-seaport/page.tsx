import type { Metadata } from 'next'
import Link from 'next/link'
import {
    FaShieldAlt,
    FaShip,
    FaAnchor,
    FaExclamationTriangle,
    FaClipboardCheck,
    FaTasks,
    FaSearch,
    FaWater,
    FaCloud,
    FaWrench,
    FaSignal,
    FaCog,
    FaMapMarkedAlt,
    FaTools,
    FaFileAlt,
    FaCertificate,
    FaBell,
    FaGraduationCap,
    FaUsers,
    FaHardHat,
    FaChartLine,
    FaFileInvoice,
    FaBrain,
    FaMap,
    FaPlug,
    FaDatabase,
    FaFolder,
    FaUserShield,
    FaBellSlash,
    FaProjectDiagram,
    FaMobileAlt,
    FaSlidersH,
    FaFire,
    FaVideo,
    FaLock,
    FaTruck,
    FaBoxes,
    FaOilCan,
    FaRadiation
} from 'react-icons/fa'

export const metadata: Metadata = {
    title: 'SafeInn Seaport - Maritime Safety Management System | AEROSYNS',
    description: 'Comprehensive seaport and maritime safety management platform with 38+ integrated modules covering vessel operations, cargo handling, ISPS compliance, emergency response, and port-specific risk management.',
    keywords: 'seaport safety software, maritime safety management, port operations, ISPS compliance, cargo safety, vessel safety, port security',
}

const domains = [
    {
        title: 'A. VESSEL & MARINE OPERATIONS SAFETY',
        color: 'from-blue-500 to-blue-600',
        modules: [
            {
                number: '1',
                name: 'Vessel Traffic & Berthing Safety',
                icon: FaShip,
                features: [
                    'Vessel arrival/departure tracking',
                    'Berthing incident management',
                    'Pilot boarding safety',
                    'Mooring operations monitoring',
                    'Vessel collision prevention',
                    'VTS (Vessel Traffic Service) integration'
                ]
            },
            {
                number: '2',
                name: 'Marine Navigation Safety',
                icon: FaAnchor,
                features: [
                    'Channel depth monitoring',
                    'Navigation aid status tracking',
                    'Buoy & beacon maintenance',
                    'Dredging operations safety',
                    'Tidal & current monitoring',
                    'Hydrographic survey tracking'
                ]
            },
            {
                number: '3',
                name: 'Tugboat & Pilot Operations',
                icon: FaShip,
                features: [
                    'Tug operation incident tracking',
                    'Pilot transfer safety',
                    'Towline & equipment inspection',
                    'Communication protocol compliance',
                    'Weather restriction monitoring',
                    'Crew competency verification'
                ]
            },
            {
                number: '4',
                name: 'Marine Pollution Prevention',
                icon: FaWater,
                features: [
                    'Oil spill incident management',
                    'Ballast water compliance',
                    'Waste reception tracking',
                    'MARPOL compliance monitoring',
                    'Spill response equipment tracking',
                    'Environmental monitoring'
                ]
            }
        ]
    },
    {
        title: 'B. CARGO HANDLING & TERMINAL OPERATIONS',
        color: 'from-green-500 to-green-600',
        modules: [
            {
                number: '5',
                name: 'Container Terminal Safety',
                icon: FaBoxes,
                features: [
                    'Crane operation incident tracking',
                    'Container handling safety',
                    'Lashing & securing compliance',
                    'Spreader & twist lock inspections',
                    'Yard equipment safety',
                    'Stack collapse prevention'
                ]
            },
            {
                number: '6',
                name: 'Bulk Cargo Operations',
                icon: FaTruck,
                features: [
                    'Loading/unloading incident management',
                    'Dust & spillage control',
                    'Conveyor system safety',
                    'Grab & bucket inspections',
                    'Hold cleaning safety',
                    'Cargo shift prevention'
                ]
            },
            {
                number: '7',
                name: 'Liquid Bulk & Tanker Operations',
                icon: FaOilCan,
                features: [
                    'Tanker loading/discharge safety',
                    'Pipeline integrity monitoring',
                    'Vapor control systems',
                    'Static electricity prevention',
                    'Emergency shutdown procedures',
                    'Spill containment readiness'
                ]
            },
            {
                number: '8',
                name: 'Dangerous Goods Management',
                icon: FaRadiation,
                features: [
                    'IMDG Code compliance',
                    'Hazmat storage & segregation',
                    'Dangerous cargo declaration',
                    'Emergency response planning',
                    'Placarding & labeling',
                    'Incident reporting (hazmat)'
                ]
            },
            {
                number: '9',
                name: 'Ro-Ro & Vehicle Terminal Safety',
                icon: FaTruck,
                features: [
                    'Ramp operation safety',
                    'Vehicle lashing compliance',
                    'Loading/unloading incidents',
                    'Deck cargo securing',
                    'Driver safety protocols',
                    'Equipment inspection tracking'
                ]
            }
        ]
    },
    {
        title: 'C. PORT SECURITY & ISPS COMPLIANCE',
        color: 'from-red-500 to-red-600',
        modules: [
            {
                number: '10',
                name: 'ISPS Code Compliance',
                icon: FaLock,
                features: [
                    'Port Facility Security Plan (PFSP)',
                    'Security level management',
                    'Access control & visitor management',
                    'Security drill tracking',
                    'Declaration of Security (DoS)',
                    'PFSO (Port Facility Security Officer) workflows'
                ]
            },
            {
                number: '11',
                name: 'Perimeter & Access Security',
                icon: FaVideo,
                features: [
                    'CCTV surveillance integration',
                    'Perimeter breach detection',
                    'Gate access control',
                    'Vehicle & cargo screening',
                    'Biometric access systems',
                    'Security incident tracking'
                ]
            },
            {
                number: '12',
                name: 'Cybersecurity for Port Systems',
                icon: FaShieldAlt,
                features: [
                    'OT/IT security monitoring',
                    'SCADA system protection',
                    'Cyber incident response',
                    'Vulnerability assessments',
                    'Security patch management',
                    'Awareness training tracking'
                ]
            }
        ]
    },
    {
        title: 'D. EMERGENCY RESPONSE & CRISIS MANAGEMENT',
        color: 'from-orange-500 to-orange-600',
        modules: [
            {
                number: '13',
                name: 'Port Emergency Response Plan',
                icon: FaBell,
                features: [
                    'Emergency plan documentation',
                    'Incident command activation',
                    'Resource mobilization',
                    'Multi-agency coordination',
                    'Evacuation procedures',
                    'Post-incident review'
                ]
            },
            {
                number: '14',
                name: 'Fire & Explosion Response',
                icon: FaFire,
                features: [
                    'Fire detection system integration',
                    'Firefighting equipment tracking',
                    'Fire drill management',
                    'Hot work permit system',
                    'Explosion risk assessment',
                    'Emergency shutdown procedures'
                ]
            },
            {
                number: '15',
                name: 'Oil Spill & Pollution Response',
                icon: FaWater,
                features: [
                    'Spill response plan activation',
                    'Boom deployment tracking',
                    'Skimmer & recovery equipment',
                    'Dispersant application logs',
                    'Wildlife rescue coordination',
                    'Cleanup progress monitoring'
                ]
            },
            {
                number: '16',
                name: 'Medical & Rescue Operations',
                icon: FaUsers,
                features: [
                    'Medical emergency response',
                    'Man overboard procedures',
                    'Rescue boat readiness',
                    'First aid station management',
                    'Ambulance coordination',
                    'Casualty evacuation tracking'
                ]
            },
            {
                number: '17',
                name: 'Weather & Natural Disaster Response',
                icon: FaCloud,
                features: [
                    'Storm & cyclone preparedness',
                    'Tsunami warning integration',
                    'Vessel evacuation procedures',
                    'Cargo securing protocols',
                    'Port closure management',
                    'Damage assessment workflows'
                ]
            }
        ]
    },
    {
        title: 'E. COMPLIANCE & REGULATORY',
        color: 'from-purple-500 to-purple-600',
        modules: [
            {
                number: '18',
                name: 'IMO & SOLAS Compliance',
                icon: FaFileAlt,
                features: [
                    'SOLAS convention compliance',
                    'IMO regulations tracking',
                    'Port State Control (PSC) preparation',
                    'Flag State requirements',
                    'Compliance gap analysis',
                    'Regulatory change alerts'
                ]
            },
            {
                number: '19',
                name: 'Environmental Compliance',
                icon: FaWater,
                features: [
                    'MARPOL Annex compliance',
                    'Air quality monitoring',
                    'Noise pollution tracking',
                    'Waste management compliance',
                    'Green port initiatives',
                    'Carbon footprint reporting'
                ]
            },
            {
                number: '20',
                name: 'Occupational Health & Safety',
                icon: FaHardHat,
                features: [
                    'OSHA/ILO compliance',
                    'Workplace incident tracking',
                    'PPE compliance monitoring',
                    'Confined space entry permits',
                    'Working at height safety',
                    'Occupational health programs'
                ]
            },
            {
                number: '21',
                name: 'Audit & Inspection Management',
                icon: FaClipboardCheck,
                features: [
                    'Internal safety audits',
                    'External inspection tracking',
                    'Non-conformance management',
                    'Corrective action plans',
                    'Audit finding closure',
                    'Continuous improvement tracking'
                ]
            }
        ]
    },
    {
        title: 'F. EQUIPMENT & ASSET SAFETY',
        color: 'from-indigo-500 to-indigo-600',
        modules: [
            {
                number: '22',
                name: 'Crane & Lifting Equipment',
                icon: FaCog,
                features: [
                    'Crane inspection schedules',
                    'Load testing compliance',
                    'Wire rope & sling tracking',
                    'Operator certification',
                    'Preventive maintenance',
                    'Incident investigation'
                ]
            },
            {
                number: '23',
                name: 'Mobile Equipment Safety',
                icon: FaTruck,
                features: [
                    'Forklift & reach stacker safety',
                    'Terminal tractor inspections',
                    'Operator training tracking',
                    'Pre-shift inspection logs',
                    'Collision avoidance systems',
                    'Maintenance compliance'
                ]
            },
            {
                number: '24',
                name: 'Fixed Plant & Infrastructure',
                icon: FaTools,
                features: [
                    'Conveyor system monitoring',
                    'Pipeline integrity management',
                    'Electrical system safety',
                    'Structural integrity checks',
                    'Corrosion monitoring',
                    'Predictive maintenance'
                ]
            },
            {
                number: '25',
                name: 'Marine Equipment',
                icon: FaAnchor,
                features: [
                    'Mooring equipment inspection',
                    'Fender system monitoring',
                    'Bollard & cleat maintenance',
                    'Gangway safety checks',
                    'Life-saving equipment',
                    'Navigation aid maintenance'
                ]
            }
        ]
    },
    {
        title: 'G. PEOPLE & TRAINING',
        color: 'from-cyan-500 to-cyan-600',
        modules: [
            {
                number: '26',
                name: 'Maritime Safety Training',
                icon: FaGraduationCap,
                features: [
                    'STCW training compliance',
                    'Port-specific inductions',
                    'Dangerous goods training',
                    'Emergency response drills',
                    'Competency assessments',
                    'Refresher training tracking'
                ]
            },
            {
                number: '27',
                name: 'Certification & Licensing',
                icon: FaCertificate,
                features: [
                    'Seafarer certification tracking',
                    'Equipment operator licenses',
                    'Security clearances',
                    'Medical fitness certificates',
                    'Expiry alerts & renewals',
                    'Competency verification'
                ]
            },
            {
                number: '28',
                name: 'Contractor & Vendor Safety',
                icon: FaHardHat,
                features: [
                    'Contractor pre-qualification',
                    'Safety performance scoring',
                    'Permit-to-work system',
                    'Contractor incident tracking',
                    'Induction compliance',
                    'Vendor safety audits'
                ]
            },
            {
                number: '29',
                name: 'Safety Culture & Behavior',
                icon: FaUsers,
                features: [
                    'Safety culture surveys',
                    'Behavioral observation programs',
                    'Near-miss reporting promotion',
                    'Safety suggestion schemes',
                    'Recognition & rewards',
                    'Leading indicator tracking'
                ]
            }
        ]
    },
    {
        title: 'H. ANALYTICS, INTEGRATION & ADMINISTRATION',
        color: 'from-pink-500 to-pink-600',
        modules: [
            {
                number: '30',
                name: 'Safety Performance Dashboard',
                icon: FaChartLine,
                features: [
                    'Real-time KPI monitoring',
                    'Incident rate tracking (LTIFR, TRIFR)',
                    'Near-miss statistics',
                    'Trend analysis & forecasting',
                    'Benchmarking capabilities',
                    'Executive safety reports'
                ]
            },
            {
                number: '31',
                name: 'Advanced Analytics & AI',
                icon: FaBrain,
                features: [
                    'Incident pattern recognition',
                    'Predictive risk modeling',
                    'Natural language processing',
                    'Anomaly detection',
                    'Root cause analysis automation',
                    'Safety forecasting'
                ]
            },
            {
                number: '32',
                name: 'GIS & Port Mapping',
                icon: FaMap,
                features: [
                    'Interactive port map',
                    'Incident heat mapping',
                    'Asset location tracking',
                    'Berth & terminal visualization',
                    'Hazard zone mapping',
                    'Emergency response routing'
                ]
            },
            {
                number: '33',
                name: 'System Integration Hub',
                icon: FaPlug,
                features: [
                    'Port Management System (PMS) integration',
                    'VTS system connectivity',
                    'Weather data APIs',
                    'SCADA integration',
                    'Access control systems',
                    'Real-time data synchronization'
                ]
            },
            {
                number: '34',
                name: 'Mobile Operations',
                icon: FaMobileAlt,
                features: [
                    'iOS/Android native apps',
                    'Offline inspection mode',
                    'Photo/video/voice capture',
                    'GPS location tagging',
                    'Push notifications',
                    'Real-time sync'
                ]
            },
            {
                number: '35',
                name: 'Document & Records Management',
                icon: FaFolder,
                features: [
                    'Safety document repository',
                    'Version control & approvals',
                    'Digital signatures',
                    'Audit trail tracking',
                    'Retention policy automation',
                    'Search & retrieval'
                ]
            },
            {
                number: '36',
                name: 'User Management & Security',
                icon: FaUserShield,
                features: [
                    'Role-based access control',
                    'SSO & MFA support',
                    'Activity logging',
                    'Data encryption',
                    'Compliance with data protection',
                    'User provisioning workflows'
                ]
            },
            {
                number: '37',
                name: 'Workflow & Automation',
                icon: FaProjectDiagram,
                features: [
                    'Custom approval workflows',
                    'Automated notifications',
                    'Escalation rules',
                    'Task assignment & tracking',
                    'Deadline management',
                    'Business rule engine'
                ]
            },
            {
                number: '38',
                name: 'Reporting Engine',
                icon: FaFileInvoice,
                features: [
                    'Automated regulatory reports',
                    'Custom report builder',
                    'Scheduled report distribution',
                    'Dashboard customization',
                    'Data export capabilities',
                    'Board-level summaries'
                ]
            }
        ]
    }
]

export default function SafeInnSeaportPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <FaShip className="w-5 h-5" />
                            <span className="text-sm font-semibold">Maritime & Seaport Safety Management</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            SafeInn Seaport
                        </h1>
                        <p className="text-xl md:text-2xl text-cyan-100 mb-8">
                            Comprehensive Maritime Safety Platform with 38+ Integrated Modules
                        </p>
                        <p className="text-lg text-cyan-100 mb-10 max-w-3xl mx-auto">
                            IMO & ISPS-compliant platform covering vessel operations, cargo handling, port security, emergency response, environmental compliance, and maritime-specific risk management.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link href="/contact?product=safeinn-seaport" className="btn-primary bg-white text-cyan-600 hover:bg-gray-100">
                                Request Demo
                            </Link>
                            <Link href="#modules" className="btn-secondary border-white text-white hover:bg-white/10">
                                Explore Modules
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why SafeInn Seaport?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Purpose-built for maritime safety and port operations management
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: FaShieldAlt,
                                title: 'IMO & ISPS Compliant',
                                description: 'Full compliance with IMO, SOLAS, MARPOL, and ISPS Code',
                                color: 'text-cyan-600'
                            },
                            {
                                icon: FaShip,
                                title: 'Maritime-Specific',
                                description: '38+ modules designed for seaport operations',
                                color: 'text-blue-600'
                            },
                            {
                                icon: FaBrain,
                                title: 'AI-Powered Analytics',
                                description: 'Predictive risk modeling and incident forecasting',
                                color: 'text-purple-600'
                            },
                            {
                                icon: FaMobileAlt,
                                title: 'Mobile-First',
                                description: 'Offline inspections with GPS and photo capture',
                                color: 'text-green-600'
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <benefit.icon className={`w-12 h-12 ${benefit.color} mb-4`} />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Modules by Domain */}
            <section id="modules" className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            38+ Integrated Modules
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive coverage of all seaport safety domains
                        </p>
                    </div>

                    {domains.map((domain, domainIndex) => (
                        <div key={domainIndex} className="mb-16">
                            <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${domain.color} text-white px-6 py-3 rounded-lg mb-8`}>
                                <h3 className="text-2xl font-bold">{domain.title}</h3>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {domain.modules.map((module, moduleIndex) => (
                                    <div
                                        key={moduleIndex}
                                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${domain.color} text-white flex items-center justify-center`}>
                                                <module.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs font-semibold text-gray-500 mb-1">Module {module.number}</div>
                                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                                                    {module.name}
                                                </h4>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {module.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <span className="text-cyan-500 mt-1">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Maritime Compliance */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Maritime & Regulatory Compliance
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Built to meet international maritime safety and security standards
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'IMO Conventions',
                                items: [
                                    'SOLAS - Safety of Life at Sea',
                                    'MARPOL - Marine Pollution',
                                    'ISPS Code - Port Security',
                                    'STCW - Training & Certification',
                                    'Port State Control compliance',
                                    'Flag State requirements'
                                ]
                            },
                            {
                                title: 'Safety Management',
                                items: [
                                    'ISM Code implementation',
                                    'Risk assessment & mitigation',
                                    'Emergency preparedness',
                                    'Incident investigation',
                                    'Continuous improvement',
                                    'Safety culture promotion'
                                ]
                            },
                            {
                                title: 'Environmental & Security',
                                items: [
                                    'Environmental management',
                                    'Oil spill response',
                                    'Waste management compliance',
                                    'PFSP (Port Facility Security Plan)',
                                    'Cybersecurity for OT/IT',
                                    'Green port initiatives'
                                ]
                            }
                        ].map((spec, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{spec.title}</h3>
                                <ul className="space-y-3">
                                    {spec.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-800 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Seaport Safety Management?
                    </h2>
                    <p className="text-xl text-cyan-100 mb-10 max-w-3xl mx-auto">
                        Join leading ports worldwide in achieving IMO compliance and operational excellence.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/contact?product=safeinn-seaport" className="btn-primary bg-white text-cyan-600 hover:bg-gray-100">
                            Schedule Demo
                        </Link>
                        <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
