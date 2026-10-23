# 🔬 Issue cohort completion certificates with pdfmill, Gmail and Google Drive

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Issue personalized completion certificates to an entire cohort from one validated webhook. pdfmill renders each PDF, Gmail delivers it, and Google Drive archives the same binary before n8n returns the issued count.

## How it works
1. Receives a POST webhook containing the program, organization, issuer, completion date, and complete attendees array.
2. Validates every cohort identity field plus each attendee name, single mailbox address, positive hours, and optional completion-date override before fan-out.
3. Returns one clear 400 response when the roster is empty or any field is malformed, so no invalid cohort can be partially delivered.
4. Creates one item per valid attendee and assigns an execution-scoped certificate number that cannot overlap with adjacent workflow executions.
5. Uses pdfmill to render one branded certificate PDF per attendee and exposes the result in the data binary property.
6. Fans that same binary directly to Gmail and Google Drive, waits for both branches, then returns the program, organization, and issued count.

## Setup
1. Install the verified pdfmill node, then add pdfmill, Gmail, and Google Drive credentials in n8n.
2. Choose the Google Drive folder where completed certificates should be archived.
3. Configure the cohort system to send the documented program, organization, issuer, completion date, and attendee fields to the webhook.
4. Copy the production cohort-completed webhook URL and test both a valid roster and a malformed-roster 400 response before activating the integration.

## Requirements
- A pdfmill account plus Gmail and Google Drive access. Each request needs cohort program, organization, issuer name and title, a YYYY-MM-DD completion date, and a non-empty attendees array with name, one mailbox, and positive hours.

## Customization
- Map source aliases in the validation Code node, replace the built-in Certificate template with your own pdfmill branding, or swap the delivery and archive nodes. Preserve whole-roster validation and the post-delivery Merge.

## Additional info
The gallery JSON contains no credentials or private resource IDs. Configure credentials and the Drive folder after import. Whole-roster rejection is deliberate because it prevents partial certificate delivery.

## 🔗 Nodes Used

Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
