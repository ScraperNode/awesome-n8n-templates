# 📱 Automate YouTube video notifications to Slack

> ⚡ **209 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# 🎬 YouTube New Video → Auto-Post Link to Slack

This workflow automatically checks your **YouTube channel’s RSS feed** every 30 minutes and posts a message to Slack when a new video is published. It includes the title, description snippet, publish date, and a direct “Watch Now” button.  

---

## ⚙️ How It Works

1. **Check Every 30 Minutes**  
   - A **Cron node** runs on a 30-minute interval.  
   - Keeps monitoring the channel RSS feed for updates.  

2. **Fetch YouTube RSS**  
   - The **HTTP Request node** retrieves the channel’s RSS feed.  
   - Uses the format:  
     ```
     https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_CHANNEL_ID
     ```  

3. **Parse RSS & Check for New Video**  
   - A **Code node** extracts video info:  
     - Title  
     - Link  
     - Description  
     - Published date  
   - Sorts by most recent publish date.  
   - Ensures only **new videos within last 2 hours** are processed (avoids duplicate posts).  

4. **Format Slack Message**  
   - Builds a **rich Slack message** with:  
     - Video title  
     - Description preview  
     - Published date  
     - Button: “🎥 Watch Now”  

5. **Post to Slack**  
   - Sends the formatted message to your chosen Slack channel (default: `#general`).  
   - Includes custom username/icon for branding.  

---

## 🛠️ Setup Steps

### 1. Get YouTube Channel RSS
- Go to your channel page → **View Page Source**.  
- Find: `channel/UCxxxxxxxxxx` (your channel ID).  
- Construct RSS feed:  
https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_CHANNEL_ID
- Replace `YOUR_CHANNEL_ID_HERE` in the HTTP Request node.  

### 2. Connect Slack
- Create a Slack app at [api.slack.com](https://api.slack.com).  
- Add OAuth scopes: `chat:write`, `channels:read`.  
- Install to your workspace.  
- In n8n, connect your Slack OAuth credentials.  

### 3. Adjust Timing (Optional)
- Default = runs every 30 minutes.  
- Modify the **Cron node** if you want faster or slower checks.  

---

## 📺 Example Slack Output

🎬 New Video Published!
How to Automate Your Business with n8n
📅 Published: Aug 29, 2025
Learn how to connect your apps and automate repetitive tasks using n8n…

With a clickable **🎥 Watch Now** button linking directly to the video.

---

⚡ With this workflow, your Slack team is always up to date on new YouTube uploads — no manual link sharing needed.

## 🔗 Nodes Used

Cron, HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
