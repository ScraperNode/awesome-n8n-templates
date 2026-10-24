# 💬 Send daily AI-personalized cold emails with Google Places and OpenAI

> ⚡ **182 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs every morning to find local businesses via Google Places, pulls their website content to extract an email address, uses OpenAI to draft a personalised automation-focused outreach message, then sends it via SMTP while tracking contacts in an n8n Data Table.

## How it works
1. Runs daily at 9:00 and sets the campaign parameters (rotating niche and city, sender details, daily send cap, and delay between emails).
2. Searches Google Places for businesses matching the selected niche and location, then iterates through each returned place.
3. Keeps only businesses with a website, fetches the website HTML, and extracts a likely contact email address plus a short text snippet.
4. Filters out leads without an email and skips any email address already logged in the n8n Data Table.
5. Limits the run to the configured daily cap and processes leads in batches.
6. Uses OpenAI to generate a structured subject and body for a personalised cold email based on the business snippet and your campaign details.
7. Sends the email via SMTP with your signature and unsubscribe note, logs the contact in the Data Table, and waits the configured delay before sending the next email.

## Setup
1. Add credentials for Google Places API (HTTP Header Auth with X-Goog-Api-Key), OpenAI, and your SMTP email account.
2. Create an n8n Data Table named outreach_contacts with columns for email, businessName, status, and timestamp.
3. Update the Campaign Config values (your name, company, sender email/address, website link, service area, niche/city lists, dailyCap, and sendDelaySeconds) before publishing.
4. Review and adjust the OpenAI prompt if needed, keeping the required placeholders and ensuring it returns a subject and body.
5. Test with a manual execution, then publish and activate the workflow so the schedule trigger runs the published version.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
