# 📱 Send bulk email campaigns with Gmail/SMTP and Postgres reputation-safe timing

> ⚡ **375 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Overview
This workflow automates bulk email campaigns with built-in validation, deliverability protection, and smart send-time optimization.

It processes CSV leads, validates emails, enriches data, and schedules campaigns intelligently. Emails are sent using controlled inbox rotation, while engagement tracking and analytics continuously improve performance.

---

## How It Works

1. **Campaign Input**
   Receives campaign data and CSV leads via webhook.

2. **Lead Processing**
   Extracts CSV data, splits leads, and validates email format.

3. **Domain & Quality Checks**
   Verifies domains using MX records and filters invalid leads.

4. **Lead Enrichment**
   Adds timezone, domain type, and engagement score for better targeting.

5. **Lead Storage**
   Stores valid leads and separates invalid ones for tracking.

6. **Campaign Execution**
   Scheduler fetches active campaigns and selects top leads.

7. **Send Optimization**
   Calculates best send time per lead based on timezone and historical performance, while selecting inboxes within sending limits.

8. **Email Delivery**
   Waits until optimal time and sends emails using selected inbox.

9. **Tracking & Logging**
   Logs sent emails and updates inbox usage statistics.

10. **Event Tracking**
   Captures opens, clicks, replies, and bounces via webhook.

11. **Performance Analytics**
   Updates campaign stats and analyzes engagement trends.

12. **Continuous Optimization**
   Updates send-time rules to improve future campaign performance.

---

## Setup Instructions

- Connect webhook for campaign and CSV upload  
- Configure send limits, delays, and MX API  
- Set up Postgres with required tables  
- Connect Gmail or SMTP for sending  
- Configure event webhook for tracking  
- Enable campaign and analytics schedulers  
- Test with sample campaign before activating  

---

## Use Cases

- Running cold email campaigns at scale  
- Improving email deliverability and sender reputation  
- Automating lead validation and enrichment  
- Optimizing send times based on engagement data  
- Managing multi-inbox outbound systems  

---

## Requirements

- n8n instance with webhook support  
- Postgres database  
- Gmail or SMTP email account(s)  
- MX record lookup API (e.g., Google DNS)  
- Email tracking system or webhook integration  

---

## Notes

- Inbox rotation and throttling help prevent spam and protect reputation.
- Engagement-based lead scoring improves campaign performance.
- Send-time optimization is continuously refined using real data.
- You can extend this workflow with personalization or AI-generated emails.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Gmail, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
