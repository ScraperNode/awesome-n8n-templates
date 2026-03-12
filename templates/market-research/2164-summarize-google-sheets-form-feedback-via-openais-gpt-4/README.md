# 📊 Summarize Google Sheets form feedback via OpenAI's GPT-4

> ⚡ **9,456 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow was developed to collect and summarize feedback from an event that was collected via a Google Form and saved in a Google Sheets document. The workflow is triggered manually by clicking on the "Test workflow" button.

The Google Sheets node retrieves the responses from the feedback form. The Aggregate node then combines all responses for each question into arrays and prepares the data for analysis.

The OpenAI node processes the aggregated feedback data. System Prompt instructs the model to analyze the responses and generate a summary report that includes the overall sentiment regarding the event and constructive suggestions for improvement.

The Markdown node converts the summary report, which is in Markdown format, into HTML. Finally, the Gmail node sends an HTML-formatted email to the specified email address.

## 🔗 Nodes Used

Google Sheets, Gmail, Markdown, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
