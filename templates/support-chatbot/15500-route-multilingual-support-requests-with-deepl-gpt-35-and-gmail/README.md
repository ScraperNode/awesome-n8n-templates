# 💬 Route multilingual support requests with DeepL, GPT-3.5 and Gmail

> ⚡ **22 views** · 💬 [Support Chatbots](../)

## Description

**Your automated multilingual support assistant that translates, generates AI responses, and translates back to the customer's language with comprehensive error handling.**

![image.png](fileId:6061)

Stop manually copy-pasting customer messages into Google Translate and crafting responses in multiple languages. This workflow orchestrates the entire multilingual support pipeline: captures requests via form, auto-detects and translates to English, generates professional AI responses, and translates back to the customer's native language automatically. You handle the business; it handles the languages.

This is not a generic "translation" template. It is a functional bidirectional communication pipeline designed to maintain conversation quality across 29 languages with production-grade error recovery.

---

## How the workflow works

The workflow executes in five strategic stages:

1. **Form Capture & Validation**: Customer submits request via n8n form (email, question, language dropdown with 29 options). Validates email format, message length (5+ chars), and extracts ISO language code.

2. **Native DeepL Translation (Customer → English)**: Auto-detects source language and translates customer message to English using n8n's native DeepL node for clean AI input.

3. **AI Response Generation**: GPT-3.5-turbo generates professional, empathetic support response in English (2-3 paragraphs, actionable next steps, no unverified promises).

4. **Native DeepL Back-Translation (English → Customer)**: Translates AI response back to customer's original language, preserving technical accuracy with natural phrasing.

5. **Gmail Delivery & Error Handling**:
   * **Success**: Beautiful HTML email sent to customer with translated response, English version (collapsible), and metadata
   * **Failures**: Professional error emails sent for validation (HTTP 400), translation failures (HTTP 502 + retry 60s), AI failures (HTTP 502 + retry 30s), or back-translation failures (English version sent as fallback)

---

## Benefits

* **Bidirectional Translation Flow**: Unlike generic translation templates that only translate TO English, this workflow translates both directions (Customer → English → Customer), ensuring responses are delivered in the customer's native language.

* **Native DeepL Integration**: Uses n8n's built-in DeepL node instead of complex HTTP API configurations. Setup time: 3 minutes vs 15 minutes for HTTP-based approaches.

* **Production-Grade Error Handling**: Four error checkpoints with specific HTTP status codes (400 for validation, 502 for API failures) and actionable error messages. Includes English fallback when back-translation fails so you never lose a generated response.

* **Form-Based Input (No Webhook Config)**: Beautiful embedded n8n form with language dropdown eliminates the need for complex webhook integrations or API documentation for end users.

* **Beautiful HTML Email Delivery**: Modern, mobile-responsive email templates with gradient headers, collapsible sections, and clear CTAs. Five different templates for success and error states.

* **Cost Efficiency**: ~$0.001 per request (DeepL + OpenAI combined) vs $50-150/month per multilingual support agent. ROI: 25x in Year 1 for teams handling 100+ multilingual requests/month.

---

## Target Audience

* **E-commerce Businesses** serving international customers across the EU, LATAM, or APAC regions needing support in local languages.

* **SaaS Companies** with global user bases where language barriers create support bottlenecks and increase ticket resolution time.

* **Customer Success Teams** at startups expanding internationally without budget for multilingual support staff.

* **Agencies & MSPs** managing client support across multiple languages and needing to scale without hiring language specialists.

---

## Required APIs

* **DeepL API** for bidirectional translation (free tier: 500k chars/month covers ~3,300 requests)
* **OpenAI API** for GPT-3.5-turbo response generation (~$0.001 per response)
* **Gmail OAuth2** for sending beautiful HTML email responses to customers
* **n8n Form Trigger** requires public n8n instance (Cloud or self-hosted) to generate embeddable form URL

---

## Easy Customization

* **Adjust Language Support**: Edit the language dropdown in the Form Trigger node to add/remove languages based on your customer base (currently 29 languages supported).

* **Notification Channels**: Add Slack, Discord, or Microsoft Teams nodes after Gmail nodes to notify your support team when responses are sent or errors occur.

* **Custom Email Templates**: Modify the HTML in Gmail nodes to match your brand colors, fonts, and messaging style.

* **AI Model Upgrade**: Swap GPT-3.5-turbo for GPT-4o in the OpenAI node for 2x better response quality at ~$0.02/request (ideal for high-value customers or complex support queries).

* **Output Logging**: Add Google Sheets, Airtable, or PostgreSQL nodes after Gmail nodes to log all translations for quality auditing, CSAT tracking, or training data collection.

* **Custom Prompt Engineering**: Modify the OpenAI system prompt to include company-specific tone, product knowledge, or escalation criteria (e.g., detect refund requests and flag for human review).

## 🔗 Nodes Used

Gmail, DeepL, Filter, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
