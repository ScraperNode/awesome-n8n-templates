# 📱 Post New YouTube Videos to X

> ⚡ **10,296 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Automated YouTube Video Promotion Workflow

Automate the promotion of new YouTube videos on X (formerly Twitter) with minimal effort. This workflow is perfect for content creators, marketers, and social media managers who want to keep their audience updated with fresh content consistently.

## How it works

This workflow triggers every 30 minutes to check for new YouTube videos from a specified channel. If a new video is found, it utilizes OpenAI's ChatGPT to craft an engaging, promotional message for X. Finally, the workflow posts the generated message to Twitter, ensuring your latest content is shared with your audience promptly.

## Set up steps

1. Schedule the workflow to run at your desired frequency.
2. Connect to your YouTube account and set up the node to fetch new videos based on your Channel ID.
3. Integrate with OpenAI to generate promotional messages using GPT-3.5 turbo.
4. Link to your X account and set up the node to post the generated content.

Please note, you'll need API keys and credentials for YouTube, OpenAI, and X. Check out [this quick video tutorial](https://mrc.fm/ai2x) to make the setup process a breeze.

## Additional Tips

- Customize the workflow to match your branding and messaging tone.
- Test each step to ensure your workflow runs smoothly before going live.

## 🔗 Nodes Used

X (Formerly Twitter), YouTube, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
