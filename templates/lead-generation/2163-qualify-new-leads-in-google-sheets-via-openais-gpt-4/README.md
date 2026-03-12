# 🎣 Qualify new leads in Google Sheets via OpenAI's GPT-4

> ⚡ **29,539 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This n8n workflow was developed to evaluate and categorize incoming leads based on certain criteria. The workflow is triggered by adding a new row in a Google Sheets document.

The workflow uses the OpenAI node to process the lead information. The system query contains detailed qualification rules and the response format. The user message contains the data for the individual lead.

The JSON response from the OpenAI node is then processed by the Edit Fields node to extract the response. This response is merged together with the original lead data by the Merge node.

Finally, the Google Sheets node updates the original lead entry in the Google Sheets document with the qualification result ("qualified" or "not qualified") in a separate column. This allows for easy tracking and sorting of the qualified leads.

## 🔗 Nodes Used

Google Sheets, OpenAI, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
