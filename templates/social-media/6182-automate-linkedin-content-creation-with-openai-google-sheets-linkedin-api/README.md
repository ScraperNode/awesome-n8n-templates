# 📱 Automate LinkedIn content creation with OpenAI, Google Sheets & LinkedIn API

> ⚡ **122 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Build a completely automated LinkedIn content engine using n8n, OpenAI, Google Sheets, and the LinkedIn API. This workflow reads unpublished topics from a Google Sheet, generates engaging AI-powered post content and a relevant image, and publishes directly to LinkedIn — no manual effort required.

## How It Works
1. This system uses a scheduled trigger (e.g., daily at 9 AM) to:
3. Fetch the first **Unpublished** topic from your Google Sheet.
5. Generate a compelling, SEO-optimized post description using OpenAI.
7. Create a marketing image that includes the topic title visually.
9. Merge the content and image.
11. Publish the post to your LinkedIn profile.
13. Update the sheet to mark the topic as **Published**.

## Prerequisites
1.A Google Sheet with two columns: Topics and Status
2.A verified LinkedIn developer account and app
3.OpenAI API key
4.n8n cloud or self-hosted instance
5.LinkedIn OAuth2 credentials in n8n
6.Google Sheets OAuth2 credentials in n8n

## Google Sheet Example
| Topics                     | Status      |
| -------------------------- | ----------- |
| How to Automate LinkedIn   | Unpublished |
| Top AI Tools for Marketers | Unpublished |

##  Step-by-Step Setup
1. Clone or import the provided n8n workflow.
2. Create a Google Sheet with your post topics and mark them as Unpublished
3. Set up OAuth2 credentials in n8n for Google Sheets and LinkedIn.
4. Use the Schedule Trigger node to control posting frequency.
5. Adjust the OpenAI prompt to better match your tone.
6. Add a test topic and verify it generates, posts, and updates correctly.

## Customization Tips
1. Change posting frequency (daily/hourly) in the Schedule Trigger.
2. Modify the OpenAI prompt for different tones (professional, fun, educational).
3. Use a different image generation model or remove image generation if not needed.
4. Add approval steps before publishing, using Telegram/Slack/email nodes.

## 🔗 Nodes Used

Google Sheets, LinkedIn, Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
