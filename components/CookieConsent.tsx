'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            setShowConsent(true)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted')
        setShowConsent(false)
    }

    const declineCookies = () => {
        localStorage.setItem('cookie-consent', 'declined')
        setShowConsent(false)
    }

    if (!showConsent) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 border-t border-gray-700 shadow-2xl">
            <div className="container-custom">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex-1">
                        <p className="text-sm text-gray-300">
                            We use cookies to enhance your browsing experience and analyze our traffic.
                            By clicking "Accept", you consent to our use of cookies.{' '}
                            <a href="/legal/privacy" className="text-primary-400 hover:text-primary-300 underline">
                                Learn more
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={declineCookies}
                            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Decline
                        </button>
                        <button
                            onClick={acceptCookies}
                            className="px-6 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                        >
                            Accept
                        </button>
                        <button
                            onClick={declineCookies}
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
