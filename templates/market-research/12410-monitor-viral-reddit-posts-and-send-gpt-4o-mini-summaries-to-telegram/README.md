# 📊 Monitor viral Reddit posts and send GPT-4o-mini summaries to Telegram

> ⚡ **269 views** · 📊 [Market Research & Insights](../)

## Description

## Who's it for

This workflow is perfect for:

- Content creators who need to stay on top of trending topics
- Marketers tracking industry discussions and competitor mentions
- Community managers monitoring relevant subreddits
- Researchers gathering trending content in specific niches
- Anyone who wants curated Reddit updates without manual browsing

## What it does

This automated workflow:

- Monitors multiple subreddits for viral posts daily
- Filters posts based on engagement metrics (upvotes and recency)
- Generates concise AI summaries of trending content
- Delivers formatted updates directly to your Telegram chat
- Runs completely hands-free once configured

## How it works

**Step 1: Configuration & Scheduling**
- Triggers daily at 8 AM (customizable)
- Loads your configured subreddit niches and Telegram settings

**Step 2: Data Collection**
- Loops through each subreddit in your niche list
- Fetches the 50 newest posts from each subreddit
- Extracts key data: title, URL, upvotes, timestamp, subreddit name

**Step 3: Smart Filtering**
- Applies viral post criteria:
  - Posts with 500+ upvotes, OR
  - Posts with 70+ upvotes created within the last 24 hours
- Ensures only high-engagement content passes through

**Step 4: AI Summarization**
- Aggregates all filtered posts into a single batch
- Sends to GPT-4o-mini for analysis
- Generates concise 100-200 word summaries
- Formats output for Telegram markdown

**Step 5: Delivery**
- Sends all summaries to your Telegram chat
- Includes post links and engagement metrics
- Delivers in a clean, readable format

## Setup steps

**1. Configure Reddit credentials**
- Connect your Reddit OAuth2 API credentials in the "Get Reddit Viral Posts" node
- Ensure you have API access enabled on your Reddit account

**2. Configure Telegram credentials**
- Add your Telegram bot token in the "Send to Telegram" node
- Get your chat ID by messaging your bot and checking updates

**3. Customize your niches**
- Open the "Workflow Configuration" node
- Edit the niches array with your target subreddits
- Default niches: technology, programming, science, gaming

**4. Set your Telegram chat ID**
- Replace the default chat ID (7917193308) in "Workflow Configuration"
- Use your personal chat ID or group chat ID

**5. Adjust the schedule (optional)**
- Modify the "Daily 8 AM Trigger" to your preferred time
- Change frequency if you want multiple updates per day

**6. Test before activating**
- Run the workflow manually using the "Test workflow" button
- Verify summaries arrive in Telegram correctly
- Check that filtering logic works as expected

## Requirements

**Required credentials:**
- Reddit OAuth2 API access (free)
- Telegram bot token (free via @BotFather)
- OpenAI API key for GPT-4o-mini (paid)

**Platform requirements:**
- n8n instance (self-hosted or n8n Cloud)
- Active internet connection
- Sufficient API rate limits for your usage

**Technical knowledge:**
- Basic understanding of n8n workflows
- Ability to generate API credentials
- Familiarity with Telegram bots (helpful but not required)

## How to customize

**Adjust subreddit monitoring:**
- Add or remove subreddits in the niches array
- Format: `["subreddit1", "subreddit2", "subreddit3"]`
- Example: `["machinelearning", "datascience", "artificial"]`

**Modify viral post criteria:**
- Edit the "Filter" node conditions
- Change upvote thresholds (default: 500+ or 70+ within 24h)
- Adjust time window for recency checks

**Customize AI summaries:**
- Update the system prompt in "AI Summarizer" node
- Change summary length (default: 100-200 words)
- Modify tone, style, or focus areas
- Switch to different OpenAI models if needed

**Change scheduling:**
- Modify trigger time in "Daily 8 AM Trigger"
- Options: hourly, twice daily, weekly, custom cron
- Consider API rate limits when increasing frequency

**Adjust data collection:**
- Change the limit parameter in "Get Reddit Viral Posts"
- Default: 50 posts per subreddit
- Higher limits = more comprehensive but slower execution

**Enhance filtering logic:**
- Add additional criteria (comments count, awards, etc.)
- Create category-specific thresholds
- Filter by post type (text, link, image)

**Format Telegram output:**
- Modify parse_mode in "Send to Telegram" node
- Options: Markdown, HTML, or plain text
- Customize message structure and styling

## 🔗 Nodes Used

Telegram, Reddit, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
