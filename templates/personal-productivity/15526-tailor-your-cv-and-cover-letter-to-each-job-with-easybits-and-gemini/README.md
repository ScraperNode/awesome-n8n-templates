# ⚡ Tailor your CV and cover letter to each job with easybits and Gemini

> ⚡ **306 views** · ⚡ [Personal Productivity](../)

## Description

## What This Workflow Does
Upload a job posting (PDF, image, or screenshot) and instantly get a tailored CV section and a matching cover letter – both written in the posting's language and tone, both honest about what you actually have. The workflow scores how well your stored CV matches the posting before and after AI rewriting, so you can see exactly how much keyword surfacing happened. Anything you don't actually have lands in a `gaps` array – never invented into bullets.

## How It Works
1. **Upload** – Drop the job posting into the n8n web form, optionally with notes
2. **Load CV** – Reads your structured Master CV from Google Sheets
3. **Extract** – easybits Extractor pulls 10 structured fields from the posting (must-haves, keywords, language, tone, etc.)
4. **Score (before)** – A Code node calculates a deterministic match score using keyword overlap
5. **Tailor bullets** – Gemini rewrites your CV bullets to surface real overlap with the posting, mirrors employer phrasing, flags genuine gaps
6. **Score (after)** – Same scoring formula, run against the rewritten bullets – the delta is the win
7. **Cover letter** – A second Gemini call drafts a 3-paragraph letter in the posting's language and tone, referencing only the tailored CV
8. **Output** – Both pieces get written into a single Google Doc, titled with company + role
9. **Done** – A completion screen shows the score before/after, the Doc link, and any gaps

## Setup Guide

### 1. Run the CV Onboarding Workflow First
This workflow assumes a populated Master CV Google Sheet. If you haven't run the **CV Onboarding (easybits)** workflow yet, do that first – it'll extract your CV into the right structure.

### 2. Install & Connect the easybits Extractor
On **n8n Cloud** the easybits Extractor is available out of the box. On **self-hosted n8n**, install it via Settings → Community Nodes → enter `@easybits/n8n-nodes-extractor`.

Sign up at [easybits.tech](https://easybits.tech) for a free API key. Open the **easybits: Extract Job Posting** node and connect your credential.

### 3. Configure the Extraction Pipeline
The Extractor uses 10 fields to pull structured data from the job posting. Paste each description into the corresponding field's description box:

**`job_title`** *(string)*
The exact job title as written in the posting. If multiple titles are mentioned, return the primary one. Return null if not stated.

**`company`** *(string)*
The hiring company's name. Return null if not stated or if the posting is from a recruiter without naming the company.

**`seniority`** *(string)*
One of: intern, junior, mid, senior, lead, principal, executive. Infer from title and years-of-experience requirements. Return null only if there is no signal at all.

**`must_have_skills`** *(array)*
Skills, tools, or specific qualifications the posting explicitly lists as required, must-have, mandatory, or essential. Return as SHORT noun phrases (1-3 words each). Examples: "Python", "PostgreSQL", "Kafka", "5 years experience", "fluent German". DO NOT return full sentences or full requirements. Break compound requirements into individual atoms – e.g., "Solid understanding of testing, monitoring, and profiling" must be returned as three separate items: "testing", "monitoring", "profiling". DO NOT include soft skills like "problem-solving" or "attention to detail". Return empty array if none are explicitly required.

**`nice_to_have_skills`** *(array)*
Skills listed as preferred, bonus, plus, nice-to-have, or "ideally". Same format as must_have_skills. Return empty array if none.

**`responsibilities`** *(array)*
Concrete duties or tasks the role involves, as short action phrases. Maximum 8 items. Empty array if the posting is purely qualifications-focused.

**`keywords`** *(array)*
Domain-specific terms, technologies, methodologies, or industry vocabulary worth mirroring in a CV. Exclude generic words like "team player". Maximum 15 items.

**`tone`** *(string)*
Writing style of the posting. One of: formal, professional, casual, technical.

**`language`** *(string)*
ISO 639-1 code of the posting's primary language (e.g., "en", "de", "nl").

**`location`** *(string)*
Work location as stated. Include "remote", "hybrid", or city/country. Null if not stated.

The 10-field cap matches the easybits free plan, so anyone can run this workflow as-is.

### 4. Connect Google Sheets
Open the **Load Master CV** node and connect your Google Sheets credential. Replace the placeholder document ID with your Master CV sheet's ID and select the `Master CV` tab.

### 5. Connect Gemini
Open both Gemini nodes (**Gemini: Tailor Bullets** and **Gemini: Cover Letter**) and connect your Google AI / Gemini credential. Default model: `gemini-2.5-pro`.

### 6. Connect Google Docs
Open both **Create Google Doc** and **Write to Google Doc** nodes, connect your Google Docs credential. In Create Google Doc, pick a Drive and Folder where tailored applications should be saved (a dedicated folder is recommended).

### 7. Activate & Use
Set the workflow to active, copy the form URL, and upload a real job posting. The completion screen returns the score delta and a link to the generated Google Doc.

---

## 🔧 Notes on Implementation

**Honesty guardrail.** Both Gemini prompts forbid inventing experience. Skills the CV genuinely lacks land in a `gaps` array, surfaced on the completion screen – never faked into bullets or claimed in the cover letter.

**Deterministic scoring.** The before/after match score is calculated in JavaScript, not by an LLM. The same formula runs against the original CV and the tailored bullets, so the delta reflects real keyword surfacing – not AI claiming it improved things. Must-haves count double in the formula; keywords count single.

**Defensive parsing.** The `toArray()` helper in the Score nodes handles three shapes the Extractor may return for array fields: actual arrays, JSON strings, and comma-separated strings. This makes the workflow robust across different Extractor response shapes.

**Language and tone.** Both come from the Extractor as structured fields, so a German posting yields a German CV section AND a German cover letter – automatically.

## 🔗 Nodes Used

Google Sheets, Google Docs, n8n Form Trigger, n8n Form, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
