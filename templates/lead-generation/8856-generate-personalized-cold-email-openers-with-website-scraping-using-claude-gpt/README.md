# 🎣 Generate personalized cold email openers with website scraping using Claude & GPT-4

> ⚡ **390 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

**This template enriches a lead list by analyzing each contact’s company website and auto-generating a single personalized cold-email opener. Drop a spreadsheet into a Google Drive folder → the workflow parses rows, fetches website content via Jina AI, uses OpenAI to check if the site contains valid business info, then calls Anthropic to craft a one-liner. It writes both the website summary and personalized opener back to Google Sheets, and finally sends you a Telegram confirmation with the file link.**

## What it does
Turns a CSV/Google Sheet of leads into tailored cold-email openers. For each lead, the workflow fetches the company website, writes a 300-word business summary, then crafts a one-sentence, emotionally engaging opening line. Results are written back to the same Sheet, and you get a Telegram ping when processing finishes.

## How it works (high-level)
	1.	Trigger: Watches a Google Drive folder. When a new Sheet is added, the flow starts.
	2.	Parse: Reads rows (expects columns like First Name, Last Name, Email, domain).
	3.	Enrich: An AI Agent calls Jina “r.jina.ai/{url}” to fetch page markdown, then produces a structured website summary.
	4.	Validate: An OpenAI step checks if the fetched content is a real business page (hasWebsite: true/false).
	5.	Personalize:
	•	If true → Anthropic crafts a bespoke opener using the summary.
	•	If false → Fallback prompt creates a strong opener using domain + universal lead-gen pains.
	6.	Update: Writes websiteSummary and personalization back to the Sheet (matching on domain).
	7.	Notify: Sends a Telegram message with the file name + link when done.

## What you need
	•	Google Drive (folder to watch)
	•	Google Sheets (the uploaded Sheet to enrich)
	•	Jina HTTP header auth (for the markdown fetch tool)
	•	OpenAI (JSON check for website validity)
	•	Anthropic (Claude Sonnet 4 for copy quality)
	•	Telegram Bot (to receive completion alerts)

## Inputs & expected schema
	•	A Google Sheet with at least: First Name, Last Name, Email, domain
	•	Optional columns are preserved; rows are processed in batches.

## Outputs
	•	New/updated columns per row:
	•	websiteSummary — concise, structured business overview
	•	personalization — a single, high-impact opening sentence
	•	Telegram confirmation with file name and link.

## Customization tips
	•	Tweak the system prompts for tone or length.
	•	Add scoring (e.g., ICP fit) before personalization.
	•	Expand validation (e.g., handle multi-page sites or language detection).
	•	Swap/parallel LLMs to balance quality, cost, and speed.

## Nodes & key logic
	•	Google Drive Trigger → Google Drive (Download) → Spreadsheet File (parse) → Split in Batches
	•	LangChain Agent with: HTTP Tool (Jina) + Think
	•	OpenAI (JSON validator) → If (website present?)
	•	Anthropic Chat (with + without website branches)
	•	Edit Fields (Set) → Google Sheets (Update) → Telegram

## Great for
Sales teams, SDRs, and founders who want fast, high-quality personalization at scale without manual research.

## **Need help customizing?**
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/mariela-ceo-founder/)

## 🔗 Nodes Used

Google Sheets, Spreadsheet File, Telegram, Google Drive, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
