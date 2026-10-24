# 📊 Analyze Facebook post comment sentiment with OpenAI, Google Sheets, and Gmail

> ⚡ **122 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow fetches comments from a Facebook Page post via the Facebook Graph API, classifies each comment’s sentiment with OpenAI, stores results in Google Sheets, and emails a sentiment breakdown summary via Gmail.

## How it works
1. Runs manually to load configuration values and fetch the target Facebook post details.
2. Pulls comments from the Facebook Graph API in reverse-chronological order and paginates through comment pages up to the configured maximum.
3. For each fetched comment page, re-invokes the workflow to batch-process the comments passed in as input.
4. Splits the page into individual comments, sends each comment to OpenAI to classify sentiment into the configured categories, and throttles requests with a short wait.
5. Appends or updates each comment (post ID, comment ID, text, sentiment) in Google Sheets using the comment ID as the deduplication key.
6. Reads all stored rows for the post from Google Sheets, aggregates sentiment counts, and emails the summary report to the configured recipient using Gmail.

## Setup
1. Add Facebook Graph API credentials and ensure your access token has permission to read the Page post and its comments.
2. Add an OpenAI API credential and set the model name you want to use in the configuration.
3. Add a Google Sheets OAuth connection, create/select a spreadsheet tab, and ensure it has columns POST ID, COMMENT ID, COMMENT, and SENTIMENT.
4. Add a Gmail OAuth connection and set the recipient email address for the summary report in the configuration.
5. Fill in the Configuration values (Facebook post ID, spreadsheet ID, sheet name, batch size, wait seconds, and max pages) and ensure the self-invoked workflow reference points to this saved workflow.

## Additional info
# Analyze Facebook post comments sentiment with OpenAI
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Analyze-Facebook-post-comments-sentiment-with-OpenAI-and-Google-Sheets-3a03d6550fd981f6877ffb117c95a816)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, Execute Sub-workflow, Facebook Graph API, Gmail, Execute Workflow Trigger, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
