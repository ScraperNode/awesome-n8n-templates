# 📊 ⚡📽️ Ultimate AI-powered chatbot for YouTube summarization & analysis

> ⚡ **19,753 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## 🎥 YouTube Video AI Agent Workflow

This n8n workflow template allows you to interact with an AI agent that extracts details and the transcript of a YouTube video using a provided video ID. Once the details and transcript are retrieved, you can chat with the AI agent to explore or analyze the video's content in a conversational and insightful manner.

### 🌟 How the Workflow Works
1. **🔗 Input Video ID**: The user provides a YouTube video ID as input to the workflow.
   
2. **📄 Data Retrieval**: The workflow fetches essential details about the video (e.g., title, description, upload date) and retrieves its transcript using YouTube's Data API and additional tools for transcript extraction.

3. **🤖 AI Agent Interaction**: The extracted details and transcript are processed by an AI-powered agent. Users can then ask questions or engage in a conversation with the agent about the video's content, such as:
   - Summarizing the transcript.
   - Analyzing key points.
   - Clarifying specific sections.

4. **💬 Dynamic Responses**: The AI agent uses natural language processing (NLP) to generate contextual and accurate responses based on the video data, ensuring a smooth and intuitive interaction.

---

### 🚀 Use Cases
- **📊 Content Analysis**: Quickly analyze long YouTube videos by querying specific sections or extracting summaries.
- **📚 Research and Learning**: Gain insights from educational videos or tutorials without watching them entirely.
- **✍️ Content Creation**: Repurpose transcripts into blogs, social media posts, or other formats efficiently.
- **♿ Accessibility**: Provide an alternative, text-based way to interact with video content for users who prefer reading over watching.

---

### 🛠️ Resources for Getting Started
- **Google Cloud Console** (for API setup): Visit Google Cloud's [Get Started Guide](https://cloud.google.com/docs/get-started/access-apis) to configure your API access.
- **YouTube Data API Key Setup**: Follow this [guide](https://developers.google.com/youtube/v3/docs) to create and manage your YouTube Data API key.
- **Install n8n Locally**: Refer to this [installation guide](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/) for setting up n8n on your local machine.

---

### ✨ Sample Prompts
*"Tell me about this YouTube video with id: JWfNLF_g_V0"*  
 
*"Can you provide a list of key takeaways from this video with id: [youtube-video-id]?"*

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
