import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Prisma client ko initialize kar rahe hain database se baat karne ke liye
const prisma = new PrismaClient();

export async function GET(request) {
  // Frontend se bheji gayi ID ko URL se nikal rahe hain (e.g., ?id=SRS2024001)
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  // Agar kisine bina ID ke search kiya
  if (!id) {
    return NextResponse.json({ found: false, message: "Certificate ID is required" }, { status: 400 });
  }

  try {
    // Database mein us ID wale certificate ko dhund rahe hain
    const certificate = await prisma.certificate.findUnique({
      where: {
        certId: id,
      },
    });

    if (certificate) {
      // Agar certificate mil gaya, toh student ka data frontend ko bhej do
      return NextResponse.json({
        found: true,
        data: {
          certId: certificate.certId,
          studentName: certificate.studentName,
          course: certificate.course,
          issueDate: certificate.issueDate,
          grade: certificate.grade,
        }
      });
    } else {
      // Agar database mein nahi mila
      return NextResponse.json({ found: false });
    }
    
  } catch (error) {
    console.error("Database search error:", error);
    return NextResponse.json({ found: false, error: true }, { status: 500 });
  }
}