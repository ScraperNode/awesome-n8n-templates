# 🎬 Create chapter-wise notes and MCQ quizzes from YouTube with WayinVideo, GPT-4o-mini, Google Sheets, and Gmail

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Submit any YouTube lecture URL through a form and this workflow transcribes the full video using WayinVideo, generates chapter-wise study notes and a 5-question MCQ quiz per chapter using GPT-4o-mini, and delivers a formatted HTML email with everything ready for revision.

## How it works
1. You fill in a form with the YouTube lecture URL, subject name, number of chapters you want, and your email address.
2. The YouTube URL is submitted to the WayinVideo Transcription API v2, which begins extracting the full spoken transcript with speaker labels and timestamps. A task ID is returned to track the job.
3. After an initial 30-second wait, the workflow polls the WayinVideo results endpoint. If the transcript is still processing, it waits 30 seconds and polls again. This loop repeats automatically until the status returns SUCCEEDED.

4. Once complete, the transcript segments are joined into clean readable text and trimmed to 12,000 characters for AI processing.
5. GPT-4o-mini reads the full transcript and generates a structured JSON output containing: an inferred lecture title, chapter-wise notes (one per requested chapter), key concepts, important terms with definitions, 5 MCQ questions per chapter with correct answers and explanations, an overall lecture summary, and key takeaways.
6. The structured output is parsed and built into a fully formatted HTML email with chapter sections, concept badges, quiz cards, and a summary block.
7. Google Sheets logs the video URL, subject, lecture title, chapter count, quiz question count, summary, notes, and quiz text for every session.

8. Gmail sends the complete HTML study email to the address submitted in the form — subject line includes the lecture title, chapter count, and quiz question count.


## Setup
1. Add your WayinVideo API key by replacing `YOUR_WAYINVIDEO_API_KEY` in both WayinVideo HTTP requests, and ensure your WayinVideo account has available API units.
2. Connect an OpenAI credential for the GPT-4o-mini chat model.
3. Connect a Google Sheets OAuth2 credential, set `YOUR_GOOGLE_SHEET_ID`, and create a “Study Log” sheet with columns that match the fields being appended (for example: Date, YouTube URL, Subject, Lecture Title, Chapters Generated, Quiz Questions, Summary, Notes, Quiz, Status).
4. Connect a Gmail OAuth2 credential and verify the sender account can send emails to your recipients.

## Requirements
- Active n8n instance (self-hosted or cloud)
- WayinVideo account with API key and purchased API units — get both at wayin.ai/wayinvideo/api-dashboard
- OpenAI account with GPT-4o-mini API access
- Google Sheets with a tab named Study Log
- Gmail account connected via OAuth2 for sending study notes

## Customization
- Change the number of chapters — the form field Number of Chapters controls how many chapters GPT generates; users can enter any number from 1 to 6 depending on video length
- Change quiz questions per chapter — in the system prompt of node 10. AI Agent — Generate Notes and Quiz, change "exactly 5 quiz questions" to a different number to generate more or fewer questions per chapter
- Add a Google Drive upload — after node 12. Google Sheets — Log Study Session, add a Google Drive step to save the notes text as a plain text file so students can access the notes outside their inbox
- Support non-English lectures — in node 2. HTTP — WayinVideo Submit Transcription, change source_lang from en to any WayinVideo-supported language code to transcribe lectures in other languages
- Increase the transcript length limit — in node 9. Code — Prepare Transcript, change .slice(0, 12000) to a larger number such as 20000 for longer lectures — note this increases GPT token usage and cost

## Additional info
The WayinVideo API key appears in two separate steps — node 2. HTTP — WayinVideo Submit Transcription and node 5. HTTP — Poll Transcription Status. You must replace YOUR_WAYINVIDEO_API_KEY in both. Missing either one will cause the workflow to fail.

WayinVideo charges API units per transcription based on video length. Make sure you have sufficient units purchased at wayin.ai/wayinvideo/api-dashboard before running the workflow on long lectures.

The polling loop between nodes 5, 6, 7, and 8 runs automatically until the transcription status equals SUCCEEDED. For longer videos this may take several minutes. The workflow handles this without any manual intervention — do not stop the execution while it is running.

The transcript is trimmed to 12,000 characters before being sent to GPT. For very long lectures, content from the end of the video may be cut off. To process longer transcripts, increase the character limit in node 9. Code — Prepare Transcript, keeping in mind GPT context window limits and increased token cost.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
