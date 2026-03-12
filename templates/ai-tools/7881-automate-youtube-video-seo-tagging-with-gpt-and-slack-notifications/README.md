# 🎯 Automate YouTube video SEO tagging with GPT and Slack notifications

> ⚡ **672 views** · 🎯 [AI Summarization & Classification](../)

## Description

# AI-Powered YouTube Auto-Tagging Workflow (SEO Automation)
### Watch the demo video below:
[![Watch the video](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/youtube-auto-SEO-tagging-with-n8n-workflow.jpg)](https://www.youtube.com/watch?v=fnzhEJb9R4w)
&gt; Supercharge your YouTube SEO with this AI-powered workflow that automatically generates and applies smart, SEO friendly tags to your new videos every week. No more manual tagging, just better discoverability, improved reach, and consistent optimization. Plus, get instant Slack notifications so your team stays updated on every video’s SEO boost.
## Who’s it for
- YouTube creators, channel admins, and marketing teams who publish regularly and want consistent, SEO-friendly tags without manual effort.  
- Agencies managing multiple channels who need an auditable, automated tagging process with Slack notifications.

## How it works / What it does
1. **Weekly Schedule Trigger**  
   Runs the workflow once per week.

2. **Get all videos uploaded last week**  
   Queries YouTube for videos uploaded by the channel in the past 7 days.

3. **Get video detail**  
   Retrieves each video’s title, description, and ID.

4. **YouTube Video Auto Tagging Agent** (LLM)  
   - Inputs: `video.title`, `video.description`, `channelName`.  
   - Uses a SEO-specialist system prompt to generate 15–20 relevant, comma-separated tags.

5. **Update video with AI-generated tags**  
   Writes the tags back to the video via YouTube Data API.

6. **Inform via Slack message**  
   Posts a confirmation message (video title + ID + tags) to a chosen Slack channel for visibility.

## How to set up
1. **YouTube connection**
   - Create a Google Cloud project and enable **YouTube Data API v3**.
   - Configure OAuth client (Web app / Desktop as required).
   - Authorize with the Google account that manages the channel.
   - In your automation platform, add the YouTube credential and grant scopes (see *Requirements*).

2. **Slack connection**
   - Create or use an existing Slack app/bot.
   - Install to your workspace and capture the Bot Token.
   - Add the Slack credential in your automation platform.

3. **LLM / Chat Model**
   - Select your model (e.g., OpenAI GPT).  
   - Paste the **System Prompt** (SEO expert) and the **User Prompt** template:
     - Inputs: `{{video_title}}`, `{{video_description}}`, `{{channel_name}}`.
     - Output: **comma-separated list** of 15–20 tags (no #, no duplicates).

4. **Node configuration**
   - **Weekly Schedule Trigger:** choose day/time (e.g., Mondays 09:00 local).
   - **Get all videos uploaded last week:** date filter = now() - 7 days.
   - **Get video detail:** map each video ID from previous node.
   - **Agent node:** map fields to the prompt variables.
   - **Update video:** map the agent’s tag string to the YouTube `tags` field.
   - **Slack message:**  
     ```
     The video "*{{video_title}} - {{video_id}}*" has been auto-tagged successfully.
     Tags: {{tags}}
     ```

5. **Test run**
   - Manually run the workflow with one recent video.
   - Verify the tags appear in YouTube Studio and the Slack message posts.

## Requirements
**APIs & Scopes**
- **YouTube Data API v3**
  - `youtube.readonly` (to list videos / details)
  - `youtube` or `youtube.force-ssl` (to update video metadata incl. tags)
- **Slack Bot Token Scopes**
  - `chat:write` (post messages)
  - `channels:read` or `groups:read` if selecting channels dynamically (optional)

**Platform**
- Access to a chat/LLM provider (e.g., OpenAI).
- Outbound HTTPS allowed.

**Rate limits & quotas**
- YouTube updates consume quota; tag updates are write operations—avoid re-writing unchanged tags.
- Add basic throttling (e.g., 1–2 updates/sec) if you process many videos.

## How to customize the workflow
- **Schedule:** switch to daily, or run on publish events instead of weekly.
- **Filtering:** process only videos matching rules (e.g., title contains “tutorial”, or missing tags).
- **Prompt tuning:**  
  - Add brand keywords to always include (e.g., “WiseStack AI”).  
  - Constrain to language (e.g., “Vietnamese tags only”).  
  - Enforce max 500 chars total for tags if you want a stricter cap.
- **Safety guardrails:**  
  - Validate model output: split by comma, trim whitespace, dedupe, drop empty/over-long tags.  
  - If the agent fails, fall back to a heuristic generator (title/keywords extraction).
- **Change log:** write a row per update to a sheet/DB (videoId, oldTags, newTags, timestamp, runId).
- **Human-in-the-loop:** send tags to Slack as buttons (“Apply / Edit / Skip”) before updating YouTube.
- **Multi-channel support:** loop through a list of channel credentials and repeat the pipeline.
- **Notifications:** add error Slack messages for failed API calls; summarize weekly results.

**Tip:** Keep a small allow/deny list (e.g., banned terms, mandatory brand terms) and run a quick sanitizer right after the agent node to maintain consistency across your channel.

## 🔗 Nodes Used

Slack, Telegram, YouTube, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
