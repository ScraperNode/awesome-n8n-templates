# 🤝 Handle order status webhooks with Microsoft SQL Server and email

> ⚡ **60 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow receives order status updates via a webhook, validates and normalizes the payload, routes by status, and either returns an immediate JSON response or (for rejections) logs activity to Microsoft SQL Server and sends a rejection email via SMTP.

## How it works
1. Receives a POST request with an order status update through an n8n webhook.
2. Validates that `email`, `orderId`, and `newStatus` are present and returns a 400 JSON error response if any required fields are missing.
3. Normalizes the payload into consistent fields (including a timestamp and formatted rejection reason) and routes processing based on `newStatus`.
4. For Approved, Pending, and Completed statuses, returns a 200 JSON response confirming the status handling.
5. For Rejected status, generates an HTML rejection email, inserts rejection and email logs into Microsoft SQL Server, sends the email via SMTP, and returns a 200 JSON success response.

## Setup
1. Enable the webhook trigger and set the webhook path, then copy the production webhook URL into the system that sends order status updates.
2. Add Microsoft SQL Server credentials and ensure the `ActivityLogs` and `EmailLogs` tables (and referenced columns) match the INSERT queries used by the workflow.
3. Add an SMTP/email credential for the email-sending step and set the `fromEmail` address to a valid sender.

## 🔗 Nodes Used

Send Email, Webhook, Microsoft SQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
