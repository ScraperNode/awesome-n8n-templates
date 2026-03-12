# 📱 Summarize news articles & auto-post to social media with GPT-4 and GetLate

> ⚡ **1,253 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Different Articles Summarizer & Social Media Auto-Poster

This n8n template demonstrates how to extract full-text articles from different news websites, summarize them with AI, and automatically generate content for social networks (Twitter, Instagram, Threads, LinkedIn, YouTube).

You can use it for any news topic. Example: posting summaries of breaking news articles.

Possible use cases :
* Automate press article summarization with GPT.
* Create social media posts optimized for young audiences.
* Publish content simultaneously across multiple platforms with Late API.


## How it works

* The workflow starts manually or with a trigger.
* URLs of news articles are defined in the Edit Fields node.
* Each URL is processed separately via Split Out.
* HTTP Request fetches the article HTML.
* Custom Code node extracts clean text (title, content, main image).
* OpenAI summarizes each article factually.
* Aggregate combines results.
* Another OpenAI node (Message a model) creates structured JSON summaries for young readers.
* A final OpenAI node (Message a model1) generates short social media posts (hook, summary, CTA, hashtags).
* Images are extracted via HTML1 and uploaded to Google Drive.
* Posts (text + image) are sent to Late API for multi-platform scheduling (Twitter, Instagram, Threads, LinkedIn, YouTube).

## Requirements

* OpenAI API key connected to n8n.

* Google Drive account (for storing article images).

* Late API credentials with platform account IDs.

* Valid list of article URLs.

## 🔗 Nodes Used

HTTP Request, Google Drive, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
