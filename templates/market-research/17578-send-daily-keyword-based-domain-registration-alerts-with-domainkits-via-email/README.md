# 📊 Send daily keyword-based domain registration alerts with DomainKits via email

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to search DomainKits for newly registered domains from two days ago that match a chosen keyword, then compiles the results into a single text list and sends the alert by email via SMTP.

## How it works
1. Runs once a day on a scheduled trigger, ideally after 12:00 UTC when registration data for the queried day is complete.
2. Queries DomainKits NRD search for domains registered two days ago that contain the specified keyword.
3. Aggregates all returned domain records into a single list.
4. Builds an email subject and plain-text message listing each domain with its registration and expiry dates.
5. Sends the formatted alert email to the configured recipient.

## Setup
1. Create a DomainKits account and upgrade to Premium — the REST API requires a Premium plan or higher. Sign up at [domainkits.com](https://domainkits.com), then generate an API key and add it as a DomainKits API credential in n8n.
2. Replace the placeholder keyword ("yourkeyword") with the term you want to monitor.
3. Configure the Email Send node with your SMTP settings and set the to/from email addresses for notifications. For the most complete data, schedule the daily run after 12:00 UTC.

## Requirements
- DomainKits Premium API Key

## Additional info
For more information:

- API reference and key management: [https://domainkits.com/dev](https://domainkits.com/dev)
- OpenAPI 3.0 spec: [https://domainkits.com/dev/openapi.yaml](https://domainkits.com/dev/openapi.yaml)

## 🔗 Nodes Used

Send Email, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
