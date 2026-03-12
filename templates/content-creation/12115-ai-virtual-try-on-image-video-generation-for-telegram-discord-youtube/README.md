# 🎬 AI Virtual Try-On Image, Video Generation for Telegram, Discord & YouTube

> ⚡ **943 views** · 🎬 [Content Creation & Video](../)

## Description

## 🧥 Virtual Try-On Image & Video Generation (VLM Run)

### 📌 Overview

This n8n workflow enables a **Virtual Try-On experience** where users upload a dress image and the system:

* Combines it with a fashion model image
* Generates a **realistic try-on image**
* Generates a **fashion walking video**
* Automatically shares results via:

  * **Telegram**
  * **Discord**
  * **YouTube**

---

## 🚀 Use Cases

* Virtual fashion try-on
* AI fashion marketing
* Clothing e-commerce previews
* Social media fashion automation
* Influencer & brand demo pipelines


---

## ✨ Key Features

* 🖼️ Image-based virtual try-on (model wearing the dress)
* 🎥 AI-generated fashion video
* 🔗 Multi-platform publishing (Telegram, Discord, YouTube)
* 🧩 Modular, extensible workflow design

---

## 🧠 Workflow Architecture


### 🟨 Input

* **Dress Image** – Uploaded by user (Form Trigger)
* **Model Image** – Downloaded from predefined URL
* **Prompt** – Auto-constructed inside workflow


### 🟦 Output

* 🖼️ Try-On Image
* 🎥 Fashion Walk Video 
* 📤 Shared to:

  * Telegram (image/video)
  * Discord (image)
  * YouTube (video upload)

---

## 🔐 Required Credentials

You must configure the following credentials in n8n:

| Service  | Credential Type    |
| -------- | ------------------ |
| VLM Run  | `VLM Run API`      |
| Telegram | `Telegram Bot API` |
| Discord  | `Discord OAuth2`   |
| YouTube  | `YouTube OAuth2`   |

---

## ⚠️ Community Node Warning

&gt; **Important:** This workflow uses a **Community Node**
&gt; `@vlm-run/n8n-nodes-vlmrun`

### What this means:

* This node is **NOT installed by default** in n8n
* You must manually install it before using the workflow

### 📦 Installation

Run the following command in your n8n environment:

```bash
npm install @vlm-run/n8n-nodes-vlmrun
```

Then restart n8n.

📖 Community Nodes Documentation:
[https://docs.n8n.io/integrations/community-nodes/](https://docs.n8n.io/integrations/community-nodes/)

---

## 🔗 Nodes Used

HTTP Request, Telegram, Discord, YouTube, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
