# 🎬 Automated AI product photography and Instagram post generator (Deepseek/Segmind)

> ⚡ **1,475 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

**Automatically generate professional-grade product photography and ready-to-use Instagram posts** using the power of AI, delivered straight to your Telegram for approval.

**Setup is incredibly simple:** All you need is your product image URL and a API key from Segmind.

---

## Who is this for?

This template is ideal for:

- **E-commerce store owners** looking to create high-quality product visuals affordably (The estimated cost is approximately $0.10 per product photography and accompanying Instagram post).
- **Dropshippers** needing unique product images to stand out.
- **Social Media Managers & Marketers** seeking to automate content creation for platforms like Instagram.
- **Small Businesses** wanting professional marketing assets without the high cost or effort.
- Anyone needing consistent, eye-catching product photos and social media captions on a regular schedule.

---

## What problem is this workflow solving?

Creating professional product images is often expensive and time-consuming, requiring photographers, studios, and editing time. Consistently generating fresh and engaging social media content, especially for visual platforms like Instagram, adds another layer of complexity and effort. This workflow **eliminates these bottlenecks** by automating both high-quality image generation and relevant caption creation, freeing up your time and budget.

---

## What this workflow does:

This n8n workflow automates the entire process on a schedule **you** define (e.g., every hour, every day):

1. **Scheduled Start:** Triggers automatically based on your chosen time interval (e.g., every hour).
2. **Product Analysis:** Takes your input product image URL and uses AI (GPT) to understand the product details.
3. **AI Prompt Generation:** Based on the product analysis and your preference (whether to include a human model or not), it uses AI (Deepseek) to craft a sophisticated prompt specifically for generating professional product photography via Segmind.
4. **Instagram Post Creation:** Simultaneously, the AI (Deepseek) generates an engaging Instagram post caption, complete with relevant hashtags, tailored to your product.
5. **AI Image Generation:** Sends the product image, the generated prompt, and product details to the Segmind API to create a brand new, studio-quality product photograph.
6. **Telegram Validation:** Downloads the newly generated product photo and sends both the photo and the generated Instagram post text directly to your specified Telegram chat. This allows you to quickly review and approve the content before using it.

---

## Setup: Get Running in Minutes!

This workflow is designed for **maximum ease of setup**:

1. **Get Segmind API Key:** Sign up or log in to Segmind and grab your API key here: https://cloud.segmind.com/console/api-keys
2. **Enter API Key:** In the n8n workflow, click on the `SegmindAPIKey` node and paste your copied API key into the `Value` field.
3. **Enter Product Image URL:** Click the `InputYourImageURL` node and paste the web address (URL) of your product image into the `Value` field.
4. **(Optional) Human Model Preference:** Click the `ImageInstruction` node. Set the `HumanModel` value to `true` if you want a human model potentially included in the photo, or `false` if you want the product showcased alone or in a setting.
5. **Set Your Schedule:** Click the `Schedule Trigger` node. Define how often you want the workflow to run (e.g., under Interval, set `1` and select `Hours` from the dropdown for hourly runs).
6. **Configure Telegram:** Make sure you have a Telegram Bot credential configured in n8n. Then, in the `SendProductPhotography` and `SendInstagramPost` nodes, enter the correct `Chat ID` for where you want to receive the validation messages. [A video guidance is made to help you with telegram setup]
7. **Activate Workflow:** Toggle the workflow to "Active" in the top right corner of n8n.

**That's it!** The workflow will now automatically generate and send product photos and Instagram posts to your Telegram at your defined interval.

---

## How to customize this workflow:

While the default setup works great, you can easily tweak it:

- **Photography Style:** Modify the main prompt within the `AI Agent1` node to guide the AI towards a specific aesthetic (e.g., "minimalist background," "bright natural lighting," "dark moody atmosphere").
- **Instagram Post Tone:** Adjust the instructions within the `AI Agent1` node to change the style or focus of the generated Instagram captions.
- **Schedule:** Change the trigger interval in the `Schedule Trigger` node anytime.
- **AI Models:** Experiment by changing the selected models in the `OpenAI`, `OpenAI Chat Model1` (Deepseek).

---

## Category:

Marketing, Social Media, E-commerce, Automation, AI, Content Creation, Product Photography

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
