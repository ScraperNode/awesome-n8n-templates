# 🎫 User-friendly technical support portal for GLPI ticket management

> ⚡ **2,488 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Custom Interface for GLPI with n8n

Transform your GLPI system's user experience with a modern, optimized web interface that simplifies technical support ticket creation.
How it works

Unified entry portal: Users access an intuitive web form where they select between "Request" or "Incident"
Custom data collection: Specific forms adapt fields based on ticket type, requesting only relevant information
Automatic processing: The system automatically maps categories and priorities, creates tickets in GLPI via REST API
File management: Allows document attachments that are automatically linked to the created ticket
Confirmation and tracking: Provides the generated ticket ID for future follow-up

## Key benefits

✅ More user-friendly interface than native GLPI interface
✅ Adaptive forms based on request type
✅ Error reduction through automatic validations
✅ Mobile-optimized user experience
✅ Seamless integration with existing GLPI

## Setup steps
⏱️ Estimated time: 15-20 minutes
Prerequisites

GLPI server with REST API enabled
User with application administrator privileges
Application token generated in GLPI

## Basic configuration

Connection variables: Update GLPI server URL and application token in the "Configuration Variables" node
Authentication credentials: Configure HTTP Basic Auth credentials for GLPI connection
Category IDs: Identify and map ITIL category IDs in the processing nodes
Form customization: Adapt fields, options, and categories according to organizational needs

## Activation

Activate the workflow and obtain web form URLs
Share the portal link with end users
Perform ticket creation tests

## Ideal use cases

Companies looking to improve GLPI user experience
Organizations needing more intuitive support forms
IT teams wanting to reduce miscategorized tickets
Companies requiring mobile-friendly support interfaces

## Technologies used

n8n (orchestration and web forms)
GLPI REST API
HTTP Basic Authentication
Automatic session management

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
