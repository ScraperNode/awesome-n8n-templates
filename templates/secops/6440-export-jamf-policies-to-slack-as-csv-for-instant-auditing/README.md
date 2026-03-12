# 🔒 Export Jamf policies to Slack as CSV for instant auditing

> ⚡ **133 views** · 🔒 [SecOps & Security Automation](../)

## Description

## 🧩 Jamf Policies Export to Slack
Quickly export and review your entire Jamf policy configuration—including triggers, frequencies, and scope—directly in Slack.
This enables IT and security teams to audit policy setups without logging into Jamf or generating reports manually.

## ❗The Problem
Jamf Pro lacks a straightforward way to quickly review or share a list of all configured policies, including key attributes like frequency, scope, or triggers. Security teams often need this for audit or compliance reviews, but navigating Jamf’s UI or exporting via the API is time-consuming.

## 🔧 This Fixes It
This workflow fetches all policies, extracts the most relevant fields, compiles them into a csv file, and posts that readble file into a designated Slack channel—automatically or on demand.

## ✅ Prerequisites
• A Jamf Pro API key (OAuth2) with read access to policies
• A Slack app with permission to post files into your chosen channel

## 🔍 How it works
• Manually trigger or use the webhook to initiate the flow
• Retrieve all policies from Jamf via the XML API
• Convert the XML response into JSON
• Split and loop through each policy ID
• Retrieve detailed data for each policy
• Format relevant fields (ID, name, trigger, scope, etc.)
• Convert the final data set into an .csv file
• Upload the file to your Slack channel

## ⚙️ Set up steps
• Takes ~10 minutes to configure
• Set the Jamf BaseURL in the “Jamf Server” node
• Configure Jamf OAuth2 credentials in the HTTP Request nodes
• Adjust the fields for export in the “Set-fields” node
• Set your Slack credentials and target channel in the “Post to Slack” node
• Optional: Customize the exported fields or filename

## 🔄 Automation Ready
Schedule this flow daily/weekly, or tie it to change events to keep your team informed.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
