# 🎬 Upload podcast episodes to Spotify via RSS & Google Drive

> ⚡ **875 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🎧 Upload Podcast Episodes to Spotify via RSS & Google Drive

Skip the manual steps and publish your podcast episodes to Spotify in minutes — fully automated.

This workflow takes your finished audio, uploads it to Google Drive, updates your podcast’s RSS feed in GitHub, and pushes it live on Spotify and other platforms linked to that feed. No more copy-pasting links or manually editing XML files — everything happens in one click.

It’s perfect for podcasters who already have an RSS feed connected to Spotify for Podcasters and want a repeatable, hands-free publishing process.

---

💡 **What this workflow does**  
✅ Reads your finished MP3 from a local path or previous automation step  
☁️ Uploads the audio to Google Drive and creates a public share link  
📄 Fetches your existing `rss.xml` file from GitHub  
➕ Appends a new `&lt;item&gt;` entry with title, description, publication date, and MP3 link  
🔄 Commits the updated RSS file back to GitHub, triggering updates on Spotify  
🎯 Ensures your episode appears on Spotify once your RSS is already linked in Spotify for Podcasters  

---

🛠 **What you’ll need**  
- A **Google Drive account** with OAuth credentials and a target folder ID  
- A **GitHub repository** containing your `rss.xml` file  
- An **RSS feed connected to Spotify for Podcasters** (set this up once before running the workflow)  
- An MP3 file that meets Spotify’s audio format requirements  

---

✨ **Use cases**  
- Automate weekly or daily podcast publishing to Spotify  
- Push your AI-generated podcast episodes live without manual editing  
- Maintain a single source of truth for your feed in GitHub while streaming across multiple platforms  

---

📬 **Contact & Feedback**  
Need help customizing this? Have ideas for improvement?  

📩 **Luis.acosta@news2podcast.com**  
Or DM me on Twitter [@guanchehacker](https://x.com/guanchehacker)  

If you’re building something more advanced with audio + AI, like fully automated podcast creation and publishing, let’s talk — I might have the missing piece you need.

## 🔗 Nodes Used

GitHub, Google Drive, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
