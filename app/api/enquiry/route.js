import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, age, course, message } = body;

    if (!fullName || !phone || !course) {
      return NextResponse.json({ success: false, message: "Details missing!" }, { status: 400 });
    }

    // 1. Database mein save karna
    const newEnquiry = await prisma.enquiry.create({
      data: {
        fullName,
        phone,
        email: email || null,
        age: age ? parseInt(age) : null,
        course,
        message: message || null,
      },
    });

    // 2. Mobile par Email bhejna
    try {
      await resend.emails.send({
        from: 'SRS Computer Institute <onboarding@resend.dev>',
        to: 'srsdigitalvision3380@gmail.com', // Yahan apna asli email dalein
        subject: `🔔 Nayi Enquiry: ${fullName}`,
        html: `
          <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #d4af37;">Nayi Student Enquiry Aayi Hai!</h2>
            <p><strong>Naam:</strong> ${fullName}</p>
            <p><strong>Mobile:</strong> ${phone}</p>
            <p><strong>Course:</strong> ${course}</p>
            <p><strong>Umar:</strong> ${age || 'N/A'}</p>
            <p><strong>Sawaal:</strong> ${message || 'N/A'}</p>
            <hr />
            <p style="font-size: 12px; color: #666;">Yeh enquiry SRS Institute ki website se aayi hai.</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email bhejne mein dikkat:", emailError);
      // Database mein save ho gaya hai, isliye hum success hi bhejenge
    }

    return NextResponse.json({ success: true, message: "Enquiry saved and Email sent!" });

  } catch (error) {
    console.error("Enquiry Error:", error);
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}