# 📊 Daily business idea insights aggregator from IdeaBrowser to Google Docs

> ⚡ **2,173 views** · 📊 [Market Research & Insights](../)

## Description

This automation runs daily at 8:00 AM to automatically collect and organize business idea insights from IdeaBrowser.com into a structured Google Docs document.
The workflow performs the following actions:
Data Collection: Fetches the "idea of the day" content from ideabrowser.com/idea-of-the-day using authenticated HTTP requests.
Content Processing: Extracts the base idea path and generates links to all related insight pages including value ladder, market analysis, proof signals, execution plans, and community insights. The workflow also cleans the HTML content to extract readable text.
Document Creation: Creates a new Google Docs document in a specified folder with a timestamp and idea name in the title format.
Content Aggregation: Systematically visits each insight page (main idea page, value ladder, why now, proof signals, market gap, execution plan, value equation, value matrix, ACP, community signals, and keywords) and collects their content.
Document Population: Processes the collected content through markdown formatting and appends it to the Google Docs document, creating a comprehensive report of the daily business idea with all its associated insights.
Automated Scheduling: Runs automatically every day at 8 AM, ensuring you have fresh business idea analysis delivered to your Google Drive without manual intervention.
This automation is perfect for entrepreneurs, business analysts, or anyone who wants to stay updated with curated business ideas and their detailed market analysis in an organized, searchable format.

## 🔗 Nodes Used

HTTP Request, Google Docs, Markdown, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
