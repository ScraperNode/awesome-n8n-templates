# 🎫 Triage customer feedback emails into deduplicated Linear issues with OpenAI

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for unread customer feedback, uses OpenAI to triage and deduplicate requests against existing Linear issues, and then creates a new issue, adds a comment to a matched issue, or asks the customer for clarification, plus sends a weekly ranking email.

## How it works
1. Triggers every minute for new unread Gmail messages in the inbox, and also runs every Monday morning on a schedule.
2. Cleans and filters incoming emails to remove replies/quotes and ignore auto-replies, newsletters, mailing lists, configured sender/subject patterns, and the workflow’s own outgoing messages.
3. Loads the team’s open Linear issues (including comments) and skips processing if the email was already filed by checking for a stored message marker.
4. Uses an OpenAI chat model with a structured output schema and a Linear search tool to decide whether the email is a new issue, matches an existing open issue, or is unclear.
5. Validates the AI decision (including confidence thresholds) and then either creates a new Linear issue or adds a comment to the matched issue, embedding the email marker for future deduplication.
6. Replies to the customer in Gmail with a thank-you message or a follow-up question, marks the email as read when handled, and emails the team if triage is held due to Linear/API or AI issues.
7. On Mondays, reads open Linear issues, ranks them by how many customer-request markers they contain, and emails the top results to the team via Gmail.

## Setup
1. Connect Gmail OAuth2 credentials for the feedback inbox (Gmail Trigger) and for sending replies/notifications.
2. Connect Linear OAuth2 credentials and set the Linear team key and team notification email address in the Feedback Rules values.
3. Connect an OpenAI API credential and confirm the selected model in the OpenAI chat model step.
4. Optionally adjust rules like min_match_confidence, ignore_senders/ignore_subjects, max_email_chars, and the customer/team email templates before activating the workflow.

## Requirements
- A Gmail inbox where your customer feedback lands. A shared address such as feedback@ or support@ works best.
- A Linear workspace, and the team you want new requests filed under (you only need its short key, for example ENG).
- An OpenAI API key. The workflow uses gpt-5-mini, a small model. You can pick another one in the Triage Model node.
- About 10 minutes to connect the three accounts and fill in the Feedback Rules node.

## Customization
- Still getting two issues for the same request? Lower min_match_confidence a little in Feedback Rules. If it merges things that are really different, raise it.
- Tell the agent about your product. Add your feature names and the words your customers use to the Triage Agent system message, so it can recognise a request even when a customer describes it in their own words.
- Rewrite thank_you_message and reply_footer in your own voice. This is the email your customer actually reads.
- Keep noise out of Linear: add your billing tool, monitoring alerts or any other sender to ignore_senders, and phrases like "invoice" to ignore_subjects.
- Want the ranking on Friday instead of Monday, or a top 20 instead of a top 10? Change the Every Monday Morning trigger and digest_top.
- Long emails are cut at max_email_chars before the AI reads them. Raise it if your customers write essays.

## Additional info
Who it is for: small product and support teams who get feature requests and bug reports by email and copy them into Linear by hand.

The problem it solves: when feedback is filed by hand, the same idea ends up as five separate issues, nobody can say how many customers really asked for it, and vague emails like "it doesn't work" sit unanswered. This workflow reads each email once and puts it in the right place.

A real example: one customer writes "Could I export the monthly report as a CSV?". The workflow files a new issue, "Add CSV export for the monthly usage report", with the customer's own words. A week later another customer asks for "a spreadsheet version of the report". The workflow recognises it as the same request and adds that customer to the existing issue as a comment instead of opening a second one. Both customers get a short thank-you. On Monday the team's ranking shows the CSV export near the top with two requests.

What it will not do: it never merges on a guess. Only a confident match to an open issue in your team becomes a comment. Anything less becomes a new issue marked as a possible duplicate, so a person can merge it with one click. If Linear or OpenAI is down, the email stays unread and the team gets a short note saying why, so nothing is lost.

Tested on a live n8n instance with real Gmail and Linear accounts: new requests, reworded duplicates, unclear emails, out-of-office replies, a closed issue, a prompt injection hidden in an email, and a failing AI model.

## 🔗 Nodes Used

HTTP Request, Gmail, Linear, Gmail Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
