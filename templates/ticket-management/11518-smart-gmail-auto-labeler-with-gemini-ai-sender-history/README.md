# 🎫 Smart Gmail auto-labeler with Gemini AI & sender history

> ⚡ **142 views** · 🎫 [Ticket Management & Triage](../)

## Description

# n8n Gmail AI Auto-Labeler

&gt; An intelligent **n8n workflow** that automatically classifies and labels Gmail emails using **Google Gemini AI**, keeping your inbox organized with zero manual effort.

This workflow uses AI-powered classification to analyze email content, learn from sender patterns, and automatically apply appropriate labels while archiving processed emails.

---

## How It Works

1. **Trigger**: The workflow runs automatically every minute to check for new unread emails (or manually for bulk processing).
2. **Check for Existing Labels**: Before processing, it verifies if the email already has an AI-assigned label to avoid duplicate processing.
3. **AI Classification**: If unlabeled, the AI agent analyzes the email using:
   * **Sender History Tool** - Fetches up to 10 previous emails from the same sender to identify patterns
   * **80% Majority Rule** - If 80%+ of sender's past emails have the same label, strongly prefers that category
   * **Label Examples Tool** - When uncertain, compares the email with existing examples from suspected categories
4. **Smart Decision**: The AI returns a structured JSON response:
   ```json
   {
     "label": "Category Name"
   }
   ```
   Or `"None"` if no category fits.
5. **Apply & Archive**:
   * **Label Applied** → The workflow adds the appropriate Gmail label to the thread.
   * **Auto-Archive** → Removes the email from INBOX (archives it) to maintain zero-inbox.
6. **Loop**: Processes the next email in the batch, ensuring all new emails are classified.

---

## Requirements

* **Gmail OAuth2 Credentials** - Connected Gmail account with API access.
* **Google Gemini API Key** - [Get it here](https://ai.google.dev/)
  * Free tier: 15 requests/minute
* **Gmail Labels** - Must be created in Gmail exactly as listed:
  * Meetings
  * Income
  * Inquiries
  * Notify / Verify
  * Expenses
  * Orders / Deliveries
  * Trash Likely

---

## How to Use

1. **Import the Workflow**:
   * Copy the provided JSON file.
   * In your n8n instance → click **Import Workflow** → select the JSON file.

2. **Create Gmail Labels**:
   * Open Gmail → Settings → Labels → Create new labels.
   * Use the exact names listed above (case-sensitive).

3. **Get Your Label IDs**:
   * In the workflow, click **"When clicking 'Execute workflow'"** manual trigger.
   * Execute the **"Get Labels Info"** node only.
   * Copy each label's ID (format: `Label_1234567890123456789`).

4. **Update Code Nodes with Your Label IDs**:
   
   **Node 1: "Check Label Existence"**
   ```javascript
   const labelMap = {
     "Label_YOUR_ID_HERE": "Meetings",
     "Label_YOUR_ID_HERE": "Inquiries",
     "Label_YOUR_ID_HERE": "Notify / Verify",
     "Label_YOUR_ID_HERE": "Expenses",
     "Label_YOUR_ID_HERE": "Orders / Deliveries",
     "Label_YOUR_ID_HERE": "Trash Likely"
   };
   ```

   **Node 2: "Convert Label to Label ID"**
   ```javascript
   const labelToId = {
     "Meetings": "Label_YOUR_ID_HERE",
     "Inquiries": "Label_YOUR_ID_HERE",
     "Notify / Verify": "Label_YOUR_ID_HERE",
     "Expenses": "Label_YOUR_ID_HERE",
     "Orders / Deliveries": "Label_YOUR_ID_HERE",
     "Trash Likely": "Label_YOUR_ID_HERE"
   };
   ```

5. **Set Up Credentials**:
   * **Gmail OAuth2** → Authorize your Gmail account in n8n.
   * **Google Gemini API** → Add your API key in n8n credentials.

6. **Test the Workflow**:
   * Send yourself test emails with clear content (e.g., invoice, meeting invite).
   * Use the manual trigger to process them.
   * Verify labels are applied correctly.

7. **Activate for Auto Mode**:
   * Toggle the workflow to **Active**.
   * New unread emails will be processed automatically every minute.

---

## Notes

* **Dual Execution Modes**:
  * **Auto Mode** - Gmail Trigger polls inbox every minute for unread emails (real-time processing).
  * **Manual Mode** - Use the manual trigger to bulk process existing emails (adjust limit in "Get many messages" node).

* **AI Learning from Patterns**:
  * The workflow applies an **80% majority rule** - if 80% or more of a sender's historical emails share the same label, the AI strongly prefers that category for new emails from that sender.
  * This creates intelligent sender-based routing over time.

* **Skip Already Labeled Emails**:
  * The "Check Label Existence" node prevents re-processing emails that already have an AI-assigned label.
  * Ensures efficient execution and avoids duplicate work.

* **Structured AI Output**:
  * Uses a **Structured Output Parser** to ensure the AI always returns valid JSON: `{ "label": "Category" }`.
  * If uncertain, returns `{ "label": "None" }` and the email stays in inbox.

* **Background Archiving**:
  * After labeling, emails are automatically removed from INBOX (archived).
  * Maintains a zero-inbox workflow while preserving emails under their labels.

* **Rate Limits**:
  * Google Gemini free tier: 15 requests/minute.
  * Adjust polling frequency if hitting limits.

---

## Example Behavior

* **Minute 1**: New invoice email arrives → AI fetches sender history → 85% were labeled "Expenses" → applies "Expenses" label → archives email.
* **Minute 2**: Meeting invite arrives → No sender history → AI analyzes content (Zoom link, time) → applies "Meetings" label → archives email.
* **Minute 3**: Promotional email arrives → AI compares with "Trash Likely" examples → applies label → archives email.
* **Minute 4**: Already-labeled email detected → skipped silently.

---

## Label Categories

| Label | Description |
|-------|-------------|
| **Meetings** | Calendar invites, Zoom/Meet links, appointments, scheduled events |
| **Expenses** | Bills, invoices, receipts, payment reminders, subscription renewals |
| **Income** | Payments received, payouts, deposits, earnings notifications |
| **Notify / Verify** | Verification codes, login alerts, 2FA codes, account notifications |
| **Orders / Deliveries** | Order confirmations, shipping updates, tracking numbers, deliveries |
| **Inquiries** | Business outreach, sales proposals, partnerships, cold emails |
| **Trash Likely** | Spam, newsletters, promotions, marketing blasts, ads |

&gt; If no category fits clearly, the email returns `"None"` and remains in the inbox.

---

## Customization

* **Change Polling Frequency**: Edit the "Gmail Trigger" node → `pollTimes` → `mode` (e.g., `every5Minutes`).
* **Adjust Email Limit**: Modify `limit: 10` in "Get many messages" node for manual bulk processing.
* **Add Custom Labels**: Create in Gmail → Get ID → Update both Code nodes + AI system prompt.
* **Modify 80% Rule**: Edit the AI agent's system message to adjust the majority threshold.
* **Increase Tool Limits**: Change `limit: 10` in Gmail tool nodes to fetch more historical data.

---

**Author:** Muhammad Anas Farooq

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
