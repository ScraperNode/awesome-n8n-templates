# 📋 Automated WhatsApp group weekly team reports with Gemini AI summarization

> ⚡ **1,396 views** · 📋 [Project Management](../)

## Description

This n8n template automatically summarizes your WhatsApp group activity from the past week and generates a team report.

**Why use this?**
Remote teams rely on chat for communication, but important discussions, decisions, and ideas get buried in message threads and forgotten by Monday. This workflow ensures nothing falls through the cracks.

**How it works**
* Runs every Monday at 6am to collect the previous week's group messages
* Groups conversations by participant and analyzes message threads
* AI summarizes individual member activity into personal reports
* Combines all individual reports into one comprehensive team overview
* Posts the final report back to your WhatsApp group to kick off the new week

**Setup requirements**
* WhatsApp (whapAround.pro) no need Meta API
* Gemini AI (or alternative LLM of choice)

**Best practices**
* Use one workflow per WhatsApp group for focused results
* Filter for specific team members if needed
* Customize the report tone to match your team culture
* Adjust the schedule if weekly reports don't suit your team's pace

**Customization ideas**
* Send reports via email instead of posting to busy groups
* Include project metrics alongside message summaries
* Connect to knowledge bases or ticket systems for additional context

Perfect for project managers who want to keep distributed teams aligned and ensure important conversations don't get lost in the chat noise.

## 🔗 Nodes Used

Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, Filter, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
