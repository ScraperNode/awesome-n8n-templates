# 📊 Extract marketing insights & generate content from TikTok videos with Dumpling AI & GPT-4

> ⚡ **1,357 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## 📄 What this workflow does

This workflow turns TikTok videos into high-quality marketing insights and social-ready posts using Dumpling AI and GPT-4.

It takes a TikTok URL, keyword, and product name, then automatically extracts the video transcript, analyzes the content for key marketing insights (pain points, outcomes, triggers), and rewrites it as a social media post that positions your product as the solution. Everything is logged to Google Sheets for use by your content or product team.

---

## 👤 Who is this for

- Product marketers doing UGC research  
- Copywriters repurposing TikTok into content  
- Founders or VAs turning viral clips into assets  
- Agencies building research-based social proof

---

## ⚙️ How to set up

### ✅ Requirements
- **Dumpling AI**: For TikTok transcript extraction  
- **OpenAI GPT-4 or GPT-4o-mini**: For analysis and rewriting  
- **Google Sheets**: To log the results  
- **n8n Form Trigger**: To input `TikTok URL`, `Keyword`, and `Product`

---

### 🔧 Setup Instructions

1. **Google Sheets**  
   - Create a sheet with the following columns:  
     - `Video URL`, `Original Transcription`, `Pain points`, `Desired outcomes`,  
       `Triggers or motivating events`, `Interesting direct quotes`, `New Script`
   - Update the sheet ID and tab in the Google Sheets node

2. **Credentials**
   - Add your Dumpling AI key using `HTTP Header Auth`
   - Use GPT-4 via OpenAI credentials
   - Connect your Google Sheets using OAuth2

3. **Customization (Optional)**
   - You can modify the GPT-4 prompts in the LangChain nodes to change tone, output structure, or content depth

---

## 🧠 How it works

1. A form is submitted with a TikTok URL, keyword, and product
2. Dumpling AI fetches and returns the TikTok transcript
3. The VTT format is cleaned into plain text
4. GPT-4 (via LangChain agent) extracts:
   - Pain points
   - Desired outcomes
   - Motivating events
   - Direct quotes
5. GPT-4 then rewrites the transcript into a compelling marketing post
6. Results are saved to Google Sheets for further use

---

## 🛠️ Customization ideas

- Push insights to Notion or Airtable instead of Sheets  
- Use Claude or Gemini instead of GPT-4  
- Automatically generate image prompts to pair with the rewritten script  
- Add notification email or Slack post when draft is ready  



---

This workflow gives marketers and founders a fast way to convert real social content into reusable copy, backed by authentic user voice and GPT-powered insights.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger, AI Transform

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
