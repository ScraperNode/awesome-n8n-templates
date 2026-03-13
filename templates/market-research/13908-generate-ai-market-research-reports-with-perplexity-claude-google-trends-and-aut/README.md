# 📊 Generate AI market research reports with Perplexity, Claude, Google Trends, and Autype

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

![screenshotworkflow.png](fileId:4776)

Important: This workflow uses the [Autype](https://www.npmjs.com/package/n8n-nodes-autype) and [SerpAPI Official](https://www.npmjs.com/package/n8n-nodes-serpapi) community nodes and requires a self-hosted n8n instance.

Submit a simple form with your product name, industry, and description. The workflow automatically researches your market via Google Trends and Google Search (SerpAPI), conducts deep analysis with Perplexity AI (via OpenRouter), writes a structured report with Anthropic Claude (via OpenRouter), and renders a professionally styled PDF using Autype Extended Markdown. No manual competitor input required -- everything is discovered automatically.

## Who is this for?

Product managers, startup founders, strategists, and consultants who need quick market research reports for investor decks, board meetings, competitive positioning, or strategic planning. Instead of spending hours compiling data from multiple sources, this workflow automates the entire research-to-PDF pipeline from a single form submission.

**Concrete example:** A SaaS startup preparing for a Series A fundraise needs a market research report on the document automation space. They fill in their product name and industry, describe their product, and submit the form. In under two minutes they get a polished PDF with current market trends, auto-discovered competitor comparisons, SWOT analysis, and strategic recommendations -- ready to attach to their pitch deck.

## What this workflow does

When a user submits the form, the workflow sends parallel requests to Google Trends (12-month interest data) and Google Search (competitor discovery) via SerpAPI, and downloads Autype's extended markdown syntax reference. All data is merged and passed to an AI Research Agent powered by Perplexity Sonar Pro (via OpenRouter) for deep market and competitor analysis with real-time web citations. The research output is then handed to an AI Report Writer (Anthropic Claude via OpenRouter) that writes a structured market research report in Autype Extended Markdown. The markdown is rendered to a styled PDF via Autype's Render from Markdown operation, and the final report is saved to Google Drive.

## How it works

1. **Market Research Form** -- An n8n Form Trigger collects product name, industry, product description, and report language.
2. **Google Trends** -- SerpAPI Official node fetches 12 months of search interest data for the industry.
3. **Search Competitors** -- SerpAPI Google Search automatically discovers competitors and market leaders.
4. **Download Markdown Syntax** -- Fetches Autype's extended markdown syntax reference so the report writer knows all formatting options.
5. **Prepare Research Context** -- A Code node merges trends data, competitor search results, and syntax reference into a single context.
6. **AI Research Agent** -- An AI Agent with OpenRouter (Perplexity Sonar Pro) conducts deep market research: market overview, competitor profiles, trends, and product positioning.
7. **Prepare Report Input** -- A Code node combines the research output with the markdown syntax reference and form data.
8. **AI Report Writer** -- An AI Agent (Anthropic Claude via OpenRouter) writes the final report in Autype Extended Markdown. The prompt includes a title page template.
9. **Prepare Render Payload** -- A Code node cleans the AI output and sets title/filename.
10. **Render Report PDF** -- Autype renders the extended markdown to a professionally styled PDF with Open Sans font, heading hierarchy (28/22/18pt), automatic page breaks before h1/h2, chart color palette, header with company name and logo, footer with page numbers, and generous spacing.
11. **Save Report to Drive** -- The PDF is uploaded to Google Drive.

## Setup

1. Install community nodes via **Settings &gt; Community Nodes**: `n8n-nodes-autype` and `n8n-nodes-serpapi`.
2. Create an **Autype API credential** with your API key from [app.autype.com](https://app.autype.com). See [API Keys in Settings](https://docs.autype.com/getting-started/editor/settings#api-keys).
3. Create a **SerpAPI credential** with your API key from [serpapi.com](https://serpapi.com) (free tier: 250 searches/month).
4. Create **two OpenRouter API credentials** with your key(s) from [openrouter.ai](https://openrouter.ai). One is used for Perplexity Sonar Pro (research), the other for Anthropic Claude (report writing). You can use the same API key for both.
5. Create a **Google Drive OAuth2 credential** and connect your Google account.
6. Import this workflow and assign your credentials to each node.
7. Set `YOUR_FOLDER_ID` in the "Save Report to Drive" node to your target Google Drive folder.
8. Activate the workflow and open the form URL to generate a report.

**Note:** You need a self-hosted n8n instance to use the Community Nodes.

## Requirements

- Self-hosted n8n instance (community nodes are not available on n8n Cloud)
- Autype account with API key (free tier available)
- `n8n-nodes-autype` community node installed
- `n8n-nodes-serpapi` community node installed (verified)
- OpenRouter API key (for Perplexity Sonar Pro and Anthropic Claude models)
- SerpAPI account (free tier: 100 searches/month)
- Google Drive account with OAuth2 credentials (optional, can replace with other output)

## How to customize

- **Add more data sources:** Insert additional HTTP Request or SerpAPI nodes before the merge to pull from Google News, Google Scholar, or other engines.
- **Use a different research model:** Swap the OpenRouter Perplexity model for any other OpenRouter model (e.g. Gemini) or replace the sub-node entirely.
- **Use a different report writer:** Swap the Anthropic Claude model for OpenAI, Google Gemini, or any other OpenRouter-compatible model.
- **Customize header/footer:** Edit the `defaults` JSON in the Render Report PDF node to change the company name, logo URL, or footer text.
- **Customize title page:** Edit the title page template in the AI Report Writer's user prompt to change the logo, layout, or metadata fields.
- **Change report structure:** Edit the system prompt in the AI Report Writer node to add or remove sections, change the tone, or adjust the word count.
- **Customize PDF styling:** Edit the `defaults` JSON in the Render Report PDF node to change fonts, colors, spacing, and heading styles. See the [Autype defaults schema](https://docs.autype.com/api-reference/json-syntax/defaults) for all options.
- **Generate DOCX instead of PDF:** Change the output format in the Render Report PDF node from PDF to DOCX.
- **Schedule automatic reports:** Add a Schedule Trigger alongside the Form Trigger for recurring market monitoring.
- **Change output destination:** Replace the Google Drive node with Email (SMTP), S3, Slack, or any other n8n output node.
- **Add more languages:** Edit the dropdown options in the Market Research Form node.

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
