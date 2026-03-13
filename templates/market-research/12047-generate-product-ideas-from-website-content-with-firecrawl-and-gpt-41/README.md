# 📊 Generate product ideas from website content with FireCrawl and GPT-4.1

> ⚡ **60 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## AI Website Analyzer to Product Ideas with FireCrawl and GPT-4.1

This n8n template demonstrates how to use AI to analyze any website and generate product ideas or summaries based on the website's content and purpose.

Use cases are many: Try analyzing competitor websites, discovering product opportunities, understanding business models, or generating insights from landing pages!

### Good to know

- At time of writing, Firecrawl offers up to 500 free API calls. See [Firecrawl Pricing](https://www.firecrawl.dev/pricing) for updated info.
- OpenAI API costs vary by model. GPT-3.5 is cheaper while GPT-4 and above offer deeper analysis but cost more per request.

### How it works

1. We'll collect a website URL via a manual form trigger.
2. The URL is sent to the Firecrawl API, which deeply crawls and analyzes the website content.
3. Firecrawl returns the scraped data, including page structure, content, and metadata.
4. The scraped data is then sent to OpenAI's API with a custom prompt.
5. OpenAI generates an AI-powered summary analyzing what the website is doing, its purpose, and potential product ideas.
6. The final output is displayed or can be stored for further use.

### How to use

- The manual trigger node is used as an example, but feel free to replace this with other triggers such as webhook or even a form.
- You can analyze multiple URLs by looping through a list, but of course, the processing will take longer and cost more.

### Requirements

- Firecrawl API key (get free 500 calls at [https://firecrawl.dev](https://firecrawl.dev))
- OpenAI API key for AI analysis
- Valid website URLs to analyze

### Customizing this workflow

- Change the output format from HTML to JSON, Markdown, or plain text by editing the Firecrawl parameters.
- Modify the AI prompt to focus on specific aspects like pricing strategy, target audience, or UX analysis.
- Upgrade to GPT-4.1, GPT-5.1, or GPT-5.2 for more advanced and detailed analysis.
- Add a webhook trigger to analyze websites automatically from other apps or services.
- Store results in a database like Supabase or Google Sheets for tracking competitor analysis over time.

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
