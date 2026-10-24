# 🎬 Convert YouTube videos into SEO blog posts using WayinVideo and GPT-4o-mini

> ⚡ **202 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description

Automatically convert any video URL into a fully structured, publish-ready SEO blog post using **WayinVideo AI transcription**, **GPT-4o-mini**, and **Google Sheets** — zero manual writing required.

---

## What This Workflow Does

This workflow takes a single video URL and does everything for you. It transcribes the video using [WayinVideo](https://wayin.ai/api/) — a powerful multilingual video transcription API that accurately converts spoken content into clean, structured text — then passes that transcript to an AI Agent that writes a complete SEO blog post with title, meta description, slug, sections, FAQs, key takeaways, and tags. The final output is saved directly as a draft row in Google Sheets, ready for review and publishing.

Perfect for content marketers, YouTubers, agencies, and SEO teams who want to repurpose video content at scale without touching a keyboard.

---

## Key Features

**AI-powered transcription via Wayin:** Uses the WayinVideo API to transcribe any video URL into clean, timestamped text segments with word count and duration metadata — supporting multilingual content.

**Smart polling loop:** Automatically polls Wayin every 5 seconds until transcription is complete — no manual waiting or webhook setup needed.

**Structured SEO output:** GPT-4o-mini generates a complete blog post with H2 sections (300+ words each), meta description (155 chars), URL slug, focus keyword, secondary keywords, FAQs, and a CTA conclusion.

**Strict JSON schema enforcement:** A Structured Output Parser validates every AI response — no broken outputs, no missing fields.

**Google Sheets auto-logging:** Every blog post is instantly saved as a draft row with date, video URL, word count, read time, tags, and status.

**Webhook-triggered:** Works as part of any larger pipeline — trigger it from Make, Zapier, or your own frontend.

---

## How It Works

1. **Receive Video URL** — Webhook accepts a POST request with `{"url": "your-video-link"}`
2. **Submit Transcription — Wayin** — Sends the video URL to WayinVideo API to start English transcription job
3. **Poll Transcription Status** — Fetches job status using the transcription ID every 5 seconds
4. **Wait 5 Seconds** — Pauses execution between each poll attempt to avoid rate limits
5. **Is Transcription Complete?** — IF status = `SUCCEEDED` → move forward, ELSE → re-poll
6. **Process Transcript Data** — Joins all text segments, calculates word count and video duration
7. **Generate SEO Blog Post** — AI Agent (GPT-4o-mini) writes the full structured blog post
8. **Parse Blog JSON Output** — Enforces strict JSON schema and auto-fixes any format issues
9. **Save to Google Sheets** — Appends all blog fields as a new draft row
10. **Return Success Response** — Sends confirmation back to the webhook caller

---

## Setup Requirements

**Tools you'll need:**
- Active n8n instance (self-hosted or n8n Cloud)
- [WayinVideo](https://wayin.ai/api/) account + API key (for video transcription)
- OpenAI API key (GPT-4o-mini for blog generation)
- Google Sheets with OAuth access (for draft storage)

**Estimated setup time:** 10–15 minutes

---

## Configuration Steps

**1. Add credentials in n8n:**
- OpenAI API key
- Google Sheets OAuth API

**2. Add your WayinVideo API Key:**
- Open `Submit Transcription — Wayin` node → replace `YOUR_WAYIN_API_KEY` in the Authorization header
- Open `Poll Transcription Status` node → replace `YOUR_WAYIN_API_KEY` in the Authorization header

**3. Set up your Google Sheet:**
Create a sheet with these exact column headers:

`Date` | `Video URL` | `SEO Title` | `Slug` | `Focus Keyword` | `Meta Description` | `Secondary Keywords` | `Read Time` | `Tags` | `Word Count` | `Duration (min)` | `Status`

**4. Update Sheet Document ID:**
- Open `Save to Google Sheets` node
- Replace `YOUR_GOOGLE_SHEET_DOCUMENT_ID` with your actual Sheet ID (found in the Google Sheet URL)

**5. Test the workflow:**
- Activate the workflow
- Send a POST request to your webhook URL:
```
POST https://your-n8n-domain/webhook/43129e0a-...
Body: {"url": "https://youtube.com/watch?v=example"}
```
- Check your Google Sheet for the new draft row

---

## Use Cases

**Content marketers:** Repurpose every YouTube video, webinar, or podcast episode into an SEO blog post automatically — 10x your content output without extra writing.

**SEO agencies:** Generate first-draft blog posts for clients from recorded calls, demos, or training videos in minutes.

**Course creators:** Turn every lesson or tutorial video into a standalone blog post to drive organic search traffic.

**YouTubers & podcasters:** Build a content library of written posts from existing video content with zero extra effort.

---

## Customization Options

**Change the AI model:** Replace `gpt-4o-mini` with `gpt-4o` or `gpt-4-turbo` in both OpenAI nodes for higher quality output on complex topics.

**Add WordPress publishing:** Connect a WordPress REST API node after `Save to Google Sheets` to auto-publish instead of saving as draft.

**Change output language:** Modify the WayinVideo API `target_lang` parameter and GPT system prompt to generate blog posts in any language.

**Adjust blog structure:** Edit the system prompt in `Generate SEO Blog Post` to change section count, word targets, tone, or add custom fields like author bio or schema markup.

**Add Slack/email notifications:** Insert a Slack or Gmail node after `Return Success Response` to notify your team when a new draft is ready.

---

## Troubleshooting

**Transcription stuck in polling loop:** Check your WayinVideo API key is valid and the video URL is publicly accessible. Private or age-restricted videos may fail.

**AI output missing fields:** The Structured Output Parser auto-fixes most issues. If errors persist, add explicit field instructions to the GPT system prompt.

**Google Sheets not updating:** Verify OAuth credentials are connected and the Sheet Document ID is correct (not the full URL, just the ID string between `/d/` and `/edit`).

**Webhook not triggering:** Make sure the workflow is activated (toggle ON) before sending test requests. Test mode webhooks use a different URL than production.

---

## Resources

- [WayinVideo — Transcription API](https://wayin.ai/api/)
- [n8n Documentation](https://docs.n8n.io)
- [OpenAI API Reference](https://platform.openai.com/docs)
- [Google Sheets API](https://developers.google.com/sheets/api)

---

## Support

Need help setting up or want a custom version built for your use case?

📧 **Email:** [info@isawow.com](info@isawow.com)
🌐 **Website:** [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
