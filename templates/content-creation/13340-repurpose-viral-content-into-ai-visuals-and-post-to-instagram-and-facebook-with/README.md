# 🎬 Repurpose viral content into AI visuals and post to Instagram and Facebook with Blotato

> ⚡ **217 views** · 🎬 [Content Creation & Video](../)

## Description

## Description

Automatically turn any viral content URL (Blog, YouTube, TikTok, etc.) into AI-generated visuals and publish them to multiple social platforms with built-in status validation and async processing control.

---

## Who is this for?

This template is ideal for:

- Content creators repurposing viral content
- Affiliate marketers scaling content distribution
- Social media managers handling multi-platform posting
- AI automation builders using n8n + Blotato
- Teams that want a URL → Visual → Publish pipeline

If you want to transform existing content into multi-platform social posts automatically, this workflow is for you.

---

## What problem is this workflow solving?

Manually repurposing and posting viral content is slow and fragmented. Common challenges include:

- Copying content from blogs or videos manually
- Waiting for AI extraction and rendering without clear status
- Switching between multiple tools
- Posting separately to each platform
- Not knowing when processing fails

This workflow connects extraction, visual generation, and publishing into one automated pipeline.

---

## What this workflow does

This automated repurposing workflow:

- Accepts a public content URL
- Creates a Source processing job
- Waits for AI extraction to complete
- Fetches structured content
- Routes based on source status (failed / completed / processing)
- Creates a Visual generation job via Blotato
- Waits for AI rendering
- Retrieves generated visual/video output
- Validates render completion
- Publishes automatically to:
  - Instagram
  - Facebook

Workflow pattern used:

Create → Wait → Get → Check → Publish

---

## Setup

### 1. Configure URL Input

- Use **Submit Content URL**
- Provide a valid public link (Blog, YouTube, TikTok, etc.)
- This triggers the automation

---

### 2. Configure Source Processing

**Create Source**
- Connect extraction service credentials
- Map URL correctly

**Wait for Source Processing**
- Adjust delay based on API performance

**Get Source**
- Ensure correct Source ID mapping

**Source Status Switch**
- Configure routing for:
  - failed
  - completed
  - processing

Only completed sources proceed to visual generation.

---

### 3. Configure Blotato (Visual Generation)

**Create Visual**
- Connect Blotato credentials
- Map structured content into the visual prompt

**Wait for Visual Rendering**
- Adjust timing based on rendering duration

**Get Visual**
- Ensure correct Visual ID mapping

**Visual Status Check**
- Only proceed if status = completed

---

### 4. Configure Social Publishing

**Publish to Instagram**
- Connect Instagram credentials
- Verify media posting permissions

**Publish to Facebook**
- Connect Facebook Page credentials
- Ensure correct page selection

Test with one URL before running at scale.

---

## How to customize this workflow to your needs

You can extend this workflow by:

- Adding Slack/Telegram approval before publishing
- Adding AI caption or hashtag generation
- Inserting retry logic for failed renders
- Logging results into Google Sheets
- Extending to LinkedIn or TikTok
- Adding analytics tracking after publishing

---

## Best practices

- Keep wait durations aligned with API speed
- Always validate job status before moving forward
- Test with short-form content first
- Monitor failed execution branches
- Keep consistent ID mapping for Source and Visual jobs

---

## Documentation

For a full walkthrough and advanced scaling ideas, see:

[Video Guide](https://www.youtube.com/watch?v=RzNYGt4ltoE)

## 🔗 Nodes Used

n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
