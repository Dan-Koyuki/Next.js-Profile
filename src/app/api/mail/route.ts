// import { NextResponse } from "next/server"

// export const POST = async (req: Request) => {
//   const { senderEmail, message } = await req.json();

//   // Configure nodemailer to send emails using your email service provider
//   const transporter = nodemailer.createTransport({
//     // Specify your email service provider settings here
//     // For example, for Gmail:
//     service: 'Gmail',
//     auth: {
//       user: 'dankoyuki398@gmail.com',
//       pass: 'your_email_password',
//     },
//   });

//   // Email content
//   const mailOptions = {
//     from: senderEmail, // Use the sender's email address here
//     to: 'dankoyuki398@gmail.com',
//     subject: 'Message from Contact Form', // Set a default subject or use the message as the subject
//     text: message,
//   };

//   try {
//     // Send the email
//     await transporter.sendMail(mailOptions);

//     // Return success response to the client
//     return NextResponse.json({ msg: 'Email sent' });
//   } catch (error) {
//     console.error('Error sending email:', error);
    
//     // Return error response to the client
//   }
// }