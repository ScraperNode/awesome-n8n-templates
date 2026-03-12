# 🎣 Analyze sales calls & route leads with GPT-4o, Airtable and Trello

> ⚡ **84 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## AI Sales Analyst & Lead Router

### This n8n template handles the post-call process for your business. It uses the call recording to extract valuable data and handles the prospect based on their budget.

Some use cases: Sales follow-ups, auto-qualifying leads based on budget, monetizing low-budget leads, and automatic data entry.

### How it works
1. **Ingestion:** When a call recording is uploaded to a specific Google Drive folder, the workflow is triggered.
2. **Transcription:** OpenAI's model transcribes the call recording.
3. **Analysis:** The GPT-4o model analyzes the transcript and extracts crucial information.
4. **Lead classification:** The extracted budget is checked against your defined threshold (e.g., $5,000).
    * **Hot leads (Budget &gt; 5k):** The workflow logs the data in Airtable (CRM), creates a high-priority task, and instantly alerts the team via a Slack channel.
    * **Warm leads (Budget &lt; 5k):** The workflow logs the data, creates a low-priority task, and emails the lead, offering a cheaper alternative.
5. **Logging:** Every execution is logged in Airtable.

### How to use the workflow
1. **Configure Google Drive:** Open the Trigger node and select the destination folder for the call recordings.
2. **Set your Threshold:** Open the **If** node and set your desired budget (currently set to 5,000).
3. **Customize the email:** Open the Gmail node in Phase 2B and modify the email according to your own preferences.
4. **Database mapping:** Ensure that your Airtable base has the following columns: *Client Name*, *Budget*, *Sentiment*, *Summary*, *Date*, and *Timeline*.
5. **Test it out!** Generate a sample audio file on ElevenLabs and upload it to your Google Drive folder.

### Requirements
* **Google Drive** (For storing audio recordings)
* **OpenAI API Key** (Access to OpenAI models)
* **Airtable** (For CRM and System Logging)
* **Trello** (For Task Management)
* **Slack** (For Team Notifications)
* **Gmail** (For sending automated emails)

## 🔗 Nodes Used

Airtable, Slack, Trello, Google Drive, Gmail, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
