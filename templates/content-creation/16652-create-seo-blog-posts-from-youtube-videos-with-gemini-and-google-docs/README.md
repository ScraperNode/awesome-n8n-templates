# 🎬 Create SEO blog posts from YouTube videos with Gemini and Google Docs

> ⚡ **58 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Submit a YouTube URL and get a publish-ready SEO blog post. Three Gemini agents research the video, write the article, and score it. Articles scoring 7+ auto-publish to Google Docs. Lower scores route to Telegram for review.

## How it works
1. The workflow starts when a POST request hits the webhook with a YouTube URL, optional target keyword, and tone. A Code node extracts the video ID and validates the URL format, then an HTTP Request node calls YouTube Data API v3 to pull the video title, description, channel name, and tags.
2. Three Basic LLM Chain nodes run in sequence, each powered by a Google Gemini Flash sub-node connected via the native ai_languageModel port.
3. The first chain (Research Agent) receives the video context and returns a structured JSON brief containing an SEO title, four H2 headings, primary keyword, secondary keywords, key insights, target audience, and a content angle. A Code node parses this output with a JSON fallback in case Gemini adds unexpected formatting.
4. The second chain (Writer Agent) takes the research brief and writes a complete 1,000–1,400 word blog post following strict rules: flowing paragraphs over bullet lists, primary keyword used 3–5 times, concrete examples in at least two sections, and a link back to the original video at the end.
5. The third chain (Editor Agent) reviews the finished article and returns a JSON score across five dimensions: SEO optimisation, readability, depth of insight, hook strength, and actionability. A Code node attaches the article text and calculates the overall score.
6. An IF node acts as the quality gate. Articles scoring 7 or above go to Google Docs (created as a new document), logged to Google Sheets, and a success notification fires in Telegram. Articles below 7 skip publishing, and Telegram receives the editor's critique and improvement list instead.

## Setup
1. Google Gemini API key (free): Go to aistudio.google.com, click Get API Key, and create a key in a new project. In n8n, add it as a Google PaLM API credential. Open all three Gemini sub-nodes (Research, Writing, Editing) and select that credential. This is the only LLM credential needed.
2. YouTube Data API v3: In console.cloud.google.com, enable YouTube Data API v3 for your project and create an API key. Open the Fetch YouTube Video Metadata node and replace $credentials.googleYoutubeApiKey with your key, or set up a Generic Header Auth credential and reference it there.
3. Google Docs and Sheets OAuth2: Enable the Google Docs API and Google Sheets API in your Google Cloud project. In n8n Settings > Credentials, create a Google Docs OAuth2 credential and a Google Sheets OAuth2 credential. Connect each to the corresponding node. In the Sheets node, replace YOUR_SHEETS_ID with your spreadsheet ID (found in the sheet URL).
4. Google Sheets tab: Create a sheet named Blog Posts with these columns: Date, YouTube URL, Video Title, Blog Title, Primary Keyword, Quality Score, Word Count, Editor Note, Google Doc.
5. Telegram: Create a bot via @BotFather on Telegram and copy the token. Add it as a Telegram API credential in n8n. Get your chat ID by messaging @userinfobot. Replace YOUR_TELEGRAM_CHAT_ID in both Telegram nodes.
6. Test: Switch the workflow to listening mode and send a POST request: 
`Invoke-RestMethod -Uri "YOUR_WEBHOOK_TEST_URL" -Method POST -ContentType "application/json" -Body '{"youtube_url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","target_keyword":"AI automation","tone":"professional"}'`

## Requirements
- Google Gemini API key (free at aistudio.google.com, 1M tokens/day, no credit card)
- YouTube Data API v3 key (free, 10,000 units/day quota)
- Google Docs OAuth2 credential
- Google Sheets OAuth2 credential
- Telegram bot token and chat ID
- n8n with LangChain nodes available (Cloud or self-hosted)

## Customization
- Change the quality threshold: Open the Check Quality Score node and change 7 to any value between 1 and 10.
- Swap the model: Each Gemini sub-node is independent. Open any of the three and change models/gemini-1.5-flash to models/gemini-1.5-pro for higher quality output, or replace the sub-node with an Anthropic or OpenAI Chat Model node to switch providers entirely.
- Add a second language: After the Writer Agent, add another Basic LLM Chain with a Gemini sub-node. Prompt it to translate the article into Arabic or any other language while preserving the heading structure. Connect its output to the Sheets log alongside the English version.
- Adjust article length: In the Writer Agent prompt, change the target word count. The current setting is 1,000–1,400 words.
- Skip the quality gate: Delete the IF node and connect Review and Attach Article directly to Publish Article to Google Docs.

## Additional info
This workflow uses native n8n LangChain nodes (@n8n/n8n-nodes-langchain.chainLlm and @n8n/n8n-nodes-langchain.lmChatGoogleGemini) rather than raw HTTP Request calls to the Gemini REST API. This means prompts are editable directly in the node UI, all three agents share a single credential, and swapping the LLM provider requires changing one sub-node rather than editing URL strings and JSON bodies across multiple nodes.
The workflow costs $0 to run. Gemini 1.5 Flash is free up to 1 million tokens per day via Google AI Studio. The YouTube Data API, Google Docs API, Google Sheets API, and Telegram Bot API are all free within standard usage limits.
Built by Ibrahim Maher Al-Bander, n8n Certified Level 1 automation developer. ibrahimaher.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Google Docs, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
