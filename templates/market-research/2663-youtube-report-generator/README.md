# 📊 YouTube report generator

> ⚡ **586 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# YouTube Subtitles Report Generator

### Overview

This template enables users to generate analytical reports from YouTube video subtitles, providing insights into the thematic content of the video. Designed for efficiency and simplicity, it processes video subtitles without requiring an API key, making it an accessible solution for content analysis. The system assumes videos already have subtitles available, excluding live streams and videos without subtitle data.

---

### Key Features

1. **Trigger Webhook:** Seamlessly receive video IDs through a webhook trigger.
2. **Fetch Video HTML:** Retrieves the video’s HTML content directly from YouTube.
3. **Extract Subtitles URLs:** Processes the HTML content to find and decode subtitle URLs.
4. **Fetch Subtitles Content:** Downloads the subtitles from the decoded URLs in XML format.
5. **Generate Analytical Report:** Utilizes an AI model to summarize and analyze the thematic essence of video content.
   - The system supports models such as Google Gemini, OpenAI, and other compatible language models. 
   - The quality of the results may vary depending on the model used, with better models providing faster and more accurate summaries.
   - The default prompt focuses on identifying and summarizing the main theme of the video while excluding content related to promotions, subscriptions, or sponsored content.
6. **Return Analytical Report:** Delivers concise analytical reports as the final response to the webhook, suitable for various use cases like research, content creation, or consumption as plain text.

---

### Setup Instructions

#### Step 1: Webhook Configuration
- Set up the webhook URL in your external system (e.g., app, API) to send YouTube video IDs to this workflow.

#### Step 2: API Access
- Ensure that your environment has access to YouTube’s public HTML content. An API key is not required since the workflow parses publicly available data.

#### Step 3: AI Integration
- Verify the connection to the AI model used for report generation. Supported models include Google Gemini and OpenAI.
- Note that the system can be customized by modifying the provided prompt to suit specific analysis needs.

#### Step 4: Testing
- Run a sample test with a YouTube video ID to ensure subtitles are correctly retrieved and the report is generated successfully.

---

### Expected Outcomes

- **Effortless Content Analysis:** Generate thematic reports with minimal setup.
- **No API Key Dependency:** Simplified access by leveraging YouTube’s public HTML.
- **Actionable Insights:** Gain valuable information on video content for business, research, or personal projects.
- **Cost Considerations:** The execution cost depends primarily on the model used and the length of the video (affecting token usage). Leveraging the free tier of Google Gemini models is recommended to minimize costs.
- **Main Theme Extraction:** The default prompt excludes irrelevant promotional content, providing clear and focused thematic summaries.

Estimated setup time: 15–20 minutes with a ready environment.

---

### Prompt Description

The workflow includes a customizable prompt used to process subtitles in XML format and generate analytical reports. The generated report includes:

1. **Title:** A brief phrase capturing the essence of the main theme.
2. **Body:** An analytical description of the main theme, structured into a maximum of three concise paragraphs. It focuses on summarizing key ideas, recurring themes, and connections without referencing the source explicitly (e.g., avoiding phrases like “this video”). The system also removes content related to sales, subscriptions, or promotions to maintain a clear thematic focus.

---

### Example Output

**Title:** The Ethical Challenges of Artificial Intelligence  

**Report:**  
Artificial intelligence presents significant challenges in areas such as privacy, fairness, and automated decision-making. Its implementation in critical sectors such as healthcare, justice, and security has sparked debates about inherent biases and lack of transparency. Additionally, there is growing concern over the ethical implications of automation, including its impact on employment and the global economy. Finally, the importance of establishing strong regulatory frameworks is highlighted to balance technological innovation with the protection of human rights.

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
