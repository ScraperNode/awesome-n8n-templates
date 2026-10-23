# 🔬 Summarize Dropbox notes with Groq and sync to Notion & Sheets

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow manually pulls a Markdown note from Dropbox, summarizes it with Groq Chat (OpenAI gpt-oss-20b) using a structured JSON output, saves the results to a Notion database, logs a backup row in Google Sheets, posts a Slack confirmation, and archives the processed file in Dropbox.

## How it works
1. Manually starts the workflow.
2. Downloads a specific Markdown note from Dropbox and converts the file binary into text while capturing filename, MIME type, and a timestamp.
3. Sends the note text to Groq Chat (OpenAI gpt-oss-20b) to generate a JSON-only title, summary, and exactly five tags, and validates the response against a strict schema.
4. Maps the AI fields into a structured record and creates a new page in a Notion database with the note metadata, summary, and tags.
5. Appends a tracking row to Google Sheets with the processed note details.
6. Posts a Slack message with the processing status and Notion page reference, then moves the original note in Dropbox from /Notes/ to /Processed/.

## Setup
1. Connect Dropbox OAuth2 credentials and update the source note path (/Notes/sample.md) and the archive destination folder (/Processed/) to match your Dropbox structure.
2. Add Groq credentials (for the Groq Chat model) and confirm the selected model is available in your Groq account.
3. Connect your Notion credential and select the target database ID, ensuring it has properties for Title, Summary, Tags (multi-select), and File name.
4. Connect Google Sheets OAuth2 credentials and set the spreadsheet, sheet, and column mapping used for the append operation.
5. Connect Slack credentials and choose the target channel for the notification message.

## Additional info
## How To Customize Nodes

* **Dynamic File Fetching:** Instead of hardcoding `/Notes/sample.md` in the initial Dropbox node, change the operation to list files in a folder, then use a loop to process multiple notes at once.
* **Modify AI Output:** If you need more than 5 tags or a different output structure, update the JSON schema in the **Validate AI Output** node and adjust the text prompt in the **Generate Note Summary** node accordingly.
* **Customize the Slack Message:** Open the Slack Alert node and modify the "Text" field to include different variables, such as tagging a specific team member or altering the formatting.


## Add-ons

* **Automated Scheduling:** Replace the Manual Trigger with a Schedule Trigger to check your Dropbox folder every hour or at the end of the workday.
* **Webhook Trigger:** Replace the manual trigger with a Webhook node so you can push notes to n8n directly from a custom app or an iOS shortcut.
* **Email Backup:** Add a Gmail or Outlook node at the end of the workflow to email the AI summary to clients or stakeholders.


## Use Case Examples

1. **Meeting Minutes:** Drop rough meeting transcripts into Dropbox. The workflow will automatically summarize the key points, tag the topics and log them into your team's Notion workspace.
2. **Research Aggregation:** Save web clippings or markdown articles to your Dropbox. The AI will digest the information, making your Notion database a highly searchable, summarized knowledge repository.
3. **Daily Journaling:** Write raw daily thoughts in markdown. The workflow parses the mood and main events, saving a structured log in Google Sheets for personal tracking over time.
4. **Client Briefings:** Place client requirement documents into the specified folder. The AI distills the requirements, alerts the project management channel in Slack and archives the source file securely.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Dropbox node throws "File not found" error** | The file `/Notes/sample.md` does not exist, or the folder path is incorrect. | Ensure the exact file exists in your Dropbox and the path in the node is completely accurate (case-sensitive). |
| **Code node fails with "No binary data found"** | The Dropbox node failed to download the file properly or the file is empty. | Check that the Dropbox node's operation is set to "download" and that the targeted file contains text. |
| **AI fails to parse output** | The LLM returned text outside of the required JSON structure. | Ensure you are using a capable model in Groq. Try adjusting the prompt in the "Generate Note Summary" node to enforce stricter JSON formatting. |
| **Notion node throws a property error** | The Notion database properties do not match the workflow's expected keys (e.g., missing a "Tags" multi-select property). | Verify that your Notion database contains exactly the properties mapped in the "Save to Notion" node and that their types (rich text, title, multi-select) match. |
| **Archive node fails to move the file** | The `/Processed/` folder doesn't exist in Dropbox, or a file with that name already exists there. | Create the `/Processed/` folder in Dropbox manually. Ensure file names are unique or configure the node to overwrite existing files. |


## Need Help?

Building automated, audit-ready workflows can transform how your business handles data, but configuring APIs, structured AI outputs and database mappings can sometimes be tricky.

If you want to extend this workflow with more advanced add-ons, or if you are looking to build robust, custom automation solutions tailored to your unique business processes, you must [hire n8n workflow developer](https://www.weblineglobal.com/hire/n8n-developers/) for technical assistance. 

[**Contact WeblineIndia**](https://www.weblineindia.com/contact-us.html) for expert help in customizing this template, setting up secure integrations and scaling your automation infrastructure.

## 🔗 Nodes Used

Dropbox, Google Sheets, Slack, Notion, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
