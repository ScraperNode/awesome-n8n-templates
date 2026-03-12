# 💬 Automate installation booking approvals with Slack & Gmail forms

> ⚡ **180 views** · 💬 [Support Chatbots](../)

## Description

## Who's it for

Service businesses that handle installation appointments and need an efficient approval process. Perfect for HVAC companies, internet providers, appliance installers, or any business that requires team coordination before confirming customer appointments.

## How it works

This workflow automates your entire installation booking process from form submission to customer communication. When a customer submits a booking request, your team gets notified via Slack with easy approve/reject buttons. Based on the team's decision, customers automatically receive either a confirmation email with appointment details or a friendly reschedule request with a new booking link.

## How to set up

1. **Connect your accounts**: Link your Slack workspace and Gmail account to n8n
2. **Configure the Slack channel**: Update the SLACK_CHANNEL_ID in the "Set Fields" node with your desired channel
3. **Customize your branding**: Update COMPANY_NAME, CONTACT_PERSON, and RESCHEDULE_LINK variables
4. **Deploy the form**: Use the form trigger URL on your website or share it directly with customers
5. **Test the workflow**: Submit a test booking to ensure everything works smoothly

## Requirements

- Active Slack workspace with a designated channel for booking notifications
- Gmail account for sending automated emails
- Basic n8n account (free tier works perfectly)

## How to customize the workflow

The workflow is designed for easy customization through the "Set Fields" node. You can modify:

- **Time slots**: Edit the dropdown options in the form trigger
- **Email templates**: Customize confirmation and reschedule email content
- **Slack notifications**: Adjust the message format and approval options
- **Form fields**: Add or remove customer information fields as needed

The configuration variables in the "Set Fields" node make it easy to adapt this workflow to your specific business needs without touching the core logic.

## 🔗 Nodes Used

Slack, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
