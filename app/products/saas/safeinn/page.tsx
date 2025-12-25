import type { Metadata } from 'next'
import Link from 'next/link'
import {
    FaShieldAlt,
    FaExclamationTriangle,
    FaClipboardCheck,
    FaTasks,
    FaSearch,
    FaTrain,
    FaRoad,
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
    FaSlidersH
} from 'react-icons/fa'

export const metadata: Metadata = {
    title: 'SafeInn - Railway Safety Management Platform | AEROSYNS',
    description: 'Comprehensive railway safety management software with 32 integrated modules covering incident management, risk assessment, compliance, asset monitoring, and advanced analytics for rail operations.',
    keywords: 'railway safety software, rail safety management, incident management, risk assessment, compliance management, predictive maintenance, safety analytics',
}

const domains = [
    {
        title: 'A. CORE SAFETY MANAGEMENT MODULES',
        color: 'from-red-500 to-red-600',
        modules: [
            {
                number: '1',
                name: 'Incident & Accident Management',
                icon: FaExclamationTriangle,
                features: [
                    'Digital incident reporting (web + mobile)',
                    'Investigation workflows & approvals',
                    'Root cause analysis tools',
                    'Evidence (photo/video/document) capture',
                    'Witness statements',
                    'Severity classification'
                ]
            },
            {
                number: '2',
                name: 'Hazard Identification & Risk Assessment',
                icon: FaSearch,
                features: [
                    'Hazard reporting (employees, contractors, public)',
                    'Risk scoring & matrix',
                    'Hazard register',
                    'Heat maps & risk visualization',
                    'Risk treatment plans'
                ]
            },
            {
                number: '3',
                name: 'Corrective & Preventive Actions (CAPA)',
                icon: FaTasks,
                features: [
                    'Action assignment & tracking',
                    'Workflow automation',
                    'Effectiveness checks',
                    'Closure validation',
                    'Overdue notifications'
                ]
            },
            {
                number: '4',
                name: 'Safety Audits & Inspections',
                icon: FaClipboardCheck,
                features: [
                    'Audit planning & scheduling',
                    'Digital checklists (customizable)',
                    'Mobile inspections (offline mode)',
                    'Non-conformance tracking',
                    'Audit reports & follow-up'
                ]
            },
            {
                number: '5',
                name: 'Safety Observations & Near-Miss Management',
                icon: FaShieldAlt,
                features: [
                    'Quick mobile reporting',
                    'Behaviour-based observations',
                    'Positive safety recognition',
                    'Trend identification and analytics'
                ]
            }
        ]
    },
    {
        title: 'B. OPERATIONAL MONITORING MODULES',
        color: 'from-blue-500 to-blue-600',
        modules: [
            {
                number: '6',
                name: 'Real-Time Track Monitoring',
                icon: FaTrain,
                features: [
                    'Sensor integration (vibration, alignment, temperature)',
                    'Rail stress & track condition analytics',
                    'Ballast & turnout monitoring',
                    'Automated defect detection',
                    'Alert thresholds'
                ]
            },
            {
                number: '7',
                name: 'Level Crossing Safety',
                icon: FaRoad,
                features: [
                    'Crossing incident management',
                    'Signal/barrier malfunction alerts',
                    'Traffic pattern analytics',
                    'Public safety campaign tracking'
                ]
            },
            {
                number: '8',
                name: 'Environmental & Weather Monitoring',
                icon: FaCloud,
                features: [
                    'Weather station integration',
                    'Sandstorm, flood, heat alerts',
                    'Visibility monitoring',
                    'Automated operational restriction triggers'
                ]
            },
            {
                number: '9',
                name: 'Rolling Stock Safety',
                icon: FaTrain,
                features: [
                    'Locomotive & freight condition monitoring',
                    'Brake & wheel condition',
                    'Door/coupling integrity',
                    'Fire detection system integration'
                ]
            },
            {
                number: '10',
                name: 'Signaling & Communications Safety',
                icon: FaSignal,
                features: [
                    'Signal system status',
                    'Interlocking checks',
                    'Communication reliability monitoring',
                    'SCADA integration',
                    'Fail-safe verification'
                ]
            }
        ]
    },
    {
        title: 'C. ASSET & MAINTENANCE MODULES',
        color: 'from-green-500 to-green-600',
        modules: [
            {
                number: '11',
                name: 'Predictive Maintenance',
                icon: FaCog,
                features: [
                    'AI/ML failure prediction',
                    'Optimized scheduling',
                    'Spare inventory integration',
                    'Lifecycle tracking',
                    'Maintenance history analytics'
                ]
            },
            {
                number: '12',
                name: 'Asset Register & Tracking',
                icon: FaMapMarkedAlt,
                features: [
                    'Database of all rail assets',
                    'GIS-enabled asset mapping',
                    'Condition scoring',
                    'Depreciation & replacement planning',
                    'Critical asset flagging'
                ]
            },
            {
                number: '13',
                name: 'Work Order Management',
                icon: FaTools,
                features: [
                    'Maintenance work orders',
                    'Permit-to-work & isolation procedures',
                    'Contractor management',
                    'Completion verification',
                    'Safety observations during maintenance'
                ]
            }
        ]
    },
    {
        title: 'D. COMPLIANCE & REGULATORY MODULES',
        color: 'from-purple-500 to-purple-600',
        modules: [
            {
                number: '14',
                name: 'Regulatory Compliance Management',
                icon: FaFileAlt,
                features: [
                    'FTA and international railway standards mapping',
                    'Compliance dashboards',
                    'Gap analysis',
                    'Regulatory change alerts'
                ]
            },
            {
                number: '15',
                name: 'Safety Management System Documentation',
                icon: FaFolder,
                features: [
                    'Central policy & SOP library',
                    'Version control & approvals',
                    'Controlled distribution',
                    'Staff acknowledgment tracking'
                ]
            },
            {
                number: '16',
                name: 'Permits & Certifications',
                icon: FaCertificate,
                features: [
                    'Equipment & personnel certifications',
                    'Permit-to-work automation',
                    'Expiry alerts',
                    'Competency verification'
                ]
            },
            {
                number: '17',
                name: 'Emergency Response Management',
                icon: FaBell,
                features: [
                    'Emergency response plans',
                    'Incident command structure',
                    'Resource mobilization workflows',
                    'Drill tracking',
                    'Post-incident evaluation'
                ]
            }
        ]
    },
    {
        title: 'E. PEOPLE & TRAINING MODULES',
        color: 'from-orange-500 to-orange-600',
        modules: [
            {
                number: '18',
                name: 'Safety Training Management',
                icon: FaGraduationCap,
                features: [
                    'Training needs analysis',
                    'Course scheduling',
                    'Competency assessments',
                    'Certification tracking',
                    'E-learning support'
                ]
            },
            {
                number: '19',
                name: 'Safety Culture & Behavioral Monitoring',
                icon: FaUsers,
                features: [
                    'Safety culture surveys',
                    'Leading indicators',
                    'Engagement metrics',
                    'Recognition programs',
                    'Suggestion schemes'
                ]
            },
            {
                number: '20',
                name: 'Contractor Safety Management',
                icon: FaHardHat,
                features: [
                    'Contractor pre-qualification',
                    'Safety performance scoring',
                    'Induction tracking',
                    'Contractor incidents',
                    'Permit compliance'
                ]
            }
        ]
    },
    {
        title: 'F. ANALYTICS & REPORTING MODULES',
        color: 'from-indigo-500 to-indigo-600',
        modules: [
            {
                number: '21',
                name: 'Safety Performance Dashboard',
                icon: FaChartLine,
                features: [
                    'KPIs (LTIFR, TRIFR, near-miss rates)',
                    'Leading/lagging indicators',
                    'Trend analysis',
                    'Benchmarking',
                    'Executive summaries'
                ]
            },
            {
                number: '22',
                name: 'Automated Reporting Engine',
                icon: FaFileInvoice,
                features: [
                    'Regulatory reports (automated)',
                    'Daily/weekly/monthly reports',
                    'Board-level summaries',
                    'Custom report builder'
                ]
            },
            {
                number: '23',
                name: 'Advanced Analytics & AI',
                icon: FaBrain,
                features: [
                    'Incident pattern recognition',
                    'Predictive risk modelling',
                    'NLP for report analysis',
                    'Anomaly & correlation detection'
                ]
            },
            {
                number: '24',
                name: 'GIS Integration',
                icon: FaMap,
                features: [
                    'Interactive rail network map',
                    'Risk heat maps',
                    'Incident location mapping',
                    'Asset visualization',
                    'Route-specific hazard layers'
                ]
            }
        ]
    },
    {
        title: 'G. INTEGRATION & DATA MODULES',
        color: 'from-cyan-500 to-cyan-600',
        modules: [
            {
                number: '25',
                name: 'API Integration Hub',
                icon: FaPlug,
                features: [
                    'SCADA, CMMS, ERP, IoT, weather data',
                    'Real-time data sync',
                    '3rd-party integrations'
                ]
            },
            {
                number: '26',
                name: 'Data Management & Quality',
                icon: FaDatabase,
                features: [
                    'Master data governance',
                    'Validation & cleansing tools',
                    'Import/export & migration'
                ]
            },
            {
                number: '27',
                name: 'Document Management',
                icon: FaFolder,
                features: [
                    'Central repository',
                    'Access control',
                    'Search, audit trails',
                    'Digital signatures'
                ]
            }
        ]
    },
    {
        title: 'H. SYSTEM ADMINISTRATION MODULES',
        color: 'from-pink-500 to-pink-600',
        modules: [
            {
                number: '28',
                name: 'User Management & Access Control',
                icon: FaUserShield,
                features: [
                    'RBAC',
                    'SSO, MFA',
                    'User provisioning',
                    'Activity logging'
                ]
            },
            {
                number: '29',
                name: 'Notification & Alert Engine',
                icon: FaBellSlash,
                features: [
                    'Email, SMS, mobile push',
                    'Escalation rules',
                    'Alert filtering & prioritization'
                ]
            },
            {
                number: '30',
                name: 'Workflow Engine',
                icon: FaProjectDiagram,
                features: [
                    'Custom approval workflows',
                    'Automated routing',
                    'Deadline & escalation logic'
                ]
            },
            {
                number: '31',
                name: 'Mobile Applications',
                icon: FaMobileAlt,
                features: [
                    'iOS/Android',
                    'Offline mode',
                    'Photo/video capture',
                    'GPS tagging'
                ]
            },
            {
                number: '32',
                name: 'Configuration & Customization',
                icon: FaSlidersH,
                features: [
                    'Form builder',
                    'Workflow designer',
                    'Dashboard customization',
                    'Business rule engine'
                ]
            }
        ]
    }
]

export default function SafeInnPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <FaShieldAlt className="w-5 h-5" />
                            <span className="text-sm font-semibold">Railway Safety Management Platform</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            SafeInn
                        </h1>
                        <p className="text-xl md:text-2xl text-red-100 mb-8">
                            Comprehensive Safety Management System with 32 Integrated Modules
                        </p>
                        <p className="text-lg text-red-100 mb-10 max-w-3xl mx-auto">
                            End-to-end railway safety platform covering incident management, risk assessment, compliance, operational monitoring, predictive maintenance, and advanced analytics.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/contact?product=safeinn" className="btn-primary bg-white text-red-600 hover:bg-gray-100">
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
                            Why SafeInn?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A unified platform designed specifically for railway safety operations
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: FaShieldAlt,
                                title: 'Comprehensive Coverage',
                                description: '32 integrated modules across 8 major domains',
                                color: 'text-red-600'
                            },
                            {
                                icon: FaMobileAlt,
                                title: 'Mobile-First Design',
                                description: 'iOS/Android apps with offline mode and GPS tagging',
                                color: 'text-blue-600'
                            },
                            {
                                icon: FaBrain,
                                title: 'AI-Powered Analytics',
                                description: 'Predictive risk modeling and pattern recognition',
                                color: 'text-purple-600'
                            },
                            {
                                icon: FaPlug,
                                title: 'Seamless Integration',
                                description: 'SCADA, CMMS, ERP, IoT, and weather data integration',
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
                            32 Integrated Modules
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Organized across 8 major domains for complete railway safety management
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
                                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${domain.color} text-white flex items-center justify-center`}>
                                                <module.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs font-semibold text-gray-500 mb-1">Module {module.number}</div>
                                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                                                    {module.name}
                                                </h4>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {module.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <span className="text-red-500 mt-1">•</span>
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

            {/* Technical Specifications */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Technical Capabilities
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Platform Features',
                                items: [
                                    'Web-based & mobile applications',
                                    'Offline mode support',
                                    'Real-time data synchronization',
                                    'Role-based access control (RBAC)',
                                    'Single Sign-On (SSO) & MFA',
                                    'Multi-language support'
                                ]
                            },
                            {
                                title: 'Integration Capabilities',
                                items: [
                                    'SCADA system integration',
                                    'CMMS & ERP connectivity',
                                    'IoT sensor integration',
                                    'Weather data APIs',
                                    'GIS mapping systems',
                                    'RESTful API architecture'
                                ]
                            },
                            {
                                title: 'Analytics & AI',
                                items: [
                                    'Machine learning predictions',
                                    'Natural language processing',
                                    'Pattern recognition',
                                    'Anomaly detection',
                                    'Risk heat mapping',
                                    'Predictive maintenance'
                                ]
                            }
                        ].map((spec, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{spec.title}</h3>
                                <ul className="space-y-3">
                                    {spec.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Railway Safety Management?
                    </h2>
                    <p className="text-xl text-red-100 mb-10 max-w-3xl mx-auto">
                        Schedule a demo to see how SafeInn can help you achieve zero incidents and regulatory excellence.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/contact?product=safeinn" className="btn-primary bg-white text-red-600 hover:bg-gray-100">
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
