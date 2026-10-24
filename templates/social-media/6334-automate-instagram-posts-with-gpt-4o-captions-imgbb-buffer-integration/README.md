# 📱 Automate Instagram posts with GPT-4o captions, ImgBB & Buffer integration

> ⚡ **239 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This powerful automated workflow eliminates the need to manually create and upload Instagram posts, saving you time while delivering perfect captions and hashtags.

## How it works
1. Start by connecting a designated folder on your desktop to the workflow. Every time a new image is saved to this folder, the automation is triggered.
2. Once you’ve added the image you’d like to post to Instagram, the workflow kicks off — sending the image to OpenAI, where GPT-4o analyzes it and generates an engaging Instagram-style caption, complete with relevant hashtags.
3. For more personalized results, you can customize the GPT-4o prompt to match your brand’s voice or even provide a sample post from your Instagram account.
4. The image is then uploaded to ImgBB for reliable cloud storage, and the AI-generated caption is sent to Airtable. Airtable automatically pulls in the hosted image link from ImgBB.
5. This triggers Zapier, which packages the content and sends it to Buffer — where your post can be published immediately or scheduled for a later time based on your preferences.
6. In just a few minutes, your image goes from a desktop folder to a fully automated, AI-crafted Instagram post — all without manual input.

## Setup
1. Create a Folder:
2. Create a folder on your computer for saving images. Copy the folder path and add it to the Local File Trigger node in n8n.
3. Get OpenAI API Key:
4. Visit https://platform.openai.com/api-keys to generate your API key. Connect it to the Analyze Image AI Agent and the Prompt/Text Generator AI Agent.
5. Fund Your OpenAI Account:
6. Add credits to your OpenAI account. GPT-4o costs approximately $0.01 for every 3 automation runs.
7. Create an ImgBB Account (free):
8. Sign up at https://imgbb.com and obtain your free API key.
9. Create an Airtable Account (free):
10. Sign up at https://airtable.com and get your API key.
11. Set Up Zapier:
12. Create a free Zapier account at https://zapier.com. Connect it to Airtable and Buffer (100 tasks/month free).
13. Set Up Buffer:
14. Sign up at https://buffer.com, connect your Instagram account, and start with 10 free posts/month.

## Customization
- For improved description and tag performance recommend customizing the Analyze node. Change the #Description portion of the node to describe the types of posts you normally place on your Instagram and tailor it to how you like your descriptions to be. Additionally, change the #Example Post Description to a post with tags included of what you would normally post to your Instagram.

## Additional info
What It Does
Workflow Demonstration

This powerful automated workflow eliminates the need to manually create and upload Instagram posts, saving you time while delivering perfect captions and hashtags.
Simply drop an image into a designated folder on your desktop, and the process begins instantly.
GPT-4o analyzes the image and generates an engaging Instagram caption along with relevant hashtags tailored to the content.
The image is then uploaded to ImgBB for reliable hosting, while the caption and hashtags are sent to Airtable. From there, Airtable automatically pulls in the hosted image link.
Once everything is in place, Zapier takes over — sending the complete post, including the image and AI-generated description, directly to Buffer for scheduling and publishing to your Instagram account.
In just a few minutes, you go from saving an image to having a fully composed, ready-to-post piece of content — with almost zero effort.

Who This Is For
This workflow is designed for content creators, social media managers, entrepreneurs, and small business owners who want to save time, stay consistent, and scale their Instagram presence effortlessly.
Whether you’re running a brand, promoting a product, managing multiple clients, or just tired of the repetitive grind of posting — this automation gives you back your time while keeping your content sharp and professional.
No design skills needed. No social media assistant required. Just drop your image, and let AI handle the rest.
If you’re looking to streamline your workflow, boost engagement, and focus more on creativity than logistics — this is made for you.

## 🔗 Nodes Used

Airtable, HTTP Request, Local File Trigger, Read/Write Files from Disk, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
