# 🎬 Create YouTube SEO metadata and thumbnails from Google Drive videos with Gemini, LemonFox and upload-post

> ⚡ **84 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Automated YouTube SEO, Thumbnail Generation & Video Upload via AI, Google Drive & LemonFox**

---

## Pre-requesties:
* Video uploaded to gdrive.
* And sponsor file with the similar formart "videotitle_sponsors.txt"

### **Node-by-Node Functional Breakdown**

This workflow is an end-to-end "Content-to-Publish" engine. I’ve broken it down by the specific stage of production:

#### **Stage 1: The Intake & Access**
| Node Name | What it does |
| :--- | :--- |
| **When File Added in Drive** | **The Trigger:** Watches your "transcript" folder. The moment you drop a video file here, the engine starts. |
| **If Video Mime Type** | **The Gatekeeper:** Ensures the file is actually a video (e.g., .mp4) and not a random document or image before proceeding. |
| **Grant Temp File Access** | **The Key:** Temporarily changes the Drive file's permissions to "Anyone with link" so external AI tools (LemonFox) can download and process it. |

#### **Stage 2: Transcription & Data Prep**
| Node Name | What it does |
| :--- | :--- |
| **Post Audio to Lemonfox** | **The Ears:** Sends the video to LemonFox AI to extract the spoken word into a structured SRT (subtitle) format. |
| **Clean SRT Content** | **The Editor:** A JavaScript node that cleans up technical formatting issues and unescapes characters to make the text readable for the AI. |
| **Create Text File in Drive** | **The Archive:** Saves your clean transcript back to Google Drive for your records. |
| **Search/Fetch Sponsor Info** | **The Researcher:** Looks for a specific `.txt` file named after your video that contains sponsor details (Name/Email) so they can be credited. |



#### **Stage 3: AI Strategy & Creative**
| Node Name | What it does |
| :--- | :--- |
| **Content Analysis Agent** | **The Strategist:** Uses Gemini to analyze the transcript and find the "Big Idea." It then writes a high-CTR Title, SEO Description, and Tags. |
| **Parse Structured Output** | **The Translator:** Ensures the AI's creative writing is formatted as strict JSON so the next "Upload" step can understand it. |
| **Generate Thumbnail Image** | **The Artist:** Takes a specific "Thumbnail Prompt" written by the AI and uses Gemini (Nano Banana) to generate a high-quality 16:9 image. |

#### **Stage 4: Publishing & Cleanup**
| Node Name | What it does |
| :--- | :--- |
| **Upload to YouTube API** | **The Publisher:** Hits your upload endpoint, sending the original video link, the AI-generated metadata, and the AI-generated thumbnail. |
| **Delete Original File Permissions** | **The Security Guard:** Immediately revokes the "Anyone with link" access to your Google Drive file, locking it back down for privacy. |

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, AI Agent, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
