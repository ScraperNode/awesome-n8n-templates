# 🔧 Send daily Malaysian weather alerts with Perplexity AI, Firecrawl and Telegram

> ⚡ **50 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Automated Malaysian Weather Alerts with Perplexity AI, Firecrawl and Telegram

This n8n template automates daily weather monitoring by fetching official government warnings and searching for related news coverage, then delivering comprehensive reports directly to Telegram.

Use cases include monitoring severe weather conditions, tracking flood warnings across Malaysian states, staying updated on weather-related news, and receiving automated daily weather briefings for emergency preparedness.

### Good to know

- Firecrawl free tier allows limited scraping requests per hour. Consider the 3-second interval between requests to avoid rate limits.
- OpenAI costs apply for content summarization - GPT-4.1 mini balances quality and affordability.
- After testing multiple AI models (GPT, Gemini), **Perplexity Sonar Pro Search proved most effective** for finding recent, relevant weather news from Malaysian sources.
- The workflow focuses on major Malaysian news outlets like Utusan, Harian Metro, Berita Harian, and Kosmo.

### How it works

1. Schedule Trigger runs daily at 9 AM to fetch weather warnings from Malaysia's official data.gov.my API.
2. JavaScript code processes weather data to extract warning types, severity levels, and affected locations.
3. Search queries are aggregated and combined with location information.
4. Perplexity Sonar Pro AI Agent searches for recent news articles (within 3 days) from Malaysian news channels.
5. URLs are cleaned and processed one by one through a loop to manage API limits.
6. Firecrawl scrapes each news article and extracts summaries from main content.
7. All summaries and source URLs are combined and sent to OpenAI for final report generation.
8. The polished weather report is delivered to your Telegram channel in English.

### How to use

- The schedule trigger is set for 9 AM but can be adjusted to any preferred time.
- Replace the Telegram chat ID with your channel or group ID.
- The workflow automatically filters out "No Advisory" warnings to avoid unnecessary notifications.
- Modify the search query timeout and batch processing based on your API limits.

### Requirements

- OpenAI API key (get one at [https://platform.openai.com](https://platform.openai.com))
- Perplexity API via OpenRouter (get access at [https://openrouter.ai](https://openrouter.ai))
- Firecrawl API key (get free tier at [https://firecrawl.dev](https://firecrawl.dev))
- Telegram Bot token and channel/group ID

### Customizing this workflow

- **Expand news sources**: Modify the AI Agent prompt to include additional Malaysian news outlets or social media sources.
- **Language options**: Change the final report language from English to Bahasa Malaysia by updating the "Make a summary" system prompt.
- **Alert filtering**: Adjust the JavaScript code to focus on specific warning types (e.g., only severe warnings or specific states).
- **Storage integration**: Connect to Supabase or Google Sheets to maintain a historical database of weather warnings and news.
- **Multi-channel delivery**: Add more notification nodes to send alerts via email, WhatsApp, or SMS alongside Telegram.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenAI, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
