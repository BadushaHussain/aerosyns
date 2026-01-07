import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()
        const { firstName, lastName, email, phone, company, country, projectBrief, requestedService } = data

        // Email 1: Admin notification
        const adminEmail = await resend.emails.send({
            from: 'no-reply@aerosyns.com',
            to: 'badushahussain1@gmail.com',
            subject: `New Lead: ${requestedService} - ${company}`,
            html: `
                <h2>New Consultation Request</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Service Interested In:</strong> ${requestedService}</p>
                <p><strong>Project Brief:</strong></p>
                <p>${projectBrief}</p>
                <hr>
                <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
            `,
        })

        // Email 2: Client confirmation
        const clientEmail = await resend.emails.send({
            from: 'no-reply@aerosyns.com',
            to: email,
            subject: 'Consultation Request Received - Aerosyns',
            html: `
                <h2>Thank you for reaching out to Aerosyns!</h2>
                <p>Dear ${firstName},</p>
                <p>We have received your consultation request for <strong>${requestedService}</strong>.</p>
                <p>Our team will review your inquiry and get back to you within 24 hours.</p>
                <p>If you have any urgent questions, please feel free to contact us directly:</p>
                <ul>
                    <li>Phone: +971 556725264</li>
                    <li>Email: info@aerosyns.com</li>
                </ul>
                <p>Best regards,<br>The Aerosyns Team</p>
                <hr>
                <p><small>This is an automated confirmation email. Please do not reply to this message.</small></p>
            `,
        })

        return NextResponse.json({
            success: true,
            message: 'Emails sent successfully',
            adminEmailId: adminEmail.data?.id,
            clientEmailId: clientEmail.data?.id
        })
    } catch (error) {
        console.error('Error sending emails:', error)
        return NextResponse.json(
            { success: false, message: 'Failed to send emails' },
            { status: 500 }
        )
    }
}
