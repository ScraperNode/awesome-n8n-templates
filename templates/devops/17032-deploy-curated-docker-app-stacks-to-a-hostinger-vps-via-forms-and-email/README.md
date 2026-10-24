# ⚙️ Deploy curated Docker app stacks to a Hostinger VPS via forms and email

> ⚡ **813 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow collects a stack choice and notification email via a form, lets you pick a Hostinger VPS, deploys the selected curated app stack as separate Docker Compose projects using the Hostinger API, and emails a per-app deployment summary with ports, container status, and generated credentials.

## How it works
1. Receives a form submission with the selected stack (Developer, Hobbyist, Freelancer, or AI/LLM) and a notification email address.
2. Uses the Hostinger API to list available VPS instances and presents a second form to select the target virtual machine.
3. Expands the chosen stack into one item per app by generating Docker Compose content and creating random values for any required secrets.
4. Creates a Docker Compose project for each app on the selected Hostinger VPS via the Hostinger API.
5. Waits briefly, polls the Hostinger action status for each deployment, and branches based on whether the action completes successfully.
6. On success, lists the project’s containers and formats a status block including ports, container states, and any generated credentials, and on failure, fetches recent Docker project logs and formats an error block.
7. Aggregates all per-app blocks into a single summary and sends the deployment report to the provided email address via SMTP.

## Setup
1. Self-host n8n and install the community node `n8n-nodes-hostinger-api` (Settings → Community Nodes).
2. Create and connect a Hostinger API credential with access to your VPS account.
3. Configure an SMTP email credential for the email-sending step, and set valid From/To behavior (the template uses the submitted notification email for both).
4. Ensure the target VPS has Docker available and that deploying these containers and exposing the listed ports fits your security requirements.

## Requirements
- Self-hosted n8n
- Hostinger VPS + API Key
- SMTP Mailbox

## 🔗 Nodes Used

Send Email, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
