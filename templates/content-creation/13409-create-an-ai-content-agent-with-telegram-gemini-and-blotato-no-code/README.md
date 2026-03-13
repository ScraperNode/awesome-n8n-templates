# 🎬 Create an AI content agent with Telegram, Gemini, and Blotato (no-code)

> ⚡ **543 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description

Automatically turn a simple Telegram message into fully researched, AI-generated visual content and publish it to multiple social platforms using Blotato — with async processing control and built-in status validation.

This workflow creates a complete:

Telegram → AI → Research → Visual → Publish → Confirm  

automation pipeline.

---

## Who is this for?

This template is ideal for:

- Content creators automating daily posting  
- Solopreneurs building a 24/7 AI content engine  
- Agencies managing multiple social accounts  
- AI automation builders integrating Telegram + Blotato  
- Teams that want a Chat → Publish pipeline  

If you want to control your entire content system from a single Telegram chat, this workflow is for you.

---

## What problem is this workflow solving?

Manual content production usually requires:

- Researching topics manually  
- Switching between AI writing tools and design tools  
- Waiting for rendering without clear status updates  
- Posting separately to each platform  
- No centralized confirmation system  

This workflow connects research, media generation, publishing, and confirmation into one automated orchestration system.

---

## What this workflow does

This automation workflow:

- Accepts a topic or request via Telegram Bot  
- Sends the message to an AI Content Orchestrator  
- Uses AI model + conversation memory for context  
- Creates a Source job via Blotato (research stage)  
- Waits for structured content extraction  
- Retrieves processed research data  
- Creates a Visual generation job (infographic or slideshow)  
- Waits for AI rendering  
- Retrieves final media asset  
- Publishes automatically to:
  - Instagram  
  - LinkedIn  
- Sends confirmation back to Telegram  

### Workflow pattern used

Trigger → Analyze → Create → Wait → Retrieve → Validate → Publish → Confirm  

---

## Setup

### 1. Configure Telegram Trigger

Use **Telegram Bot Trigger**

- Connect your Telegram Bot token  
- Set update type to `message`  
- Ensure bot permissions are enabled  

This is the entry point of the system.

---

### 2. Configure AI Core (Orchestrator)

Connect:

- AI Chat Model  
- Conversation Memory storage  

Ensure:

- User message is mapped correctly into the AI prompt  
- Memory is attached for contextual responses  
- Output is structured for downstream routing  

---

### 3. Configure Blotato Research Engine

#### Create Source

- Connect Blotato credentials  
- Map topic/content request correctly  
- Store Source ID  

#### Wait for Source Processing

- Add a Wait node  
- Adjust delay based on API performance  

#### Get Source

- Retrieve structured research output  
- Validate status = `completed`  

Only completed sources proceed to visual generation.

---

### 4. Configure Blotato Media Engine

#### Create Visual

- Connect Blotato credentials  
- Map structured content into visual prompt  
- Select infographic or slideshow format  

#### Wait for Rendering

- Adjust timing based on rendering duration  

#### Get Visual

- Retrieve generated media  
- Validate status = `completed`  

---

### 5. Configure Distribution

#### Publish to Instagram

- Connect Instagram credentials  
- Verify posting permissions  

#### Publish to LinkedIn

- Connect LinkedIn credentials  
- Confirm correct profile or page selection  

Both platforms publish automatically once media is validated.

---

### 6. Configure Telegram Response

Use **Telegram Response Sender**

- Send success confirmation  
- Optionally include published links  
- Add failure branch notification if needed  

This keeps the entire workflow controlled from one chat interface.

---

## How to customize this workflow

You can extend this workflow by:

- Adding Telegram approval before publishing  
- Generating AI captions and hashtags dynamically  
- Adding retry logic for failed jobs  
- Logging execution results into Google Sheets  
- Expanding to Facebook or TikTok  
- Adding analytics tracking  

---

## Best practices

- Keep wait durations aligned with API speed  
- Always validate job status before proceeding  
- Maintain consistent ID mapping (Source ID / Visual ID)  
- Monitor failed execution branches  
- Test with simple content before scaling  

---

## Nodes used in workflow

- Telegram Trigger  
- AI Chat Model  
- Memory Store  
- HTTP Request (Blotato API)  
- Wait  
- Switch  
- If  
- Sticky Note  

---

## Free or Paid?

Depends on:

- Blotato plan  
- AI model usage  
- Social platform API limits  

---

This workflow transforms a Telegram message into a fully automated, multi-platform AI content system running 24/7 — including research, visual creation, publishing, and confirmation.

(Watch the tutorial video on YouTube)[https://youtu.be/WdTimRjiiH8]

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
