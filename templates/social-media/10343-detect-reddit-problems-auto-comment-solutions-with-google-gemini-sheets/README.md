# 📱 Detect Reddit problems & auto-comment solutions with Google Gemini & Sheets

> ⚡ **228 views** · 📱 [Social Media & Email Marketing](../)

## Description

# | N8N Workflow | AI Reddit Problem Detection & Auto-Solution Commenter 🤖

*This n8n workflow automates Reddit community engagement by detecting posts that discuss problems and automatically replying with AI-generated solutions — powered by Google Gemini.*

*It’s designed for developers, automation creators, and brands who want to provide helpful, automated responses to Reddit users discussing issues in their niche.*

## How It Works

- The workflow starts with a Manual Trigger (When clicking ‘Execute workflow’).
- Search for a Post: It scans the r/n8n subreddit (or any subreddit you set) for recent posts containing the keyword “Why I stopped using”.
- Filter Posts (If Node): Filters posts that have 2 or more upvotes and non-empty text, ensuring only quality discussions are analyzed.
- Edit Fields: Extracts post details such as title, body text, upvotes, creation time, and subreddit ID for AI processing.

**AI Agent + Google Gemini Chat Model:**
 - The first AI node analyzes the post and decides whether it’s describing a problem or frustration related to AI automation.
 
 - Gemini responds with “Yes” or “No.”

**Conditional Branch (If1 Node):**
- If “Yes,” the post is confirmed as discussing a problem.
- The workflow then triggers the second AI Agent.

**AI Agent 2 + Gemini:**
- The second AI node uses Gemini to generate a helpful and concise solution addressing the issue mentioned in the Reddit post (for example, offering a fix, suggestion, or new idea).

**Merge & Log Data:**
- The AI’s findings (post details + solution) are merged and saved into a connected Google Sheet for tracking community insights.

**Comment on Reddit:**
- The workflow automatically posts the AI-generated solution as a comment reply on the original Reddit thread, engaging users directly.

## How To Use
- Import the provided JSON workflow into your n8n dashboard.

- Set up the required credentials:

 - Reddit OAuth2 API – for searching and posting comments.

 - Google Gemini (PaLM) API – for AI text analysis and solution generation.

- Google Sheets API – for logging post data and AI results.

- Adjust the subreddit name, search keyword, or prompts to fit your niche.

- Click Execute Workflow to run the automation.

## Requirements
- Reddit Developer Account (OAuth2 credentials).
- Google Gemini (PaLM) API account for AI processing.
- Google Sheets account for saving analysis results.

## How To Customize
- Change the search keyword (e.g., “help with automation,” “issue with API,” etc.).
- Modify the AI prompts to tailor the solution style (technical, friendly, educational, etc.).
- Edit the Google Sheet fields to capture more or fewer details.
- Enable/disable the comment node if you want to manually approve replies before posting.
- Adjust the Gemini model name (e.g., models/gemini-2.0-flash) or parameters for faster or more creative responses.

## 🔗 Nodes Used

Google Sheets, Reddit, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
