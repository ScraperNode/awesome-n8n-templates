# 🎬 Generate UGC video ads from product images with Kie.ai Sora 2 + Tavily Research

> ⚡ **2,992 views** · 🎬 [Content Creation & Video](../)

## Description

## 🧠 What It Does
This n8n workflow automatically generates **10-second UGC-style portrait video ads** for any product — entirely powered by AI.
Simply provide your **Product Name**, **Prompt or Idea**, and **Image Link** in Google Sheets, and the system will research your product, craft a modern video prompt, and generate a professional short ad using **Kie.ai Sora 2**.
It combines **Tavily search**, **OpenAI prompt engineering**, and **Kie.ai image to video generation** to create fresh, authentic, and trending video ads that look like real influencer content or cinematic brand clips — perfect for social media campaigns.

## 💡 Why This Workflow?
Creating quality short-form ads usually takes a video editor, copywriter, and creative researcher.
This workflow automates all of that. It:
- Researches your product’s category and trends using **Tavily Search API**
- Generates optimized **video prompts** using **AI Agent**
- Automatically creates **realistic 10-second videos** via **Kie.ai Sora 2**
- Updates your CRM (Google Sheets) with the finished video link
- Handles retries, errors, and success tracking automatically

Ideal for **UGC marketers**, **product owners**, and **AI automation freelancers** who want to scale ad content creation.

👤 Who It’s For
- **E-commerce brands** wanting fast ad content for new or existing products
- **Freelancers and agencies** creating short-form AI ad videos for clients
- **Automation enthusiasts** building no-code AI video generation systems
- **Marketing teams** testing multiple product angles and styles efficiently

## ⚙️ How It Works
1. **Manual Trigger**
Run the workflow manually to start video generation for one product entry at a time.
2. 📄 **Google Sheets Integration**
The workflow reads product info (Name, Prompt, Image Link, Processed Status) and fetches one unprocessed row.
3. 🤖 **AI Prompt Engineering (via OpenAI)**
The **AI Agent** uses a custom system message to act as a video prompt engineer, designing rich cinematic or UGC-style prompts for Sora 2.
   - It researches trends and related product insights through **Tavily**
   - Describes detailed **scene, tone, lighting, camera motion**, and **emotion**
   - Adapts to either cinematic or handheld influencer style automatically
4. 🎬 **Sora 2 Video Generation (Kie.ai API)**
The refined video prompt and product image are sent to Kie.ai Sora 2 to create a 10-second portrait video.
5. ⏳ **Progress Monitoring**
A Wait node (15 s) plus a Switch node checks the generation status:
   - ✅ Success → Save video link
   - ⚠️ 500 Error → Log error message
   - 🔁 Pending → Loop back to wait and recheck
6. 🗂️ **Save to Google Sheets**
Once successful, the workflow updates your CRM sheet with:
   - Video Link (no watermark)
   - Processed = “Yes”

## 🛠 How to Set It Up
1. Open **n8n** (Cloud or Self-Hosted).
2. Import the workflow file: Sora 2 Video Generator.json.
3. Create and connect these credentials:
   - 🧾 Google Sheets OAuth 2.0
   - 🔍 Tavily Search API (Header Auth)
   - 🤖 OpenAI API Key
   - 🎥 Kie.ai Sora 2 API (Header Auth)
4. Update the Google Sheets link inside the nodes to your own sheet.
5. Ensure the sheet columns include:
`ID | Product Name | Prompt | Image Link | Video Link | Processed`
6. Click **Execute Workflow** to begin generating your first ad video.

## ⚡ Example Use Case
`You’re launching a new skincare product. Add its name, image, and a short description to your Google Sheet — and this workflow will automatically research the market, generate a trending 10-second UGC ad prompt, and produce a ready-to-share Sora 2 video link — all hands-free.`

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
