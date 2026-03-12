# 🎬 Translate RSS feed content to Hindi and publish to WordPress with OpenAI

> ⚡ **883 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automatically pulls articles from an RSS feed, translates the content and title from English to Hindi using OpenAI, extracts the featured image from the HTML content, and publishes the translated post as a draft on a connected WordPress site.

🔧 Key Features:

Polls RSS feed every 10 minutes for new articles

Extracts and parses the featured image from custom HTML tags

Translates content and title from English to Hindi using OpenAI Assistant

Uploads the featured image to WordPress media library

Associates the image with the new draft post

Publishes the translated article as a draft for review

🎯 Use Case:
Ideal for multi-language blog automation or content localization workflows where original content is in English and needs to be localized into Hindi before publishing.

## 🔗 Nodes Used

HTTP Request, Wordpress, RSS Feed Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
