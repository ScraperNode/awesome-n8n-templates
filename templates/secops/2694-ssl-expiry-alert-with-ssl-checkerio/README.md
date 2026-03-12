# 🔒 Ssl expiry alert with SSL-Checker.io

> ⚡ **16,782 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Use Case

Managing SSL certificates manually can be time-consuming and error-prone, often leading to unexpected downtime or security risks due to expired certificates.

## What This Workflow Does

This workflow automatically monitors SSL certificates for a list of websites, checks their expiry status using SSL-Checker.io, and sends timely notifications if a certificate is about to expire.

## Setup
Add your credentials for Google Sheets, Gmail, and SSL-Checker.io.

Create a Google Sheet with a list of URLs for the websites you want to monitor.

Configure the workflow to check the SSL status weekly.

Set up email notifications to alert you when a certificate is close to expiry.

Activate the workflow to automate monitoring and notification.

## How to Adjust It to Your Needs

- Customize the URL Source: Replace Google Sheets with another data source like Airtable or CSV files.
- Modify Notification Thresholds: Change the expiry threshold (e.g., notify for 14 days instead of 7).
- Add Additional Actions: Integrate with tools like Slack or Teams for team-wide notifications.
- Automate Renewal Requests: Add a step to send renewal requests directly to your SSL provider if a certificate is nearing expiry.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
