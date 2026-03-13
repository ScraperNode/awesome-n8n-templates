# 📱 Automated Instagram comment response with DMs & Google Sheets tracking

> ⚡ **9,293 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description
![Captura de pantalla 20250713 a las 18.55.13.png](fileId:1746)

This automation template is designed for Instagram marketers, influencers, and businesses looking to supercharge their Instagram engagement strategy. It automatically monitors Instagram post comments and sends personalized direct messages (DMs) to new commenters, while maintaining a smart tracking system to prevent duplicate messages. The workflow runs continuously, checking for new comments every 15 minutes and responding instantly to maintain high engagement rates.

***Note: This workflow uses the upload-post.com API for Instagram interactions and Google Sheets for contact tracking. The workflow is configured to monitor a specific Instagram post***

## Who Is This For?
- **Instagram Marketers & Influencers:** Automatically engage with every commenter by sending personalized DMs with valuable content, links, or offers.
- **E-commerce Businesses:** Convert Instagram comments into sales opportunities by instantly sending product links, discount codes, or catalog information via DM.
- **Content Creators & Coaches:** Build deeper relationships with your audience by automatically reaching out to commenters with additional resources, course links, or exclusive content.
- **Social Media Managers:** Scale client engagement without manual monitoring, ensuring no potential lead or follower interaction goes unnoticed.

## What Problem Does This Workflow Solve?
Manually monitoring Instagram comments and sending follow-up DMs is time-consuming and often leads to missed opportunities. This workflow addresses these challenges by:
- **Automated Comment Monitoring:** Continuously checks for new comments on your specified Instagram post every 15 minutes.
- **Smart Duplicate Prevention:** Uses Google Sheets to track already contacted users, preventing spam and maintaining professional communication.
- **Instant Response System:** Sends personalized DMs immediately when new comments are detected, maximizing engagement while the interaction is fresh.
- **Scalable Engagement:** Handles multiple commenters simultaneously without manual intervention, perfect for viral posts or high-engagement content.
- **Comprehensive Tracking:** Maintains detailed logs of all interactions including timestamps, usernames, and message content for analytics and follow-up.

## How It Works
1. **Post Configuration:** Set your Instagram post URL, reply message, and profile username in the configuration node.
2. **Comment Monitoring:** The workflow fetches all comments from your specified Instagram post using the upload-post.com API.
3. **Smart Filtering:** Compares new comments against your Google Sheets database to identify users who haven't been contacted yet.
4. **Automated DM Sending:** Sends personalized direct messages to new commenters with your configured message.
5. **Contact Tracking:** Records each successful interaction in Google Sheets with comment ID, username, message sent, timestamp, and post URL.
6. **Continuous Monitoring:** Automatically repeats the process every 15 minutes using the built-in scheduler.

## Setup
1. **Upload-Post API Credentials:** Create an account at upload-post [an API for social media](https://www.upload-post.com), connect your Instagram account and add your API credentials to the HTTP request nodes.
2. **Google Sheets Setup:** 
   - Create a Google Sheet with columns: comment_id, username, message_sent, timestamp, post_url
   - Connect your Google account to the Google Sheets nodes
   - Update the document ID in the "Read Contacted Users" and "Record Contacted User" nodes
3. **Instagram Post Configuration:** In the "Configure Post & Message" node, update:
   - `postUrl`: Your Instagram post URL to monitor
   - `replyMessage`: The DM message to send to commenters
   - `profileUsername`: Your Upload-post profile username
4. **Monitoring Schedule:** The workflow is set to run every 15 minutes. You can adjust this in the "Schedule Trigger" node based on your needs.

## Requirements
- **Accounts:** n8n, upload-post.com, Google (for Sheets access), Instagram business account.
- **API Keys & Credentials:** Upload-post.com API token, Google Sheets OAuth2 credentials.
- **Instagram Setup:** Business/Creator account with API access through upload-post.com.

## Features
- **Duplicate Prevention:** Advanced comment ID tracking prevents sending multiple DMs to the same user
- **Error Handling:** Robust error handling for API failures and edge cases
- **Detailed Logging:** Comprehensive console logging for debugging and monitoring
- **Flexible Configuration:** Easy to modify for different posts, messages, and monitoring intervals
- **Success Tracking:** Monitors both successful and failed DM attempts for analytics

Use this template to transform your Instagram engagement strategy, automatically converting every comment into a potential lead or deeper connection while maintaining professional communication standards.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
