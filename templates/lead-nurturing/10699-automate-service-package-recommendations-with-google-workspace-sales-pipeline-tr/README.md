# 💬 Automate service package recommendations with Google Workspace sales pipeline tracking

> ⚡ **22 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# 💰 Package Recommender with Sales Pipeline Tracking

## What It Does
Automatically recommends the right service package based on budget, sends beautifully formatted proposal emails with case studies, logs everything to a sales pipeline tracker, and schedules your follow-up reminders. Converts inquiries into booked calls without manual proposal writing.

## How It Works
1. **Form Trigger** → Lead submits budget and challenge details
2. **Log to Pipeline** → All inquiry data saved to tracking sheet
3. **Budget Router** → Directs to Basic ($0-3K), Standard ($3-6K), or Premium ($6K+)
4. **Set Package Variables** → Loads appropriate features, pricing, case study
5. **Send Proposal Email** → Gorgeous HTML email with personalized package details
6. **Update Pipeline** → Marks "Package Sent" and sets follow-up date (+3 days)
7. **Calendar Reminder** → Creates event in 3 days reminding you to follow up

---

## 🚀 SETUP INSTRUCTIONS

### Step 1: Create Sales Pipeline Sheet
- Create Google Sheet with tab "Package Inquiries"
- Add columns: `Timestamp | Name | Email | Phone | Budget | Timeline | Challenge | Package Recommended | Package Price | Status | Date Sent | Follow-Up Date`
- Update `YOUR_GOOGLE_SHEET_ID` in nodes 2, 7, and calendar description

### Step 2: Customize Package Details
- Edit nodes 4, 5, 6 (Set Package Details nodes)
- Update pricing, features, and case studies for your services
- Replace booking links with your actual Calendly/scheduling URLs
- Adjust package names if needed

### Step 3: Configure Email Template
- Edit node 7 email design/branding
- Update "Your Name" and signature
- Customize colors (currently: purple gradient, green CTA)
- Test email rendering across devices

### Step 4: Setup Calendar Integration
- Add Google Calendar OAuth2 credentials
- Verify follow-up timing (currently +3 days)
- Customize reminder description with your workflow
- Update Google Sheet link in calendar event

## 🔗 Nodes Used

Google Sheets, Google Calendar, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
