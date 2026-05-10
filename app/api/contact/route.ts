import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // The user set the variable exactly as 'key' in Vercel. 
    // We also fallback to standard names just in case.
    const accessKey = process.env.key || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || process.env.WEB3FORMS_KEY;
    
    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: 'Server configuration error: Missing API Key' },
        { status: 500 }
      );
    }

    const payload = {
      ...body,
      access_key: accessKey,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
