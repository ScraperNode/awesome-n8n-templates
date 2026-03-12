# 🎣 Automatic lead export from Fluentform to Google Sheets with form categorization

> ⚡ **846 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## ❓ What Problem Does It Solve?

Manual exporting or copying of leads and newsletter signups from web forms to spreadsheets is time-consuming, error-prone, and delays follow-ups or marketing activities. Traditional workflows can lose data due to mistakes or lack of automation.  The **Fluentform Export** workflow automates the capture and organization of form submissions and newsletter signups into Google Sheets

## 💡 Why Use this workflow?

- **Save Time:** Automate tedious manual data entry for form leads and newsletter signups
- **Avoid Data Loss:** Ensure all submissions are reliably logged with real-time updates
- **Organized Data:** Separate sheets for newsletter and contact form data maintain clarity
- **Easy Integration:** Works seamlessly with Fluentform submissions and Google Sheets
- **Flexible & Scalable:** Quickly adapt to changes in form structure or spreadsheet columns

## ⚡ Who Is This For?

- **Marketers & Growth Teams:** Automatically gather leads and newsletter contacts to fuel campaigns
- **Small to Medium Businesses:** Reduce overhead from manual data management and errors
- **Customer Support Teams:** Keep track of form submissions in a centralized, accessible place
- **Website Admins:** Simplify data workflow from Fluentform plugins without coding


## 🔧 What This Workflow Does

- **⏱ Trigger:** Listens for incoming POST requests from Fluentform via webhook
- **📎 Step 2:** Evaluates if the submission is a newsletter signup or a form based on a specific token
- **🔄 Step 3 (Newsletter Path):** Maps email from newsletter submissions and appends/updates Google Sheets "News Letter" tab
- **🔄 Step 3 (Form Path):** Extracts full name, email, phone, subject, and message fields and appends/updates the Google Sheets "form" tab
- **💌 Step 4:** Sends a JSON success response back to Fluentform confirming receipt

## 🔐 Setup Instructions

1. **Import** the provided `.json` workflow file into your n8n instance
2. **Set up credentials:**
   - Google Sheets OAuth2 credential with access to your target spreadsheets
3. **Customize** workflow elements:
   - Update Fluentform webhook URL in your Fluentform settings to the n8n webhook URL generated
   - Adjust field names or spreadsheet columns if your form structure changes
4. **Update** spreadsheet IDs and sheet names used in the Google Sheets nodes to match your own Sheets
5. **Test** workflow thoroughly with actual Fluentform submissions to verify data flows correctly

## 🧩 Pre-Requirements

- Running **[n8n instance](https://n8n.partnerlinks.io/khaisastudio) (Cloud or self-hosted)**
- Google account with access to Google Sheets and OAuth credentials
- Fluentform installed on your website with ability to set webhook URL
- Target Google Sheets prepared with tabs named "News Letter" and "form" with expected columns

## 🧠 Nodes Used

- Webhook (POST - Retrieve Leads)
- If (Form or newsletter?)
- Set (newsletter and form data preparation)
- Google Sheets (Append/update for newsletter and form sheets)
- Respond to Webhook

## 📞 Support

**Made by:** [khaisa Studio](khaisa.studio)  
**Tag:** automation, Google Sheets, Fluentform, Leads 
**Category:** Marketing  
**Need a custom?** **[Contact Me](https://khmuhtadin.com)**

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
