# 🔬 Generate & email personalized certificates from Google Forms with score threshold

> ⚡ **1,097 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Description
This workflow automatically generates personalized certificates in Google Slides and emails them to respondents only if they meet a minimum score threshold, using data submitted via Google Forms (stored in Google Sheets).

### Ideal for:
* Online courses
* Quizzes and workshops
* Event participation certificates

### Sheet Requirements
* Your connected Google Sheet (from the Google Form) must contain:
* Full Name – The name to appear on the certificate.
* Email – Recipient’s email address.
* Score – The test/quiz score used for threshold logic.


### Setup Instructions
1. Connect Google Sheets – Make sure your Form responses are linked to a Sheet with the columns mentioned above.
2. Set Score Threshold – Modify the If node to your desired minimum score (e.g., &gt;= 80).
3. Customize Certificate Template – Use a Google Slides file with text placeholders like {{Full Name}}.
4. Connect Gmail & Google Drive – For sending emails and saving generated certificates.
5. Update File IDs – Replace any placeholder Slide and Drive file IDs with your own.

### Services Used
* Google Sheets (Form responses)
* Google Slides (Certificate template)
* Google Drive (Storage)
* Gmail (Email delivery)

### Troubleshooting
* Issue: "Cannot read property 'Score'" → Ensure your column names match exactly (Score, Full Name, etc.).
* Slides not replacing placeholders → Double-check placeholder format ({{Full Name}}) and capitalization.
* Emails not sending → Verify Gmail authentication and make sure the If node is correctly filtering results.

## 🔗 Nodes Used

Google Drive, Gmail, Google Slides, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
