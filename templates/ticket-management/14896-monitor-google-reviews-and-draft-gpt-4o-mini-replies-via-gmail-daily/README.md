# 🎫 Monitor Google reviews and draft GPT-4o-mini replies via Gmail daily

> ⚡ **120 views** · 🎫 [Ticket Management & Triage](../)

## Description

You activate this workflow once and it checks your Google reviews every morning at 9AM without any action from you. It fetches your latest reviews, classifies them as positive or negative, and uses GPT-4o-mini to write a personalised reply draft for each one. You receive a clean daily email with all drafts ready to copy and paste straight into your Google Business Profile. Built for local business owners, agencies, and reputation managers who want to stay on top of reviews without checking manually every day.

---

## What This Workflow Does

**Fetches live reviews daily** — Pulls your latest Google reviews from the Places API every morning so you never miss a new one.

**Classifies each review automatically** — Separates positive reviews (4–5 stars) from negative reviews (1–3 stars) so the AI writes the right tone for each.

**Skips days with no activity** — If no reviews exist for your business, the workflow stops cleanly and sends no email — no noise in your inbox.

**Generates personalised reply drafts** — GPT-4o-mini writes a unique reply for every review, referencing the reviewer's name and specific comments.

**Handles negative reviews professionally** — Negative replies include a sincere apology and an offline resolution offer — never defensive or argumentative.

**Delivers a formatted daily digest** — Gmail sends one clean email with a summary count and all reply drafts — plus step-by-step instructions for posting them.

---

## Setup Requirements

### Tools and accounts needed:
- n8n instance (self-hosted or cloud)
- Google Cloud account with Places API enabled (for fetching reviews)
- Your Google Place ID (identifies your specific business listing)
- OpenAI account with API access (for GPT-4o-mini)
- Gmail account for sending the daily digest (OAuth2 credential)

**Estimated Setup Time: 12–18 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON. Paste the workflow JSON and import. Confirm all 9 nodes are connected in sequence.

2. **Find your Google Place ID** — Go to developers.google.com/maps/documentation/places/web-service/place-id and use the Place ID Finder. Search for your business name and copy the Place ID shown. You will paste this into the config step below.

3. **Get your Google Places API key** — Go to console.cloud.google.com. Create or select a project. Enable the **Places API**. Go to APIs & Services → Credentials → Create Credentials → API Key. Copy your new API key.

4. **Edit your config values** — Open the **2. Set — Config Values** node. This is the only node you need to change. Replace all five placeholders:

   | Field | What to enter |
   |---|---|
   | `YOUR_GOOGLE_PLACE_ID` | Your Place ID from step 2 |
   | `YOUR_GOOGLE_PLACES_API_KEY` | Your API key from step 3 |
   | `YOUR BUSINESS NAME` | Your business name as it appears on Google |
   | `owner@yourbusiness.com` | The email address to receive daily reports |
   | `YOUR NAME` | Your name — appears at the end of every reply draft |

   &gt; ⚠️ The Google Places API key is used directly in the URL of the **3. HTTP — Fetch Google Places Reviews** node via the config values. Ensure you replace it in **2. Set — Config Values** only — it flows through automatically.

5. **Connect your OpenAI API key** — Go to Credentials → New → OpenAI API in n8n. Paste your API key from platform.openai.com. Open the **7. OpenAI — GPT-4o-mini Model** node and select this credential.

6. **Connect your Gmail credential** — Go to Credentials → New → Gmail OAuth2 in n8n. Complete the OAuth flow with the Gmail account you want to send reports from. Open the **9. Gmail — Send Review Report** node and select this credential.

7. **Activate the workflow** — Toggle the workflow to Active. It will now run automatically every day at 9AM.

---

## How It Works (Step by Step)

**Step 1 — Schedule Trigger (Every Day 9AM)**
The workflow fires automatically each morning using a daily cron schedule. No manual action is needed once the workflow is active.

**Step 2 — Set (Config Values)**
Five configuration values are stored here: your Place ID, Google Places API key, business name, owner email, and owner name. Every other step in the workflow reads from this single location.

**Step 3 — HTTP Request (Google Places API)**
A GET request is sent to the Google Places Details API using your Place ID and API key. It asks for the business name, overall star rating, and all available reviews. The raw response is passed to the next step.

**Step 4 — Code (Parse and Classify Reviews)**
A script reads the raw API response and extracts every review. It separates reviews into two groups: positive (4–5 stars) and negative (1–3 stars). It also builds a clean numbered text summary of all reviews — including author name, star rating, review text, and recency — ready for the AI to read. If the API returns zero reviews, the step sets a `hasReviews: false` flag and passes a fallback message forward.

**Step 5 — IF Check (Are There Reviews?)**
This step checks the `hasReviews` flag from Step 4. If it is true, the workflow continues to the AI reply generation. If it is false — meaning no reviews were found — the workflow stops here completely and no email is sent. This prevents empty or useless emails on quiet days.

**Step 6 — AI Agent (Generate Reply Drafts)**
GPT-4o-mini receives the full review summary along with your business name, overall rating, and owner name. It writes one reply draft for every review in the list. Positive reply drafts thank the reviewer by name, reference something specific they mentioned, and invite them back. Negative reply drafts open with a sincere apology, acknowledge the concern without excuses, and offer to resolve the issue offline. Every reply ends with your name in a `Best regards,` sign-off.

**Step 7 — OpenAI Model (GPT-4o-mini)**
This is the language model powering the AI Agent in Step 6. It runs at a temperature of 0.7 for natural, human-sounding replies and has a 1,000-token output limit — enough for a full set of reply drafts.

**Step 8 — Set (Prepare Email Fields)**
The AI-generated reply drafts, email subject line, recipient address, and review counts are assembled into one item. The subject line dynamically includes your business name, the total number of reviews found, and your current overall star rating.

**Step 9 — Gmail (Send Review Report)**
Gmail sends the final daily digest to your inbox. The email opens with a summary showing how many positive and negative reviews were found. It then lists all reply drafts one after another, each labelled with the review number, sentiment, and reviewer name. The email closes with a three-step guide for posting replies on Google Business Profile.

---

## Key Features

✅ **Zero-maintenance daily monitoring** — Checks your reviews every morning at 9AM with no login or manual trigger required.

✅ **Smart stop on quiet days** — The IF check ensures no email is sent when there are no reviews — your inbox only receives reports that matter.

✅ **Tone-matched reply drafts** — Positive reviews get warmth and appreciation. Negative reviews get calm professionalism. The AI uses the right tone automatically.

✅ **Reviewer name personalisation** — Every reply draft opens by addressing the reviewer by their actual name — not a generic greeting.

✅ **Review count in subject line** — The email subject dynamically shows how many reviews were found and your current rating — you know what to expect before opening it.

✅ **Copy-paste ready format** — Drafts are delivered in a clean numbered format with posting instructions included — no reformatting needed before you use them.

✅ **Single config node** — All five business-specific values live in one place. Switching this workflow to a different business takes under two minutes.

---

## Customisation Options

**Change the daily send time** — In the **1. Schedule — Every Day 9AM** node, edit the cron expression `0 9 * * *` to any time you prefer. For example, `0 7 * * *` sends at 7AM, or `0 18 * * *` sends at 6PM.

**Adjust the negative review word limit** — In the **6. AI Agent — Generate Reply Drafts** node, change `under 70 words` in the prompt to any length that fits your brand voice — shorter for a concise tone, longer for a more detailed response.

**Add a CC recipient** — In the **9. Gmail — Send Review Report** node, expand the options and add a CC email address to copy an agency manager or team member on every daily digest.

**Filter only new reviews by date** — In the **4. Code — Parse and Classify Reviews** step, add a date filter using the `time` field from each review object to only process reviews posted in the last 24 hours — avoiding repeat drafts for old reviews.

**Deploy for multiple locations** — Duplicate the workflow in n8n and update the **2. Set — Config Values** node for each business or location. Each copy runs independently on the same daily schedule.

---

## Troubleshooting

**HTTP node returns a 403 or REQUEST_DENIED error:**
- Check that the Places API is enabled in your Google Cloud Console project
- Verify that `YOUR_GOOGLE_PLACES_API_KEY` has been replaced in **2. Set — Config Values** with your actual API key
- Confirm your API key has no IP or referrer restrictions that would block n8n server requests

**No reviews found even though reviews exist on Google:**
- Verify that `YOUR_GOOGLE_PLACE_ID` is correct — search for your exact business at developers.google.com/maps/documentation/places/web-service/place-id and re-copy the ID
- Note that the Google Places API returns a maximum of 5 most recent reviews — this is an API limitation, not a workflow issue
- Run the workflow manually and inspect the output of **3. HTTP — Fetch Google Places Reviews** to view the raw API response

**AI Agent produces empty or broken reply drafts:**
- Confirm the **7. OpenAI — GPT-4o-mini Model** credential is valid and your OpenAI account has available API credits
- Check the execution log for **6. AI Agent — Generate Reply Drafts** for any OpenAI error messages
- If the review text field is empty for some reviews, the AI may produce shorter or generic replies — this is expected

**Gmail node fails to send the digest:**
- Confirm your Gmail OAuth2 credential is connected and not expired in the **9. Gmail — Send Review Report** node
- Check that `owner@yourbusiness.com` has been replaced with a valid real email address in **2. Set — Config Values**
- Re-authenticate the Gmail credential if you see an authorisation error

**Workflow does not run at 9AM:**
- Confirm the workflow is toggled to **Active** — saved workflows do not run on schedule unless activated
- Check your n8n instance timezone settings — the 9AM schedule runs based on your server's timezone, not your local time

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email:[info@isawow.com](info@isawow.com)
🌐 Website:[https://isawow.com](https://isawow.com)

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
