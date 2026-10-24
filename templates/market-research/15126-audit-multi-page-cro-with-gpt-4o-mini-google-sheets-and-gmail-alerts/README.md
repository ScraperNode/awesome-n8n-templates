# 📊 Audit multi-page CRO with GPT-4o-mini, Google Sheets, and Gmail alerts

> ⚡ **23 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit up to 3 landing page URLs using a simple form and the workflow audits each one automatically. For every page, GPT-4o-mini scrapes the content, scores it across five dimensions, identifies the top conversion issue, and generates five specific page fixes. Every result is logged to Google Sheets and pages that score below your alert threshold trigger an automatic Gmail alert with the full breakdown. Built for marketing managers, agency owners, and growth teams who need structured, repeatable conversion audits without spending hours reviewing pages manually.

---

## What This Workflow Does

- **Scrapes and cleans each page automatically** — Fetches the raw HTML for every URL submitted, strips all scripts and styles, and prepares clean text for AI analysis
- **Scores pages across five CRO dimensions** — GPT-4o-mini rates each page on overall conversion potential, CTA strength, trust score, and message clarity on a 1–10 scale
- **Generates a letter grade per page** — Assigns A+ through F based on the overall score so you can rank pages at a glance
- **Produces five page-specific fixes** — Every fix references actual content from the page and is scoped to be doable within 1–2 days — no generic advice
- **Runs each page independently** — All three pages are processed as separate audits so one slow page never blocks the others
- **Logs every audit to Google Sheets** — Appends a 14-column row per page with all scores, top issue, quick win, fix list, and priority label
- **Sends Gmail alerts only for low-scoring pages** — Pages below your score threshold get an immediate email with the full audit breakdown — pages that pass trigger no email

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **CRO Audit Dashboard**)
- Gmail account (the account you want alerts sent from)

### Credentials Required
- OpenAI API key
- Google Sheets OAuth2
- Gmail OAuth2

**Estimated Setup Time: 10–15 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all four placeholders:

| Field | What to enter |
|---|---|
| `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` | The ID from your Google Sheet URL (the string between `/d/` and `/edit`) |
| `PASTE_YOUR_EMAIL_ADDRESS_HERE` | The email address where CRO alerts should be sent |
| `PASTE_YOUR_NAME_HERE` | Your name for the email sign-off |
| `scoreThreshold` | Leave as `6` — pages scoring 5 or below get an alert. Change to `7` for stricter alerting or `5` for looser alerting |

3. **Connect OpenAI** — Open node **7. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

4. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **CRO Audit Dashboard** → add these 14 column headers in row 1: `Date`, `Page URL`, `Page Name`, `CRO Score`, `Grade`, `Top Issue`, `Quick Win`, `CTA Strength`, `Trust Score`, `Message Clarity`, `Priority`, `Fix List`, `Audited By`, `Logged At`

5. **Connect Google Sheets** — Open node **10. Google Sheets — Log CRO Audit** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

6. **Connect Gmail** — Open node **12. Gmail — Send CRO Alert** → click the credential dropdown → add Gmail OAuth2 → sign in with the Gmail account you want to send alerts from → authorize access

7. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Multi-Page CRO Audit** → open it in a browser to submit your first audit

---

## How It Works (Step by Step)

**Step 1 — Form: Multi-Page CRO Audit**
You open the form URL in a browser and fill in your name, up to three page URLs with their names, and the business type (e.g. SaaS, Law Firm, E-commerce). Only Page 1 URL and name are required — Pages 2 and 3 are optional. Submitting the form starts the workflow.

**Step 2 — Set: Config Values**
Your Google Sheet ID, alert email, sender name, score threshold, and all form inputs are stored here. Each page URL and name is mapped to its own variable. The business type and auditor name are also captured here for use in the AI prompt and the sheet log.

**Step 3 — Code: Build Pages List**
The three possible page URLs are filtered to remove any blank entries. Only URLs that start with `http` are kept. If no valid URLs are found, the workflow stops with a clear error. Each valid page is then output as its own separate entry so every page runs through the full audit pipeline independently. This means if you submit 3 pages, the scraping, AI analysis, sheet logging, and Gmail alert steps run 3 times — once per page.

**Step 4 — HTTP: Scrape Landing Page**
For each page, an HTTP request fetches the raw HTML content with a 15-second timeout. The response is returned as plain text for the cleaning step.

**Step 5 — Code: Clean HTML to Text**
The raw HTML is cleaned by removing all script blocks, style blocks, and HTML comments. Tag closings for structural elements like divs, paragraphs, and headings are converted to line breaks to preserve readability. All remaining HTML tags are stripped, common HTML entities are decoded, and extra whitespace is collapsed. The result is capped at 4,000 characters — if the page is longer, a truncation note is added so the AI knows content was cut off. If the page returns less than 100 characters, the workflow throws an error rather than sending near-empty content to the AI.

**Step 6 — AI Agent: CRO Audit**
GPT-4o-mini receives the business type, page name, page URL, and cleaned page content. It returns nine structured fields: an overall score from 1–10, a letter grade, a CTA strength score, a trust score, a message clarity score, the single biggest conversion problem on the page, the fastest single fix to improve conversions, five page-specific improvements each doable in 1–2 days, and a priority label (CRITICAL, HIGH, MEDIUM, or LOW).

**Step 7 — OpenAI: GPT-4o-mini Model**
This is the language model powering the audit. It runs at temperature 0.3 for consistent, factual scoring and is capped at 800 tokens to keep each audit concise and costs predictable.

**Step 8 — Parser: Structured CRO Output**
This step enforces the exact nine-field schema GPT-4o-mini must return. It validates that all required fields are present and correctly typed before results move forward, preventing malformed AI output from reaching your sheet.

**Step 9 — Code: Prepare Audit Results**
The AI output is merged with all page metadata. Sub-scores are formatted as "X out of 10" for readability. The fix list is formatted as a numbered list — pipe-separated for the sheet column and line-separated for the email. A `needsAlert` flag is set to true if the overall score is below your configured threshold. The email subject and full email body are also assembled here, including all scores, the top issue, quick win, and all five fixes.

**Step 10 — Google Sheets: Log CRO Audit**
One row is appended to your CRO Audit Dashboard tab with all 14 columns populated. The Sheet log and the Gmail alert step both run at the same time — logging never delays the email.

**Step 11 — IF: Score Below Threshold?**
This is the alert gate. If the page score is below your threshold (YES path), the Gmail alert fires immediately. If the page passed the threshold (NO path), the workflow routes to **13. Set — No Alert Needed** and ends silently for that page — no email is sent.

**Step 12 — Gmail: Send CRO Alert**
A plain-text alert email is sent to your configured address. It includes the page name, URL, overall score, grade, priority level, top issue, fastest fix, all five specific improvements, and the three sub-scores for CTA strength, trust, and message clarity.

**Step 13 — Set: No Alert Needed**
This step handles pages that passed the threshold. It sets a brief log message confirming the page scored above the threshold and no email was sent.

---

## Key Features

✅ **Batch audit up to 3 pages in one submission** — Submit multiple URLs at once and each page gets its own independent audit without you having to run the workflow three times
✅ **Letter grade for instant ranking** — A+ through F grades let you sort pages by quality at a glance without interpreting raw scores
✅ **Four sub-scores per page** — CTA strength, trust score, and message clarity give you a breakdown of why a page scored the way it did
✅ **Five page-specific fixes every time** — Every fix references actual content from that specific page, not generic CRO advice — each one is scoped to 1–2 days of work
✅ **Configurable alert threshold** — Change one number in Config Values to define what counts as a failing score — lower for stricter monitoring, higher for looser
✅ **Structured output enforced** — A schema parser validates all nine AI fields before anything reaches your sheet — no broken rows or missing scores
✅ **Sheet logs and Gmail run simultaneously** — Both outputs fire at the same time so your dashboard is always current and alerts are never delayed
✅ **Silent pass for healthy pages** — Pages above the threshold log to Sheets and stop — no noise, no email clutter for pages that are already performing well

---

## Customisation Options

**Lower the threshold for more aggressive alerting** — In node **2. Set — Config Values**, change `scoreThreshold` from `6` to `8` so any page scoring 7 or below triggers an email — useful for agencies running CRO campaigns where even average pages need attention.

**Add a Slack notification alongside Gmail** — After node **9. Code — Prepare Audit Results**, add an IF check for `needsAlert === true` and connect a Slack node to also post the page name, score, and top issue to a `#cro-alerts` channel so your team sees issues in real time without checking email.

**Increase the character limit for longer pages** — In node **5. Code — Clean HTML to Text**, change `.substring(0, 4000)` to `6000` or `8000` if your pages are content-heavy and you want GPT to see more of the page — note this will slightly increase OpenAI token usage per audit.

**Expand to 5 pages per submission** — In node **3. Code — Build Pages List**, add two more page objects following the same pattern as pages 1–3, and add corresponding fields to the form in node **1. Form — Multi-Page CRO Audit** and Config Values in node **2**.

**Send a weekly CRO summary email** — Add a separate Schedule trigger that fires every Monday, reads the CRO Audit Dashboard sheet, counts pages by priority label from the past 7 days, and sends a weekly digest showing how many CRITICAL, HIGH, MEDIUM, and LOW pages were found.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Multi-Page CRO Audit** after activating — URLs copied before activation will not work
- Make sure at least one URL starts with `http` — node **3. Code — Build Pages List** filters out any blank or invalid URLs

**Page scraping returning empty or very short content:**
- Some pages block automated HTTP requests and return a 403 error or a redirect — check the execution log of node **4. HTTP — Scrape Landing Page** for the response
- Try adding a User-Agent header to node **4**: Name = `User-Agent`, Value = `Mozilla/5.0 (compatible; n8n-bot/1.0)` to bypass basic bot detection
- If the page uses JavaScript rendering (e.g. React or Vue), the HTML may be empty — these pages require a headless browser and cannot be scraped with a simple HTTP request

**OpenAI not generating audit results:**
- Confirm the API key is connected in node **7. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **6. AI Agent — CRO Audit** for the raw GPT response
- If the schema parser in node **8. Parser — Structured CRO Output** is throwing an error, the AI returned an unexpected format — re-run the audit to see if the issue is consistent

**Google Sheets not logging rows:**
- Confirm the Google Sheets OAuth2 credential in node **10. Google Sheets — Log CRO Audit** is connected and not expired — re-authorize if needed
- Check that `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` in node **2. Set — Config Values** has been replaced with your actual sheet ID from the URL
- Confirm the tab is named **CRO Audit Dashboard** exactly — capitalization must match `sheetName` in Config Values
- Verify all 14 column headers in row 1 match exactly: `Date`, `Page URL`, `Page Name`, `CRO Score`, `Grade`, `Top Issue`, `Quick Win`, `CTA Strength`, `Trust Score`, `Message Clarity`, `Priority`, `Fix List`, `Audited By`, `Logged At`

**Gmail alert not arriving for low-scoring pages:**
- Confirm the Gmail OAuth2 credential in node **12. Gmail — Send CRO Alert** is connected and authorized
- Check that `PASTE_YOUR_EMAIL_ADDRESS_HERE` in node **2. Set — Config Values** has been replaced with your actual email address
- Check the execution log of node **11. IF — Score Below Threshold?** to confirm the `needsAlert` value is true for the pages that should trigger an alert — if false, the score may be at or above the threshold
- Check your spam or promotions folder — automated Gmail OAuth2 messages sometimes land there on first send

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
