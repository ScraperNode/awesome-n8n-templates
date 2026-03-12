# 📱 Email newsletter system with SendGrid, Google Sheets & freemium rate limiting

> ⚡ **83 views** · 📱 [Social Media & Email Marketing](../)

## Description

A complete email campaign automation system featuring dual-mode access control (Demo/Pro), usage tracking, and professional email delivery. Perfect for SaaS products, marketing agencies, or anyone building newsletter tools with freemium models.

**WHAT IT DOES**
This workflow manages email newsletter campaigns with built-in rate limiting for free users and unlimited access for premium users. It automatically tracks daily usage, manages user data in Google Sheets, delivers emails via SendGrid, and sends real-time notifications through Telegram.

**KEY FEATURES**
- Dual-Mode System: Demo mode (5 emails/day) and Pro mode (unlimited)
- Smart Rate Limiting: Automatic daily counter reset
- User Management: Automatic new user registration and tracking
- Google Sheets Integration: Stores user data, send counts, and usage history
- Professional Email Delivery: SendGrid integration for reliable sending
- Real-Time Monitoring: Telegram notifications for every send
- Ready-to-Use Templates: 4 professional email designs included (Modern, Professional, Promotional, Newsletter)
- Live Preview: See exactly how emails look before sending
- HTML Export: Copy email HTML for use in any platform

**HOW IT WORKS**
1. User accesses the Email Newsletter Builder web form
2. Designs email using one of 4 professional templates
3. Chooses Demo or Pro mode
4. Webhook receives the email data and configuration
5. Workflow checks mode (Demo/Pro)
6. For Demo mode:
   - Queries Google Sheets for user email
   - Checks if user exists and validates daily limit (&lt;5 sends)
   - If new user: Creates database entry
   - If existing user + under limit: Increments counter
   - If limit reached: Returns error message
7. For Pro mode: Sends immediately without limits
8. SendGrid delivers the email
9. Google Sheets updates with new send count and timestamp
10. Telegram notification sent to admin
11. Success/error response returned to user

**SETUP REQUIREMENTS**
1. Google Sheets account (free)
2. SendGrid account (free tier: 100 emails/day)
3. Telegram account + bot (free)
4. n8n instance (self-hosted or cloud)

**SUPPORT & FEEDBACK**
Questions or issues? Connect with me on [LinkedIn](https://www.linkedin.com/in/gilbert-onyebuchi/)
Want to see it in action? Try the live demo: [Click here](https://sites.google.com/view/template-n8n/email-newsletter)

⭐ If you find this workflow helpful, please give it a rating and share your feedback!

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, SendGrid

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
