# 🎬 Video to blog research automation with GPT-4o, Dumpling AI & Google Sheets

> ⚡ **550 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 📄 What this workflow does

This workflow automatically turns any uploaded video into structured blog research using AI tools. It transcribes the video, extracts keywords, runs research based on those keywords, and saves the final result to a Google Sheet. It uses Dumpling AI for transcription and research, OpenAI for keyword extraction, and Google Sheets for organizing the output.

---

## 👤 Who is this for

This workflow is perfect for:
- Content creators who repurpose video content into blog posts
- SEO and marketing teams looking to extract topics and keyword insights from video materials
- Anyone who wants to automate video-to-text and research workflows without doing it manually

---

## ✅ Requirements

- **Google Drive** account with a folder to watch for video uploads
- **Dumpling AI** API access for transcription and agent research
- **OpenAI (GPT-4o)** credentials for keyword extraction
- **Google Sheets** document with the following column headers:
  - `Keywords`
  - `topicsFromPerplexity`
  - `blogPostsFromGoogle`

---

## ⚙️ How to set up

1. Connect your **Google Drive** and choose the folder where videos will be uploaded.
2. Set up your **Dumpling AI** and **OpenAI GPT-4o** API credentials.
3. Create a **Google Sheet** with the required columns.
4. Replace the default folder ID and spreadsheet ID in the workflow with your own.
5. Activate the workflow to start watching for new videos.

---

## 🔁 How it works (Workflow Steps)

1. **Watch Uploaded Videos**: Triggers when a new video is added to your selected Google Drive folder.
2. **Download Video**: Downloads the uploaded video file.
3. **Convert Video to Base64**: Prepares the video for API submission by converting it to base64.
4. **Transcribe with Dumpling AI**: Sends the video to Dumpling AI to get a full transcript.
5. **Extract Keywords with OpenAI**: Analyzes the transcript and extracts five key SEO keywords.
6. **Run Competitor Research via Dumpling AI**: Uses those keywords to fetch related topics and blog examples from Perplexity and Google.
7. **Format Results for Google Sheets**: Formats the research results into clean text blocks.
8. **Append to Google Sheets**: Saves the data into your specified Google Sheet.

---

## 🛠️ Customization Ideas

- Add a translation step after transcription to support multilingual content research.
- Modify the GPT prompt to extract summaries or titles instead of keywords.
- Change the Google Sheet structure to log video filenames and timestamps.
- Add email or Slack notifications to alert you when research is complete.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
