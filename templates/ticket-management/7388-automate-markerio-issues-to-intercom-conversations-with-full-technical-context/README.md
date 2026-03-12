# 🎫 Automate Marker.io issues to Intercom conversations with full technical context

> ⚡ **276 views** · 🎫 [Ticket Management & Triage](../)

## Description

**Automatically create Intercom conversations with full technical context when your team receive new Marker.io issues**

## 🎯 What this template does

This workflow creates a seamless bridge between Marker.io and Intercom, your customer support platform. Every issue submitted through Marker.io's widget automatically becomes a trackable conversation in Intercom, complete with technical details and visual context. Centralizing customers issues in Intercom helps your support agents continue the conversation right where they work every day.

When a bug is reported, the workflow:
- Creates or updates the reporter as an Intercom contact
- Opens a new conversation with the reporter and the all issue details
- Adds a comprehensive internal note with technical metadata
- Preserves all screenshots, browser info, and custom data

## ✨ Benefits

- **Zero manual entry** - All bug details transfer automatically
- **Instant visibility** - Support agents sees issues immediately  
- **Rich context** - Technical details preserved for developers
- **Better collaboration** - Single source of truth for bugs
- **Faster resolution** - No time wasted gathering information

## 💡 Use Cases

- **Product Teams**: Streamline bug triage without switching tools
- **Support Teams**: Get technical context for customer-reported issues
- **Development Teams**: Access browser info, console logs and network logs directly from the support tickets

## 🔧 How it works

1. **n8n Webhook receives** Marker.io bug report data
2. **Format and extract** relevant information from the payload
3. **Create/update contact** in Intercom with reporter details
4. **Start conversation** with the Title and Bug description
5. **Add internal note** with full technical context and Marker.io links for the support agent

The result is a perfectly organized support ticket that your team can act on immediately, with all the context they need to reproduce and resolve the issue.

## 📋 Prerequisites

- **Marker.io account** with webhook capabilities
- **Intercom account** with API access
- **Intercom Access Token** with appropriate permissions
- **Admin ID** from your Intercom workspace

## 🚀 Setup Instructions

1. **Import this workflow** into your n8n instance

2. **Configure the Webhook**:
   - Copy the test/production webhook URL after saving
   - Add to Marker.io: Workspace Settings → Webhooks → Create webhook
   - Select "Issue Created" as the trigger event

3. **Set up Intercom credentials**:
   - Create an Intercom app or use existing API credentials from the Intercom Develper Hub
   - Add credentials to both HTTP Request nodes
   - Update the `admin_id` in the "Add Internal Note" node with the id of one of your intercom admin

4. **Test the integration**:
   - Create a test issue in Marker.io
   - Verify the conversation appears in Intercom
   - Check that all data transfers correctly


## 📊 Data Captured

### Customer-facing message includes:
- Issue title
- Description

### Internal note includes:
- 🆔 Marker ID
- 📊 Priority level and issue type
- 📅 Due date (if set)
- 🖥️ Browser and OS details
- 🤓 Develper Console & Network logs
- 🌐 Website URL where issue occurred
- 🔗 Direct link to Marker.io issue
- 📷 Screenshot of the issue
- 📦 Any custom data fields

**[→ Read more about our webhook events](https://help.marker.io/en/articles/3738778-webhook-notifications)**

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
