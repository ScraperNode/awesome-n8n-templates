# 🔬 Extract tasks from Google Drive screenshots with GPT-4o-mini, Sheets and Slack

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for new screenshot files, uses OpenAI (GPT-4o-mini) to extract tasks as structured JSON, appends the tasks to Google Sheets, and then sends a Slack direct message to each human user in the workspace.

## How it works
1. Triggers every minute when a new file is created in a specific Google Drive folder.
2. Downloads the new screenshot from Google Drive and sends the image to OpenAI (GPT-4o-mini) to extract tasks in a strict JSON format.
3. Parses the OpenAI response into a tasks array and expands it into individual task items enriched with the file name, Google Drive link, and a timestamp.
4. Filters out any extracted items with an empty task title to avoid creating junk records.
5. Appends each valid task as a new row in a Google Sheets spreadsheet with title, description, priority, source link, and timestamp.
6. Fetches all Slack users, filters out bot accounts, and sends a direct message (currently the text “hiii”) to each remaining user.

## Setup
1. Connect Google Drive credentials and set the folder ID to watch for new screenshots.
2. Add an OpenAI API credential that can access the gpt-4o-mini model.
3. Connect Google Sheets credentials and update the target spreadsheet/document ID and sheet tab for appending rows.
4. Connect Slack credentials with permission to list users and send direct messages, and customize the DM text if needed.

## Additional info
## How To Customize Nodes

You can adjust this workflow to fit your exact needs by customizing:

- **AI Prompt (Analyze image):**
Change the wording of the instructions or add/remove fields in the required JSON schema. If you change the schema, be sure to update `Parse Output`, `Split Tasks`, and `Append Row` accordingly.

- **Filtering Logic:**
In `Check empty task title`, add additional conditions (for example, filter by `priority` or `confidence`) to limit which tasks are stored.

- **Sheet Structure:**
Modify the column mapping in `Append Row` if your Google Sheet uses different headers, additional columns, or a different sheet name.

- **Slack Message Content:**
Enhance `Send Message to user` to include fields like `task_title` or `Source Link` by referencing data from previous nodes using expressions.


## Add‑Ons and Extensions

Here are some ways you could extend this workflow:

- Add another branch after `Append Row` that sends task summaries to a specific Slack channel instead of all users.
- Introduce another If node to only notify Slack for High priority tasks.
- Insert an email node (Gmail or SMTP) to send a daily summary of tasks added to the sheet.
- Add a separate Google Sheets lookup step to avoid creating duplicate tasks based on `File Name` + `Task Title`.


## Use Case Examples

This workflow can be used in several scenarios, including but not limited to:

1. **Product UI feedback from screenshots:** Automatically convert UI screenshots containing to‑dos into a structured backlog in Google Sheets.
2. **Bug reporting from captured screens:** Turn QA or support screenshots into actionable tasks with descriptions and links to the original files.
3. **Design review boards:** Extract tasks from static design boards or mockups and centralize them in a Sheet for tracking.
4. **Ad‑hoc personal task capture:** Save screenshots from your phone or desktop into Drive and let the workflow turn them into tasks.
5. **Team notifications of new tasks:** After logging tasks, notify all Slack users so everyone knows that new tasks have been captured.

There can be many more variations depending on how you name the files, structure the screenshots, and integrate downstream tools.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :-- | :-- | :-- |
| Workflow does not start when a file is added | Google Drive Trigger is not active or folder ID is incorrect | Make sure the workflow is active and verify the `folderToWatch` ID in the Google Drive Trigger node. |
| OpenAI node returns an error or empty result | Model credentials are missing or JSON format from AI is invalid | Check OpenAI credentials in the node and review the prompt. Inspect `Parse Output` error message for the raw AI response to debug JSON issues. |
| No rows appear in Google Sheets | Sheet ID or sheet name mismatch, or tasks are filtered out | Confirm `documentId`, `sheetName`, and column mapping in `Append Row`. Ensure `Check empty task title` is routing valid tasks to the False branch. |
| Slack users are not receiving messages | Slack credentials not configured or messages sent to bots only | Verify `slackApi` credentials, ensure `Check bot users` is passing real users, and check that `Send Message to user` has correct `user` ID and text. |
| Workflow fails at `Parse Output` | AI returned non‑JSON text or an unexpected structure | Use the error message from `Parse Output` to see the raw text and adjust the AI prompt or parsing logic to handle that structure. |


## Need Help?

If you need assistance or want to [hire n8n workflow developers](https://www.weblineglobal.com/hire/n8n-developers/) for setting up this workflow, adjusting it to your environment or building add‑ons such as custom filtering, advanced notifications or integrations with other tools, the **n8n team at WeblineIndia** can help. They can assist with n8n installation, credential configuration, workflow customization and end‑to‑end automation design so that this screenshot‑to‑task flow fits seamlessly into your existing processes.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
