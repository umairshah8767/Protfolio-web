import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [email], // یہاں اصل ای میل شامل کریں
      subject: subject, // یہاں متغیر استعمال کریں
      react: (
        <>
          <h1>{subject}</h1>
          <p>ہم سے رابطہ کرنے کے لیے شکریہ!</p>
          <p>نیا پیغام:</p>
          <p>{message}</p>
        </>
      ),
    });
    
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
}
