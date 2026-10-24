# 🔧 Send smart lock PINs for Apaleo reservations with Seam, Gmail, and Twilio

> ⚡ **22 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
Youtube video explanation Link: https://youtu.be/3ukKYmCF5XY?si=-iRKpBUIGzhnczMk

This workflow reacts to Apaleo reservation unit assignments, generates a time-bound smart lock access code via Seam, saves it back to the Apaleo reservation comment, and notifies guest using Gmail and Twilio, while also rotating an Apaleo bearer token on a 58‑minute schedule.

## How it works
1. Triggers when Apaleo emits a reservation/unit-assigned event.
2. Retrieves the full reservation details from Apaleo using the reservation ID from the event.
3. Maps the reservation’s unit identifier to a Seam device ID and prepares the access window from the arrival and departure dates.
4. Creates an access code in Seam for the mapped device and reservation time window.
5. Updates the Apaleo reservation comment to store the generated PIN.
6. Fetches the reservation again via the Apaleo Booking API to get primary guest and booker contact details and sends the PIN via Gmail email and Twilio SMS.
7. Separately, runs every 58 minutes to request an Apaleo OAuth access token and PATCH an n8n credential so the Apaleo bearer token used for customer lookups stays current.

## Setup
1. Configure Apaleo OAuth2 credentials for the Apaleo trigger and reservation read/update actions, and ensure your Apaleo app has permission to read and patch reservations.
2. Add a Seam API credential (HTTP header auth) and replace the sample room-to-device mapping list with your real Apaleo unit IDs and Seam device IDs.
3. Add Gmail OAuth2 credentials and update the email sender details, subject, and template placeholders as needed.
4. Add Twilio credentials, set a valid Twilio “from” number, and confirm the workflow uses the correct guest phone field for your Apaleo data.
5. For token rotation, set the Apaleo client credentials Basic auth header, your n8n instance URL, and the credential ID to patch, and add an n8n API credential with permission to update credentials.

## 🔗 Nodes Used

HTTP Request, Twilio, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
