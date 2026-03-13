# 📊 🎦🚀 YouTube video comment analysis agent

> ⚡ **5,025 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🎦🚀 YouTube Video Comment Analysis Agent

This **n8n workflow** is designed to help YouTube creators analyze video details and comments to generate a **comprehensive and actionable report**. The workflow provides insights into video performance, audience engagement, and viewer feedback, helping creators identify trends, interests, and opportunities for future content creation.

---

## ✨ **Key Features**
1. **Video Performance Analysis**: Extracts metrics like views, likes, and comments to evaluate the video's success.
2. **Comment Sentiment Analysis**: Determines the tone of comments (positive, neutral, or negative) to understand audience sentiment.
3. **Recurring Themes Detection**: Identifies common topics or questions in comments to highlight viewer interests.
4. **Engagement Drivers**: Pinpoints what aspects of the video resonated most with viewers.
5. **Actionable Recommendations**: Offers strategies for creating follow-up content or improving future videos.
6. **Keyword Suggestions**: Extracts frequently mentioned terms for better discoverability on YouTube.
7. **Collaboration Opportunities**: Suggests potential partnerships based on viewer feedback or related channels.

---

## 🛠️ **How to Use**
1. **Set Up Workflow Variables**:
   - Add your `GOOGLE_API_KEY` and the `VIDEO_ID` of the YouTube video you want to analyze in the "Workflow Variables" node.
   - Ensure your Google API key has access to the YouTube Data API.

2. **Run the Workflow**:
   - Trigger the workflow manually or through another workflow using the "Execute Workflow Trigger" node.
   - The workflow will fetch video details and comments using pagination to ensure all data is captured.

3. **Generate Insights**:
   - The workflow processes video details and comments to create a detailed report with actionable insights.
   - Outputs include sentiment analysis, engagement drivers, content opportunities, and audience profiling.

4. **View or Share Results**:
   - The report is converted into Markdown and can be emailed via Gmail or saved to Google Drive as a document.

---

## 🌟 **Value from This Workflow**
- Gain a deeper understanding of your audience's preferences and feedback.
- Identify trends and engagement drivers to replicate success in future videos.
- Discover new content opportunities based on viewer questions and suggestions.
- Improve discoverability by leveraging keyword suggestions extracted from comments.
- Build stronger connections with your audience by addressing their needs effectively.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Markdown, Execute Workflow Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
