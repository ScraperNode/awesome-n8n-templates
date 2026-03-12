# 📱 Generate weekly animal rights action briefings from U.S. House bills with Gemini AI

> ⚡ **354 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 🐾 Who’s it for

Animal advocates & campaigners who want a **weekly briefing on animal-related bills** with clear, actionable steps—no manual research needed.

## ⏱ What it does

Every Monday at 8 AM, this workflow:

1. **Fetches all House bills** scheduled for the week.
2. **Cleans and downloads bill PDFs.**
3. **Analyzes each bill with Gemini** (relevance, urgency, stance, key action points).
4. **Filters irrelevant bills** using built-in thresholds.
5. **Runs a research subworkflow** for lobbying, sponsor, and coalition intel.
6. **Generates a ready-to-send HTML action email** with scripts, contacts, and deadlines.

## ⚙️ How to set up

1. **Import this workflow** into n8n.
2. **Download & import** the [Research Subworkflow](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/) and select it in the “Research” node.
3. **Add email credentials** (SMTP, Gmail, etc.) in the Email node.
4. (Optional) **Adjust Gemini prompt or thresholds** for your priorities.

## 🔑 Requirements

* **Gemini API key** (via Google AI Studio or Vertex AI).
* **Email provider credentials**.
* **Research subworkflow** (linked above).

## 🎛 How to customize

* **Edit the Gemini prompt** to focus on specific issues (e.g., wildlife, farmed animals).
* **Change relevance/urgency thresholds** to include more or fewer bills.
* **Tweak the HTML email design** or call-to-action style.

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Sub-workflow, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
