import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json(); // Parse the incoming JSON request
        const { name, email, subject, message } = body;

        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: 'cmail.colocity.host', // Replace with your Zimbra SMTP host
            port: 465, // Use 465 for SSL or 587 for STARTTLS
            secure: true, // Use true for SSL
            auth: {
                user: process.env.AUTH_EMAIL, // Your Zimbra email address
                pass: process.env.AUTH_EMAIL_PASSWORD // Your Zimbra email password
            }
        });

        // Email options
        const mailOptions = {
            from: `"${name}" <${email}>`, // Sender address
            to: 'info@chl.com.bd', // Recipient email
            subject: subject, // Subject line
            text: message, // Plain text body
            html: `<pre>${message}</pre>` // HTML body
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent: %s', info.messageId);

        return new Response(
            JSON.stringify({ success: true, message: 'Email sent successfully!' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error sending email:', error);

        return new Response(
            JSON.stringify({ success: false, message: 'Failed to send email.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
