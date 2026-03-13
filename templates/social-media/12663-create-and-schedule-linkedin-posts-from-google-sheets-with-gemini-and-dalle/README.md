# 📱 Create and schedule LinkedIn posts from Google Sheets with Gemini and DALL·E

> ⚡ **2,118 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## Overview
This n8n automation is a complete LinkedIn Content Engine that turns simple topic ideas into fully written, visual, and scheduled posts. It features a "Human-in-the-Loop" design, meaning AI handles the heavy lifting of writing and image creation, but nothing goes live until you manually approve it in Google Sheets.

## How It Works
The system runs two separate workflows in parallel:

### 1. The "Creator" Workflow

**Input:** Detects when you add a new topic to your "Content Calendar" Google Sheet.

**Brand Alignment:** Pulls your specific "Brand Voice" guidelines from a separate tab to ensure the AI sounds like you.

**Creation:** Uses Gemini Flash 1.5 to write the post and DALL-E 3 to generate a matching professional image.

**Drafting:** Uploads the image to ImgBB and saves the full draft back to your sheet with a status of "Draft."

### 2. The "Publisher" Workflow

**Daily Scan:** Wakes up every morning to check your Content Calendar.

**Verification:** Looks for posts that match two criteria:

* Date Scheduled matches today's date.
* Status is marked as "Approved" (by you).

**Publishing:** If both match, it automatically uploads the text and image to LinkedIn and updates the sheet status to "Posted."

**Tools Used:** n8n, Google Sheets, OpenRouter (Gemini / OpenAI), ImgBB.

## Connect & Learn More
**YouTube Channel:** **[Simon Scrapes](https://www.youtube.com/@simonscrapes)** – More tutorials on AI & Automation.

**Community:** **[Skool Community](https://www.skool.com/scrapes/about)** – Master AI & Automation with us.

**Full Video Tutorial:** [Watch the step-by-step build here](https://youtu.be/eiIRSUhPgOI?si=lgZTrPZPMqWF4uqz&t=4276)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Google Sheets Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
