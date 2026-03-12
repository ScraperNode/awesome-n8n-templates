# 🎣 Discover GitHub developers with Hunter.io email lookup & Google Sheets CRM sync

> ⚡ **27 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow automatically discovers developers on GitHub, enriches their data with email addresses, removes duplicates, and saves everything into a structured Google Sheets CRM. No manual searching, copying, or data cleaning required.

It’s perfect for recruiter teams, SaaS founders, agencies, and outbound marketers who need fresh developer leads every day without spending hours on GitHub.

## How It Works

This automation is divided into 3 clear stages:

1. Find Developers on GitHub. The workflow runs on a schedule (daily/hourly).

2. Enrich Developer Data with Emails. The workflow checks if a developer already has an email. If not, it automatically uses Hunter.io to find a professional email address.

3. Remove Duplicates & Save to Google Sheets

## What You Get

- Automatic developer sourcing

- Email enrichment using Hunter.io

- Built-in duplicate detection

- Clean, enriched data you can use instantly for outreach

## What You Need

- GitHub API 

- Hunter.io API key 

- Google Sheets connection

- n8n (self-hosted or cloud)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
