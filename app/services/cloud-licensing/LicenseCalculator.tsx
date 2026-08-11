'use client'

import { useState } from 'react'
import { FaCalculator, FaCheckCircle, FaArrowRight } from 'react-icons/fa'

interface VendorOption {
    id: string
    name: string
    avgWastePct: number
    icon: string
}

const vendors: VendorOption[] = [
    { id: 'email', name: 'Business Email & Workspace', avgWastePct: 30, icon: '✉️' },
    { id: 'm365', name: 'Microsoft 365 / Azure', avgWastePct: 32, icon: '🟦' },
    { id: 'aws', name: 'AWS Cloud & Savings Plans', avgWastePct: 28, icon: '🟧' },
    { id: 'oracle', name: 'Oracle DB & Cloud', avgWastePct: 35, icon: '🔴' },
    { id: 'vmware', name: 'VMware VCF & Broadcom', avgWastePct: 40, icon: '🟩' },
    { id: 'cisco', name: 'Cisco & Security EA', avgWastePct: 25, icon: '🔷' },
]

export default function LicenseCalculator() {
    const [monthlySpend, setMonthlySpend] = useState<number>(50000)
    const [selectedVendors, setSelectedVendors] = useState<string[]>(['m365', 'aws'])
    const [userSeats, setUserSeats] = useState<number>(250)

    const toggleVendor = (id: string) => {
        if (selectedVendors.includes(id)) {
            if (selectedVendors.length > 1) {
                setSelectedVendors(selectedVendors.filter(v => v !== id))
            }
        } else {
            setSelectedVendors([...selectedVendors, id])
        }
    }

    // Calculation logic
    const selectedVendorObjs = vendors.filter(v => selectedVendors.includes(v.id))
    const avgWaste = selectedVendorObjs.reduce((acc, curr) => acc + curr.avgWastePct, 0) / (selectedVendorObjs.length || 1)
    
    const annualSpend = monthlySpend * 12
    const estimatedAnnualWaste = Math.round(annualSpend * (avgWaste / 100))
    const estimatedAerosynsSavings = Math.round(estimatedAnnualWaste * 0.85) // 85% waste recovery
    const netROI = Math.round((estimatedAerosynsSavings / (annualSpend * 0.08 || 1)) * 100)

    return (
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 rounded-3xl p-6 sm:p-10 border border-primary-500/20 shadow-2xl text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-800">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        <FaCalculator className="w-3.5 h-3.5 text-primary-400" />
                        Interactive Estimator
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                        Cloud License Savings & FinOps Calculator
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                        Estimate your organization's annual software licensing waste & recoverable savings in AED.
                    </p>
                </div>
                <div className="text-right hidden sm:block">
                    <span className="text-xs text-gray-400 block">Avg Recovery Rate</span>
                    <span className="text-xl font-bold text-emerald-400">up to 38.5%</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Inputs Column */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Monthly Spend Slider */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium text-gray-200">
                                Estimated Monthly Cloud & SaaS Spend (AED)
                            </label>
                            <span className="text-lg font-bold text-primary-400">
                                AED {monthlySpend.toLocaleString()} / mo
                            </span>
                        </div>
                        <input
                            type="range"
                            min="10000"
                            max="1000000"
                            step="10000"
                            value={monthlySpend}
                            onChange={(e) => setMonthlySpend(Number(e.target.value))}
                            className="w-full h-2.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>AED 10,000</span>
                            <span>AED 500,000</span>
                            <span>AED 1,000,000+</span>
                        </div>
                    </div>

                    {/* Active User Seats Slider */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium text-gray-200">
                                Active User Seats / Licenses
                            </label>
                            <span className="text-lg font-bold text-secondary-400">
                                {userSeats.toLocaleString()} seats
                            </span>
                        </div>
                        <input
                            type="range"
                            min="25"
                            max="5000"
                            step="25"
                            value={userSeats}
                            onChange={(e) => setUserSeats(Number(e.target.value))}
                            className="w-full h-2.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-secondary-500"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>25 seats</span>
                            <span>1,000 seats</span>
                            <span>5,000+ seats</span>
                        </div>
                    </div>

                    {/* Vendor Selection */}
                    <div>
                        <label className="text-sm font-medium text-gray-200 block mb-3">
                            Select Vendor Ecosystems to Optimize
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {vendors.map((vendor) => {
                                const isSelected = selectedVendors.includes(vendor.id)
                                return (
                                    <button
                                        key={vendor.id}
                                        type="button"
                                        onClick={() => toggleVendor(vendor.id)}
                                        className={`flex items-center gap-2 p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                                            isSelected
                                                ? 'bg-primary-950/60 border-primary-500 text-white shadow-lg shadow-primary-500/10'
                                                : 'bg-gray-800/50 border-gray-700/60 text-gray-400 hover:border-gray-600'
                                        }`}
                                    >
                                        <span>{vendor.icon}</span>
                                        <span className="truncate">{vendor.name}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Outputs & Summary Box */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50">
                    <div className="space-y-5">
                        <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                            Estimated Savings Impact
                        </h4>

                        <div className="bg-gray-900/80 rounded-xl p-4 border border-gray-800">
                            <span className="text-xs text-gray-400 block">Annual Cloud & SaaS Spend</span>
                            <span className="text-xl font-bold text-gray-200">
                                AED {annualSpend.toLocaleString()}
                            </span>
                        </div>

                        <div className="bg-rose-950/20 rounded-xl p-4 border border-rose-900/40">
                            <span className="text-xs text-rose-300 block">Est. Annual Licensing Waste</span>
                            <span className="text-2xl font-extrabold text-rose-400">
                                ~AED {estimatedAnnualWaste.toLocaleString()}
                            </span>
                            <span className="text-[11px] text-rose-300/70 block mt-0.5">
                                Unallocated seats, over-provisioning & un-reserved VM capacity
                            </span>
                        </div>

                        <div className="bg-emerald-950/30 rounded-xl p-4 border border-emerald-500/40">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-emerald-300">
                                    Recoverable Annual Savings
                                </span>
                                <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-mono">
                                    FinOps Guaranteed
                                </span>
                            </div>
                            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mt-1 block">
                                AED {estimatedAerosynsSavings.toLocaleString()}
                            </span>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-300/80 mt-1">
                                <FaCheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                <span>Est. ROI: ~{netROI}% return on licensing audit</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <a
                            href="#contact-section"
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold hover:from-primary-600 hover:to-secondary-600 transition-all shadow-lg shadow-primary-500/25 group"
                        >
                            <span>Claim Free Licensing Audit</span>
                            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
