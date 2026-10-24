# 📱 Send Instagram auto DMs to post commenters using Meta Graph API

> ⚡ **1,167 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Automate the most popular growth hack on Instagram: **"Comment 'DM' to get the link!"**

This workflow listens to your Instagram posts in real-time. When a follower comments a specific trigger word (like "DM", "Link", or "Guide"), n8n automatically sends them a direct message containing your lead magnet, product link, or document. 

Stop replying to hundreds of comments manually. Build your email list, drive traffic to your website, and scale your engagement on autopilot! 🚀

## 🎯 Use Cases
* **Content Creators:** Send exclusive PDF guides or templates to followers who engage with your reels/posts.
* **E-commerce Brands:** Send discount codes or hidden product links directly to interested buyers.
* **Course Creators & Coaches:** Deliver webinar registration links instantly when someone comments on your promotional post.

## ✨ Workflow Features
* **Smart Filtering:** Ignores your own replies so it doesn't trigger an infinite loop.
* **Post-Specific:** Only triggers for the exact Post ID you define (won't misfire on your older posts).
* **Case-Insensitive:** Catches both "DM" and "dm" seamlessly.
* **Instant Delivery:** Uses the official Meta Graph API to deliver messages the second the comment is posted.

## 🛠️ Prerequisites
To use this workflow, you will need:
1. An **Instagram Professional/Business Account** linked to a Facebook Page.
2. A **Meta Developer App** with the `instagram_manage_comments` and `instagram_manage_messages` permissions.
3. Your Meta App configured to send Webhooks to this n8n instance.

## 🎥 Setup Instructions & Video Guide
If you're new to setting up Meta Webhooks and generating Graph API Access Tokens, don't worry! I have recorded a complete walkthrough:

👉 **[Watch the Step-by-Step Video Setup Guide Here](https://www.youtube.com/watch?v=6U_YLEWX-Po)**

**Quick Start Steps:**
1. **Webhook Configuration:** Copy your n8n Webhook URL and paste it into your Meta Developer App (Webhooks -&gt; Instagram -&gt; `comments`).
2. **Set Target Post:** Open the `Match Post ID` node. Replace `Your-Instagram-Post-ID` with the ID of your reel/post. Replace `Your-Instagram-Account-ID` with your own IG ID.
3. **Set Trigger Word:** Open the `Match Comment Text` node and type the exact keyword you want your audience to comment (e.g., "DM").
4. **Draft Your Message:** Open the `Data` node and replace `Your-Message-Here` with your customized message and link!
5. **Add Credentials:** Add your Facebook Graph API Access Token in the `Send DM` HTTP node. 
6. **Activate:** Toggle the workflow to **Active** and watch the DMs roll in!

---

## 📞 Support & Custom Workflows
Running into issues setting up the Meta App, or need a custom AI workflow built for your business? I am an **n8n Verified Creator** and I'm here to help!

* 📧 **Email:** [salmanmehboob1947@gmail.com](mailto:salmanmehboob1947@gmail.com)
* 💼 **LinkedIn:**[Let's connect!](https://www.linkedin.com/in/salman-mehboob-pro/)

## 🔗 Nodes Used

HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
