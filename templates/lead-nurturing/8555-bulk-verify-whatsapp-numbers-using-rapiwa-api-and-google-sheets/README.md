# 💬 Bulk verify WhatsApp numbers using Rapiwa API and Google Sheets

> ⚡ **161 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# WhatsApp Bulk Number Verification in Google Sheets Using Unofficial Rapiwa API

## Who’s it for
This workflow is for marketers, small business owners, freelancers, and support teams who want to automate WhatsApp messaging using a Google Sheet without the official WhatsApp Business API. It’s suitable when you need a budget-friendly, easy-to-maintain solution that uses your personal or business WhatsApp number via an unofficial API service such as Rapiwa.

## How it works / What it does
- The workflow looks for rows in a Google Sheet where the `Status` column is `pending`.
- It cleans each phone number (removes non-digits).
- It verifies the number with the Rapiwa verify endpoint (`/api/verify-whatsapp`).
- If the number is verified:
  - The workflow can send a message (optional).
  - It updates the sheet: `Verification = verified`, `Status = sent` (or leaves `Status` for the send node to update).
- If the number is not verified:
  - It skips sending.
  - It updates the sheet: `Verification = unverified`, `Status = not sent`.
- The workflow processes rows in batches and inserts short delays between items to avoid rate limits.
- The whole process runs on a schedule (configurable).

## Key features
- Scheduled automatic checks (configurable interval; recommended 5–10 minutes).  
- Cleans phone numbers to a proper format before verification.  
- Verifies WhatsApp registration using Rapiwa.  
- Batch processing with limits to control workload (recommended max per run configurable).  
- Short delay between items to reduce throttling and temporary blocks.  
- Automatic sheet updates for auditability (verified/unverified, sent/not sent).  

## Defaults recommended in this workflow
- Trigger interval: every 5–10 minutes (adjustable).  
- Max items per run: configurable (example: 200 max per cycle).  
- Delay between items: 2–5 seconds (example uses 3 seconds).  

## How to set up
1. Duplicate the sample Google Sheet: ➤ [Sample](https://docs.google.com/spreadsheets/d/1Ui4TzzI-Gq-bsEsrZELwW1Kyddw0IU9L1wxlHikktqw/edit?usp=sharing)  
2. Fill contact rows and set `Status = pending`. Include columns like `WhatsApp No`, `Name`, `Message`, `Verification`, `Status`.  
3. In n8n, add and authenticate a Google Sheets node pointed to your sheet.  
4. Create an HTTP Bearer credential in n8n and paste your Rapiwa API key.  
5. Configure the workflow nodes (Trigger → Google Sheets → Limit/SplitInBatches → Code (clean) → HTTP Request (verify) → If → Update Sheet → Wait).  
6. Enable the workflow and monitor first runs with a small test batch.

## Requirements
- n8n instance with Google Sheets and HTTP Request nodes enabled.  
- Google Sheets OAuth2 credentials configured in n8n.  
- Rapiwa account and Bearer token (stored in n8n credentials).  
- Google Sheet formatted to match the workflow columns.

## Why use Rapiwa
- Cost-effective and developer-friendly REST API for WhatsApp verification and sending.  
- Simple integration via HTTP requests and n8n.  
- Useful when you prefer not to use the official WhatsApp Business API.  
Note: Rapiwa is an unofficial service — review its terms and risks before production use.

## How to customize
- Change schedule frequency in the Trigger node.  
- Adjust maxItems in Limit/SplitInBatches for throughput control.  
- Change the Wait node delay for safer sending.  
- Modify the HTTP Request body to support media or templates if the provider supports it.  
- Add logging or a separate audit sheet to record API responses and errors.

## Best practices
- Test with a small batch first.  
- Keep the sheet headers exact and consistent.  
- Store API keys in n8n credentials (do not hardcode).  
- Increase Wait time or reduce batch size if you see rate limits.  
- Keep a log sheet of verified/unverified rows for troubleshooting.

## Example HTTP verify body (n8n HTTP Request node)
```json
{
  "number": "{{ $json['WhatsApp No'] }}"
}
```

## Notes and best practices
- Test with a small batch before scaling.
- Store the Rapiwa token in n8n credentials, not in node fields.
- Increase Wait delay or reduce batch size if you see rate limits or temporary blocks.
- Keep the sheet headers consistent; the workflow matches columns by name.
- Log API responses or errors for troubleshooting.

---

## Optional
- Add a send-message HTTP Request node after verification to send messages.  
- Append successful and failed rows to separate sheets for easy review.

## Support & Community

Need help setting up or customizing the workflow? Reach out here:

- WhatsApp: [Chat with Support](https://wa.me/8801322827799)  
- Discord: [Join SpaGreen Server](https://discord.gg/SsCChWEP)  
- Facebook Group: [SpaGreen Community](https://www.facebook.com/groups/spagreenbd)  
- Website: [SpaGreen Creative](https://spagreen.net)  
- Envato: [SpaGreen Portfolio](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
