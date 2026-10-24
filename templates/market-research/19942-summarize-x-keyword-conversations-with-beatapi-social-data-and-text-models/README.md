# 📊 Summarize X keyword conversations with BeatAPI Social Data and text models

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually searches recent public X posts for a keyword using BeatAPI Social Data, then summarizes the preview results into a cited research draft using a BeatAPI text model and returns the BeatAPI request ID for later retrieval.

## How it works
1. Starts when you run the workflow manually.
2. Sets the keyword, X search type (for example, Latest), and the BeatAPI text model to use.
3. Calls BeatAPI Social Data to fetch a preview page of public X search results for the keyword.
4. Extracts each post’s text and engagement signals and packages them as evidence with the BeatAPI Social Data request ID.
5. Sends the evidence to the BeatAPI chat completions endpoint to generate a theme-based summary with post-ID citations.
6. Outputs the research draft summary along with the source metadata, number of posts summarized, and the request ID(s).

## Setup
1. Create an n8n HTTP Header Auth credential with header name `Authorization` and value `Bearer <your BeatAPI key>`, and select it in both BeatAPI HTTP Request steps.
2. Update the keyword, `search_type`, and model values in Configure Inputs to match your research needs.
3. Run the workflow manually and use the returned BeatAPI request ID(s) if you need to retrieve the full Social Data result within the provider’s availability window.

## Requirements
- BeatAPI account and API key; n8n instance with HTTP Request and Code nodes; BeatAPI credits for one Social Data search and one text-model call. No X account is required.

## Customization
- Change keyword, search_type, and model in Configure Inputs. Adjust the post limit or summary instructions for your research question. Replace Manual Trigger with a Schedule Trigger for recurring monitoring, and use the returned request ID to fetch the full Social Data result when needed.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
