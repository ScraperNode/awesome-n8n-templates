# 📊 Send a daily GitHub Trending digest to Telegram using Google Gemini

> ⚡ **63 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Daily GitHub Trending AI Digest to Telegram**

This workflow generates a daily AI-powered GitHub Trending digest and sends it to Telegram using GitHub Trending, GitHub README data, and Google Gemini.

It fetches trending repositories from GitHub, extracts the top repository links, retrieves each repository README through the GitHub API, builds a structured AI payload, asks Gemini to summarize the repositories, and delivers the result as a clean Telegram digest.

It is useful for developers, builders, researchers, and tech enthusiasts who want to discover interesting open-source projects without manually browsing GitHub Trending every day.

## **Common use cases:**

- Send a daily GitHub Trending digest to your Telegram
- Discover useful open-source repositories automatically
- Monitor new developer tools, AI projects, frameworks, and libraries
- Build a personal open-source discovery assistant
- Learn how to combine web extraction, GitHub API data, LLM summarization, and Telegram in n8n

## **How it works**

- Starts from a Schedule Trigger, which you can customize
- Sets the number of repositories to include in the digest
- Fetches the GitHub Trending page
- Extracts trending repository links from the page
- Splits the repository links into individual items
- Builds GitHub repository URLs and GitHub README API URLs
- Limits the workflow to the configured number of repositories
- Fetches each repository README using the GitHub API
- Decodes README content from base64
- Builds one structured AI payload containing all selected repositories
- Sends the payload to Google Gemini
- Parses Gemini’s response into structured JSON
- Formats the result into a Telegram message
- Sends the AI-generated digest to Telegram

## **Setup steps**

- Set the number of repositories in the **Set Digest Config** node
- Connect your Google Gemini credentials
- Connect your Telegram credentials
- Set your Telegram chat ID in the Telegram node
- Adjust the Schedule Trigger if you want a different run time
- Test the workflow manually
- Activate the workflow

## **Notes**

This workflow uses GitHub Trending page data and GitHub public README API data.
GitHub does not provide an official Trending API endpoint, so the workflow extracts repository links from the GitHub Trending page.

The AI summaries are generated only from the provided repository URLs and README excerpts. If a README is missing or unclear, the summary quality may be limited.

## **Need Help?**

Have questions or want to connect? Reach me on [LinkedIn](https://www.linkedin.com/in/athaahsan/).

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
