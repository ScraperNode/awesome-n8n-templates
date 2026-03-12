# 🎬 Curate RSS feeds into daily content ideas via email with Notion & Telegram options

> ⚡ **102 views** · 🎬 [Content Creation & Video](../)

## Description

**Graceful Content Sparks — RSS → Notion (n8n)**

---

📰 Curate RSS Feeds into Daily Content Ideas via Email with Optional Notion Storage
Wake up to a burst of inspiration every morning! 🌞
🚀 What it does
🔄 Polls unlimited RSS feeds (blogs, YouTube, Substack, podcasts, you name it)
✍️ Re-writes each new headline into 5–10 scroll-stopping content angles
📧 Delivers a tidy email digest at 9 AM sharp (or whenever you choose)
🗂️ Auto-saves every idea into a Notion database (toggle on/off)
🛟 Self-healing error alerts keep the pipeline bullet-proof
📐 Angles? Think “ready-made tweets”
An angle is a bite-sized spin on the original post.
Example:
Original RSS headline: “TikTok Rolls Out 15-Minute Videos”
Angle: “3 product-demo formats you can finally fit into TikTok’s new 15-min limit (+ templates)”
🎯 Use-cases
🧑‍💻 Social media managers who need fresh posts daily
🖋️ Newsletter writers hunting for curated news blurbs
📈 Growth teams mining competitor blogs for campaign sparks
🏝️ Solopreneurs who’d rather sip coffee than scroll feeds
⚙️ 30-second setup
Drop your RSS URLs into the list node 🪄
Add SMTP or Gmail creds 📧
(Optional) Flip on Notion mode → paste your Ideas DB ID
Hit Manual Trigger to test → switch to daily cron when you’re happy 🎉
✅ Compliance checklist
✅ Stickies
✅ Manual trigger path
✅ Zero secrets in JSON
✅ Timezone-aware cron

## 🔗 Nodes Used

Cron, Send Email, Function, RSS Read, Telegram, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
