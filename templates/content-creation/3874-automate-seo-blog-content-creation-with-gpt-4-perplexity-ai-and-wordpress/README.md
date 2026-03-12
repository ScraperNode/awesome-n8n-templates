# 🎬 Automate SEO blog content creation with GPT-4, Perplexity AI and WordPress

> ⚡ **6,762 views** · 🎬 [Content Creation & Video](../)

## Description

AI Blog Publisher – Automated Blog Content Workflow
This workflow is designed for individuals and teams who regularly publish content on their blog and want to automate the entire process from start to finish. Its main goal is to generate long-form, SEO-optimized blog posts and publish them directly to WordPress — without needing a copywriter, editor, or someone to handle CMS uploads. The workflow generates a topic, writes a full article based on your brand guidelines, pulls a featured image from Pexels, publishes the post to WordPress, and logs the publication details to Google Sheets, creating a complete archive of published content. This allows users to deliver high-quality, search-optimized content every day while saving significant time. The whole process — from idea to publication — runs fully automatically and can be scheduled to execute without any manual input. It works just as well for solo creators as for marketing teams or agencies producing content at scale.

How it works
When triggered, the workflow generates a new blog post idea and checks your Google Sheet to see if the topic has already been published. If the topic is unique, it calls a sub-workflow that contains your brand’s writing style, tone, and blog goals. It then uses Perplexity AI to gather supporting research and context. Based on all this input, a complete 2000–2500 word article is generated in clean HTML, ready for WordPress. The workflow then searches Pexels for a relevant image and sets it as the featured image. Finally, it publishes the post to WordPress, including the proper title, meta description, and category. All relevant data — such as title, link, and publish date — is logged in your Google Sheet.

How to set up
To get this workflow running, all you need to do is connect the required APIs — OpenAI, WordPress, Google Sheets, and Pexels — and make a few basic adjustments. Replace the placeholder URLs in the HTTP request nodes with your actual WordPress address. In the Google Sheets nodes, add your own spreadsheet ID and tab name. In the node that fetches brand data, insert the workflow ID of your brand brief sub-workflow. You can also personalize the AI prompts by entering your blog name, company name, and a call-to-action to give the content a more tailored voice. Once that’s done, you can trigger the workflow manually or schedule it using the Schedule Trigger node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Wordpress, Notion, Markdown, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
