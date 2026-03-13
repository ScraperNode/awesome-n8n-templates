# 📊 Send daily 4K Bluray preorder updates from Blu-ray.com to Discord

> ⚡ **209 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This is a simple webpage scraper that  specifically grabs today's newest 4K Bluray Preorders as listed on the Blu-ray.com website.  This is a scheduled workflow that can run every day and will post a formatted summary message of links to a Discord channel of your choice.

## Minimal setup required:
- Just create a webhook for the channel you want posted to in Discord and provide that in the final step.
- The timezone format step is set to East Coast (NYC) by default, feel free to change.
- No API keys or any special configuration needed (beyond your Discord webhook)
- Feel free to customize the formatting of the message that gets posted 👍


## How it works:
- First format todays date to match the formatting used on the website
- Grab the HTML for the preorders page at www.blu-ray.com
- Filter only the hyperlinks for each Bluray on the page
- Then further filter only those with an html header matching today's date
- Format how you want the message to be sent to your Discord channel (in this case a simple list of Hyperlinks for each Title)
- Send to Discord!

## Disclaimer:
- **This should be only for personal use.**
- The links go back to the blu-ray.com website, which is a good thing!
- Don't abuse this by slamming their site with some crazy level of automation frequency.
- Support the blu-ray.com website by using their affiliate links whenever you do want to preorder a title ;) 
- This is one of my first shared templates, so it may not be super optimal or perfect but it works for my needs and hopefully you'll find some use out of it!
- Discord currently has a 2000 character limit on webhook messages. Some of the messages may get truncated as a result.

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
