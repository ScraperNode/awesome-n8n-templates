# ⚡ Track daily job applications from Gmail to Google Sheets via GPT-4o-mini with approval

> ⚡ **131 views** · ⚡ [Personal Productivity](../)

## Description

## Who's it for

Active job-seekers who apply to 10–30 roles a week and lose track of which application is at what stage. Built for anyone tired of manually updating a spreadsheet every time a recruiter replies — or worse, realizing their tracker has been lying to them for two weeks.

## What it does

This workflow runs every morning at 9 AM, scans your Gmail for job-application emails, and uses GPT-4o-mini to extract three things from each one:

- **Company** (the actual hiring company, not the ATS platform)
- **Position** (cleaned of boilerplate like "the role of")
- **Status** (Applied, Interview, Offer, Rejected, or Other)

It then writes structured rows into a Google Sheet — one row per application, identified by a `Match Key` of `Company | Position`. New applications get appended automatically. Status changes for existing rows (Applied → Interview, Interview → Offer / Rejected) are gated behind a one-tap email approval, so an LLM misclassification can never silently demote a row.


## How it works
Daily 9 AM Trigger
↓
Fetch Gmail (filtered by ATS senders & job-keyword subjects, last 2 days)
↓
Process Email Data (clean & truncate body to 4000 chars)
↓
Extract Key Information (GPT-4o-mini, structured JSON output)
↓
Format Data (build Match Key)
↓
Filter Valid Job Updates ──→ Other ──→ "Other app" sheet tab
↓
Branch by Status
├─ Applied  ──→ Track New Application (append row)
└─ Interview / Offer / Rejected
↓
Aggregate into single digest
↓
Email & Wait for Approval (sendAndWait)
↓
Merge → Split → Update Application (match by Match Key)

Key design choices:

- **Match Key, not Thread ID, drives deduplication.** Recruiters often start new threads for interview scheduling, but the same `Company | Position` should stay one row.
- **Approval gate only on updates, not appends.** New applications go in directly to keep your inbox quiet. Only status changes — where misclassification matters — require your tap.
- **Aggregation before approval.** You get one digest email per morning, not one per status change. Skim, approve, done.

## Setup

**Prerequisites:**
- n8n 1.x (cloud or self-hosted)
- Gmail account connected via OAuth2
- Google Sheets account (same OAuth2 credential works)
- OpenAI API key with `gpt-4o-mini` access

**Steps:**

1. **Create your tracker sheet.** Make a Google Sheet with two tabs:
   - `Sheet1` — columns: `Thread ID | Match Key | Date | Company | Position | Status | Modified Date`
   - `Other app` — same columns (used for unclassifiable emails)

2. **Import this template.** Open n8n → Workflows → Import from File. n8n will flag missing credentials.

3. **Configure three credentials:**
   - OpenAI → used by the `Open AI` node
   - Gmail OAuth2 → used by `Fetch Job Application Emails` and `Email Updates & Wait for Approval`
   - Google Sheets OAuth2 → used by all three Sheets nodes

4. **Replace placeholders** (search the workflow for these strings):
   - `YOUR_GOOGLE_SHEET_ID` → your real sheet ID (from the sheet's URL)
   - `YOUR_EMAIL@example.com` → the address that should receive approval digests

5. **Test it manually.** Click "Execute workflow" and verify the Gmail node returns recent emails, the LLM extracts clean JSON, and a sample appears in your sheet.

6. **Activate.** Toggle the workflow to active and it will run daily at 9 AM.

## Customization

- **Schedule.** Change `Daily 9 AM Trigger` to any cron expression.
- **Lookback window.** The Gmail filter ends with `newer_than:2d`. Bump to `7d` if your daily run sometimes fails — the workflow handles re-processed emails idempotently because Match Key updates are no-ops on identical data.
- **Languages.** The prompt in `Extract Key Information` includes English and French status phrases. Add your language's equivalents to each section (`Rejected`, `Applied`, etc.).
- **ATS coverage.** The Gmail query covers ~25 ATS providers (Lever, Greenhouse, Ashby, Workday, SmartRecruiters, Welcome to the Jungle, etc.). Add or remove domains to match your job market.
- **Approval timeout.** Add `options.limitWaitTime.values.resumeAmount` (in hours) to the approval node if you want stale digests to auto-cancel.

## Honest caveats

- **It's only as accurate as the emails it reads.** Recruiters don't follow a standard format. Misclassifications happen — the human-in-the-loop approval step is your safety net. Read the digest before tapping approve.
- **Status downgrades are possible.** A delayed "thank you for applying" email arriving after an interview invite will offer to demote the row. The approval gate exists for exactly this case.
- **Privacy.** Email subjects and bodies are sent to OpenAI for processing. Don't use this if your job-search emails contain NDAs or confidential info — swap in a local LLM instead.
- **Cost.** Roughly $0.01–0.05 per day at typical job-search volume. Gmail and Google Sheets API calls stay within free quotas.

## Why I built this

Manual spreadsheet tracking lasted me two weeks before it became the chore I'd skip on busy days. By week three the sheet was lying to me — half the "Applied" rows were rejections I hadn't logged yet. So I built this. It's not a system of record; it's a guided draft I skim once a week. The bones might be useful to someone else.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
