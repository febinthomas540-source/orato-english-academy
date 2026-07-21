import type { Metadata } from "next";
import "./globals.css";
const url=process.env.NEXT_PUBLIC_SITE_URL||"https://www.oratoenglishacademy.com";
export const metadata:Metadata={metadataBase:new URL(url),title:"ORATO English Academy | Online Spoken English Coaching in Trivandrum",description:"Build confidence in spoken and professional English with personalised online coaching from ORATO English Academy in Trivandrum, Kerala. Book a free consultation.",alternates:{canonical:"/"},openGraph:{title:"ORATO English Academy",description:"Speak with Confidence. Lead with Excellence.",url,type:"website",images:["/images/orato-logo.jpg"]},twitter:{card:"summary_large_image",title:"ORATO English Academy",description:"Personalised online English coaching in Trivandrum."}};
const jsonLd={
  "@context":"https://schema.org",
  "@type":"EducationalOrganization",
  "name":"ORATO English Academy",
  "description":"Personalised online spoken English coaching in Trivandrum, Kerala, focused on confidence, communication, and practical English.",
  "url":url,
  "image":`${url}/images/orato-logo.jpg`,
  "telephone":"+917510149574",
  "email":"meenakshilekshmi7447@gmail.com",
  "address":{"@type":"PostalAddress","addressLocality":"Trivandrum","addressRegion":"Kerala","addressCountry":"IN"},
  "founder":{"@type":"Person","name":"Meenakshi Sethulekshmi"},
  "areaServed":"Trivandrum, Kerala, India",
  "priceRange":"₹₹",
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><head><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></head><body>{children}</body></html>}
