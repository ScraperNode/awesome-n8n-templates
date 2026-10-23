# 🔧 Verify phone numbers via SMS Vert Pro OTP and log verified numbers to Google Sheets

> ⚡ **1 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow exposes two webhook endpoints to send and verify one-time SMS codes using the SMS Vert Pro MCP server, and logs successfully verified phone numbers to Google Sheets.

## How it works
1. Receives a POST request on `/sms-otp/send` or `/sms-otp/verify` to start an OTP send or verification action.
2. Normalizes the submitted phone number, validates it against allowed country codes, and (for verification) validates that the code is a 6-digit number.
3. Returns a 400 response if the request is invalid.
4. For send requests, calls SMS Vert Pro MCP `generate_otp` to send a one-time code by SMS and returns either a 200 success or an error response (including 429 when a recent code already exists).
5. For verification requests, calls SMS Vert Pro MCP `verify_otp` to validate the code and returns a 401 response if the code is wrong or expired.
6. When the code is valid, appends the phone number and a verification timestamp to Google Sheets and returns a 200 “verified” response.

## Setup
1. Create a Bearer Auth credential with your SMS Vert Pro API V2 token and select it for the two SMS Vert Pro MCP calls.
2. Create a Google Sheets spreadsheet with `phone` and `verified_at` columns and connect your Google Sheets credentials.
3. In the OTP settings, set the sender name, Google Sheet URL, default country code, and the allowed country codes list.
4. Activate the workflow, copy the production webhook URLs for `/sms-otp/send` and `/sms-otp/verify`, and configure your sign-up or checkout form to call them.

## 🔗 Nodes Used

Google Sheets, Webhook, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
