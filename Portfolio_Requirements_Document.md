# Manusha Ranaweera — Portfolio Requirements Document
### Positioning: Software Engineer who ships production systems, not just tutorials

---

## 1. The Core Insight (Read This First)

A hiring manager at a top company spends **under 30 seconds** on a portfolio before deciding "explore further" or "close tab." They are not reading — they are **scanning for evidence** of three things:

1. **Can this person build real things that work?** (not just CRUD tutorials)
2. **Can this person think, not just code?** (architecture, tradeoffs, decisions)
3. **Would I want this person on my team?** (communication, ownership, curiosity)

Your unfair advantage over 90% of "aspiring SWE" portfolios: you already have **production client work** (CBL, Zentra.digital), a **real internship at a recognized company** (Zebra Technologies), and a **non-trivial system with a genuine architectural centerpiece** (SkillBridge SL's order lifecycle state machine). Most CS grads have none of these. The whole document below is built around making that advantage impossible to miss in the first 10 seconds.

---

## 2. Target Reader Persona

Design and write for this specific person:

> A senior engineer or engineering manager at a company like Zebra, LSEG, WSO2, Sysco LABS, 99x, or a Series-B+ international startup. They review 40 portfolios a week. They skim. They've seen a thousand "responsive todo apps with React." They are impressed by **specificity, real users, measurable outcomes, and evidence of judgment** — not by adjectives like "passionate" or "hardworking."

Write every section as if this person is reading it, not your professor and not your friends.

---

## 3. The 5-Second Test (Above the Fold)

When the page loads, before any scrolling, the visitor must be able to answer without effort:
- Who is this person?
- What do they do / what's their level (student → SWE, not "aspiring" — see Section 7)?
- What's the single most impressive proof point?
- How do I contact them?

**Recommended hero formula:**
```
[Name]
Software Engineer — [1-line positioning]

[One sentence: what you build + for whom, backed by one hard number]

[Primary CTA: View Projects]  [Secondary CTA: Download Resume]  [Contact]
```

Example direction (not final copy — you'll refine):
> "I build production web systems — from an internal AI assistant used daily at Zebra Technologies to a freelance marketplace with escrow-protected payments serving the Sri Lankan market."

---

## 4. Required Sections (In Priority Order)

Order matters. Recruiters read top-to-bottom and often don't reach the bottom — so front-load proof, not biography.

### 4.1 Hero / Landing
- Name, title, one-line positioning statement
- Primary CTA (Projects) + Resume download + Contact
- Optional: subtle terminal-style tagline animation (fits your existing aesthetic)

### 4.2 Selected Work / Projects (THE most important section)
Not a list — a curated case-study set. **3 projects max shown in depth**, rest linked to GitHub. For each:
- **Problem** (1-2 sentences, framed as a real need, not "I wanted to learn X")
- **Your role & decisions** (what did *you* architect or decide, especially where you chose between tradeoffs)
- **Stack** (badges/icons, not paragraphs)
- **The one hard thing** (e.g., "designed the OPEN → IN_PROGRESS → DELIVERED → COMPLETED/DISPUTED state machine to prevent payment disputes")
- **Outcome/status** (deployed? used by real users? demo link/video? GitHub repo?)
- **Visual** — screenshot, architecture diagram, or 20-second demo GIF (huge differentiator, most students skip this)

Priority order for your 3 featured projects:
1. **SkillBridge SL** — lead with this. Two-sided marketplace + escrow + state machine + Docker/DigitalOcean deployment is your strongest architecture story.
2. **Zebra AI Chat Assistant** (internal tool, Gemini API) — real company, real production usage, real constraints (data privacy, integration with existing .NET stack).
3. **CBL Welfare Society Management System** — real client, real scale (1,500+ employees), full-stack delivery under the Zentra.digital brand — shows you can own a client relationship end-to-end, not just code.

### 4.3 Experience
- Zebra Technologies — Software Engineering Intern (Nov 2025–Apr 2026): 2-3 bullet points, each with a concrete contribution + technology + impact, not a job description restatement
- Zentra.digital — Co-Founder: frame as "leading a 5-person team delivering production software for paying clients" — this is a huge differentiator most new-grad portfolios cannot claim

### 4.4 Skills
- Group by category, not a flat cloud: **Languages**, **Frontend**, **Backend**, **Data/AI**, **Tools/DevOps**
- Resist listing everything — list what you can defend in an interview
- Consider a "currently learning" micro-section — signals growth mindset without diluting core credibility

### 4.5 Certifications & Education
- UCSC — BSc in Computer Science (graduating Aug 2026)
- Certifications listed with issuer + date, linked to verification if available
- Keep this section compact — it supports the story, it doesn't lead it

### 4.6 About / Beyond Code (short)
- 2-3 sentences, human but professional
- Rotaract Club (Co-Director, Sports & Recreation) shows leadership/organizing outside pure technical work — worth one line
- Avoid generic hobbies-list energy; tie back to traits relevant to engineering (curiosity, ownership, communication)

### 4.7 The Differentiator Section (your unfair advantage)
You already built a **RAG-based recruiter chat assistant** into your portfolio. This is genuinely rare and should be treated as a headline feature, not a footnote — most senior engineers reviewing portfolios have never seen a candidate build *their own portfolio's Q&A system*. Give it its own visible entry point: "Ask my portfolio anything" — this alone can be the thing that makes a recruiter go "I should talk to this person."

### 4.8 Contact / Footer
- Email, LinkedIn, GitHub, resume download
- Keep it to one click, no forms with excessive fields
- Optional: availability status ("Open to SWE roles from Aug 2026" or similar)

---

## 5. Content Rules (Copywriting Standards)

| Do | Don't |
|---|---|
| "Designed an order-lifecycle state machine handling 5 status transitions with dispute resolution" | "Worked on backend logic" |
| "Built and shipped an internal AI assistant used by [team] at Zebra" | "Learned about LLMs during my internship" |
| Quantify wherever possible (users, requests, records, team size, timeline) | Vague adjectives: passionate, hardworking, detail-oriented |
| Active voice, first person, past tense for completed work | Passive voice, third person |
| "aspiring software engineer" → drop this. You are a **software engineer** (proven by Zebra + Zentra.digital), graduating soon | Undersell yourself — you have real production experience, don't frame yourself as a beginner |

**Important framing shift:** stop calling yourself "aspiring." An aspiring engineer hasn't shipped anything. You've shipped an internal tool at a multinational company and delivered client software to a real business. Your title line should read closer to **"Software Engineer | Final-year CS Student at UCSC"** — confident, accurate, and it re-frames every recruiter's lens before they read a single project.

---

## 6. UI/UX Requirements

You already have a dark terminal aesthetic — keep it, but apply discipline:

- **Consistency:** one accent color, one monospace font for code/terminal elements, one serif or sans for body — not more than 2 typefaces total
- **Whitespace:** terminal aesthetics can get visually noisy — protect breathing room around each section
- **Performance:** must load fast (<2s), especially since recruiters bounce quickly — compress images, lazy-load screenshots/GIFs
- **Mobile-first:** a large % of recruiters open portfolio links from LinkedIn on mobile — test that path specifically
- **Accessibility:** sufficient contrast even within a dark theme (terminal green-on-black can fail contrast checks — verify with a tool)
- **Navigation:** sticky minimal nav (Work / Experience / Skills / Contact) — no more than 5 items
- **No dead ends:** every project should link somewhere (live demo > GitHub > nothing)
- **Micro-interactions welcome, gimmicks not:** subtle hover states and terminal-style typing effects reinforce your brand; avoid anything that delays the recruiter from reaching content

---

## 7. Technical Requirements (Site Itself)

- Fully responsive (mobile / tablet / desktop)
- SEO basics: proper meta tags, OpenGraph image for LinkedIn link previews (this matters — this is how most people will first see it)
- Analytics (simple, e.g. Plausible or GA4) so you know which sections get attention and whether recruiters are visiting
- Resume as both a downloadable PDF and a dedicated readable page (some ATS/recruiter tools scrape pages better than PDFs)
- Fast deploy pipeline (Vercel/Netlify/DigitalOcean — you already have DO experience via SkillBridge SL)
- Keep the RAG chat assistant scoped and reliable — a broken "AI feature" is worse than no AI feature; test edge cases

---

## 8. Content Checklist Before Building

Gather these before writing final copy:
- [ ] 1-sentence positioning statement (test it on a friend — do they understand what you do in 5 seconds?)
- [ ] 3 project write-ups following the case-study formula in 4.2
- [ ] Screenshots/GIFs/architecture diagrams for each featured project
- [ ] 2-3 quantified bullet points for Zebra internship
- [ ] 2-3 quantified bullet points for Zentra.digital / CBL work
- [ ] Finalized skills list grouped by category
- [ ] Certifications with dates/issuers/links
- [ ] Updated resume PDF matching the portfolio's narrative exactly (no contradictions)
- [ ] Professional headshot or strong avatar (optional but raises trust)
- [ ] OpenGraph preview image for link-sharing

---

## 9. What "Top Recruiter Would Reach Out" Actually Requires

Being selected isn't about having the most features — it's about **zero friction to belief**. A top recruiter reaches out when, within 60 seconds, they can say: *"This person has already done the job, just at smaller scale — I want them doing it here."* That comes from:

1. Real systems with real constraints (you have this — lean into it)
2. Visible thinking, not just visible code (explain *why*, not just *what*)
3. Proof they can act like a professional today (client work, a real internship, a co-founded company) — not "potential," but **track record**
4. A polish level that signals the same care you'd bring to their product

---

### Next Step
Once you confirm or adjust this structure, I can help you:
1. Draft final section-by-section copy (project case studies, experience bullets, positioning statement)
2. Build a wireframe/mockup of the updated structure
3. Review your current portfolio against this document and give a gap analysis
