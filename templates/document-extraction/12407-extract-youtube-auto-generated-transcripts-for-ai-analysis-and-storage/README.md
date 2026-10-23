# 🔬 Extract YouTube auto-generated transcripts for AI analysis and storage

> ⚡ **296 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🎬 Extract YouTube auto-generated transcripts and save them for AI processing

### **Direct YouTube API - Auto-Generated Only**
Extracts the **auto-generated transcript** from any YouTube video automatically.

---
## 🔄 **How It Works** *(5 Steps)*
1. **📥 Input**: `youtubeVideoUrl` only
2. **🌐 Fetch**: GET YouTube page HTML to extract INNERTUBE_API_KEY
3. **🔑 Extract**: Parse API key and video ID
4. **🎥 Metadata**: GET caption metadata
5. **🤖 Auto-Detect**: Find auto-generated transcript (`kind: asr`)
6. **📝 Fetch & Parse**: Download and clean transcript

## 🔄 **Setup steps**
1. Import the workflow to your n8n instance
2. Activate the workflow
3. Provide the YouTube video URL via webhook or manual trigger
4. The workflow will automatically extract the auto-generated transcript
5. Access the results in the specified output format

---
### 🎯 **Use Cases**
- Extract auto-generated transcripts automatically
- No language selection needed
- Perfect for bulk transcript collection
- AI processing, summarization, analysis
- Content accessibility

### ✅ **Output Format**
```json
{
  "fullTranscript": "Auto-generated transcript text...",
  "wordCount": 1234,
  "transcript": [...timestamps...]
}
```

## 🔗 Nodes Used

HTTP Request, Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
