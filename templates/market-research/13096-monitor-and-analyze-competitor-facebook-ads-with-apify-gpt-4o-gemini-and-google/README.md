# 📊 Monitor and analyze competitor Facebook ads with Apify, GPT-4o, Gemini, and Google Sheets

> ⚡ **62 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Categories  
Marketing Intelligence, Ad Operations, Competitive Research, Creative Analysis

Build a Facebook Ad Intelligence Pipeline with Apify, AI, and Google Sheets

This workflow creates an end-to-end Facebook Ad Intelligence pipeline that automatically collects live ads from the Facebook Ad Library, analyzes their creative and messaging using AI, and stores structured insights in Google Sheets for reuse.

The system continuously pulls ads from specified Facebook Ad Library URLs, filters for high-signal advertisers, classifies ads by format (video, image, or text), and applies AI analysis to extract strategy, positioning, and reusable creative angles.

The result is a reliable, no-manual-work system that turns competitor ads into structured, reusable intelligence instead of screenshots and guesswork.

---

## Benefits

**Evidence-Based Creative Decisions**  
Learn from ads that are already live and funded, not assumptions.

**Faster Creative Iteration**  
Reuse proven angles, hooks, and formats without starting from zero.

**Centralized Ad Intelligence**  
All insights are stored in a searchable Google Sheet.

**Format-Aware Analysis**  
Images, videos, and text ads are analyzed using the correct method.

**Low Noise, High Signal**  
Filters remove weak advertisers and surface serious spenders.

---

## How It Works

### Ad Data Collection (Apify)
- Scrapes Facebook Ad Library URLs automatically  
- Retrieves raw ad snapshots including:
  - Copy and headlines
  - Media URLs
  - Page metadata
  - Engagement and page signals

### Signal Filtering
- Filters ads by page popularity, for example pages with more than 5,000 likes  
- Ensures only proven advertisers move forward

### Creative Type Detection
- A switch node classifies ads as:
  - Video
  - Image
  - Text only
- Each format is routed to its own processing path

### AI Creative Analysis
- **Image ads**
  - Converted to binary
  - Visually analyzed
  - Summarized and reverse-engineered
- **Video ads**
  - Downloaded and analyzed frame and content wise
  - Described strategically
- **Text ads**
  - Summarized and rewritten directly
- Outputs include:
  - Deep strategic summaries
  - Repurposed ad copy

### Structured Intelligence Storage (Google Sheets)
- All insights are appended automatically
- Ads are deduplicated by ad archive ID
- Each row becomes a reusable asset:
  - Summary
  - Rewritten copy
  - Image or video prompts
  - Page and source data

---

## Required Setup

**Apify**
- Active Apify account
- Access to the Facebook Ad Library scraping actor

**OpenAI**
- API key with text and image analysis access

**Google Gemini**
- API access for video analysis

**Google Sheets**
- OAuth access
- Edit permissions on the target spreadsheet

**Dropbox** (optional)
- OAuth access for video storage and reuse

---

## Business Use Cases

**Performance Marketers**
- Identify winning creative patterns faster

**Media Buyers**
- Reduce testing waste and creative fatigue

**Agencies**
- Deliver competitive intelligence as a service

**Founders**
- Validate messaging before launching campaigns

**Growth Teams**
- Build creative systems instead of one-off ads

---

## Difficulty Level
Intermediate

---

## Estimated Build Time
60–90 minutes

---

## Monthly Operating Cost
Apify: Usage-based  
OpenAI: Usage-based  
Google Sheets: Free  
Dropbox: Free or paid plan  
n8n: Self-hosted or cloud  

Typical range: $20–60/month depending on volume

---

## Why This Workflow Works
Live ads represent real budget decisions  
Filtering enforces signal quality  
Format-specific analysis improves insight accuracy  
Structured storage enables reuse at scale  
Automation replaces manual ad spying

---

## Possible Extensions
- Auto-tag ads by funnel stage
- Add spend or duration heuristics
- Track creative trends over time
- Generate landing page hypotheses
- Trigger creative briefs from winning ads

## 🔗 Nodes Used

Dropbox, Google Sheets, HTTP Request, Filter, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
