# 🎫 Automate Marker.io issues to Zendesk support tickets with full technical context

> ⚡ **329 views** · 🎫 [Ticket Management & Triage](../)

## Description

**Automatically create Zendesk tickets with full technical context when your team receives new Marker.io issues**

## 🎯 What this template does
This workflow creates a seamless bridge between Marker.io and Zendesk, your customer support platform. Every issue submitted through Marker.io's widget automatically becomes a trackable ticket in Zendesk, complete with technical details and visual context. Centralizing customer issues in Zendesk helps your support agents continue the conversation right where they work every day.

When an issue is reported, the workflow:
- Creates or updates the reporter as a Zendesk user
- Opens a new ticket with all issue details
- Adds a comprehensive internal comment with technical metadata
- Preserves all screenshots, browser info, and custom data
- Automatically tags tickets for easy filtering

## ✨ Benefits
- **Zero manual entry** - All bug details transfer automatically
- **Instant visibility** - Support agents see issues immediately  
- **Rich context** - Technical details preserved for developers
- **Better collaboration** - Single source of truth for bugs
- **Faster resolution** - No time wasted gathering information
- **Smart organization** - Auto-tagging for efficient triage

## 💡 Use Cases
- **Product Teams**: Streamline bug triage without switching tools
- **Support Teams**: Get technical context for customer-reported issues
- **Development Teams**: Access browser info, console logs, and network logs directly from support tickets

## 🔧 How it works
1. **n8n Webhook receives** Marker.io issue data
2. **Format and extract** relevant information from the payload
3. **Create/update user** in Zendesk with reporter details
4. **Create ticket** with the title and issue description
5. **Add internal comment** with screenshot, full technical context and Marker.io links for the support agent

The result is a perfectly organized support ticket that your team can act on immediately, with all the context they need to reproduce and resolve the issue.

## 📋 Prerequisites
- **Marker.io account** with webhook capabilities
- **Zendesk account** with API access
- **Zendesk API token** with appropriate permissions

## 🚀 Setup Instructions
1. **Import this workflow** into your n8n instance

2. **Configure the Webhook**:
   - Copy the test/production webhook URL after saving
   - Add to Marker.io: Workspace Settings → Webhooks → Create webhook
   - Select "Issue Created" as the trigger event

3. **Set up Zendesk credentials**:
   - Generate an API token from Zendesk Admin Center → Apps and integrations → APIs → Zendesk API
   - Add credentials to all three HTTP Request nodes
   - Update your subdomain in the URLs (replace `[REPLACE_SUBDOMAIN]` with your subdomain)

4. **Customize fields** (optional):
   - Update the custom field ID in "Create Ticket" node if you want to store Marker ID
   - Modify tags to match your workflow
   - Adjust priority mapping if needed

5. **Test the integration**:
   - Create a test issue in Marker.io
   - Verify the ticket appears in Zendesk
   - Check that all data transfers correctly

## 📊 Data Captured

### Customer-facing ticket includes:
- Issue title (as subject)
- Description (as ticket body)

### Internal comment includes:
- 🆔 Marker ID
- 📊 Priority level and issue type
- 📅 Due date (if set)
- 🖥️ Browser and OS details
- 🤓 Developer console & network logs
- 🌐 Website URL where issue occurred
- 🔗 Direct link to Marker.io issue
- 📦 Any custom data fields

[→ Read more about Marker.io webhook events](https://help.marker.io/en/articles/3738778-webhook-notifications)

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
