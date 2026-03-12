# ⚡ Automated Upwork messages alerts to Slack with Gmail and Google Gemini AI

> ⚡ **142 views** · ⚡ [Personal Productivity](../)

## Description

## Upwork Messages Notifications (Gmail to Slack) - Fully Automated Alerts

This n8n workflow streamlines how you receive Upwork client messages, sending instant notifications to Slack. It demonstrates two approaches: a code-based extraction and an AI-powered one with Google Gemini.

---

### Use Cases

* **Instant Communication:** Get real-time alerts for new Upwork client messages in your team's Slack channel.
* **Improved Responsiveness:** Quickly respond to client inquiries and maintain strong communication.
* **Centralized Notifications:** Keep all your essential work-related notifications in one place.

### Good to Know

* The workflow is set to poll your Gmail every *3 minutes* for unread Upwork messages, which can be reduced or increased.
* The **AI Information Extractor** with Google Gemini provides a more refined and robust method for data parsing compared to custom code.
* Usage of Google Gemini may incur costs. Refer to [Gemini Pricing](https://ai.google.dev/gemini-api/docs/pricing) for updated information.
* Google Gemini models can be geo-restricted. If you encounter a "model not found" error, it might not be available in your region.

### How it Works

**Method 1: Code-Based Extraction**

1.  **Gmail Trigger:** The workflow starts by monitoring your Gmail for new, unread emails from "via Upwork".
2.  **Code Node:** A custom JavaScript code block is used to extract the client's name and the message content directly from the email's text.
3.  **Slack Notification:** The extracted client name and message are then formatted and sent as a new message to a designated Slack channel.

**Method 2: AI-Powered Extraction with Google Gemini (Recommended)**

1.  **Gmail Trigger X:** Similar to Method 1, this part also triggers on new unread Upwork emails.
2.  **Information Extractor (AI):** This powerful node, powered by Google Gemini, takes the entire email text and intelligently extracts structured information like the "client" name and the "message" content based on a defined schema. This method is more robust and requires less manual parsing logic.
3.  **Google Gemini Chat Model:** (Implicitly used by the Information Extractor) This node provides the underlying AI capabilities for intelligent information extraction.
4.  **Send to Slack X:** The refined output from the AI Information Extractor (client name and message) is then sent to a Slack channel.

### How to Use

1.  **Gmail Credentials:** Ensure you have configured your Gmail OAuth2 credentials in n8n for both "Gmail Trigger" nodes.
2.  **Slack Credentials:** Set up your Slack OAuth2 credentials in n8n for both "Send to Slack" nodes and select the desired Slack channel.
3.  **Google Gemini Credentials:** For the AI-powered workflow, you'll need to set up your Google Gemini API key as a credential in n8n.
4.  **Activate Workflows:** Enable both workflows in n8n to start receiving notifications. You can compare the output quality of each method.

### Requirements

* **n8n instance** (self-hosted or cloud)
* **Gmail Account** connected to Upwork notifications.
* **Slack Workspace** and a designated channel for notifications.
* **Google Gemini API key** for the AI-powered extraction workflow.

## 🔗 Nodes Used

Slack, Gmail Trigger, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
