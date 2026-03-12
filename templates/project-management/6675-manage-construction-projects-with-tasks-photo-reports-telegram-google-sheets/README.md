# 📋 Manage construction projects with tasks, photo reports, Telegram & Google Sheets

> ⚡ **3,497 views** · 📋 [Project Management](../)

## Description

## How it works
This template helps project managers collect task updates and photo reports from field workers via Telegram and stores everything in a Google Sheet. It enables daily project reporting without paper or back-office overhead.

High-level flow:

Workers receive daily tasks via Telegram

They respond with photo reports

Bot auto-saves replies (photos + status) to a Google Sheet

The system tracks task completion, adds timestamps, and maintains report history

## Set up steps
🕒 Estimated setup time: 15–30 min
You’ll need:

A Telegram bot (via BotFather)

A connected Google Sheet (with specific column headers)

A set of preconfigured tasks

👉 Detailed setup instructions and required table structure are documented in sticky notes inside the workflow.

## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.


**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## 🔗 Nodes Used

Cron, Google Sheets, Telegram, Telegram Trigger, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
