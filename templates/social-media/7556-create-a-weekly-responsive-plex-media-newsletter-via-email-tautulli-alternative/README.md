# 📱 Create a weekly responsive Plex Media newsletter via email (Tautulli alternative)

> ⚡ **829 views** · 📱 [Social Media & Email Marketing](../)

## Description

📬 Plex Recently Added → Responsive Email Newsletter (Tautulli Alternative)

What it is

This workflow automatically creates a weekly Plex newsletter that highlights recently added Movies & TV Shows. It’s designed to be mobile-friendly and Gmail/iOS Mail compatible, making it easy to share Plex updates with friends, family, or your community.

How it works
	•	⏰ Runs on a weekly schedule (customizable).
	•	🎬 Fetches recently added Movies & TV Shows from Tautulli API.
	•	📰 Builds a responsive HTML newsletter that works in Gmail, iOS Mail, and most clients.
	•	📧 Sends one personalized email per recipient via SMTP.
	•	🗒️ Every node has a Sticky Note explaining setup and purpose.

How to set up
	1.	Replace the placeholders in the nodes with your own details:
	•	YOUR_TAUTULLI_URL
	•	YOUR_API_KEY
	•	YOUR_PLEX_TOKEN
	•	YOUR_PLEX_SERVER_ID
	2.	Update the recipient list in Prepare Emails for Recipients.
	3.	Add your SMTP credentials in Send Newsletter Emails.
	4.	(Optional) Customize the HTML/CSS in Generate HTML Newsletter.

Requirements
	•	Plex Media Server with Tautulli installed.
	•	SMTP account (Gmail, custom domain, etc.).

Customization
	•	Change the schedule to daily/weekly as needed.
	•	Edit the HTML template for your own branding.
	•	Extend with additional nodes (Discord, Slack, etc.).

⸻

⚡ Workflow Overview:

``⏰ Schedule Trigger → 🎬 Fetch Movies → 📺 Fetch TV → 🔗 Merge → 📰 Build HTML → 📧 Prepare Recipients → 📤 Send → ✅ Finish
``

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
