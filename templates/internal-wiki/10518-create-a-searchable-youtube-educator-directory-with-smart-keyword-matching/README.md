# 📖 Create a searchable YouTube educator directory with smart keyword matching

> ⚡ **237 views** · 📖 [Internal Wiki & Knowledge Base](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# 🎓 n8n Learning Hub — AI-Powered YouTube Educator Directory

## 📋 Overview

This workflow demonstrates how to use **n8n Data Tables** to create a searchable database of educational YouTube content. Users can search for videos by topic (e.g., "voice", "scraping", "lead gen") and receive formatted recommendations from top n8n educators.

### What This Workflow Does:
- **Receives search queries** via webhook (e.g., topic: "voice agents")
- **Processes keywords** using JavaScript to normalize search terms
- **Queries a Data Table** to find matching educational videos
- **Returns formatted results** with video titles, educators, difficulty levels, and links
- **Populates the database** with a one-time setup workflow

---

## 🎯 Key Features

✅ **Data Tables Introduction** - Learn how to store and query structured data  
✅ **Webhook Integration** - Accept external requests and return JSON responses  
✅ **Keyword Processing** - Simple text normalization and keyword matching  
✅ **Batch Operations** - Use Split in Batches to populate tables efficiently  
✅ **Frontend Ready** - Easy to connect with Lovable, Replit, or custom UIs

---

## 🛠️ Setup Guide

### Step 1: Import the Workflow
1. Copy the workflow JSON
2. In n8n, go to **Workflows** → **Import from File** or **Import from URL**
3. Paste the JSON and click **Import**

### Step 2: Create the Data Table
The workflow uses a Data Table called `n8n_Educator_Videos` with these columns:
- **Educator** (text) - Creator name
- **video_title** (text) - Video title
- **Difficulty** (text) - Beginner/Intermediate/Advanced
- **YouTubeLink** (text) - Full YouTube URL
- **Description** (text) - Video summary for search matching

**To create it:**
1. Go to **Data Tables** in your n8n instance
2. Click **+ Create Data Table**
3. Name it `n8n_Educator_Videos`
4. Add the 5 columns listed above

### Step 3: Populate the Database
1. Click on the **"When clicking 'Execute workflow'"** node (bottom branch)
2. Click **Execute Node** to run the setup
3. This will insert all 9 educational videos into your Data Table

### Step 4: Activate the Webhook
1. Click on the **Webhook** node (top branch)
2. Copy the **Production URL** (looks like: `https://your-n8n.app.n8n.cloud/webhook/1799531d-...`)
3. Click **Activate** on the workflow
4. Test it with a POST request:

```bash
curl -X POST https://your-n8n.app.n8n.cloud/webhook/YOUR-WEBHOOK-ID \
  -H "Content-Type: application/json" \
  -d '{"topic": "voice"}'
```

---

## 🔍 How the Search Works

### Keyword Processing Logic
The JavaScript node normalizes search queries:
- **"voice", "audio", "talk"** → Matches voice agent tutorials
- **"lead", "lead gen"** → Matches lead generation content
- **"scrape", "data", "scraping"** → Matches web scraping tutorials

The Data Table query uses **LIKE** matching on the Description field, so partial matches work great.

### Example Queries:
```json
{"topic": "voice"}        // Returns Eleven Labs Voice Agent
{"topic": "scraping"}     // Returns 2 scraping tutorials
{"topic": "avatar"}       // Returns social media AI avatar videos
{"topic": "advanced"}     // Returns all advanced-level content
```

---

## 🎨 Building a Frontend with Lovable or Replit

### Option 1: Lovable (lovable.dev)
Lovable is an AI-powered frontend builder perfect for quick prototypes.

**Prompt for Lovable:**
```
Create a modern search interface for an n8n YouTube learning hub:

- Title: "🎓 n8n Learning Hub"
- Search bar with placeholder "Search for topics: voice, scraping, RAG..."
- Submit button that POSTs to webhook: [YOUR_WEBHOOK_URL]
- Display results as cards showing:
  * 🎥 Video Title (bold)
  * 👤 Educator name
  * 🧩 Difficulty badge (color-coded)
  * 🔗 YouTube link button
  * 📝 Description

Design: Dark mode, modern glassmorphism style, responsive grid layout
```

**Implementation Steps:**
1. Go to lovable.dev and start a new project
2. Paste the prompt above
3. Replace `[YOUR_WEBHOOK_URL]` with your actual webhook
4. Export the code or deploy directly

### Option 2: Replit (replit.com)
Use Replit's HTML/CSS/JS template for more control.

**HTML Structure:**
```html
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;n8n Learning Hub&lt;/title&gt;
  &lt;style&gt;
    body { font-family: Arial; max-width: 900px; margin: 50px auto; }
    #search { padding: 10px; width: 70%; font-size: 16px; }
    button { padding: 10px 20px; font-size: 16px; }
    .video-card { border: 1px solid #ddd; padding: 20px; margin: 20px 0; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  <h1>🎓 n8n Learning Hub</h1>
  &lt;input id="search" placeholder="Search: voice, scraping, RAG..." /&gt;
  &lt;button onclick="searchVideos()"&gt;Search&lt;/button&gt;
  <div></div>

  &lt;script&gt;
    async function searchVideos() {
      const topic = document.getElementById('search').value;
      const response = await fetch('YOUR_WEBHOOK_URL', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({topic})
      });
      const data = await response.json();
      document.getElementById('results').innerHTML = data.Message || 'No results';
    }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
```

### Option 3: Base44 (No-Code Tool)
If using Base44 or similar no-code tools:
1. Create a **Form** with a text input (name: `topic`)
2. Add a **Submit Action** → HTTP Request
3. Set Method: POST, URL: Your webhook
4. Map form data: `{"topic": "{{topic}}"}`
5. Display response in a **Text Block** using `{{response.Message}}`

---

## 📊 Understanding Data Tables

### Why Data Tables?
- **Persistent Storage** - Data survives workflow restarts
- **Queryable** - Use conditions (equals, like, greater than) to filter
- **Scalable** - Handle thousands of records efficiently
- **No External DB** - Everything stays within n8n

### Common Operations:
1. **Insert Row** - Add new records (used in the setup branch)
2. **Get Row(s)** - Query with filters (used in the search branch)
3. **Update Row** - Modify existing records by ID
4. **Delete Row** - Remove records

### Best Practices:
- Use descriptive column names
- Include a searchable text field (like Description)
- Keep data normalized (avoid duplicate entries)
- Use the "Split in Batches" node for bulk operations

---

## 🚀 Extending This Workflow

### Ideas to Try:
1. **Add More Educators** - Expand the video database
2. **Category Filtering** - Add a `Category` column (Automation, AI, Scraping)
3. **Difficulty Sorting** - Let users filter by skill level
4. **Vote System** - Add upvote/downvote columns
5. **Analytics** - Track which topics are searched most
6. **Admin Panel** - Build a form to add new videos via webhook

### Advanced Features:
- **AI-Powered Search** - Use OpenAI embeddings for semantic search
- **Thumbnail Scraping** - Fetch YouTube thumbnails via API
- **Auto-Updates** - Periodically check for new videos from educators
- **Personalization** - Track user preferences in a separate table

---

## 🐛 Troubleshooting

**Problem:** Webhook returns empty results  
**Solution:** Check that the Description field contains searchable keywords

**Problem:** Database is empty  
**Solution:** Run the "When clicking 'Execute workflow'" branch to populate data

**Problem:** Frontend not connecting  
**Solution:** Verify webhook is activated and URL is correct (use Test mode first)

**Problem:** Search too broad/narrow  
**Solution:** Adjust the keyword logic in "Load Video DB" node

---

## 📚 Learning Resources

Want to learn more about the concepts in this workflow?
- **Data Tables:** [n8n Data Tables Documentation](https://docs.n8n.io)
- **Webhooks:** [Webhook Node Guide](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)
- **JavaScript in n8n:** "Every N8N JavaScript Function Explained" (see database)

---

## 🎓 What You Learned

By completing this workflow, you now understand:
✅ How to create and populate Data Tables  
✅ How to query tables with conditional filters  
✅ How to build webhook-based APIs in n8n  
✅ How to process and normalize user input  
✅ How to format data for frontend consumption  
✅ How to connect n8n with external UIs

---

**Happy Learning!** 🚀  
Built with ❤️ using n8n Data Tables

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
