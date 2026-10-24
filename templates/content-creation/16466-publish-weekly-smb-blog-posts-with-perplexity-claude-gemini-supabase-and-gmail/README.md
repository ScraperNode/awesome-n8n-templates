# 🎬 Publish weekly SMB blog posts with Perplexity, Claude, Gemini, Supabase, and Gmail

> ⚡ **13 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs weekly to generate, research, write, illustrate, and publish a new blog post by combining Supabase (content + storage), Perplexity (topic + research), Anthropic Claude (writing), Google Gemini (cover image), and Gmail (notification).

## How it works
1. Runs every Friday at 10:00 (cron: 0 0 10 * * 5).
2. Fetches titles of already published posts from Supabase and builds a rotating topic focus that avoids repeating prior angles.
3. Uses Perplexity to propose one fresh, SEO-relevant blog topic and then research it with trends, examples, and SMB-focused insights.
4. Sends the topic and research notes to Anthropic Claude to write a complete post with title, excerpt, meta description, category, read time, and HTML body.
5. Parses the generated text into structured fields, generates a slug, and prepares a published blog post record.
6. Uses Google Gemini to generate a 16:9 cover image, uploads it to Supabase Storage, and attaches the public cover image URL to the post.
7. Inserts the finished post into the Supabase blog_posts table with status set to published and emails the team via Gmail with the publication details.

## Setup
1. Create a Supabase project with a blog_posts table and a Storage bucket/path for covers (social-images/blog-covers), then replace YOUR-PROJECT.supabase.co in both Supabase HTTP requests.
2. Add credentials for Supabase, Perplexity, Anthropic (Claude), Google Gemini (Google PaLM/Gemini), and Gmail OAuth2.
3. Update the notification recipients (To/CC) in the Gmail message node.
4. (Optional) Replace YOUR-COST-LOG-SUBWORKFLOW-ID with your cost-logging workflow ID or delete the cost-logging sub-workflow calls.
5. Adjust the schedule cron expression if you want a different publish cadence.

## Requirements
- Supabase project: a blog_posts table plus a public Storage bucket for cover images
- Perplexity API key (topic + research)
- Anthropic Claude API key (writing)
- Google Gemini key (cover image)
- Gmail OAuth, or any email node, for the notification

## Customization
- Rewrite the Claude prompt to match your brand voice, tone, and post length
- Change the schedule cron to publish daily, weekly, or on demand
- Swap Gmail for Slack, Telegram, or Outlook to get notified your way
- Publish to your own CMS or WordPress instead of Supabase by editing the publish node
- Tweak the Gemini cover prompt and aspect ratio for your brand look
- Add a human approval step before publishing if you want a person in the loop

## Additional info
The topic picker reads your already-published titles before choosing the next one, so your blog keeps a varied, non-repetitive editorial calendar on autopilot. The cost-logging nodes are optional and safe to delete.

Questions or help getting it running: support@priscgroup.com

Built by PRISC Group. Automate. Relentlessly. Ruthlessly.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Gmail, Schedule Trigger, Perplexity, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
