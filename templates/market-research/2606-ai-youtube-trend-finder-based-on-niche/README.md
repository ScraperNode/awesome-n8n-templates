# 📊 AI YouTube trend finder based on niche

> ⚡ **71,344 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

[Youtube Video](https://youtu.be/Eh5OeyrYlK8)

This n8n workflow is designed to assist YouTube content creators in identifying trending topics within a specific niche. By leveraging YouTube's search and data APIs, it gathers and analyzes video performance metrics from the past two days to provide insights into what content is gaining traction. Here's how the workflow operates:

1. **Trigger Setup**: The workflow begins when a user sends a query through the `chat_message_received` node. If no niche is provided, the AI prompts the user to select or input one.

2. **AI Agent (Language Model)**: The central node utilizes a GPT-based AI agent to:
   - Understand the user's niche or content preferences.
   - Generate tailored search terms related to the niche.
   - Process YouTube API responses and summarize trends using insights such as common themes, tags, and audience engagement metrics (views, likes, and comments).

3. **YouTube Search**: The `youtube_search` node runs a secondary workflow to query YouTube for relevant videos published within the last two days. It retrieves basic video data such as video IDs, relevance scores, and publication dates.

4. **Video Details Retrieval**: The workflow fetches additional details for each video:
   - **Video Snippet**: Metadata like title, description, and tags.
   - **Video Statistics**: Metrics such as views, likes, and comments.
   - **Content Details**: Video duration, ensuring only content longer than 3 minutes and 30 seconds is analyzed.

5. **Data Processing**:
   - Video metadata is cleaned, sanitized, and stored in memory.
   - Tags, titles, and descriptions are analyzed to identify patterns and trends across multiple videos.

6. **Output**: The workflow compiles insights and presents them to the user, highlighting:
   - The most common themes or patterns within the niche.
   - URLs to trending videos and their respective channels.
   - Engagement statistics, helping the user understand the popularity of the content.

### Key Notes for Setup:
- **API Keys**: Ensure valid YouTube API credentials are configured in the `get_videos`, `find_video_snippet`, `find_video_statistics`, and `find_video_data` nodes.
- **Memory Buffer**: The `window_buffer_memory` node ensures the AI agent retains context during analysis, enhancing the quality of the generated insights.
- **Search Term Customization**: The AI agent dynamically creates search terms based on the user’s niche to improve search precision.

### Use Case:
This workflow is ideal for YouTubers or marketers seeking data-driven inspiration for creating content that aligns with current trends, maximizing the potential to engage their audience.

### Example Output:
For the niche "digital marketing":
- Trending Topic: Videos about "mental triggers" and "psychological marketing."
- Tags: "SEO," "Conversion Rates," "Social Proof."
- Engagement: Videos with over **200K views** and high likes/comment ratios are leading trends.
- Video links:
  - https://www.youtube.com/watch?v=video_id1
  - https://www.youtube.com/watch?v=video_id2

## 🔗 Nodes Used

HTTP Request, YouTube, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
