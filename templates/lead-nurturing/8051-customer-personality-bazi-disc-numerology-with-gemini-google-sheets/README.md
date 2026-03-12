# 💬 Customer personality (BaZi, DISC, Numerology) with Gemini & Google Sheets

> ⚡ **89 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## 📄 What this workflow does
 This workflow turns your n8n into an automated personality-insights engine driven by Google Sheets. When a row is updated with Analysis Status = Run, it:
- Computes Lunar Date of Birth and Four Pillars (BaZi) from DOB and optional birth time.
- Calculates Numerology (Life Path, Birth Day, Pinnacles/Challenges, Expression, Soul Urge, Personality, Maturity) and a phone “vibration” number.
- Generates concise, sales-oriented bullet-point analyses with Gemini for BaZi, Numerology, and DISC (from Notes).
- Merges results and writes back to the sheet: Lunar Date of Birth, Four Pillars, Numerology, Four Pillars Analysis, Numerology Analysis, DISC Analysis, and a combined Personality summary—then flips Analysis Status to Done.
- Handles missing data gracefully and logs clear warnings in the sheet fields.


## 👤 Who is this for
- Sales teams working from spreadsheets who want fast personality cues for outreach.
- Coaches/consultants providing light BaZi/Numerology/DISC summaries at scale.
- SMBs maintaining lead/customer lists in Google Sheets and wanting auto-generated insights.


## ✅ Requirements
- An n8n instance.
- Google Sheets with these columns (English): No, Full Name, Date of Birth, Birth Time, Gender, Email, Phone, Status, Analysis Status, Purchase Value, Notes, Four Pillars, Four Pillars Analysis, Lunar Date of Birth, Numerology, Numerology Analysis, DISC Analysis, Personality, Script.
- Google Sheets OAuth2 credentials connected in n8n.
- Google Gemini API credentials (nodes use models like models/gemini-1.5-flash and models/gemini-2.5-flash).
- (Optional) Confirm timezone (+07:00) used in the BaZi lunar calculations fits your use case.


## ⚙️ How to set up
- Import the provided workflow JSON into n8n.
- Connect Google Sheets credentials and point to your spreadsheet + sheet (gid).
- Connect Gemini credentials and keep/adjust the default model IDs.
- Ensure your sheet has the listed English column headers.
- (Optional) Adjust the timezone constant in the Code nodes if you’re not in GMT+7.
- Set Analysis Status = Run in any row you want analyzed and trigger a row update.


🔁 How it works
1. Trigger → Google Sheets Trigger fires on row update where Analysis Status = Run.
2. Pre-processing → Code computes Lunar DOB + Four Pillars; Code1 computes Numerology and phone metric.
3. Conditional flows → IF nodes check available inputs (BaZi/Numerology/Notes) and call the relevant Gemini nodes.
4. LLM Generation → Gemini returns three focused analyses (BaZi, Numerology, DISC) plus a combined Personality summary.
5. Merge/Aggregate → Results are merged for a single row.
6. Write-back → Google Sheets nodes update Lunar Date of Birth, Four Pillars, Numerology, Four Pillars Analysis, Numerology Analysis, DISC Analysis, Personality and set Analysis Status = Done.

## 💡 About Margin AI
[Margin AI](https://marginai.co/) is an AI-services agency that acts as your AI Service Companion. We design intelligent, human-centric automation solutions—turning your team’s best practices into scalable workflows and tools. Industries like marketing, sales, and operations benefit from our tailored AI consulting, automation tools, and chatbot development.

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
