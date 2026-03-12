# 📋 Track employee performance KPIs from ClickUp with GPT-4.1 and Google Sheets

> ⚡ **137 views** · 📋 [Project Management](../)

## Description

## How it works  
This workflow runs on a schedule to collect task data from ClickUp and evaluate employee performance using AI. Tasks are analyzed to generate structured summaries, productivity metrics, and KPI scores. JavaScript logic refines and standardizes the results. The final performance data is stored in Google Sheets as a live KPI dashboard.

## Step-by-step  
- **Step 1: Collect ClickUp task data**  
  - **Schedule Trigger** – Starts the workflow automatically at defined intervals.  
  - **Get many folders** – Fetches all folders from the selected ClickUp space.  
  - **Loop Over Items** – Iterates through folders to process tasks sequentially.  
  - **Get many tasks** – Retrieves tasks associated with each folder or list.  

- **Step 2: Analyze tasks and compute KPIs**  
  - **Message a model** – Sends task details to an AI model to generate summaries and raw performance metrics.  
  - **Code in JavaScript** – Parses AI output, recalculates KPI scores, and assigns standardized ratings.  

- **Step 3: Update employee KPI dashboard**  
  - **Append or update row in sheet** – Writes or updates task and employee performance data in Google Sheets.  

## Why use this?  
- Automates employee performance tracking without manual reporting.  
- Produces consistent KPI scores across all ClickUp tasks.  
- Helps managers quickly identify overdue or high-priority work.  
- Keeps Google Sheets dashboards continuously up to date.  
- Improves visibility into productivity and task execution trends.

## 🔗 Nodes Used

Google Sheets, ClickUp, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
