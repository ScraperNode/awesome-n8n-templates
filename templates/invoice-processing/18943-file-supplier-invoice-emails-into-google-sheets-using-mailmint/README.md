# 🧾 File supplier invoice emails into Google Sheets using MailMint

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## File invoice emails into a spreadsheet with MailMint

**Who's it for**
Anyone whose supplier invoices arrive as email and end up being retyped into a sheet by hand. This watches the mailbox, reads the fields out of each message, and appends one row per invoice — with a confidence and the verbatim text every value was read from, so the sheet can be audited instead of trusted.

**How it works**
1. **Watch the invoices mailbox** is the built-in Email Trigger (IMAP). Point it at the mailbox your suppliers send to. Any of its three formats works.
2. **Set your sheet and policy** is the one node you edit: the spreadsheet, the tab, the currency you expect and the amount above which a human should look. Everything downstream reads its settings from here.
3. **Read the invoice fields** is MailMint. Its Input is left on **Automatic**, which understands all three Email Trigger formats — RAW, Resolved and Simple — so there is nothing to map. The fields you want are declared right here on the canvas: name, type, `required`, one line of description.
4. Every value comes back with a **confidence**, the layer it came from, and the **verbatim text it was read out of**. A required field the parser could not find leaves by the node's second output instead of quietly becoming an empty cell.
5. **Did MailMint answer?** — the node is set to *continue* on failure, so an unreachable API arrives as data rather than stopping the workflow, and still reaches the sheet as an `error` row.
6. **Build the spreadsheet row** parses the money, computes the days until due, collapses the evidence into one auditable cell, and decides `ok` or `review` from your policy.
7. **Append the invoice to the sheet** writes it. Good rows, review rows and failures all land in the same sheet with their reason, so the spreadsheet is also the log.

**How to set up**
- Add a MailMint credential — the free plan is 300 parsed emails a month and needs no card. The Base URL is already filled in.
- Add your IMAP credential to the trigger and your Google account to the Sheets node.
- Put your spreadsheet and tab in **Set your sheet and policy**, and give the sheet a header row: `status`, `invoice_number`, `amount_due`, `currency`, `due_date`, `iban`, `days_until_due`, `lowest_confidence`, `evidence`, `reason`, `from`, `subject`, `received_at`, `request_id`.

**Requirements**
- A MailMint API key from mailmint.app.mintapis.com.
- An IMAP mailbox and a Google account.
- ⚠️ This template uses a community node, so it runs on **self-hosted n8n only**.

**How to customize**
The schema is a plain JSON list — add `po_number`, `vat_rate` or `supplier_name` and they arrive with their own confidence and evidence. Swap the Sheets node for Airtable, Postgres or NocoDB without touching anything before it. Point the review rows at Slack if you would rather be told than to go and look.

**Disclosure**
I build and run MailMint. This template is a self-submission, not a third-party recommendation.

## 🔗 Nodes Used

Email Trigger (IMAP), Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
