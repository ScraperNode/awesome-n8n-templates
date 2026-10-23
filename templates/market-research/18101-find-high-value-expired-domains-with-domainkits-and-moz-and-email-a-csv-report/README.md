# 📊 Find high-value expired domains with DomainKits and Moz and email a CSV report

> ⚡ **11 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to find expired domain candidates in DomainKits based on a keyword, enriches them with SEO metrics from the Moz Links API, then compiles the results into a CSV report and emails it via SMTP.

## How it works
1. Runs every day at 2pm on a schedule.
2. Sets the target keyword and the maximum number of domains to fetch.
3. Searches DomainKits for expired domains matching the keyword and filters by age while excluding hyphens and numbers.
4. Sends up to 50 candidate domains to the Moz Links API in a single batch request to retrieve Domain Authority, Page Authority, Spam Score, and linking root domains.
5. Merges the DomainKits expiry data with Moz metrics, sorts the list by Domain Authority, and generates an email-ready text summary.
6. Converts the records into a CSV attachment and emails the summary and CSV to the configured recipients.

## Setup
1. Create a DomainKits account and upgrade to Premium — the REST API requires a Premium plan or higher. Sign up at [domainkits.com](https://domainkits.com), then generate an API key and add it as a DomainKits API credential in n8n.
2. Create a Moz API Access ID and Secret Key and add them as an HTTP Basic Auth credential for the Moz Links API request.
3. Configure the scheduled time, set your keyword and domain limit values, and update the SMTP credentials plus the to/from email addresses for the outgoing report.

## Requirements
- DomainKits Premium API Key
- MOZ API KEy

## Additional info
For more information:

- API reference and key management: [https://domainkits.com/dev](https://domainkits.com/dev)
- OpenAPI 3.0 spec: [https://domainkits.com/dev/openapi.yaml](https://domainkits.com/dev/openapi.yaml)

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
