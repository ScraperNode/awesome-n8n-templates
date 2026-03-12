# 🎣 Qualify leads with AI review analysis using Azure GPT-4o-mini and Google Sheets

> ⚡ **153 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

**Description:**

Turn raw customer feedback into actionable insights with this intelligent n8n workflow template! Automatically capture reviews from Google Sheets, run AI-driven sentiment and intent analysis, and enrich your dataset with structured insights—no manual review required.

This automation connects to your feedback form responses, processes reviews with an AI model, classifies intent, evaluates sentiment, assigns a score, and generates concise summaries. The results are then parsed, merged with original customer details, and stored in a structured Google Sheet for easy tracking. Perfect for sales, product, and customer success teams looking to streamline lead qualification and feedback analysis.

**What This Template Does:** 

📊 Captures new customer feedback from Google Sheets in real time
 🧠 Uses AI to classify intent (praise, complaint, suggestion, etc.)
 😊 Detects sentiment (positive, neutral, negative, or mixed)
 🔢 Assigns a review score (1–10) for quick lead qualification
 📝 Generates short, meaningful summaries of customer reviews
 📂 Saves enriched data into a structured destination sheet
 🌟 100% hands-free: just let AI process and organize your feedback

**Built-in Logic Ensures:**

 ✔️ Clean JSON-based AI output (intent, sentiment, score, summary)
 ✔️ Customer details remain tied to their feedback and insights
 ✔️ Final dataset is ready for reporting, CRM import, or dashboards

**Requirements:**

- Google Sheets with customer feedback form responses
- Google Sheets account for storing enriched data
- Azure OpenAI (or compatible) account for AI analysis
- n8n instance (self-hosted or cloud)

**Perfect For:**

- Sales teams qualifying leads based on review sentiment
- Product managers analyzing user feedback at scale
- Customer success teams identifying risks and opportunities
- Analysts turning unstructured reviews into actionable insights

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
