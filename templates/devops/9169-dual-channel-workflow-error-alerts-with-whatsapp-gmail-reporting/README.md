# ⚙️ Dual-channel workflow error alerts with WhatsApp & Gmail reporting

> ⚡ **67 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Error Handler: WhatsApp Alert & Gmail Report for Failed Workflows
### 🎯 What This Template Does / How it Works
This template provides a robust, two-step system for handling critical errors in your n8n workflows. It ensures that no workflow failure goes unnoticed, immediately notifying your team via a fast, urgent channel and providing a detailed record via a formal channel.

Instant Trigger & Data Capture: The Error Trigger automatically captures all necessary metadata when an assigned workflow fails, including the error message and ID.

Contact Configuration: The Set node centralizes and prepares recipient contact information (email and phone number) from the error data.

Rapid Response: An urgent notification is sent via WhatsApp  for immediate team awareness.

Traceability & Record-Keeping: A short Wait node introduces a delay to prevent notification spam. Following the pause, a comprehensive report is sent via Gmail, ensuring a detailed record of the incident is archived.

This design guarantees high-priority alerts are handled rapidly, while still maintaining essential documentation.

### Who’s It For
This template is ideal for Ops Teams, Developers, and Automation Engineers who rely on mission-critical n8n workflows (e.g., payment processing, lead capture, data synchronization). If a failure requires immediate human intervention, this system is essential.

### How to Set Up
Setting up this robust error handler is quick and essential for workflow stability:

Configure Credentials: Ensure you have the necessary credentials added to your n8n instance for:

WhatsApp Business API (for the Send message node).

Gmail (for the Send Email node).

Define Recipients: In the set_recipient_EMAIL/NUMBER node, replace the placeholder values with the actual email address and phone number of your incident team.

Activate the Listener: Open the settings of the primary workflow you wish to monitor.Go to settings ,navigate to the Error Workflow field and select the name of this template (the Error Handler).

Save Changes: Save both this Error Handler workflow and the primary workflow.

Done! Any failure in the primary workflow will now automatically trigger this alert system.

### Requirements

Gmail Account (Configured as a resource).
WhatsApp Business API Access (Configured as a resource and a pre-approved template available).

## 🔗 Nodes Used

Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
