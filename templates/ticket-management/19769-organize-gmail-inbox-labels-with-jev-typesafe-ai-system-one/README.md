# 🎫 Organize Gmail inbox labels with Jev TypeSafe AI (System One)

> ⚡ **279 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs every five minutes to find unlabelled Gmail messages, classifies each email with TypeSafe Jev (System One), creates any missing Gmail labels, and applies the chosen label based on model confidence so your inbox is automatically organized with a safe “Needs Review” fallback.

## How it works
1. Runs every five minutes and searches Gmail for up to 50 messages that have no user labels (excluding chats, sent mail, and drafts).
2. Sends each email’s headers, snippet/body, and Gmail category signals to TypeSafe Jev (System One) to return a single label choice plus confidence and a “needs reply” score.
3. Chooses the final label name by applying confidence thresholds, escalating uncertain-but-actionable emails to “Action Required,” and routing low-confidence results to “Needs Review.”
4. Compares the needed label names with existing Gmail labels and creates any missing labels once to avoid duplicates.
5. Reloads Gmail labels to get fresh label IDs, resolves the chosen label name to a label ID, and applies the label to each message.
6. Repeats the search-and-label cycle within the same execution until the backlog is drained or the maximum rounds limit is reached.

## Setup
1. Add a Gmail OAuth2 credential with permission to read messages and manage labels, and select it for all Gmail steps.
2. Add an HTTP Bearer Auth credential containing your TypeSafe API key and select it for the TypeSafe Jev request.
3. Review and adjust the confidence thresholds (CONFIDENCE_FLOOR and NEEDS_REPLY_FLOOR) and ensure Gmail has (or can create) the “Needs Review” label used as a fallback.
4. Optionally edit the label criteria taxonomy sent to TypeSafe Jev to match the categories you want created and applied in Gmail.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
