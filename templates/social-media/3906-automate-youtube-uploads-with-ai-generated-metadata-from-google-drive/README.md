# 📱 Automate YouTube uploads with AI-generated metadata from Google Drive

> ⚡ **15,423 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### 👥 Who Is This For?  
Content creators, marketing teams, and channel managers who want a simple, hands‑off solution to upload videos and automatically generate optimized metadata from video transcripts.

### 🛠 What Problem Does This Solve?  
Manual video uploads with proper metadata creation is time‑consuming and repetitive. This workflow fully automates:  
* Monitoring a specific Google Drive folder for new video uploads  
* Seamless YouTube upload processing  
* Transcript extraction for context understanding  
* AI‑powered generation of titles, descriptions, and tags  
* Metadata application to uploaded videos without manual intervention  

### 🔄 Node‑by‑Node Breakdown  
| Step | Node Purpose                                                        |
|------|---------------------------------------------------------------------|
| 1    | New Video? (Trigger) – Monitors specified Google Drive folder       |
| 2    | Download New Video – Retrieves the video file from Google Drive     |
| 3    | Upload to YouTube – Uploads the video to YouTube with initial settings |
| 4    | Get Transcript – Extracts transcript from the uploaded video        |
| 5    | Adjust Transcript Format – Formats raw transcript for processing    |
| 6    | Create Description – Generates SEO‑optimized description            |
| 7    | YT Tags (Message Model) – Creates relevant tags based on content    |
| 8    | YT Title (Message Model) – Generates compelling title               |
| 9    | Define File Path Upload Format (Optional) – Structures data paths   |
| 10   | Update Video’s Metadata – Applies generated title, description, tags|

### ⚙️ Pre‑conditions / Requirements  
* n8n with Google Drive and YouTube API credentials configured (stored as n8n credentials/variables; no hard‑coded IDs)  
* Dedicated Google Drive folder for video uploads  
* YouTube channel with proper upload permissions  
* AI service access for transcript processing and metadata generation  
* Sufficient storage for temporary video handling  

### ⚙️ Setup Instructions  
1. Import this workflow into your n8n instance.  
2. Configure Google Drive credentials; reference folder ID via n8n variable (do not hard‑code).  
3. Set up YouTube API credentials with upload and edit permissions.  
4. Specify the target Google Drive folder ID in the New Video? trigger node (via variable).  
5. Configure AI service credentials for transcript and metadata generation.  
6. Adjust message templates for title, description, and tag creation.  
7. Test with a small video file before production use.  

### 🎨 How to Customize  
* Modify AI prompts to match your channel’s tone and style.  
* Add conditional logic based on video categories or naming conventions.  
* Implement notification systems to alert when uploads complete.  
* Create custom metadata templates for different content types.  
* Include timestamps or chapter markers based on transcript analysis.  
* Add social media sharing nodes to announce new uploads.  

### ⚠️ Important Notes  
* Video quality is preserved through the upload process.  
* Consider YouTube API quotas when handling multiple uploads.  
* Transcript quality affects metadata generation results.  
* Videos are initially uploaded without visibility adjustments.  
* Processing time depends on video length and transcript complexity.  

### 🔐 Security and Privacy  
* Store API credentials and folder IDs as n8n Credentials/Variables—remove any hard‑coded tokens or IDs.  
* Video files are processed temporarily and not stored permanently.  
* Limit Google Drive folder access to authorized users only.  
* Manage YouTube upload permissions carefully (use OAuth/service accounts).  
* Ensure compliance with organizational data‑handling policies.

## 🔗 Nodes Used

HTTP Request, Google Drive, YouTube, Google Drive Trigger, AI Agent, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
