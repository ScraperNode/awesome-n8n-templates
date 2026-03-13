# 🎣 Reddit to Google Sheets: tracking freelance/job leads

> ⚡ **137 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🧩 n8n Workflow Overview:

**Goal:**  
Get Reddit posts from specific subreddits, filter those mentioning freelance/gigs and n8n, extract top-level comments, remove mod replies, and store everything into Google Sheets.

---

## ⚙️ Step-by-step Node Explanation

### **Start (Trigger)**  
**Type:** Cron node  
**Runs:** Every 2 hours  
**Purpose:** Starts the workflow at regular intervals  

---

### **HTTP Request - Get Posts from Reddit**  
**Type:** HTTP Request  
**Method:** GET  
**Auth:** OAuth2 (Reddit App)  
**Purpose:** Pulls the 10 latest posts from any subreddits of your choice  

---

### **Filter Relevant Posts**  
**Type:** IF Node  
**Purpose:** Filters out noise, keeps only potential job leads  

---

### **HTTP Request - Get Post Comments**  
**Type:** HTTP Request  
**Auth:** OAuth2  
**Purpose:** Gets full comment thread for each post  

---

### **Extract Top-Level Comments**  
**Type:** Function Node  
**Purpose:** Code filters only top-level comments (ignores nested ones)  

---

### **Remove Mod Comments**  
**Type:** IF Node  
**Purpose:** Excludes mod replies that are usually auto-messages or rule enforcement  

---

### **Format Clean Data**  
**Type:** Set Node  
**Fields captured:**  
- Subreddit  
- Post Title  
- Post URL  
- Comment Body  
- Reddit Username  
- Timestamp  

---

### **Append to Google Sheets**  
**Type:** Google Sheets Node  
**Operation:** Append Row  
**Sheet:** Pre-created sheet with matching column names  
**Purpose:** Logs everything into your spreadsheet neatly  

---

## 💡 Bonus Logic:
- If a post has no comment → adds a blank  
- Runs smoothly with Reddit’s OAuth2 (no scraping)  
- All tools used are free-tier  

---

## 📹 See It in Action:
I posted a quick video walkthrough on YouTube (no audio, just execution):  
👉 [https://youtu.be/JsUVVhYm8p4](https://youtu.be/JsUVVhYm8p4)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Reddit, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
