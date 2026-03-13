# 🎬 Generate social media hashtags from Twitter & YouTube trends with Mistral AI

> ⚡ **908 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

##  Description  
This workflow automatically collects daily trending topics from Twitter and YouTube, filters them for relevance, and uses an AI model (such as Mistral Cloud or another OpenAI-compatible API) to generate engaging social media hashtags. The final results, including source platform and date, are saved into a connected Google Sheet for easy access, tracking, or team collaboration.

Ideal for content creators, marketers, and social media managers, this automation eliminates the manual effort of trend research and hashtag writing by combining real-time scraping with LLM-powered generation. The result is a scalable, daily strategy tool to stay aligned with what’s trending across major platforms.

---

##  How It Works  

1. **Daily Trigger**  
   - Starts the workflow automatically on a daily schedule.

2. **Trend Scraping**  
   - Scrapes current trending content from Twitter and YouTube using the [Crawl and Scrape community node](https://www.npmjs.com/package/n8n-nodes-crawl-and-scrape).

3. **Filtering & Slicing**  
   - Removes irrelevant or duplicate entries and limits each platform’s list to top-performing trends.

4. **Merge Trends**  
   - Combines Twitter and YouTube trends into a single dataset.

5. **AI Hashtag Generation**  
   - Sends each trend topic to an AI model to generate relevant hashtags.

6. **Output to Google Sheets**  
   - Loops through AI results and writes them to a Google Sheet, including trend, platform, hashtags, and timestamp.

---

##  Setup Instructions  
**Estimated time:** 10–15 minutes  

### Prerequisites  
-  A self-hosted instance of n8n (required for community nodes)  
-  API key for Mistral Cloud or any OpenAI-compatible LLM  
-  Google Sheets account connected via OAuth2 credentials  
-  Twitter and YouTube trend URLs (or scraping logic for target regions)

---

#### Template Image:

![Screenshot 339.png](fileId:1842)

#### Example: Crawl and Scrape Node for Twitter Trends
You can use the following configuration in the Crawl and Scrape node to extract Twitter trends from [Trends24]((https://trends24.in/))

```
{
  "parameters": {
    "url": "https://trends24.in/",
    "selectors": [
      {
        "label": "Twitter Trends",
        "selector": ".trend-card__list li a",
        "type": "text"
      }
    ]
  },
  "name": "Scrape Twitter Trends",
  "type": "n8n-nodes-crawl-and-scrape.crawlAndScrape",
  "typeVersion": 1,
  "position": [300, 200]
}

```


###  Google Sheet Column Format  
```plaintext
Column A: Generated Hashtags![Screenshot 339.png](fileId:1842)

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, Structured Output Parser, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
