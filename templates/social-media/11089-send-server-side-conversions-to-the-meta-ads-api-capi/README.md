# 📱 Send server-side conversions to the Meta Ads API (CAPI)

> ⚡ **890 views** · 📱 [Social Media & Email Marketing](../)

## Description

Struggling with inaccurate Meta Ads tracking due to iOS 14+ and ad blockers? 📉 This workflow is your solution. It provides a robust, server-side endpoint to reliably send conversion events directly to the Meta Conversions API (CAPI).

By bypassing the browser, you can achieve more accurate ad attribution and optimize your campaigns with better data. This template handles all the required data normalization, hashing, and formatting, so you can set up server-side tracking in minutes.

## ⚙️ How it works
This workflow provides a webhook URL that you can send your conversion data to (e.g., from a web form, CRM, or backend). Once it receives the data, it:

- Sanitizes User Data: Cleans and normalizes PII like email and phone numbers.
- Hashes PII: Securely hashes the user data using SHA-256 to meet Meta's privacy requirements.
- Formats the Payload: Assembles all the data, including click IDs (fbc, fbp) and user info, into the exact format required by the Meta CAPI.
- Sends the Event: Makes a direct, server-to-server call to Meta, reliably logging your conversion event.
## 👥 Who’s it for?
- Performance Marketers: Improve ad performance and ROAS with more accurate conversion data.
- Lead Generation Businesses: Reliably track form submissions as conversions.
- E-commerce Stores: Send purchase events from your backend to ensure nothing gets missed.
- Developers: A ready-to-use template for implementing server-side tracking without writing custom code from scratch.


## 🛠️ How to set up
Setup is straightforward. You'll need your Meta Pixel ID and a CAPI Access Token.

For a complete walkthrough, check out the tutorial video for this workflow on YouTube: https://youtu.be/_fdMPIYEvFM

The basic steps are to copy the webhook URL, configure your form or backend to send the correct data payload, and add your Meta Pixel ID and Access Token to the final HTTP Request node.

👉 For a detailed, step-by-step guide, please refer to the yellow sticky note inside the workflow.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
