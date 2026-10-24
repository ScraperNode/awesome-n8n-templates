# ⚒️ Manage engineering change requests via webhooks and Slack approvals

> ⚡ **96 views** · ⚒️ [Engineering](../)

## Description

## ⚙️ Manage Engineering Change Requests (ECR) via Slack

## 📋 Overview
Streamline your engineering change management process by integrating generic webhooks with Slack interactive approvals. This workflow receives a generic design change request, categorizes its impact level, and routes it to a Slack channel for approval.

This template is ideal for **Mechanical Engineering teams**, **Manufacturing**, and **Project Managers** who need to track drawing changes (ECR/ECO) without complex PLM software.

## 🚀 How it works
1. **Receive Request:** Catches a POST webhook containing `drawing_no` and `change_reason`.
2. **Validation & Logic:** Ensures data integrity and determines the "Impact Level" (High, Medium, Low) based on keywords in the reason (e.g., "Dimension" triggers specific logic).
3. **Notification:** Sends a formatted message to a designated Slack channel with a link to an approval form.
4. **Human in the Loop:** The workflow waits (pauses) until a reviewer approves or rejects the request via the n8n form.
5. **Final Notification:** Posts the final decision back to Slack.

## 🛠️ Setup Steps
1. **Configure Webhook:** Use the production URL of the Webhook node in your upstream application (e.g., Google Forms, internal tools, or Typeform).
2. **Connect Slack:** Select your Slack credential and choose the channel where approval requests should be sent in the **Notify Slack** nodes.
3. **Customize Logic:** Open the **Switch** node to adjust the keywords (e.g., "Material", "Dimension") that determine the impact level according to your company's policy.

## 💡 Requirements
- n8n (Self-hosted or Cloud)
- Slack account and a channel for notifications

## 🔗 Nodes Used

Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
