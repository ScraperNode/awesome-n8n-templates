# 🎫 Smart helpdesk ticket alerts from Easy Redmine to Teams with GPT-4 summaries

> ⚡ **1,133 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Automated Helpdesk Ticket Alerts to Microsoft Teams from Easy Redmine

## Intro/Overview
This workflow automatically posts a Microsoft Teams message whenever a new helpdesk ticket is created in Easy Redmine. It’s perfect for IT teams who want real-time visibility into new issues without constantly checking ticket queues or inboxes. By integrating Easy Redmine with Teams, this setup ensures tickets are discussed and resolved faster, improving both response and resolution times.

---

## How it works

1. **Catch Easy Webhook – New Issue Created**  
   - Triggers whenever Easy Redmine sends a webhook for a newly created ticket.  
   - Uses the webhook URL generated from Easy Redmine’s webhook settings.

2. **Get a new ticket by ID**  
   - Fetches full ticket details (subject, priority, description) via the Easy Redmine API using the ticket ID from the webhook payload.

3. **Pick Description & Create URL to Issue**  
   - Extracts the ticket description.  
   - Builds a direct link to the ticket in Easy Redmine for quick access.

4. **AI Agent – Description Processing**  
   - Uses an AI model to summarize the ticket and suggest possible solutions based on the issue description.

5. **MS Teams Message to Support Channel**  
   - Formats and sends the ticket details, priority, summary, and issue link into a designated Microsoft Teams channel.  
   - Uses the Teams message layout for clarity and quick scanning.

---

## How to Use

1. **Import the workflow** into your n8n instance.
2. **Set up credentials**:
   - Easy Redmine API credentials with permission to read helpdesk tickets.
   - Microsoft Teams credentials for posting messages to a channel.
3. **Configure Easy Redmine webhook** 
	- To trigger on ticket creation events. 
	- Insert n8n webhook URL to your active Easy Redmine Webhook which can be created at https://easy-redmine-application.com/easy_web_hooks
4. **Adjust node settings**:
   - In the webhook node, use your Easy Redmine webhook URL.
   - In the “Get a new ticket by ID” node, insert your API endpoint and authentication.
   - In the Teams message node, select the correct Teams channel.
5. **Adjust timezone or scheduling** if your team works across different time zones.
6. **Test the workflow** by creating a sample ticket in Easy Redmine and confirming that it posts to Teams.

---

## Example Use Cases

- **IT Helpdesk**: Notify the support team immediately when new issues are logged.
- **Customer Support Teams**: Keep the entire team updated on urgent tickets in real time.
- **Project Teams**: Ensure critical bug reports are shared instantly with the right stakeholders.

---

## Requirements

- Easy Redmine application
- Easy Redmine technical user for API calls with “read” permissions on tickets
- Microsoft Teams technical user for API calls with “post message” permissions
- Active n8n instance

---

## Customization

- Change the AI prompt to adjust how summaries and solutions are generated.
- Modify the Teams message format (e.g., bold priority, add emojis for urgency).
- Add filters so only high-priority or specific project tickets trigger notifications.
- Send alerts to multiple Teams channels based on ticket type or project.

---

**Workflow Improvement Suggestions:**  
- Rename nodes for clarity (e.g., “Fetch Ticket Details” instead of “get-one-issue”).  
- Ensure no private ticket data is exposed beyond intended recipients.  
- Add error handling for failed API calls to avoid missing ticket alerts.

## 🔗 Nodes Used

Webhook, Microsoft Teams, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
