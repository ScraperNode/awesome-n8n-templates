# 🎣 Send tracked cold email variants from Google Sheets with Gmail

> ⚡ **140 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works

- Every weekday morning, the workflow reads your prospect list from Google Sheets and cross-checks it against a send log — anyone already emailed is automatically skipped
- Each new contact is assigned one of three cold email variants, distributed evenly across the list, with a unique tracking ID embedded in each email
- Contacts are sent one at a time with a randomised 60–120 second delay between each send to protect deliverability
- After each send, a row is written to the log sheet recording the contact, variant used, timestamp, and tracking ID
- Open tracking is handled via a 1×1 pixel — when a prospect opens the email, the hit is recorded against their tracking ID for follow-up prioritisation

## Set up steps

1. Connect your Gmail account to all three Send Variant nodes and the error alert node — takes about 2 minutes via OAuth
2. Connect your Google Sheets account to the Get Contacts, Get Log Sends, and Log to Sheet nodes
3. In **Get Contacts**, point the node to your prospect spreadsheet and confirm the tab is **Sheet1** — columns needed: `email`, `firstName`, and optionally `companyName`
4. In **Get Log Sends** and **Log to Sheet**, confirm both are pointing to the **Log Sends** tab of the same spreadsheet — this is what prevents duplicate sends
5. In each of the three Send Variant nodes, update the sender name and sign-off in the email body to match your own details
6. *(Optional)* Replace the tracking pixel URL in each Send Variant node with your own open-tracking webhook endpoint if you're not using the one already in place
7. Activate the workflow — it will run automatically each weekday at 9 AM, or trigger manually from the canvas to test with a small batch first

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
