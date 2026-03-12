# 📱 AI newsletter builder: Crawl sites with Dumpling AI, summarize with GPT-4o

> ⚡ **4,719 views** · 📱 [Social Media & Email Marketing](../)

## Description

### Who is this for?

This workflow is built for newsletter writers, marketers, content creators, or anyone who curates and summarizes web articles. It’s especially helpful for virtual assistants and founders who need to quickly turn web content into digestible, branded newsletters using AI.

---

### What problem is this workflow solving?

Manually reading, summarizing, and formatting multiple articles into a newsletter takes time and focus. This workflow automates the process using Dumpling AI for crawling, GPT-4o for summarization, and Gmail for delivery—so you can go from raw URLs to a polished email in minutes.

---

### What this workflow does

- Starts manually (can also be scheduled)
- Reads a list of article URLs from Google Sheets
- Sends URLs to Dumpling AI to crawl and extract content
- Splits each article into a single item for processing
- Uses a Code node to clean and structure article data
- Uses an Edit Fields node to merge articles into one JSON block
- GPT-4o summarizes and generates HTML content for the newsletter
- Sends the formatted newsletter via Gmail

---

### Setup

1. **Google Sheets**
   - Create a sheet with a column (A) for article URLs
   - Update the `Read URLs from Google Sheet` node to use your Sheet ID and tab name
   - Connect your Google account in the credentials

2. **Dumpling AI**
   - Sign up at [https://app.dumplingai.com](https://app.dumplingai.com)
   - Create an agent for web crawling under `/crawl`
   - Add your Dumpling API key in the HTTP headers of the `Crawl Content with Dumpling AI` node

3. **Split Node**
   - Breaks apart the array of articles from Dumpling AI so each article is processed individually

4. **Code Node**
   - Structures each article as JSON with `title`, `url`, and cleaned `text` content

5. **Edit Fields Node**
   - Gathers all structured articles back into a single JSON array to prepare for AI summarization

6. **OpenAI (GPT-4o)**
   - Processes the article list and returns a formatted subject line and HTML newsletter content

7. **Gmail**
   - Connect your Gmail account to send the AI-generated newsletter to your inbox or team
   - Update the recipient field in the `Send HTML Email via Gmail` node

---

### How to customize this workflow to your needs

- Replace the manual trigger with a `Schedule` node to send newsletters weekly
- Modify the GPT-4o prompt to change tone (e.g., more professional, funny, casual)
- Add filtering logic to skip low-value articles
- Connect Slack, Airtable, or Notion for internal team usage
- Change Gmail to SendGrid or Outlook if preferred

---

### Final Notes

This workflow uses:
- **Dumpling AI** `/crawl` endpoint to extract article content
- **Split**, **Code**, and **Edit Fields** nodes to format multi-article input
- **GPT-4o** for summarization and HTML formatting
- **Gmail** for delivery

This setup eliminates manual steps and delivers fast, consistent newsletters powered by AI.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
