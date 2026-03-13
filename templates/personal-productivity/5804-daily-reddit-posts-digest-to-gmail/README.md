# ⚡ Daily Reddit posts digest to Gmail

> ⚡ **365 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

**This n8n workflow automatically scrapes the latest posts from a specified Reddit subreddit every day at 9 AM and sends a neatly formatted HTML email summary to your inbox. It highlights new community posts, including post details like title, author, flair, upvotes, comments, and a brief preview — making it ideal for content curators, community managers, or Reddit enthusiasts who want daily updates.**

## How It Works
Trigger: The schedule node runs the workflow once every 24 hours at 9:00 AM.

Reddit Scrape: A request is made to the desired subreddit (defined in the HTTP Request node) to pull post data.

Filter & Format: JavaScript code filters posts created in the last 24 hours and transforms the data into structured summaries.

Email Composition: A dynamic HTML email is generated summarizing the post details. If no new posts are found, a fallback message is displayed.

Email Delivery: Gmail node sends the email with subject, content, and timestamp.

## Use Cases
✅ Stay informed about the latest subreddit activity.

✅ Automate daily newsletters for Reddit topics.

✅ Monitor niche communities for engagement trends.

## Requirements
Reddit subreddit link (set in the HTTP Request node).

Gmail account with OAuth2 credentials set up in n8n.

User-Agent string customized for your Reddit scraping.

Adjust schedule as per your preferred timezone.

Google Sheet Setup (Not required for this workflow)
No sheet integration is involved here.

## Customizing the Workflow
You can personalize this workflow by:

Replacing the User-Agent value with a meaningful identifier to avoid Reddit rate-limiting.

Updating the subreddit URL in the HTTP Request node.

Changing the Gmail recipient address in the Send Gmail node.

Tweaking the HTML email styling in the Prepare Email Content node.

Adjusting schedule time/frequency in the Trigger node.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
