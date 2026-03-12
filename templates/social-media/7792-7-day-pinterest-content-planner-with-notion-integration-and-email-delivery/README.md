# 📱 7-day Pinterest content planner with Notion integration and email delivery

> ⚡ **146 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 🗓️ 7-Day Pinterest Content Planner  
Plan a full week of scroll-stopping pins in under two minutes! 🚀  

### 🧩 What you get  
📌 **7 ready-to-post pins** (title, description, keywords, UTM-tagged link)  
🗂️ **Notion Ideas DB** integration *(optional)* or use the built-in sample list  
🔁 **Smart rotation** of boards & keywords so no two pins feel the same  
💌 **One clean email** with everything you need—just copy & paste into your scheduler  
🛟 **Built-in error alerts** so you never miss a post  

### 🔄 How it flows  
Manual Trigger → **Set User Config** →  
*(Notion enabled?)* Pull Ideas / Else use sample list →  
Build 7-Day Plan → Build Email → **Send Email** →  
*(On failure)* Error Trigger → **Email Owner**

### 🛠️ Prerequisites  
- Email credentials (SMTP or Gmail)  
- *(Optional)* Notion database `Ideas` with:  
  - **Title** (title)  
  - **URL** (url)  
  - **Board** (select)  
  - **Keywords** (rich text)

### ⚙️ Quick setup  
Update these in **Set: User Config**  
`FROM_EMAIL, EMAIL_TO_SELF, ENABLE_NOTION, NOTION_DB_ID, BRAND_SITE_URL, UTM_SOURCE, UTM_MEDIUM, UTM_CAMPAIGN, BOARD_NAMES, KEYWORDS`

### ⏰ Schedule  
Default: **Every Monday 08:00 (Asia/Ho_Chi_Minh)**  
Tweak the cron whenever you like.

### ✅ Test in 60 seconds  
1. Fill in `BRAND_SITE_URL` + UTM fields → hit **Manual Trigger**  
2. *(Optional)* Enable Notion, add DB ID → run again  
3. Flip on the weekly cron → relax!

### 📋 Compliance  
✅ Stickies  
✅ Manual path  
✅ No secrets in JSON  
✅ Timezone-aware Cron

## 🔗 Nodes Used

Cron, Send Email, Function, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
