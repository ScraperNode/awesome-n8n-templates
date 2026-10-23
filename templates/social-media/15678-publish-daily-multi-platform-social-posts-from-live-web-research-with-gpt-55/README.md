# 📱 Publish daily multi-platform social posts from live web research with GPT-5.5

> ⚡ **51 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This template is built for content creators, founders, solopreneurs, content marketers, and agencies who want to publish consistent, research-backed content across 4 social platforms without writing, formatting, or posting manually. It runs reliably for a single personal brand and scales seamlessly to dozens of accounts with no structural changes.

You define a topic once. The pipeline finds a fresh article every day at 8 AM, writes platform-native copy for all 4 channels, generates a cinematic AI image, stores it on Cloudflare R2, and publishes everything autonomously. Your only job is a 30-second review in Notion before it goes live.

Each post costs approximately $0.90 to $1.20 in OpenAI API credits. Cloudflare R2, Notion, Buffer free tier, and Bluesky cost nothing within their free limits.

The architecture is built to scale. Adding more social accounts requires only a Buffer paid plan, or the workflow can be extended with native platform APIs for X, Instagram, and more, for full control at any scale. No structural changes to the workflow.


## Still not convinced? See it live

This exact pipeline runs the accounts below. No editing. No manual posting. Just the workflow doing its job every day.

- LinkedIn: [linkedin.com/in/expansionledger](https://linkedin.com/in/expansionledger)
- Threads: [threads.net/@expansionledger](https://threads.net/@expansionledger)
- Pinterest: [pinterest.com/expansionledger](https://pinterest.com/expansionledger)
- Bluesky: [bsky.app/profile/expansionledger.com](https://bsky.app/profile/expansionledger.com)


## Watch the complete tutorial

Click the thumbnail below to watch the full step-by-step build on YouTube.

[![YouTube](https://raw.githubusercontent.com/TuguiDragos/img/refs/heads/main/YouTube.png)](https://www.youtube.com/watch?v=M84I5WAfTaU)

## How it works

The bundle contains 4 fully connected and documented workflows.

![WF-01](https://raw.githubusercontent.com/TuguiDragos/img/refs/heads/main/%5BWF-01%5D%20Data%20Ingestion%20-%20B2B%20SaaS%20Pricing.png)

**WF-01 Data Ingestion** runs every day at 8 AM. GPT-5.5 with live web search finds a real article published in the last 14 days on your topic. It deduplicates against Notion using a Source ID so the same article is never processed twice. Creates a Raw entry in Notion and immediately calls WF-02.

---

![WF-02](https://raw.githubusercontent.com/TuguiDragos/img/refs/heads/main/%5BWF-02%5D%20Content%20Generation%20-%20Receipts%20Framework.png)

**WF-02 Content Generation** fetches the full article text, uses gpt-5.4-mini to analyze it and generate platform-specific copy for all 4 channels with character limits enforced in code (LinkedIn 2900, Threads 495, Pinterest 500, Bluesky 295), creates a cinematic AI image with gpt-image-2, uploads it to Cloudflare R2, updates Notion to Pending Review, and sends a Pushover notification to your phone.

![Pushover Review Notification](https://raw.githubusercontent.com/TuguiDragos/img/refs/heads/main/Pushover%20Review.png)

![Notion on Mobile](https://raw.githubusercontent.com/TuguiDragos/img/refs/heads/main/Notion%20Phone.png)

You open Notion on your phone, read the generated content, and set Status to Approved. That single tap triggers publishing.

If you skip approvals for several days, posts simply queue up in Pending Review. Nothing publishes without your tap, so you stay in full control even when life gets busy.

---

![WF-03](https://raw.githubusercontent.com/TuguiDragos/img/refs/heads/main/%5BWF-03%5D%20Content%20Publisher.png)

**WF-03 Content Publisher** polls Notion every minute for Approved pages. Posts to LinkedIn, Threads, and Pinterest via the Buffer GraphQL API scheduled 1 minute ahead (Buffer does not allow instant publishing via API). Posts directly to Bluesky via the AT Protocol with the image blob embedded. Marks the Notion page as Live and sends a confirmation to your phone.

![Pushover Published](https://raw.githubusercontent.com/TuguiDragos/img/refs/heads/main/Pushover%20Published.png)

---

![WF-04](https://raw.githubusercontent.com/TuguiDragos/img/refs/heads/main/%5BWF-04%5D%20Error%20Handler%20%26%20Notifier.png)

**WF-04 Error Handler** is the central error receiver for the entire pipeline. If anything fails in any workflow, a High Priority Pushover alert arrives on your phone instantly with the workflow name, the failed node, the error message, and a direct link to the failed execution in n8n.

![Pushover Error](https://raw.githubusercontent.com/TuguiDragos/img/refs/heads/main/Pushover%20Error.png)


## Why not just use Buffer for everything?

Buffer is excellent for scheduling posts you already have written. It cannot search the web, it cannot read a live article, and it cannot generate images or copy. The pipeline uses Buffer only for what it does best: queuing and publishing to LinkedIn, Threads, and Pinterest.

Bluesky is posted directly via the AT Protocol because it gives full control over the post format and image embedding without depending on Buffer's Bluesky support.

The Buffer free tier includes 3 social channels, which covers LinkedIn, Threads, and Pinterest perfectly.

**Important:** Buffer's public API is currently in beta. The request structure may change in future updates without prior notice. If you encounter errors on the Buffer nodes, check the official Buffer API documentation first before debugging the workflow code.


## Why Cloudflare R2 for image storage?

The AI-generated image needs a public URL so Buffer and Bluesky can fetch it at publishing time. Cloudflare R2 is the right tool for several reasons.

**10 GB of free storage per month, permanently.** At roughly 1 MB per image, that covers approximately 10,000 posts before you pay a single cent.

**No egress fees.** Cloudflare does not charge bandwidth when images are served publicly, unlike AWS S3.

**Works with or without a custom domain.** You can use the default R2 public URL at no cost, or point your own domain to the bucket from the Cloudflare dashboard in a few clicks.

**Ready for video.** The same infrastructure handles video files. To extend this pipeline to TikTok, Instagram Reels, or YouTube Shorts, you upload the video to R2 and pass the public URL to a new publishing step. The architecture supports it with no structural changes.

**How to set up Cloudflare R2:**
1. Create a free account at [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to R2 Object Storage and create a new bucket
3. In the bucket settings enable Public Access and copy the public domain
4. Go to Manage R2 API Tokens and create a token with Object Read and Write permissions
5. Copy the Account ID, Access Key ID, and Secret Access Key
6. In n8n create an S3 credential, set the Endpoint URL to your R2 endpoint (format: https://ACCOUNT_ID.r2.cloudflarestorage.com), paste your keys, and set Region to auto
7. Paste your bucket name and public base URL into the Pipeline Configuration node in WF-02


## Why Pushover for notifications?

Pushover is a dedicated push notification service. It is not email. It is not Slack. It lands on your phone instantly with a distinct sound.

WF-04 sends error alerts at Priority 1 (High), which bypasses your phone's quiet hours. You know immediately when the pipeline breaks, even at 3am.

It is not tied to any social platform or workspace tool, so you never miss a notification because you were not logged into the right app.

It costs a one-time payment of $5 per platform (iOS or Android) and is free forever after with no subscription.

**How to set up Pushover:**
1. Create an account at [pushover.net](https://pushover.net) and note your User Key from the dashboard
2. Click Create an Application, give it a name (for example: n8n Pipeline), and copy the App Token
3. Install the Pushover app on your phone from the App Store or Google Play
4. In n8n create a Pushover credential, paste the App Token
5. Paste your User Key into the Pushover nodes inside WF-02, WF-03, and WF-04


## Why GPT-5.5 and gpt-image-2?

GPT-5.5 is used with live web search for article discovery because it finds real articles published in the last 14 days by searching the live web on every run. No hallucinated sources. No outdated content.

gpt-image-2 is OpenAI's latest image model. It generates cinematic, photorealistic images from a text prompt automatically derived from the article content, so every post gets a unique and contextually relevant image at a fraction of the cost of older models.

For the actual copywriting step, the pipeline uses gpt-5.4-mini deliberately. It is significantly cheaper than the flagship models while keeping high output quality, and the quality difference is negligible for short-form social copy, where character limits do most of the editing for you.

**How to get your OpenAI API key:**
1. Go to [platform.openai.com](https://platform.openai.com) and create an account or log in
2. Go to API Keys and click Create new secret key
3. Copy the key and paste it into the OpenAI credential in n8n

**Important: gpt-image-2 requires account verification.**
To use gpt-image-2 you need to verify your OpenAI account at [platform.openai.com/settings/organization/general](https://platform.openai.com/settings/organization/general)
This works for both individuals and companies. The process is fast, usually approved within 30 minutes of submission. It is worth doing, trust me.

The cost per full post across all 4 platforms is approximately $0.90 to $1.20, almost entirely from the OpenAI API: GPT-5.5 with web search for discovery (~$0.20 to $0.30), gpt-5.4-mini for content generation (~$0.10), and gpt-image-2 at high quality 1024x1024 (~$0.60 to $0.80).


## The Notion Template

The pipeline uses a Notion database as its backbone. Every article, every piece of generated content, and every status update flows through it.

![Notion Template](https://raw.githubusercontent.com/TuguiDragos/img/refs/heads/main/Notion%20Template.png)

The Notion template is ready to use. Duplicate it with one click and it is ready to connect.

**Duplicate the Notion template here:** [tuguidragos.notion.site/Automated-Content-Pipeline-n8n](https://tuguidragos.notion.site/Automated-Content-Pipeline-n8n-35eecbf6ef7a80e8b5cbe38aa3b722c3)

**How to connect Notion to n8n:**
1. Go to [notion.so/my-integrations](https://notion.so/my-integrations) and click New integration
2. Give it a name, select your workspace, and set Content Capabilities to Read, Update, and Insert content
3. Copy the Internal Integration Token
4. In n8n create a Notion credential and paste the token
5. In your duplicated Notion database click the three dots in the top right, go to Connections, and add your integration

**How to get your Notion database ID:**
Open the database in Notion in a browser. The database ID is the 32-character string in the URL between the last slash and the question mark. Paste it into the Pipeline Configuration node in WF-01 and WF-02.


## Where does this run?

This pipeline runs on n8n, either on n8n Cloud at [n8n.io/cloud](https://n8n.io/cloud) (fully managed, no server required) or on a self-hosted n8n instance on your own VPS, NAS, or home server.

Once activated, the workflows run 24 hours a day. WF-01 triggers daily at 8 AM and WF-03 polls Notion every minute. No manual intervention is needed after the initial setup.


## How to customize the workflow

To change the topic, update the niche field in the Pipeline Configuration node in WF-01. That single change redirects the entire pipeline. Fitness, real estate, personal finance, crypto, SaaS, any niche with a consistent stream of published articles works without touching any other node.

To add more social platforms, extend the Buffer step in WF-03 with additional channel IDs or add new publishing nodes after the Bluesky step. For more than 3 channels, a Buffer paid plan is needed, starting at $6 per month.

Every workflow has a written description. Every node is named and has a sticky note explaining exactly what it does, what credential it needs, and what to configure. The bundle is fully ready for Claude MCP integration out of the box.


## Requirements

- n8n instance, cloud or self-hosted
- OpenAI account with API access at platform.openai.com
- Notion account with an integration at notion.so/my-integrations
- Buffer account, free tier covers 3 channels, at buffer.com
- Cloudflare account with R2 enabled at dash.cloudflare.com
- Bluesky account with an App Password at bsky.app/settings/app-passwords
- Pushover account at pushover.net


## How to set up

1. Duplicate the Notion template and connect it to your Notion integration
2. Add all credentials in n8n: Notion, OpenAI, S3 pointing to Cloudflare R2, Pushover
3. In WF-01 and WF-02 open Pipeline Configuration and set your Notion database ID, R2 bucket name, R2 public base URL, and topic in the niche field
4. In WF-03 open the Config node and add your Buffer API key, channel IDs for LinkedIn, Threads, and Pinterest, your Bluesky handle, and your Bluesky app password
5. In the workflow settings of WF-01, WF-02, and WF-03 set WF-04 as the Error Workflow
6. Activate in this order: WF-04 first, then WF-02, then WF-03, then WF-01


---

*Note: The screenshots above are representative previews taken from a release candidate (RC) build and may not perfectly match the final shipped version. Workflow logic, node names, and output remain the same.*

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, S3, Pushover, Notion, Notion Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
