# 💬 Re-engage HubSpot leads using Azure OpenAI GPT-4o, Gmail and Slack

> ⚡ **64 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## 📘 Description
 This workflow automates daily re-engagement for HubSpot leads that were previously paused due to timing. It runs every 24 hours, fetches recent leads with activity data, and filters only those marked as “bad timing,” ensuring active opportunities are not disturbed.
Qualified leads are processed in batches, and an AI agent generates a short, polite follow-up email designed to reopen the conversation without sounding salesy. Instead of sending automatically, the workflow creates a Gmail draft for human review and notifies the assigned owner in Slack.
If AI generation fails, the workflow sends a Slack alert with the lead details so manual follow-up can still happen. This ensures consistent reactivation of cold leads without silent failures or missed opportunities.

## ⚙️ What This Workflow Does (Step-by-Step)
 ⏰ Daily Trigger (Every 24h)
 Runs the workflow once per day.
📥 HubSpot: Fetch Recent Leads + Activity Fields
 Pulls up to 20 leads with key activity and lifecycle properties needed for follow-up timing.
🚦 Filter: Lead Status = BAD_TIMING
 Keeps only leads that were previously paused due to timing (targets cold opportunities only).
🔄 Batch Leads (Split In Batches)
 Processes leads one-by-one / in batches to prevent rate-limit issues and keep execution stable.
✍️ AI: Generate Re-Engagement Follow-Up Email Body
 Creates a short, friendly follow-up message based on lead context (no CRM labels, no salesy tone).
🧩 Parse AI JSON
 Normalizes AI output into usable fields (subject/body/toEmail/owner details).
📩 Gmail: Create Follow-Up Draft Email
 Creates a Gmail draft (human-in-the-loop; no auto-send).
🔔 Slack: Notify Owner to Re-Engage Lead
 Notifies the assigned owner that a draft is ready and the lead is worth revisiting.
⚠️ Build AI Error Payload
 Builds a clean error context (lead name/email + AI error message).
🚨 Slack: Alert AI Draft Failure
 Alerts the owner when AI fails so the lead can be followed up manually.

## 🧩 Prerequisites
 • n8n instance
 • HubSpot App Token (read access to leads + properties)
 • Azure OpenAI credentials (GPT-4o) for email generation
 • Gmail OAuth2 (draft creation permissions)
 • Slack API token (DM user messaging permissions)

## 💡 Key Benefits
 ✔ Daily automated re-engagement for paused leads
 ✔ Prevents random outreach to active leads
 ✔ Human-in-the-loop safety via Gmail drafts (no auto-send)
 ✔ Owner notifications ensure follow-up execution
 ✔ Batch processing avoids rate-limit instability
 ✔ Strong failure handling prevents silent lead drops

## 👥 Perfect For
-  SDR teams managing large HubSpot pipelines
-  Founders doing lightweight outbound follow-ups
-  Sales ops teams wanting structured reactivation loops
-  Agencies re-engaging cold inbound / outbound leads

## 🔗 Nodes Used

Slack, HubSpot, Gmail, Schedule Trigger, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
