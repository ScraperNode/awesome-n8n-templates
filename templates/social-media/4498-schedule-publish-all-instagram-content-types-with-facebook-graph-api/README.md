# 📱 Schedule & publish all Instagram content types with Facebook Graph API

> ⚡ **6,949 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Automated Instagram posting with Facebook Graph API and content routing

## Who is this for?

This workflow is perfect for **social media managers**, **content creators**, **digital marketing agencies**, and **small business owners** who need to automate their Instagram posting process. Whether you're managing multiple client accounts or maintaining consistent personal branding, this template streamlines your social media operations.

## What problem is this workflow solving?

Manual Instagram posting is time-inconsistent and prone to inconsistency. Content creators struggle with:
- Remembering to post at optimal times
- Managing different content types (images, videos, reels, stories, carousels)
- Maintaining posting schedules across multiple accounts
- Ensuring content is properly formatted for each post type

This workflow eliminates manual posting, reduces human error, and ensures consistent content delivery across all Instagram format types.

## What this workflow does

The workflow automatically publishes content to Instagram using Facebook's Graph API with intelligent routing based on content type. It handles **image posts**, **video stories**, **Instagram reels**, **carousel posts**, and **story content**. The system creates media containers, monitors processing status, and publishes content when ready. It supports both HTTP requests and Facebook SDK methods for maximum reliability and includes automatic retry mechanisms for failed uploads.

## Setup

1. **Connect Instagram Business Account** to a Facebook Page
2. **Configure Facebook Graph API credentials** with `instagram_basic` permissions  
3. **Update the "Configure Post Settings" node** with your Instagram Business Account ID
4. **Set media URLs** and captions in the configuration section
5. **Choose post type** (http_image, fb_reel, http_carousel, etc.)
6. **Test workflow** with sample content before going live

## How to customize this workflow to your needs

Modify the **post_type** variable to control content routing:
- Use `http_*` prefixes for direct API calls 
- Use `fb_*` prefixes for Facebook SDK calls
- **Use both HTTP and Facebook SDK nodes as fallback mechanisms** - if one method fails, automatically try the other for maximum success rate
- Add scheduling by connecting a **Cron node** trigger
- Integrate with **Google Sheets** or **Airtable** for content management
- Connect **webhook triggers** for automated posting from external systems
- Customize wait times based on your content file sizes
- **Set up error handling** to switch between HTTP and Facebook SDK methods when API limits are reached

## 🔗 Nodes Used

HTTP Request, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
