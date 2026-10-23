# 🎣 Automatic lead export from Fluentform to Google Sheets with form categorization

> ⚡ **880 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Stop copy-pasting form leads into spreadsheets. The **Fluentform Export** workflow captures form submissions and newsletter signups automatically and organizes them into Google Sheets, the moment they come in.

*Last updated: September 2026.*

## What Problem Does It Solve?

Manual exporting or copying of leads and newsletter signups from web forms to spreadsheets is time-consuming, error-prone, and delays follow-ups. Entries get lost, marketing waits. This workflow automates the capture and organization of every submission into Google Sheets.

## Why Use this workflow?

- **Save Time:** No more tedious manual data entry for form leads and newsletter signups.
- **Avoid Data Loss:** Every submission is logged reliably with real-time updates.
- **Organized Data:** Separate sheets for newsletter and contact form data keep things clear.
- **Easy Integration:** Works directly with Fluentform submissions and Google Sheets.
- **Flexible & Scalable:** Adapts quickly to form structure or spreadsheet column changes.

## Who Is This For?

- **Marketers & Growth Teams:** Gather leads and newsletter contacts automatically to fuel campaigns.
- **Small to Medium Businesses:** Cut overhead from manual data management and errors.
- **Customer Support Teams:** Track form submissions in one centralized, accessible place.
- **Website Admins:** Simplify the Fluentform-to-Sheets flow without coding.


## What This Workflow Does

* **Trigger:** Listens for incoming POST requests from Fluentform via webhook.
* **Classify:** Checks whether the submission is a newsletter signup or a contact form based on a specific token.
* **Newsletter Path:** Maps the email from newsletter submissions and appends/updates the Google Sheets "News Letter" tab.
* **Form Path:** Extracts full name, email, phone, subject, and message fields and appends/updates the Google Sheets "form" tab.
* **Respond:** Sends a JSON success response back to Fluentform confirming receipt.

## Setup Instructions

1. **Import** the provided `.json` workflow file into your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance ([docs](https://docs.n8n.io/) if you are new)
2. **Set up credentials:**
   - Google Sheets OAuth2 credential with access to your target spreadsheets
3. **Customize** workflow elements:
   - Update Fluentform webhook URL in your Fluentform settings to the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) webhook URL generated
   - Adjust field names or spreadsheet columns if your form structure changes
4. **Update** spreadsheet IDs and sheet names used in the Google Sheets nodes to match your own Sheets
5. **Test** workflow thoroughly with actual Fluentform submissions to verify data flows correctly

## Pre-Requirements

- Running **[n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin) (Cloud or self-hosted)**
- Google account with access to Google Sheets and OAuth credentials
- Fluentform installed on your website with ability to set webhook URL
- Target Google Sheets prepared with tabs named "News Letter" and "form" with expected columns

## Nodes Used

- Webhook (POST - Retrieve Leads)
- If (Form or newsletter?)
- Set (newsletter and form data preparation)
- Google Sheets (Append/update for newsletter and form sheets)
- Respond to Webhook

### Quick Answers
**Where does each submission go?**  
Newsletter signups land in the "News Letter" tab, contact forms in the "form" tab.  
**How does it tell them apart?**  
A specific token in the submission marks it as newsletter or form.  
**What if my form fields change?**  
Adjust the field names or spreadsheet columns in the nodes to match.  

## Support

**Made by:** [khmuhtadin](https://khmuhtadin.com)  
**Tag:** automation, Google Sheets, Fluentform, Leads 
**Category:** Marketing  
**Need a custom?** **[Contact Me](https://khmuhtadin.com/contact)**

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
