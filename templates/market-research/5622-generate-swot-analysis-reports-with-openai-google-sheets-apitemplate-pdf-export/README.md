# 📊 Generate SWOT analysis reports with OpenAI, Google Sheets & APITemplate PDF Export

> ⚡ **2,389 views** · 📊 [Market Research & Insights](../)

## Description

### SWOT Analysis Generator That Produces PDF Reports In n8n

Want to skip the manual work and instantly generate SWOT analyses for your business plans, investor decks, or strategy docs? 🚀 This workflow lets you automate the entire SWOT (Strengths, Weaknesses, Opportunities, Threats) process—using AI and no-code tools! Whether you're using this for yourself or creating documents for clients, this workflow will save you hours of time and help identify the key components of growing any business.

#### Tools We’ll Be Using:
- **OpenAI API**: Powers AI-driven extraction and generation of SWOT sections, introductions, conclusions, and more.
- **n8n**: The no-code automation platform that orchestrates this workflow.
- **Google Sheets**: Stores your company data and report outputs (download the provided "SWOT Analysis" template and fill it out).
- **APITemplate.io**: Converts HTML reports into downloadable, multi-page PDFs.
- **DeepSeek API** *(optional)*: An alternative to OpenAI for specific reasoning tasks.
- **Gmail OAuth2**: Sends the final report via email.

If you’re building a business, doing client work, or just want faster strategic planning—this will save you HOURS.

---

### How It Works

This n8n workflow transforms structured company data from a Google Sheet into a fully formatted, investor-grade SWOT report in both HTML and PDF formats. Here’s the process in a few high-level steps:

1. **Load Data**: Pulls company information from the "Company Info Input" tab in the "SWOT Analysis" Google Sheet.
2. **AI Analysis**: Uses AI (via OpenAI or DeepSeek) to categorize data into Strengths, Weaknesses, Opportunities, and Threats, and generates detailed narrative sections for each.
3. **Create Report Sections**: Produces a strategic introduction, conclusion, table of contents, and title page using AI.
4. **Format and Combine**: Converts all sections into styled HTML and merges them into a single document.
5. **Generate PDF**: Converts the HTML into a polished, multi-page PDF using APITemplate.io.
6. **Save and Share**: Saves the report back to Google Sheets and emails the PDF to a specified recipient.

The result is a professional, investor-ready SWOT report with minimal manual effort, ready for sharing or review.

---

### Setup Steps

Setting up this workflow typically takes **15-30 minutes**, depending on your familiarity with the tools. Here’s what you’ll need to do:

- **Configure Credentials**: Set up API keys and OAuth2 credentials for Google Sheets, OpenAI, APITemplate.io, Gmail, and optionally DeepSeek.
- **Prepare Your Google Sheet**: Download the provided "SWOT Analysis" template, fill out the "Company Info Input" tab with your company data, and ensure it’s accessible.
- **Import the Workflow**: Copy the workflow JSON into your n8n instance and connect your credentials.

**Detailed instructions** for each step, including credential setup and customization options, are available in the sticky notes within the workflow. Refer to these for step-by-step guidance.

---

### Benefits

- **Efficiency**: Automates the entire SWOT report generation process, saving hours of manual work.
- **Professional Output**: Delivers fully styled HTML and PDF reports with headings, paragraphs, and custom layouts.
- **AI-Driven Insights**: Ensures clarity and relevance in every section through targeted AI analysis.
- **Seamless Sharing**: Automatically saves reports to Google Sheets and emails them to stakeholders.

This workflow is perfect for entrepreneurs, consultants, or strategists looking to streamline their SWOT analysis process and deliver high-quality, professional reports effortlessly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
