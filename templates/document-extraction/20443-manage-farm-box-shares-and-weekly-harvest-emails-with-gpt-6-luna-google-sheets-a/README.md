# 🔬 Manage farm box shares and weekly harvest emails with gpt-6-luna, Google Sheets and Gmail

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Farm box members change their plans, and someone has to catch every skip, pause and pickup swap before the next delivery. This [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflow takes each change request from a form, has gpt-6-luna classify it and draft the confirmation, logs it to Google Sheets and emails the member. It also sends the weekly harvest newsletter to active members every Thursday, and every Monday it emails friendly balance reminders plus a summary to the farm inbox.

*Last updated: October 2026.*

## Quick Overview
This workflow runs the admin side of a community supported agriculture (CSA) farm box share. A member submits the Box Change Request Form, the request is normalized and validated, gpt-6-luna classifies it (skip, pause, box size change, pickup change or other) and drafts a short confirmation that is logged to the Requests tab and emailed to the member, while an incomplete request goes to the farm inbox instead of being saved. Every Thursday at 07:00 a newsletter is written from the member roster and this week's harvest list and emailed to every active member with each send logged, and every Monday at 08:00 the balance sweep chases members with an amount due and reports the totals to the farm.

## How it works
1. A member submits the "Farm box change request" form with member name, member email, the change they want and an effective date.
2. Normalize Request maps those fields, stamps received_at and generates a request_id like REQ-20261005-123, then Validate Request checks member name, member email and request text are present.
3. If anything is missing, the request is not saved and Email Farm About Invalid Request emails the farm inbox listing the missing fields together with the values that were posted.
4. Valid requests go to Classify and Draft Reply, where gpt-6-luna sorts the request into skip_week, pause_membership, box_size_change, pickup_change or other, sets decision to confirmed or needs_review, and writes a subject and a body under 120 words. Parse Reply reads that JSON back onto the request.
5. Log Request to Register appends the request, the classification and the drafted reply to the Requests tab, then Email Confirmation to Member sends the reply to the member.
6. Every Thursday at 07:00 (Weekly Harvest Newsletter) the workflow reads the Members and Harvest tabs, collapses them into a member count and this week's harvest list, and Compose Harvest Newsletter has gpt-6-luna write a newsletter under 180 words with a storage tip per item.
7. Prepare Newsletter Email fans it out to every member whose share_status is not paused, Email Members the Newsletter sends it, and Build Newsletter Log plus Log Newsletter Sent record sent_at, week_of, recipient and subject in the NewsletterLog tab.
8. Every Monday at 08:00 (Weekly Balance Sweep) Read Member Balances reads the Members tab, Find Outstanding Balances keeps everyone with a balance_due above 0 and builds the reminder, and Email Balance Reminders sends it to each member.
9. The same sweep emails the farm one summary listing the members with an outstanding balance. When nobody owes anything, no email is sent.

## Setup
1. Create a Google Sheets spreadsheet with four tabs: Requests, Members, Harvest and NewsletterLog, with columns matching the fields written by the Google Sheets nodes.
2. Add credentials for Google Sheets OAuth2, Gmail OAuth2 and an [OI] chat model.
3. Fill the Members tab with your roster (member_name, member_email, share_status, balance_due) and the Harvest tab with this week's list (week_of, item, quantity).
4. Set the farm inbox in the Normalize Request node (farm_email) so invalid requests reach the right person.
5. Publish the Box Change Request Form and share the form link with members.
6. Confirm the Thursday 07:00 and Monday 08:00 schedules match your timezone, then activate the workflow.

### Quick Answers
**What happens when a member asks to skip a week?**
The submission is normalized and validated, gpt-6-luna classifies it as skip_week and drafts a confirmation that restates the change and the effective date, the request is appended to the Requests tab, and the member gets the confirmation email in the same run.

**What does gpt-6-luna do in this workflow?**
It does two jobs. On each box change request it classifies the request type, decides between confirmed and needs_review, and drafts the reply. Every Thursday it writes the harvest newsletter from this week's harvest list.

**Where does the newsletter content come from?**
From the Harvest tab. The workflow collapses this week's rows into a single list, gpt-6-luna writes the newsletter from that list only, and it goes to every member whose share_status is not paused.

**Who gets the balance reminders?**
Every member whose balance_due is above 0. Each gets a friendly reminder email, and the farm gets one summary listing the members with an outstanding balance.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
