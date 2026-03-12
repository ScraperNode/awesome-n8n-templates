# 🎬 API that extracts engaging moments from YouTube videos 

> ⚡ **6,596 views** · 🎬 [Content Creation & Video](../)

## Description

# How it works
This template takes a YouTube video ID and identifies potentially engaging moments based on the intensity of specific timestamps 👇


![Screenshot 20240228 at 15.51.02.png](fileId:760)

Ideal for vloggers and YouTube content creators, it serves as a foundation for various automations to streamline content calendars or highlight popular moments in your videos. You can leverage it for:

- Automatic processes to analyze YouTube videos and create sizzle reels or clips for social media, particularly effective for microcontent strategies like those endorsed by Gary Vee.
- Instant alerts via Slack, Telegram, Email, or WhatsApp when significant moments occur in your videos.
- Utilizing transcripts of these moments with AI to refine content ideas or brainstorm chatbots in your editorial workflow.


### Example response from the Workflow-as-an-API 

A GET request to `{your instance URL}/webhook/youtube-engaging-moments-extractor?ytID=IZsQqarWXtYy` returns 👇


![successresponse.png](fileId:759)

The workflow generates multiple moments; the screenshot above shows a truncated version.

Not all videos contain timestamp intensity data, the workflow handles this case as well 👇
![errorresponse.png](fileId:758)

# How to use
1. Import the template into your n8n workspace or self-hosted instance, then activate the workflow.
2. Open the Webhook trigger node and copy the Production URL.
3. In a web browser or any tool capable of consuming HTTP Requests (e.g., native code, Bubble app, n8n workflow, another automation tool, Postman, etc.), pass along the URL parameter `?ytID={youtube video ID}` when invoking the API endpoint.

Your URL should resemble something like `https://acme.app.n8n.cloud/webhook/youtube-engaging-moments-extractor?ytID=IZsQqarWXtYy`.


**Keep in mind**
This workflow relies on an unofficial YouTube API graciously hosted for free by the folks at lemnoslife.com. It's not recommended for high-volume production usecases.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
