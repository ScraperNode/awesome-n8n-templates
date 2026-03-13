# 📱 Automated YouTube video uploads with 12h interval scheduling in JST

> ⚡ **369 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

This workflow automates a **batch upload of multiple videos to YouTube**, spacing each upload **12 hours apart** in **Japan Standard Time (UTC+9)** and automatically adding them to a playlist.

### ⚙️ Workflow Logic

1. **Manual Trigger** — Starts the workflow manually.  
2. **List Video Files** — Uses a shell command to find all `.mp4` files under the specified directory (`/opt/downloads/单词卡/A1-A2`).  
3. **Sort and Generate Items** — Sorts videos by day number (`dayXX`) extracted from filenames and assigns a sequential `order` value.  
4. **Calculate Publish Schedule (+12h Interval)** —  
   - Computes the next rounded JST hour plus a configurable buffer (default 30 min).  
   - Staggers each video’s scheduled time by `order × 12 hours`.  
   - Converts JST back to UTC for YouTube’s `publishAt` field.  
5. **Split in Batches (1 per video)** — Iterates over each video item.  
6. **Read Video File** — Loads the corresponding video from disk.  
7. **Upload to YouTube (Scheduled)** — Uploads the video privately with the computed `publishAtUtc`.  
8. **Add to Playlist** — Adds the newly uploaded video to the target playlist.

### 🕒 Highlights

- **Timezone-safe:** Pure UTC ↔ JST conversion avoids double-offset errors.  
- **Sequential scheduling:** Ensures each upload is 12 hours apart to prevent clustering.  
- **Customizable:** Change `SPAN_HOURS`, `BUFFER_MIN`, or directory paths easily.  
- **Retry-ready:** Each upload and playlist step has retry logic to handle transient errors.

### 💡 Typical Use Cases

- Multi-part educational video series (e.g., A1–A2 English learning).  
- Regular content release cadence without manual scheduling.  
- Automated YouTube publishing pipelines for pre-produced content.

---

**Author:** Zane  
**Category:** Automation / YouTube / Scheduler  
**Timezone:** JST (UTC+09:00)

## 🔗 Nodes Used

YouTube, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
