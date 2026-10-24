# 💬 Track leadership hires and send AI outreach using PredictLeads, OpenAI and Gmail

> ⚡ **53 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Overview

Watch target companies for C-level and VP hiring signals, then send AI-personalized outreach emails when leadership roles are posted.

This workflow reads a list of target company domains from Google Sheets, checks each one for leadership-level job openings via the PredictLeads Job Openings API, enriches matching companies with additional company data, and uses OpenAI to generate a personalized outreach email referencing the specific leadership hire. The email is sent automatically through Gmail.

## How it works

1. A schedule trigger runs the workflow daily at 8:00 AM.
2. The workflow reads target account domains from Google Sheets.
3. It loops through each company and fetches job openings from PredictLeads.
4. It filters for leadership roles such as CRO, CMO, CTO, VP, Head of, Chief, and Director.
5. If leadership roles are found, it enriches the company with PredictLeads company data such as industry, size, and location.
6. It builds a structured prompt combining company context and the detected leadership roles.
7. It sends the prompt to OpenAI to generate a personalized outreach email.
8. It sends the AI-generated email through Gmail with a tailored subject line.
9. It loops back to process the next company.

## Setup

* Create a Google Sheet with these columns:

  * `domain`
  * `company_name`
* Connect your Gmail account using OAuth2 for sending outreach emails.
* Add your OpenAI API key in the **Generate Outreach Email** HTTP Request node.
* Add your PredictLeads API credentials using the `X-Api-Key` and `X-Api-Token` headers.

## Requirements

* Google Sheets OAuth2 credentials
* Gmail OAuth2 credentials
* OpenAI API account using `gpt-4o-mini`
* PredictLeads API account: `https://docs.predictleads.com`

## Notes

* The leadership role filter uses regex matching for roles such as CRO, CMO, CTO, VP, Vice President, Head of, and Chief. You can customize this as needed.
* The AI prompt instructs OpenAI to write concise emails with a maximum of 150 words, referencing the specific leadership hire.
* PredictLeads Job Openings and Company API docs: `https://docs.predictleads.com`

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
