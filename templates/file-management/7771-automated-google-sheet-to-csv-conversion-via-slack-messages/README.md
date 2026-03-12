# 📁 Automated Google Sheet to CSV conversion via Slack messages

> ⚡ **251 views** · 📁 [File Management](../)

## Description

Step 1: Slack Trigger

The workflow starts whenever your Slack bot is mentioned or receives an event in a channel. The message that triggered it (including text and channel info) is passed into the workflow.

Step 2: Extract the Sheet ID

The workflow looks inside the Slack message for a Google Sheets link. If it finds one, it extracts the unique spreadsheet ID from that link. It also keeps track of the Slack channel where the message came from. If no link is found, the workflow stops quietly.

Step 3: Read Data from Google Sheet

Using the sheet ID, the workflow connects to Google Sheets and reads the data from the chosen tab (the specific sheet inside the spreadsheet). This gives the workflow all the rows and columns of data from that tab.

Step 4: Convert Data to CSV

The rows pulled from Google Sheets are then converted into a CSV file. At this point, the workflow has the spreadsheet data neatly packaged as a file.

Step 5: Upload CSV to Slack

Finally, the workflow uploads the CSV file back into Slack. It can either be sent to a fixed channel or directly to the same channel where the request came from. Slack users in that channel will see the CSV as a file upload.


============================================

How it works

The workflow is triggered when your Slack bot is mentioned or receives a message.

It scans the message for a Google Sheets link.

If a valid link is found, the workflow extracts the unique sheet ID.

It then connects to Google Sheets, reads the data from the specified tab, and converts it into a CSV file.

Finally, the CSV file is uploaded back into Slack so the requesting user (and others in the channel) can download it.

How to use

In Slack, mention your bot and include a Google Sheets link in your message.

The workflow will automatically pick up the link and process it.

Within a short time, the workflow will upload a CSV file back into the same Slack channel.

You can then download or share the CSV file directly from Slack.

Requirements

Slack App & Credentials: Your bot must be installed in Slack with permissions to receive mentions and upload files.

Google Sheets Access: The Google account connected in n8n must have at least read access to the sheet.

n8n Setup: The workflow must be imported into n8n and connected to your Slack and Google Sheets credentials.

Correct Sheet Tab: The workflow needs to know which tab of the spreadsheet to read (set by name or by sheet ID).

Customising this workflow

Channel Targeting: By default, the file can be sent back to the channel where the request came from. You can also set it to always post in a fixed channel.

File Naming: Change the uploaded file name (e.g., include the sheet title or today’s date).

Sheet Selection: Adjust the configuration to read a specific tab or allow the user to specify the tab in their Slack message.

Error Handling: Add extra steps to send a Slack message if no valid link is detected, or if the Google Sheet cannot be accessed.

Formatting: Extend the workflow to clean, filter, or enrich the data before converting it into CSV.

## 🔗 Nodes Used

Function, Google Sheets, Slack, Spreadsheet File, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
