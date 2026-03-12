# 📱 Automate social media content creation & publishing with AI & human approval flow

> ⚡ **914 views** · 📱 [Social Media & Email Marketing](../)

## Description

## ✅ What problem does this workflow solve?

Managing content for multiple social media platforms manually is time-consuming and error-prone. This workflow automates **content creation**, **image generation**, **approval flows**, and **publishing** for LinkedIn, Twitter (X), and Instagram using AI—while still keeping human oversight in place.

---

## 💡 Main Use Cases

- 📝 Automatically generate AI-powered social media content and images.
- 🧠 Create platform-specific posts for **LinkedIn**, **Twitter (X)**, and **Instagram**.
- ✅ Route each post through **human approvals**—first for prompt, then for final content.
- 📤 Publish approved posts to all platforms seamlessly.
- 📊 Maintain an audit trail with all steps logged in Google Sheets.

---

## 🧠 How It Works – Step-by-Step

### 1. ✍️ Topic Input
- A new **topic and description** is added to a **Google Sheet**.
- A **scheduled trigger** starts the automation at regular intervals (daily, weekly, etc.).

### 2. 🧠 AI-Powered Prompt Generation
- AI generates **tailored prompts** for each platform:
  - LinkedIn
  - Twitter (X)
  - Instagram
- Prompts are logged in the sheet and paused for **human approval**.

### 3. 🖼️ Content + Image Creation (Post Drafts)
- Once approved, the workflow:
  - Uses AI to write full post captions
  - Generates platform-specific images (via DALL·E, Stable Diffusion, or other AI image tools)
- Draft content is stored in Google Sheets.

### 4. 🧑‍💻 Final Content Approval
- Posts pause again for final **manual approval**.
- If approved → move to publishing.
- If rejected → status updated in the sheet, post is skipped.

### 5. 📤 Auto-Publishing to Social Platforms
- Approved content is published automatically:
  - ✅ **LinkedIn** – via LinkedIn API
  - 🐦 **Twitter (X)** – post text + media via Twitter API
  - 📸 **Instagram** – via Meta Graph API (image + caption)

### 6. 📊 Logging & Reporting
- Google Sheets is updated with:
  - Final post text
  - Approval timestamps
  - Post URLs
  - Status (Posted / Rejected)

---

## 🔧 Tools & Integrations Used

- **OpenAI / GPT-4** – for prompt and content generation
- **AI Image Generator** – DALL·E, Replicate, etc.
- **Google Sheets** – as the central control + approval hub
- **LinkedIn API**
- **Twitter API (X)**
- **Instagram Graph API**
- **n8n Scheduler, If Nodes, and Pauses** – to handle flow control & approvals

---

## 👤 Who can use this?

This is perfect for:
- 📢 **Marketing teams**
- 🧑‍💼 **Solo founders managing content**
- 🧠 **Agencies offering social media management**
- ⚙️ **Ops teams building internal automation**

Whether you're managing 3 posts a week or 30, this system keeps your **content AI-powered and human-approved**—on autopilot.

---

## 🛠 Customization Ideas

- Add Slack or email alerts for approval stages
- Pull trending topics using a news API or Twitter Trends
- Add a weekly content summary report sent via email
- Expand to Facebook, Threads, or Pinterest

---

## 🚀 Ready to Launch?

Just configure:
- ✅ Google Sheet with topic list & approval columns
- ✅ API credentials for LinkedIn, Twitter, and Instagram
- ✅ OpenAI and image generation API keys

…and your **fully automated, human-approved social content engine** is ready to go!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, X (Formerly Twitter), LinkedIn, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
