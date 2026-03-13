# 🎬 Summarize YouTube videos & chat about content with GPT-4o-mini via Telegram

> ⚡ **4,256 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# Summarize YouTube Videos & Chat About Content with GPT-4o-mini via Telegram

## Description

This n8n workflow automates the process of summarizing YouTube video transcripts and enables users to interact with the content through AI-powered question answering via Telegram. It leverages the GPT-4o-mini model to generate summaries and provide insights based on the video’s transcript.

### How It Works

1. **Input**: The workflow starts by receiving a YouTube video URL. This can be submitted through:
   - A Telegram chat message.
   - A webhook (e.g., triggered by a shortcut on Apple devices).

2. **Transcript Extraction**: The URL is processed to extract the video transcript using the custom `youtubeTranscripter` community node ([available here](https://www.npmjs.com/package/n8n-nodes-youtube-transcription-kasha)). The transcript is concatenated into a single text and stored in a Google Docs document.

3. **Summarization**: The GPT-4o-mini AI model analyzes the transcript and generates a structured summary, including:
   - A general overview.
   - Key moments.
   - Instructions (if applicable).  
   The summary is then sent back to the user via Telegram.

4. **Interactive Q&A**: Users can ask questions about the video content via Telegram. The AI retrieves the stored transcript from Google Docs and provides accurate, context-based answers, which are sent back through Telegram.

### Setup Instructions

To configure this workflow, follow these steps:

1. **Import the Workflow**: Download the provided JSON template and import it into your n8n instance.
2. **Install the Community Node**: Install the `youtubeTranscripter` community node via npm:
   ```bash
   npm install n8n-nodes-youtube-transcription-kasha
   ```
   **Important**: This node requires a self-hosted n8n instance due to its external dependencies.
3. **Configure Nodes**:
   - **Webhook**: Set up the webhook to receive YouTube URLs. Alternatively, configure the Telegram node if using Telegram as the input method.
   - **Google Docs**: Provide valid credentials to enable writing the transcript to a Google Docs document.
   - **AI Model**: Set up the GPT-4o-mini model for summarization and Q&A functionality.
4. **Test the Workflow**: Send a YouTube URL via your chosen input method (Telegram or webhook) and confirm that the summary is generated and delivered correctly.


### Customization

- **Language**: Adjust the AI prompts to generate summaries and answers in any desired language.
- **Output Format**: Modify the summary structure by editing the prompt in the summarization node.
- **Input Methods**: Replace the Telegram node with another messaging or input node to adapt the workflow to different platforms.

### Who Can Benefit?

This template is perfect for:
- **Content Creators**: Quickly summarize video content for repurposing or review.
- **Students and Researchers**: Extract key insights from educational or informational videos efficiently.
- **General Users**: Interact with video content via AI without needing to watch the full video.

### Problem Solved

This workflow simplifies video content consumption by:
- Automating the extraction and summarization of key points.
- Enabling interactive Q&A to address specific questions without rewatching the video.

## Additional Notes

- **Disclaimer**: The `youtubeTranscripter` community node is required and only works on self-hosted n8n instances due to its reliance on external services.
- **Apple Users**: Enhance your experience with a custom shortcut to share YouTube videos directly to the workflow. [Download the shortcut here](https://routinehub.co/shortcut/21757/).

## 🔗 Nodes Used

Webhook, Telegram, Telegram Trigger, Google Docs, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
