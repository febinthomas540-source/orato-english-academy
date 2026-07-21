"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, Check, MessageCircle, Phone, Mail, MapPin, ChevronDown, Brain, ShieldCheck, UserRound, CalendarClock, MessagesSquare, Leaf, BriefcaseBusiness, UsersRound, Quote, ArrowUp } from "lucide-react";
import Image from "next/image";
import { assessmentQuestions, confidenceAreas, faqs, features, journey, navItems, site, skills } from "@/data/site";

const icons = { Brain, ShieldCheck, UserRound, CalendarClock, MessagesSquare, Leaf, BriefcaseBusiness, UsersRound };
const idFor = (label:string) => label.toLowerCase().replace(/\s+/g,"-").replace("why-orato","why-orato");
const whatsappHref = site.contact.whatsapp ? `https://wa.me/${site.contact.whatsapp.replace(/\D/g,"")}` : "#contact";
const phoneHref = site.contact.phone ? `tel:${site.contact.phone}` : "#contact";

function Reveal({children, className=""}:{children:React.ReactNode,className?:string}){
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce?false:{opacity:0,y:22}} whileInView={reduce?{}:{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.55,ease:"easeOut"}}>{children}</motion.div>
}

export function Header(){
  const [open,setOpen]=useState(false);
  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
    <div className="container-shell flex h-20 items-center justify-between gap-4">
      <a href="#home" className="focus-ring shrink-0 rounded-lg"><Image src="/images/orato-logo.jpg" alt="ORATO English Academy logo" width={240} height={135} className="h-14 w-auto object-contain" priority /></a>
      <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-slate-700" aria-label="Primary navigation">
        {navItems.map(n=><a className="focus-ring rounded-md hover:text-[#0A2E5D]" key={n} href={`#${idFor(n)}`}>{n}</a>)}
      </nav>
      <a href="#contact" className="focus-ring hidden sm:inline-flex rounded-full bg-[#0A2E5D] px-5 py-3 text-sm font-bold text-white hover:-translate-y-0.5 transition">Book Free Consultation</a>
      <button className="focus-ring xl:hidden rounded-xl p-3 text-[#0A2E5D]" aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<motion.nav id="mobile-menu" initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} className="xl:hidden border-t bg-white" aria-label="Mobile navigation"><div className="container-shell py-4 grid gap-1">{navItems.map(n=><a onClick={()=>setOpen(false)} className="focus-ring rounded-xl px-4 py-3 text-lg font-semibold hover:bg-slate-50" key={n} href={`#${idFor(n)}`}>{n}</a>)}<a onClick={()=>setOpen(false)} href="#contact" className="mt-2 rounded-xl bg-[#0A2E5D] px-4 py-4 text-center font-bold text-white">Book Free Consultation</a></div></motion.nav>}
  </header>
}

export function Hero(){return <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_85%_20%,rgba(244,197,66,.23),transparent_30%),linear-gradient(135deg,#fff_0%,#fff9ed_100%)] py-16 sm:py-24">
  <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
    <Reveal><div className="gold-line mb-6"/><p className="mb-4 font-bold tracking-[.18em] text-[#0A2E5D]">PERSONALISED ENGLISH COACHING</p><h1 className="serif text-5xl font-semibold leading-[.96] text-[#0A2E5D] sm:text-6xl lg:text-7xl">Speak with Confidence.<br/><span className="italic text-[#b88b00]">Lead with Excellence.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">Personalised online English coaching that helps learners communicate naturally, confidently, and professionally.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0A2E5D] px-6 py-3 font-bold text-white">Book Free Consultation <ArrowRight size={18}/></a><a href={whatsappHref} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0A2E5D] px-6 py-3 font-bold text-[#0A2E5D]"><MessageCircle size={18}/> Chat on WhatsApp</a></div><p className="mt-6 text-sm font-medium text-slate-500">Personalised coaching • Psychology-informed learning • Practical communication</p></Reveal>
    <Reveal className="relative"><div className="relative mx-auto max-w-[520px] rounded-[34px] border border-white/70 bg-white/60 p-3 shadow-2xl backdrop-blur"><div className="relative aspect-[4/5] overflow-hidden rounded-[27px]"><Image src="/images/meenakshi-sethulekshmi.jpg" alt="Meenakshi Sethulekshmi, Founder and English Language Trainer at ORATO" fill sizes="(max-width:1024px) 92vw, 520px" className="object-cover object-top" priority/></div></div><div className="mt-4 grid grid-cols-2 gap-3 text-sm"><div className="card p-4"><strong className="block text-[#0A2E5D]">6 Years</strong>Teaching experience</div><div className="card p-4"><strong className="block text-[#0A2E5D]">1-to-1</strong>Personal attention</div></div></Reveal>
  </div></section>}

const Heading=({eyebrow,title,copy}:{eyebrow:string,title:string,copy?:string})=><div className="mx-auto mb-12 max-w-3xl text-center"><p className="font-bold tracking-[.16em] text-[#b88b00]">{eyebrow}</p><h2 className="serif mt-3 text-4xl font-semibold text-[#0A2E5D] sm:text-5xl">{title}</h2>{copy&&<p className="mt-4 text-lg leading-8 text-slate-600">{copy}</p>}</div>;

function SelfAssessment(){
  const [answers,setAnswers]=useState<(number|null)[]>(Array(assessmentQuestions.length).fill(null));
  const [confidence,setConfidence]=useState<number[]>(Array(confidenceAreas.length).fill(3));
  const [submitted,setSubmitted]=useState(false);
  const allAnswered = answers.every(a=>a!==null);
  const correctCount = answers.reduce<number>((sum,a,i)=>sum+(a===assessmentQuestions[i].correct?1:0),0);
  const confidenceAvg = confidence.reduce((a,b)=>a+b,0)/confidence.length;
  let level="Beginner", levelCopy="You're at the start of your journey — ORATO's One-to-One coaching will build your fundamentals with confidence.";
  if(correctCount>=7){level="Advanced"; levelCopy="Strong grasp of English. ORATO can help you refine fluency for interviews, presentations, and professional settings.";}
  else if(correctCount>=4){level="Intermediate"; levelCopy="Good foundation with room to grow. ORATO's coaching will help you speak more naturally and confidently.";}
  function selectAnswer(qi:number,oi:number){ if(submitted) return; const next=[...answers]; next[qi]=oi; setAnswers(next); }
  function setConf(ci:number,val:number){ const next=[...confidence]; next[ci]=val; setConfidence(next); }
  function retake(){ setAnswers(Array(assessmentQuestions.length).fill(null)); setConfidence(Array(confidenceAreas.length).fill(3)); setSubmitted(false); }
  return <section id="assessment" className="section bg-[#FFF9ED]"><div className="container-shell">
    <Heading eyebrow="FREE SELF-ASSESSMENT" title="Find your English level in 2 minutes" copy="Answer a few quick questions and rate your confidence — get an instant, personalised starting point."/>
    {!submitted?<div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-5">
        <h3 className="font-bold text-[#0A2E5D]">Quick quiz</h3>
        {assessmentQuestions.map((item,qi)=><div key={item.q} className="card p-5"><p className="mb-3 font-semibold text-[#0A2E5D]">{qi+1}. {item.q}</p><div className="grid gap-2 sm:grid-cols-2">{item.options.map((opt,oi)=><button type="button" key={opt} onClick={()=>selectAnswer(qi,oi)} className={`focus-ring rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${answers[qi]===oi?"border-[#0A2E5D] bg-[#0A2E5D] text-white":"border-slate-200 hover:border-[#0A2E5D]"}`}>{opt}</button>)}</div></div>)}
      </div>
      <div className="space-y-5">
        <h3 className="font-bold text-[#0A2E5D]">How confident do you feel?</h3>
        {confidenceAreas.map((area,ci)=><div key={area} className="card p-5"><div className="mb-2 flex items-center justify-between"><p className="font-semibold text-[#0A2E5D]">{area}</p><span className="font-bold text-[#b88b00]">{confidence[ci]}/5</span></div><input type="range" min={1} max={5} value={confidence[ci]} onChange={e=>setConf(ci,Number(e.target.value))} className="w-full accent-[#0A2E5D]"/></div>)}
      </div>
      <button type="button" disabled={!allAnswered} onClick={()=>setSubmitted(true)} className="focus-ring w-full rounded-full bg-[#0A2E5D] px-6 py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">See My Result</button>
      {!allAnswered&&<p className="text-center text-sm text-slate-500">Answer all quiz questions to see your result.</p>}
    </div>:
    <div className="mx-auto max-w-2xl">
      <div className="card p-8 text-center">
        <p className="font-bold tracking-[.16em] text-[#b88b00]">YOUR RESULT</p>
        <h3 className="serif mt-3 text-4xl text-[#0A2E5D]">{level}</h3>
        <p className="mt-4 leading-8 text-slate-600">{levelCopy}</p>
        <div className="mx-auto mt-6 grid max-w-sm grid-cols-2 gap-4 text-sm">
          <div className="card p-4"><strong className="block text-2xl text-[#0A2E5D]">{correctCount}/{assessmentQuestions.length}</strong>Quiz score</div>
          <div className="card p-4"><strong className="block text-2xl text-[#0A2E5D]">{confidenceAvg.toFixed(1)}/5</strong>Confidence rating</div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#contact" className="focus-ring inline-flex justify-center rounded-full bg-[#0A2E5D] px-6 py-4 font-bold text-white">Book Free Consultation</a>
          <button type="button" onClick={retake} className="focus-ring inline-flex justify-center rounded-full border border-[#0A2E5D] px-6 py-4 font-bold text-[#0A2E5D]">Retake Assessment</button>
        </div>
      </div>
    </div>}
  </div></section>
}

export function MainSections(){return <>
<section id="about" className="section"><div className="container-shell"><Heading eyebrow="ABOUT ORATO" title="Confidence before perfection"/><div className="grid gap-8 lg:grid-cols-2"><Reveal><div className="space-y-5 text-lg leading-8 text-slate-600"><p>ORATO English Academy was founded with a clear mission: to make learning English practical, enjoyable, personalised, and confidence-building.</p><p>Many learners understand English but struggle to express themselves in real conversations. ORATO offers a supportive alternative to rule-heavy, stressful learning.</p><p>Through practical communication, psychology-informed teaching, mindfulness, and positive interaction, learners build the confidence to speak, think clearly, and express ideas effectively.</p></div></Reveal><Reveal><div className="grid gap-4 sm:grid-cols-2">{["Practical communication","Interactive learning","Personalised support","No stressful homework","Real-world English","Consistent encouragement"].map(x=><div className="card p-5 font-bold text-[#0A2E5D]" key={x}><Check className="mb-3 text-[#b88b00]"/>{x}</div>)}</div></Reveal></div></div></section>
<section id="founder" className="section bg-[#F5F7FA]"><div className="container-shell grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]"><Reveal><div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl"><Image src="/images/meenakshi-sethulekshmi.jpg" alt="Portrait of Meenakshi Sethulekshmi" fill sizes="(max-width:1024px) 92vw, 480px" className="object-cover object-top"/></div></Reveal><Reveal><p className="font-bold tracking-[.16em] text-[#b88b00]">MEET THE FOUNDER</p><h2 className="serif mt-3 text-4xl text-[#0A2E5D] sm:text-5xl">Meenakshi Sethulekshmi</h2><p className="mt-2 font-bold text-slate-600">Founder & English Language Trainer</p><p className="mt-6 text-lg leading-8 text-slate-600">Meenakshi combines expertise in English language education with a strong academic background in counselling and clinical psychology. Her approach recognises that effective communication is about vocabulary and grammar, but also confidence, mindset, self-expression, and emotional comfort.</p><div className="mt-7 grid gap-3">{site.founder.qualifications.map(q=><div key={q} className="card flex items-center gap-3 p-4"><Check className="text-[#b88b00]"/><span className="font-semibold">{q}</span></div>)}</div><blockquote className="mt-7 rounded-3xl bg-[#0A2E5D] p-6 text-lg italic leading-8 text-white"><Quote className="mb-3 text-[#F4C542]"/>“English becomes easier when learners feel safe, supported, and confident enough to express themselves.”</blockquote></Reveal></div></section>
<section id="why-orato" className="section"><div className="container-shell"><Heading eyebrow="WHY ORATO" title="A thoughtful way to learn" copy="Supportive coaching designed around confidence, communication, and individual progress."/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{features.map(([icon,title,copy])=>{const Icon=icons[icon];return <Reveal key={title}><div className="card h-full p-6 transition hover:-translate-y-1"><Icon className="mb-5 text-[#b88b00]"/><h3 className="text-xl font-bold text-[#0A2E5D]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{copy}</p></div></Reveal>})}</div></div></section>
<SelfAssessment/>
<section className="section bg-[#FFF9ED]"><div className="container-shell"><Heading eyebrow="YOUR LEARNING JOURNEY" title="Clear steps, personal guidance"/><ol className="grid gap-4 lg:grid-cols-7">{journey.map((s,i)=><Reveal key={s}><li className="card h-full p-5"><span className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-[#0A2E5D] font-bold text-white">{i+1}</span><h3 className="font-bold text-[#0A2E5D]">{s}</h3></li></Reveal>)}</ol></div></section>
<section id="courses" className="section"><div className="container-shell"><Heading eyebrow="COURSES & PRICING" title="Choose your learning format"/><div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-2">{site.courses.map((c,i)=><Reveal key={c.title}><article className={`card h-full p-7 ${i===0?"ring-2 ring-[#F4C542]":""}`}><h3 className="serif text-3xl text-[#0A2E5D]">{c.title}</h3><p className="mt-5 text-sm font-bold uppercase tracking-wider text-slate-500">Programme fee</p><p className="text-4xl font-extrabold text-[#0A2E5D]">{c.fee}</p><ul className="my-7 space-y-3">{c.features.map(f=><li className="flex gap-3" key={f}><Check className="shrink-0 text-[#b88b00]" size={20}/><span>{f}</span></li>)}</ul><a href="#contact" className="focus-ring inline-flex w-full justify-center rounded-full bg-[#0A2E5D] px-5 py-4 font-bold text-white">{c.cta}</a></article></Reveal>)}</div><p className="mt-6 text-center text-sm text-slate-500">Contact ORATO to confirm upcoming batches, session timings, and programme availability.</p></div></section>
<section className="section bg-[#F5F7FA]"><div className="container-shell"><Heading eyebrow="SKILLS YOU CAN DEVELOP" title="Progress that reaches beyond grammar"/><div className="flex flex-wrap justify-center gap-3">{skills.map(s=><span className="rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-[#0A2E5D] shadow-sm" key={s}>{s}</span>)}</div></div></section>
<section id="testimonials" className="section"><div className="container-shell"><Heading eyebrow="LEARNER EXPERIENCES" title="Real stories will be added here" copy="This section is ready for genuine learner feedback, course details, photographs, ratings, and locations when available."/><div className="card mx-auto max-w-2xl p-8 text-center text-slate-500"><Quote className="mx-auto mb-4 text-[#b88b00]" size={36}/>No testimonials have been published yet.</div></div></section>
<section id="faq" className="section bg-[#FFF9ED]"><div className="container-shell"><Heading eyebrow="FAQ" title="Questions learners often ask"/><div className="mx-auto max-w-3xl divide-y rounded-3xl border bg-white px-6">{faqs.map(([q,a],i)=><Faq key={q} q={q} a={a} i={i}/>)}</div></div></section>
<Contact/>
<section className="section bg-[#0A2E5D] text-white"><div className="container-shell text-center"><h2 className="serif text-4xl sm:text-6xl">Your Voice Deserves to Be Heard with Confidence.</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">Begin with a free consultation and discover a personalised approach to learning English.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="#contact" className="rounded-full bg-[#F4C542] px-6 py-4 font-bold text-[#0A2E5D]">Book Free Consultation</a><a href={whatsappHref} className="rounded-full border border-white/30 px-6 py-4 font-bold">Chat on WhatsApp</a></div></div></section>
</>}

function Faq({q,a,i}:{q:string,a:string,i:number}){const [open,setOpen]=useState(false);const panel=`faq-panel-${i}`;return <div className="py-2"><button className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg py-5 text-left font-bold text-[#0A2E5D]" aria-expanded={open} aria-controls={panel} onClick={()=>setOpen(!open)}>{q}<ChevronDown className={`shrink-0 transition ${open?"rotate-180":""}`}/></button>{open&&<motion.div id={panel} initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} className="pb-5 leading-7 text-slate-600">{a}</motion.div>}</div>}

function Contact(){const [status,setStatus]=useState("");async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setStatus("Sending…");const form=new FormData(e.currentTarget);const data=Object.fromEntries(form.entries());try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});if(!r.ok)throw new Error();setStatus("Thank you. ORATO will contact you soon.");e.currentTarget.reset()}catch{setStatus("Your message could not be sent. Please try WhatsApp or phone.")}}
return <section id="contact" className="section"><div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="font-bold tracking-[.16em] text-[#b88b00]">CONTACT</p><h2 className="serif mt-3 text-5xl text-[#0A2E5D]">Start Your Confidence Journey</h2><p className="mt-5 text-lg leading-8 text-slate-600">Tell us what you would like to improve, and ORATO will help you choose the right learning path.</p><div className="mt-8 space-y-4">{site.contact.phone&&<a href={phoneHref} className="flex gap-3"><Phone/> {site.contact.phone}</a>}{site.contact.email&&<a href={`mailto:${site.contact.email}`} className="flex gap-3"><Mail/> {site.contact.email}</a>}<p className="flex gap-3"><MapPin/> {site.location}</p></div><div className="mt-8 flex gap-3"><a href={whatsappHref} className="rounded-full bg-[#0A2E5D] px-5 py-3 font-bold text-white">WhatsApp</a><a href={phoneHref} className="rounded-full border px-5 py-3 font-bold text-[#0A2E5D]">Call</a></div></Reveal><Reveal><form onSubmit={submit} className="card grid gap-4 p-6 sm:grid-cols-2">{[["name","Full name","text"],["phone","Phone or WhatsApp number","tel"],["email","Email address","email"],["level","Current English level","text"],["course","Preferred course","text"],["time","Preferred time","text"]].map(([n,l,t])=><label className="grid gap-2 text-sm font-bold" key={n}>{l}<input required={n==="name"||n==="phone"} name={n} type={t} className="focus-ring min-h-12 rounded-xl border px-4 font-normal"/></label>)}<label className="grid gap-2 text-sm font-bold sm:col-span-2">Message<textarea name="message" rows={5} className="focus-ring rounded-xl border p-4 font-normal"/></label><label className="flex items-start gap-3 text-sm font-normal sm:col-span-2"><input required name="consent" type="checkbox" className="mt-1 h-5 w-5"/>I agree that ORATO may contact me about my enquiry.</label><button className="focus-ring rounded-full bg-[#0A2E5D] px-6 py-4 font-bold text-white sm:col-span-2" type="submit">Send Consultation Request</button><p aria-live="polite" className="sm:col-span-2 text-sm text-slate-600">{status}</p></form></Reveal></div></section>}

export function FloatingActions(){return <><a aria-label="Chat with ORATO on WhatsApp" href={whatsappHref} className="focus-ring fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-green-600 text-white shadow-xl"><MessageCircle/></a><a aria-label="Back to top" href="#home" className="focus-ring fixed bottom-5 left-5 z-40 grid h-11 w-11 place-items-center rounded-full border bg-white text-[#0A2E5D] shadow"><ArrowUp size={18}/></a></>}
