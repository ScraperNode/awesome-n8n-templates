# 📊 Track AI search rankings from Perplexity via BrowserAct to Google Sheets and Slack

> ⚡ **12 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Track AI search rankings from Perplexity to Google Sheets and Slack

This workflow automates Generative Engine Optimization (GEO) tracking by monitoring how your company appears in AI search results. It generates strategic queries, simulates searches on AI engines like Perplexity via BrowserAct, logs the responses for historical tracking, and delivers a graded performance report to Slack.

## Target Audience
SEO specialists, brand managers, marketing directors, and growth teams focusing on AI visibility and reputation management.

## How it works
1. **Initialize Tracking**: The workflow runs on a schedule, creates a new dated tab in your **Google Sheet**, and fetches your company details (Name and Category).
2. **Generate Strategy**: An **AI Agent** (using OpenRouter/Gemini) generates three specific search queries:
    * *Discovery*: Broad category search (e.g., "Best CRM for startups").
    * *Comparison*: Direct competitor face-off (e.g., "Pipedrive vs Salesforce").
    * *Validation*: Specific fact-checking (e.g., "Is Pipedrive good for visual pipelines?").
3. **Simulate Searches**: **BrowserAct** executes these queries on an AI answer engine (like Perplexity) to capture the real-time AI response.
4. **Log Data**: The workflow loops through the results and saves the raw AI answers to the daily **Google Sheet**.
5. **Analyze & Report**: A second **AI Agent** reviews the saved data, grades the visibility (Green/Yellow/Red), and sends a summarized "GEO Scorecard" to **Slack**.

## How to set up
1. **Configure Credentials**: Connect your **Google Sheets**, **Slack**, **BrowserAct**, and **OpenRouter** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **GEO Results & Rank Tracking** template is saved in your BrowserAct account.
3. **Setup Google Sheet**: Create a Google Sheet with a tab named `Main Sheet`. Add headers: `Company name` and `Worknig category`. Fill in row 2 with your details.
4. **Select Spreadsheet**: Open the **Create sheet**, **add headers**, **Get Company data**, **Retrieve Stored Data**, and **Store Extracted Data** nodes to select your specific spreadsheet.
5. **Configure Notification**: Open the **Send Message to Team on Slack** node and select your target Slack channel.

## Google Sheet Headers
**Tab 1: Main Sheet** (Input)
* Company name
* Working Category

**Tab 2+: [Date]** (Generated automatically by the workflow)
* Search
* Result

## Requirements
* **BrowserAct** account with the **GEO Results & Rank Tracking** template.
* **Google Sheets** account.
* **Slack** account.
* **OpenRouter** account (or compatible LLM credentials).

## How to customize the workflow
1. **Change the AI Engine**: Modify the **BrowserAct** template to search on ChatGPT or Google Gemini instead of Perplexity.
2. **Adjust Grading Logic**: Update the system prompt in the **Company data analyzer** node to change how the AI scores the results (e.g., focus more on sentiment than ranking).
3. **Expand Reporting**: Add an **Email** node to send a weekly summary of the Google Sheet data to stakeholders.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Master GEO: Track Your AI Search Rankings with n8n & Perplexity 🌍](https://youtu.be/intc38qZ-68)

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
