# 📊 Bright Data-powered competitive price lookup and report generator

> ⚡ **558 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow automates the collection, enrichment, and analysis of e-commerce product listings using Bright Data and AI, then delivers an HTML email report with the most competitive offers.

🚀 **What It Does**

- Pulls product titles from a Google Sheet.
- For each product, searches a Bright Data marketplace dataset (Google Shopping) for available listings.
- Extracts relevant fields: price, title, seller name, and listing URL.
- Sends this data to Google Gemini for AI-powered Markdown report generation.
- Converts Markdown to HTML and styles the output for better email rendering.
- Sends an email report for each product with the top 20 most affordable offers.

🛠️ **Step-by-Step Setup**

- Load product list from Google Sheets.
- For each product title, run a Bright Data filter request (case-sensitive match).
- Poll the snapshot status until it is ready.
- Retrieve snapshot content and clean the results with a Code node.
- Pass the results to Gemini (PaLM/Gemini Flash) for analysis and report generation in Markdown.
- Convert Markdown into styled HTML using Markdown + Code nodes.
- Send formatted email to a predefined recipient.
- Return to the loop and repeat for the next product.

🧠 **How It Works**

- Loop Control: SplitInBatches handles product-by-product processing.
- Snapshot Handling: Snapshot status is polled every 30s until success/failure.
- AI Formatting: Gemini summarizes listings and formats content.
- Error Handling: Failed snapshots produce a warning message and resume the loop.

📨 **Final Output**

- Each email contains:
- The product name
- A clean HTML of up to 20 sellers with lowest prices
- Links to listings
- AI-generated pricing summary

🔐 **Credentials Used**

- Bright Data account
- Google Gemini (PaLM/Gemini Flash)
- Google Sheets (OAuth2)
- SMTP Email (emailSend node)

⚠️ **Important Notes**

 - Item title search is case-sensitive. Typos or casing mismatches may result in no results.
- Requires **n8n-nodes-brightdata community node** to be installed.

## 🔗 Nodes Used

Send Email, Google Sheets, Markdown, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
