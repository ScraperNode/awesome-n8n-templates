# 📊 Summarize RSS articles with Gemini and OpenAI, send to Slack, and save TTS audio

> ⚡ **76 views** · 📊 [Market Research & Insights](../)

## Description

# ## Who’s it for

This workflow is designed for Japanese-speaking professionals, and learners who want to efficiently stay up to date with practical productivity, lifehack, and efficiency-related insights from Japanese content platforms such as blogs and media sites.

It is particularly suitable for individuals who prefer actionable, real-world tips—such as workflow improvements, time management strategies, and daily efficiency techniques—rather than abstract motivational content.

This workflow is also ideal for users who want to consume information not only as text but also as audio, enabling hands-free learning during commuting or multitasking.

---

# ## What it does

This workflow automatically collects, evaluates, summarizes, and delivers high-quality Japanese productivity and lifehack articles from multiple RSS sources such as Roomie, Lifehacker, and note.

It retrieves articles published within the last 24 hours, merges multiple RSS feeds, and filters them for relevance.

Then, AI evaluates the articles based on practical usefulness, reproducibility, and clarity, selecting only the top 10 most valuable pieces.

For each selected article, the workflow:

- Fetches the full article content
- Cleans and extracts readable text
- Generates structured summaries in Japanese, including:
    - Summary
    - Target audience
    - Use cases
    - Expected effects

Additionally, the workflow converts the summarized content into natural, audio-friendly narration using AI, allowing users to listen to the information like a daily news briefing.

Finally, it sends text summaries to Slack for easy daily consumption, while optionally saving audio outputs to Google Drive for later access and playback.

---

# ## How it works

1. A scheduled trigger starts the workflow automatically at a specified time.
2. RSS feeds from multiple sources (Roomie, Lifehacker, note hashtags) are fetched.
3. All articles are merged into a single dataset.
4. Articles are filtered to include only those published within the last 24 hours.
5. Article data is normalized into a structured format for AI processing.
6. Gemini AI evaluates and ranks articles based on practical value and selects the top 10.
7. Each article link is accessed and HTML content is retrieved.
8. HTML is cleaned and converted into readable text data.
9. OpenAI generates structured summaries in Japanese.
10. Another AI step converts summaries into natural, spoken-style Japanese scripts.
11. The scripts are converted into audio files (text-to-speech) and stored in Google Drive.
12. The summarized text results are formatted and delivered to Slack.

---

# ## Requirements

- Google Gemini API credentials
- OpenAI API credentials
- Slack OAuth2 credentials
- (Optional) Google Drive credentials for audio file storage
- A Slack channel for receiving notifications

---

# ## How to set up

Set up your API credentials within n8n, configure the Slack destination channel, and activate the workflow.

If audio generation is enabled, ensure your OpenAI API has access to text-to-speech features and optionally connect Google Drive for file storage.

You can also adjust scheduling settings and AI prompts to match your preferences.

---

# ## How to customize the workflow

You can customize this workflow by:

- Adding or replacing RSS sources (e.g., specific Japanese productivity blogs or niche communities)
- Adjusting the filtering window (e.g., last 48 hours instead of 24 hours)
- Modifying AI scoring criteria (e.g., prioritize beginner-friendly or advanced content)
- Changing summary structure (e.g., adding “key takeaway” or “action steps”)
- Customizing Slack message format for readability
- Enabling or disabling audio generation
- Changing narration tone or style for audio output
- Switching output language if needed

## 🔗 Nodes Used

HTTP Request, RSS Read, Slack, Google Drive, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
