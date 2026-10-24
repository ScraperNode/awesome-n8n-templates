# 🔒 Re-screen a customer sheet against the OFAC sanctions list with Google Sheets and Slack

> ⚡ **0 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
Every night this workflow re-screens each customer in a Google Sheet against the public OFAC sanctions list and its alias file, writes the result back into the sheet, remembers matches a reviewer already cleared, and alerts Slack when a hit stays unreviewed too long.

## How it works
1. Runs every night at 02:00 and reads the editable values from the Screening Settings node.
2. Downloads both public OFAC files, the primary SDN list and the alias list, because many parties are listed only under an alias. If either file comes back shorter than its minimum row count, nobody is cleared on that run: every row is marked NOT SCREENED instead of a false all clear.
3. Reads your customer sheet, drops duplicate rows and skips anyone screened inside the recheck window, so each nightly run only does new work.
4. Screens every remaining name deterministically, with no AI model. Names are uppercased, accents, punctuation and company suffixes are removed, and each pair is scored in both directions so one common surname does not flag everyone who shares it.
5. Checks each match against your reviewed-matches sheet. A pair a reviewer already cleared is marked CLEARED BY REVIEW with their name and reason, and is not raised again.
6. Writes new possible matches back into the customer sheet as open hits and stamps every other row with its result. A hit left open longer than the escalation window is posted to Slack straight away, with the number of days it has waited.
7. Summarises the run and posts it to your Slack channel when there is something to report, and stays quiet when there is not.

## Setup
1. Create a Google Sheet with the columns Customer Name, Customer ID, Screening Status, Screening Detail, Best Score, Matched Name, Screened At, First Flagged At and Cleared By, and fill in your customers.
2. Add a second sheet for reviewed matches with the columns Customer Name, Matched Name, Cleared By and Reason. A row there tells the workflow a person checked that pair and found it to be a different party.
3. Connect your Google Sheets and Slack credentials, then select your spreadsheet and sheets on the four Google Sheets nodes and your channel on the two Slack nodes.
4. Open Screening Settings to set the match threshold, the recheck window and the escalation window. Run it once by hand, check the results in your sheet, then activate it.

## Requirements
- A Google account with a Google Sheet holding your customer list.
- A Slack workspace and a channel for compliance alerts.
- Outbound internet access to treasury.gov to download the two public OFAC files. No API key or sanctions-data subscription is needed.
- No AI model and no paid service. The matching runs entirely inside a Code node.

## Customization
- Screening Settings holds every editable value: the two list URLs, the match threshold, the two minimum row counts, the recheck and escalation windows, and the names of your customer name and ID columns.
- match_threshold defaults to 85 and is the noise dial. Raise it to cut false positives on common names; lower it to catch more spelling variants and review more.
- min_list_rows and min_alias_rows are the fail-closed floors that stop a failed or truncated download passing as a screening. Keep them well above zero and well below the real file sizes of roughly 19,000 and 20,000 rows.
- recheck_after_days (default 30) sets how often an already screened customer is screened again. escalate_after_days (default 3) sets how long an open hit may wait before it goes to Slack.
- Change the schedule on Re-Screen Every Night to weekly if your customer list changes slowly.

## Additional info
A score is a candidate for a human to check, never a decision. The default threshold of 85 will raise false positives on common names, which is why a reviewer's clearance is remembered and not raised again.

Names are normalised, not transliterated. A name written in Cyrillic or Arabic will not match a Latin listing, so keep customer names in Latin script if you rely on this check.

If either OFAC file comes back shorter than its minimum row count, the run refuses to clear anybody and marks the rows NOT SCREENED rather than reporting a comforting all clear.

This template screens against the US OFAC lists only. It is not a substitute for screening against the EU, UK or UN lists your business may also be subject to.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
