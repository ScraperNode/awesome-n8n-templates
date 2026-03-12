# 🎣 Simple lead capture and follow-on with n8n multi-forms

> ⚡ **6,886 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This n8n template demonstrates the easiest way to build a lead capture flow for your side project, startup or small business where simple works best!

If Typeform's costs are getting you down or you feel Google form URLs are off-putting, then definitely give this a try.

## How it works
* Our flow begins with a form trigger to capture a newsletter signup and the user's email is captured into a google sheet. Google Sheet is used for demonstration purposes but this could be any database.
* Multi-page forms allow you to continue the onboarding experience with a short survey. 3 form nodes are chained to capture more details from the user which update the same row in the google sheet.
* Finally, a form ending node shows a customised completion screen for our user.

Check out the example sheet here: [https://docs.google.com/spreadsheets/d/15W1PiFjCoiEBHHKKCRVMLmpKg4AWIy9w1dQ2Dq8qxPs/edit?usp=sharing](https://docs.google.com/spreadsheets/d/15W1PiFjCoiEBHHKKCRVMLmpKg4AWIy9w1dQ2Dq8qxPs/edit?usp=sharing)

## How to use
* Keeping forms simple may serve to increase form completion rates. If you feel the need to add additional fields, consider breaking them up into more forms and group them contextually.

## Requirements
* Google Sheets for data capture
* Slack for notifications

Feel free to swap these out for services that you use!

## Customising this workflow
* Play with multi-form design to maximise the opportunity of getting to know the user better. That said, lengthy flows are likely to put people off.
* Instead of showing a static completion screen, perhaps redirecting to your blog or other more interesting page.

## 🔗 Nodes Used

Google Sheets, Slack, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
