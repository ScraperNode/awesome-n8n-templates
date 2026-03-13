# 🎬 Turn any Youtube video into VIRAL shorts

> ⚡ **449 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## For Who?

- Content Creators
- Youtube Automation
- Marketing Team

---

## How it works?

**1 -** Enter the video ID (in Edit Field Node) you want to use as a base to create Short Form videos 
**2 -** Use **yt-transcript-api (self-hosted on docker)** to retrieve the transcript of the video
**3 -** Format the transcript to be usable by an LLM
**4 -** LLM select clips based on specific rules (prompt customizable)
**5 -** Split out the selected Clips and perform a loop for each Clip
**6 -** Use **yt-clip-api (self-hosted on docker)** to edit the video in ready-to-use Short Form videos

---

## What you get?

**🧩 Copy-Paste Setup** – You’ll get a straightforward, easy-to-follow system with clear instructions, even with minimal technical skills.

**🎛️ Built-in Customization Guide** – The documentation includes a dedicated section to help you easily adjust the system to your own channel, video style, or workflow needs.

**💬 Full Personalized Support** – I’ll personally help you until the workflow is fully running on your side.

**++System Cost to run++: $0**

**++Time to Setup++: 20-40min (depending on your experience)**

---

## ⚠️ PRE-REQUISITES

Before purchasing, please make sure you meet the following requirements:

- The YouTube channel you want to clip includes face-cam + screen recording (like on my videos).
- You have basic knowledge of code (enough to follow simple setup instructions). You can also use AI to help you 😉

---

👨‍💻 **More Workflows :** [https://n8n.io/creators/nasser/](https://n8n.io/creators/nasser/)

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, Structured Output Parser, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
