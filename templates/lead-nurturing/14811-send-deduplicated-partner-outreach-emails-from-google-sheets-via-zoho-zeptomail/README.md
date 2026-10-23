# 💬 Send deduplicated partner outreach emails from Google Sheets via Zoho ZeptoMail

> ⚡ **7 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Send personalized cold outreach emails to partners without ever contacting the same person twice. This workflow reads a lead list from Google Sheets, validates and deduplicates entries, checks a tracking sheet to skip anyone already in sequence, then routes each lead to a tailored email template based on their partner type all sent via Zoho ZeptoMail with status logged back automatically.

## Who it's for

Startups, agencies, or creator platforms running partnership outreach across multiple lead categories (colleges, influencers, brands) who want personalized messaging at scale without a dedicated CRM.

## How it works

1. A Schedule Trigger fires and reads all rows from your leads Google Sheet
2. Duplicate emails are removed and rows missing a name or email are filtered out
3. Each lead is looped one at a time and checked against a Tracking Sheet anyone with a status of `sent`, `followup_1`, `completed`, `replied`, or `unsubscribed` is skipped entirely
4. Qualifying leads are routed through a Switch node based on `Partner Type`:
   - **College** — campus partnership pitch, addressed to the institution
   - **Influencer** — collab-focused email, first-name personalized
   - **Brand** — brand partnership proposal with company name
   - **Other** — generic but warm outreach for uncategorized leads
5. The correct email template is assembled in a Set node with a dynamic subject and HTML body
6. Email is sent via Zoho ZeptoMail
7. The lead is appended to the Tracking Sheet with status `sent` — preventing any re-contact on future runs

## Setup

1. Connect your **Google Sheets** and **Zoho ZeptoMail** credentials in n8n
2. Set your leads sheet and tracking sheet Resource IDs in all Google Sheets nodes
3. Replace all `[YOUR COMPANY]` placeholders inside the four email Set nodes
4. Update the sender address in the ZeptoMail send node
5. Add your mail agent ID from ZeptoMail into the send node
6. Ensure your leads sheet has columns: `Name`, `Email`, `Company`, `Partner Type`
7. Ensure your tracking sheet has columns: `Email`, `Status`

## Partner type values (in your sheet)

`College` · `Influencer` · `Brand` · anything else → routed to the Other template

## Requirements

- Self-hosted n8n instance (community node required)
- Community node: `n8n-nodes-zohozeptomail`
- Active Zoho ZeptoMail account with a configured mail agent

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
