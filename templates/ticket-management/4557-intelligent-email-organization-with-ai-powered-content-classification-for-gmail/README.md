# 🎫 Intelligent email organization with AI-powered content classification for Gmail

> ⚡ **43,100 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow leverages AI to intelligently analyze incoming Gmail messages and automatically apply relevant labels based on the email content.

The default configuration includes the following labels:

* **Newsletter**: Subscription updates or promotional content.
* **Inquiry**: Emails requesting information or responses.
* **Invoice**: Billing and payment-related emails.
* **Proposal**: Business offers or collaboration opportunities.
* **Action Required**: Emails demanding immediate tasks or actions.
* **Follow-up Reminder**: Emails prompting follow-up actions.
* **Task**: Emails containing actionable tasks.
* **Personal**: Non-work-related emails.
* **Urgent**: Time-sensitive or critical communications.
* **Bank**: Banking alerts and financial statements.
* **Job Update**: Recruitment or job-related communications.
* **Spam/Junk**: Unwanted or irrelevant bulk emails.
* **Social/Networking**: Notifications from social platforms.
* **Receipt**: Purchase confirmations and receipts.
* **Event Invite**: Invitations or calendar-related messages.
* **Subscription Renewal**: Reminders for subscription expirations.
* **System Notification**: Technical alerts from services or systems.

You can customize labels and definitions based on your specific use case.

### How it works:

* The workflow periodically retrieves new Gmail messages.
* Only emails without existing labels, regardless of read status, are sent to the AI for analysis.
* Email content (subject and body) is analyzed by an AI model to determine the appropriate label.
* Labels identified by the AI are applied to each email accordingly.

**Note:** This workflow performs 100% better than the default Gmail trigger method, which is why the workflow was switched from Gmail trigger to a scheduled workflow. By selectively processing only unlabeled emails, it ensures comprehensive labeling while significantly reducing AI processing costs.

### Setup Steps:

1. Configure credentials for Gmail and your chosen AI service (e.g., OpenAI).
2. Ensure labels exist in your Gmail account matching the workflow definitions.
3. Adjust the AI prompt to match your labeling needs.
4. Optionally customize the polling interval (default: every 2 minutes).

This workflow streamlines your email management, keeping your inbox organized effortlessly while optimizing resource usage.

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
