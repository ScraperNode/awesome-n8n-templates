# 🎣 Screen and score investment deals with AI using OpenAI, Gmail, and Telegram

> ⚡ **372 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Screen and Score Investment Deals with AI using OpenAI, Gmail, and Telegram

Automatically screens incoming deal submissions using AI, scores them against investment criteria, and routes to the right action.

**Who is this for?**
VC firms, PE funds, angel investors, or M&A advisors who receive deal flow via email or form submissions.

**What problem does this solve?**
Manually reviewing every pitch deck and deal memo is time-consuming. Most deals don't meet investment criteria. This agent screens, scores, and prioritizes deals so your team focuses on the best opportunities.

**How it works:**
1. **New Email Received / Deal Submission Webhook** - captures deals from email or form
2. **Normalize Email/Webhook Data** - standardizes fields from either source
3. **Build Deal Text** - combines email body + attachment info into screening text
4. **Has Deal Content?** - validates there is enough content to screen
5. **Extract Deal Info - OpenAI** - AI extracts company, industry, revenue, ask, team, highlights, red flags
6. **Score Deal - OpenAI** - AI scores on 5 criteria (industry fit, revenue, growth, team, clarity)
7. **Is PASS? / Is REVIEW?** - routes by verdict (PASS/REVIEW/REJECT)
8. **Telegram Alerts** - notifies with deal summary and scores
9. **Log Deal to Pipeline Sheet** - tracks all deals in a pipeline spreadsheet

**Setup:**
1. Add credentials: Gmail, OpenAI, Telegram Bot, Google Sheets
2. Replace YOUR_TELEGRAM_CHAT_ID with your chat ID
3. Create a Google Sheet with columns: received_at, company_name, industry, stage, revenue, ask_amount, overall_score, verdict, one_line_summary, recommendation, key_highlights, red_flags, sender_name, sender_email, source, industry_fit, revenue_stage, growth_trajectory, team_strength, deal_clarity
4. Replace YOUR_GOOGLE_SHEET_ID with your sheet ID

**Customization:**
- Edit the scoring criteria in the Score Deal OpenAI prompt
- Adjust score thresholds for PASS/REVIEW/REJECT
- Add Slack notifications instead of Telegram
- Add auto-decline email for REJECT deals
- Connect to a CRM instead of Google Sheets

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Stop and Error, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
