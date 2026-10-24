# 🎬 Generate weekly content drafts from Google Sheets with Groq AI and Slack

> ⚡ **19 views** · 🎬 [Content Creation & Video](../)

## Description

# The Content Calendar Manager

&gt; n8n + Google Sheets + Groq AI + Slack Automation


This workflow automates your entire content planning process—from idea backlog to AI-generated drafts and team-ready summaries. It runs weekly, fetches pending content ideas from Google Sheets, generates platform-specific content using AI (blogs, videos, social posts) and delivers a clean summary to Slack while updating statuses in your sheet.


### Quick Implementation Steps

1. [Connect credentials for **Google Sheets**, **Slack** and **Groq API** in your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Update the **Google Sheet ID and Sheet Name** in the "Fetch Content Backlog" node.
3. Ensure your sheet has columns: `Sr No`, `Topic`, `Type`, `Status`, `Deadline`.
4. Set your **Slack Channel ID** in the "Post Summary to Slack" node.
5. Test with sample rows (Status = `idea` or `writing`).
6. Activate the workflow.


## What It Does

This workflow acts as a smart content operations assistant. Every week, it scans your content backlog stored in Google Sheets and identifies items that are either in the "idea" or "writing" stage. It then prioritizes them by deadline and processes them accordingly.

Based on the content type (Blog, Video or Social), the workflow routes each idea into specialized AI agents powered by Groq. These agents generate structured outputs such as blog outlines, video scripts or social media briefs—each tailored to its format and purpose.

Finally, all generated outputs are compiled into a single, clean Slack report for your team. At the same time, the workflow updates the original sheet to mark processed items as "writing", ensuring no duplication of effort and maintaining workflow consistency.


## Who It's For

- Content marketing teams
- Social media managers
- Digital agencies
- Startup founders managing content pipelines
- SEO and content strategists
- Anyone using Google Sheets to manage content ideas


## Requirements

To use this workflow, you need:

- [An active **n8n account**](https://n8n.partnerlinks.io/om1efg2qgvwi)
- **Google Sheets account** with API access
- **Slack workspace** with OAuth2 setup
- **Groq API credentials**
- A Google Sheet structured with:
  - `Sr No`
  - `Topic`
  - `Type` (video, blog, social)
  - `Status` (idea, writing, etc.)
  - `Deadline`


## How It Works & Setup Guide

### Workflow Breakdown

#### 1. Trigger

- **Node:** `Check for New Ideas (Weekly)`
- Runs every week on **Monday at 9 AM**

#### 2. Fetch Data

- **Node:** `Fetch Content Backlog`
- Pulls rows where:
  - Status = `idea` OR `writing`

#### 3. Sort Content

- **Node:** `Order by Deadline`
- Ensures urgent items are processed first

#### 4. Route by Content Type

- **Node:** `Route by Format (Video/Blog/Social)`
- Sends items to:
  - Blog AI branch
  - Video AI branch
  - Social AI branch

#### 5. AI Content Generation

- **Blog Branch**
  - Node: `Generate Blog Outline`
  - Uses: SEO Strategist LLM

- **Video Branch**
  - Node: `Generate Video Script`
  - Uses: Video Producer LLM

- **Social Branch**
  - Node: `Generate Social Post`
  - Uses: Growth Expert LLM

#### 6. Data Mapping

- Nodes:
  - `Map Blog Data`
  - `Map Video Data`
  - `Map Social Data`
- Captures:
  - Row ID
  - AI Output

#### 7. Merge Results

- Node: `Sync Parallel Branches`
- Combines outputs from all branches

#### 8. Aggregate Data

- Node: `Bundle Results into List`
- Creates a unified dataset

#### 9. Format Slack Report

- Node: `Format Slack Report Layout`
- Cleans and formats text for Slack readability

#### 10. Send to Slack

- Node: `Post Summary to Slack`
- Posts a structured weekly report

#### 11. Update Google Sheet

- Nodes:
  - `Unbundle Individual Rows`
  - `Mark Status as Writing`
- Updates each processed row to:
  - Status = `writing`


## How To Customize Nodes

- **AI Prompts**
  - Modify prompts in:
    - `Generate Blog Outline`
    - `Generate Video Script`
    - `Generate Social Post`
  - Adjust tone, structure or output format

- **Schedule**
  - Change timing in `Check for New Ideas (Weekly)`

- **Sheet Filters**
  - Update status filters in `Fetch Content Backlog`

- **Slack Message Format**
  - Edit JavaScript in `Format Slack Report Layout`

- **Content Types**
  - Add new conditions in `Route by Format` for more formats


## Add-ons (Extend This Workflow)

- Auto-publish content to CMS (e.g., WordPress)
- Send email summaries instead of/in addition to Slack
- Add approval workflow before marking as "writing"
- Integrate with Notion or Airtable instead of Google Sheets
- Store generated content in a database or cloud storage
- Add AI rewriting or optimization steps


## Use Case Examples

1. **Weekly Content Planning Automation**
   - Automatically generate drafts for upcoming content ideas

2. **Agency Content Pipeline**
   - Manage multiple client content queues efficiently

3. **YouTube + Blog Strategy**
   - Generate scripts and blog outlines simultaneously

4. **Social Media Campaign Prep**
   - Create ready-to-post social content ideas weekly

5. **SEO Content Scaling**
   - Quickly generate structured blog outlines at scale

There can be many more use cases depending on how you customize and extend this workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data fetched | Incorrect sheet ID or filters | Verify Google Sheet ID and filter values |
| Workflow runs but no output | No rows match "idea" or "writing" | Check Status column values |
| AI output is empty | Groq API issue | Validate API credentials and model |
| Slack message not sent | Incorrect channel ID or auth issue | Recheck Slack OAuth2 and channel ID |
| Sheet not updating | Mapping mismatch | Ensure `Sr No` matches correctly |
| Duplicate processing | Status not updated | Confirm "Mark Status as Writing" node |


## Need Help?

If you need assistance setting up this workflow, customizing prompts or extending it with advanced features, our [n8n workflow development team](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** is here to help.

We can help you:

- Customize this workflow for your business
- Integrate with your existing tools
- Build advanced AI-powered automations
- Scale your content operations efficiently

[Reach out to WeblineIndia for expert support and tailored automation solutions](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
