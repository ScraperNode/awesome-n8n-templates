# 🔧 Send re-engagement emails to inactive users with Supabase, Claude and SMTP

> ⚡ **5 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow runs daily to find inactive users in Supabase, generates personalized re-engagement emails with Anthropic Claude using brand directions stored in an email_guidance table, sends the emails via SMTP, and updates the user record to prevent repeat sends.

## How it works
1. Runs every day at 9am on a schedule.
2. Reads the selected email guidance (three directions and a subject hint) from the Supabase email_guidance table based on the configured mail type.
3. Fetches up to 100 users from the Supabase users table who have been inactive longer than the configured number of days and have not been sent a re-engagement email.
4. Sends each user’s name and the three guidance directions to Anthropic Claude to generate a JSON response containing an email subject and body.
5. Parses Claude’s response, builds an HTML version of the email, and skips any users without an email address.
6. Sends the email via SMTP and, on successful delivery, updates the Supabase user record to set reengagement_sent to true and store the reengaged_at timestamp.

## Setup
1. Add Supabase credentials (host and service_role key) and ensure your database has a users table plus an email_guidance table with fields for mail_type, direction_1, direction_2, direction_3, and subject_hint.
2. Add an Anthropic (Claude) API key using HTTP Header Auth with the x-api-key header, and keep the required Anthropic version header as configured.
3. Add SMTP credentials for your email provider and set the fromEmail value in the workflow configuration.
4. Update the workflow configuration values (inactiveDays, mailType, and model) and confirm your users table includes email, name, last_active_at, reengagement_sent (and optionally reengaged_at) columns.

## 🔗 Nodes Used

Send Email, HTTP Request, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
