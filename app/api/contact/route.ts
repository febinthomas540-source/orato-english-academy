import { NextResponse } from "next/server";
import { z } from "zod";
const schema=z.object({name:z.string().min(2),phone:z.string().min(6),email:z.string().email().or(z.literal("")),level:z.string().optional(),course:z.string().optional(),time:z.string().optional(),message:z.string().max(2000).optional(),consent:z.literal("on")});
const RECIPIENT = "meenakshilekshmi7447@gmail.com";
export async function POST(req:Request){
  try{
    const body=await req.json();
    const result=schema.safeParse(body);
    if(!result.success)return NextResponse.json({error:"Please check the form fields."},{status:400});
    const d=result.data;
    console.log("ORATO consultation enquiry",d);
    const apiKey = process.env.RESEND_API_KEY;
    if(apiKey){
      try{
        await fetch("https://api.resend.com/emails",{
          method:"POST",
          headers:{"Content-Type":"application/json",Authorization:`Bearer ${apiKey}`},
          body:JSON.stringify({
            from:"ORATO Website <onboarding@resend.dev>",
            to:[RECIPIENT],
            reply_to: d.email || undefined,
            subject:`New consultation enquiry from ${d.name}`,
            text:`Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email||"-"}\nCurrent level: ${d.level||"-"}\nPreferred course: ${d.course||"-"}\nPreferred time: ${d.time||"-"}\nMessage: ${d.message||"-"}`,
          }),
        });
      }catch(emailErr){
        console.error("Resend email failed",emailErr);
      }
    }
    return NextResponse.json({ok:true});
  }catch{
    return NextResponse.json({error:"Invalid request"},{status:400});
  }
}

