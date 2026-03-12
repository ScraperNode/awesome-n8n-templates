# 🤝 AI call summary to HubSpot + follow-up task

> ⚡ **3,853 views** · 🤝 [CRM & Sales Operations](../)

## Description

This n8n template turns raw call transcripts into clean HubSpot call logs and a single, actionable follow-up task—automatically. Paste a transcript and the contact’s email; the workflow finds the contact, summarizes the conversation in 120–160 words, proposes the next best action, and (optionally) updates missing contact fields.

Perfect for reps and founders who want accurate CRM hygiene without the manual busywork.

---

## How it works

* A **form trigger** collects two inputs:

  * **Contact email**
  * **Plain-text call transcript**
* The workflow **looks up the HubSpot contact** by email to pull known properties.
* An **AI agent** reads the transcript (plus known fields) to:

  * Extract participants, role, problem/opportunity, requirements, blockers, timeline, and metrics.
  * Write a **120–160 word** recap a teammate can skim.
  * Generate **one concrete follow-up task** (title + body).
  * Suggest updates for missing contact properties (city, country, job title, job function).
* The recap is **logged to HubSpot** as a completed **Call** engagement.
* The follow-up is **created in HubSpot** as a **Task** with subject and body.
* (Optional) The **contact record is updated** using AI-suggested values if the transcript clearly mentions them.

---

## How to use

1. **Connect HubSpot (OAuth2)** on all HubSpot nodes.
2. **Connect OpenAI** on the AI nodes.
3. Open **Form: Capture Transcript**, submit the **email + transcript**.
4. (Optional) In **AI: Summarize Call & Draft Task**, tweak prompt rules (word count, date normalization).
5. (Optional) In **Update Contact from Transcript**, review the mapped fields before enabling in production.
6. Activate the workflow and paste transcripts after each call.

---

## Requirements

* **HubSpot** (OAuth2) for contact search, call logging, and tasks
* **OpenAI** for summarization and task drafting

---

## Notes & customization ideas

* Swap the form for a **Google Drive** or **S3** watcher to ingest saved transcripts.
* Add a speech-to-text step if you store **audio recordings**.
* Extend **Update Contact** to include additional fields (timezone, department, seniority).
* Post the summary to **Slack** or **email** the AE for quick handoffs.
* Gate updates with a confidence check, or route low-confidence changes for **manual approval**.

## 🔗 Nodes Used

HubSpot, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
