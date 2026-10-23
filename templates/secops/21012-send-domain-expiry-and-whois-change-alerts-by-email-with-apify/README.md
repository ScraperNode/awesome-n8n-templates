# 🔒 Send domain expiry and WHOIS change alerts by email with Apify

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow runs every Monday, checks a list of domains with the Apify Domain Expiry & WHOIS Monitor actor for expiry risk and WHOIS/RDAP changes, and sends a plaintext email via SMTP only when a domain needs attention or has changed.

## How it works
1. Runs every Monday at 9:00 on a schedule.
2. Loads a comma-separated domain list, an alert email address, and an expiry warning threshold (in days).
3. Calls the Apify API to run the Domain Expiry & WHOIS Monitor actor with change tracking enabled and returns only changed or alert-worthy domains.
4. Builds a single email subject and plaintext body summarizing expired, expiring soon, unregistered, lookup-failed, or changed domains, and stops the workflow if there are no results.
5. Sends the summary email to the configured recipient using SMTP.

## Setup
1. Create an Apify API token and add an HTTP Header Auth credential that sends `Authorization: Bearer <YOUR_APIFY_TOKEN>`.
2. Configure an SMTP credential for the email account used to send alerts.
3. Update the domain list, recipient email address, and `expiryWarningDays` values in the workflow’s input configuration, and adjust the schedule time if needed.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
