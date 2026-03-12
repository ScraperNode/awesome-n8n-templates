# 📊 Comprehensive SEO Audit with GPT-4 Specialists using Analytics, Search Console & PageSpeed

> ⚡ **3,262 views** · 📊 [Market Research & Insights](../)

## Description

## 🤖 Automated SEO Audit with a Team of AI Specialists

This workflow performs a comprehensive, automated monthly SEO and performance audit for any website. It uses a "team" of specialized AI agents to analyze data from multiple sources, aggregates their findings, and generates a final strategic report.

Every month, it automatically fetches data from **Google Analytics**, **Google Search Console**, and **Google PageSpeed Insights**, and also performs a live crawl of the target website's homepage.

### Key Features
- **Fully Automated**: Runs on a schedule to deliver monthly reports without manual intervention.
- **Multi-Source Analysis**: Gathers data from four key marketing sources for a 360° view.
- **AI Agent Team**: Uses a sophisticated multi-agent system where each AI specializes in one area (Analytics, Performance, Technical SEO).
- **Master Analyst**: A final AI agent synthesizes all specialist reports into a single, actionable strategic plan.
- **Automated Storage**: All individual and final reports are automatically saved to a designated Google Sheet.

---

## ⚙️ Setup Instructions

To use this template, you must configure your credentials and set your target website.

**1. Set Your Target Domain (Crucial!)**:
*   Find the **`Set Target Website`** node at the beginning of the workflow.
*   In the "Value" field, replace `https://www.your-website.com` with the URL of the website you want to audit. This will update the URL across the entire workflow automatically.

**2. Configure the `Schedule Trigger`**:
*   Click on the `Schedule Trigger` node to set when you want the monthly report to run.

**3. Connect Your Google Credentials**:
*   **Google Analytics**: Select your credential in the `Get a report` node.
*   **Google Search Console**: Select your credential in the `Search Console` (HTTP Request) node.
*   **Google Sheets**: Select your credential in *all* `Google Sheets` nodes.
*   **Google PageSpeed API Key**:
    *   Go to the "Credentials" tab in n8n and create a new **"Generic Credential"** with the type **"API Key - Query Param"**.
    *   Name it `Google API Key`.
    *   The "Parameter Name" must be `key`.
    *   Paste your PageSpeed API key into the "API Key" field.
    *   Go back to the **`PageSpeed Insight`** node, select "API Key - Query Param" for Authentication, and choose your new credential.

**4. Connect OpenAI Credentials**:
*   This template uses multiple `OpenAI Chat Model` nodes. Configure each one with your OpenAI API key.

**5. Set Your Google Sheet**:
*   In each of the `Google Sheets` nodes, replace the hardcoded "Document ID" with the ID of your own Google Sheet where you want to store the reports.

---

## 🔬 Workflow Explained

1.  **Phase 1: Data Collection**: The `Schedule Trigger` starts the workflow. Four parallel branches collect data from Google Analytics, PageSpeed Insights, Search Console, and a direct website crawl.
2.  **Phase 2: Data Processing & Specialist Analysis**:
    *   Each data source is processed by a dedicated `Code` node to format the data.
    *   The formatted data is then sent to a specialized AI agent (`ANALYTICS SPECIALIST`, `PERFORMANCE SPECIALIST`, etc.) for in-depth analysis.
3.  **Phase 3: Report Aggregation**: A `Merge` node waits for all four specialist reports to be completed. A `DATA AGGREGATOR` node then combines them into a single, comprehensive package.
4.  **Phase 4: Master Synthesis & Storage**: The final `MASTER ANALYST` agent receives the aggregated data and produces a high-level strategic summary with actionable recommendations. This final report is then saved to Google Sheets.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Analytics, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
