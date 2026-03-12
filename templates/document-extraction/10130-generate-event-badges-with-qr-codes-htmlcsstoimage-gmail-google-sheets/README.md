# 🔬 Generate event badges with QR codes, HTMLCSStoImage, Gmail & Google Sheets

> ⚡ **81 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Automated Event Badge Generator

Streamline your event registration process with this fully automated badge generation system. Perfect for conferences, seminars, corporate events, universities, and training programs.

## 🎯 What This Workflow Does

1. **Receives Registration Data** via webhook (POST request)
2. **Validates & Sanitizes** attendee information (email, name, role)
3. **Generates Unique QR Codes** for each attendee with scannable IDs
4. **Creates Beautiful HTML Badges** with gradient design and branding
5. **Converts to High-Quality PNG Images** (400x680px) via HTMLCSStoImage API
6. **Logs Everything** to Google Sheets for tracking and analytics
7. **Sends Personalized Emails** with badge attachment and event instructions
8. **Handles Errors Gracefully** with admin notifications

## ✨ Key Features

- **Professional Badge Design**: Gradient purple background, attendee photos (initials), QR codes
- **Automatic QR Code Generation**: Unique scannable codes for quick check-in
- **Email Delivery**: Personalized HTML emails with download links
- **Google Sheets Tracking**: Complete audit trail of all badge generations
- **Error Handling**: Admin alerts when generation fails
- **Scalable**: Process registrations one-by-one or in batches

## 🔧 Required Setup

### APIs & Credentials:
1. **HTMLCSStoImg API** - 
   - Sign up at https://htmlcsstoimg.com
   - Get API Key

2. **Gmail OAuth2**
   - Connect your Gmail account
   - Grant send permissions

3. **Google Sheets OAuth2**
   - Create a tracking spreadsheet
   - Add headers: Name, Email, Event, Role, Attendee ID, Badge URL, Timestamp
   - Connect via OAuth2

### Before Activation:
- Replace `YOUR_GOOGLE_SHEETS_ID` with your Google Sheet ID
- Replace `admin@example.com` with your admin email address
- Add all three credentials
- Test with sample data

## 📊 Use Cases

- **Conferences & Seminars**: Generate badges for 100+ attendees
- **Universities**: Student ID cards and event passes
- **Corporate Events**: Employee badges with QR check-in
- **Training Programs**: Course participant badges
- **Workshops**: Professional badges with role identification
- **Trade Shows**: Exhibitor and visitor badges

## 🎨 Customization Options

- **Badge Design**: Modify HTML/CSS for custom branding, colors, logos
- **QR Code Size**: Adjust dimensions for different use cases
- **Email Template**: Personalize welcome message and instructions
- **Role-Based Badges**: Different designs for VIP, Speaker, Staff, Attendee
- **Multi-Event Support**: Handle multiple events with different templates

## 📈 What You'll Track

- Total badges generated
- Attendee names, emails, roles
- Badge image URLs for reprints
- Generation timestamps
- Event names and dates

## ⚡ Processing Time

- **Average**: 5-8 seconds per badge
- **Includes**: Validation, QR generation, HTML rendering, image conversion, logging, email

## 🔒 Security Features

- Email format validation
- Continue-on-fail error handling
- Admin notifications on failures
- Secure credential storage

## 💡 Pro Tips

- Use a dedicated Gmail account for automation
- Monitor HTMLCSStoImg API limits
- Create separate sheets for different events
- Archive old data periodically
- Set up webhook authentication for production

## 🚀 Getting Started

1. Import this workflow
2. Add the three required credentials
3. Update Sheet ID and admin email
4. Test with sample registration data
5. Activate and integrate with your registration form

Perfect for event organizers, HR teams, universities, and anyone managing events with 10-1000+ attendees!

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
