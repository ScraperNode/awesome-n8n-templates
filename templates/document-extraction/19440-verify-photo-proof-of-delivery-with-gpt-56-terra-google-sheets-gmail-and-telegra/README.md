# 🔬 Verify photo proof of delivery with gpt-5.6-terra, Google Sheets, Gmail and Telegram

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Proof of delivery that checks itself. This workflow collects driver submissions from an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form, matches each waybill against your Google Sheets deliveries register, verifies the uploaded photo with OpenAI vision (gpt-5.6-terra), and confirms the delivery or raises an exception through Gmail and Telegram.

*Last updated: September 2026.*

## Quick Overview
This workflow captures proof-of-delivery submissions via an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form, matches them against a Google Sheets deliveries register, verifies uploaded photos with OpenAI vision, logs outcomes to Google Sheets, and sends confirmations or exception alerts through Gmail and Telegram.

## How it works
1. Receives a driver submission from an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form with waybill/order number, recipient name, optional notes, and an optional delivery photo.
2. Normalizes the submission, generates a POD ID, and flags whether a usable photo file is attached.
3. If the waybill is missing, it emails the ops inbox via Gmail and posts an alert to Telegram, then stops processing.
4. Looks up the submitted waybill in a Google Sheets “Deliveries” register and, if not found, appends an “Unrecognized waybill” entry to a Google Sheets “PodLog” sheet and alerts ops via Gmail and Telegram.
5. If the waybill exists but no photo is provided, it logs a “no photo” exception to Google Sheets and notifies ops via Gmail and Telegram.
6. If a photo is provided, it sends the image and context to OpenAI (gpt-5.6-terra) to classify the proof as “ok” or “mismatch” and return a short summary.
7. When the photo is verified as ok, it updates the matching delivery row in Google Sheets to “Delivered,” logs the verified result to “PodLog,” emails the customer via Gmail, and posts a confirmation to Telegram.
8. When the photo is flagged as mismatch, it logs an exception to “PodLog” and alerts ops via Gmail and Telegram for manual review.

## Setup
1. Add credentials for Google Sheets OAuth2, Gmail OAuth2, Telegram Bot API, and OpenAI API.
2. Create (or update) a Google Sheets document with two tabs named “Deliveries” (including a waybill column and customer_name/customer_email/status/assigned_date fields) and “PodLog” (to store log_id, waybill, status, signal, recipient, notes, and timestamps).
3. Update the Google Sheets document ID (and sheet names if different) in all Google Sheets steps that read “Deliveries” and append to “PodLog.”
4. Set the ops notification targets by updating the Gmail recipient address(es) and the Telegram chat ID used for alerts.
5. For the form intake, publish the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form and share it with drivers (and ensure file uploads are enabled for images).

### Quick Answers
**What counts as valid proof of delivery?**
A photo that plausibly shows a delivery scene, such as a parcel, box, package, entrance, doorstep, or a person receiving goods. Blurry, black, or unrelated images like selfies, receipts, and screenshots get flagged for manual review.

**What happens when the waybill is unknown?**
An “Unrecognized waybill” row is appended to the PodLog sheet and ops is alerted via Gmail and Telegram.

**What if the driver forgets the photo?**
A “no photo” exception is logged to Google Sheets and ops is notified via Gmail and Telegram, so the delivery is not marked as done.

**When does the delivery row change?**
Only after the photo is verified as ok does the matching row in the Deliveries sheet get updated to “Delivered,” followed by a customer confirmation email and a Telegram post.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
