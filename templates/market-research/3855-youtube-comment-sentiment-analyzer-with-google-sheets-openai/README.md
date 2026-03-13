# 📊 🚀 YouTube comment sentiment analyzer with Google Sheets & OpenAI

> ⚡ **661 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# 🚀 YouTube Comment Sentiment Analyzer with Google Sheets & OpenAI

---

### Who Should Use This?
Influencers, marketers, and data teams who need **instant insights** into audience sentiment—without manual exports or scattered tools.

---

### The Challenge
- **Manual exports** from YouTube Studio  
- **Time-consuming** sentiment tagging  
- **Data scattered** across multiple platforms  

Our workflow automates **everything**: from fetching comments to logging analysis—so you can focus on insights, not spreadsheets.

---

### What You’ll Get
1. **Dynamic Input**  
   Read a list of YouTube URLs from your Google Sheet.  
2. **Full Comment Harvest**  
   Pull **all** top-level comments (handles pagination 100/page).  
3. **Deep Sentiment Scan**  
   Classify each comment as **Positive**, **Neutral**, or **Negative** using OpenAI.  
4. **Smart Formatting**  
   Capture metadata (author, likes, timestamp) alongside sentiment.  
5. **Seamless Storage**  
   Append or update rows in your Google Sheet—ready for reporting.

---

### Easy Setup
1. **Prepare Google Sheet**  
   - Create a sheet with a `video_urls` column (full YouTube links).  
   - Add and authorize a Google Sheets Oauth or service-account credential in n8n.  
2. **Enable YouTube API**  
   - Activate Data API v3 in Google Cloud, grab an API key, and save as an HTTP credential in n8n.  
3. **Configure OpenAI**  
   - Enter your API key under the “OpenAI Chat” credential in n8n.  
4. **Import the Workflow**  
   - Paste the provided JSON into n8n.  
5. **Run Manually**  
   - Use the **Manual Trigger** node to start fetching and analyzing comments on demand.

---

### Customize to Your Needs
- **Filter Comments**: Add an IF node to process only comments with specific keywords or minimum likes.  
- **Automate Schedule**: Swap the Manual Trigger for a Cron node if you later want periodic runs.  
- **Extended Analysis**: Swap sentiment classification for topic extraction, summarization, or translation by tweaking the LLM prompt.  
- **Alternate Destinations**: Replace Google Sheets with Airtable, Notion, or any database node.

---

### Tags
``YouTube`` ``Google Sheets`` ``OpenAI`` ``Sentiment Analysis`` ``n8n`` ``Manual Trigger``

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI Chat Model, Sentiment Analysis

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
