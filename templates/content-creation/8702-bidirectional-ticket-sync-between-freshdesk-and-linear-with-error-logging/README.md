# 🎬 Bidirectional ticket sync between Freshdesk and Linear with error logging

> ⚡ **93 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

This workflow synchronizes support tickets in Freshdesk with issues in Linear, enabling smooth collaboration between support and development teams. It triggers on new or updated Freshdesk tickets, maps fields to Linear’s format, and creates linked issues through Linear’s API. Reverse synchronization is also supported, so changes in Linear update the corresponding Freshdesk tickets. Comprehensive logging ensures success and error events are always tracked.

## Step-by-step

**1. Trigger the workflow**  
- **New Ticket Webhook** – Captures new Freshdesk tickets for issue creation.  
- **Update Ticket Webhook** – Detects changes in existing tickets.  
- **Linear Issue Updated Webhook** – Listens for updates from Linear.  

**2. Transform and map data**  
- **Map Freshdesk Fields to Linear** – Converts priority, status, title, and description for Linear.  
- **Map Linear to Freshdesk Fields** – Converts Linear state, priority, and extracts ticket ID for Freshdesk updates.  

**3. Perform API operations**  
- **Create Linear Issue** – Sends GraphQL mutation to Linear API.  
- **Check Linear Creation Success** – Validates issue creation before linking.  
- **Link Freshdesk with Linear ID** – Updates Freshdesk with Linear reference.  
- **Update Freshdesk Ticket** – Pushes Linear updates back to Freshdesk.  

**4. Manage logging and errors**  
- **Log Linear Creation Success** – Records successful ticket-to-issue sync.  
- **Log Linear Creation Error** – Captures and logs issue creation failures.  
- **Log Freshdesk Update Success** – Confirms successful reverse sync.  
- **Log Missing Ticket ID Error** – Handles missing ticket reference errors.  

## Why use this?

- Keep support and development teams aligned with real-time updates.  
- Eliminate manual ticket-to-issue handoffs, saving time and reducing errors.  
- Maintain full visibility with detailed success and error logs.  
- Enable bidirectional sync between Freshdesk and Linear for true collaboration.  
- Improve response times by ensuring both teams always work on the latest data.

## 🔗 Nodes Used

Function, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
