# 💬 Automated cold email campaigns with random templates & Google Sheets tracking

> ⚡ **1,311 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# 📊 Google Sheets Leads → 🎲 Random Templates → ✉️ Personalized Emails → 📝 Status Tracking

## What this workflow does

- 📊 Reads leads list from Google Sheets (Name, Email, Send Status)
- 🔍 Filters out already-contacted leads (skips "SENT" status)
- 🎲 Randomly selects email template from template library
- ✏️ Personalizes subject and body with lead's name
- 📧 Sends emails one-by-one with delays between sends
- ✅ Updates Google Sheet with send status and timestamp
- 🔁 Loops through all unsent leads automatically

## Why it's useful

- ⚡ Automate cold outreach without manual copy-paste
- 🎯 Avoid duplicate sends—tracks who's been contacted
- 📝 Rotate email templates for A/B testing and variety
- 👤 Personalization makes emails feel human, not spammy
- ⏱️ Built-in delays prevent spam flags and rate limits
- 📊 Full audit trail of who received what and when

## How it works

- 📊 Google Sheets (Leads) → reads Name, Email, Send Status
- 🚦 IF Node → filters leads where Send Status ≠ "SENT"
- 🔄 Loop Over Items → processes leads one-by-one
- 📧 Google Sheets (Templates) → fetches Subject + Body templates
- 🎲 Code Node → picks random template
- 🔀 Merge → combines lead data with template
- ✏️ Edit Fields → replaces [Name] with actual lead name
- 📨 Send Email → delivers personalized message
- ⏳ Wait → adds delay between sends (avoids spam flags)
- ✅ Google Sheets (Update) → marks as "SENT" with timestamp

## What you'll need

- 📊 Google Sheet #1: Leads (columns: Name, Email, Send Status, Time)
- 📧 Google Sheet #2: Templates (columns: Subject, Body)
- 📬 SMTP credentials (SendGrid, Mailgun, etc.)
- 🔐 Google Sheets OAuth

## Setup steps

- 📊 Create "Leads" sheet with columns: Name | Email | Send Status | Time
- 📧 Create "Templates" sheet with columns: Subject | Body (use [Name] placeholder)
- 🔗 Connect Google Sheets OAuth credentials
- 📬 Add SMTP email credentials
- 🧭 Update both Google Sheets node IDs to point to your sheets
- ⚙️ Set "From Email" in Send Email node
- 🧪 Test with 2-3 test leads first

## Customization ideas

- ⏱️ Adjust Wait time (30s-5min) to control send rate
- 📊 Add click tracking with UTM parameters
- 🔔 Send Slack/Telegram notification when campaign completes 
- 🎯 Add lead scoring—prioritize high-value leads first
- 📈 Log opens/replies to separate tracking sheet

## Who it's for

- 🧑‍💻 Freelancers doing cold outreach to agencies
- 📈 Sales teams running lead generation campaigns
- 🚀 Startups reaching out to potential customers
- 🎯 Marketers testing email copy variations
- 💼 Business developers nurturing prospect lists

## Quick Setup Guide

- Before You Start - What You Need:
📊 Google account for Sheets access
- 📧 SMTP email account (Gmail, custom domain, or email service)
- 📝 List of leads (names + emails)
- ✉️ Email templates ready (with [Name] placeholders)

## Want help customizing?

📧 anirpoke@gmail.com
🔗 LinkedIn

## 🔗 Nodes Used

Send Email, Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
