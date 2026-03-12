# 🤝 Generate client proposals from call transcripts with AI, Google Slides and Airtable

> ⚡ **859 views** · 🤝 [CRM & Sales Operations](../)

## Description

# **📋Instant Proposal Generator**

Automatically convert sales call transcripts into professional client proposals by extracting key details with AI, dynamically populating Google Slides templates, and tracking progress in Airtable, all in one seamless workflow.

## **🎯 What does this workflow do?**

This end-to-end automation creates client-ready proposals by:

1. Taking call transcripts via chat interface

2. The AI analyzes the transcript to extract key details like company name, goals, budget, and requirements, then structures this data as JSON for seamless workflow integration.

3. Generating customized documents using Google Slides template with dynamic variables, Auto populating {Company_Name}, {Budget}, etc. from extracted data.

4. Delivering finished proposals: Sharing final document with client, and Updating CRM status automatically.

## **⚙️ How it works**

1. User input: Paste call transcript in chat trigger node

2. AI analysis: OpenAI node processes text to extract structured JSON, Identifies company name, goals, budget, requirements, etc.

3. Document copy: it copies the file from Google Drive, and name it {company name} proposal.

4. Variables replacement: Replaces all template variables ({Company_Name}, {Budget}, etc.) with extracted data from ChatGPT.

4. Delivery & tracking: Shares finalized proposal with client via email, an Updates Airtable "Lead Status" to "Proposal Sent".

## **🔑 Required setup**

1. OpenAI API Key: [Create a key from here](https://platform.openai.com/settings/organization/api-keys)

2. Google Cloud Credentials: [Setup here ](https://console.cloud.google.com/)

3. Required scopes: Google Slides edit + file creation

4. Airtable Access Token: [Create one from here ](https://console.cloud.google.com/)

## 🔗 Nodes Used

Airtable, Google Drive, Google Slides, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
