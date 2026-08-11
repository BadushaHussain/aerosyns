'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { submitLead } from '@/lib/api'

interface LeadFormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string
    country: string
    projectBrief: string
    requestedService: string
}

export default function LeadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LeadFormData>()

    const onSubmit = async (data: LeadFormData) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')

        const result = await submitLead(data)

        setIsSubmitting(false)
        if (result.success) {
            setSubmitStatus('success')
            reset()
            setTimeout(() => setSubmitStatus('idle'), 5000)
        } else {
            setSubmitStatus('error')
        }
    }

    const inputStyle = "w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-inner"
    const labelStyle = "block text-sm font-semibold text-gray-200 mb-2"
    const optionStyle = "bg-gray-900 text-white font-medium py-2"

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className={labelStyle}>
                        First Name *
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        {...register('firstName', { required: 'First name is required' })}
                        className={inputStyle}
                    />
                    {errors.firstName && (
                        <p className="mt-1 text-sm text-rose-400">{errors.firstName.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="lastName" className={labelStyle}>
                        Last Name *
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Last Name"
                        {...register('lastName', { required: 'Last name is required' })}
                        className={inputStyle}
                    />
                    {errors.lastName && (
                        <p className="mt-1 text-sm text-rose-400">{errors.lastName.message}</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className={labelStyle}>
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        className={inputStyle}
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-rose-400">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="phone" className={labelStyle}>
                        Phone *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Phone"
                        {...register('phone', { required: 'Phone is required' })}
                        className={inputStyle}
                    />
                    {errors.phone && (
                        <p className="mt-1 text-sm text-rose-400">{errors.phone.message}</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="company" className={labelStyle}>
                        Company *
                    </label>
                    <input
                        type="text"
                        id="company"
                        placeholder="Company"
                        {...register('company', { required: 'Company is required' })}
                        className={inputStyle}
                    />
                    {errors.company && (
                        <p className="mt-1 text-sm text-rose-400">{errors.company.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="country" className={labelStyle}>
                        Country *
                    </label>
                    <select
                        id="country"
                        {...register('country', { required: 'Country is required' })}
                        className={inputStyle}
                    >
                        <option value="" className={optionStyle}>Select a country</option>
                        <option value="AE" className={optionStyle}>United Arab Emirates</option>
                        <option value="SA" className={optionStyle}>Saudi Arabia</option>
                        <option value="QA" className={optionStyle}>Qatar</option>
                        <option value="KW" className={optionStyle}>Kuwait</option>
                        <option value="BH" className={optionStyle}>Bahrain</option>
                        <option value="OM" className={optionStyle}>Oman</option>
                        <option value="other" className={optionStyle}>Other</option>
                    </select>
                    {errors.country && (
                        <p className="mt-1 text-sm text-rose-400">{errors.country.message}</p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="requestedService" className={labelStyle}>
                    Service Interested In *
                </label>
                <select
                    id="requestedService"
                    {...register('requestedService', { required: 'Please select a service' })}
                    className={inputStyle}
                >
                    <option value="" className={optionStyle}>Select a service</option>
                    <option value="cloud-licensing" className={optionStyle}>Cloud Subscription & Licensing Management</option>
                    <option value="cloud" className={optionStyle}>Cloud & Hybrid IT</option>
                    <option value="infrastructure" className={optionStyle}>Infrastructure & Cabling</option>
                    <option value="ai" className={optionStyle}>AI Infrastructure</option>
                    <option value="cybersecurity" className={optionStyle}>Cybersecurity</option>
                    <option value="managed" className={optionStyle}>Managed Services</option>
                    <option value="software" className={optionStyle}>Software Engineering</option>
                    <option value="saas" className={optionStyle}>SaaS Products</option>
                    <option value="hardware" className={optionStyle}>Hardware Sales</option>
                </select>
                {errors.requestedService && (
                    <p className="mt-1 text-sm text-rose-400">{errors.requestedService.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="projectBrief" className={labelStyle}>
                    Project Brief *
                </label>
                <textarea
                    id="projectBrief"
                    rows={4}
                    {...register('projectBrief', { required: 'Project brief is required' })}
                    className={inputStyle}
                    placeholder="Tell us about your project requirements..."
                />
                {errors.projectBrief && (
                    <p className="mt-1 text-sm text-rose-400">{errors.projectBrief.message}</p>
                )}
            </div>

            {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50">
                    <p className="text-emerald-300 font-medium">
                        Thank you! We'll get back to you within 24 hours.
                    </p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-500/50">
                    <p className="text-rose-300 font-medium">
                        Something went wrong. Please try again or contact us directly.
                    </p>
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-base hover:from-primary-600 hover:to-secondary-600 transition-all shadow-xl shadow-primary-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
        </form>
    )
}
