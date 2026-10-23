# 📱 Post new blog articles to social media using RSS, OpenAI and Orshot

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow checks your blog RSS feed hourly, uses OpenAI to generate platform-specific captions, renders a branded social card with Orshot, publishes posts to Instagram, LinkedIn, X, and Facebook via Orshot, and logs results and errors to Google Sheets.

## How it works
1. Runs every hour and reads new items from an RSS feed.
2. Cleans and maps the article title, link, summary, category, and featured image URL from the feed entry.
3. Uses OpenAI to generate a card headline, excerpt, topic tag, and captions for Instagram, LinkedIn, X, and Facebook.
4. Renders a 4:5 social card image in Orshot using a studio template populated with the article image and generated text.
5. If the card renders successfully, publishes the image and the platform-specific caption to Instagram, LinkedIn, X, and a Facebook Page via Orshot.
6. Collects each platform’s publishing status and URL (or errors) and appends a tracking row to Google Sheets.

## Setup
1. Add an OpenAI API credential for the OpenAI node.
2. Add an Orshot API credential, select an Orshot Studio template ID for rendering, and connect/select your Instagram, LinkedIn, X, and Facebook accounts in Orshot for publishing.
3. Set your RSS feed URL and update the blog handle/CTA defaults in the mapping code if needed.
4. Add Google Sheets OAuth credentials, then select the target spreadsheet and sheet and ensure it has columns matching the logging fields (Title, Post URL, Status, platform post URLs, Image, Error, Logged at).

## 🔗 Nodes Used

Google Sheets, RSS Feed Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
