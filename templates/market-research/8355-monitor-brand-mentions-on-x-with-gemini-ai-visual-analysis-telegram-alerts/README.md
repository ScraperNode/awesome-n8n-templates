# 📊 Monitor brand mentions on X with Gemini AI visual analysis & Telegram alerts

> ⚡ **174 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automates brand monitoring on X by analyzing both the text and the images in posts. It uses multi-modal AI to score brand relevance, filters out noise, logs important mentions in Airtable, and sends real-time alerts to a Telegram group for high-priority posts.

## What it does

Traditional brand monitoring tools often miss the most authentic user content because they only track text. They can't "see" your logo in a photo or your product featured in a video without a direct keyword mention.

This workflow acts as an AI agent that overcomes this blind spot. It finds mentions of your brand on X and then uses **Google Gemini**'s multi-modal capabilities to perform a comprehensive analysis of both the text and any attached images. This allows it to understand the full context of a mention, score its relevance to your brand, and take the appropriate action, creating a powerful "visual intelligence" system.

## How it works

The workflow runs on a schedule to find, analyze, and triage brand mentions.

1.  **Get New Tweets:** The workflow begins by using an **Apify** actor to scrape X for recent posts based on a defined set of search terms (e.g., `Tesla OR $TSLA`). It then filters these results to find unique mentions not already processed.
2.  **Check for Duplicates:** It cross-references each found tweet with an **Airtable** base to ensure it hasn't been analyzed before, preventing duplicate work.
3.  **Analyze Post Content:** For each new, unique post, the workflow performs two parallel analyses using **Google Gemini**:
    * **Analyze the Photos:** The AI examines the images in the post to describe the scene, identify logos or products, and determine the visual mood.
    * **Analyze the Text:** A separate AI call analyzes the text of the post to understand its context and sentiment.
4.  **Final Relevance Check:** A "Head Strategist" AI node receives the outputs from both the visual and text analyses. It synthesizes this information to assign a final **brand relevance score** from 1 to 10.
5.  **Triage and Action:** Based on this score, the workflow automatically triages the post:
    * **High Relevance (Score &gt; 7):** The post is logged in the Airtable base, and an instant, detailed alert is sent to a **Telegram** monitoring group.
    * **Medium Relevance (Score 4-7):** The post is quietly logged in Airtable for later strategic review.
    * **Low Relevance (Score &lt; 4):** The post is ignored, effectively filtering out noise.

## Setup Instructions

To get this workflow running, you will need to configure your Airtable base and provide credentials for Apify, Google, and Telegram.

### Required Credentials

1.  **Apify:** You will need an Apify API Token to run the X scraper.
2.  **Airtable:** You will need Airtable API credentials to connect to your base.
3.  **Google AI:** You will need credentials for the Google AI APIs to use the Gemini models.
4.  **Telegram:** You will need a Bot Token and the Chat ID for the channel where you want to receive high-relevance alerts.

Of course. Based on the `Config` node parameters you provided, the setup process is much more centralized. Here is the corrected and rewritten "Step-by-Step Configuration" section.

Of course. Here is the rewritten "Step-by-Step Configuration" section with the link to the advanced search documentation.

### Step-by-Step Configuration

1.  **Set up Your Airtable Base:** Before configuring the workflow, create a new table in your Airtable base. For the workflow to function correctly, this table must contain fields to store the analysis results. Create fields with the following names: `postId`, `postURL`, `postText`, `postDateCreated`, `authorUsername`, `authorName`, `sentiment`, `relevanceScore`, `relevanceReasoning`, `mediaPhotosAnalysis`, and `status`. Once the table is created, have your **Base ID** and **Table ID** ready to use in the `Config` node.

2.  **Edit the `Config` Node:** The majority of the setup is handled in the first `Config` node. Click on it and edit the following parameters in the "Expressions" tab:
    * `searchTerms`: Replace the example with the keywords, hashtags, and accounts you want to monitor. The field supports advanced search operators for complex queries. For a full list of available parameters, see the [Twitter Advanced Search documentation](https://github.com/igorbrigadir/twitter-advanced-search).
    * `airtableBaseId`: Paste your Airtable Base ID here.
    * `airtableTableId`: Paste your Airtable Table ID here.
    * `lang`: Set the two-letter language code for the posts you want to find (e.g., "en" for English).
    * `min_faves`: Set the minimum number of "favorites" a post should have to be considered.
    * `tweetsToScrape`: Define the maximum number of posts the scraper should find in each run.
    * `actorId`: This is the specific Apify actor for scraping X. You can leave this as is unless you intend to use a different one.

3.  **Configure the Telegram Node:** In the final node, "Send High Relevance Posts to Monitoring Group", you need to manually set the destination for the alerts.
    * Enter the **Chat ID** for your Telegram group or channel.

## How to Adapt the Template

This workflow is a powerful framework that can be adapted for various monitoring needs.

* **Change the Source:** Replace the **Apify** node with a different trigger or data source. You could monitor Reddit, specific RSS feeds, or a news API for mentions.
* **Customize the AI Logic:** The core of this workflow is in the AI prompts. You can edit the prompts in the **Google Gemini** nodes to change the analysis criteria. For example, you could instruct the AI to check for specific competitor logos, analyze the sentiment of comments, or identify if the post is from an influential account.
* **Modify the Scoring:** Adjust the logic in the "Switch" node to change the thresholds for what constitutes a high, medium, or low-relevance post to better fit your brand's needs.
* **Change the Actions:** Replace the **Telegram** node with a different action. Instead of sending an alert, you could:
    * Create a ticket in a customer support system like **Zendesk** or **Jira**.
    * Send a summary email to your marketing team.
    * Add the post to a content curation tool or a social media management platform.

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
