# 🎬 Generate YouTube, Reels, and TikTok scripts from one topic with GPT-4o-mini, Google Sheets, and Gmail

> ⚡ **223 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit one video topic using a simple form and GPT-4o-mini generates three platform-ready scripts in a single AI call. You get a structured 700–900 word YouTube long-form script, a fast-paced 100–130 word Instagram Reels script with visual cues, and a punchy 50–70 word TikTok script that ends with a comment question. All three scripts are logged to Google Sheets and delivered to your inbox in one email ready to record. Built for content creators, social media managers, and marketing agencies who want to repurpose one topic across three platforms without writing anything manually.

---

## What This Workflow Does

- **Generates all three scripts in one API call** — YouTube, Instagram Reels, and TikTok are written simultaneously by a single GPT-4o-mini request so you get all three in seconds
- **Writes platform-specific script formats** — YouTube gets a structured long-form script with intro, three main points, and conclusion; Reels gets visual cues in brackets; TikTok gets one punchy idea ending with a comment question
- **Includes a hook for every platform** — Each script starts with a standalone attention-grabbing opening line under 20 words, ready to use as the first thing you say on camera
- **Adds platform-appropriate CTAs** — YouTube asks to subscribe and comment, Instagram Reels asks to save and follow, TikTok asks to follow for more — automatically matched to each platform
- **Attaches 8 hashtags per platform** — Each script includes 8 relevant hashtags with a mix of broad and niche tags specific to your industry
- **Logs all three scripts to Google Sheets** — Appends one row per platform — three rows per submission — with hook, script, CTA, tags, and metadata
- **Sends all three scripts in one Gmail** — All three platforms arrive in a single clearly sectioned plain-text email ready to copy and record

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **Video Scripts**)
- Gmail account (the account you want to receive the scripts)

### Credentials Required
- OpenAI API key
- Google Sheets OAuth2
- Gmail OAuth2

**Estimated Setup Time: 10–15 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all three placeholders:

| Field | What to enter |
|---|---|
| `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` | The ID from your Google Sheet URL (the string between `/d/` and `/edit`) |
| `PASTE_YOUR_EMAIL_HERE` | The email address where the three scripts should be sent |
| `PASTE_YOUR_NAME_HERE` | Your name for the email greeting and sign-off |

3. **Connect OpenAI** — Open node **4. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

4. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Video Scripts** → add these 9 column headers in row 1: `Date`, `Topic`, `Platform`, `Script Length`, `Hook`, `Script`, `CTA`, `Tags`, `Submitted By`

5. **Connect Google Sheets** — Open node **7. Google Sheets — Log Video Scripts** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

6. **Connect Gmail** — Open node **10. Gmail — Send Scripts Email** → click the credential dropdown → add Gmail OAuth2 → sign in with the Gmail account that matches your email address → authorize access

7. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Multi-Platform Video Topic** → open it in a browser to submit your first topic

---

## How It Works (Step by Step)

**Step 1 — Form: Multi-Platform Video Topic**
You open the form URL in a browser and fill in five fields: the video topic, target audience, your niche or industry, tone of voice (optional, defaults to "educational and engaging"), and your name. Submitting the form starts the workflow.

**Step 2 — Set: Config Values**
Your Google Sheet ID, recipient email, sender name, and all five form inputs are stored here. Today's date is auto-generated. Tone of voice defaults to "educational and engaging" if left blank on the form. Your niche is passed to the AI so all three scripts are personalized for your industry.

**Step 3 — AI Agent: Write 3 Platform Scripts**
GPT-4o-mini receives the video topic, target audience, niche, and tone. In one call it generates all three scripts simultaneously. The YouTube script is 700–900 words with intro, three main points, and conclusion. The Instagram Reels script is 100–130 words, fast-paced, with visual cues in brackets (e.g. `[hold up phone]`). The TikTok script is 50–70 words, covers one idea only, and ends with a question for viewers to answer in the comments. Every script includes a hook, full spoken script, platform-specific CTA, and 8 hashtags.

**Step 4 — OpenAI: GPT-4o-mini Model**
This is the language model powering the script generation. It runs at temperature 0.7 for natural, varied language and is capped at 2,500 tokens to comfortably fit all three scripts in one response.

**Step 5 — Parser: Structured Scripts Output**
This step enforces the exact nested schema GPT-4o-mini must return: a top-level object with three keys (`youtube`, `reels`, `tiktok`), each containing four fields (`hook`, `script`, `cta`, `tags`). All twelve fields are validated before any logging or emailing begins.

**Step 6 — Code: Split Scripts for Sheets**
The three-platform object is converted into three separate rows — one for YouTube, one for Instagram Reels, one for TikTok — so each can be written to Google Sheets as its own row. An `isLastRow` flag is set to true only on the TikTok row (the third). The full scripts object is attached to the TikTok row only, so the email builder has all three scripts available when it fires.

**Step 7 — Google Sheets: Log Video Scripts**
Each of the three rows is appended to your Video Scripts tab. All 9 columns are populated: date, topic, platform, script length label, hook, full script, CTA, tags as a space-separated hashtag string, and submitter name.

**Step 8 — IF: All Scripts Logged?**
After each row is written, this check reads the `isLastRow` flag. If true (YES path — the TikTok row was the last one), the workflow moves to build and send the Gmail. If false (NO path — the YouTube or Reels row was just logged), the workflow routes to **11. Set — More Scripts** and the loop continues to the next row.

**Step 9 — Code: Build Email**
The full scripts object (carried on the TikTok row) is used to build one complete email. The body is organized into three clearly labeled sections — YOUTUBE, INSTAGRAM REELS, and TIKTOK — each with hook, script, CTA, and tags. The email subject includes the video topic and today's date.

**Step 10 — Gmail: Send Scripts Email**
The complete email is sent to your configured address with no attribution footer. All three platform scripts arrive in one clean message organized by section, ready to copy and record.

**Step 11 — Set: More Scripts**
This step handles non-final rows (YouTube and Reels) during the logging loop. It sets a brief in-progress message and the loop continues to the next row.

---

## Key Features

✅ **All three scripts in one GPT call** — One API request generates YouTube, Reels, and TikTok simultaneously — faster and cheaper than three separate calls
✅ **Visual cues built into the Reels script** — Instagram Reels includes on-screen action prompts in brackets so you know exactly what to do in front of the camera
✅ **TikTok ends with a comment prompt** — Every TikTok script closes with a specific question designed to drive comments — built into the prompt structure, not added manually
✅ **Niche personalization across all three** — Your industry is passed to GPT so the examples, language, and hashtags are relevant to your actual audience on every platform
✅ **Gmail fires exactly once** — The `isLastRow` flag ensures you receive one email with all three scripts after all three rows are logged — never one email per platform
✅ **Structured output enforced** — A nested schema parser validates all 12 fields across three platforms before any logging or emailing begins
✅ **Permanent script library in Sheets** — Every submission adds three rows to your Video Scripts tab — over time you build a searchable library of scripts organized by topic and platform
✅ **Tone defaults to educational if blank** — Leaving the Tone of Voice field empty on the form triggers a sensible default instead of failing the workflow

---

## Customisation Options

**Add a fourth platform — LinkedIn** — In node **3. AI Agent — Write 3 Platform Scripts**, edit the prompt to request a fourth platform object with a `linkedin` key — a 150–200 word professional text post — and update the schema parser in node **5** to require it.

**Change the YouTube script length** — In node **3. AI Agent — Write 3 Platform Scripts**, change the `youtube` script instruction from "700 to 900 words" to a longer or shorter target — and update `maxTokens` in node **4. OpenAI — GPT-4o-mini Model** from 2500 to accommodate longer output.

**Send scripts to a Slack channel** — After node **10. Gmail — Send Scripts Email**, add a Slack step that posts the video topic, all three hooks, and a note that scripts are ready to a `#content-team` channel so your team sees new scripts without checking email.

**Log to separate sheet tabs per niche** — In node **2. Set — Config Values**, make `sheetName` dynamic using the niche value (e.g. `Video Scripts — Legal Marketing`) so different niche batches automatically sort into their own dedicated tabs.

**Add a Google Docs save for each script** — After node **7. Google Sheets — Log Video Scripts**, add a Google Docs create step that saves each platform's full script as its own document in a Drive folder — giving you editable individual files alongside the sheet log.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Multi-Platform Video Topic** after activating — URLs copied before activation will not work
- Make sure Video Topic, Target Audience, and Your Niche or Industry are all filled in — these three fields are required

**GPT not returning all three scripts:**
- Confirm the API key is connected in node **4. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **3. AI Agent — Write 3 Platform Scripts** for the raw GPT response
- If the schema parser in node **5. Parser — Structured Scripts Output** throws an error, one or more platforms have missing fields — re-run the submission to see if it is consistent, or increase `maxTokens` from 2500 to 3000 in node 4

**Google Sheets not logging all three rows:**
- Confirm the Google Sheets OAuth2 credential in node **7. Google Sheets — Log Video Scripts** is connected and not expired — re-authorize if needed
- Check that `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` in node **2. Set — Config Values** is replaced with your actual sheet ID from the URL
- Confirm the tab is named **Video Scripts** exactly and all 9 column headers in row 1 match exactly: `Date`, `Topic`, `Platform`, `Script Length`, `Hook`, `Script`, `CTA`, `Tags`, `Submitted By`

**Gmail not arriving after all three rows are logged:**
- Confirm the Gmail OAuth2 credential in node **10. Gmail — Send Scripts Email** is connected and authorized
- Check that `PASTE_YOUR_EMAIL_HERE` in node **2. Set — Config Values** is replaced with your actual email address
- Check the execution log of node **8. IF — All Scripts Logged?** to confirm `isLastRow` reached true — if it never fires YES, the TikTok row may have failed to process correctly
- Check your spam or promotions folder on the first send

**Email arrives but scripts are missing or empty:**
- The `allScripts` object is only carried on the TikTok (third) row — if the TikTok row failed to log, the email builder will receive a null object and throw an error
- Check node **6. Code — Split Scripts for Sheets** execution log to confirm `isLastRow` was set correctly on the third item and `allScripts` is not null

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: info@isawow.com
🌐 Website: https://isawow.com/

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
