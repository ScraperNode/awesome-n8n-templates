# 🎬 Auto-generate Instagram content schedule with GPT-4, Apify, and Google Sheets

> ⚡ **14,745 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Try It Out!

### This n8n template creates a fully automated Instagram content schedule using AI and Google Sheets. It is perfect for content creators, marketing teams, or local businesses looking to organize and scale their social media posting.

### How it works
The workflow starts by reading two sets of inputs from a Google Sheet:
- Your content strategy inputs (Pillar, Objective, Frequency, Format, Structure, Examples).
- A list of scraped blog posts with title, URL, and description (fetched from your website).
- Blog posts are scraped using Apify and parsed to extract key fields, which are stored in a tab labeled "Input (blog month)".
- You can assign a preferred posting month for each blog (e.g. fall blog posts get tagged for September).
- The workflow then merges both inputs and extracts the relevant information for further information added by ChatGPT.

### AI Scheduling & Personalization
Once merged, the workflow loops through each content item and:
- Identifies if the scheduled post falls on or near a holiday (like Mother’s Day) and adjusts the content accordingly.
- A reference tool is attached to guide structure and tone, based on a library of post examples.
- Sends the content to an AI Agent (using GPT-4, but customizable) that generates:
1. A compelling Instagram caption
2. A visual description
3. Hashtags
4. Suggested post date, day, content pillar, and format (carousel, reel, image, etc.)

### Output
- All generated content including captions, structure, dates, hashtags, and pillar is exported into a tab titled Output in your Google Sheet.
- The final schedule is ready for manual review, editing, or publishing to social media.

### How to use
- The workflow uses a manual trigger to start, but you can replace it with a Webhook, cron job, or form submission.
- Add/edit your content strategy in Google Sheets.

### How to Set-Up
### Initial Input Tab
- Define your content pillars and structure
- Create a tab named "Input" or "Strategy" 
Include these columns:
- Pillar: e.g., Family images
- Objective: e.g., Showcase images
- Frequency: e.g., Bi-weekly
- Content Form: e.g., Images, Reels
- Structure: brief description of expected layout (e.g., carousel Q&A, singular photo)
- Examples: prompts or questions to guide AI (e.g., Why do you think families should do a session?)

### Input (blog month) Tab – Store scraped blog content
Include these columns:
- URL: direct link to blog post
- Title: blog post title
- Description: short summary of the post
- Preferred Month: month you want it posted (e.g., August, September)
- This sheet is partially auto-filled by the workflow (except for Preferred Month)

### Output Tab – Final scheduled content
Include these columns:
- Date: scheduled posting date (YYYY-MM-DD)
- Day: day of the week
- Pillar: content category assigned
- Format: e.g., Images, Reels, Carousel
- Description: visual summary
- Caption: Instagram-ready caption
- Hashtags: complete hashtag block

### To use the Apify HTTP Request node:
1. Drag in an HTTP Request node into your n8n workflow.
2. Set the Method and URL based on how you're using Apify:
- Use POST if you want to run an actor live with dynamic input (e.g. scrape blog posts in real time).
- Use GET if you want to retrieve results from a completed or static dataset run (faster and cheaper if you're reusing previous data).
3. Configure query or body parameters:
4. Include your Apify API token for authentication (e.g. token=YOUR_API_KEY)
- For POST: include an input object with any required actor settings (e.g., blog URL to scrape).
- For GET: specify the dataset ID in the URL 
5. Test the node to ensure you're retrieving the blog titles, descriptions, and URLs as expected.

### Requirements
- Apify account for scraping blog posts
- OpenAI key (e.g. GPT-4) or another model of your choice
- Google Sheets Credentials 

### Example Use Cases
- A photographer repurposing blogs into Instagram carousels
- A nonprofit automatically generating seasonal posts 
- A small team managing multi-pillar content across weeks or months

### Need Help?
Join the n8n Discord or ask in the n8n Forum!
Happy Content Making ! 📅✨

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Code Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
