# ⚡ Turn Monoprix delivery emails into calendar events using ChatGPT and Google Calendar

> ⚡ **379 views** · ⚡ [Personal Productivity](../)

## Description

**Intro:**
The purpose of this workflow is to simply convert you planned Grocery delivery  confirmation email to a Google Calendar event in your family calendar. While based on a Monoprix.fr email format, it is applicable/adaptable to almost anything else. 

**How it works:**
It is triggered by reception of the confirmation email on your Gmail. The workflow then extracts relevant data using ChatGPT, formats it, and creates a Google Calendar event. 

**Steps to use it:**
1. Import template in your n8n
2. Update credentials for Gmail, Google Calendar, and ChatGPT
3. Test workflow based on confirmation email received
4. Activate workflow

## 🔗 Nodes Used

Google Calendar, Gmail Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
