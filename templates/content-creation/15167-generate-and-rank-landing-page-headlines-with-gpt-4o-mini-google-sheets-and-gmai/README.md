# 🎬 Generate and rank landing page headlines with GPT-4o-mini, Google Sheets and Gmail

> ⚡ **57 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit your landing page URL, current headline, conversion goal, and target audience using a simple form and the workflow does the rest. It scrapes your page, cleans the content, and sends everything to GPT-4o-mini which generates 10 headline variations — each using a different psychological framework such as benefit-led, pain-led, curiosity, urgency, and social proof. Every headline is scored on four dimensions and ranked by test priority. All 10 are logged to Google Sheets and a Gmail report groups them by priority with specific testing tips, ready to hand straight to your developer. Built for marketers, growth teams, and conversion specialists who want data-driven headline options without spending hours writing them manually.

---

## What This Workflow Does

- **Scrapes the landing page for real context** — Fetches the actual page content so GPT generates headlines grounded in your real copy and offer — not generic variations
- **Generates 10 headlines across 10 frameworks** — Each variation uses a different psychological approach: benefit-led, pain-led, curiosity, social proof, specificity, urgency, before and after, question, bold claim, and FOMO
- **Scores every headline on four dimensions** — Clarity, emotional pull, specificity, and SEO fit are each rated 1–10 and averaged into an overall score
- **Assigns test priority automatically** — The two strongest headlines are marked "Test First", the next three "Test Second", the next three "Test Third", and the remaining two "Lower Priority"
- **Logs all 10 headlines to Google Sheets** — Each headline gets its own row with framework, copy, all four scores, priority label, and submission details
- **Sends a Gmail report grouped by priority** — The email organises all 10 headlines into priority sections with a testing tip per headline and step-by-step instructions for running the A/B test

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **Headline Tests**)
- Gmail account (the account you want to receive the report)

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
| `PASTE_YOUR_EMAIL_HERE` | The email address where the headline report should be sent |
| `PASTE_YOUR_NAME_HERE` | Your name for the email greeting and sign-off |

3. **Connect OpenAI** — Open node **6. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

4. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Headline Tests** → add these 13 column headers in row 1: `Date`, `Page URL`, `Page Name`, `Headline #`, `Framework`, `Headline Copy`, `Clarity Score`, `Emotional Pull`, `Specificity`, `SEO Fit`, `Overall Score`, `Test Priority`, `Submitted By`

5. **Connect Google Sheets** — Open node **9. Google Sheets — Log Headline Tests** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

6. **Connect Gmail** — Open node **12. Gmail — Send Headline Report** → click the credential dropdown → add Gmail OAuth2 → sign in with the Gmail account that matches your email address → authorize access

7. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Landing Page Headline Generator** → open it in a browser to submit your first page

---

## How It Works (Step by Step)

**Step 1 — Form: Landing Page Headline Generator**
You open the form URL in a browser and fill in six fields: the landing page URL, your current headline, the page name, the conversion goal (e.g. "Book a demo"), the target audience (e.g. "SaaS founders"), and your name. Submitting the form kicks off the entire workflow automatically.

**Step 2 — Set: Config Values**
Your Google Sheet ID, recipient email, sender name, and all six form inputs are stored here. Today's date is also generated automatically for the sheet log.

**Step 3 — HTTP: Scrape Landing Page**
An HTTP request fetches the raw HTML of the page URL you submitted with a 15-second timeout. The response is returned as plain text for cleaning.

**Step 4 — Code: Clean Page Content**
The raw HTML is cleaned by removing all script blocks, style blocks, HTML comments, navigation, header, and footer sections. Structural tag closings are converted to line breaks. All remaining HTML tags are stripped and common HTML entities are decoded. The result is capped at 3,500 characters. If the page returns less than 100 characters, the workflow throws an error and stops rather than sending near-empty content to GPT.

**Step 5 — AI Agent: Generate Headlines**
GPT-4o-mini receives the current headline, conversion goal, target audience, page name, and cleaned page content. It writes exactly 10 headline variations — one for each of the 10 psychological frameworks. Each headline is under 12 words and directly connected to the conversion goal. For each headline it returns: the framework name, the headline copy, four scores (clarity, emotional pull, specificity, SEO fit each from 1–10), an overall score as the average of the four, a test priority label, and one specific testing tip under 20 words.

**Step 6 — OpenAI: GPT-4o-mini Model**
This is the language model powering the generation step. It runs at temperature 0.7 for creative, varied headlines and is capped at 1,500 tokens to comfortably fit all 10 structured headlines in one response.

**Step 7 — Parser: Structured Headline Output**
This step enforces the exact array schema GPT-4o-mini must return. It validates that all 10 headlines are present and each has all required fields in the correct format before results move forward.

**Step 8 — Code: Split Headlines for Sheets**
The array of 10 headlines is converted into individual rows — one per headline — so each can be written to Google Sheets separately. An `isLastRow` flag is set to true only on headline number 10. The full headline array is also attached to the last row so the Gmail report has all 10 headlines available when it fires.

**Step 9 — Google Sheets: Log Headline Tests**
Each headline is appended as one row to your Headline Tests tab. All 13 columns are populated: date, page URL, page name, headline number, framework, headline copy, all four scores, overall score, test priority, and submitter name. All 10 rows are logged before the Gmail step fires.

**Step 10 — IF: All Headlines Logged?**
After each row is written, this check reads the `isLastRow` flag. If true (YES path — all 10 are logged), the workflow moves to build and send the Gmail report. If false (NO path — more rows still need logging), the workflow routes to **13. Set — More Rows** and continues to the next headline.

**Step 11 — Code: Build Gmail Report**
All 10 headlines are sorted by overall score and grouped into their four test priority sections: Test First, Test Second, Test Third, and Lower Priority. Each section lists the framework, headline copy, overall score, all four sub-scores, and the specific testing tip. A step-by-step testing guide is appended at the end explaining how to run the A/B test starting with the Test First headlines and working down. The email subject includes the page name and today's date.

**Step 12 — Gmail: Send Headline Report**
The complete report is sent to your configured email address with no attribution footer. The full breakdown arrives in one plain-text email grouped by priority and ready to forward to your developer or testing tool.

**Step 13 — Set: More Rows**
This step handles non-final headline rows during the logging loop. It sets a brief in-progress message and the loop continues to the next row.

---

## Key Features

✅ **Ten frameworks in one run** — Every submission covers all major psychological approaches so you always have a diverse set of options ready to test
✅ **Page-grounded headlines** — GPT reads your actual page content before writing — every headline connects to your real offer and audience, not generic templates
✅ **Four-dimension scoring** — Clarity, emotional pull, specificity, and SEO fit are scored separately so you know exactly why each headline ranks where it does
✅ **Automatic test priority ranking** — No manual sorting needed — the two strongest headlines are flagged Test First so your team knows exactly where to start
✅ **Gmail fires exactly once** — The `isLastRow` flag ensures the report arrives after all 10 rows are logged, not after each individual headline
✅ **Structured output enforced** — A schema parser validates all 10 headlines and all required fields before anything reaches your sheet — no broken or incomplete rows
✅ **Step-by-step testing instructions in the email** — The Gmail report includes a testing guide so you can hand it directly to whoever runs your A/B tests
✅ **Permanent headline library in Sheets** — Every run adds 10 rows to your Headline Tests tab — over time you build a searchable database of headline ideas by page and framework

---

## Customisation Options

**Change the number of headlines** — In node **5. AI Agent — Generate Headlines**, edit the prompt to request a different number of headlines (e.g. 5 instead of 10) — also update the `isLastRow` check in node **8. Code — Split Headlines for Sheets** to match the new count (`h.headlineNumber === 5`).

**Replace a framework with one specific to your industry** — In node **5. AI Agent — Generate Headlines**, edit the frameworks list in the prompt to swap one of the default options for something more relevant — for example replace "Fear of missing out" with "Authority and expertise" for B2B pages.

**Add a Slack notification when the report is ready** — After node **12. Gmail — Send Headline Report**, add a Slack step that posts the page name, top headline, and its score to a `#growth` or `#marketing` channel so your team sees the best headline immediately without checking email.

**Run audits on a recurring basis** — Replace the form trigger with a Schedule trigger and a Set step with hardcoded page URLs to automatically re-audit the same pages every month and track whether your live headline score improves over time.

**Send headlines to a different team member per page** — In node **2. Set — Config Values**, add logic that maps the `pageName` field to different email addresses — for example pricing page audits go to the sales team, homepage audits go to the marketing lead.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Landing Page Headline Generator** after activating — URLs copied before activation will not work
- Make sure the Landing Page URL starts with `http` — the HTTP scrape step will fail on any other format

**Page scraping returning empty or very short content:**
- Some pages block automated requests — add a User-Agent header to node **3. HTTP — Scrape Landing Page**: Name = `User-Agent`, Value = `Mozilla/5.0 (compatible; n8n-bot/1.0)`
- If the page uses JavaScript rendering (e.g. React or Vue), the HTML may arrive empty — these pages cannot be scraped with a basic HTTP request
- Check the execution log of node **3** for the response status code — a 403 means the site is blocking bots

**OpenAI not generating all 10 headlines:**
- Confirm the API key is connected in node **6. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **5. AI Agent — Generate Headlines** for the raw GPT response — if fewer than 10 headlines are returned, the schema parser in node **7** will flag the missing fields
- If the issue is consistent, increase `maxTokens` in node **6** from 1500 to 2000 to give GPT more room

**Google Sheets not logging all 10 rows:**
- Confirm the Google Sheets OAuth2 credential in node **9. Google Sheets — Log Headline Tests** is connected and not expired
- Check that `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` in node **2. Set — Config Values** is replaced with your actual sheet ID from the URL
- Confirm the tab is named **Headline Tests** exactly — capitalization must match `sheetName` in Config Values
- Verify all 13 column headers in row 1 match exactly: `Date`, `Page URL`, `Page Name`, `Headline #`, `Framework`, `Headline Copy`, `Clarity Score`, `Emotional Pull`, `Specificity`, `SEO Fit`, `Overall Score`, `Test Priority`, `Submitted By`

**Gmail report not arriving:**
- Confirm the Gmail OAuth2 credential in node **12. Gmail — Send Headline Report** is connected and authorized
- Check that `PASTE_YOUR_EMAIL_HERE` in node **2. Set — Config Values** is replaced with your actual email address
- Check the execution log of node **10. IF — All Headlines Logged?** to confirm `isLastRow` reached true — if it never fires YES, the 10th headline may not have been processed correctly
- Check your spam or promotions folder on the first send

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
