# 🤝 Connect Pipedrive deal outcomes to GA4 & Google Ads via Measurement Protocol

> ⚡ **75 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who’s it for

**Problem:** Your ads and GA4 often optimize to shallow web events (form fills), while the *real* value sits in Pipedrive (Qualified, Closed Won). That gap means bidding chases cheap leads instead of revenue.

**Solution:** This template turns Pipedrive deal milestones into **server-side GA4 events** (via Measurement Protocol), matched to the original visitor by `client_id`—no external database. You mark them as **Key events** in GA4 and, when ready, import them into Google Ads.

**Business value:** Ads can optimize on **actual CRM outcomes with value** (and currency), improving CAC/ROAS and reducing lead spam. Everything stays GA4-centric, consent-aware, and deduped with deterministic `event_id`, so you get reliable attribution without building a custom Ads integration. If you’re serious about scaling paid spend toward **high-quality, high-value deals**, this is the missing link.

This is **not plug-and-play**. Expect **\~2 hours of developer work** to integrate:


## What it does

On **Deal Updated**, the workflow checks for target stages (e.g., Qualified, Closed Won), fetches the linked Person’s **client\_id**, builds a GA4 **Measurement Protocol** event (with `value`, `currency`, deterministic `event_id`), and posts it server-side. Success updates deal-level dedupe flags; failures are logged to a Pipedrive Note. Credentials use n8n **Credentials**—no hardcoded secrets.

## How it works (high level)

A Pipedrive trigger listens for stage changes → an eligibility check gates sends → a payload builder composes the GA4 event → an HTTP call posts to GA4. Sticky notes in the canvas explain the whole setup and what to edit.

## Requirements


GA4 installed on your site; GA4 **Measurement ID** + **API Secret** (same data stream); Pipedrive Person field for `client_id`, optional `consent_granted`; Pipedrive Deal booleans for dedupe; n8n credentials configured (no secrets in nodes).

## How to customize the workflow

* Change which stages send events and the event names.
* Adjust `value` logic (e.g., margin- or probability-weighted).
* Choose skip-on-no-consent vs. `non_personalized_ads: true`.
* Add extra params (`deal_id`, `pipeline_stage`, etc.) to GA4 as custom dimensions (event-scoped).

## Troubleshooting & debugging

* If `client_id` is null: GA4 not initialized yet, consent denied, GTM var not firing, or adblockers—fix site capture first.
* If GA4 shows events in DebugView but Ads import is empty: events not marked as Key events, GA4↔Ads not linked/imported, or wrong stream/secret pairing.
* Use `https://www.google-analytics.com/debug/mp/collect` only for payload validation; it won’t verify your API secret. Final sends go to `/mp/collect`.

## 🔗 Nodes Used

HTTP Request, Pipedrive, Pipedrive Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
