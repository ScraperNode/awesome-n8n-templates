# 📱 Create X thread variants from new blog posts with RSS and SocialSwarm

> ⚡ **9 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow monitors a blog’s RSS feed and uses SocialSwarm to generate multiple X/Twitter thread variants for each new post, then splits the variants into individual items so you can route them to your publishing or review tools.

## How it works
1. Triggers when a new item appears in the specified RSS/Atom feed.
2. Sends the new post URL to SocialSwarm to generate three complete X/Twitter thread variants with different hooks.
3. Splits the returned variants array so each thread variant becomes its own item with hook, tweet count, and tweet text plus character counts.
4. Outputs the individual thread items for you to connect to a destination like Slack, Notion, Google Sheets, or a scheduling tool.

## Setup
1. Update the RSS Feed URL to the blog or newsletter feed you want to monitor.
2. Create and add a SocialSwarm API credential in n8n using an API key from the SocialSwarm developer portal.
3. Optionally adjust the number of variants generated (variantCount) and add your own downstream node(s) to store, review, schedule, or post the threads.

## Requirements
- An RSS/Atom feed — your blog, a newsletter, a client's site. Any feed URL works.
- A SocialSwarm API key — create one on the developer portal. There's a free plan and it doesn't ask for a card, so you can run this end to end before deciding anything.
- - Nothing else. The RSS trigger and Split Out nodes need no credentials, so SocialSwarm is the only connection to set up.

## Customization
- Feed URL — replace the placeholder on the On new blog post node. It currently points at the n8n blog so the template runs out of the box.
- Number of variants — 3 by default, or switch to 5 for more angles on the same post.
- Text instead of URLs — set Source Type to Text and map any field into Source Text to repurpose newsletters, release notes, or docs rather than a feed.
- Where the threads go — the workflow deliberately ends after Split Out. Add your own node: Slack or Discord for review, Google Sheets or Notion as a content queue, Buffer or Typefully to schedule, or X to post directly.
- One post at a time — a manual run processes every recent feed item. Add a Limit node after the trigger if you only want the newest.

## Additional info
Each run returns complete, ready-to-post threads — not summaries. Every variant is built around a different hook (curiosity, challenge, story, stat, question), so you get genuinely distinct takes on the same post rather than reworded copies.

Each thread is 4–6 tweets, and every tweet carries its own character count, so nothing needs re-checking before it goes out.

Output shape: variants[], each with hook, tweetCount, and tweets[] containing text and charCount.

Typical run takes about 15–20 seconds for 3 variants.

## 🔗 Nodes Used

RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
