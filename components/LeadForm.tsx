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

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        {...register('firstName', { required: 'First name is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                    {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        {...register('lastName', { required: 'Last name is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                    {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        {...register('phone', { required: 'Phone is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company *
                    </label>
                    <input
                        type="text"
                        id="company"
                        {...register('company', { required: 'Company is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                    {errors.company && (
                        <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Country *
                    </label>
                    <select
                        id="country"
                        {...register('country', { required: 'Country is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                        <option value="">Select a country</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="QA">Qatar</option>
                        <option value="KW">Kuwait</option>
                        <option value="BH">Bahrain</option>
                        <option value="OM">Oman</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.country && (
                        <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="requestedService" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Interested In *
                </label>
                <select
                    id="requestedService"
                    {...register('requestedService', { required: 'Please select a service' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                    <option value="">Select a service</option>
                    <option value="infrastructure">Infrastructure & Cabling</option>
                    <option value="cloud">Cloud & Hybrid IT</option>
                    <option value="ai">AI Infrastructure</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="managed">Managed Services</option>
                    <option value="software">Software Engineering</option>
                    <option value="saas">SaaS Products</option>
                    <option value="hardware">Hardware Sales</option>
                </select>
                {errors.requestedService && (
                    <p className="mt-1 text-sm text-red-600">{errors.requestedService.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="projectBrief" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Brief *
                </label>
                <textarea
                    id="projectBrief"
                    rows={4}
                    {...register('projectBrief', { required: 'Project brief is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your project requirements..."
                />
                {errors.projectBrief && (
                    <p className="mt-1 text-sm text-red-600">{errors.projectBrief.message}</p>
                )}
            </div>

            {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                    <p className="text-green-800 font-medium">
                        Thank you! We'll get back to you within 24 hours.
                    </p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-red-800 font-medium">
                        Something went wrong. Please try again or contact us directly.
                    </p>
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
        </form>
    )
}
