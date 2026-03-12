# ⚡ Sync events from Excel to Google Calendar with GPT-4o-Mini smart summaries

> ⚡ **224 views** · ⚡ [Personal Productivity](../)

## Description

## **Introduction**
Automatically imports Excel schedules from Google Drive, validates data with AI, syncs to Google Calendar, 
and emails smart summaries. Ideal for educators, managers, and administrators handling recurring academic
or project schedules.
## **How It Works**
Trigger → Download Excel → Filter events → Dual AI analysis (OpenAI + Parser) → Merge insights 
→ Enrich data → Create/Update Google Calendar events → Generate and email AI summary.
## **Workflow Template**
Trigger → Download Excel → Filter Events → AI Analysis → Merge Insights → Enrich Data 
→ Create/Update Calendar → AI Summary → Email Report
## **Workflow Steps**
1. **Trigger**: Runs on schedule to detect new files.
2. **Read Excel**: Converts spreadsheet data to JSON.
3. **Filter Events**: Removes invalid entries.
4. **AI Context Analysis**: Understands event links and conflicts.
5. **Structured Parser**: Formats AI output for consistency.
6. **Merge Insights**: Combines multi-AI results.
7. **Enrich Data**: Prepares Google Calendar-ready events.
8. **Calendar Actions**: Creates or updates events.
9. **AI Summary**: Generates executive overview.
10. **Email Delivery**: Sends formatted summary report.
## **Setup**
1. **Google Drive**: Connect OAuth2 → get file ID.
2. **Calendar**: Enable API → authorize in n8n.
3. **OpenAI**: Add API key → select GPT model.
4. **Email (Gmail/SMTP)**: Configure sender and recipients.
5. **Trigger**: Set timezone and frequency.
6. **Excel Format**: Include Name, Date, Time, Location, Staff, etc.

## 🔗 Nodes Used

Send Email, Spreadsheet File, Google Drive, Google Calendar, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
