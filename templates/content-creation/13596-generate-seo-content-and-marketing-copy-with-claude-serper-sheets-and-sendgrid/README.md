# 🎬 Generate SEO content and marketing copy with Claude, Serper, Sheets and SendGrid

> ⚡ **27 views** · 🎬 [Content Creation & Video](../)

## Description

Generates SEO blog posts, ad copy, email sequences, and social captions using Claude AI.

## Setup
1. Add your ANTHROPIC_API_KEY in the Set Config node
2. Configure Serper API key for SEO data (optional)
3. Set your WordPress, Mailchimp, Airtable credentials
4. POST to the webhook URL

## Webhook Payload
```
{
  "topic": "Best AI Tools 2025",
  "contentType": "blog_post",
  "keyword": "ai tools for marketing",
  "tone": "professional",
  "audience": "SMB marketers",
  "wordCount": 1500,
  "brand": "YourBrand",
  "clientEmail": "client@email.com"
}
```

## Content Types
- blog_post
- ad_copy
- email_sequence
- social_captions

## Flow

**The simplified flow (9 active nodes):**

```
Receive Brief → Set Config → Fetch SERP Data → Build Claude Prompt
→ Call Claude AI → Parse Claude Response → Save to Google Sheets
                                         → Send Delivery Email
                                         → Send Response
```

**After importing, replace these 5 values in the `Set Config` node:**

| Field | Replace with |
|---|---|
| `YOUR_ANTHROPIC_API_KEY` | Your Anthropic key |
| `YOUR_SERPER_API_KEY` | Your Serper.dev key (free tier works) |
| `YOUR_SENDGRID_API_KEY` | Your SendGrid key |
| `YOUR_GOOGLE_SHEET_ID` | Your Sheet ID from the URL |
| `YOUR_GSHEETS_CREDENTIAL_ID` | Set up Google Sheets OAuth in n8n credentials |

The workflow handles all 4 content types (`blog_post`, `ad_copy`, `email_sequence`, `social_captions`) through a single Claude call with type-specific prompts — no branching needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
