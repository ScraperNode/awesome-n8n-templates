# 📱 Send weekly curated news newsletters with Bright Data, Claude, and Gmail

> ⚡ **24 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs every Monday to scrape Google News with Bright Data, fetch and clean the full text of the top five unique stories, generate an HTML newsletter with Anthropic Claude, and send it via Gmail.

## How it works
1. Runs every Monday on a scheduled trigger.
2. Uses Bright Data to scrape a Google News search results page for the configured topic.
3. Filters out YouTube results, deduplicates by title, and keeps the top five stories.
4. Loops through the five stories and uses Bright Data to scrape each article’s full content as Markdown.
5. Cleans and truncates each article’s text to remove navigation, ads, images, and link clutter.
6. Aggregates the five cleaned articles and sends them to Anthropic Claude to generate a single clean HTML newsletter.
7. Sends the generated HTML newsletter to the configured recipient using Gmail.

## Setup
1. Add a Bright Data credential and ensure your Web Unlocker zone (for example, `n8n_unlocker`) is available in your Bright Data account.
2. Add an Anthropic API credential and select the Claude model you want to use.
3. Add a Gmail OAuth2 credential and set the recipient email address, subject, and any desired email options.
4. Update the Google News search URL (the `q=` query, plus locale options like `gl`/`hl`) to match your topic and target region.
5. Adjust the schedule rule if you want the newsletter sent on a different day or cadence.

## 🔗 Nodes Used

Gmail, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
