# 🔧 Generate an auto-updating SVG stats badge on GitHub from your creator profile

> ⚡ **19 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Showcase your n8n creator profile with a dynamically generated SVG stats badge, automatically pushed to any GitHub repository on a schedule — ready to embed in your README in seconds.

What this workflow does
On a configurable schedule, this workflow fetches your public creator profile from the n8n community, builds a fully styled SVG card displaying your name, avatar, total workflows, and community username, then pushes it directly to a GitHub repository. If the file already exists it updates it; if not, it creates it automatically. The final node outputs both the raw GitHub URL and a CDN-cached URL for embedding.
What you'll see in your README
A clean, animated 495×190px badge showing:

Your avatar (circular, pulled live from your n8n profile)
Display name and "n8n Creator" label
Total workflow count
Approved workflow count
Community username
Direct link to your n8n creator page

Setup

Open the ⚙️ Config node and fill in your n8n community username, GitHub username, target repository, and your preferred card colors
Add your GitHub credentials to both GitHub nodes
Adjust the Schedule Trigger to your preferred refresh interval (daily recommended)
Activate — the badge will be created on first run and kept up to date automatically

Embed in your README
![n8n Stats](https://raw.githubusercontent.com/YOUR_GH/YOUR_REPO/main/n8n-stats.svg)
Nodes used: Schedule Trigger, Set, HTTP Request, Code, Extract From File, GitHub, Aggregate

## 🔗 Nodes Used

GitHub, HTTP Request, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
