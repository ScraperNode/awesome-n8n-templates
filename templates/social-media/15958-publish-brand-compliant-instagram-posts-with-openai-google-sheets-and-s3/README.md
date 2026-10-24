# 📱 Publish brand-compliant Instagram posts with OpenAI, Google Sheets and S3

> ⚡ **90 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to read a Google Sheets content calendar, use OpenAI to generate brand-compliant Instagram captions and images from a master brand context file, watermark each image with your logo, publish posts via the Facebook Graph API, and write publishing results back to Google Sheets.

## How it works
1. Runs on a daily schedule and loads configuration values like your logo URL, Google Sheet URL, brand context URL, S3 bucket name, and Instagram Business ID.
2. Downloads the brand context file and your logo image, then resizes the logo for watermarking.
3. Reads Google Sheets to find today’s posts with Status set to Pending, and stops if no posts are found.
4. Sorts the pending posts by their scheduled time, then processes them one at a time and waits until each post’s exact scheduled Date/Time.
5. Uses OpenAI (gpt-4o-mini) to generate an Instagram caption plus layout metadata in a strict JSON format, then parses and sanitizes the JSON for downstream use.
6. Uses OpenAI (gpt-image-2) to generate a 1024×1024 image based on the brand context and the selected layout, then downloads the generated image and composites the resized logo at the calculated position.
7. Uploads the final image to Amazon S3 to obtain a public URL, creates and publishes an Instagram media container via the Facebook Graph API, and updates Google Sheets with Published/Failed status, caption, image URL, timestamp, and any error message.

## Setup
1. Add credentials for Google Sheets OAuth2, OpenAI API, AWS (IAM) for S3, and Facebook Graph API (Meta) with permissions to publish to your Instagram Business account.
2. Update the Set Config values with a public logoUrl, your googleSheetUrl, a direct raw-text/markdown masterContextUrl, your awsS3BucketName, and your instagramBusinessId.
3. Create or update your Google Sheet with the required headers (at minimum: Date, Time, Topic, Context, Status, Publish Time, Post Image, Post Caption, Error Message) and share it with the Google account used by the Google Sheets credential.
4. Ensure your S3 bucket allows public-read objects (or adjust the upload ACL strategy) so Instagram can fetch the image_url from the S3 URL.
5. Keep the Date and Time values in the sheet consistent with the workflow’s expectations (Date as YYYY-MM-DD and Time as HH:MM) so the wait step resumes correctly.

## Requirements
- n8n version 1.0+
- Google Sheets (with Editor access for the n8n service account)
- OpenAI API key (with sufficient limits for GPT-4o-mini and gpt-image-2 for Image Generation)
- AWS Account (S3 bucket configured for public reads and an IAM user and Your S3 bucket must have 'Block Public Access' disabled to use public ACLs. Buckets created after April 2023 have this enabled by default — disable it in your bucket settings under Permissions.)
- Instagram Business Account connected to a Facebook Page (Graph API scopes: `instagram_basic`, `instagram_content_publish`).

## Customization
- **Swap the LLM Engine:** If you prefer working with Google's models for complex data pipelines, you can easily swap the OpenAI text node out for a Gemini 2.5 Flash node, which handles strict JSON schema outputs brilliantly.
- **Scale the Watermark:** Adjust the width/height parameters in the `Resize Logo` node if your brand logo needs to be more prominent or subtle on the final output.
- **Add Notifications:** Connect a Slack or Gmail node directly to the `Format Error Alert` node so your team gets instant pings if a scheduled post fails to publish.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, AWS S3, Facebook Graph API, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
