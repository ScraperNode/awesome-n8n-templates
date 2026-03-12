# 📱 Hotel guest journey automation with Gmail & Google Sheets

> ⚡ **1,362 views** · 📱 [Social Media & Email Marketing](../)

## Description

**Automate your entire guest communication journey from booking to post-stay with personalized welcome emails, review requests, and daily operational reports.** Perfect for hotels, B&Bs, and short-term rental properties looking to enhance guest experience while reducing manual work and improving operational efficiency.

## How it works

1. **Pre-arrival welcome emails** - Automatically sends personalized welcome emails 1-2 days before guest check-in with reservation details, hotel amenities, and contact information
2. **Post-stay review requests** - Sends automated review request emails 24 hours after checkout with Google Reviews links and return guest discount codes  
3. **Daily staff reports** - Generates comprehensive arrival/departure reports every morning at 6 AM for front desk, housekeeping, and management teams
4. **Smart tracking** - Prevents duplicate emails by automatically updating tracking status in your Google Sheets database
5. **Professional templates** - Uses responsive HTML email templates that work across all devices and email clients

## Set up steps

1. **Connect Google Sheets** - Link your hotel reservation spreadsheet (must include columns for guest details, check-in/out dates, and email tracking)
2. **Configure Gmail account** - Set up Gmail credentials for sending automated emails
3. **Customize hotel information** - Update hotel name, contact details, and branding in the "Edit Fields" nodes
4. **Set staff email addresses** - Configure recipient addresses for daily operational reports
5. **Adjust timing** - Modify schedule triggers if you want different timing for emails and reports (currently set to every 6 hours for guest emails and 6 AM daily for staff reports)

**Time investment:** ~30 minutes for initial setup, then fully automated operation.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
