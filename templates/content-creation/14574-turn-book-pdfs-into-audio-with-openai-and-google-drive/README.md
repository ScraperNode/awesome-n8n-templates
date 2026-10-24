# 🎬 Turn book PDFs into audio with OpenAI and Google Drive

> ⚡ **105 views** · 🎬 [Content Creation & Video](../)

## Description

# Book2Audio Pro

## Workflow brief
Book2Audio Pro turns an uploaded book PDF into organized audio files. The workflow starts with a file upload form, extracts the book text, uses AI to detect the chapter structure and generate splitting logic, converts each chunk into audio, and then saves the final MP3 files into a Google Drive folder created for that upload.

## How it works
1. The user uploads a PDF through the form trigger.
2. The PDF text is extracted from the uploaded binary file.
3. An AI agent analyzes the first part of the book to detect chapter/section patterns and generates JavaScript code for structuring the full text.
4. A code node executes the generated logic to split the book into chapters and smaller sentence-safe chunks.
5. The text chunks are passed to OpenAI audio generation.
6. Each generated audio file is uploaded to a Google Drive folder named after the uploaded book.

## Quick Setup Guide
👉 [Demo & Setup Video](https://drive.google.com/file/d/1PkH1D164Xuju1hHLHayl8xTvYNJrhU34/view?usp=sharing)
👉 [Course](https://www.udemy.com/course/n8n-automation-mastery-build-ai-powered-enterprise-ready/?referralCode=2EAE71591D3BEB80F2CC)

## Nodes of interest
- **Book Pdf Upload** — Form trigger for uploading the book PDF.
- **Extract Book Content** — Extracts text from the uploaded PDF.
- **AI Agent** — Detects chapter patterns and generates parsing logic.
- **Structured Output Parser** — Enforces a clean AI response format.
- **Structure The Content** — Runs the generated code to split the book into chunks.
- **Generate audio** — Converts text chunks into audio using OpenAI.
- **Create folder** — Creates a Google Drive folder for the book.
- **Loop Over Items** — Processes each chunk one by one.
- **Upload file** — Uploads the final MP3 files to Google Drive.
- **Merge** — Combines the folder metadata with the processed content.

## What you’ll need
### Credentials
- **Google Drive OAuth2 credentials** for creating folders and uploading MP3 files.
- **OpenAI API credentials** for:
  - the chat model used by the AI agent
  - audio generation

### Input requirements
- A valid **PDF book file**
- A book with reasonably detectable chapter or section markers for best results

## Recommended settings & best practices
- Keep audio chunks under **3900 characters** to avoid request limits and improve generation quality.
- Split on **sentence boundaries** to prevent unnatural audio cuts.
- Use a consistent chapter pattern in source books whenever possible, such as `Chapter 1`, `CHAPTER I`, or `Part One`.
- Make sure the **binary property name** matches the uploaded file field exactly.
- Keep the workflow **idempotent** by creating a separate Drive folder per upload.
- Test with a short PDF first to confirm extraction, parsing, and audio output are working correctly.
- If books have unusual formatting, improve the AI prompt so it can detect more chapter styles reliably.

## Customization ideas
- Add **voice selection** for different narration styles.
- Add **language detection** and generate audio in the original language.
- Add **chapter-level naming** for cleaner MP3 filenames.
- Add **file naming rules** based on book title, chapter number, and part number.
- Add **error handling** for scanned PDFs or extraction failures.
- Add a **status notification** after upload completion.
- Save **chapter metadata** in Google Sheets or a database.
- Support **multiple output formats**, such as MP3 and WAV.

## Tags
book-to-audio, pdf-to-speech, openai, google-drive, n8n, text-to-audio, automation, ai-workflow, audiobook, document-processing

## 🔗 Nodes Used

Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
