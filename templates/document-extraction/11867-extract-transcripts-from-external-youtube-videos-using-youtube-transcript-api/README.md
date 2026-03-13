# 🔬 Extract transcripts from external YouTube videos using YouTube Transcript API

> ⚡ **1,030 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🚀 Try It Out!

### **YouTube Transcript API Extractor** *(Any Public Video)*
Extracts a clean transcript from a **videoId** using **youtube-transcript.io**.

---

### 🎯 **Use Cases**
- AI summaries, sentiment analysis, keyword extraction
- Internal indexing/SEO
- Content pipelines (blog/newsletter)
- Batch transcript processing

---

### 🔄 **How It Works** *(5 Steps)*
1. **📥 Input**: `youtubeVideoId`, `apiToken`
2. **🌐 API**: POST to youtube-transcript.io
3. **🧩 Parse**: Normalizes the response format
4. **🧹 Clean**: Normalizes text and whitespace
5. **✅ Output**: Transcript + metrics (`wordCount`/`charCount`)

---

### 🚀 **How to Use**
Payload:  
`{"youtubeVideoId":"xObjAdhDxBE", "apiToken": "xxxxxxxxxx"}`


**⚙️ Setup**:
- This sub-workflow is intended to be called from another workflow (Execute Workflow Trigger)

## 🔗 Nodes Used

HTTP Request, Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
