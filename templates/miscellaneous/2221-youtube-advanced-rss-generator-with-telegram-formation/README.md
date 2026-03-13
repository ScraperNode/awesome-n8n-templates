# 🔧 YouTube advanced RSS generator with Telegram formation

> ⚡ **2,919 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

[![Video Overview of template  YouTube Channel Advanced RSS Feeds Generator](https://img.youtube.com/vi_webp/EtzJmrmCiUY/maxresdefault.webp?s)](https://youtu.be/EtzJmrmCiUY)

### Overview

The **[n8n] YouTube Channel Advanced RSS Feeds Generator** workflow facilitates the generation of various RSS feed formats for YouTube channels without requiring API access or administrative permissions. It utilizes third-party services to extract data, making it extremely user-friendly and accessible.

### Key Use Cases and Benefits

* **Content Aggregation**: Easily gather and syndicate content from any public YouTube channel.
* **No API Key Required**: Avoid the complexities and limitations of Google's API.
* **Multiple Formats**: Supports ATOM, JSON, MRSS, Plaintext, Sfeed, and direct YouTube XML feeds.
* **Flexibility**: Input can be a YouTube channel or video URL, ID, or username.

### Services/APIs Utilized

This workflow integrates with:

* **commentpicker.com**: For retrieving YouTube channel IDs.
* **rss-bridge.org**: To generate various RSS formats.

### Configuration Instructions

1. **Start the Workflow**: Activate the workflow in your n8n instance.
2. **Input Details**: Enter the YouTube channel or video URL, ID, or username via the provided form trigger.
3. **Run the Workflow**: Execute the workflow to receive links to 13 different RSS feeds, including community and video content feeds.

### Screenshots
![Screenshot of template  YouTube Channel Advanced RSS Feeds Generator](https://live.staticflickr.com/65535/53658033066_ea92acb899_o.png)

### Additional Notes

* **Customization**: You can modify the RSS feed formats or integrate additional services as needed.

### Support and Contributions

For support, questions, or contributions, please visit the [n8n community forum](https://community.n8n.io) or the [GitHub repository](https://github.com/n8n-io/n8n). We welcome contributions from the community!

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
