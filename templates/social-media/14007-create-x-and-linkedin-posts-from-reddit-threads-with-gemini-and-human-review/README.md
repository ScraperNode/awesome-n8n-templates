# 📱 Create X and LinkedIn posts from Reddit threads with Gemini and human review

> ⚡ **378 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Reddit Thread → AI-Powered X & LinkedIn Posts with Human Approval Gate

Turn any Reddit thread into polished, platform-optimized social media posts for **X (Twitter)** and **LinkedIn** - in minutes, not hours. This workflow reads a Reddit thread, extracts the full discussion (including nested comment threads sorted by score), feeds everything to Google Gemini for summarization and post generation, then pauses for your review before publishing anything live.

No accidental posts. No context lost. Just high-quality content, on your terms.

### ✨ Key Features

- **🔗 Any Reddit URL supported** → Standard, mobile (`m.reddit.com`), and short `redd.it` links all work
- **💬 Full thread extraction** → Recursively pulls all comments and replies, sorted by score at every depth level
- **🧠 Two-stage AI pipeline** → Gemini first summarizes the thread, then generates platform-specific posts from that summary
- **🐦 X-optimized post** → Max 280 characters, punchy, curiosity-driven with relevant hashtags; auto-truncated if over the limit
- **💼 LinkedIn-optimized post** → 150–300 words, professional tone, structured paragraphs, engagement question, and hashtags
- **👤 Human-in-the-loop approval** → A review form shows both posts before anything is published; supports manual overrides per platform
- **🚫 Graceful rejection path** → If rejected, the workflow terminates cleanly with no content published

### 📝 What This Workflow Does

This workflow solves a real content creation bottleneck: Reddit threads are goldmines of community insight, niche expertise, and trending discussions - but turning that raw discussion into polished, platform-appropriate social posts takes significant manual effort.

This automation handles the entire pipeline: from a raw URL to live posts on two platforms, with you staying in full control via an approval gate. It's ideal for **content marketers**, **community managers**, **indie hackers**, **developers**, and **newsletter writers** who want to repurpose Reddit content without losing quality or spending hours manually summarizing threads.

### ⚙️ How It Works (Step-by-Step)

1. **Submit a Reddit URL** - A web form (Form Trigger) accepts any Reddit thread URL as input.
2. **Parse the URL** - A Code node validates and deconstructs the URL using regex, extracting the subreddit and post ID to build the Reddit JSON API endpoint.
3. **Fetch the thread** - An HTTP Request node calls Reddit's public JSON API (`reddit.com/r/.../comments/id.json`) with `limit=100` and `depth=3` to retrieve the full thread.
4. **Extract & structure content** - A Code node recursively traverses the entire comment tree, sorts comments by score at every depth level, and builds a clean flat text representation of the full thread - including post metadata (title, score, upvote ratio, flair, awards) - ready for AI injection.
5. **Summarize with Gemini** - The assembled thread content is passed to Google Gemini (3.1 Flash Lite), which returns a comprehensive markdown summary covering: Thread Overview, Key Topics, Notable Insights, Community Sentiment, and Actionable Takeaways.
6. **Generate social posts** - A second Gemini call uses the summary to craft a platform-optimized X post (≤280 chars) and a LinkedIn post (150–300 words), returning strict JSON output.
7. **Parse & validate** - A Code node safely extracts the JSON, strips any markdown fences, falls back to regex parsing if needed, and enforces the 280-character hard limit on the X post.
8. **Human Approval form** - The workflow pauses and presents both posts in a review form. You can approve as-is, paste a manual override for either platform, or reject the entire run.
9. **Resolve final content** - A Code node merges your overrides (if any) with the AI versions; overrides always win, AI version is the fallback.
10. **Route by decision** - An IF node checks your approval decision:
    - ✅ **Approve & Publish** → Posts simultaneously to X and LinkedIn
    - ❌ **Reject** → Workflow ends cleanly; nothing is published

### 🚀 How to Use This Workflow

**Step 1 - Set up credentials**

Click **Use template**, then configure the following credentials in n8n:

| Service | Credential Type | How to Get It |
|---|---|---|
| 🤖 Google Gemini | Google PaLM API | [Get API Key → Google AI Studio](https://aistudio.google.com/apikey) |
| 🐦 X (Twitter) | Twitter OAuth2 | [X Developer Portal → Create App → OAuth2](https://developer.twitter.com/en/portal/dashboard) |
| 💼 LinkedIn | LinkedIn OAuth2 | [LinkedIn Developer Portal → Create App](https://www.linkedin.com/developers/apps) |

&gt; **Note on Reddit:** No API key required. This workflow uses Reddit's public JSON API (append `.json` to any thread URL) which is freely accessible without authentication.

**Step 2 - Configure the LinkedIn node**

Open the **Post to LinkedIn** node and replace the `person` field value (`=ID`) with your LinkedIn Person URN. You can retrieve it by calling the LinkedIn API: `GET https://api.linkedin.com/v2/userinfo` after authenticating.

**Step 3 - Activate the workflow**

Toggle the workflow to **Active** in your n8n instance. This enables the Form Trigger and the Wait node's webhook to function correctly.

**Step 4 - Run it**

1. Open the **Form Trigger URL** (found in the Reddit URL Input node)
2. Paste any Reddit thread URL
3. Wait for the approval form to arrive (check the execution log for the form URL)
4. Review, optionally edit, and approve or reject
5. Done! your posts are live 🚀

### 🛠️ How to Customize

- **🤖 Swap the AI model** - Both Gemini nodes use `gemini-3.1-flash-lite-preview`. You can switch to `gemini-3.1-pro-preview` or `claude-sonnet-4-6` for higher quality output by updating the `modelId` in both Gemini nodes or by adding Anthropic nodes.
- **📝 Change the post format** - Edit the prompt in the **Generate Social Posts** node to adjust tone, length, hashtag count, or add support for other platforms (Instagram, Threads, Facebook).
- **📊 Add more platforms** - After the **Approved?** node's true branch, connect additional posting nodes (e.g., Facebook Graph API, Buffer, Telegram) in parallel.
- **📋 Log to Google Sheets** - Add a Google Sheets node after the publish nodes to track published posts, Reddit thread URLs, dates, and engagement metrics.
- **⏱️ Make it scheduled** - Replace the Form Trigger with a Schedule Trigger + a list of pre-configured Reddit URLs in Google Sheets for fully automated daily publishing.

### ⚠️ Important Notes

- The Reddit public JSON API does not require authentication but is rate-limited. For high-volume use, consider adding a Reddit OAuth2 credential.
- The **Wait node** requires your n8n instance to be publicly accessible (or use n8n Cloud) so the approval form's webhook URL can be reached by your browser.
- LinkedIn's API requires your app to have the `w_member_social` permission scope to post on behalf of a user.
- X (Twitter) API v2 requires an approved developer account. Free tier allows limited monthly tweets.

## 🔗 Nodes Used

HTTP Request, X (Formerly Twitter), LinkedIn, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
