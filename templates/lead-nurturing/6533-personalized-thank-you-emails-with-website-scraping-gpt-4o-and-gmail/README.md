# 💬 Personalized thank-you emails with website scraping, GPT-4o, and Gmail

> ⚡ **1,034 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Overview
Impress your leads with ultra-personalized “thank you” emails that look hand-written — sent automatically seconds after they submit your intake form.

This workflow instantly scrapes the prospect's website, extracts meaningful copy, and uses AI to write a custom thank-you message referencing something specific from their site. It gives the impression you immediately reviewed their business and crafted a thoughtful reply — without lifting a finger.

### Who’s it for
- Agencies and consultants using intake forms  
- Freelancers booking discovery calls  
- B2B businesses that want high-touch first impressions  
- Sales teams automating initial follow-ups  

### How it works
- Triggered when a form (e.g. Tally, Typeform) is submitted  
- Scrapes the website URL provided in the form  
- Converts HTML to Markdown and extracts plain copy  
- Uses AI to write a personalized thank-you message referencing the site  
- Waits briefly to simulate real typing delay  
- Sends the message via Gmail (or any email provider)

### Example use case
&gt; Prospect submits a form with their website: `coolstartup.ai`  
&gt;  
&gt; 30 seconds later, they receive:  
&gt;  
&gt; _“Thanks for reaching out! I just checked out Cool Startup’s homepage — love the clean UX and mission around AI for teams. Looking forward to diving into how we might collaborate!”_

### How to set up
1. Connect your form tool (e.g. Tally or Typeform)  
2. Connect Gmail or another email provider  
3. Customize the AI prompt to match your tone  
4. Set the wait time (e.g. 30 seconds) for a realistic delay  
5. Update your website scraping logic if needed  

### Requirements
- Form tool with webhook support  
- OpenAI (or other LLM) credentials  
- Email sending integration (Gmail, Mailgun, Postmark, etc.)

### How to customize
- Edit the email tone (casual, formal, funny, etc.)  
- Add CRM integration to log form submission and response  
- Trigger additional workflows like lead scoring or Slack alerts  
- Add fallback logic if the website doesn’t scrape cleanly

## 🔗 Nodes Used

HTTP Request, Typeform Trigger, Gmail, Markdown, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
