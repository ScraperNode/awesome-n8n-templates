# 📱 Cross-platform content publisher: Telegram to WordPress, Facebook, X & LinkedIn

> ⚡ **144 views** · 📱 [Social Media & Email Marketing](../)

## Description

## ==Reason Of The Workflow==
This **n8n workflow** automatically shares content from a **Telegram Channel** to multiple platforms like **WordPress**, **Facebook**, **X/Twitter**, and **LinkedIn**. It uses a **Switch** node to detect the type of content—text, image, video, audio, or document—and sends it to the right processing and publishing nodes for each platform.

## Who Is This For?
This workflow is ideal for **content creators, marketers, and organizations** who use a **Telegram Channel as their main content hub**. It eliminates the need for manual, repetitive posting across different social media and blogging platforms by instantly detecting new posts in Telegram and distributing them according to their content type.

## What This Workflow Does
The SocialVibe workflow is a sophisticated automation designed to handle diverse media types and publishing requirements:
* **Real-Time Triggering:** It instantly activates upon the detection of a new message (`channel_post` event) in your configured Telegram Channel.
* **Intelligent Content Detection:** It uses a **Switch** node and a **Code** node to analyze the Telegram payload and correctly identify the type of content posted (e.g., plain text, image, video, audio, or document).
* **Platform-Specific Publishing:** It tailors the publishing action for each platform, ensuring images go to the WordPress media library, text becomes a Tweet, etc.
* **Caption-as-Text:** The Telegram post's caption is automatically used as the post body, Tweet text, or blog post content/excerpt.


## Key Features
* **Versatile Media Support:** Handles over 9 different content types (Text, Photo, Video, Audio, Document, etc.).
* **Dedicated WordPress Integration:**
    * Creates a new post/article.
    * Uses an **Edit Image**automatically resize images to optimize for web upload.
    * Uploads the image to the WordPress Media Library via **HTTP Request**.
    * Sets the uploaded image as the post's **Featured Image**.
* **Broad Social Media Reach:** Supports cross-posting to **X/Twitter, Facebook Page, LinkedIn Profile, and LinkedIn Page**.
* **Customizable Settings:** Easily adjust WordPress categories, post status, and platform-specific settings like LinkedIn target IDs.


## Required Credentials & Accounts
1.  **Telegram Bot Token:** The bot must be an administrator in the source channel.
2.  **WordPress API Credentials:** For REST API access (username/password or application password).
3.  **Facebook Graph API Credentials:** With permissions to post to the target Page.
4.  **LinkedIn OAuth2 Credentials:** To post on a Profile and/or Company Page.
5.  **Twitter/X OAuth2 Credentials:** For publishing tweets.


## How to Use — Step-by-Step Setup
1.  **Set Up All Credentials:**
    * Configure all necessary API credentials (Telegram, WordPress, Facebook, LinkedIn, Twitter) within your n8n instance.
2.  **Configure Telegram Trigger:**
    * Ensure the **Telegram Trigger** node is set to listen for the `channel_post` update type.
3.  **Customize WordPress Nodes:**
    * Update the `Create WordPress Post` node with your desired **Category ID** (currently set to `1`) and ensure the **Status** is set to `publish` (or `draft` for safety testing).
    * In the **HTTP Request** nodes (used for WordPress media upload), replace the placeholder URL (e.g., `https://yourdomain.myshopify.com/`) with your actual **WordPress site domain**.
4.  **Update Social Media Target IDs:**
    * **LinkedIn:** Update the **Person ID** (e.g., `PghXXXXnRg`) and **Organization ID** (e.g., `109XXX908`) in the respective LinkedIn nodes to match your profile and company page.
    * **Telegram Send/Repost:** Update the `chatId` (e.g., `-10025XXXX5258`) in the sending Telegram nodes to match the channel or group you want to cross-post to.

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Edit Image, HTTP Request, Telegram, Telegram Trigger, Wordpress, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
