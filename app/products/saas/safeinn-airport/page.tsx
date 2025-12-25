import type { Metadata } from 'next'
import Link from 'next/link'
import {
    FaShieldAlt,
    FaPlane,
    FaExclamationTriangle,
    FaClipboardCheck,
    FaTasks,
    FaSearch,
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
    FaSlidersH,
    FaFire,
    FaVideo,
    FaLock,
    FaTruck,
    FaSnowflake
} from 'react-icons/fa'

export const metadata: Metadata = {
    title: 'SafeInn Airport - Airport Safety Management System | AEROSYNS',
    description: 'Comprehensive airport safety management platform with 35+ integrated modules covering airside operations, passenger safety, emergency response, compliance, and aviation-specific risk management.',
    keywords: 'airport safety software, aviation safety management, airside operations, airport compliance, emergency response, safety management system, SMS',
}

const domains = [
    {
        title: 'A. AIRSIDE OPERATIONS SAFETY',
        color: 'from-blue-500 to-blue-600',
        modules: [
            {
                number: '1',
                name: 'Runway & Taxiway Safety',
                icon: FaPlane,
                features: [
                    'Foreign Object Debris (FOD) reporting & tracking',
                    'Runway incursion prevention & monitoring',
                    'Surface condition monitoring (wet, ice, snow)',
                    'Pavement condition assessment',
                    'Lighting system status & alerts',
                    'Wildlife hazard management'
                ]
            },
            {
                number: '2',
                name: 'Apron & Aircraft Stand Safety',
                icon: FaMapMarkedAlt,
                features: [
                    'Ground handling incident reporting',
                    'Aircraft damage tracking',
                    'Equipment collision prevention',
                    'Marshalling & pushback safety',
                    'Jet blast & prop wash zones',
                    'Stand allocation safety checks'
                ]
            },
            {
                number: '3',
                name: 'Airfield Lighting & NAVAIDS',
                icon: FaSignal,
                features: [
                    'AGL (Airfield Ground Lighting) monitoring',
                    'PAPI/VASIS system status',
                    'Approach lighting maintenance',
                    'ILS/VOR/DME equipment tracking',
                    'Power supply redundancy monitoring',
                    'Automated fault detection'
                ]
            },
            {
                number: '4',
                name: 'Vehicle & Equipment Safety',
                icon: FaTruck,
                features: [
                    'Airside vehicle permits & tracking',
                    'Driver authorization & training',
                    'Vehicle inspection schedules',
                    'Speed monitoring & violations',
                    'Equipment certification tracking',
                    'Maintenance compliance'
                ]
            },
            {
                number: '5',
                name: 'Wildlife Hazard Management',
                icon: FaSearch,
                features: [
                    'Bird strike reporting & analysis',
                    'Wildlife activity monitoring',
                    'Habitat modification tracking',
                    'Dispersal action logs',
                    'Seasonal risk assessment',
                    'ICAO wildlife reporting'
                ]
            }
        ]
    },
    {
        title: 'B. PASSENGER & TERMINAL SAFETY',
        color: 'from-green-500 to-green-600',
        modules: [
            {
                number: '6',
                name: 'Passenger Incident Management',
                icon: FaUsers,
                features: [
                    'Slip, trip, fall incident tracking',
                    'Medical emergency response',
                    'Lost child protocols',
                    'Crowd management incidents',
                    'Escalator/elevator safety',
                    'Witness statement collection'
                ]
            },
            {
                number: '7',
                name: 'Terminal Security Integration',
                icon: FaLock,
                features: [
                    'Security incident correlation',
                    'Access control violations',
                    'CCTV integration for investigations',
                    'Prohibited items tracking',
                    'Security drill management',
                    'Threat assessment workflows'
                ]
            },
            {
                number: '8',
                name: 'Baggage Handling Safety',
                icon: FaWrench,
                features: [
                    'BHS (Baggage Handling System) incidents',
                    'Conveyor belt safety monitoring',
                    'Baggage damage tracking',
                    'Loader injury prevention',
                    'Equipment lockout/tagout',
                    'Maintenance safety protocols'
                ]
            },
            {
                number: '9',
                name: 'Fire & Life Safety',
                icon: FaFire,
                features: [
                    'Fire alarm system integration',
                    'Sprinkler system monitoring',
                    'Emergency exit compliance',
                    'Fire drill tracking & evaluation',
                    'Evacuation plan management',
                    'Fire extinguisher inspections'
                ]
            }
        ]
    },
    {
        title: 'C. EMERGENCY RESPONSE & CRISIS MANAGEMENT',
        color: 'from-red-500 to-red-600',
        modules: [
            {
                number: '10',
                name: 'Airport Emergency Plan (AEP)',
                icon: FaBell,
                features: [
                    'Emergency response plan documentation',
                    'Incident command system activation',
                    'Resource mobilization workflows',
                    'Communication tree automation',
                    'Multi-agency coordination',
                    'Post-incident debriefing'
                ]
            },
            {
                number: '11',
                name: 'Aircraft Emergency Response',
                icon: FaPlane,
                features: [
                    'Aircraft accident/incident protocols',
                    'ARFF (Aircraft Rescue & Firefighting) dispatch',
                    'Crash grid location mapping',
                    'Mutual aid coordination',
                    'Family assistance center activation',
                    'Media management workflows'
                ]
            },
            {
                number: '12',
                name: 'Medical Emergency Management',
                icon: FaUsers,
                features: [
                    'Medical emergency response tracking',
                    'Ambulance dispatch integration',
                    'AED location mapping',
                    'First responder coordination',
                    'Hospital notification workflows',
                    'Medical equipment inventory'
                ]
            },
            {
                number: '13',
                name: 'Security Emergency Response',
                icon: FaLock,
                features: [
                    'Security threat response protocols',
                    'Bomb threat procedures',
                    'Active shooter response',
                    'Hijacking/unlawful interference',
                    'Cybersecurity incident response',
                    'Law enforcement coordination'
                ]
            }
        ]
    },
    {
        title: 'D. COMPLIANCE & REGULATORY',
        color: 'from-purple-500 to-purple-600',
        modules: [
            {
                number: '14',
                name: 'ICAO Annex 14 Compliance',
                icon: FaFileAlt,
                features: [
                    'Aerodrome standards compliance',
                    'Obstacle limitation surfaces',
                    'Runway safety area monitoring',
                    'Visual aids compliance',
                    'Rescue & firefighting requirements',
                    'Gap analysis & remediation'
                ]
            },
            {
                number: '15',
                name: 'Safety Management System (SMS)',
                icon: FaShieldAlt,
                features: [
                    'ICAO SMS framework implementation',
                    'Safety policy & objectives',
                    'Safety risk management',
                    'Safety assurance processes',
                    'Safety promotion programs',
                    'SMS manual version control'
                ]
            },
            {
                number: '16',
                name: 'Regulatory Reporting',
                icon: FaFileInvoice,
                features: [
                    'Mandatory occurrence reporting',
                    'ICAO ADREP reporting',
                    'National CAA submissions',
                    'Safety performance indicators',
                    'Quarterly/annual reports',
                    'Automated report generation'
                ]
            },
            {
                number: '17',
                name: 'Audit & Inspection Management',
                icon: FaClipboardCheck,
                features: [
                    'Internal safety audits',
                    'ICAO USOAP preparation',
                    'CAA inspection tracking',
                    'Non-conformance management',
                    'Corrective action plans',
                    'Audit finding closure'
                ]
            }
        ]
    },
    {
        title: 'E. OPERATIONAL MONITORING',
        color: 'from-orange-500 to-orange-600',
        modules: [
            {
                number: '18',
                name: 'Weather & Environmental Monitoring',
                icon: FaCloud,
                features: [
                    'METAR/TAF integration',
                    'Low visibility procedures (LVP)',
                    'Windshear detection',
                    'Lightning detection system',
                    'Snow & ice management',
                    'Temperature & humidity tracking'
                ]
            },
            {
                number: '19',
                name: 'Airfield Inspection Management',
                icon: FaSearch,
                features: [
                    'Daily airfield inspections',
                    'Mobile inspection app (offline)',
                    'Photo/video evidence capture',
                    'GPS-tagged defect reporting',
                    'Inspection route optimization',
                    'Trend analysis & hot spots'
                ]
            },
            {
                number: '20',
                name: 'Pavement Management',
                icon: FaRoad,
                features: [
                    'Pavement condition index (PCI)',
                    'Crack & pothole tracking',
                    'Friction testing results',
                    'Maintenance scheduling',
                    'Rehabilitation planning',
                    'Load classification monitoring'
                ]
            },
            {
                number: '21',
                name: 'Surveillance & Monitoring',
                icon: FaVideo,
                features: [
                    'CCTV integration for safety',
                    'Radar system monitoring',
                    'ADS-B tracking integration',
                    'Perimeter intrusion detection',
                    'Automated alert generation',
                    'Video analytics for incidents'
                ]
            }
        ]
    },
    {
        title: 'F. TRAINING & COMPETENCY',
        color: 'from-indigo-500 to-indigo-600',
        modules: [
            {
                number: '22',
                name: 'Aviation Safety Training',
                icon: FaGraduationCap,
                features: [
                    'SMS training programs',
                    'Airside driving training',
                    'Emergency response drills',
                    'Human factors training',
                    'Competency assessments',
                    'Recurrent training tracking'
                ]
            },
            {
                number: '23',
                name: 'Certification & Licensing',
                icon: FaCertificate,
                features: [
                    'Personnel certification tracking',
                    'Airside driving permits',
                    'Equipment operator licenses',
                    'Medical certificate monitoring',
                    'Expiry alerts & renewals',
                    'Competency verification'
                ]
            },
            {
                number: '24',
                name: 'Safety Culture Monitoring',
                icon: FaUsers,
                features: [
                    'Safety culture surveys',
                    'Just culture implementation',
                    'Voluntary reporting promotion',
                    'Safety suggestion schemes',
                    'Recognition programs',
                    'Leading indicator tracking'
                ]
            }
        ]
    },
    {
        title: 'G. ASSET & MAINTENANCE SAFETY',
        color: 'from-cyan-500 to-cyan-600',
        modules: [
            {
                number: '25',
                name: 'Critical Equipment Monitoring',
                icon: FaCog,
                features: [
                    'ARFF vehicle readiness',
                    'Snowplow & de-icing equipment',
                    'Airfield lighting systems',
                    'Generator & UPS monitoring',
                    'Fuel system integrity',
                    'Automated status dashboards'
                ]
            },
            {
                number: '26',
                name: 'Predictive Maintenance',
                icon: FaWrench,
                features: [
                    'AI/ML failure prediction',
                    'Condition-based maintenance',
                    'Spare parts optimization',
                    'Maintenance history analytics',
                    'Lifecycle cost analysis',
                    'Reliability-centered maintenance'
                ]
            },
            {
                number: '27',
                name: 'Work Permit & Isolation',
                icon: FaTools,
                features: [
                    'Permit-to-work automation',
                    'Hot work permits',
                    'Confined space entry',
                    'Electrical isolation',
                    'Airside work coordination',
                    'Contractor safety integration'
                ]
            }
        ]
    },
    {
        title: 'H. ANALYTICS & INTEGRATION',
        color: 'from-pink-500 to-pink-600',
        modules: [
            {
                number: '28',
                name: 'Safety Performance Dashboard',
                icon: FaChartLine,
                features: [
                    'Real-time KPI monitoring',
                    'Runway incursion metrics',
                    'Bird strike statistics',
                    'Incident trend analysis',
                    'Benchmarking with peer airports',
                    'Executive safety reports'
                ]
            },
            {
                number: '29',
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
                number: '30',
                name: 'GIS & Spatial Analysis',
                icon: FaMap,
                features: [
                    'Interactive airport map',
                    'Incident heat mapping',
                    'Asset location tracking',
                    'Obstacle mapping',
                    'Safety zone visualization',
                    'Route-specific hazards'
                ]
            },
            {
                number: '31',
                name: 'System Integration Hub',
                icon: FaPlug,
                features: [
                    'AODB integration',
                    'FIDS/BIDS connectivity',
                    'Weather system APIs',
                    'SCADA integration',
                    'Access control systems',
                    'Real-time data synchronization'
                ]
            },
            {
                number: '32',
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
                number: '33',
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
                number: '34',
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
                number: '35',
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
            }
        ]
    }
]

export default function SafeInnAirportPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <FaPlane className="w-5 h-5" />
                            <span className="text-sm font-semibold">Airport Safety Management System</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            SafeInn Airport
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8">
                            Comprehensive Aviation Safety Platform with 35+ Integrated Modules
                        </p>
                        <p className="text-lg text-blue-100 mb-10 max-w-3xl mx-auto">
                            ICAO SMS-compliant platform covering airside operations, passenger safety, emergency response, regulatory compliance, and aviation-specific risk management.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/contact?product=safeinn-airport" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
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
                            Why SafeInn Airport?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Purpose-built for aviation safety management and ICAO compliance
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: FaShieldAlt,
                                title: 'ICAO SMS Compliant',
                                description: 'Full compliance with ICAO Annex 14 and SMS framework',
                                color: 'text-blue-600'
                            },
                            {
                                icon: FaPlane,
                                title: 'Aviation-Specific',
                                description: '35+ modules designed for airport operations',
                                color: 'text-green-600'
                            },
                            {
                                icon: FaBrain,
                                title: 'AI-Powered Insights',
                                description: 'Predictive analytics and pattern recognition',
                                color: 'text-purple-600'
                            },
                            {
                                icon: FaMobileAlt,
                                title: 'Mobile-First',
                                description: 'Offline airfield inspections with GPS tagging',
                                color: 'text-orange-600'
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
                            35+ Integrated Modules
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive coverage of all airport safety domains
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
                                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${domain.color} text-white flex items-center justify-center`}>
                                                <module.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs font-semibold text-gray-500 mb-1">Module {module.number}</div>
                                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {module.name}
                                                </h4>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {module.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <span className="text-blue-500 mt-1">•</span>
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

            {/* ICAO Compliance */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            ICAO & Regulatory Compliance
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Built to meet international aviation safety standards
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'ICAO Annexes',
                                items: [
                                    'Annex 14 - Aerodromes',
                                    'Annex 19 - Safety Management',
                                    'Doc 9859 - SMS Manual',
                                    'Doc 9981 - PANS-Aerodromes',
                                    'USOAP compliance tracking',
                                    'State safety program alignment'
                                ]
                            },
                            {
                                title: 'Safety Management',
                                items: [
                                    'Safety policy & objectives',
                                    'Safety risk management (SRM)',
                                    'Safety assurance (SA)',
                                    'Safety promotion (SP)',
                                    'Just culture implementation',
                                    'Continuous improvement'
                                ]
                            },
                            {
                                title: 'Reporting & Analytics',
                                items: [
                                    'Mandatory occurrence reporting',
                                    'ADREP reporting format',
                                    'Safety performance indicators',
                                    'Trend analysis & forecasting',
                                    'Benchmarking capabilities',
                                    'Executive dashboards'
                                ]
                            }
                        ].map((spec, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{spec.title}</h3>
                                <ul className="space-y-3">
                                    {spec.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Elevate Your Airport Safety Management?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Join leading airports worldwide in achieving ICAO compliance and operational excellence.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/contact?product=safeinn-airport" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
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
