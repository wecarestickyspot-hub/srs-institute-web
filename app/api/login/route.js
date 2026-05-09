import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    // 👇 YAHAN SE DEBUG CODE SHURU 👇
    console.log("--- DEBUG INFO ---");
    console.log("Aapne form me dala: ->", username, "<- Password: ->", password, "<-");
    console.log("ENV (System) me hai: ->", process.env.ADMIN_USER, "<- Password: ->", process.env.ADMIN_PASS, "<-");
    console.log("------------------");
    // 👆 YAHAN TAK 👆

    // .env file se ID Password match karna
    if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
      
      const response = NextResponse.json({ success: true, message: "Login successful!" });
      
      // Sahi hone par ek 'HttpOnly' secure cookie set kar denge (1 din ke liye valid)
      response.cookies.set({
        name: "admin_session",
        value: "srs_authorized_user_2026", 
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24, // 24 hours
      });

      return response;
    }

    return NextResponse.json({ success: false, message: "Galat ID ya Password!" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}