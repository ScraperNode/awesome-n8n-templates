# 🎫 Triage maintenance tickets and assign vendors with Airtable, Twilio and Gmail

> ⚡ **29 views** · 🎫 [Ticket Management & Triage](../)

## Description

This n8n template demonstrates how to triage tenant maintenance requests automatically; matching each ticket to the right contractor by category and postcode area, dispatching the job by email and SMS, and detecting duplicate tickets before they snowball.

Use cases are many: residential lettings agencies juggling dozens of properties, short-let and HMO operators tired of duplicate "is anyone fixing this?" tickets, or commercial property managers who need a paper trail for every dispatch. Oher industries juggling tickets can use the system too!

Good to know

- Each Twilio SMS is billed per message. See [Twilio SMS pricing](https://www.twilio.com/en-us/sms/pricing) for the rate in your country; UK SMS costs ~$0.04 at time of writing.
- The postcode-matching logic in this template is built around UK postcodes (e.g. `SW1A 1AA` → `SW1`). For US ZIP codes or other formats, you'll need to adjust the **Extract Postcode District** code node.
- The duplicate-detection window is 24 hours by default; adjust it inside the **Evaluate Duplicates** code node for your portfolio size.
- Any CRM will do if you don't want to use Airtable.

How it works

1. The Airtable Trigger polls the `Maintenance Tickets` table every minute for new tenant submissions.
2. Before anything else, we check for duplicates; same tenant, same property, same category, within the last 24 hours. Matches get flagged as `Possible Duplicate` and an alert email goes to the admin.
3. For real new tickets, we normalise the postcode (e.g. `SW1A 1AA` becomes `SW1`) so the search matches on area rather than the full code.
4. We then search the `Vendors` table for active vendors who handle that category and serve that postcode district, sorted by response time, and pick the fastest match.
5. If we find a vendor, we update the ticket (assigned, status `Assigned`, timestamp), email the vendor the full job details, fire a Twilio SMS so they see it on their phone within seconds, and email the tenant a confirmation with the contractor's name and expected response time.
6. If no vendor matches, we don't drop the ticket on the floor; we set the status to `Pending Manual Assignment`, email the admin so a human can step in, and email the tenant a holding message so they know the request landed.

How to use

- Duplicate the Airtable base before you import; you need a `Vendors` table and a `Maintenance Tickets` table. The schema is documented in the sticky notes inside the workflow.
- The trigger polls every minute by default, but feel free to swap it for an Airtable webhook (instant) if you have an Enterprise plan, or a form/webhook trigger if tenants submit elsewhere.
- The vendor SMS uses Twilio; replace the `from` number with your verified Twilio number before going live.
- Set the admin email in the two admin Gmail nodes (`Email to Admin - Alert` and `Send Duplicate Alert to Admin`) so escalations land in the right inbox.

Requirements

- Airtable base with `Vendors` and `Maintenance Tickets` tables
- Gmail account for vendor, tenant, and admin emails
- Twilio account with a verified `from` number for SMS

Customising this workflow

The same triage pattern works anywhere you need to route inbound requests by category and location. Try it for field-service dispatch, IT helpdesk ticket assignment, or routing customer support tickets to the right specialist based on issue type and language.

## 🔗 Nodes Used

Airtable, Twilio, Gmail, Airtable Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
