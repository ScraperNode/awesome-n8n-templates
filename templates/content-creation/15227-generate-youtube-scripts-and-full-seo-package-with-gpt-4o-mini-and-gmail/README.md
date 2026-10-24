# 🎬 Generate YouTube scripts and full SEO package with GPT-4o-mini and Gmail

> ⚡ **158 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit your video topic, target audience, video length, and tone of voice using a simple form and two sequential AI agents do the rest. The first writes a complete structured video script with hook, three content sections, conclusion, and call to action. The second generates the full SEO metadata package: an optimized title, three alternative titles, a full YouTube description with hashtags, 15 tags, and timestamped chapters. Everything arrives in one clean Gmail email ready to record and upload. Built for YouTube creators, video marketers, and SEO agencies who want a complete production-ready video package in minutes instead of hours.

---

## What This Workflow Does

- **Writes a full structured video script** — GPT-4o-mini produces a complete spoken script with hook, introduction, three named content sections with examples and tips, conclusion, and call to action
- **Generates an optimized YouTube title** — Produces a main title under 60 characters with the primary keyword, plus three alternative titles at curiosity, number, and question angles
- **Creates a full YouTube description** — Writes a description under 250 words with a keyword-rich hook, learning points, call to action, and relevant hashtags
- **Produces 15 mixed tags** — Generates a balanced mix of short and long keywords all relevant to the topic and channel niche
- **Builds timestamped chapters** — Creates chapters spaced evenly across your video length starting at 0:00, ready to paste directly into YouTube
- **Delivers everything in one Gmail** — Script, title options, tags, chapters, and description all arrive in a single clearly sectioned plain-text email

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- OpenAI account with GPT-4o-mini API access
- Gmail account (the account you want to receive the content package)

### Credentials Required
- OpenAI API key (used in **4. OpenAI — Script Model GPT-4o-mini** and **7. OpenAI — SEO Model GPT-4o-mini**)
- Gmail OAuth2

&gt; ⚠️ **OpenAI API key appears in 2 steps** — connect it in both **4. OpenAI — Script Model GPT-4o-mini** and **7. OpenAI — SEO Model GPT-4o-mini**

**Estimated Setup Time: 10–15 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all three placeholders:

| Field | What to enter |
|---|---|
| `PASTE_YOUR_EMAIL_HERE` | The email address where the content package should be sent |
| `PASTE_YOUR_NAME_HERE` | Your name for the email greeting and sign-off |
| `PASTE_YOUR_CHANNEL_NICHE_HERE` | Your channel's topic area (e.g. `personal injury law`, `SaaS marketing`, `medical aesthetics`) — GPT uses this to personalize both the script and metadata |

3. **Connect OpenAI for the script step** — Open node **4. OpenAI — Script Model GPT-4o-mini** → click the credential dropdown → add your OpenAI API key → test the connection

4. **Connect OpenAI for the SEO step** — Open node **7. OpenAI — SEO Model GPT-4o-mini** → click the credential dropdown → select the same OpenAI API credential → confirm it is connected

5. **Connect Gmail** — Open node **10. Gmail — Send Content Package** → click the credential dropdown → add Gmail OAuth2 → sign in with the Gmail account where you want to receive packages → authorize access

6. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — YouTube Content Request** → open it in a browser to submit your first video

---

## How It Works (Step by Step)

**Step 1 — Form: YouTube Content Request**
You open the form URL in a browser and fill in five fields: the video topic, target audience, video length (e.g. "8 minutes"), tone of voice (optional, defaults to "educational and engaging"), and your name. Submitting the form starts the workflow immediately.

**Step 2 — Set: Config Values**
Your email, sender name, channel niche, and all five form inputs are stored here. Today's date is auto-generated for the email subject. Tone of voice defaults to "educational and engaging" if left blank on the form.

**Step 3 — AI Agent: Write Video Script**
GPT-4o-mini receives the video topic, target audience, video length, tone of voice, and channel niche. It writes a complete spoken video script in plain English with no bullet points or markdown. The structure is fixed: a 30-second hook with 3–4 punchy sentences, a short introduction paragraph, three named content sections each with 2–3 paragraphs, a conclusion summarizing the three key takeaways, and a 2-sentence call to action asking viewers to like, subscribe, and comment.

**Step 4 — OpenAI: Script Model GPT-4o-mini**
This is the language model powering the script writing step. It runs at temperature 0.7 for creative, natural-sounding spoken language and is capped at 2,000 tokens to accommodate a full-length video script.

**Step 5 — Set: Save Script and Config**
The completed script is saved from the previous step's output. All nine config values — email, name, niche, topic, audience, length, and today's date — are explicitly re-carried forward here so the SEO agent has full context. This bridge step is necessary because n8n agents pass their output to the next step, not the full context from earlier in the workflow.

**Step 6 — AI Agent: Generate SEO Package**
GPT-4o-mini receives the video topic, target audience, channel niche, and video length. It returns five structured fields: a main YouTube title under 60 characters, an array of three alternative titles (one curiosity angle, one number angle, one question angle each under 60 characters), a full description under 250 words with keyword hook, learning points, call to action, and hashtags, an array of 15 keyword tags mixing short and long tail terms, and an array of timestamped chapter objects spaced evenly across the video length starting at 0:00.

**Step 7 — OpenAI: SEO Model GPT-4o-mini**
This is the language model powering the SEO metadata step. It runs at temperature 0.3 for precise, consistent output — lower than the script step because metadata needs to be accurate and structured, not creative.

**Step 8 — Parser: Structured SEO Output**
This step enforces the exact five-field schema GPT-4o-mini must return for the SEO package. It validates that title, alternativeTitles, description, tags, and chapters are all present and correctly typed before the email is assembled.

**Step 9 — Code: Build Email**
The SEO output and the saved script are combined into one complete plain-text email. The email is organized into clearly labeled sections: topic summary header, main title and three alternative titles, all 15 tags as a comma-separated list, chapters as timestamp-title pairs, the full description, and the complete video script. The email subject is automatically set to "YouTube Content Package — [main title] — [today's date]".

**Step 10 — Gmail: Send Content Package**
The complete email is sent to your configured email address with no attribution footer. One email contains everything needed to record, upload, and optimize the video.

---

## Key Features

✅ **Two specialized AI agents in sequence** — Script writing and SEO metadata are handled by separate GPT instances with different temperatures so each task is optimized independently
✅ **Script temperature tuned for creativity** — The script agent runs at 0.7 so the language sounds natural and spoken, not robotic or like a list
✅ **SEO metadata temperature tuned for precision** — The metadata agent runs at 0.3 so titles stay under 60 characters, chapters start at 0:00, and tag arrays are clean
✅ **Channel niche personalizes both outputs** — Your niche is passed to both agents so the script examples and the SEO keywords stay relevant to your actual audience
✅ **Structured output enforced for metadata** — A schema parser validates all five SEO fields before the email is built — no broken or incomplete packages
✅ **Chapters spaced to your video length** — The chapters step reads your submitted video length and distributes timestamps evenly so chapters actually match the content structure
✅ **Single email with every deliverable** — Script, titles, tags, chapters, and description all arrive in one email with clear section headers — ready to copy-paste into your recording notes and YouTube upload form
✅ **Tone defaults to educational if blank** — Leaving the Tone of Voice field empty on the form triggers a sensible default instead of failing the workflow

---

## Customisation Options

**Change the script structure** — In node **3. AI Agent — Write Video Script**, edit the structure instructions to add or remove sections — for example replace "Section 3 — common mistake" with "Section 3 — case study example" to change the content format for your channel style.

**Add a Google Docs save alongside the Gmail** — After node **9. Code — Build Email**, add a Google Docs step that creates a new document with the email body — giving you a permanent editable copy in Drive alongside the email delivery.

**Generate a shorter script for YouTube Shorts** — Add a second form field option for "Short format (under 60 seconds)" and branch after step 2 — if the video length is under 60 seconds, route to a shorter prompt in the AI Agent that writes just a hook and one main point.

**Send the package to a Slack channel** — After node **10. Gmail — Send Content Package**, add a Slack step that posts the main title, first alternative title, and today's date to a `#youtube-content` channel so your team sees new packages without checking email.

**Increase script length for longer videos** — In node **4. OpenAI — Script Model GPT-4o-mini**, raise `maxTokens` from 2000 to 3000 to allow GPT to write a more detailed script for 15–20 minute videos — useful for in-depth tutorial formats.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — YouTube Content Request** after activating — URLs copied before activation will not work
- Make sure Video Topic, Target Audience, and Video Length are all filled in — these three fields are required

**Script agent not generating content:**
- Confirm the OpenAI API key is connected in node **4. OpenAI — Script Model GPT-4o-mini** and your account has available credits
- Check the execution log of node **3. AI Agent — Write Video Script** for the raw GPT response
- If `maxTokens` is too low for your video length, the script may be cut off — increase from 2000 to 2500 in node 4

**SEO package missing fields or failing schema validation:**
- Confirm the OpenAI API key is connected in node **7. OpenAI — SEO Model GPT-4o-mini** — this is a separate credential connection from node 4
- Check the execution log of node **6. AI Agent — Generate SEO Package** for the raw GPT response — the schema parser in node **8. Parser — Structured SEO Output** will flag which fields are missing or wrong format
- If chapters are empty, the video length you submitted may be ambiguous — use a clear format like "8 minutes" or "10 minutes"

**Gmail not sending the package:**
- Confirm the Gmail OAuth2 credential in node **10. Gmail — Send Content Package** is connected and authorized
- Check that `PASTE_YOUR_EMAIL_HERE` in node **2. Set — Config Values** is replaced with your actual email address
- Check your spam or promotions folder on the first send — automated Gmail OAuth2 emails sometimes land there

**Email arriving with missing sections or garbled content:**
- Check the execution log of node **9. Code — Build Email** — if `seoOutput` is null the step throws an error
- Confirm node **5. Set — Save Script and Config** successfully carried the `videoScript` field forward — check its output in the execution log to confirm the script text is present before the SEO agent runs

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
