# 🎫 Filter spam from webhook form submissions using honeypot and timing checks

> ⚡ **68 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who is this for?
Website owners, agencies, or developers who receive contact form submissions via webhook and want to block bots and spam without CAPTCHAs, keeping the user experience clean and friction-free.

## How it works
Your frontend sends a POST request with form data, a hidden honeypot field, and a client-side timestamp
The workflow runs three automated spam checks:
Honeypot detection: A hidden form field that real users never see, if it contains data, it's a bot
Timing analysis: If the form was submitted in under 2 seconds after page load, it's a bot
Disposable email detection: Checks the email domain against a configurable blocklist of known throwaway providers (mailinator, yopmail, guerrillamail, etc.)
Spam: Returns a silent 200 OK with a generic thank-you message, the bot thinks it worked, but nothing is forwarded
Legitimate: Returns 200 OK with the cleaned form data, ready for downstream processing (email, Slack, CRM)
## Setup
Activate the workflow
Add the honeypot field and timestamp to your frontend form (see the Step 1 sticky note for a copy-paste HTML snippet)
Optionally adjust spam rules in the Configure Spam Rules node (field names, timing threshold, blocked domains)
## How to customize
Add your own disposable email domains to the blocklist in the Set node
Adjust the minimum submission time threshold (default: 2 seconds)
Connect your own nodes after the IF node on the legit branch to forward real submissions to email, Slack, a CRM, or a database

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
