# 👥 Screen resumes & send follow-ups with OpenAI GPT-4o, Google Sheets & Gmail

> ⚡ **1,311 views** · 👥 [HR & Recruitment](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

## 🧠 How It Works

This workflow automates the process of screening resumes using AI, logging results to Google Sheets, and sending follow-up emails via Gmail.

1. User uploads their resume via a form (PDF only).
2. Resume content is extracted and sent to OpenAI for evaluation.
3. AI scores the resume based on:
   - Role-specific must-have qualifications
   - Soft skills / strategic fit questions
4. Based on the **score threshold**, the candidate is classified as:
   - ✅ **Accepted** → Saved to Accepted sheet + Gmail invite
   - ❌ **Rejected** → Logged to Rejected sheet + Gmail rejection message
5. Output is stored in Google Sheets with detailed justification.

---

## ⚙️ Set Up Steps

1. 🔑 Connect your OpenAI and Google Sheets credentials.
2. Replace the placeholder tags in the AI prompt:
   - `COMPANY_NAME`
   - `ROLE_NAME`
   - `ROLE_DESCRIPTION`
   - `CRITERIA_1` to `CRITERIA_5`
   - `Q1` to `Q5`
   - `THRESHOLD` (score to pass)
3.  Customize Gmail messages (optional).
4. ✅ Make sure your sheet has two tabs: `Accepted` and `Rejected`.

---

## 📌 Notes

Sticky Notes included in the flow explain:
- What each node does
- Where to replace variables
- Tips for improving match scoring

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
