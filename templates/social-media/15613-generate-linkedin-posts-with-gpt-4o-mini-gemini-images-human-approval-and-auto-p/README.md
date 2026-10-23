# 📱 Generate LinkedIn posts with GPT-4o-mini, Gemini images, human approval, and auto-publish

> ⚡ **199 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

An advanced AI-powered LinkedIn automation workflow built with n8n that generates high-engagement LinkedIn posts using GPT-4o-mini, optionally creates AI-generated visuals with Google Gemini, sends everything for human approval via Gmail, and finally publishes the approved content directly to LinkedIn.

This workflow combines:
- AI content generation
- AI image generation
- Human-in-the-loop approval
- Automated LinkedIn publishing
- Google Sheets as CMS/database

---


# 🧠 Workflow Overview

This workflow automatically:
1. Reads content ideas from Google Sheets
2. Generates LinkedIn posts using OpenAI
3. Optionally creates AI-generated images
4. Uploads images to public URLs
5. Sends content for manual approval
6. Publishes approved posts to LinkedIn
7. Updates Google Sheets with status + post URL

---

# 1️⃣ Schedule Trigger

## Purpose
Automatically starts the workflow at scheduled intervals.

## What it does
- Runs the workflow automatically
- Eliminates manual execution

---

# 2️⃣ Get Data from Sheets

## Purpose
Fetches post ideas and instructions from Google Sheets.

## What it does
- Reads rows where `Status = Ready`
- Pulls content details
- Sends data to AI generation nodes

## Columns Used
- Post Description
- Instructions
- Generate Image (Yes/No)
- Status

---

# 3️⃣ OpenAI Chat Model

## Purpose
Provides the AI model connection.

## What it does
- Connects GPT-4o-mini to the workflow
- Powers the LinkedIn content generation process

---

# 4️⃣ Generate Post Content

## Purpose
Creates scroll-stopping LinkedIn posts.

## What it does
- Uses advanced prompt engineering
- Generates human-style content
- Creates engaging hooks
- Adds CTA + hashtags
- Formats posts for LinkedIn readability

---

# 5️⃣ Switch

## Purpose
Checks whether image generation is required.

## Logic
Reads:
`Generate Image (Yes/No)`

## Outputs
- Image Required
- Image Not Required

---

# 6️⃣ Generate Post Image

## Purpose
Creates AI-generated LinkedIn images using Google Gemini.

## What it does
- Generates visuals from post ideas
- Creates engaging graphics
- Optimizes image format for LinkedIn

---

# 7️⃣ Upload a File

## Purpose
Uploads generated images and creates a public URL.

## Why this is important
LinkedIn and email approvals require publicly accessible image URLs.

## What it does
- Uploads binary image files
- Generates shareable public links
- Makes images accessible instantly

## Powered By
### 🔗 [UploadToURL](https://uploadtourl.com/)

UploadToURL makes file hosting extremely simple inside n8n workflows.

### Benefits
- Instant public URLs
- Fast uploads
- Easy integration with automation workflows
- Perfect for AI-generated assets

---

# 8️⃣ Send Content Confirmation

## Purpose
Sends generated content for human approval.

## What it sends
- AI-generated LinkedIn post
- Image preview URL
- Approval buttons

## Approval Options
- Approve
- Reject

This creates a powerful human-in-the-loop workflow.

---

# 9️⃣ Content Confirmation Logic

## Purpose
Processes approval responses.

## Logic
Checks:
`approved = true/false`

## Outputs
- Approved
- Rejected

---

# 🔟 Is Image Required?

## Purpose
Determines which LinkedIn posting path to use.

## Why this matters
LinkedIn handles:
- Text-only posts
- Image posts

differently.

---

# 1️⃣1️⃣ Download a File

## Purpose
Downloads the uploaded image back into binary format.

## Why this is needed
LinkedIn image uploads require binary image data.

## What it does
- Downloads image from public URL
- Converts it into binary format
- Prepares it for LinkedIn upload

---

# 1️⃣2️⃣ Post With Image

## Purpose
Publishes approved LinkedIn posts with images.

## What it posts
- AI-generated text
- Attached image

---

# 1️⃣3️⃣ Post Without Image

## Purpose
Publishes text-only LinkedIn posts.

## What it posts
- AI-generated content
- No image attachment

---

# 1️⃣4️⃣ Update Google Sheet

## Purpose
Updates workflow status after successful posting.

## What gets updated
- Status = Completed
- Post ID
- LinkedIn Post URL

---

# 1️⃣5️⃣ Update Status to Canceled

## Purpose
Updates rejected content status.

## What gets updated
- Status = Canceled

## 🔗 Nodes Used

Google Sheets, Gmail, LinkedIn, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
