# ⚙️ Multi-channel workflow error alerts with Telegram, Gmail & messaging apps

> ⚡ **4,038 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Never miss a failed workflow again. This error notification setup watches your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflows around the clock and pings you on Telegram and Gmail the moment something breaks, with optional Discord, Slack, and WhatsApp support.

*Last updated: September 2026.*

## Why Use Error Notification Workflow?

- **Immediate Awareness:** Get instant alerts when workflows fail, so broken automations never go unnoticed.
- **Multi-Channel Flexibility:** Notify your team via Telegram, Gmail, and optionally Slack, Discord, or WhatsApp.
- **Detailed Context:** Every alert carries the error message, node name, time, and execution link, so you can fix things fast.
- **Easy Integration:** Built with native [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) nodes and customizable code. No complex setup.
- **Open Source & Free:** Use and adapt it at no cost. Professional error monitoring for everyone.

## Who Is This For?

- **[n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Workflow Developers:** Spot and respond to automation issues in development or production.
- **Operations Teams:** Maintain uptime and troubleshoot errors across multiple workflows.
- **Small to Medium Businesses:** Get professional error alerting without expensive monitoring tools.
- **Automation Enthusiasts:** Make your automations reliable with real-time failure notifications.

## What Problem Does It Solve?

This workflow embeds error detection and notification directly inside your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance. It catches errors as they happen, compiles the context that matters, and delivers it instantly to your preferred messaging platforms. You respond to issues faster and stop guessing what went wrong.

## What This Workflow Does

* **Trigger:** Listens for any error in your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflows using the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Error Trigger node.
* **Format:** Runs a Code node that builds a detailed error message with workflow name, error node, description, timestamp, and execution URL.
* **Notify:** Sends the formatted alert to Telegram and Gmail by default, plus optionally Discord, Slack, and WhatsApp (disabled by default).
* **Deliver:** Rich, parsed HTML-formatted messages so errors are readable and actionable at a glance.

## Setup Instructions

1. **Import** the provided `.json` file into your **[n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin) (Cloud or self-hosted)**.

2. **Set up credentials:**
   - Gmail OAuth credentials for sending emails via Gmail node
   - Telegram API credentials for Telegram notifications
   - (Optional) Discord Webhook URL credential for Discord notifications
   - (Optional) Slack Webhook credential for Slack notifications
   - (Optional) WhatsApp connection credentials (if enabled)

3. **Customize** the Code node if needed to adjust the error message format or target chat IDs.

4. **Update** the chat IDs and recipient details in each notification node according to your channels.

5. **Test** the workflow by manually triggering an error in another workflow to verify proper notifications.

## Pre-Requirements

- Active [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance (cloud or self-hosted) with version supporting Error Trigger node
- Telegram bot credentials and chat ID
- (Optional) Gmail, Discord, Slack, or WhatsApp accounts and webhook credentials if you want to use those channels

## Customize It Further

- Enable and configure additional notification nodes like Slack or WhatsApp to fit your team's communication style.
- Customize the error message template in the Code node to include extra metadata or format it differently (e.g., markdown).
- Integrate with incident management tools via webhook nodes or create tickets automatically on error.

## Nodes Used

- Error Trigger
- Code
- Telegram
- Gmail
- Discord (disabled)
- Slack (disabled)
- WhatsApp (disabled)
- Sticky Note (for description)

### Quick Answers
**Which channels are supported?**  
Telegram and Gmail work out of the box. Discord, Slack, and WhatsApp nodes are included but disabled by default.  
**What info comes with each alert?**  
Error message, node name, timestamp, and a direct execution link.  
**Can I change the message format?**  
Yes. Edit the template in the Code node to add metadata or change the layout.  

## Support

**Made by:** [khmuhtadin](https://khmuhtadin.com)  
**Tag:** notification,error,monitoring,workflow,automation,alerts  
**Category:** Monitoring & Alerts  
**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](https://khmuhtadin.com)**

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Slack, Telegram, Discord, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
