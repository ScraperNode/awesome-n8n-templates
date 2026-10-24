# 📱 Create daily Facebook posts from Google Sheets with GPT-4o-mini and Ideogram

> ⚡ **97 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Set up your keyword schedule once in a Google Sheet and the workflow publishes daily Facebook posts automatically every morning at 6AM. For each keyword scheduled for today, it generates a headline and post content with GPT-4o-mini, creates a professional 1280x704 image with Ideogram, publishes the photo and caption directly to your Facebook Page, and logs the live post URL back to your sheet. Built for SEO agencies and social media managers who want consistent daily Facebook publishing across multiple clients without any manual work.

---

## What This Workflow Does

- **Reads today's keywords from Google Sheets** — Filters rows where the Work Day column matches today's day so only today's scheduled content is published
- **Loops through each keyword independently** — Processes one row at a time so every keyword gets its own unique post, image, and log entry
- **Generates a headline and post content with GPT-4o-mini** — Writes a 6–8 word informational headline, plain text paragraphs under 50 words, and an image generation prompt — all grounded in your provided title and content
- **Creates a professional image with Ideogram** — Generates a realistic 1280x704 business-appropriate image in TURBO mode based on the AI-written image prompt
- **Publishes directly to the Facebook Page** — Posts the image and caption to your Facebook Page via the Facebook Graph API with no manual step needed
- **Logs the live post URL back to Google Sheets** — Appends a timestamp, Domain ID, link type, and the live Facebook post URL to your log sheet after every successful post
- **Respects Facebook rate limits** — Waits exactly 1 minute between each post to prevent rate limiting errors when publishing multiple keywords in the same run

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Google Sheets with a keyword schedule sheet and a log sheet
- OpenAI account with GPT-4o-mini API access
- Ideogram account with API access
- Facebook Page with a Page Access Token

### Credentials Required
- Google Sheets OAuth2 (used in **2. Google Sheets — Read Today Keywords** and **10. Google Sheets — Log Posted URL**)
- OpenAI API key
- Ideogram API key (pasted directly into **7. HTTP — Generate Image Ideogram**)
- Facebook Page Access Token (pasted directly into **9. HTTP — Post to Facebook**)

&gt; ⚠️ **Google Sheets OAuth2 appears in 2 steps** — connect it in both **2. Google Sheets — Read Today Keywords** and **10. Google Sheets — Log Posted URL**

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Prepare your keyword schedule sheet** — Open your Google Sheet → ensure the keyword tab has these columns: `Work Day`, `Keyword`, `Landing Page`, `Title`, `Content`, `Critical Instructions`, `Domain ID` — fill `Work Day` with short day names like `Mon`, `Tue`, `Wed`, `Thu`, `Fri`

3. **Connect Google Sheets for reading** — Open node **2. Google Sheets — Read Today Keywords** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access → select your spreadsheet and the keyword tab

4. **Update the Sheet ID and tab in node 2** — In node **2. Google Sheets — Read Today Keywords**, select your actual spreadsheet from the document dropdown and your keyword tab from the sheet dropdown — the current values point to a sample sheet

5. **Connect OpenAI** — Open node **5. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Add your Ideogram API key** — Open node **7. HTTP — Generate Image Ideogram** → find the header value field that currently says `REPLACE_WITH_IDEOGRAM_API_KEY` → replace it with your actual Ideogram API key — get it from your Ideogram account settings

7. **Add your Facebook Page Access Token** — Open node **9. HTTP — Post to Facebook** → find the `access_token` body parameter that says `REPLACE_WITH_FB_PAGE_ACCESS_TOKEN` → replace it with your actual Page Access Token — get this from Facebook Developers → your app → Graph API Explorer → select your page → generate a Page Access Token. Also update the Page ID in the URL (`628386143694589`) to your actual Facebook Page ID

8. **Connect Google Sheets for logging** — Open node **10. Google Sheets — Log Posted URL** → click the credential dropdown → select the same Google Sheets OAuth2 credential → select your spreadsheet and your log tab

9. **Update the Sheet ID and log tab in node 10** — In node **10. Google Sheets — Log Posted URL**, select your actual spreadsheet and the log tab — ensure the log tab has columns: `Timestamp`, `Domain ID`, `Link Type`, `Live URLs`

10. **Activate the workflow** — Toggle the workflow to Active — it will run automatically every morning at 6AM

---

## How It Works (Step by Step)

**Step 1 — Schedule: Daily 6AM**
This step fires the workflow automatically every morning at 6AM. No manual trigger is needed. Once the workflow is active, it runs on its own every day including weekends.

**Step 2 — Google Sheets: Read Today Keywords**
Your keyword schedule sheet is read and filtered to only return rows where the `Work Day` column matches today's short day name (Mon, Tue, Wed, etc.). This uses today's actual day of week calculated at runtime so Monday only publishes Monday rows, Tuesday only publishes Tuesday rows, and so on.

**Step 3 — Split: Loop Over Each Row**
The filtered rows are processed one at a time using a loop. When a row is available it moves forward to content generation. When all rows have been processed the loop exits cleanly and the workflow ends. This ensures each keyword gets its own independent post — if one fails, the others continue.

**Step 4 — AI Agent: Generate Post Content**
GPT-4o-mini receives the keyword, landing page, title, content, and any critical instructions from the current row. It writes three outputs: a 6–8 word informational headline with no special characters, plain text post content in paragraphs of maximum 50 words with no links or generic intro/conclusion phrases, and a professional image generation prompt avoiding logos and brand references. The first 250 characters of the headline plus content must stand alone as a complete Twitter-ready summary.

**Step 5 — OpenAI: GPT-4o-mini Model**
This is the language model powering both the content generation and the output parser. It runs with default settings to produce natural, informational social copy.

**Step 6 — Parser: Structured Post Output**
This step enforces the exact three-field schema that GPT-4o-mini must return: `Headline`, `Content`, and `image prompt`. It validates and auto-fixes the output format so the fields are always clean and correctly structured before the image generation step.

**Step 7 — HTTP: Generate Image Ideogram**
The AI-generated image prompt is sent to the Ideogram v3 API. The image is generated at 1280x704 resolution in TURBO mode for fast delivery. A URL for the generated image is returned. If Ideogram fails, the step continues without stopping the full loop so remaining keywords still get published.

**Step 8 — Code: Prepare Post Data**
The headline, content, and landing page URL are assembled into the final post text formatted as: headline, then two line breaks, then content paragraphs, then `Read more: [landing page URL]`. The Domain ID from the sheet row is also extracted here for logging. The Ideogram image URL is carried forward for the Facebook post.

**Step 9 — HTTP: Post to Facebook**
The assembled caption and image URL are posted to the Facebook Page via the Graph API v23. The post is published as a photo post with the caption attached. The Facebook API returns a post ID on success. If the post fails, the step continues so the loop does not break on a single failed post.

**Step 10 — Google Sheets: Log Posted URL**
A new row is appended to your log sheet with four values: the current timestamp in MM-DD HH:mm:ss format, the Domain ID from the keyword row, the link type label "Social Sharing Fb", and the live Facebook post URL constructed from the post ID returned by Facebook. If the Facebook post failed, the Live URLs field will be empty for that row.

**Step 11 — Wait: 1 Minute Rate Limit**
The workflow pauses for exactly 1 minute before looping back to process the next keyword row. This prevents Facebook from rate limiting the Page when multiple posts are published in the same run. After the 1-minute wait, the loop returns to step 3 to pick up the next row.

---

## Key Features

✅ **Day-of-week scheduling from a spreadsheet** — Your entire week's content plan lives in one Google Sheet — the workflow reads only today's rows automatically without any configuration changes
✅ **Full loop with rate limit control** — Every keyword runs through content, image, post, and log in sequence with a 1-minute gap between posts — no manual spacing needed
✅ **Twitter-ready first 250 characters** — The prompt enforces a standalone summary in the first 250 characters so you can repurpose the same content for Twitter without any editing
✅ **Professional images at no extra setup** — Ideogram generates a unique 1280x704 business image for every post based on AI-written prompts — no Canva, no stock photos
✅ **Error continuity on failure** — All three external API steps (Ideogram, Facebook, and Google Sheets log) are set to continue on error so one failing post never breaks the entire day's run
✅ **Live URL logged automatically** — The exact Facebook post URL is written back to your sheet immediately after publishing so your reporting is always up to date
✅ **Domain ID tracking per post** — Every log row includes the Domain ID from your sheet so agencies managing multiple clients can filter and report by client

---

## Customisation Options

**Change the publish time** — In node **1. Schedule — Daily 6AM**, change the trigger hour from 6 to any other hour to publish at a different time — for example set to 8 for 8AM or 18 for 6PM.

**Add more columns to the keyword sheet** — In node **4. AI Agent — Generate Post Content**, you can reference additional columns from your sheet (e.g. `Brand Voice`, `Tone`, `Target Audience`) by adding them to the prompt context — just make sure the column headers exist in your sheet.

**Change the image resolution or style** — In node **7. HTTP — Generate Image Ideogram**, change the `resolution` value from `1280x704` to `1024x1024` for a square image suited to Instagram, or change `rendering_speed` from `TURBO` to `DEFAULT` for higher quality rendering.

**Post to a different Facebook Page** — In node **9. HTTP — Post to Facebook**, replace the Page ID in the URL (`628386143694589`) with your own Page ID — find your Page ID by going to your Facebook Page → About → Page Transparency, or from Facebook Developers.

**Add a Slack notification after each post** — After node **10. Google Sheets — Log Posted URL**, add a Slack step that posts the headline and live Facebook URL to a `#social-posting` channel so your team gets notified in real time when each post goes live.

---

## Troubleshooting

**Workflow not triggering at 6AM:**
- Confirm the workflow is Active — inactive workflows do not run on a schedule
- Check that your n8n instance is running at 6AM — self-hosted instances that are turned off will not fire scheduled workflows
- To test immediately, click on node **1. Schedule — Daily 6AM** and use the manual Execute option

**No keywords being read from Google Sheets:**
- Confirm the Google Sheets OAuth2 credential in node **2. Google Sheets — Read Today Keywords** is connected and not expired — re-authorize if needed
- Check that the `Work Day` column in your sheet uses the exact short day name format that matches your system locale — the workflow uses `en-US` format which produces `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`
- Confirm the correct spreadsheet and tab are selected in node 2 — if the node still points to the sample Sheet ID, no rows will return

**Ideogram not generating images:**
- Confirm `REPLACE_WITH_IDEOGRAM_API_KEY` in node **7. HTTP — Generate Image Ideogram** has been replaced with your actual Ideogram API key in the `Api-Key` header field
- Check the execution log of node 7 for the API error response — a 401 means wrong key, a 400 means invalid prompt format
- If Ideogram fails, the post will still attempt to publish but with an empty image URL — Facebook will reject a photo post with no image URL, so the post will not go live for that keyword

**Facebook post not publishing:**
- Confirm `REPLACE_WITH_FB_PAGE_ACCESS_TOKEN` in node **9. HTTP — Post to Facebook** has been replaced with a valid Page Access Token — not a User Access Token
- Page Access Tokens expire — if posting worked before and stopped, regenerate a long-lived Page Access Token from Facebook Developers → Graph API Explorer
- Confirm the Page ID in the URL of node 9 matches your actual Facebook Page ID — an incorrect Page ID returns a permission error

**Google Sheets log not updating:**
- Confirm the Google Sheets OAuth2 credential in node **10. Google Sheets — Log Posted URL** is connected — this is a separate connection from the read step
- Check that your log tab has the exact column headers: `Timestamp`, `Domain ID`, `Link Type`, `Live URLs`
- If the Facebook post failed, the post ID is empty and the Live URLs field will log as blank — this is expected behavior, not a logging error

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
