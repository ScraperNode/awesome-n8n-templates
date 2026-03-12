# 🤝 Extract sales insights from Scoot call transcripts using Gemini

> ⚡ **17 views** · 🤝 [CRM & Sales Operations](../)

## Description

**Automatically extract sales insights from call transcripts and update your CRM.**

  Every time Scoot finishes transcribing a sales call, this workflow pulls out the key details—budget, competitors, objections, next steps—and sends a formatted summary to the rep.

  ## How It Works

  1. Scoot webhook triggers when transcription completes
  2. Fetches the full transcript via Scoot API
  3. AI Agent (Gemini) extracts structured data: budget, competitors, objections, timeline, decision maker, pain points, buying signals
  4. Updates your CRM with extracted fields
  5. Emails a formatted summary to the sales rep

  If the transcript is still processing, it retries automatically (up to 6 times, 1 hour apart).

  ## Setup

  1. **Import** the workflow JSON
  2. **Add credentials:**
     - Scoot API → Header Auth with your API key
     - Google Gemini → API key from [aistudio.google.com](https://aistudio.google.com)
     - Gmail → OAuth2
  3. **Copy webhook URL** to Scoot Dashboard → Webhooks → Transcription Complete
  4. **Replace the mock CRM node** with HubSpot, Salesforce, or Pipedrive
  5. **Test** with the manual trigger (uses sample data)
  6. **Activate**

  ---

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
