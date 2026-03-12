# ⚙️ Multi-channel workflow error alerts with Telegram, Gmail & messaging apps

> ⚡ **3,423 views** · ⚙️ [DevOps & CI/CD](../)

## Description

The **Error Notification workflow** is designed to instantly notify you whenever any other n8n workflow encounters an error, using popular communication channels like Telegram and Gmail—with optional support for Discord, Slack, and WhatsApp. 

## 💡 Why Use Error Notification workflow?

- **Immediate Awareness:** Get instant alerts when workflows fail, preventing unnoticed errors and downtime.
- **Multi-Channel Flexibility:** Notify your team via Telegram, Gmail, and optionally Slack, Discord, or WhatsApp.
- **Detailed Context:** Receive rich error information including the error message, node name, time, and execution link for quicker fixes.
- **Easy Integration:** Built with native n8n nodes and customizable code, simple to adopt without complex setup.
- **Open Source & Free:** Use and adapt this workflow at no cost, making professional error monitoring accessible.

## ⚡ Who Is This For?

- **n8n Workflow Developers:** Quickly spot and respond to automation issues in development or production.
- **Operations Teams:** Maintain uptime and swiftly troubleshoot errors across multiple workflows.
- **Small to Medium Businesses:** Gain professional error alerting without expensive monitoring tools.
- **Automation Enthusiasts:** Enhance your automation reliability with real-time failure notifications.

## ❓ What Problem Does It Solve?

This workflow embedd error detection and notification directly within your n8n instance. It automates the process of catching errors as they occur, compiling meaningful context, and delivering it instantly via your preferred messaging platforms. This drastically reduces your response time to issues and streamlines error management, improving your automation reliability and operational confidence.

## 🔧 What This Workflow Does

⏱ **Trigger:** Listens for any error generated in your n8n workflows using the n8n Error Trigger node.

📎 **Step 2:** Executes a Code node that formats a detailed error message capturing workflow name, error node, description, timestamp, and an execution URL.

🔍 **Step 3:** Sends the formatted error notification to multiple communication channels: Telegram and Gmail by default, plus optionally Discord, Slack, and WhatsApp (disabled by default).

💌 **Step 4:** Delivers rich, parsed HTML-formatted messages to ensure error readability and immediate actionability.

## 🔐 Setup Instructions

1. **Import** the provided `.json` file into your **[n8n instance](https://n8n.partnerlinks.io/khaisastudio) (Cloud or self-hosted)**.

2. **Set up credentials:**
   - Gmail OAuth credentials for sending emails via Gmail node
   - Telegram API credentials for Telegram notifications
   - (Optional) Discord Webhook URL credential for Discord notifications
   - (Optional) Slack Webhook credential for Slack notifications
   - (Optional) WhatsApp connection credentials (if enabled)

3. **Customize** the Code node if needed to adjust the error message format or target chat IDs.

4. **Update** the chat IDs and recipient details in each notification node according to your channels.

5. **Test** the workflow by manually triggering an error in another workflow to verify proper notifications.

## 🧩 Pre-Requirements

- Active n8n instance (cloud or self-hosted) with version supporting Error Trigger node
- Telegram bot credentials and chat ID
- (Optional) Gmail, Discord, Slack, or WhatsApp accounts and webhook credentials if you want to use those channels

## 🛠️ Customize It Further

- Enable and configure additional notification nodes like Slack or WhatsApp to fit your team's communication style.
- Customize the error message template in the Code node to include extra metadata or format it differently (e.g., markdown).
- Integrate with incident management tools via webhook nodes or create tickets automatically on error.

## 🧠 Nodes Used

- Error Trigger
- Code
- Telegram
- Gmail
- Discord (disabled)
- Slack (disabled)
- WhatsApp (disabled)
- Sticky Note (for description)

## 📞 Support

**Made by:** [khaisa Studio](http://khaisa.studio)  
**Tag:** notification,error,monitoring,workflow,automation,alerts  
**Category:** Monitoring & Alerts  
**Need a custom?** Need a custom? contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](khmuhtadin.com)**

## 🔗 Nodes Used

Slack, Telegram, Discord, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
