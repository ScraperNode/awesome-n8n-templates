# 👥 Generate employee numbers and ID cards with Google Sheets and Gmail

> ⚡ **10 views** · 👥 [HR & Recruitment](../)

## Description

New hire, new ID card, zero paperwork chaos. Called with an employee ID, this workflow looks up the employee in Google Sheets, assigns a unique employee number, renders a PDF ID card, and routes it to printing, a GA task, or digital activation. Every step logged.

*Last updated: September 2026.*

## Quick overview
This workflow is called with an employee ID, looks up the employee in Google Sheets, ensures they have a unique employee number, and then creates or updates an ID card record, renders a PDF via an HTTP service, and optionally triggers printing or a GA task while logging events.

## How it works
1. Receives a workflow call containing an `employee_id` and looks up the matching employee in the Google Sheets “Employees” sheet.
2. If the employee number is missing, generates a new employee number, checks for collisions in Google Sheets, and updates the employee row with the new value.
3. If the employee photo URL is missing, appends an “ID Cards” record with `waiting_photo`, creates a photo-request task in the “Tasks” sheet, and sends a request email via Gmail.
4. If a photo is available, finds any existing ID card row in the Google Sheets “ID Cards” sheet, generates or reuses a card ID and verification token, and creates or updates the ID card record.
5. Sends an HTTP request to the ID card renderer service to generate a PDF using the employee data and verification URL.
6. If rendering succeeds, updates the ID card row with the `digital_file_url`, reads `print_mode` from the Google Sheets “Config” sheet, then either sends a print job via HTTP, creates a GA print task in Google Sheets, or marks the card as digitally activated, and finally appends an “id_card_generated” event.
7. If rendering fails, marks the ID card as failed, appends an “id_card_render_failed” event, and stops the workflow with an error.

## Setup
1. Add Google Sheets OAuth2 credentials and set `ONBOARDING_SHEET_URL` to your onboarding spreadsheet containing the “Employees”, “ID Cards”, “Tasks”, “Events”, and “Config” sheets.
2. Add Gmail OAuth2 credentials and set `ONBOARDING_HR_EMAIL` to the recipient address for photo request emails.
3. Set environment variables for `ID_CARD_RENDERER_URL` (PDF renderer endpoint) and `ID_CARD_VERIFY_BASE_URL` (public base URL used to build verification links).
4. If using vendor printing, set `PRINT_VENDOR_URL`, and set the `print_mode` value in the “Config” sheet to `PRINT_API`, `GA_TICKET`, or `DIGITAL_ONLY`.

### Quick Answers
**What if there is no photo yet?**  
The card is marked `waiting_photo`, a task goes to the Tasks sheet, and HR gets a request email.  
**How is the card delivered?**  
Per `print_mode`: vendor print API, GA ticket, or digital-only activation.  
**What if rendering fails?**  
The card is marked failed with an event logged, and the workflow stops with an error.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
