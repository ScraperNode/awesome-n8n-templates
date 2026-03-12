# 🎣 Reddit lead finder: Automated prospecting with GPT-4, Supabase and Gmail alerts

> ⚡ **1,287 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow monitors targeted subreddits for potential sales leads using Reddit’s API, AI content analysis, Supabase, and Google Sheets.

It is built specifically to discover posts from Reddit users who may benefit from a particular product or service. It can be easily customized for any market.

---

### 🔍 Features

- **Targeted Subreddit Monitoring:**  
  Searches multiple niche subreddits like `smallbusiness`, `startup`, `sweatystartup`, etc., using relevant keywords.

- **AI-Powered Relevance Scoring:**  
  Uses OpenAI GPT to analyze each post and determine if it’s written by someone who might benefit from your product, returning a simple “yes” or “no.”

- **Duplicate Lead Filtering with Supabase:**  
  Ensures you don’t email the same lead more than once by storing already-processed Reddit post IDs in a Supabase table.

- **Content Filtering:**  
  Filters out posts with no body text or no upvotes to ensure only high-quality content is processed.

- **Lead Storage in Google Sheets:**  
  Saves qualified leads into a connected Google Sheet with key data (URL, post content, subreddit, and timestamp).

- **Email Digest Alerts:**  
  Compiles relevant leads and sends a daily digest of matched posts to your team’s inbox for review or outreach.

- **Manual or Scheduled Trigger:**  
  Can be manually triggered or automatically scheduled (via the built-in Schedule Trigger node).

---

### ⚙️ Tech Stack

- **Reddit API** – For post discovery  
- **OpenAI Chat Model** – For AI-based relevance filtering  
- **Supabase** – For lead de-duplication  
- **Google Sheets** – For storing lead details  
- **Gmail API** – For sending email alerts

---

### 🔧 Customization Tips

- **Adjust Audience**: Modify the subreddits and keywords in the initial `Code` node to match your market.
- **Change the AI Prompt**: Customize the prompt in the “Analysis Content by AI” node to describe your product or service.
- **Search Comments Instead**: To monitor comments instead of posts, change `type=link` to `type=comment` in the Reddit Search node.
- **Change Email Recipients**: Edit the Gmail node to direct leads to a different email address or format.

## 🔗 Nodes Used

Google Sheets, Gmail, Reddit, Supabase, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
