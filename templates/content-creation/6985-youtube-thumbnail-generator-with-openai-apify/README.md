# 🎬 YouTube thumbnail generator with OpenAI & Apify

> ⚡ **2,000 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow automatically generates a custom YouTube thumbnail using OpenAI’s DALL·E based on a YouTube video’s transcript and title. It uses [Apify](https://apify.com) actors to extract video metadata and transcript, then processes the data into a prompt for DALL·E and creates a high-resolution image for use as a thumbnail.

---

### ✅ Key Features

- **📥 Form Trigger**: Accepts a YouTube URL from the user.
- **🧠 GPT-4o Prompt Creation**: Summarizes transcript and title into a descriptive DALL·E prompt.
- **🎨 DALL·E Image Generation**: Produces a clean, minimalist YouTube thumbnail with OpenAI’s image model.
- **🪄 Automatic Image Resizing**: Resizes final image to YouTube specs (1280x720).
- **🔍 Apify Integration**: Uses two Apify actors:
  - `Youtube-Transcript-Scraper` to extract transcript
  - `youtube-scraper` to get video metadata like title, channel, etc.

---

### 🧰 What You'll Need

- **OpenAI API Key**
- **Apify Account & API Token**
- **YouTube video URL**
- **n8n instance (cloud or self-hosted)**

---

### 🔧 Step-by-Step Setup

#### 1️⃣ Form & Parameter Assignment
- **Node**: `Form Trigger`
- **How it works**: Collects the YouTube URL via a form embedded in your n8n instance.
- **API Required**: None
- **Additional Node**: `Set`
  - Converts the single input URL into the format Apify expects: an array of `{ url }` objects.

#### 2️⃣ Apify Actors for Data Extraction
- **Node**: `HTTP Request (Query Metadata)`
  - **URL**: `https://api.apify.com/v2/acts/streamers~youtube-scraper/run-sync-get-dataset-items`
  - **Payload**: JSON with `startUrls` array and filtering options like `maxResults`, `isHD`, etc.
- **Node**: `HTTP Request (Query Transcript)`
  - **URL**: `https://api.apify.com/v2/acts/topaz_sharingan~Youtube-Transcript-Scraper/run-sync-get-dataset-items`
  - **Payload**: `startUrls` array
- **API Required**: Apify API Token (via HTTP Query Auth)
- **Notes**: You must have an Apify account and actor credits to use these actors.

#### 3️⃣ OpenAI GPT-4o & DALL·E Generation
- **Node**: `OpenAI (Prompt Creator)`
  - Uses the transcript and title to generate a DALL·E-compatible visual prompt.
- **Node**: `OpenAI (Image Generator)`
  - Resource: `image`
  - Model: DALL·E (default with GPT-4o key)
- **API Required**: OpenAI API Key
- **Prompt Strategy**:
```markdown
Create a minimalist YouTube thumbnail in an illustration style. The background should be a very simple, uncluttered setting with soft, ambient lighting that subtly reflects the essence of the transcript. The overall mood should be professional and non-cluttered, ensuring that the text overlay stands out without distraction. Do not include any text.
```

#### 4️⃣ Resize for YouTube Format
- **Node**: `Edit Image`
- **Purpose**: Resize final image to 1280x720 with `ignoreAspectRatio` set to true.
- **No API required** — this runs entirely in n8n.

---

### 👤 Created By
**Robert Breen**  
Automation Consultant | AI Workflow Designer | n8n Expert  
📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🌐 [ynteractive.com](https://ynteractive.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)

---

### 🏷️ Tags
`openai` `dalle` `youtube` `thumbnail generator` `apify` `ai automation` `image generation` `illustration` `prompt engineering` `gpt-4o`

## 🔗 Nodes Used

Edit Image, HTTP Request, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
