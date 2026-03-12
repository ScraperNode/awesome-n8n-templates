# 📊 Generate weekly AI equity research reports with Google Sheets, FMP, NewsAPI, OpenAI, and Gmail

> ⚡ **77 views** · 📊 [Market Research & Insights](../)

## Description

## 📘 Description
This workflow automatically generates professional equity research reports for selected companies using financial data, market news, and AI analysis. It is designed for analysts, founders, and finance teams who want consistent, data-backed equity insights without manual research.
On a weekly schedule, the workflow reads a list of companies from Google Sheets and processes only those marked as enabled. For each company, it collects five years of financial statements and recent market news, calculates key financial signals, and uses AI to generate a structured SWOT analysis, risk assessment, and growth outlook. The final report is converted into a PDF, logged for tracking, and emailed automatically.

## ⚙️ What This Workflow Does (Step-by-Step)
⏰ Weekly Scheduler
 Runs the workflow automatically at a fixed weekly time.
📄 Load Company List from Google Sheets
 Uses Google Sheets as the control panel to decide which companies are analyzed.
🔁 Iterate Enabled Companies
 Processes each enabled company one at a time for stable execution.
📊 Fetch Financial Statements (FMP)
 Pulls income statement, balance sheet, and cash flow data for the last five years.
📰 Fetch Recent Market News
 Retrieves the latest company-related news headlines.
🧹 Normalize Financials & News
 Cleans and structures all data into a consistent format.
📐 Compute Financial & Market Signals
 Calculates revenue growth, margins, leverage, cash flow strength, and buyback signals.
🤖 AI SWOT Analysis
 Generates strengths, weaknesses, opportunities, and threats using only derived signals and news.
📈 AI Risk & Growth Outlook
 Identifies key risks and provides a 12–24 month growth outlook.
📝 Build Equity Research Report (HTML)
 Combines all insights into a clean, readable report layout.
📄 Convert Report to PDF
 Automatically renders the HTML report into a downloadable PDF.
📊 Log Report Metadata to Google Sheets
 Stores PDF URL, size, timestamp, and expiry for tracking.
📧 Email Research Report
 Sends the PDF download link to stakeholders.

## 🧩 Prerequisites
• Google Sheets API access
 • Financial Modeling Prep (FMP) API key
 • NewsAPI key
 • OpenAI API access
 • Gmail OAuth2 credentials
 • HTML-to-PDF service credentials

## 💡 Key Benefits
✔ Fully automated equity research reporting
 ✔ Consistent, repeatable analysis every week
 ✔ Data-backed AI insights with no assumptions
 ✔ No manual data collection or formatting
 ✔ Clean PDF reports ready for sharing
 ✔ Centralized tracking in Google Sheets
 ✔ Scales easily to multiple companies

## 👥 Perfect For
- Equity analysts
-  Investment research teams
-  Startup founders
-  Finance and strategy teams
-  Advisory and consulting firms
-  Anyone producing regular equity research reports

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
