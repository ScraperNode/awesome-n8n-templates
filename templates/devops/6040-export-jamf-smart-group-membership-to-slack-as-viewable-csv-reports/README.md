# ⚙️ Export Jamf smart group membership to Slack as viewable CSV reports

> ⚡ **148 views** · ⚙️ [DevOps & CI/CD](../)

## Description

🧩 Jamf Smart Group Membership to Slack
Automatically export Jamf smart group membership to Slack in CSV format.
Perfect for IT and security teams who need fast visibility into device grouping—without manually logging into Jamf.

Slack automatically parses the CSV, making it viewable directly in the chat—no download required.

✅ Prerequisites
• A Jamf Pro API key with permissions to read smart groups and computer details
• A Slack app or incoming webhook URL with permission to post messages to your desired channel

🔍 How it works
• Manually trigger the flow or connect it to a webhook
• Fetch the list of smart group IDs (set manually in the workflow)
• Loop over each group to get its members
• Use a sub-workflow to fetch detailed info for each device
• Convert the member list to CSV
• Post the CSV file to a Slack channel

⚙️ Set up steps
• Takes ~5–10 minutes to configure
• Set your Jamf BaseURL and group IDs in the Set nodes
• Add your Jamf Pro API credentials to the HTTP Request nodes
• Provide your Slack webhook token or channel ID in the Slack node
• Optional: Customize CSV fields or formatting as needed

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Execute Sub-workflow, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
