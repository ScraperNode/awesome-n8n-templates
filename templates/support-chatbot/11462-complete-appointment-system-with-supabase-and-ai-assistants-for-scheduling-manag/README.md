# 💬 Complete appointment system with Supabase and AI assistants for scheduling & management

> ⚡ **476 views** · 💬 [Support Chatbots](../)

## Description

## Who’s it for
This workflow is designed for organizations or services managing appointments, such as interview scheduling, class enrollments, or client meetings. It’s ideal for users who want to automate appointment creation, rescheduling, cancellation, and data retrieval from a single webhook endpoint.

## How it works / What it does
● Receives incoming appointment requests via a Webhook node.
● Processes requests in the Set Fields node, handling multiple actions:
        • Set Appointment: Adds a new appointment and assigns an available interviewer.
        • Reschedule: Changes the appointment date based on availability.
        • Cancel: Deletes an appointment and frees the interviewer’s slot.
        • Get List: Returns a user’s list of classes.
        • Get User Info: Retrieves detailed information about a specific user.
All actions follow strict instructions to check tables, update rows, and return structured JSON responses.

## How to set up
1. Add the Webhook node and set the HTTP method to POST.
2. Connect it to the Set Fields node.
3. Configure the Set Fields node with the desired assignments (set_appointment, reschedule, cancel, get_list, get_user_info).
4. Ensure your database tables (interviewers, enrollers) are properly configured and accessible.

## Requirements
• n8n environment
• Database or table access for interviewers and enrollers
• Properly formatted incoming JSON requests with necessary fields (e.g., name, nationality number, preferred date).

## How to customize the workflow
• Add or modify assignment actions to handle additional appointment scenarios.
• Adjust table names or database connections based on your environment.
• Extend JSON responses for custom client-side handling.

## 🔗 Nodes Used

Webhook, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
