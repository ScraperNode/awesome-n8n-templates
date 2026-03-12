# 📱 Facebook / Meta ads performance monitoring with Slack alerts (CTR, CPC, ROAS)

> ⚡ **197 views** · 📱 [Social Media & Email Marketing](../)

## Description

### Who’s it for

This workflow is for **marketing teams, performance marketers, and media buyers** running Facebook (Meta) Ads who want to stay on top of creative performance without manually checking Ads Manager every day.

### What it does

The workflow automatically monitors **Facebook Ads performance at the ad creative level** and sends **real-time Slack notifications** when key metrics cross your thresholds. It tracks CTR, CPC, ROAS, spend, and conversions over a rolling time window, then flags:

* **Underperformers** (e.g. CTR below 0.5% for 2 days).
* **Top performers** (e.g. ROAS above 5x).

### What business value this workflow provides

* **Faster detection of problems**
  Instead of waiting for a weekly report, you know within a day (or whatever window you configure) if an ad’s CTR is tanking or if spend is producing poor ROAS. That prevents wasted budget.

* **Highlighting winners**
  When an ad’s ROAS is high (e.g. &gt;5x), you get an instant Slack ping. You can then shift budget to scale it before performance fades.

* **Reduced manual monitoring**
  Normally someone has to log into Meta Ads Manager daily, filter by campaign/ad, export CSVs, check CTR/ROAS, then write up notes. That’s time-consuming and error-prone. Automating this means you spend less time gathering data and more time making decisions.

* **Team visibility**
  Posting to Slack means the whole marketing team is aligned on what’s working and what isn’t, without sharing dashboards or CSVs around.

### How it works

1. Workflow trigger (manual or scheduled).
2. Fetch **ad-level insights** from the Facebook Ads API.
3. A Code node normalizes metrics (CTR %, CPC, ROAS, spend, conversions).
4. Compare against your **CTR and ROAS thresholds**.
5. If conditions are met, send a **Slack block message** with ad name, ID, spend, CTR, CPC, ROAS, and the reasons it was flagged.

### How to set up

* In the *Edit Fields* node, set your `act_id` (Facebook Ad Account ID) and `campaign_id`.
* Adjust `ctr_min`, `roas_top`, and `lookback_days` to fit your goals.
* Connect your **Slack credentials** and set the channel for alerts.

### Requirements

* A Facebook (Meta) Ads account with API access.
* Slack workspace with a bot/app that has `chat:write` permission.
* n8n credentials for both services.

### How to customize

* Add ad thumbnails by including `creative` in the insights fields.
* Extend the workflow to **automatically pause underperforming ads**.

## 🔗 Nodes Used

Slack, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
