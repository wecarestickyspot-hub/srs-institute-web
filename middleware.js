import { NextResponse } from 'next/server';

export function middleware(req) {
  // 1. Check karo ki kya user /admin wale kisi page par ja raha hai
  if (req.nextUrl.pathname.startsWith('/admin')) {
    
    // 2. Agar user pehle se hi '/admin/login' page par hai, toh usko rokna nahi hai 
    // (Warna infinite loop ban jayega aur website load nahi hogi)
    if (req.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }
    
    // 3. Browser se 'admin_session' naam ki cookie (digital pass) check karo
    const token = req.cookies.get('admin_session')?.value;

    // 4. Agar token match hota hai (jo humne login API me set kiya tha), toh aage jaane do
    if (token === 'srs_authorized_user_2026') {
      return NextResponse.next(); 
    }

    // 5. Agar token nahi mila ya galat hai, toh seedha Login Page par redirect kar do
    const loginUrl = new URL('/admin/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // 6. Agar user /admin ki jagah normal website (Home, About, Courses) dekh raha hai, toh bina roke jaane do
  return NextResponse.next();
}

// Konse routes par yeh guard lagana hai
export const config = {
  matcher: ['/admin/:path*'], // /admin aur uske aage ke saare pages secured rahenge
};