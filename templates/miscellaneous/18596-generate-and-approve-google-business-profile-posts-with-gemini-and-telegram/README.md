# 🔧 Generate and approve Google Business Profile posts with Gemini and Telegram

> ⚡ **26 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow onboards businesses from a website, stores client data in Google Sheets and assets in Google Drive, generates weekly Google Business Profile content with Google Gemini, and sends drafts to Telegram for approval while learning from vetoes.

## How it works
1. Runs a one-time manual setup to create a “Google Business Scaler” folder in Google Drive and a multi-tab “Google Business Scaler — Database” Google Sheets file.
2. Accepts new-client submissions via an n8n Form, crawls the client website (robots.txt, sitemap, and key pages), and compiles cleaned text for analysis.
3. Uses Google Gemini to synthesize a client knowledge base (tone, differentiators, audience, forbidden claims, and services) and saves it to the Clients, Identity, and Services tabs in Google Sheets, then notifies the client’s Telegram chat.
4. Runs every Monday at 8am, reads active clients and related rows (services, photos, promos, history, identity, learnings) from Google Sheets, and chooses one content item per client based on a priority cascade.
5. Uses Google Gemini to write the selected piece (promo post, photo caption, update post, or service description), logs it to the History tab, and marks photos as used when applicable.
6. Sends the draft to Telegram with Approve/Veto buttons or auto-approves it for autopilot clients, and updates the piece status in Google Sheets accordingly.
7. When a piece is vetoed in Telegram, uses Google Gemini to distill a checkable writing rule and stores it in the Learnings tab to constrain future pieces for that client.
8. Serves a Basic Auth-protected dashboard webhook that renders an HTML client overview from Google Sheets and lets you pause/resume clients or toggle autopilot vs approval mode.

## Setup
1. Connect Google Drive OAuth2 and Google Sheets OAuth2 credentials so the workflow can create folders/files and read/write the database spreadsheet.
2. Add a Google Gemini (PaLM) API credential for the onboarding synthesis, weekly writing, and veto-learning steps.
3. Create and connect a Telegram bot credential, and ensure each client has a valid Telegram chat ID for receiving approvals and notifications.
4. Run “Setup: Run once” to create the Drive folders and the “Google Business Scaler — Database” spreadsheet with all required tabs and headers.
5. Configure Basic Auth credentials for the dashboard webhook and open the dashboard URL to manage client status and publish mode.
6. Use the built-in forms to add clients (website URL required) and upload photos, which are stored in Google Drive and tracked in the Photos tab.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Telegram Trigger, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
