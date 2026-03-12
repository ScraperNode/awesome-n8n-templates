# 📊 Daily business news summary with OpenAI and Gmail from multiple RSS sources

> ⚡ **118 views** · 📊 [Market Research & Insights](../)

## Description

-   Pulls free business and economic headlines from multiple publicly available RSS feeds (e.g., Reuters, Wall Street Journal, Federal Reserve, St. Louis Fed, BNP Paribas, WTO).

-   De-duplicates stories, keeps only the last 24 hours, and limits to a manageable number.

-   Uses OpenAI to generate a concise market brief with sections and "Why it matters."

-   Sends a clean HTML email via Gmail.

**Category:** Business / Economics / News\
**Time to set up:** ~10--15 minutes\
**Difficulty:** Beginner--Intermediate\
**Cost:** Free (except minimal OpenAI tokens if summarization is used)

* * * * *

**What you'll need**
--------------------

-   n8n (recent version)

-   OpenAI credentials (for summaries, optional if you want raw feeds only)

-   Gmail (or SMTP) credentials

-   A few **free RSS feed URLs** (swap in/out as you like)

* * * * *

**Set up steps**
----------------

-   Trigger -- Add a Cron to run daily (pick your time and timezone).

-   Fetch -- Add one RSS Read node per source and connect all to a Merge (append).

-   De-duplicate (this run) -- Add Remove Duplicates and compare on a stable key (prefer the article URL).

-   Freshness -- Add an IF to pass only items published in the last 24 hours.

-   Limit -- Add Limit to cap the total items (e.g., 25).

-   Summarize -- Add OpenAI → Message a model to produce a JSON brief with subject + HTML body.

-   Email -- Add Gmail → Send to deliver the brief to your inbox.

* * * * *

**Tips & troubleshooting**
--------------------------

-   If everything gets discarded at de-dup while testing, switch to "within current input" or reset the node's stored values.

-   If no items pass the IF, widen the date window temporarily (some feeds publish late).

-   If the email arrives blank, ensure Gmail email type is set to HTML and the subject/body fields map to the model's output.

* * * * *

**Free sources you can start with (swap freely)**
-------------------------------------------------

-   Yahoo News
-   Financial Times

## 🔗 Nodes Used

RSS Read, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
