# ⚒️ Sequential Google Sheets data processing with execution control

> ⚡ **321 views** · ⚒️ [Engineering](../)

## Description

## Preventing Simultaneous Executions of Scheduled Workflows

This n8n template provides a robust solution for processing data from Google Sheets in a controlled manner, specifically designed to **prevent simultaneous executions of a scheduled workflow**. This is crucial for maintaining data integrity, avoiding race conditions, and ensuring that your automated processes handle data sequentially.

### What This Workflow Does and Why It's Important

Many automated tasks involve processing a list of items, like rows in a Google Sheet. If a workflow is scheduled to run every minute, but a single run takes longer than a minute to complete, you could end up with multiple instances of the same workflow running concurrently. This can lead to:

* **Data Duplication**: Processing the same row multiple times.
* **Data Corruption**: Inconsistent updates or overwrites.
* **Resource Exhaustion**: Overloading your systems or API rate limits.

This template solves this by leveraging n8n's **workflow runtime timeout feature**. By setting the workflow's runtime timeout to be equal to or slightly less than its scheduled execution frequency, you ensure that only one instance of the workflow can run at any given time. Once a workflow run successfully completes, it updates a status in your Google Sheet, marking the processed rows and preventing them from being picked up again in subsequent runs. This guarantees sequential, reliable data processing and avoids conflicts.

### Step-by-Step Setup Instructions

1. **Import the Template**: Import this workflow into your n8n instance.
2. **Google Sheets Credential**: Ensure you have a Google Sheets credential configured in n8n and connected to the Google Sheets nodes within the workflow.
3. **Specify Spreadsheet and Sheet Name**: In the "Google Sheet" node, update the Spreadsheet ID and Sheet Name to point to your specific Google Sheet. You can use this [example Google Sheet](https://docs.google.com/spreadsheets/d/1hKwP2_G6EaVSJlqWH1zYMVjarb9cuBx78D_U3HBrdhQ/edit?usp=sharing) for reference.
4. **Configure Processing Logic**: Customize the nodes between the "Read Google Sheet" and "Update Google Sheet" steps to perform your desired data processing logic (e.g., sending emails, updating a CRM, making API calls).
5. **Set Up Schedule**: Activate the workflow and configure its trigger (e.g., "Cron" node) to run on your desired schedule.
6. **Configure Workflow Timeout**: In your n8n workflow settings, set the Workflow Timeout to a value equal to or slightly less than your scheduled execution frequency (e.g., if scheduled every 5 minutes, set timeout to 4 minutes 50 seconds).

More details in my [n8n tips blog](https://n8nplaybook.com/post/2025/07/how-to-prevent-concurrent-n8n-workflows/).

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
