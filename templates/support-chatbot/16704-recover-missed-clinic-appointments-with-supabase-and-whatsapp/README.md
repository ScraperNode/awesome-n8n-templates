# 💬 Recover missed clinic appointments with Supabase and WhatsApp

> ⚡ **106 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow runs every 15 minutes to find unprocessed clinic appointments in Supabase that are more than 30 minutes past their scheduled time and sends a WhatsApp Business template message to the patient to prompt rebooking, then flags the appointment so it is not messaged again.

## How it works
1. Runs every 15 minutes on a schedule.
2. Reads appointments from Supabase where the patient is not checked in and the no-show reminder has not been processed.
3. Filters the results to appointments that are at least 30 minutes past the scheduled appointment time.
4. Loops through each qualifying appointment and sends a pre-approved WhatsApp Business template to the patient’s phone number.
5. Updates the appointment record in Supabase to mark it as processed so it is not nudged again.

## Setup
1. Create a Supabase project with an `appointments` table (including `appointment_time`, `patient_phone`, `checked_in`, and `no_show_processed`) and ensure your booking system writes appointments into it.
2. Add a Supabase credential in n8n with access to the project and table used by the workflow.
3. Set up Meta WhatsApp Business Cloud API access in n8n (token/connection), then enter your WhatsApp phone number ID and an approved template name in the WhatsApp send step.
4. Confirm patient phone numbers in Supabase are stored in a WhatsApp-reachable format (for example, E.164) and adjust the schedule interval or grace-period logic if needed.

## 🔗 Nodes Used

Supabase, WhatsApp Business Cloud, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
