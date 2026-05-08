import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { certId, studentName, course, issueDate, grade, password } = body;

    // SECURITY CHECK: Kya user ne sahi password bheja hai?
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ success: false, message: "Unauthorized: Galat Password! 🚨" }, { status: 401 });
    }

    // Validation: Kya saari fields bhari hain?
    if (!certId || !studentName || !course || !issueDate || !grade) {
      return NextResponse.json({ success: false, message: "Saari fields bharna zaroori hai" }, { status: 400 });
    }

    // Database mein save karna
    const newCertificate = await prisma.certificate.create({
      data: {
        certId: certId.toUpperCase(),
        studentName,
        course,
        issueDate,
        grade,
      },
    });

    return NextResponse.json({ success: true, message: "Certificate successfully save ho gaya! ✅", data: newCertificate });

  } catch (error) {
    console.error("Save Error:", error);
    // Agar ID pehle se database mein hai (Duplicate ID)
    if (error.code === 'P2002') {
      return NextResponse.json({ success: false, message: "Yeh Certificate ID pehle se use ho chuki hai!" }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}