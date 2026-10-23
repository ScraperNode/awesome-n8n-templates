# 🤝 Generate weekly sales insights with Google Sheets, Gemini AI and Gmail

> ⚡ **100 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works  
This workflow automatically generates a weekly sales performance report from Google Sheets data. It runs on a schedule, cleans and filters the dataset, and calculates week-over-week performance metrics. An AI model generates a concise business summary, while a chart visualizes category performance. Finally, the report is formatted into a professional HTML email and sent via Gmail.

## Step-by-step  

- **Trigger & fetch data**  
  - **Schedule Trigger1** – Runs the workflow weekly at a defined time.  
  - **Get row(s) in sheet1** – Fetches raw sales data from Google Sheets.  

- **Clean & prepare data**  
  - **Removing Empty Rows1** – Cleans dataset by removing empty rows and formatting numbers.  
  - **Filter Latest Week1** – Filters data to include only the relevant weekly range.  
  - **Sales Analytics Engine** – Calculates totals, growth %, category performance, and prepares structured output.  

- **Generate insights & visuals**  
  - **Message a model** – Uses AI to generate a short performance summary and recommendations.  
  - **HTTP Request1** – Generates a bar chart comparing category performance using QuickChart.  

- **Format & send report**  
  - **Format Email1** – Builds a styled HTML email with KPIs, insights, and tables.  
  - **Send Email1** – Sends the final report via Gmail to the configured recipient.  

## Why use this?  
- Automates weekly reporting with zero manual effort  
- Provides AI-driven insights for better decision-making  
- Visualizes performance trends clearly with charts  
- Improves communication with clean, professional email reports  
- Saves time on data cleaning, analysis, and formatting

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
