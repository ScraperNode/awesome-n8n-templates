# 🔧 Manage gym check-ins and subscriptions with Supabase, Google Sheets, and QR codes

> ⚡ **58 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/QyIalCCy6s8?si=Zlmde_oZz3qbDGwJ
Github Repo: https://github.com/blankarrayy/automated-gym-checkin-system

This workflow handles gym entry via QR codes by validating check-in requests against Supabase subscription data, logging entry attempts in Supabase, it also generates QR codes for check-in and registration and syncs new user IDs to Google Sheets.

## How it works
1. Receives a POST request on the `/gymcheckin` webhook with header authentication and an `entry_id` query parameter.
2. Looks up the `entry_id` in the Supabase `entry_logs` table to detect whether the QR code was already used.
3. If the `entry_id` is unused, extracts the user ID from the request body and fetches subscription records from the Supabase `gym_sub` table.
4. Validates that the user exists and has an active subscription, then writes an entry attempt record to the Supabase `entry_logs` table.
5. Returns a webhook response granting entry (200), rejecting unknown users (401), rejecting inactive subscriptions (401), or rejecting reused QR codes (409).
6. On the `/qr-for-gym-checkin` webhook, generates a new check-in QR code (pointing to the `/gymcheckin` URL with a random `entry_id`) and returns it as a binary image.
7. On the `/qr-for-new-account-registration` webhook, generates a registration QR code and returns it as a binary image, and on the `/account-creation` webhook it updates Supabase user subscription data and appends/updates the user ID and name in Google Sheets.

## Setup
1. Create Supabase API credentials in n8n and confirm the `gym_sub` and `entry_logs` tables (and fields like `entry_id`, `user_id`, `is_subscribed`, and `name`) match the workflow’s queries and inserts.
2. Add Google Sheets service account credentials, share the target spreadsheet with the service account email, and update the spreadsheet and sheet selection if you don’t use the included IDs.
3. Configure the HTTP Header Auth credential and include the required auth header when calling any of the webhooks.
4. Deploy the workflow and use the production webhook URLs in your QR code scanners and any signup/account-creation source that calls `/account-creation`.

## 🔗 Nodes Used

Webhook, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
