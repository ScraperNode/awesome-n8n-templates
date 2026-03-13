# 🎬 Auto-extract & distribute video clips to multiple social platforms with Klap AI

> ⚡ **381 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

---

## Overview of the Workflow
The automation process consists of four main steps:
1. **Get Longform**: Retrieve the long-form video data (e.g., from Google Sheets).
2. **Analyze Longform**: Use Clap to analyze the video and generate short clips.
3. **Produce Shorts**: Export the generated clips.
4. **Publish Shorts**: Update the status in Google Sheets and publish the clips to social media platforms.

Each step is handled by specific nodes in n8n, a no-code automation tool, making the entire process accessible even if you’re not tech-savvy. The workflow is visually represented in the provided n8n screenshot, with nodes connected to show the flow of data and actions.

---

## Step 1: Get Longform
### Purpose
Start the automation and retrieve the long-form video data.



### Tips
- Test the node with a sample row to ensure it retrieves the correct data.
- Use a consistent sheet structure to avoid errors in future runs.

### Why It Matters
This step ensures the automation starts automatically and pulls the correct video for processing, saving you from manual intervention.

---

## Step 2: Analyze Longform
### Purpose
Use Clap to analyze the long-form video and generate short clips.



### Tips
- **Pin the Get Shorts Details Node**: Right-click and pin it to retain data for testing across sessions.
- **Test with a Sample Video**: Run the workflow with a short video to verify Clap’s output.

### Why It Matters
Clap’s AI identifies key moments and generates clips, saving hours of manual editing. The wait and status nodes ensure the workflow progresses only when ready.

---

## Step 3: Produce Shorts
### Purpose
Export the generated clips for publishing.



### Tips
- Preview the clips after export to ensure quality.
- Adjust wait times based on export duration observed during testing.

### Why It Matters
This step finalizes the clips, making them ready for publishing, with wait nodes preventing premature progression.

---

## Step 4: Publish Shorts
### Purpose
Update the video’s status in Google Sheets and publish the clips to social media.





### Tips
- **Add an If Node**: Before updating, check if the status is already "done" to skip processed videos.
- **Organize Clips**: Use Google Sheets columns (e.g., "TikTok," "YouTube") to assign clips to platforms.

### Why It Matters
This step automates publishing across multiple platforms and keeps your workflow organized by updating statuses.

---

## Additional Tips for Efficiency
- **No-Code Simplicity**: n8n’s drag-and-drop interface requires no coding—adjust nodes visually to suit your needs.
- **Handle Processing Times**: Use wait nodes to manage delays in analysis and export steps.
- **Monetization Ideas**:
  - Offer this automation as a service to businesses or creators.
  - Submit clips to platforms like "Wop" for earnings based on views.
- **Testing**: Run the workflow with a sample video, pinning nodes to retain data for debugging.

---

## Benefits of AI Automation
- **Time Savings**: Automate clipping and publishing, freeing you for creative tasks.
- **Scalability**: Produce 100+ shorts from one video, boosting reach.
- **Consistency**: Maintain a regular posting schedule effortlessly.
- **Cost-Effective**: Reduce reliance on manual editing or expensive tools.

---

This workflow leverages n8n and Klap to streamline short-form content creation, making it ideal for content creators looking to maximize their long-form videos. If you need further clarification or help with specific nodes, let me know!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
