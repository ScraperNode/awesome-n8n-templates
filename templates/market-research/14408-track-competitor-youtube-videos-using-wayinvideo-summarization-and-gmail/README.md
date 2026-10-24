# 📊 Track competitor YouTube videos using WayinVideo summarization and Gmail

> ⚡ **49 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Paste any competitor's YouTube URL in chat — and this n8n workflow does everything automatically. [WayinVideo](https://wayin.ai/api/) API reads the entire video, extracts the summary, key highlights with timestamps, and hashtags — then builds a clean styled HTML report and delivers it straight to your inbox via Gmail.

Built for **marketers, growth teams, agencies, and founders** who need to monitor competitors' video content without spending hours watching videos manually.

---

### What This Workflow Does

This automation handles your complete competitor video intelligence pipeline:

- **Chat-triggered** — User pastes any YouTube video URL and the workflow starts instantly
- **AI-powered summarization** — WayinVideo AI reads the video and extracts title, summary, and key highlights automatically
- **Smart polling loop** — Waits and retries every 30 seconds until processing is complete — no manual checking needed
- **Timestamped highlights** — Each highlight includes exact start/end timestamps and sub-events for deep insight
- **Hashtag extraction** — Pulls all relevant tags from the video automatically
- **Styled HTML email report** — Builds a professional branded report and sends it to your inbox via Gmail

---

### Setup Requirements

**Tools You'll Need:**
- Active n8n instance (self-hosted or n8n Cloud)
- WayinVideo account with API access
- Gmail account with OAuth2 access

**Estimated Setup Time:** 5–10 minutes

---

### Step-by-Step Setup

#### 1. Get Your WayinVideo API Key

WayinVideo is the AI engine that analyzes and summarizes your competitor's video content.

1. Go to [WayinVideo](https://wayin.ai/api/)
 and create a free/paid account
2. Navigate to **Dashboard → API** section
3. Copy your **Bearer API token**
4. Open the **"🎬 Submit Video for Summary"** node in n8n
5. Replace `YOUR_WAYINVIDEO_API_KEY` with your actual token in the Authorization header
6. Do the same in the **"🔄 Poll for Summary Results"** node — replace the same placeholder there too

&gt; ⚠️ The API key appears in **two places** — Submit node and Poll node. Replace both or the workflow will fail!

---

#### 2. Connect Gmail (OAuth2)

1. In n8n: Go to **Credentials → Add Credential → Gmail OAuth2 API**
2. Complete the Google OAuth authentication flow
3. Open the **"📨 Send Analysis via Gmail"** node
4. Select your Gmail credential from the dropdown
5. Replace `YOUR_REPORT_EMAIL@domain.com` with the actual email address where you want to receive reports

---

#### 3. Configure the Chat Trigger

This workflow is triggered when a user sends a video URL in the n8n chat interface.

- The trigger node receives `$json.chatInput` — this is the competitor video URL the user pastes
- Make sure your n8n instance has the **Chat Trigger** enabled
- No additional setup needed — it works out of the box

---

#### 4. Customise Settings (Optional)

**In the "🎬 Submit Video for Summary" node:**

| Parameter | Default Value | What It Does |
|---|---|---|
| `target_lang` | `en` | Summary language |
| `video_url` | `$json.chatInput` | Video URL from chat |

**Change summary language options:**
- `en` → English (default)
- `hi` → Hindi
- `es` → Spanish
- `fr` → French
- `de` → German

**In the "📧 Build Competitor Analysis Email" node:**
- Edit the HTML template to match your **brand colors**
- Add or remove sections like hashtags, highlights, or timestamps
- Modify the email header text or footer branding

---

#### 5. Test & Activate

1. Open n8n and go to this workflow
2. Click the **"Chat"** button to open the chat interface
3. Paste any competitor YouTube video URL and press send
4. Watch the workflow run step by step in the **Execution View**
5. Check your inbox — the styled HTML report should arrive within 1–3 minutes
6. Once confirmed, toggle the workflow **Active** at the top ✅

---

### How It Works (Step by Step)

**Step 1 — Chat Trigger**
User pastes a competitor video URL in the n8n chat. The URL is captured as `$json.chatInput` and passed to the next node.

**Step 2 — Submit Video to WayinVideo API**
The workflow sends a `POST` request to the WayinVideo API (`/api/v2/summaries`) with the video URL and target language. The API returns a **Job ID** used to track processing status.

**Step 3 — Wait 30 Seconds**
The workflow pauses for 30 seconds to give WayinVideo time to start processing. This avoids hitting the API too early before the summary is ready.

**Step 4 — Poll for Summary Results**
Using the Job ID from Step 2, the workflow calls:
```
GET /api/v2/summaries/results/{job_id}
```
to check if the summary is ready.

**Step 5 — Summary Ready? (Smart Loop)**
The IF node checks if the response status equals `SUCCEEDED`:
- **YES (summary ready)** → Moves forward to build the email report
- **NO (still processing)** → Loops back to "Wait 30 Seconds" and retries automatically

&gt; This smart retry loop runs every 30 seconds until the summary is done. No manual intervention needed.

**Step 6 — Build Competitor Analysis Email**
The Code node extracts all data from the API response and builds a styled HTML email containing:
- ✅ Video title and URL
- ✅ Full AI-generated summary
- ✅ Key highlights with start/end timestamps
- ✅ Sub-events with individual timestamps
- ✅ Hashtags and topic tags

**Step 7 — Send via Gmail**
The final Gmail node sends the complete HTML report directly to your specified inbox — formatted and ready to read.

---

### Troubleshooting

**Summary not generating / API returns empty:**
- Verify your WayinVideo API key is correct in **both** the Submit and Poll nodes
- Check your WayinVideo account has active credits
- Ensure the video URL is publicly accessible (private or age-restricted YouTube videos won't work)
- Try with a shorter video first (under 20 minutes) to test

**Workflow stuck in polling loop:**
- Long videos (1+ hour) can take 5–10 minutes to process — this is completely normal
- Check your WayinVideo dashboard to see if the job is still running
- If stuck for more than 15 minutes, check API status
**Email not being received:**
- Re-authenticate your Gmail OAuth2 credential
- Check your spam/junk folder
- Verify the recipient email address is correct in the Send Gmail node
- Make sure Gmail OAuth2 has send permissions enabled

**Video URL not accepted:**
- Paste only the raw URL with no extra text
- Use full YouTube URL format: `https://www.youtube.com/watch?v=...`
- Some region-locked or private videos may not be accessible by the API

---

### Support

Need help setting this up or want a custom version built for your specific use case?

📧 **Email:**  [info@incrementors.com](info@incrementors.com)
🌐 **Website:** [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)

## 🔗 Nodes Used

HTTP Request, Gmail, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
