# 🎬 Generate weekly Instagram Reels ideas from Google News with OpenAI and Notion

> ⚡ **196 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow automatically generates weekly Instagram Reel content ideas for a D2C brand using fresh Google News trends.

In this example, the workflow is configured for a skincare brand called GlowCare, but it can be reused for any D2C brand by simply changing the RSS URL and updating the brand details inside the AI prompt.

Any D2C brand can use this workflow by simply changing the Google News RSS URL based on their niche.

For example:

- Skincare brand → skincare trends, skincare routine, skincare tips
- Fashion brand → fashion trends, outfit ideas, styling tips
- Fitness brand → fitness trends, workout tips, health routines
- Food brand → food trends, recipes, healthy snacks
- Haircare brand → haircare tips, hair growth, hair routine

The AI prompt can also be slightly updated with the brand name, product category, target audience, and main product.

It runs every Monday at 8 AM, fetches recent niche-related articles from Google News RSS, selects the top 7 trend articles, combines them into one dataset, and sends the data to an AI model.

The AI then creates 7 ready-to-use Instagram Reel ideas with posting days, hooks, captions, hashtags, reel formats, and explanations.

Finally, the generated weekly content plan is saved directly into a Notion content calendar.

---

# Node-by-Node Explanation

## 1. Weekly Content Schedule

This node automatically starts the workflow every week.

### How It Works

The Schedule Trigger is configured to run the workflow weekly.

In this workflow, it runs every Monday at 8 AM.

This means the workflow can generate a fresh weekly content plan without any manual action.


---

## 2. Get Trends

This node collects recent trend articles from Google News RSS.

### How It Works

The RSS Feed Read node reads data from a Google News RSS search URL.

In this workflow, the RSS URL is configured for a skincare brand and searches for topics like:

- Skincare trends
- Skincare routine
- Skincare tips

However, this workflow can be used for any D2C brand by changing only the RSS URL keywords.

For example, a fashion brand can replace the RSS search terms with fashion-related keywords, while a fitness brand can use workout or health-related keywords.

### Purpose

This gives the workflow fresh niche-specific trend data that can be used as inspiration for content ideas.

---

## 3. Top 7 Trends

This node keeps only the first 7 trend articles from the RSS results.

### How It Works

The RSS node may return many articles.

The Limit node reduces the number of items and allows only 7 articles to continue in the workflow.

### Purpose

This keeps the workflow focused and prevents too much unnecessary trend data from being sent to the AI model.

---

## 4. Combine Trends

This node combines all selected trend articles into one single field.

### How It Works

Normally, n8n treats every RSS article as a separate item.

The Aggregate node collects all 7 article items and stores them together inside one field called:

`trends`

### Purpose

This makes it easier to send all trend articles together to the AI node in one clean input.

---

## 5. Generate 7 Instagram Reel Ideas

This node uses AI to turn the skincare trend data into content ideas.

### How It Works

The Basic LLM Chain receives the combined trend data from the previous node.

It sends that data to the OpenAI Chat Model with a detailed prompt.

The prompt tells the AI to act as a senior social media strategist for a D2C skincare brand called GlowCare.

The AI is asked to generate exactly 7 Instagram Reel ideas.

For each idea, it creates:

- Posting Day
- Content Idea
- Reel Hook
- Suggested Caption
- Suggested Hashtags
- Reel Format
- Why This Works

The output is generated in clean markdown format.

---

## 6. Save Ideas to Content Calendar

This node saves the AI-generated content plan into a Notion database.

### How It Works

The Notion node creates a new page inside the selected Notion content calendar database.

The page title is generated dynamically using the current date.

Example title:

`Weekly Skincare Content Ideas - 19 May 2026`

The node also fills the Date property with the current date.

The AI output is saved into Notion as text blocks.

To avoid Notion’s text block character limit, the content is split using:

`$json.text.slice(0, 1900)`

and

`$json.text.slice(1900, 3800)`

### Purpose

This node stores the final weekly content ideas in a structured content calendar so the team can review and use them later.

---

# Final Output

At the end of the workflow, a new Notion page is created with 7 Instagram Reel ideas.

Each idea includes:

- Posting day
- Content idea
- Hook
- Caption
- Hashtags
- Reel format
- Reason why the idea works

This gives a skincare brand a complete weekly Instagram Reel plan based on fresh trends.

## 🔗 Nodes Used

RSS Read, Notion, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
