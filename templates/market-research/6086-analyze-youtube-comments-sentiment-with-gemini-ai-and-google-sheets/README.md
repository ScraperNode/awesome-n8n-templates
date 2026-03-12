# 📊 Analyze YouTube comments sentiment with Gemini AI and Google Sheets

> ⚡ **1,202 views** · 📊 [Market Research & Insights](../)

## Description

### This n8n workflow demonstrates how to use this AI Agent to extract, process, and analyze YouTube video comments to understand your audience beyond the view count.

Use cases are many: Whether you're **a YouTube creator** exploring feedback, **a social media manager** fine-tuning engagement strategy, **a brand team** monitoring campaign sentiment, or **a marketing agency** conducting audits – this tool brings audience voice to the forefront with structured insights.

## How It Works
- The workflow starts when you manually click **Test Workflow** or **Execute Workflow** in n8n.
- It collects all the rows marked as **Ready** in **Column A** in the **Video URLs** tab of your connected Google Sheet.
- The tool checks if the URLs are not empty first, then it loops through each valid video URL and sends a **GET** request to the **YouTube API** to fetch its comments.
- It checks the response from the YouTube API. If the call is successful, the comment data is extracted and split into individual entries. 
- The tool then checks whether the video URL has any comment.
- If no comment is found, the video URL’s status in **Column A** in the **Video URLs** tab is updated to **Finished** right away.
- If comments are available, they are passed to the **AI Agent - Analyze Sentiment Of Every Comment** using **the Google Gemini chat model**, where each comment is analyzed and classified by sentiment: **Positive**, **Neutral**, or **Negative**. 
- Next, the analysis results are saved to the **Results** tab in your connected Google Sheet. 
- Finally, the original video URL’s status in **Column A** in the **Video URLs** tab is updated to **Finished**, ensuring it won’t be reprocessed in the loop.

## How To Set Up
- Download the working package and import it into your n8n interface.
- Duplicate the [**YouTube Comment Analyzer**](https://docs.google.com/spreadsheets/d/18-3CmJPbC73MycmNiSWotdsyGBAAzqESf33vktwnYmM/edit?gid=426418282#gid=426418282) Google Sheet template to your Google Sheets account.
- Set up necessary credentials for tools access and usability:
    + For **Google Sheets** access, ensure each node is properly connected to the correct tab in your connected Google Sheet template: 
     Node **Get Video URLs** → connected to the **Video URLs** tab
     Node **Insert Comment Data & Analysis** → connected to the **Results** tab
     Node **Update Video Status** → connected to the **Video URLs** tab
    + For **YouTube** access, connect to its API in the following node:
    Node **HTTP Request - Get Comments**
    + For **Google Gemini** access, connect to its API in the following node:
    Node **Google Gemini Chat Model**
- Enter video URLs in **Column B** in the **Video URLs** tab in your connected Google Sheet and mark their status in **Column A** as **Ready**.
- Click **Test Workflow** or **Execute Workflow** to run the process.
- Check the results in the **Results** tab of the connected Google Sheet template to view all collected comments along with their sentiment analysis.

## Requirements
- Basic setup in Google Cloud Console (OAuth or API Key method enabled) with enabled access to YouTube and Google Sheets.
- API access to **Google Gemini** for sentiment analysis.
## How To Customize
- By default, the workflow is manually triggered in N8N. However, you can automate the process by adding a **Google Sheets trigger** that monitors new entries in your connected Google Sheet template and starts the workflow automatically.
- In the **AI Agent - Analyze Sentiment Of Every Comment** node, you can also change the AI chat model. By default, it uses **Google Gemini**, but you can easily replace it with any other compatible provider such as Deepseek, Grok, etc.
- You can customize the sentiment categories and instruction prompt for the AI Agent in the **AI Agent – Analyze Sentiment Of Every Comment** node following your needs. Then, the Agent can return sentiment results that align more closely with your intended use case.
- Also, feel free to integrate additional nodes (like Telegram or Email) to notify you and your team whenever updates and analysis succeed or fail.

## Need Help?
If you’d like this workflow customized, or if you’re looking to build a tailored AI Agent for your own business - please feel free to reach out to [**Agent Circle**](https://www.agentcircle.ai/). We’re always here to support and help you to bring automation ideas to life.

Join our community on different platforms for assistance, inspiration and tips from others.

Website: https://www.agentcircle.ai/
Etsy: https://www.etsy.com/shop/AgentCircle
Gumroad: http://agentcircle.gumroad.com/
Discord Global: https://discord.gg/d8SkCzKwnP
FB Page Global: https://www.facebook.com/agentcircle/
FB Group Global: https://www.facebook.com/groups/aiagentcircle/
X: https://x.com/agent_circle
YouTube: https://www.youtube.com/@agentcircle
LinkedIn: https://www.linkedin.com/company/agentcircle

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI Chat Model, Google Gemini Chat Model, Sentiment Analysis

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
