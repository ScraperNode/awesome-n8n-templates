# 📊 Optimize Amazon ads with GPT-4o for bid, budget & keyword recommendations

> ⚡ **4,474 views** · 📊 [Market Research & Insights](../)

## Description

### Overview
This template is designed for Amazon sellers and advertisers who want to automate their campaign performance analysis and bidding strategy. It solves the common challenge of manually reviewing Sponsored Products reports and guessing how to adjust keywords, placements, and budgets. By combining Amazon Advertising reports with OpenAI's GPT-4o, this workflow delivers real-time, personalized optimization instructions — automatically.

### Features
📥 Automatically downloads Sponsored Products reports from Google Drive

🧠 Uses AI to analyze campaign, keyword, placement, targeting, and budget performance

📊 Supports both .csv and .xlsx report formats

🔁 Handles multiple ASINs and scales easily across ad accounts

📧 Sends structured optimization recommendations to your inbox via Gmail

🗂 Built-in logic to normalize filenames and correctly map reports

🧹 Includes error handling and formatting cleanup for AI-ready input

### Requirements
To use this workflow, you’ll need:

An Amazon Ads account with access to Sponsored Products reports

A Google Drive folder where Amazon Ads reports are delivered (manually or via Gmail automation)

A Gmail account (for sending summaries)

An OpenAI API key with access to GPT-4o

Optional: a developer account for the Amazon Ads API to fully automate report generation in the future

### Setup Instructions
📂 Connect your Amazon Ads reports folder in the Google Drive node

🔐 Add your credentials to the OpenAI and Gmail nodes

📝 Schedule five reports in the Amazon Ads Console:

Search Term Report → Detailed

Targeting Report → Detailed

Campaign Report → Summary

Placement Report → Summary

Budget Report → Summary
Use “Last 30 Days”, “Daily”, and .xlsx or .csv format

🔁 (Optional) Automate report ingestion using Gmail + Drive workflows

🧪 Test with one account, then replicate across additional ad accounts as needed

⏱️ Setup time: 15–30 minutes
📌 All field-specific guidance is included in workflow notes`

## 🔗 Nodes Used

Google Drive, Gmail, Basic LLM Chain, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
