# 📱 Scrape blog articles into AI-generated LinkedIn posts with GPT-4o & human review

> ⚡ **2,279 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![wflowpreview.JPG](fileId:2061)
Auto-detect news from n8n and turn into a human-approved LinkedIn post.
**gotoHuman** is used to keep a human in the loop. There you can manually edit the AI draft of the post or request to regenerate it.

## How it works
1. The workflow is triggered each day to fetch the latest version of `https://blog.n8n.io`.
2. It then fetches each article, checks if it was published in the last 24 hours and uses an LLM to summarize it.
3. An LLM then drafts a related LinkedIn post which is sent to **gotoHuman** for approval. In gotoHuman, the reviewer can manually edit it or ask to regenerate it with the option to even edit the prompt (Retries loop back to the _AI Draft LinkedIn Post_ node)
![gthpreview.JPG](fileId:2060)
![gthchat.JPG](fileId:2062)
4. Approved Posts are automatically published to LinkedIn

## How to set up

1. **Most importantly, install the gotoHuman node before importing this template!**
(Just add the node to a blank canvas before importing)
2. Set up your credentials for gotoHuman, OpenAI, and LinkedIn
3. In gotoHuman, select and create the pre-built review template "Blog scraper agent" or import the ID: `sMxevC9tSAgdfWsr6XIW`
4. Select this template in the gotoHuman node

## Requirements

You need accounts for
- gotoHuman (human supervision)
- OpenAI (summary, draft)
- LinkedIn

## How to customize

- Change the blog URL to monitor. Adapt to its' HTML structure
- Provide the _AI Draft LinkedIn Post_ with examples of previous posts so it picks up your writing style (consider adding [gotoHuman's dataset of approved examples](https://docs.gotohuman.com/training-data))
- Use the workflow to target other publications, like your newsletter, blog or other socials

## 🔗 Nodes Used

HTTP Request, LinkedIn, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
