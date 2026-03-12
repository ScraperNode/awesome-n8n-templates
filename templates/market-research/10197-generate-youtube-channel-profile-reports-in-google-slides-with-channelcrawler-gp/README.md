# 📊 Generate YouTube channel profile reports in Google Slides with ChannelCrawler & GPT-4

> ⚡ **73 views** · 📊 [Market Research & Insights](../)

## Description

## ChannelCrawler API to Google Slides Template

**This template shows how you can use the ChannelCrawler API alongside ChatGPT (or any LLM) to generate google slides using images and texts received from the API**

## How it Works
1. A user inputs the link to the Youtube channel(s) of their target creators
2. The list is parsed by a python script, returning it in a format that can be ran in a loop
3. The workflow iterates over each channel url
4. The url is passed to the ChannelCrawler API, where it returns a json of the creators profile.
5. The OpenAI node processes the description and content of the creators profile to create a summary
6. We retrieve the google slides presentation using the get presentation node.
7. We use the Google Slides API to duplicate an existing page and pull back the original page as it has a new revision ID
8. We use the Google Slides API to change the image placeholder of the of the image Presentation
9. Lastly we update other placeholders in with text from the ChannelCrawler and ChatGPT outputs

## How to Use
- From executing the workflow, a pop up form will come up where you can insert the Youtube Channel urls
- On submission, provided the prerequisites are set up - rest of the workflow will be triggered

## Use Cases
- You can create profiles on influencers and creators with extensive data points from the ChannelCrawler API and consistent summarisation from GPT

## Prerequisites
[ChannelCrawler Account](https://channelcrawler.com) - there's a great pay as you go options for access to the API
[OpenAI account](https://platform.openai.com/docs/overview) - the you can access free Open AI credit if you are a first time n8n user! Check the credentials options in the node
[Google account](https://workspace.google.com/products/slides/) (For slides) - You should have a google account or sign up for google with your non google email

## 🔗 Nodes Used

HTTP Request, Google Slides, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
