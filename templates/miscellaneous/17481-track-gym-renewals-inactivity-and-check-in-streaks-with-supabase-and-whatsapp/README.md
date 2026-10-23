# 🔧 Track gym renewals, inactivity, and check-in streaks with Supabase and WhatsApp

> ⚡ **37 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow runs daily to pull gym members from Supabase, calculate membership expiry and check-in activity, and send WhatsApp messages for renewal reminders, trainer inactivity alerts, and check-in streak milestone celebrations.

## How it works
1. Runs every day on a schedule.
2. Loads configuration values (gym name, Supabase table, WhatsApp phone number ID, renewal window, and inactivity threshold).
3. Fetches all member records from Supabase and calculates days until membership expiry, days since last check-in, and whether a new streak milestone is reached.
4. Sends a WhatsApp renewal reminder to members whose memberships expire within the configured window.
5. Sends a WhatsApp alert to the trainer when a member has been inactive longer than the configured threshold.
6. Sends a WhatsApp celebration message to members who hit a new streak milestone and updates the member record in Supabase to track the last milestone notified.

## Setup
1. Create a Supabase table (for example, "members") with fields for member_name, phone_number, membership_expiry, last_checkin_date, current_streak_days, and last_milestone_notified.
2. Add Supabase credentials in n8n and set the members table name in the configuration values.
3. Add WhatsApp Business Cloud credentials, then set your WhatsApp phone number ID and the trainer’s WhatsApp number in the configuration values.
4. Adjust the schedule time, renewal reminder days, and inactivity threshold to match your gym’s process.

## 🔗 Nodes Used

Supabase, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
