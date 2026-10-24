# 🎣 Qualify IndiaMART and JustDial leads with OpenAI, GoHighLevel and WATI

> ⚡ **14 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures new leads from IndiaMART and JustDial webhooks, normalizes and deduplicates them, uses OpenAI (gpt-4o-mini) to qualify and draft a reply, then creates/updates the lead in GoHighLevel and sends an instant WhatsApp template message via WATI.

## How it works
1. Receives new enquiries from IndiaMART Push API and JustDial Lead Manager via two webhook endpoints and immediately returns an acknowledgement response.
2. Normalizes each platform’s payload into a single lead format, cleans/validates contact details (phone/email), and generates a deduplication key.
3. Removes duplicate leads across workflow executions to avoid reprocessing the same enquiry.
4. Adds your business context (business details, GoHighLevel IDs, and WATI settings) and sends the lead to OpenAI (gpt-4o-mini) to classify it as HOT/WARM/COLD/SPAM and draft a short WhatsApp reply.
5. Parses the AI result to build GoHighLevel contact/opportunity payloads, a detailed qualification note, and the WATI template parameters.
6. If the lead is not spam, upserts the contact in GoHighLevel, creates an opportunity in the configured pipeline stage, and attaches the AI qualification note to the contact.
7. Sends the WhatsApp template message through WATI and tags the GoHighLevel contact as either auto-replied or reply-failed based on the WATI response.

## Setup
1. Create n8n credentials for OpenAI, a GoHighLevel Private Integration Token (HTTP Header Auth), and a WATI API Bearer Token (HTTP Header Auth).
2. In the configuration step, set your GoHighLevel location ID, pipeline ID, and stage IDs (hot/warm/cold), plus your WATI tenant API endpoint and approved template name.
3. Copy the two webhook URLs from n8n and configure them in IndiaMART Seller Panel (CRM Integration/Push API) and JustDial Lead Manager so they POST leads to your workflow.
4. In WATI, create and get approval for the WhatsApp template referenced by the workflow (for example, `lead_auto_reply`) with parameters matching name/product/message/business.
5. Verify your GoHighLevel pipeline stages exist and that your integration token has permission to upsert contacts, create opportunities, add notes, and apply tags.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
