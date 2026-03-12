# 📊 Ultimate scraper workflow for n8n

> ⚡ **54,390 views** · 📊 [Market Research & Insights](../)

## Description

## What this template does
The Ultimate Scraper for n8n uses Selenium and AI to retrieve any information displayed on a webpage. You can also use session cookies to log in to the targeted webpage for more advanced scraping needs.

⚠️ Important: This project requires specific setup instructions. Please follow the guidelines provided in the GitHub repository: n8n Ultimate Scraper Setup : https://github.com/Touxan/n8n-ultimate-scraper/tree/main.

The workflow version on n8n and the GitHub project may differ; however, the most up-to-date version will always be the one available on the GitHub repository : https://github.com/Touxan/n8n-ultimate-scraper/tree/main.

## How to use 
Deploy the project with all the requirements and request your webhook.

**Example of request**:
```bash
curl -X POST http://localhost:5678/webhook-test/yourwebhookid \
-H "Content-Type: application/json" \
-d '{
  "subject": "Hugging Face",
  "Url": "github.com",
  "Target data": [
    {
      "DataName": "Followers",
      "description": "The number of followers of the GitHub page"
    },
    {
      "DataName": "Total Stars",
      "description": "The total numbers of stars on the different repos"
    }
  ],
  "cookie": []
}'
```

Or to just scrap a url :
```bash
curl -X POST http://localhost:5678/webhook-test/67d77918-2d5b-48c1-ae73-2004b32125f0 \
-H "Content-Type: application/json" \
-d '{
  "Target Url": "https://github.com",
  "Target data": [
    {
      "DataName": "Followers",
      "description": "The number of followers of the GitHub page"
    },
    {
      "DataName": "Total Stars",
      "description": "The total numbers of stars on the different repo"
    }
  ],
  "cookies": []
}'
```

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI Chat Model, Convert to File, OpenAI, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
