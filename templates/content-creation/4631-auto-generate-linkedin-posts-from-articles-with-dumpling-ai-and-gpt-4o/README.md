# 🎬 Auto-generate LinkedIn posts from articles with Dumpling AI and GPT-4o

> ⚡ **999 views** · 🎬 [Content Creation & Video](../)

## Description

### 👤 Who is this for?

This workflow is ideal for social media managers, personal brand strategists, ghostwriters, and founders who want to post regularly on LinkedIn without spending hours writing from scratch. It’s also useful for marketing agencies and assistants looking to automate consistent post creation using curated articles as source material.

---

### 🧩 What problem does this workflow solve?

Manually reading multiple articles, extracting key insights, and writing a clean, professional LinkedIn post is a time-consuming process. This workflow automates everything: from pulling topics, finding related articles, summarizing them using AI, and even generating a matching image to accompany the post. It ensures faster content turnaround, more consistency, and less manual effort.

---

### 🔁 What this workflow does

This workflow starts manually and retrieves one topic marked as “To do” from a Google Sheet. That topic is used as a search term for Dumpling AI’s search endpoint, which scrapes and returns the top three article contents related to the topic. These articles are sent to a LangChain agent powered by GPT-4o, which analyzes and summarizes the content into a LinkedIn post in a friendly, insightful tone. It also generates an image prompt for the post.

After generating the post and image prompt, the data is extracted using a Set node. The prompt is sent to Dumpling AI’s image generation endpoint, which returns an image URL. Finally, the post text, image prompt, image URL, and status update (“created”) are saved back to the original row in Google Sheets.

---

### 🛠️ Workflow Breakdown

1. **Manual Trigger** – Starts the automation.
2. **Google Sheets (Get Topic)** – Searches for the first row in your content pipeline sheet where the “status” is “To do”.
3. **HTTP Request (Dumpling AI Search)** – Uses the topic as a search query to pull 3 article contents using Dumpling AI’s API.
4. **Set LangChain GPT Model** – Defines GPT-4o as the LLM for the LangChain Agent.
5. **LangChain Agent (Summarize & Generate)** – Summarizes all 3 articles and generates a LinkedIn post and a related image prompt.
6. **Set (Extract Data)** – Extracts `postText` and `imagePrompt` from the LangChain agent output.
7. **HTTP Request (Dumpling Image Gen)** – Sends `imagePrompt` to Dumpling AI’s image generation endpoint.
8. **Update Google Sheets** – Writes the post, image prompt, and image URL back to the sheet and changes the row status to “created”.

---

### ⚙️ Setup Instructions

1. **Dumpling AI**
   - Sign up at [Dumpling AI](https://app.dumplingai.com)
   - Get your API key and connect it in the HTTP Request nodes (Search and Image endpoints)
   - Use the `/search` endpoint to retrieve article content
   - Use the `/generate-image` endpoint to create the image

2. **Google Sheets**
   - Create a spreadsheet with columns: `topic`, `status`, `postText`, `imagePrompt`, `imageURL`
   - Add sample topics and set their `status` to `To do`

3. **LangChain (GPT-4o)**
   - Connect your OpenAI credentials to n8n
   - Make sure GPT-4o is available in your OpenAI account
   - Use the LangChain node to process multi-input summarization and generate a social media caption

4. **Customize the Prompt (Optional)**
   - Adjust the Set node to tweak the input format sent to the LangChain agent
   - Add constraints like tone, hashtags, or emojis to fit your brand style

---

### 🧠 How to Customize This Workflow

- Change the content source (RSS feed, Notion DB, etc.) instead of Google Sheets
- Add a scheduler node to run this automatically every morning or weekly
- Use Airtable instead of Google Sheets for more control and filtering
- Send the final post to LinkedIn using the Buffer or LinkedIn API
- Add a Telegram or Slack notification when new content is ready for approval

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
