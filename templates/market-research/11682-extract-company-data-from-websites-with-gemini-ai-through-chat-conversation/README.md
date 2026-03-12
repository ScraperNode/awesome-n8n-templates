# 📊 Extract company data from websites with Gemini AI through chat conversation

> ⚡ **149 views** · 📊 [Market Research & Insights](../)

## Description

## How it works
Please send a corporate website URL via chat.

The AI will investigate the company website on your behalf and return the extracted company information.  
Since this is set up as a conversational workflow, retrying or trying another URL is simple.

## How to use
* To get started, please set up the Credential in the `Gemini` node attached to the `AI Agent` node.
  * You can obtain an API key from [Google AI Studio](https://aistudio.google.com/api-keys).

Once configured, the workflow will run when you send a corporate website URL (e.g., https://example.com/) via chat.

## Customizing this workflow
You can change the settings in the `Config` node.

* You can modify `targetCompanyFields` to customize which company data fields are extracted.
* You can modify `language` to receive the results in a language other than English.

## 🔗 Nodes Used

AI Agent, Chat Trigger, Google Gemini Chat Model, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
