# 🎬 Transcribe YouTube videos with AI enhancement via chat interface

> ⚡ **5,316 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![image.png](fileId:1078)

## About:

This workflow automates the transcription of YouTube videos by processing a video URL provided via a chat message. Designed for users who need quick access to video content in text form, this workflow ensures a seamless experience for transcribing videos on demand, regardless of the topic.


## Who is this for?

This workflow is designed for individuals who need quick and accurate transcriptions of YouTube videos without watching them in full. It is particularly useful for:

- Students who need text-based notes from educational videos.

- Researchers looking to extract information from lectures or discussions.

- Professionals who prefer reading over watching videos.

- Casual users who want an efficient way to summarize video content.

## What problem is this workflow solving?

Manually transcribing YouTube videos is time-consuming and prone to errors. Watching long videos just to extract key information is inefficient. This workflow automates transcription, allowing users to quickly convert video content into text. Use cases include:

- Summarizing lectures or webinars.

- Extracting insights from interviews and discussions.

- Creating searchable text from video content.

- Generating reference material without watching entire videos.

## What This Workflow Does?

This workflow automates the transcription of YouTube videos by:

1. **Accepting Input:** User provide a YouTube video URL through a chat message.

2. **Processing the Video:** It utilizes an external transcription service to retrieve the full transcript of the YouTube video from the provided URL.

3. **Enhancing Output:** An AI model (OpenAI) refines the transcription for accuracy and readability.

4. **Delivering Results:** The final text transcript is returned to the user via the chat interface.

## Setup:

1. **Install n8n:** Ensure you have n8n installed and running.

2. **Import the Workflow:** Copy the JSON workflow file into your n8n instance.

3. **Configure API Keys:**

	- Set up your Supadata ([Supadata](https://supadata.ai)) API key for transcription.

	- Configure the OpenAI ([OpenAI](https://platform.openai.com/api-keys)) API key for additional processing.

4. **Run the Workflow:** Provide a YouTube video URL and receive a transcription in response.

## How to customize this workflow to your needs:

The workflow is flexible and can be tailored to suit specific requirements. Here are some customization ideas:

- **Language Support:** Adjust the transcription language in both the HTTP Request and OpenAI nodes to support transcriptions in different languages (e.g., French, German).

- **Integrate with Other Services:** Store transcriptions in a database, send them via email, or connect with a document management system.

- **Notification:** Add a notification node (e.g., email or Slack) to alert you when the transcription is complete, especially for long videos.

- **Quality Check:** Integrate an additional AI step to summarize or highlight key points in the transcript for quicker insights.

This workflow is designed to be scalable, efficient, and adaptable to various transcription needs.

## Limitations

- **Video Length Limitation:** Very long videos may not have a complete transcription due to constraints in processing capacity or service limitations.

- **Transcription Dependency:** The accuracy of the transcription relies entirely on the presence of video captions or subtitles. If a video lacks these, no transcription will be generated.

- **Access Restrictions:** Private or restricted YouTube videos may not be accessible for transcription due to permission limitations.

- **Processing Time:** The time required to process a video can vary significantly, especially for longer videos, depending on the transcription service and server resources.

- **Regional Restrictions:** Some YouTube videos may have geographic or regional access limitations, which could prevent the workflow from retrieving the content for transcription.

## 🔗 Nodes Used

HTTP Request, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
