# 📊 Summarize QA testing news and send Telegram updates with Gemini and OpenAI

> ⚡ **126 views** · 📊 [Market Research & Insights](../)

## Description

# 🧠 AI-Powered QA News Feed

## Who this workflow is for
QA Engineers, SDETs, and automation enthusiasts who want to stay updated with the latest testing news without manually monitoring multiple blogs and communities.

---

## What this workflow does
This automation collects QA-related news from multiple RSS feeds, filters relevant articles, generates AI summaries, and sends concise updates to a Telegram channel.

It runs automatically every 3 hours and ensures that only relevant and non-duplicate updates are shared.

---

## How it works

1. **Scheduled trigger**
   - The workflow runs automatically every 3 hours.

2. **Fetch RSS feeds**
   - Reads QA news from multiple sources such as:
     - The Test Tribe
     - Medium QA tag
     - Cypress blog
     - Dev.to

3. **Extract and normalize data**
   - Extracts title, link, snippet, and publication date from each article.

4. **Filter relevant content**
   - Filters articles based on:
     - Publication date
     - QA-related keywords (Testing, Quality, Playwright, etc.)

5. **Remove duplicates**
   - Removes duplicates within the current execution.
   - Prevents sending the same article across multiple executions.

6. **Process in batches**
   - Articles are processed in batches of 5.
   - A short delay is added to avoid API rate limits.

7. **AI summarization with fallback**
   - Primary model: **Google Gemini**
   - Fallback model: **OpenAI**
   - Ensures a summary is always generated even if one model fails.

8. **Send Telegram notification**
   - Each message contains:
     - Article title
     - Source link
     - AI-generated summary

---

## How to use this template

1. Import the workflow into your n8n instance.
2. Configure the following credentials:
   - Telegram Bot API
   - Google Gemini API
   - OpenAI API (fallback model)
3. Update the Telegram **chat ID** to your channel or group.
4. Activate the workflow.

---

## What you get

✔ Automated QA news monitoring  
✔ AI-generated summaries  
✔ Duplicate-safe notifications  
✔ Resilient AI fallback system  
✔ Zero manual effort once activated

## 🔗 Nodes Used

RSS Read, Telegram, Schedule Trigger, Filter, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
