# 🎬 Creators hub: Generate dynamic SVG stats with daily updates

> ⚡ **1,727 views** · 🎬 [Content Creation & Video](../)

## Description

![Preview](https://live.staticflickr.com/65535/53513730214_d47a8002cf_o.png)
# n8n Creators Template: Creator Profile Stats Updater

This n8n workflow template is designed to automate the process of updating a creator's profile statistics, including total workflows, complex workflows, approved workflows, pending workflows, total nodes, and total views. It utilizes various nodes to fetch data, process it, and update a SVG file hosted on GitHub to reflect the latest stats.

## Workflow Overview

1. **Schedule Trigger**: Triggers the workflow execution at specified intervals.
2. **Config**: Sets up configuration details like creator username, colors for text, icons, border, and card.
3. **Get Workflows**: Fetches workflows associated with the creator from the n8n API.
4. **Workflows Data**: Processes the fetched data to calculate various statistics.
5. **Get User**: Fetches user details from the n8n API.
6. **Download Image**: Downloads the creator's profile image.
7. **Extract From File**: Extracts binary data from the downloaded image file.
8. **SVG**: Generates an SVG file with updated stats and visual representation.
9. **GitHub**: Commits the updated SVG file to the specified GitHub repository.
10. **Final**: Prepares the final data set for further processing or output.
11. **Sticky Note**: Provides a visual note or reminder within the workflow editor.

## Embed & Live Preview

Since it's a .SVG format you can host it anywhere. treat it like normal image so you can embed it with any site, forum, page that support posting images. here's example code for markdown:

```markdown
[![n8n Creator Profile](https://raw.githubusercontent.com/Automations-Project/n8n-templates/main/n8n-team.svg)](https://n8n.io/creators/n8n-team)
```
Here's the result
[![n8n Creator Profile](https://raw.githubusercontent.com/Automations-Project/n8n-templates/main/n8n-team.svg)](https://n8n.io/creators/n8n-team)
Or served through CDN & Cache
[![n8n Creator Profile](https://cdn.statically.io/gh/Automations-Project/n8n-templates/main/n8n-team.svg)](https://n8n.io/creators/n8n-team)

## Setup Instructions

1. **GitHub Credentials**: Ensure you have GitHub credentials set up in your n8n instance to allow the workflow to commit changes to your repository.
3. **Configure Trigger**: Adjust the `Schedule Trigger` node to set the desired execution intervals for the workflow.
4. **Set Configuration**: Customize the `Config` node with your GitHub username and preferred aesthetic options for the SVG.
5. **Deploy Workflow**: Import the workflow into your n8n instance and deploy it.

## Customization Options

* **Text and Icon Colors**: Customize the colors used in the SVG by modifying the respective fields in the `Config` node.
* **Profile Image Size**: Adjust the image size in the `Download Image` node URL if needed.
* **Commit Messages**: Modify the commit messages in the GitHub nodes to suit your version control conventions [I've used $now funaction to include current time in message which will gives allways a diffrent commit value].

## Requirements

* n8n (Self-hosted or Cloud version compatible with 2024 releases and up)
* GitHub account and repository
* Basic understanding of n8n workflow configuration

## Support and Contributions

For support, please refer to the [n8n community forum](https://community.n8n.io) or the [official n8n documentation](https://docs.n8n.io). Contributions to the template can be made you're allowed to reuse this workflow and reshare with edit (like new design/colors etc..) under your name.

## 🔗 Nodes Used

GitHub, HTTP Request, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
