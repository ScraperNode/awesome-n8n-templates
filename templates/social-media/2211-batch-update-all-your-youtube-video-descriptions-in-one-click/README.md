# 📱 Batch update all your Youtube video descriptions in one click

> ⚡ **4,190 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

**🎉 Do you want to master AI automation, so you can save time and build cool stuff?** 

I’ve created a welcoming Skool community for non-technical yet resourceful learners.

**👉🏻 [Join the AI Atelier](https://www.skool.com/the-ai-atelier-3311/about) 👈🏻**

---

Keeping your YouTube video descriptions updated and consistent across your channel can be a daunting task. Manually editing each video is not only time-consuming but also prone to errors.

**[📋 Blog post](https://www.n8n.ninja/automation-workflow/flz-udcavwE/batch-update-youtube-descriptions-n8n-workflows)**
**[📺 Youtube Video](https://youtu.be/flz-udcavwE)**

This workflow streamlines this process, allowing you to maintain a shared section in all your video descriptions and effortlessly update them all at once.

By incorporating a unique identifier, you can automate updates across your entire channel, keeping your content fresh and relevant with minimal effort.

## How it Works
- **Define Your Unique Delimiter:** Choose your unique delimiter (e.g., "---n8ninja---"). It will be visible, so select something appropriate for your audience.
- **Automate Updates:** Anything below the delimiter can be automatically updated by this workflow.
- **Configure Text Updates:** Set the text you wish to add to every video description in the configuration node.

## Getting Started
- **Integrate Google (YouTube) Credentials:** Securely add your credentials to enable API access.
- **Set Up the Configuration Node:** Define your delimiter and the text for the shared section you wish to append to your video descriptions.
- **Prepare Your Videos:** Add the chosen delimiter to all videos you want to update automatically.
- **Execute the Workflow:** Run the workflow whenever you wish to batch update the descriptions of your videos.

**Created by the [n8ninja](https://www.n8n.ninja/)**
[✨ follow on X](https://twitter.com/n8n_ninja)
[📺 follow on YT](https://www.youtube.com/@n8ninja)

## 🔗 Nodes Used

YouTube

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
