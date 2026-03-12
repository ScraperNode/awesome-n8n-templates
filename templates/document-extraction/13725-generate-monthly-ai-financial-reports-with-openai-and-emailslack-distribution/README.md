# 🔬 Generate monthly AI financial reports with OpenAI and email/Slack distribution

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow automatically fetches monthly financial statements, normalizes the data, performs KPI calculations and trend analysis, detects anomalies, generates AI-powered executive insights and recommendations, creates professional reports, and distributes them to stakeholders while maintaining historical records.

### Key Insights
- Consistent data formats from accounting systems (QuickBooks, Xero, etc.) are critical for reliable normalization and analysis.
- AI-generated insights are only as good as the input data quality — always validate fetched statements and mappings first.
- Monthly scheduling ensures timely reporting; consider adding manual triggers for ad-hoc runs during testing.

### Workflow Process
1. Initiate the workflow with the **Monthly Schedule Trigger** node (runs on the 1st of each month at 8 AM).
2. Fetch current period financial statements (P&L, balance sheet, cash flow) using the accounting API nodes.
3. Fetch previous period data for accurate YoY/MoM comparisons.
4. Merge all statements, normalize formats, validate integrity, and calculate standardized KPIs/metrics using data transformation nodes.
5. Analyze trends, variances, and detect anomalies/unusual patterns.
6. Send cleaned financial data to an AI model (OpenAI/Claude) to generate natural language executive summaries, key insights, and actionable management recommendations.
7. Format and generate professional HTML/PDF reports (with charts/visualizations if configured).
8. Store the report and metrics in a database for historical tracking, post summary to Slack, and email the full report to management/stakeholders.

### Usage Guide
- Import the workflow into n8n and configure credentials for your accounting system(s), AI provider, database, Slack webhook, and email (SMTP).
- Map fields correctly in the normalization/validation nodes to match your source data structure.
- Test end-to-end with sample/historical financial data before enabling the schedule.
- Execute manually first via the **Execute workflow** button to verify each step (especially API fetches and AI output quality).

### Prerequisites
- API access to accounting system (QuickBooks, Xero, SAP, or direct database connection)
- OpenAI or Claude API key for insight generation
- Database (PostgreSQL, MySQL, etc.) with tables ready for reports and metrics storage
- SMTP server or email service credentials
- Slack webhook (optional for notifications)
- PDF/HTML generation tools (if using external services like WeasyPrint via code node or Make.com-style nodes)

### Customization Options
- Adjust the schedule (e.g., quarterly instead of monthly) in the trigger node.
- Modify the AI prompt in the LLM node to change the style/tone of summaries or add specific focus areas (e.g., cost control, revenue growth).
- Extend anomaly detection rules or add more KPIs in the analysis section.
- Change distribution channels (add Teams, Discord, Google Drive upload, etc.) by modifying or adding nodes after report generation.
- Add conditional branching for high-priority alerts (e.g., if major anomaly detected → immediate notification).

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
