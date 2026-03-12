# 🎬 Optimize SEO meta tags in Google Sheets with Google Gemini

> ⚡ **1,223 views** · 🎬 [Content Creation & Video](../)

## Description

🔁 **Loop & Optimize Meta Tags with Google Gemini**

This workflow automates the shortening of meta titles and descriptions for SEO—directly from your Google Sheet, row by row, using Google Gemini.

✅ What it does
- Reads rows from a Google Sheet (meta_title, meta_description, row_index)
- Loops through each row and checks if content exists
- Sends the data to Google Gemini for length-optimized output
- Cleans and parses the response
- Updates the original sheet with the shortened results

🛠️ Setup Requirements
- Google Sheets (OAuth2 credentials connected in n8n)
- Google Gemini API key (configured in n8n credentials)

Sheet must contain:
- row_index
- meta_title
- meta_description

Output will be written into:
- meta_titleFixed
- meta_descriptionFixed

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
