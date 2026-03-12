# ⚙️ Automated server health check with SSH, Azure GPT-4 analysis & email alerts

> ⚡ **418 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## **Who’s it for**

This workflow is ideal for sysadmins, DevOps engineers, and IT teams who want to monitor server health automatically and receive instant email notifications if any server goes down. It’s perfect for anyone managing multiple servers or services without setting up a full-fledged monitoring tool.

## **How it works / What it does**

The workflow periodically sends HTTP requests to your server endpoints to check availability and response times. If a server responds with an error code or times out, the workflow automatically sends an email alert with the server details, including the endpoint, status, and timestamp. Multiple servers can be monitored in parallel, ensuring that issues are detected and reported in real time.

## **How to set up**

- Import the workflow template into n8n.
- Replace the credentials with your credentials.
- Configure the Email node with your SMTP credentials stored securely in n8n Credentials.
- Set the Cron node interval to the frequency you want the checks to run (e.g., every 5 minutes).

## **Requirements**

- n8n instance (self-hosted or cloud)
- SMTP email credentials (Gmail, Outlook, or any SMTP server)
- Servers with endpoints accessible by n8n

## 🔗 Nodes Used

Send Email, SSH, Schedule Trigger, AI Agent, Structured Output Parser, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
