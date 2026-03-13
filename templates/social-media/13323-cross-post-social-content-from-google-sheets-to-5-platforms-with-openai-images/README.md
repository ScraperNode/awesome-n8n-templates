# 📱 Cross-post social content from Google Sheets to 5 platforms with OpenAI images

> ⚡ **237 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### This n8n template shows how to fully automate your social media workflow from Google Sheets to X, Threads, LinkedIn, Facebook, and Instagram — with AI-generated visuals.

Instead of manually writing, designing, and posting content, this workflow turns a single Google Sheet row into multi-platform posts plus a custom AI image that matches your message.

You write once. n8n posts everywhere.

### How it works
* A scheduled trigger checks your Google Sheet for content marked **“Ready To Post.”**
* The post text is pulled from Sheets and sent to all text-only platforms (X and Threads).
* At the same time, an AI agent analyzes your post and generates a high-quality image prompt.
* GPT-Image creates a custom visual based on that prompt.
* The image is uploaded to ImgBB to create a shareable URL.
* That image + your caption are automatically posted to LinkedIn, Facebook, and Instagram.
* Finally, your Google Sheet is updated so you never repost the same content twice.

### How to use
1. Add your posts to Google Sheets in the **Content** column.
2. Set **Status = Ready To Post** when you want it published.
3. Make sure all platform credentials are connected in n8n.
4. Turn the workflow on and let it run automatically.

### What you get
* Hands-free posting to 5 platforms  
* AI-generated visuals for every post  
* Zero manual design work  
* Built-in error handling  
* No duplicate posts  

### Requirements
* Google Sheets access  
* X (Twitter) account  
* Threads account  
* LinkedIn account  
* Facebook & Instagram Page access  
* ImgBB account  
* OpenAI credentials for image generation  

### Need help?
Ask in the [n8n Forum](https://community.n8n.io/) or shoot me a DM on [LinkedIn](https://www.linkedin.com/in/vincentthenguyen/)

Happy automating 🚀

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, X (Formerly Twitter), LinkedIn, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
