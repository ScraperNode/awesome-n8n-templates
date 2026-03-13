# 🎬 YouTube transcription & translation to Google Docs with Gemini AI

> ⚡ **1,943 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## YouTube Transcription, Summarization & Translation to Google Docs

This workflow automates the end-to-end process of converting YouTube videos into structured, multilingual written content. It transcribes the video's speech, optionally summarizes it, translates it into the chosen language and stores the result in a well-formatted Google Doc—ready for review, sharing or publication.

## Who’s It For

* Content creators and bloggers repurposing video content.
* Educators and researchers converting lectures into readable notes.
* Marketing teams localizing video material for international audiences.
* Students summarizing and translating study material.
* YouTube viewers who want written notes or blog-ready formats.


## How It Works

1. A **Webhook** triggers the flow with inputs: `youtube_url`, `language` and `enable_summary`.
2. A **Code** node formats these inputs into `videoId`, `originalUrl`, `language` and `enable_summary`.
3. An **HTTP Request** node sends the video to Supadata API for full transcription.
4. Another **Code** node combines all transcript segments into one body of text.
5. The **Basic LLM Chain** node uses the **Google Gemini Chat Model** to summarize and translate the transcript if requested.
6. A **Google Docs** node creates a new document with a title based on `videoId` and `language`.
7. A final **Google Docs** node appends the processed summary and translation into the created document.


## How to Set Up

1. **Webhook Input:** Send a POST request with three fields: `youtube_url`, `language`, `enable_summary`.
2. **Configure Supadata API:** Add the HTTP URL and Authorization Header for transcription.
3. **Set up Gemini Chat Model:** Use Google Vertex AI/Gemini integration in the Basic LLM Chain node.
4. **Create Google Docs Credentials:** Connect your Google account using OAuth2.
5. **Document Naming Logic:** You may adjust document titles using expressions (e.g., `{{ videoId }} - {{ language }}`).



## Requirements

* Supadata API key (or any video-to-text API).
* Google account with Google Docs access.
* Google Gemini access via n8n’s LLM integration.
* n8n Cloud or self-hosted instance.
* Basic understanding of webhook setup (or a form frontend).


## How to Customize

* **Change LLM model:** Swap Gemini with GPT-4 or Claude in the LLM Chain node.
* **Summarization toggle:** Use the `enable_summary` flag to control verbosity.
* **Document layout:** Customize headings, font styles and content sections in Google Docs.
* **Multiple languages:** Extend the workflow to translate into multiple languages and generate one document per language.
* **Sharing options:** Add Gmail or Slack nodes to notify users once the document is generated.


## Add‑ons

* **Notion Export:** Send the document summary directly into Notion using the Notion node.
* **Slack Notification:** Notify your team with a link to the Google Doc using the Slack node.
* **Google Sheets Logging:** Log video URLs, timestamps, and language used for auditing.
* **n8n Forms Integration:** Allow users to submit video URLs and language via a hosted n8n form.


## **Use Case Examples**

* **Repurposing Videos into Blogs:** Automatically convert YouTube podcasts into multilingual blog posts.
* **Educational Notes:** Extract and translate lecture content into shareable study documents.
* **International Marketing Teams:** Summarize and localize product explainer videos for different countries.
* **Transcription Library:** Create a searchable database of translated transcripts from niche educational YouTube channels.


## Common Troubleshooting

| **Issue**                       | **Possible Cause**                         | **Solution**                                               |
| ------------------------------- | ------------------------------------------ | ---------------------------------------------------------- |
| Webhook not triggering          | Incorrect webhook URL or POST format       | Double-check payload and content-type (application/json)   |
| Transcription API fails         | Invalid video ID or API key                | Validate YouTube URL and Supadata API access               |
| Empty translation/summarization | Transcript was empty or prompt was weak    | Ensure the video contains spoken content and refine prompt |
| Google Doc not created          | OAuth2 credentials not authorized properly | Reconnect Google Docs credentials in n8n                   |
| Gemini LLM Chain fails          | Model misconfigured or request malformed   | Verify your model selection and payload structure          |

## Need Help?

Need help getting this set up or customizing it for your workflow?

✅ We can help you:

* Set up transcription and translation APIs
* Modify the summarization prompt
* Customize document layouts or automate sharing

👉 [Contact WeblineIndia's automation experts !](https://www.weblineindia.com/hire-n8n-developers/)

## 🔗 Nodes Used

HTTP Request, Webhook, Google Docs, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
