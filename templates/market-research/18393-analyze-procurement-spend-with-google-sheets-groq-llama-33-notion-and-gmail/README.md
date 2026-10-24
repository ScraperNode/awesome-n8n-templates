# 📊 Analyze procurement spend with Google Sheets, Groq Llama 3.3, Notion, and Gmail

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily, reads procurement spend data from Google Sheets, calculates category-level savings and risk metrics, uses Groq (Llama 3.3) to generate Kraljic Matrix insights, logs results to Notion, appends metrics to a Google Sheets dashboard, and emails an aggregated HTML report via Gmail.

## How it works
1. Runs every day at 9:30 AM on a schedule.
2. Fetches spend transactions from Google Sheets and groups today’s rows by category to calculate total spend, supplier list, and supplier count.
3. Filters to categories with at least two suppliers, then computes estimated savings, savings percentage, supplier dominance, risk score, and an optimization level.
4. Sends the calculated category metrics to Groq (Llama 3.3) to classify each category into a Kraljic Matrix quadrant and generate issues, recommendations, insights, and optional web search queries.
5. Parses the AI’s JSON response and merges it back with the calculated savings and risk metrics.
6. Writes the enriched category record to a Notion database and appends the key metrics to a Google Sheets dashboard sheet.
7. Aggregates all category results into a single dataset, renders an HTML email that includes a Data Studio dashboard link, and sends the report via Gmail.

## Setup
1. Add Google Sheets credentials and update the spreadsheet and sheet references for both the input spend data sheet and the dashboard append sheet.
2. Add a Groq API credential to power the Llama-3.3-70b model used for Kraljic Matrix analysis.
3. Add a Notion credential, select the target Notion database, and ensure the database properties match the fields being written (Category, Date, Insight, Savings, Risk Score, Recommendation, Total Spend, Kraljic Matrix, Optimization Level, Search Queries, Supplier Count, Issue).
4. Add Gmail credentials, set the recipient(s) in the email node, and adjust the subject/body if needed.
5. Ensure your Google Sheets input data includes at least these columns: created_at (ISO datetime), category, supplier, and amount (numeric), and update the schedule time if required.

## Additional info
## How To Customize Nodes

* **Adjusting Savings Logic:** 
Open the `calculate Savings` code node. You can easily tweak the JavaScript `if/else` statements to change the savings percentages based on your industry standards (e.g., changing the 12% savings assumption for 3+ suppliers to 15%).

* **Modifying the AI Persona:** 
Open the `AI Insights` node. You can edit the "System Message" to change how the AI responds. For example, you can tell it to focus specifically on the European market instead of the Indian market, or ask it to evaluate sustainability risks instead of just financial risks.

* **Customizing the Email Look:** 
Open the `Create HTML Format` node. This contains standard HTML and inline CSS. You can change the hex color codes (like `#4f46e5`) to match your company's brand colors, or add your company logo to the top of the email template.


## Add‑ons

There are several ways you can extend the functionality of this workflow:

* **Slack / Microsoft Teams Integration:** Add a Slack or Teams node right after the `Combine reports` node to send a quick alert to a channel when a high-risk category is discovered.
* **ERP Connection:** Instead of fetching data from Google Sheets, replace the first node with an HTTP Request node or a database node (like PostgreSQL/MySQL) to pull raw spend directly from your ERP system (like SAP, Oracle, or NetSuite).
* **PDF Generation:** Add a service like API2PDF to convert the generated HTML into a downloadable PDF file, and attach it to the final Gmail message.


## Use Case Examples

While this workflow is built for category opportunity discovery, its architecture supports many use cases. There can be more such use cases of this workflow, including:

1. **Daily Procurement Opportunity Scanning:** Automatically checking daily invoices to group spend and highlight where vendor consolidation can save money.
2. **Supply Chain Risk Management:** Highlighting categories that rely too heavily on a single supplier (monopoly risk) and generating web searches to find backups.
3. **Automated Sourcing Strategy Generation:** Helping junior buyers by using AI to instantly draft an action plan and Kraljic matrix classification before they negotiate contracts.
4. **CFO Spend Reporting:** Providing a clean, automated daily brief to finance leaders regarding how much money is passing through the company and the health of those expenditures.
5. **Contract Renewal Audits:** Running historical spend data through the workflow right before a vendor's contract expires to decide whether to renew or go to market.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow stops at 'Group by Category' code node** | Missing or incorrectly formatted columns in your source Google Sheet. | Ensure your sheet has columns named exactly `created_at` (YYYY-MM-DD), `category`, `supplier`, and `amount` (as numbers). |
| **AI Insights node returns a parsing error** | The AI output strayed from the requested JSON format. | Open the `Groq Chat Model` node and ensure "Temperature" is set very low (e.g., 0.1 or 0.2) to prevent the AI from generating conversational text. |
| **Notion update fails** | The property names in the Notion node do not match your Notion database exactly. | Open the `update Database` node, refresh your properties, and remap the fields ensuring exact casing (e.g., "Risk Score" vs "risk score"). |
| **Email sends but HTML looks broken** | An unexpected character in the category name broke the HTML mapping. | Check the raw data for unescaped quotes or HTML tags inside vendor names. |


## Need Help?

Building and customizing business process automation can be complex, especially when blending data logic with artificial intelligence. If you are looking to modify the Savings Logic code, integrate this workflow directly with your company's ERP or build out customized reporting Add-Ons, our [n8n workflow development team](https://www.weblineglobal.com/hire/n8n-developers/) is here to assist. 

Feel free to contact **WeblineIndia** for expert help in setting up, customizing or [building advanced automated workflows](https://www.weblineindia.com/process-automation-solutions.html) tailored to your unique business needs.

## 🔗 Nodes Used

Google Sheets, Gmail, Notion, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
