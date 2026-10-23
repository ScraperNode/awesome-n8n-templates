# 🎬 Create LinkedIn carousel PDFs with GPT-4o-mini and Google Drive

> ⚡ **311 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit your carousel topic, brand name, target audience, tone, and number of content slides via a simple form and the workflow generates a complete LinkedIn carousel PDF automatically. GPT-4o-mini returns a structured JSON array of slides — title slide, content slides with 3 bullet points each, and a CTA slide — which are assembled into a full branded HTML document with dark gradient backgrounds, slide number badges, and a swipe prompt, then converted into a square-format PDF at 1080×1080px per slide. The PDF is uploaded to Google Drive, logged to Google Sheets with the Drive link, and emailed to you with step-by-step LinkedIn posting instructions. Built for LinkedIn creators who want a fully formatted, ready-to-upload carousel PDF in minutes without designing slides manually.

---

## What This Workflow Does

- **Generates structured slide content in pure JSON** — GPT-4o-mini produces a title slide, content slides with exactly 3 bullet points each, and a CTA slide as a validated JSON array — not free text
- **Converts content to a branded square-format PDF** — Each slide is rendered as a 1080×1080px page with dark gradient backgrounds, slide number badges, and your brand name in the footer
- **Adds a swipe prompt on the title slide** — A "Swipe →" label is automatically added to the title slide so viewers know to scroll through the carousel
- **Uploads the finished PDF to Google Drive** — The PDF is saved with a structured filename including the topic and date — for example `linkedin-carousel-seo-mistakes-2025-05-18.pdf`
- **Logs every carousel run to Google Sheets** — Topic, brand name, slide count, file name, Drive link, Drive file ID, PDF size, and generation timestamp are saved per run
- **Sends a delivery email with posting instructions** — A styled HTML email arrives in your inbox with the Drive link and a 4-step guide on how to post the carousel on LinkedIn

---

## Setup Requirements

### Tools Needed
- n8n instance — **self-hosted only** (the PDF generation step requires installing an npm package on your n8n server — see step 1 below)
- OpenAI account with GPT-4o-mini API access
- Google Drive (one folder for carousel PDFs)
- Google Sheets (one sheet with a tab named **Carousel Log**)
- Gmail account

### Credentials Required
- OpenAI API key
- Google Drive OAuth2
- Google Sheets OAuth2
- Gmail OAuth2

&gt; ⚠️ **This workflow requires a self-hosted n8n instance.** The PDF generation step uses `html-pdf-node`, an npm package that must be installed on your n8n server. This cannot be done on n8n Cloud. If you use n8n Cloud, the PDF step will fail.

**Estimated Setup Time: 25–30 minutes**

---

## Step-by-Step Setup

1. **Install html-pdf-node on your n8n server** — This is required before anything else. Run this command on your server:
   - Standard install: `npm install html-pdf-node`
   - Docker install: `docker exec -it n8n npm install html-pdf-node`
   - After installing, restart your n8n instance for the package to be available

2. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

3. **Connect OpenAI** — Open node **OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

4. **Get your Google Drive folder ID** — Open your target Google Drive folder in a browser → the folder ID is the string at the end of the URL after `/folders/`

5. **Connect Google Drive** — Open node **6. Google Drive — Upload PDF** → click the credential dropdown → add Google Drive OAuth2 → authorize access → replace `YOUR_GDRIVE_FOLDER_ID` in the folder field with your actual folder ID

6. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Carousel Log** → add these 9 column headers in row 1: `Date`, `Topic`, `Brand Name`, `Slide Count`, `File Name`, `Drive Link`, `Drive File ID`, `PDF Size (bytes)`, `Generated On`

7. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL

8. **Connect Google Sheets** — Open node **7. Google Sheets — Log Carousel** → replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID → click the credential dropdown → add Google Sheets OAuth2 → authorize access

9. **Set your email address** — Open node **8. Gmail — Email PDF to You** → replace `YOUR_EMAIL_ADDRESS` in the Send To field with your actual email address

10. **Connect Gmail** — Open the same node **8. Gmail — Email PDF to You** → click the credential dropdown → add Gmail OAuth2 → complete the Google authorization flow

11. **Customize your brand color (optional)** — Open node **4. Code — Build HTML Slides** → find the `BRAND SETTINGS` section near the top of the code → replace `#0A66C2` in `BRAND_COLOR` with your own hex color code

12. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Carousel Topic + Details** → open it in a browser to submit your first carousel

---

## How It Works (Step by Step)

**Step 1 — Form: Carousel Topic + Details**
You open the form URL and fill in five fields: the carousel topic (e.g. "5 SEO mistakes beginners make"), your name or brand, the target audience, the tone (e.g. Professional, Motivational, Educational), and the number of content slides you want (recommended: 4 to 7). Submitting the form starts the full pipeline.

**Step 2 — AI Agent: Generate Slide Content**
GPT-4o-mini receives the topic, audience, tone, and slide count. The system prompt instructs it to return ONLY a valid JSON array — no text before or after, no markdown backticks. The array contains one title slide object, the requested number of content slide objects (each with a headline, one emoji, an empty subtitle, and exactly 3 bullet points), and one CTA slide object with a follow prompt and a comment-baiting question. Each slide has a `type` field set to "title", "content", or "cta".

**Step 3 — Code: Parse Slides JSON**
The AI output is cleaned of any accidental markdown code fences and parsed as a JSON array. If parsing fails, the step throws a clear error showing the first 300 characters of the output for debugging. If the array is empty or missing, another error is thrown. The topic, brand name, audience, and tone from the form are also extracted and packaged alongside the slides array.

**Step 4 — Code: Build HTML Slides**
Each slide in the array is converted to a full-height HTML `div` at 1080×1080px with a dark gradient background using your brand color. Content slides get a numbered badge in the top-right corner. The title slide gets a "Swipe →" label at the bottom-right. All slides get a brand name label at the bottom-left. Content slides render the 3 bullet points as a list with circular checkmark icons. All styles are inline so the HTML is fully self-contained. A complete HTML document wrapping all slide divs is returned alongside a structured filename built from the topic and today's date.

**Step 5 — Code: Generate PDF**
The `html-pdf-node` npm package is called with the full HTML string. The PDF is generated at 1080×1080px per page with no margins and printing backgrounds enabled. The resulting PDF buffer is converted to base64 and returned as binary data alongside the filename, slide count, topic, brand name, and PDF file size in bytes.

**Step 6 — Google Drive: Upload PDF**
The PDF binary is uploaded to your specified Google Drive folder using the structured filename from step 4. Google Drive returns the file's ID and other metadata.

**Step 7 — Google Sheets: Log Carousel**
One row is appended to your Carousel Log tab with all 9 columns. The Drive Link is constructed directly from the file ID as `https://drive.google.com/file/d/FILE_ID/view` so every row has a clickable link immediately.

**Step 8 — Gmail: Email PDF to You**
A styled HTML email is sent to your address with the carousel topic, slide count, filename, and a clickable "Open in Google Drive" link. A blue callout box at the bottom of the email shows the 4-step LinkedIn posting process: download the PDF from Drive, go to LinkedIn, create a post, add the PDF as a document, add your caption, and post.

---

## Key Features

✅ **Pure JSON output from GPT** — GPT is instructed to return only a JSON array — making the output directly parseable without regex extraction and producing consistent slide structures every time
✅ **Slide count badge auto-numbered** — Content slides automatically get a numbered circle badge in the top-right corner showing which slide number it is — no manual numbering needed
✅ **Swipe prompt on title slide** — The first slide automatically gets a "Swipe →" label so LinkedIn viewers know to scroll through — this is a standard carousel best practice
✅ **Brand color applied globally** — Change one value in the code and the entire PDF reflects your brand color across all backgrounds and gradients
✅ **Filename includes topic and date** — Files are named `linkedin-carousel-[topic]-[date].pdf` so your Drive folder stays organized and searchable
✅ **PDF size logged in bytes** — The sheet log records the exact file size so you can monitor output consistency and catch any generation issues
✅ **LinkedIn posting instructions in every email** — The delivery email includes a 4-step posting guide so anyone on your team can upload the carousel without knowing how LinkedIn document posts work

---

## Customisation Options

**Change the brand color** — In node **4. Code — Build HTML Slides**, find `const BRAND_COLOR = '#0A66C2'` in the BRAND SETTINGS section at the top and replace the hex code with your own brand color — the change applies to all slide backgrounds and gradients.

**Change the slide layout font** — In the same BRAND SETTINGS section of node **4. Code — Build HTML Slides**, change `const FONT = 'Arial, sans-serif'` to any web-safe font — for example `'Georgia, serif'` for a more editorial look or `'Verdana, sans-serif'` for a cleaner style.

**Add your topic to the topic emoji map** — In node **10. Code — Build HTML Email** (note: this is in the News Digest workflow — for the carousel, the emoji is generated by GPT per slide) — if you want to control which emoji appears on each slide type, add instructions to the GPT system prompt in node **2. AI Agent — Generate Slide Content**.

**Send to a Slack channel when a carousel is ready** — After node **8. Gmail — Email PDF to You**, add a Slack step that posts the carousel topic, slide count, and a direct Drive link to a `#content-team` channel so your team is notified without checking email.

**Increase the slide bullet point count** — In the system prompt of node **2. AI Agent — Generate Slide Content**, change `Exactly 3 bullet points per content slide` to a different number — for example 4 or 5 — and update the bullet point rendering in node **4. Code — Build HTML Slides** accordingly.

---

## Troubleshooting

**PDF generation failing with a module not found error:**
- Confirm `html-pdf-node` was installed on the same n8n server instance running this workflow — run `npm install html-pdf-node` again if unsure
- For Docker: run `docker exec -it n8n npm install html-pdf-node` and restart the container — the package must be installed inside the container, not on the host machine
- Check the exact error message in the execution log of node **5. Code — Generate PDF** — a "Cannot find module" error confirms the package is not installed; any other error may point to a specific HTML rendering issue

**GPT returning a JSON parse error:**
- Check the execution log of node **3. Code — Parse Slides JSON** — it shows the first 300 characters of the raw GPT output, which helps identify whether GPT added text outside the JSON array
- If GPT added markdown fences despite instructions, the parse step strips them — but if it added a preamble sentence, parsing will still fail; try rerunning the form
- Confirm the OpenAI API key in node **OpenAI — GPT-4o-mini Model** is valid and your account has credits

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Carousel Topic + Details** after activating
- Make sure all five fields are filled in — all are required

**Google Drive upload failing:**
- Confirm the Google Drive OAuth2 credential in node **6. Google Drive — Upload PDF** is connected and not expired — re-authorize if needed
- Confirm `YOUR_GDRIVE_FOLDER_ID` is replaced with just the folder ID from the URL — not the full Drive URL
- If the PDF generation step returned an empty or failed binary, the upload will also fail — check the execution log of step 5 first

**Google Sheets not logging or Gmail not sending:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **7. Google Sheets — Log Carousel** is replaced with your actual Sheet ID and the tab is named **Carousel Log** exactly
- Confirm `YOUR_EMAIL_ADDRESS` in node **8. Gmail — Email PDF to You** is replaced with a valid email address and the Gmail OAuth2 credential is connected

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
