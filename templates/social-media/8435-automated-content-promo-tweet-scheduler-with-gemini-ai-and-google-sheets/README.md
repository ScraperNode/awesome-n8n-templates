# 📱 Automated content & promo tweet scheduler with Gemini AI and Google Sheets

> ⚡ **376 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Twitter Automation (n8n Template)

## 🚀 What it does
- Posts a **unique tweet every 2 hours**
- **70% content tweets** (10 proven templates)  
- **30% promo tweets** pulled from Google Sheets  
- Logs past tweets to avoid **duplicates**  

---

## ✅ Requirements
- **n8n** 
- **Google Sheets** with 2 tabs:  
  - `posts` → log of past tweets (`PAST TWEETS`, `Date`)  
  - `promo` → promo source (`name`, `last_posted`, optional extra fields)  
![twitterinfluencerexcel.png](fileId:2340)
- **Twitter (X)** account with OAuth2 write access  
- **Gemini API key** (for text generation)  

---

## ⚡ Results
1. Automated motivational posts
![twitterautomation1.png](fileId:2338)

2. Automated promo posts
![twitterautomation2.png](fileId:2339)
---

## 🔄 How It Works
1. Triggers **every 2 hours** (optional: random delay up to 120 min).  
2. Randomly selects **content (70%)** or **promo (30%)**.  
3. **Content path:** checks `posts`, generates tweet, logs new one.  
4. **Promo path:** picks row from `promo`, generates tweet, updates `last_posted`.  
5. Posts to **Twitter** automatically.  

---

## 🎯 Content Templates
Transformation · Hook–List–Takeaway · Interesting Fact · Metaphor · Contrast · Motivation · Triad · Comparison · 80/20 Rule · Callout  

---

## ⚙️ Customization
| Setting | Where | Example |
|---------|-------|---------|
| Ads probability | Code node | Change `Math.random() &lt; 0.3` → `0.2` for 20% |
| Templates | Code node | Edit the `templates` array |
| Cadence | Schedule Trigger | Cron or fixed hours |
| Random delay | Time randomizer | Enable node (0–120 mins) |

---

## 🛠️ Troubleshooting
| Issue | Fix |
|-------|-----|
| Repeated tweets | Ensure `posts` has column `PAST TWEETS` |
| Not posting | Reconnect Twitter creds with write access |
| Promo never used | Increase ads probability (e.g., `0.4`) |

## 🔗 Nodes Used

X (Formerly Twitter), Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
