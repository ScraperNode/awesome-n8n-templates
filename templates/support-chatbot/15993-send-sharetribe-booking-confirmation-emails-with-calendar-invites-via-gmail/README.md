# 💬 Send Sharetribe booking confirmation emails with calendar invites via Gmail

> ⚡ **7 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow listens for accepted booking updates in Sharetribe, fetches marketplace branding and transaction details, then sends a branded Gmail confirmation email to the customer with an attached .ics calendar invite.

## How it works
1. Triggers every minute by polling Sharetribe for booking update events.
2. Checks whether the booking state is `accepted` and stops if it is not.
3. Sets your marketplace URL and fetches marketplace details, branding colors, and email footer text from Sharetribe assets.
4. Merges the branding data with the booking event, then retrieves the full related Sharetribe transaction including listing and user fields.
5. Extracts the customer, provider, booking time, and marketplace fields and builds formatted plain-text and HTML fragments for the email body.
6. Renders the final HTML email, generates a `.ics` calendar invite from the booking start/end times, and sends the confirmation email via Gmail with the invite attached.

## Setup
1. Add Sharetribe OAuth2 credentials for the Sharetribe trigger and Sharetribe API steps.
2. Update the marketplace URL value used to build links to the booking page.
3. Add Gmail OAuth2 credentials and confirm the sender account used to send the confirmation email.
4. Verify the booking state value (`accepted`) and the asset keys used for branding color and footer text match your Sharetribe marketplace configuration.

## 🔗 Nodes Used

Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
