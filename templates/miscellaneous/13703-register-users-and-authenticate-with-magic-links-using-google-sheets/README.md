# 🔧 Register users and authenticate with magic links using Google Sheets

> ⚡ **11 views** · 🔧 [Miscellaneous](../)

## Description

This workflow implements a lightweight authentication system for n8n web portals using Google Sheets as a simple user and session store. It supports email-based registration, username and password login, one-click magic link authentication, and cookie-based session management.

How it works
1. Users register with an email address through a form.
2. The workflow generates a password and a one-time authentication token.
3. User credentials and token are stored in Google Sheets.
4. An email is sent with login credentials and a magic link.
5. Users can log in with username and password or click the magic link.
6. The /auth endpoint validates the token, creates a session id (sid), sets it as an HttpOnly cookie, and invalidates the token.
7. The /profile endpoint reads the sid cookie, verifies the session in Google Sheets, and displays a protected profile page.

Set up steps
- Create a Google Sheet with columns: username, password, role, token, sid.
- Replace YOUR_SPREADSHEET_ID with your Google Sheet ID in all Google Sheets nodes.
- Replace YOUR_DOMAIN with your n8n instance domain in redirect URLs and email links.
- Configure Gmail or SMTP credentials in the email node.
- Ensure your n8n instance is served over HTTPS so Secure cookies function correctly.

This template is suitable for small internal portals, admin dashboards, or proof-of-concept authentication systems built entirely within n8n.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
