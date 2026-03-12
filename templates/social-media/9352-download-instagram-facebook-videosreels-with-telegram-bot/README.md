# 📱 Download Instagram & Facebook Videos/Reels with Telegram Bot

> ⚡ **4,184 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Instagram & Facebook Video/Reels Downloader Bot (Telegram bot)
![image.png](fileId:2783)
Once set up, simply send any **Instagram Reel or Facebook video link** to your Telegram bot, and it will automatically:  
1. **Check** if the shared link is valid.  
2. **Detect** whether it’s an Instagram or Facebook link.  
3. **Fetch** the video using API and scraping methods.  
4. **Download** the video directly from the source.  
5. **Send** the downloaded video (or a message if it’s invalid) right back to your Telegram chat — instantly!  

---

## **How It Works (Node Flow)**
- **Telegram Trigger:** Listens for new messages (video/reel links) from users.  
- **Regex Node:** Extracts and validates the Instagram/Facebook link format.  
- **Conditional Node (If):** Determines whether the link is for Facebook or Instagram.  
- **Link Validation Node:** Ensures the provided link is valid and reachable.  
- **Instagram Node:**  
  - Fetches video metadata via API.  
  - Decodes and downloads the Reel.  
  - Sends the downloaded video and confirmation message via Telegram.  
- **Facebook Node:**  
  - Uses scraping/API to get the video source.  
  - Generates the downloadable link.  
  - Downloads and sends the Facebook video back to Telegram.  
- **Error Handling Node:** Sends a custom error message if the link is invalid.  

---

## **Features**
✅ Works with both Instagram and Facebook links  
✅ Automatically detects the platform and processes accordingly  
✅ Delivers the downloaded video directly to your Telegram chat  
✅ Handles invalid or broken links gracefully  
✅ Clean and modular structure — easy to extend or customize  

---

## **Use Case**
Perfect for **social media managers**, **content creators**, and **automation enthusiasts** who want a **simple Telegram bot** to fetch and download Reels or videos without using third-party apps or websites.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
