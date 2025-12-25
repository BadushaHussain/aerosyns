// CRM and webhook integration utilities

interface LeadData {
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string
    country: string
    projectBrief: string
    requestedService: string
    source?: string
}

interface QuoteRequest extends LeadData {
    products?: string[]
    estimatedBudget?: string
    timeline?: string
}

export async function submitLead(data: LeadData): Promise<{ success: boolean; message: string }> {
    try {
        const webhookUrl = process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL

        if (!webhookUrl) {
            console.error('CRM webhook URL not configured')
            return { success: false, message: 'Configuration error' }
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                timestamp: new Date().toISOString(),
                source: data.source || 'website',
            }),
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        return { success: true, message: 'Lead submitted successfully' }
    } catch (error) {
        console.error('Error submitting lead:', error)
        return { success: false, message: 'Failed to submit lead' }
    }
}

export async function submitQuoteRequest(
    data: QuoteRequest
): Promise<{ success: boolean; message: string }> {
    try {
        const webhookUrl = process.env.NEXT_PUBLIC_QUOTE_WEBHOOK_URL

        if (!webhookUrl) {
            console.error('Quote webhook URL not configured')
            return { success: false, message: 'Configuration error' }
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                timestamp: new Date().toISOString(),
                type: 'quote_request',
            }),
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        return { success: true, message: 'Quote request submitted successfully' }
    } catch (error) {
        console.error('Error submitting quote request:', error)
        return { success: false, message: 'Failed to submit quote request' }
    }
}

export async function trackEvent(
    eventName: string,
    properties?: Record<string, any>
): Promise<void> {
    try {
        const analyticsUrl = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT

        if (!analyticsUrl) {
            return
        }

        await fetch(analyticsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event: eventName,
                properties: {
                    ...properties,
                    timestamp: new Date().toISOString(),
                    url: typeof window !== 'undefined' ? window.location.href : '',
                },
            }),
        })
    } catch (error) {
        console.error('Error tracking event:', error)
    }
}
