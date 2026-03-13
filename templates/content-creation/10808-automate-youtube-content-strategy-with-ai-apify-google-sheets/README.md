# 🎬 Automate YouTube Content Strategy with AI, Apify & Google Sheets

> ⚡ **123 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## 📌 Overview

This advanced multi-phase n8n workflow automates the complete research, analysis, and ideation pipeline for a YouTube strategist. It scrapes competitor channels, analyzes top-performing titles and thumbnails, identifies niche trends, gathers audience sentiment from comments, and produces data-driven content ideas—automatically writing them into a structured Google Sheets dashboard.

This system is ideal for:

* YouTube creators
* Agencies
* Content strategists
* Automation engineers
* Anyone who wants to generate YouTube content ideas backed by real data

---

# 🧠 High‑Level Architecture

The workflow is split into **5 phases**, each building on the previous:

### **Phase 1 — Niche Outliers (Input: User Form)**

Scrapes 3 high‑quality channels from your niche, extracts their outlier videos, and analyzes why they work.

### **Phase 2 — Broad Niche Insights (Weekly)**

Scrapes the top trending content in your broad niche (e.g., "AI", "fitness", "personal finance") and logs weekly insights.

### **Phase 3 — Niche Insights (Daily)**

Scrapes the top videos in your specific micro‑niche daily to keep track of content momentum.

### **Phase 4 — Comment Analysis**

Analyzes real comments from your channel to understand what your audience likes, dislikes, and wants more of.

### **Phase 5 — Content Ideation**

Generates 3 highly‑optimized title + thumbnail concepts using all prior insights.

Everything is automatically logged into a Google Sheets dashboard.

---

# 🧩 Phase-by-Phase Breakdown

## ⭐ **Phase 1 — Niche Outliers (Form Trigger)**

1. User enters **3 YouTube channel URLs** in a form.
2. Workflow scrapes each channel using **Apify YouTube Scraper**.
3. Filters for top-performing videos.
4. Extracts: title, views, likes, thumbnail, URL.
5. AI analyzes:

   * Power words in titles (OpenRouter/GPT 4.1-mini)
   * Thumbnail attention hooks (OpenAI Vision)
6. All insights are appended into the **“Niche Outliers”** sheet.

**Purpose:** Understand what the best creators in your niche are doing.

---

## 🌐 **Phase 2 — Broad Niche Insights (Weekly — Sundays @ 5 AM)**

1. Workflow scrapes the top videos for a **broad niche** (e.g., “artificial intelligence”).
2. Analyzes:

   * Title structure
   * Power words
   * Thumbnail cues
3. Writes weekly insights to **“Broad Niche Weekly”** sheet.

**Purpose:** Stay informed about macro‑level trends.

---

## 🎯 **Phase 3 — Niche Insights (Daily @ 6 AM)**

1. Scrapes the top videos in your **specific micro‑niche** (e.g., “n8n automations”).
2. Runs title + thumbnail analysis.
3. Appends daily results to **“Niche Daily”**.
4. Results feed directly into Phase 5.

**Purpose:** Track daily momentum and trending formats.

---

## 💬 **Phase 4 — Comment Analysis (Channel Feedback)**

1. Scrapes your channel’s **latest 5 videos**.
2. Extracts up to **30 comments** from each.
3. Aggregates comments.
4. AI identifies:

   * What viewers love
   * What viewers dislike
   * What viewers are asking for
5. Stores patterns in **“Comment Analysis”** sheet.

**Purpose:** Understand real audience demand.

---

## 💡 **Phase 5 — Content Ideation Using AI**

Using insights from all previous phases:

* Top titles
* Power words
* Thumbnail patterns
* Daily niche trends
* Audience comment analysis
* Channel positioning

The **Creative Agent** produces:

* 3 optimized video titles
* 3 matching thumbnail concepts

These are appended to the **“Ideation”** sheet.

A Slack notification is sent when ideation is ready.

**Purpose:** Fully automated content idea generation.

---

# 🗂️ Outputs in Google Sheets

The workflow populates these tabs:

### **📌 Niche Outliers** (top competitor videos)

### **📌 Broad Niche Weekly** (weekly trend analysis)

### **📌 Niche Daily** (daily trend analysis)

### **📌 Comment Analysis** (audience sentiment)

### **📌 Ideation** (final titles + thumbnails)

---

# 🔧 What This Workflow Automates

✔ Competitor analysis
✔ Thumbnail + title breakdowns
✔ Daily niche tracking
✔ Weekly niche tracking
✔ Viewer sentiment analysis
✔ Fully AI‑generated content ideas
✔ Automatic data logging to Google Sheets
✔ Slack notifications

This is essentially a **24/7 AI YouTube strategist**.

---

# ⚙️ Setup Requirements

* **Apify API Key** (used in 5 scraper nodes)
* **OpenRouter API Key** (for GPT 4.1-mini intelligence)
* **OpenAI API Key** (for thumbnail image analysis)
* **Google Sheets OAuth2 Credential**
* Make a copy of the provided sheet template
* Fill Set nodes:

  * Phase II: Broad niche (e.g., "AI")
  * Phase III: Micro niche (e.g., "n8n automations")
  * Phase IV: Your Channel URL
  * Phase V: Your Channel Description

---

# 🧪 Testing Guide

1. Test the **Form Trigger** with 3 competitor channel URLs.
2. Test both **Schedule Triggers** (weekly + daily) manually.
3. Verify Sheets are receiving rows.
4. Run the full pipeline end‑to‑end.
5. Confirm Slack notification.

Everything should chain together smoothly.

---

# 🎉 Final Result

By the end of this workflow, you have a:

### 🧠 **Data‑driven YouTube strategy system**

that:

* studies your niche
* finds outliers
* understands your audience
* detects trends
* generates smart content ideas every day

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
