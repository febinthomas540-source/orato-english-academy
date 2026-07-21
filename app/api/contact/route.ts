import { NextResponse } from "next/server";
import { z } from "zod";
const schema=z.object({name:z.string().min(2),phone:z.string().min(6),email:z.string().email().or(z.literal("")),level:z.string().optional(),course:z.string().optional(),time:z.string().optional(),message:z.string().max(2000).optional(),consent:z.literal("on")});
export async function POST(req:Request){try{const body=await req.json();const result=schema.safeParse(body);if(!result.success)return NextResponse.json({error:"Please check the form fields."},{status:400});console.log("ORATO consultation enquiry",result.data);return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"Invalid request"},{status:400});}}
