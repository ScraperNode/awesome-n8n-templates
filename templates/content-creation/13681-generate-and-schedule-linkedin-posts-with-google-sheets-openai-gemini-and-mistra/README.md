# 🎬 Generate and schedule LinkedIn posts with Google Sheets, OpenAI, Gemini and Mistral

> ⚡ **14 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?
This workflow is designed for content creators, social media managers, digital marketers, and business owners who want to automate their LinkedIn content creation and publishing process. It's especially valuable for those who struggle with consistently creating engaging content or want to maintain a regular posting schedule without manual effort.

## What this Workflow Does / Key Features
- Automatically runs every 6 hours to generate and post LinkedIn content
- Retrieves content topics from a Google Sheet that haven't been processed yet
- Uses AI to research trending topics and create detailed content frameworks
- Generates engaging LinkedIn post content based on those topics
- Creates professional images to accompany posts using AI
- Develops optimized hashtags to improve post visibility
- Posts the complete content package to both LinkedIn profiles and company pages
- Updates the Google Sheet to track which topics have been processed

## Requirements
- Google Sheets OAuth2 API credentials for accessing your content spreadsheet
- LinkedIn OAuth2 API credentials for posting to profiles and pages
- OpenAI API credentials for content generation and image creation
- Google Gemini (PaLM) API credentials for AI processing
- Mistral Cloud API credentials for trend analysis
- A Google Sheet with specific columns: SL, Topic, Status, row_number

## Workflow Components Explained
- **Schedule Trigger**: Automatically starts the workflow every 6 hours
- **Get row(s) in sheet**: Retrieves topics from your Google Sheet that haven't been processed
- **Loop Over Items**: Processes topics one at a time to avoid overwhelming the system
- **Content topic generator**: Creates detailed content topics with titles, rationale, and hooks
- **AI Agent Tool**: Gathers trending topics from external sources
- **Content creator**: Writes the actual LinkedIn post content based on the topic
- **OpenAI**: Creates images to accompany the LinkedIn posts
- **SEO**: Generates relevant hashtags for the LinkedIn posts
- **Merge**: Combines the post content, image, and hashtags into a single package
- **LinkedIn page & LinkedIn profile**: Posts the content to both a LinkedIn company page and personal profile
- **Update row in sheet**: Marks the processed topic as "checked" in the Google Sheet

## Support & Help
- For n8n workflow questions: [n8n Community](https://community.n8n.io)
- For LinkedIn API issues: [LinkedIn Developer Portal](https://developer.linkedin.com/)
- For Google Sheets integration: [Google Sheets API Documentation](https://developers.google.com/sheets/api)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, LinkedIn, Schedule Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
