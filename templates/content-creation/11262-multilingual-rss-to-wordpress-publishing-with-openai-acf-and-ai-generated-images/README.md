# 🎬 Multilingual RSS to WordPress publishing with OpenAI, ACF, and AI-generated images

> ⚡ **696 views** · 🎬 [Content Creation & Video](../)

## Description

# Automated multilingual article publishing from RSS feeds to WordPress using ACF

## Instalations Instructions
[Youtube Instalation Instructions](https://www.youtube.com/watch?v=O2Hh6y-edkw)

## # Who’s it for

This workflow is built for **news publishers, media organizations, and content aggregators** who need to automatically:
- pull articles from RSS feeds
- rewrite them into original text
- translate them into multiple languages
- generate a featured image
- publish everything directly to WordPress.

It is ideal for **multilingual news** portals, editorial teams with limited resources, and businesses that want to automate high-volume content production.

## How it works

The workflow monitors a selected RSS feed at regular intervals and retrieves new article links.
It scrapes each article’s HTML and uses AI to extract structured text: 
- title
- full content
- and a short summary. 

The text is then rewritten into an original article tailored to your target audience’s language and country context.

Next, the workflow translates the rewritten article into any number of additional languages while preserving the formatting.

It also generates a unique AI-based featured image, uploads it to WordPress, assembles multilingual ACF fields, and publishes the final post with the correct metadata.

## How to set up

Insert your RSS feed URL, add your OpenAI and Replicate API keys, configure your WordPress API credential, and ensure the ACF fields on your site match the workflow’s naming structure.

## Requirements

- WordPress with REST API enabled
- [ACF WP Plugin](https://www.advancedcustomfields.com/) installed
- OpenAI API key
- Replicate API key
- Firebase API Key

## How to customize the workflow

Adjust the RSS source, modify the default language and list of translated languages, change the rewriting style or country context, refine the image generation prompt, or remap ACF fields to match your WordPress layout.

## 🔗 Nodes Used

HTTP Request, RSS Feed Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
