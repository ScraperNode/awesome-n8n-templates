# 👥 Onboard Nextcloud users with Gmail approvals, PostgreSQL, and Google Sheets

> ⚡ **5 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects account requests via an n8n form, checks PostgreSQL for existing users, and routes new requests to Gmail for admin approval. Approved users are provisioned in Nextcloud, synced to Google Sheets and PostgreSQL, and emailed credentials with a mobile login QR code.

## How it works
1. Receives a new account request from an n8n form with the user’s full name and email address.
2. Logs the request as “Pending Approval” in Google Sheets and checks PostgreSQL to see whether the email already exists.
3. If the user already exists, sends an “account already exists” notification to the requester via Gmail.
4. If the user is new, sends an approval email to an admin via Gmail (send-and-wait) and branches based on the admin’s approve/reject decision.
5. If rejected, writes the rejection to the PostgreSQL `users_rejected` table and emails the requester a rejection notice via Gmail.
6. If approved, creates a storage directory via SSH, generates a temporary password, saves the approved user to PostgreSQL, and updates the user’s status in Google Sheets.
7. Provisions the user in Nextcloud via the OCS API, generates and downloads a QR code for the Nextcloud mobile login deep link, and emails the requester their credentials with the QR image attached via Gmail.

## Setup
1. Configure credentials for PostgreSQL, Google Sheets OAuth2, Gmail OAuth2, Nextcloud API, and SSH (password-based) to match your environment.
2. Replace `YOUR_SPREADSHEET_ID`, the sheet/tab reference, and ensure the sheet has the expected columns (USER NAME, EMAIL ADDR., DATE, STATUS, and PASSWORD).
3. Update the admin email address, support contact details, and any email copy as needed in the Gmail steps.
4. Update the Nextcloud base URL/host headers and ensure the Nextcloud OCS provisioning endpoint is reachable with an account permitted to create users.
5. Adjust the SSH command path for the user storage directory to match your server filesystem and permissions.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, Gmail, SSH, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
