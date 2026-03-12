# 📱 Auto-comment on Reddit posts with AI brand mentions & Baserow tracking

> ⚡ **924 views** · 📱 [Social Media & Email Marketing](../)

## Description

## This workflow finds fresh Reddit posts that match your keywords, decides if they’re actually relevant to your brand, writes a short human-style reply using AI, posts it, and logs everything to Baserow.

## 💡Perfect for

- Lead gen without spam: drop helpful replies where your audience hangs out.

- Get discovered by AI surfaces (AI Overviews / SGE, AISEO/GSEO) via high-quality brand mentions.

- Customer support in the wild: answer troubleshooting threads fast.

- Community presence: steady, non-salesy contributions in niche subreddits.


## 🧠 What it does

- Searches Reddit for your keyword query on a schedule (e.g., every 30 min)

- Checks Baserow first so you don’t reply twice to the same post

- Uses an AI prompt tuned for short, no-fluff, subreddit-friendly comments

- Softly mentions your brand only when it’s clearly relevant

- Posts the comment via Reddit’s API

- Saves post_id, comment_id, reply, permalink, status to Baserow

- Processes posts one-by-one with an optional short wait to be nice to Reddit


## ⚡ Requirements

- Reddit developer API

- Baserow account, table, and API token

- AI provider API (OpenAI / Anthropic / Gemini)




## ⚙️ Setup Instructions

1. **Create Baserow table**
   Fields (user-field names exactly):
   `post_id` (**unique**), `permalink`, `subreddit`, `title`, `created_utc`, `reply` (long text), `replied` (boolean), `created_on` (datetime).

2. **Add credentials in n8n**

* **Reddit OAuth2** (scopes: `read, submit, identity`) and set a proper **User-Agent** string (Reddit requires it).
* **LLM**: Google Gemini and/or Anthropic (both can be added; one can be fallback in the AI Agent).
* **Baserow**: API token.

3. **Set the Schedule Trigger (Cron)**
   Start hourly (or every 2–3h). Pacing is mainly enforced by the Wait nodes.

4. **Update “Check duplicate row” (HTTP Request)**

* **URL**:
  `https://api.baserow.io/api/database/rows/table/{TABLE_ID}/?user_field_names=true&filter__post_id__equal={{$json.post_id}}`
* **Header**: `Authorization: Token YOUR_BASEROW_TOKEN`
  (Use your own Baserow domain if self-hosted.)

5. **Configure “Filter Replied Posts”**
   Ensure it skips items where your Baserow record shows `replied === true` (so you don’t comment twice).

6. **Configure “Fetch Posts from Reddit”**
   Set your **keyword/search query** (and time/sort). Keep **User-Agent** header present.


7. **Configure “Write Reddit Comment (AI)”**

* **Update your brand name** (and optional link).
* **Edit the prompt/tone** to your voice; ensure it outputs a short `reply` field (≤80 words, helpful, non-salesy).

8. **Configure “Post Reddit Comment” (HTTP Request)**

* Endpoint: `POST https://oauth.reddit.com/api/comment`
* Body: `thing_id: "t3_{{$json.post_id}}", text: "{{$json.reply}}"`
* Uses your Reddit OAuth credential and **User-Agent** header. 
* Update `user_agent` value in header by your username `n8n:reddit-autoreply:1.0 (by /u/{reddit-username})`

10. **Store Comment Data on Baserow (HTTP Request)**

* `POST https://api.baserow.io/api/database/rows/table/{TABLE_ID}/?user_field_names=true`
* Header: `Authorization: Token YOUR_BASEROW_TOKEN`
* Map: `post_id, permalink, subreddit, title, created_utc, reply, replied, created_on={{$now}}`.

11. **Keep default pacing**
    Leave **Wait 5m** (cool-off) and **Wait 6h** (global pace) → \~**4 comments/day**. Reduce waits gradually as account health allows.

12. **Test & enable**
    Run once manually, verify a Baserow row and one test comment, then enable the schedule.




## 🤝 Need a hand?

I’m happy to help you get this running smoothly—or tailor it to your brand.

Reach out to me via email: imarunavadas@gmail.com

## 🔗 Nodes Used

HTTP Request, Reddit, Baserow, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
