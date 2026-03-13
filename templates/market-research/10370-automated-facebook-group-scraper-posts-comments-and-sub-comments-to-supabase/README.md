# 📊 Automated Facebook group scraper: posts, comments, and sub-comments to Supabase

> ⚡ **1,673 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# This n8n template demonstrates how to automate the scraping of posts, comments, and sub-comments from a Facebook Group and store the data in a Supabase database.

Use cases are many: Gather user engagement data for analysis, archive posts and comments for research, or monitor community sentiment by collecting feedback across discussions!

**Good to know**

At the time of writing, this workflow requires the apify api for scraping and Supabase credentials for database storage.

# How it works

- The Facebook Group posts are retrieved using an Apify scraper node.
- For each post, comments and sub-comments are collected recursively to capture all levels of engagement.
- The data is then structured and stored in Supabase, creating records for posts, comments, and sub-comments.
- This workflow includes the option to adjust how often it scrapes and which group to target, making it easy to automate collection on a schedule.

# How to use

- The workflow is triggered manually in the example, but you can replace this with other triggers like webhooks or scheduled workflows, depending on your needs.
- This workflow is capturing data points, such as user interactions or media attached to posts.

# Requirements

- Apify account API
- Supabase account for data storage

# Customizing this workflow
This template is ideal for gathering and analyzing community feedback, tracking discussions over time, or archiving group content for future use.

## 🔗 Nodes Used

Supabase, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
