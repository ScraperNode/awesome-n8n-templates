# 🔬 Issue branded certificate PDFs from Google Sheets with TemplateFox and Gmail

> ⚡ **67 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow turns a Google Sheet into an automated certificate-issuing pipeline. The moment a new completion row is added — whether by your training team, a Zap, or a quiz platform — a branded **PDF/A-2b** (archival-grade) certificate is rendered by TemplateFox, archived in Google Drive, emailed to the participant with a permanent link, and the original sheet row is updated with the Drive URL and issue timestamp. You get a complete audit trail without writing a single line of code.

## Problem Solved

Issuing certificates manually means:

- Copy-pasting names and dates into a Word or Canva file
- Exporting to PDF, attaching to an email, and sending it one by one
- Saving a copy somewhere your team can find later
- Maintaining a separate tracker of who got their certificate
- Inconsistent branding and typos that erode the document's authority

This workflow eliminates all of that. Drop a row in your sheet, get an archival-quality certificate delivered, archived, and tracked — every time, with the same branding.

## Who Can Benefit

- **Online course creators** issuing course-completion certificates at scale
- **Corporate training and L&D teams** documenting compliance, onboarding, or upskilling
- **Coaching and mentorship programs** rewarding milestones with a tangible deliverable
- **Conference and event organisers** issuing attendance and CPD/CEU certificates
- **Bootcamps and academies** delivering official credentials to graduates
- **Nonprofits and associations** awarding volunteer or membership recognition

## Prerequisites

- [TemplateFox](https://templatefox.com) account with an API key (free tier available)
- Google account with Sheets, Gmail, and Drive enabled
- Install the **TemplateFox** community node from Settings → Community Nodes

## Setting Up Your Template

You need a TemplateFox certificate template for this workflow. You can:

1. **Start from an example** — Browse [certificate templates](https://templatefox.com/templates/certificate), pick one you like, and customize it in the visual editor with your colours, logo, and signatures
2. **Create from scratch** — Design your own certificate in the [TemplateFox editor](https://app.templatefox.com)

Once your template is ready, select it from the dropdown in the TemplateFox node — your fields load automatically. Drag each field directly from the Google Sheets trigger output panel onto the matching template field. **No code needed.**

The workflow renders the certificate as **PDF/A-2b**, a modern archival standard that guarantees the file looks identical decades from now — perfect for official credentials. You can switch to PDF/A-3b in the TemplateFox node options if your training body requires it.

## Workflow Details

**Step 1: Google Sheets Trigger — New Completion Row**
Watches a Google Sheet for new rows. Expected columns: `Participant Name`, `Email`, `Course`, `Completion Date`, `Instructor`. The trigger polls every minute by default.

**Step 2: TemplateFox — Generate Certificate (PDF/A-2b)**
Maps the row data directly to your certificate template fields and renders an archival-grade PDF. Static fields like your logo, signatures, and organisation name should be set inside the template editor itself — no need to pass them through n8n.

**Step 3: Download PDF**
An HTTP Request node downloads the rendered PDF as a binary file, ready to be uploaded to Drive.

**Step 4: Archive to Google Drive**
Uploads the PDF to your chosen Google Drive folder, named `certificate-&lt;email&gt;.pdf` for easy auditing. The node returns a permanent `webViewLink` that's used downstream.

**Step 5: Email Certificate**
A Gmail node sends a styled HTML email to the participant with a "Download your certificate" button pointing to the **permanent Drive URL**. Course name and completion date are included from the trigger row.

**Step 6: Update Sheet Row**
The original row in your Google Sheet is updated with two new values: `Certificate URL` (the permanent Drive `webViewLink`) and `Issued At`. Matching is done by `Email`, so even if rows are reordered the right one is updated.

The whole pipeline runs in a single horizontal chain — clean to read, easy to debug.

## Customization Guidance

- **Static template content:** Set your organisation's logo, signatures, and any constant fields directly in the TemplateFox template editor — they never change between certificates.
- **PDF/A variant:** Switch to `pdf/a-3b` in the TemplateFox node options if you need PDF/A-3 (archival + attachments).
- **Pass/fail gate:** Add an `IF` node after the trigger to skip rows where `Score` is below your passing threshold.
- **Batch issuing:** Replace the Sheets trigger with a **Schedule Trigger** + a `Get Many Rows` step to issue certificates nightly instead of one-by-one.
- **Drive organisation:** Use a sub-folder per course by templating the file `name` with `{{ $('New Completion Row').first().json.Course }}/...`.
- **Slack alert:** Add a Slack node after the Drive step to notify your training team in #training-ops.

**Note:** This template uses the [TemplateFox community node](https://www.npmjs.com/package/n8n-nodes-templatefox). Install it from Settings → Community Nodes.

**Full tutorial:** [templatefox.com/n8n/automate-certificates](https://templatefox.com/n8n/automate-certificates)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
