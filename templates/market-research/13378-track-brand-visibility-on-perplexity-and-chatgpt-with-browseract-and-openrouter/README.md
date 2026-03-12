# 📊 Track brand visibility on Perplexity and ChatGPT with BrowserAct and OpenRouter

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

## Description

# Track brand visibility on Perplexity and ChatGPT with BrowserAct & OpenRouter

## Introduction

This workflow acts as a "Generative Engine Optimization" (GEO) tracker. It automatically monitors how your brand is being recommended on AI-powered search engines by simulating real user queries on Perplexity and ChatGPT, analyzing the responses for visibility and sentiment, and reporting the findings to Slack.

## Target Audience

Brand managers, SEO specialists, and marketing teams who need to monitor their "share of voice" in AI search results.

## How it works

1. **Scheduling:** A **Weekly Trigger** initiates the workflow to ensure regular monitoring of your brand's presence.
2. **Context Setup:** A **Set** node defines the target `Brand` name and a brief `Description` of the value proposition.
3. **Query Generation:** An **AI Agent** (using OpenRouter/GPT-4o) reads the brand details and generates two distinct search queries:
* **Research Query:** Targeted at Perplexity (e.g., "Top rated tools for X in 2025").
* **Conversational Query:** Targeted at ChatGPT (e.g., "I need advice on X, what do you recommend?").


4. **Parallel Execution:** The workflow splits into two parallel paths to maximize efficiency.
5. **Data Extraction:** Two separate **BrowserAct** nodes execute the generated queries on **Perplexity** and **ChatGPT** respectively.  They scrape the full text of the AI's response.
6. **Synchronization:** A **Merge** node waits for both scraping tasks to complete before proceeding.
7. **Analysis:** A second **AI Agent** acts as a "GEO Analyst." It compares the scraped answers against your Brand Name to determine if the brand was "Visible" (recommended), "Invisible" (ignored), or "Hallucinated." It also grades the sentiment.
8. **Reporting:** A **Slack** node posts a formatted report detailing the visibility status on both platforms.

## How to set up

1. **Configure Credentials:** Connect your **BrowserAct**, **OpenRouter**, and **Slack** accounts in n8n.
2. **Prepare BrowserAct:** Ensure the **AI Search Visibility Tracker (Perplexity & ChatGPT)** template is saved in your BrowserAct account.
3. **Define Brand:** Open the **Add Brand & Description** node. Update the `Brand` field with your company name and the `Description` field with your core offering.
4. **Select Slack Channel:** Open the **Send team update** node and select the channel where reports should be posted.

## Requirements

* **BrowserAct Account:** Required for scraping the AI platforms. Template: **AI Search Visibility Tracker (Perplexity & ChatGPT)**.
* **OpenRouter Account:** Required for generating queries and analyzing the sentiment of the results.
* **Slack Account:** Required for receiving the final visibility report.

## How to customize the workflow

1. **Add More Engines:** Clone the BrowserAct node to add checks for **Google Gemini** or **Claude**, then connect them to the Merge node.
2. **Track Competitors:** Modify the **Add Brand & Description** node to input a competitor's name instead of your own to see how AI recommends them.
3. **Store History:** Add a **Google Sheets** node before the Slack step to log the "Sentiment Score" and "Visibility Status" over time for trend analysis.

## Need Help?

* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)


---
### Workflow Guidance and Showcase Video

* #### [AI SEO Reporting: Automated Brand Mentions Tracking for Teams](https://youtu.be/lH-uMJYQIJ4)

## 🔗 Nodes Used

Slack, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
