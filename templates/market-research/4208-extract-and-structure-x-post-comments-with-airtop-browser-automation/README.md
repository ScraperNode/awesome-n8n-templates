# 📊 Extract and structure X Post Comments with Airtop Browser Automation

> ⚡ **479 views** · 📊 [Market Research & Insights](../)

## Description

# Extracting Comments from an X Post

## Use Case
Engaging with conversations on X (formerly Twitter) is critical for brands and individuals monitoring sentiment, leads, or emerging trends. Manually collecting comments is time-consuming—this automation enables scalable extraction of comment data to inform your outreach or analysis.

## What This Automation Does
This automation extracts comments from a specified X post, with the following input parameters:

- **`airtop_profile`**: The name of your [Airtop Profile](https://portal.airtop.ai/browser-profiles) connected to X.
- **`x_post_url`**: The URL of the X post to extract comments from.
- **`max_number_of_comments`**: The maximum number of comments to retrieve.

## How It Works
1. Takes input via a form or another workflow.
2. Normalizes the input values.
3. Creates a new browser session using Airtop.
4. Navigates to the provided X post.
5. Uses a prompt to extract up to the specified number of comments, returning:
   - Author name
   - Author profile URL
   - Comment text

## Setup Requirements
1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) connected to X (requires one-time login).

## Next Steps
- **Pair with X Monitoring**: Use this with the [X monitoring automation](https://www.airtop.ai/blog/automating-x-monitoring-with-airtop-and-make) to detect relevant posts and extract discussion context automatically.
- **Feed into Analytics**: Combine with summarization or sentiment analysis tools to understand audience response at scale.
- **Export for CRM/BI**: Pipe the structured comment data into your CRM or business intelligence stack for lead tracking or reporting.

Read more about [Extracting Comments from X Posts](https://www.airtop.ai/automations/extract-x-post-comments-n8n)

## 🔗 Nodes Used

Execute Workflow Trigger, n8n Form Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
