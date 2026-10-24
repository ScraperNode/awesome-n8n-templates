# 🎬 Generate SEO meta drafts from webhook batches with OpenAI and Outlook

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This webhook-driven workflow validates an incoming SEO post batch, uses OpenAI to generate meta title and description drafts for each post, sends the drafts to a provided callback URL, and emails an HTML summary through Microsoft Outlook.

## How it works
1. Receives a POST webhook request containing a batch of posts to optimize.
2. Validates the request by checking the `X-AIS-Secret` header and ensuring the payload includes a non-empty `posts` array.
3. Responds immediately with either a 202 Accepted (including the number of received posts) or a 401 Unauthorized.
4. Builds a per-post prompt from the site context (audience, keywords/phrases, existing meta, and page content) and sends it to OpenAI to generate meta title and meta description JSON.
5. Parses the OpenAI responses into a consolidated drafts list and tracks any posts whose AI output cannot be parsed.
6. Posts the generated drafts to the provided callback URL via HTTP, then sends an HTML summary email via Microsoft Outlook showing delivery status and the proposed metadata.

## Setup
1. Configure the webhook URL (path `ais-seo-meta`) in the source system that sends the SEO batches.
2. Replace the hardcoded secret in the validation step and ensure the sender includes the same value in the `X-AIS-Secret` header.
3. Add OpenAI credentials and confirm the selected model (gpt-4.1) is available for your account.
4. Ensure the incoming payload includes `callback_url`, `batch_id`, `site`, optional `context` (keywords/phrases/audience), and a `posts` array with `id`, `title`, `url`, and `content`.
5. Add Microsoft Outlook credentials and update the recipient list in the email step to your target addresses.
6. Make sure the callback endpoint accepts a POST with `{ "batch_id": "...", "drafts": [...] }` and validates the `X-AIS-Secret` header.

## Requirements
- Self-hosted n8n instance (this template uses LangChain/community nodes not available in n8n.cloud)
- Active OpenAI and Microsoft Outlook accounts with valid API credentials

## Customization
- Modify the OpenAI prompt in the generator node to tailor title and meta description style, keyword focus, or length. 
- Adjust email content or recipient logic in the final notification node as needed.

## Additional info
For support, contact support@ais.email (AI Solutions, Inc.).

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Outlook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
