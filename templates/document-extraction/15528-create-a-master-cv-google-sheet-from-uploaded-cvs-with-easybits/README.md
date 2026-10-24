# 🔬 Create a master CV Google Sheet from uploaded CVs with easybits

> ⚡ **197 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What This Workflow Does
Upload your CV as a PDF and instantly get a structured "Master CV" Google Sheet – every experience, education entry, skill, and contact detail extracted into the right tab. This gives you a clean personal CV database you can reuse across other workflows (job tailoring, application tracking, skills gap analysis).

## How It Works
1. **Upload** – Drop your CV PDF into the n8n web form
2. **Extract** – easybits Extractor pulls structured data (experiences, education, skills, summary)
3. **Fan out** – A Code node splits the response into rows for each sheet tab
4. **Append** – Four parallel branches write to the four tabs of your Master CV sheet
5. **Done** – A completion screen confirms what was imported

## Setup Guide

### 1. Prepare Your Master CV Google Sheet
Create a Google Sheet named **Master CV** with four tabs:
- **Master CV** – columns: `role`, `company`, `dates`, `bullets`, `skills`
- **Education** – columns: `degree`, `institution`, `dates`, `details`
- **Skills** – single column: `skill`
- **Summary** – columns: `full_name`, `email`, `linkedin_url`, `location`, `summary`, `languages`, `links`

Leave all tabs empty below the headers – the workflow fills them.

### 2. Install & Connect the easybits Extractor
The easybits Extractor is a verified n8n community node. On **n8n Cloud** it's available out of the box. On **self-hosted n8n**, install it via Settings → Community Nodes → enter `@easybits/n8n-nodes-extractor`.

Sign up for a free account at [easybits.tech](https://easybits.tech) to get an API key. Open the **easybits: Extract CV** node in this workflow and connect your credential.

### 3. Configure the Extraction Pipeline
The Extractor node uses 10 fields to pull structured data from the CV. Paste each description into the corresponding field's description box in the Extractor node:

**`full_name`** *(string)*
Candidate's full name as it appears at the top of the CV. Null if not present.

**`email`** *(string)*
Email address. Null if not present.

**`linkedin_url`** *(string)*
Full LinkedIn profile URL. Null if not present.

**`location`** *(string)*
Location as written (e.g., "Berlin, Germany"). Null if not present.

**`summary`** *(string)*
Personal summary or "about me" paragraph. Return full text as written, do not paraphrase. Null if no summary section.

**`experiences`** *(array)*
Each work experience as an object: `role`, `company`, `dates` (range as written), `bullets` (array, one per bullet point), `skills` (array of techs/tools used in this specific role). Preserve original wording of bullets – do not summarize. List in CV order.

**`education`** *(array)*
Each entry as an object: `degree`, `institution`, `dates`, `details` (thesis, GPA, honors – null if none). Empty array if no education section.

**`skills`** *(array)*
Flat list of all technical skills, tools, frameworks, methodologies, AND certifications listed anywhere in the CV. Each as a short noun phrase. Deduplicate case-insensitively. Exclude soft skills like "communication".

**`languages`** *(array)*
Spoken/written languages as objects: `language`, `proficiency` (as written, e.g., "C1", "fluent"). Empty array if none.

**`links`** *(array)*
Professional URLs other than LinkedIn (GitHub, portfolio, personal site) as objects: `label`, `url`. Empty array if none. Do not include LinkedIn here.

The 10-field cap matches the easybits free plan, so anyone can run this workflow as-is.

### 4. Connect Google Sheets
Open each of the four append nodes (Master CV, Education, Skills, Summary) and connect your Google Sheets credential. Replace the placeholder document ID with your Master CV sheet's ID.

### 5. Activate & Upload
Set the workflow to active, copy the form URL, and upload your CV. Review the four tabs after – minor cleanup is normal, especially for two-column or designer CV layouts.

---

## 🔧 Note on the Fan-out Code Node
The easybits Extractor wraps its response in a `data` object, so the Fan-out node reads from `$input.first().json.data`. The `toArray()` helper inside the node also handles cases where array fields come back as JSON-encoded strings – making the workflow robust across different Extractor response shapes.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
