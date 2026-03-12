# 📊 Real-time X post monitoring & auto-categorization with Airtop

> ⚡ **559 views** · 📊 [Market Research & Insights](../)

## Description

# Monitor X for Relevant Posts
## Use Case
This automation monitors X (formerly Twitter) search pages in real time and extracts high-signal posts that match your categories of interest. It’s ideal for community engagement, lead discovery, thought leadership tracking, or competitive analysis.

## What This Automation Does
Given a search URL and a list of categories, it:
- Logs into X using Airtop
- Opens the specified search URL
- Scrolls through the results
- Extracts up to 10 valid, English-language posts
- Filters and classifies each post by category (or marks as `[NA]` if unrelated)
- Returns the structured results as JSON

Input parameters:
- **airtop_profile** — An Airtop browser profile authenticated on X
- **x_url** — X search URL (e.g., `https://x.com/search?q=ai agents&f=live`)
- **relevant_categories** — Text-based list of categories to classify posts (e.g., "Web automation use cases", "Thought leadership")

Output:
A JSON array of posts, each with:
- `writer`
- `time`
- `text`
- `url`
- `category`

## How It Works
1. **Trigger**: This workflow is triggered by another workflow (e.g., a community engagement pipeline).
2. **Input Setup**: Accepts the Airtop profile, search URL, and categories to use for classification.
3. **Session**: Starts a browser session using the Airtop profile.
4. **Window Navigation**: Opens the provided X search URL.
5. **Extraction**: Scrapes up to 10 posts with `/status/` in the URL and text in English.
6. **Classification**: Each post is labeled with a category if relevant, or `[NA]` otherwise.
7. **Filtering**: Discards `[NA]` posts.
8. **Output**: Returns the list of classified posts.

## Setup Requirements
1. Airtop profile with an active X login.
2. Airtop API key connected in n8n.
3. List of category definitions to guide post classification (used in prompt).

## Next Steps
- **Feed into Engagement Workflows**: Pass the results to workflows that reply, retweet, or track posts.
- **Use in Slack Alerts**: Push classified posts into Slack channels for review and reaction.
- **Customize Classifier**: Refine the categorization logic to include sentiment or company mentions.

Read more about [Monitoring X for Relevant Posts](https://www.airtop.ai/automations/monitor-x-for-relevant-posts-n8n)

## 🔗 Nodes Used

Execute Workflow Trigger, Filter, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
