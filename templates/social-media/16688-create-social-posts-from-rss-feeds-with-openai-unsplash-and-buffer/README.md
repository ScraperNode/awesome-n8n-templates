# 📱 Create social posts from RSS feeds with OpenAI, Unsplash, and Buffer

> ⚡ **47 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow polls an RSS feed for new articles, uses OpenAI to generate platform-specific copy for X, LinkedIn, and Instagram, pulls a related random image from the Unsplash API, and creates queued posts in Buffer for each social channel.

## How it works
1. Runs every hour and reads the latest items from the configured RSS feed.
2. Sends each article title and snippet to OpenAI to generate three ready-to-post messages for X, LinkedIn, and Instagram.
3. Requests a random related image from the Unsplash API using the article title as the search query.
4. Creates an image post in Buffer for X using the generated Twitter text and the Unsplash image URL.
5. Creates an image post in Buffer for LinkedIn using the generated LinkedIn text and the Unsplash image URL.
6. Creates an image post in Buffer for Instagram using the generated Instagram caption and the Unsplash image URL.

## Setup
1. Add an OpenAI API credential in n8n (or replace the included OpenAI credential) for the OpenAI node.
2. Create a Buffer account, connect your X/Twitter, LinkedIn, and Instagram profiles, and add your Buffer API credential in n8n.
3. Create an Unsplash developer app and replace the client_id value in the HTTP Request URL with your Unsplash Access Key.
4. Update the Buffer channel IDs and organization ID in each Buffer post action to match your connected social accounts.
5. Replace the RSS feed URL and adjust the polling schedule in the RSS trigger to match your content source and posting cadence.

## Requirements
- n8n account (free)
- Buffer account (free)
- Unsplash API key (free)
- OpenAI API credits (free in n8n)

## Customization
- Change RSS feed URL to any website
- Adjust posting frequency (hourly/daily/weekly)
- Add or remove social media platforms

## Additional info
This workflow automatically fetches news from any 
RSS feed, generates AI-written captions for Twitter, 
LinkedIn and Instagram, finds relevant images from 
Unsplash and posts everything automatically 24/7.
Perfect for social media managers, content creators
and businesses wanting to automate their social 
media presence completely for free!

## 🔗 Nodes Used

HTTP Request, RSS Feed Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
