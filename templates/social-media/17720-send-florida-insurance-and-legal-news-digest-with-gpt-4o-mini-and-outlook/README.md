# 📱 Send Florida insurance and legal news digest with GPT-4o-mini and Outlook

> ⚡ **17 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs daily at 4am to compile Florida insurance and legal news from RSS feeds and CourtListener, summarizes new items with OpenAI, builds an HTML digest, emails it to subscribers via Microsoft Outlook, and records sent-article hashes in a Microsoft Excel workbook on SharePoint.

## How it works
1. Runs daily at 4am and loads previously seen article URL hashes from a Microsoft Excel table stored in SharePoint.
2. Fetches recent items from Insurance Journal, Claims Journal, a Google News RSS search, Property Insurance Coverage Law Blog, and CourtListener, then normalizes each source into a consistent article format with a computed URL hash.
3. Merges all articles, removes items already seen (or duplicated in the current run), and filters for Florida- and insurance/legal-relevant content.
4. Splits the remaining articles into batches of 30 and uses OpenAI (GPT-4o-mini) to generate a JSON list of newsletter-ready summaries.
5. Parses the AI JSON output, groups summarized articles by stream, and renders a styled HTML newsletter.
6. Pulls the subscriber list from a Microsoft Excel table, filters to valid email addresses, and sends the HTML newsletter to each recipient using Microsoft Outlook.
7. Appends the URL hashes of the sent articles back to the SharePoint-hosted Microsoft Excel “seen” table to prevent re-sending them.

## Setup
1. Add credentials for Microsoft Excel (SharePoint/OneDrive) and update the workbook item ID, worksheet, and table references for both the subscribers list and the seen-hashes table.
2. Add Microsoft Outlook credentials and confirm the recipient field maps to your subscriber email column (for example, “Email”).
3. Add OpenAI credentials for the chat model used by the LLM chain and ensure the model selection (gpt-4o-mini) is available in your account.
4. Review and update the RSS feed URLs and the CourtListener API request (including replacing the Authorization token) to match your preferred sources and query scope.
5. Confirm the schedule trigger time (4am) and adjust the batch size or relevance keywords if you want to tune newsletter volume and filtering.

## Requirements
- Self-hosted n8n with support for community and LangChain nodes
- Microsoft Excel (Online) and Outlook accounts for subscriber/data management and email delivery
- OpenAI API credentials for AI analysis

## Customization
- Adjust the sources by updating or adding RSS URLs in the relevant ‘Fetch’ nodes.
- Modify the scheduling to suit your newsletter frequency.
- Refine article relevance by tweaking AI prompt settings in the LangChain nodes.
- Personalize the newsletter format by editing the HTML generation section.

## 🔗 Nodes Used

HTTP Request, RSS Read, Microsoft Excel 365, Microsoft Outlook, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
