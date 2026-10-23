# 🧾 Screen and triage invoice emails for approval with MailMint

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Screen invoice emails and hold the doubtful ones for review with MailMint

**Who's it for**
Anyone whose accounts-payable inbox fills up with supplier invoices and who wants the routine ones to go straight through, but refuses to let a machine pay something it only half-understood. The interesting part is not the extraction — it is deciding, with reasons, which invoices a human still has to look at.

**How it works**
1. **Receive the invoice email** accepts a POST with the message you already have: `subject`, `text` and optionally `html`. Anything that can hand you an email works — the Gmail node, the Email Trigger (IMAP), a forwarding service, or a MailMint inbound address.
2. **Set your approval policy** is the one node you edit: the confidence you insist on, the amount a machine may approve on its own, the currency you expect, and whether the sender must be authenticated.
3. **Is there an email to read?** rejects an empty request *before* a parse is spent, so a broken payload gets a readable 422 instead of an empty result.
4. **Read the invoice fields** is MailMint. The fields are declared on the canvas — name, type, `required`, one line of description — and it returns each value with a **confidence**, the layer it came from, and the **verbatim text it was read out of**. With *Route Messages Needing Review Separately* switched on, the node has a second output: a required field it could not find, a value it could not coerce, or evidence it could not locate leaves by the lower branch, carrying the flag that says which. No IF node needed.
5. **Score it against your policy** does the real work, and every input is something you could check by hand: the lowest per-field confidence, whether each value has an evidence span, whether the required fields are actually there, the SPF/DKIM/DMARC verdicts, whether the amount is inside your ceiling, whether the currency is the expected one, and how many days are left until it is due.
6. **Inside your policy?** routes the result. **Return it as approved** answers 200 with the invoice, the lowest confidence and the days until due. **Say why a human is needed** answers 202 with the *reasons* — either the policy reasons or MailMint's own flags — plus the evidence, so a reviewer sees exactly what the machine saw.
7. If MailMint could not be reached, **Explain what went wrong** and **Return the error as JSON** answer 422 with the real failure text. The caller always gets an answer, and nothing is ever silently dropped.

**How to set up**
- Add a MailMint credential (free plan: 300 parsed emails a month, no card). The Base URL is already filled in.
- Put the four policy values in **Set your approval policy**.
- Activate the workflow and POST an invoice email to the production webhook URL.

**Requirements**
- A MailMint API key from mailmint.app.mintapis.com.
- ⚠️ This template uses a community node, so it runs on **self-hosted n8n only**.

**How to customize**
The schema in **Read the invoice fields** is a plain JSON list — add `po_number`, `vat_rate` or `supplier_name` and they appear in the output with their own confidence and evidence. The scoring in **Score it against your policy** is ordinary JavaScript: change a threshold, or add a rule of your own. Swap **Return it for human review** for a Slack, Jira or Notion node to file the doubtful ones where your team actually looks, and point **Return it as approved** at your accounting system.

**Sender authentication**
It is off by default, because a message posted to a webhook has no envelope to check. Switch it on when the mail arrives through a MailMint inbound address: there SPF, DKIM and DMARC are verdicts computed on the message as it was received, not guesses made afterwards — MailMint runs its own inbound SMTP server, so it sees the envelope and the raw bytes.

**Disclosure**
I build and run MailMint. This template is a self-submission, not a third-party recommendation.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
