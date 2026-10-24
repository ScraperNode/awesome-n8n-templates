# 🎣 Detect and email top job matches with RemoteOK, Arbeitnow, OpenAI, Gmail and PostgreSQL

> ⚡ **21 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow ingests job listings from RemoteOK and Arbeitnow, normalizes and enriches them with skills and quality scoring, stores unique opportunities in PostgreSQL, matches them to users, and sends personalized Gmail alerts with an OpenAI-generated summary.

## How it works
1. Runs every 2 hours to fetch job listings from the RemoteOK API and the Arbeitnow job board API.
2. Normalizes both job feeds into a consistent schema, merges them, extracts missing skills from titles/descriptions, and calculates a quality score plus a hash for deduplication.
3. Checks PostgreSQL for existing opportunities by job hash and inserts only new job records into the opportunities table.
4. Runs every 6 hours to load users and recent high-quality opportunities from PostgreSQL, generates all user–job pairs, and computes a fit score based on skills, location, experience, and job quality.
5. Filters and deduplicates matches above the threshold and upserts them into a PostgreSQL matches table with a notified flag.
6. Runs every 6 hours to find users with unnotified high-fit matches, selects each user’s top jobs, generates a short recommendation summary with OpenAI, and sends an HTML job alert email via Gmail.
7. Marks the user’s qualifying matches as notified in PostgreSQL to prevent repeat alerts.

## Setup
1. Create and configure a PostgreSQL database with users, opportunities, and matches tables (including a unique job_hash on opportunities and a unique (user_id, job_id) constraint on matches).
2. Add PostgreSQL credentials in n8n and update any table/column names in the SQL queries if your schema differs.
3. Add an OpenAI API credential and ensure the selected model (gpt-4o) is available to your account.
4. Add a Gmail OAuth2 credential, and ensure the sending mailbox is authorized to send emails to your users.
5. Review the scoring thresholds (quality_score >= 30 and fit_score >= 60), schedules (2h ingestion, 6h matching, 6h notifications), and the email template content before activating the workflow.

## 🔗 Nodes Used

HTTP Request, Postgres, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
