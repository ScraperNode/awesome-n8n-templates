# 💬 Automated email verification & onboarding with VerifiEmail, Gmail & Slack

> ⚡ **238 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Customer Onboarding Email Verification

Automated email verification and welcome email workflow that validates new user signups, prevents fake emails, and creates a seamless onboarding experience with real-time team notifications.

## Features

✅ Real-time email validation with VerifiEmail API  
✅ Automatic data sanitization (lowercase, trim whitespace)  
✅ Smart typo detection and correction suggestions  
✅ Disposable email domain blocking  
✅ Professional HTML welcome emails with responsive design  
✅ Automatic duplicate prevention in Google Sheets logging  
✅ Real-time Slack notifications for sales/marketing teams  
✅ MX record and SMTP deliverability checks  

## What You Need

### Required Accounts/APIs:

1. **VerifiEmail API** - For email validation ([verifi.email](https://verifi.email))
2. **Gmail account** (or SMTP server) - For sending welcome emails
3. **Google Sheets** - For logging verified users
4. **Slack workspace** - For team notifications (optional but recommended)

## Setup Instructions

1. **Create Google Sheet**
   - Create new spreadsheet named "Verified Users"
   - Add headers: Name | Email | Status | Verified At | Original Email | Validation Score

2. **Connect Credentials**
   - Add VerifiEmail API key in n8n credentials
   - Connect Gmail via OAuth2 (enable 2FA, generate app password if needed)
   - Connect Google Sheets via OAuth2
   - Connect Slack workspace via OAuth2

3. **Customize Email Template**
   - Open "Personalize Welcome Email" node
   - Replace "Your Company" with your brand name (appears 3 times)
   - Update CTA URLs:
     - `yourapp.com/dashboard` → Your actual dashboard URL
     - `yourapp.com/getting-started` → Your docs/guide URL
     - `yourapp.com/support` → Your support page URL
   - Modify colors: Purple gradient `#667eea` to `#764ba2` (line 37)

4. **Configure Slack Channel**
   - Create #new-signup channel in Slack (or use existing)
   - Update channel in "Team Notification" node

5. **Test Workflow**
   - Activate workflow
   - Copy webhook URL from Webhook node
   - Test with: `curl -X POST [webhook-url] -H "Content-Type: application/json" -d '{"name":"Test User","email":"test@gmail.com"}'`

6. **Integrate with Your Signup Form**
   - Point form submission to webhook URL
   - Ensure payload includes `name` and `email` fields

## Input Format

Send POST request to webhook with this JSON:

```json
{
  "name": "John Doe",
  "email": "johndoe@gmail.com"
}
```

The workflow handles various input formats (nested in `body` field, query params, etc.) and sanitizes automatically.

## Output

After execution, you'll get:

1. **Email validated** via VerifiEmail API with deliverability score
2. **Welcome email sent** to user with personalized greeting and CTAs
3. **User logged** to Google Sheets with timestamp and validation details
4. **Slack notification** sent to team with user details and status
5. **Invalid emails blocked** with typo correction suggestions prepared

### For Valid Emails (~85-90%):
- Professional HTML welcome email delivered
- Entry added to "Verified Users" sheet
- Real-time Slack alert to #new-signup channel

### For Invalid Emails (~10-15%):
- Workflow stops with error message
- No email sent (prevents bounces)
- Typo suggestion prepared (e.g., gmial.com → gmail.com)

## Customization

### Change Email Design:
Edit the "Personalize Welcome Email" node HTML:
- **Colors**: Change gradient in line 37: `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Logo**: Add `<img>` tag in header section
- **Buttons**: Modify CTA text and links in lines 45-65
- **Footer**: Update copyright year and company name

### Modify Validation Rules:
In "Prepare Correction Email" node, add more typo patterns:
```javascript
const commonTypos = {
  'gmial': 'gmail',
  'gmai': 'gmail',
  // Add your custom patterns:
  'yourdomain': 'yourcorrectdomain'
}
```

### Enable Correction Email Sending:
Replace "Stop and Error" node with Gmail "Send Email" node:
- Connect from "Prepare Correction Email"
- Use `{{ $json.email }}` as recipient
- Use `{{ $json.emailBody }}` as message
- User receives helpful correction suggestion instead of silent failure

### Add More Notification Channels:
After "Log Valid Users" node, add:
- Discord webhook for team notifications
- Microsoft Teams connector
- Email to sales@ or support@
- Custom webhook to your CRM

### Log Invalid Attempts:
Add Google Sheets node after "Prepare Correction Email":
- Create "Invalid Attempts" tab in same spreadsheet
- Log: Name, Email, Reason, Suggestion, Timestamp
- Analyze patterns weekly for form improvements

## Troubleshooting

**"undefined" error in Data Sanitization:**
- Check webhook payload structure
- Verify `name` and `email` fields are present
- Test with the debug code provided in sticky notes

**All emails marked as invalid:**
- Verify VerifiEmail API key is active
- Test API directly at verifi.email dashboard

**Welcome emails not sending:**
- Confirm Gmail OAuth2 is connected (check for expired tokens)
- Verify sending limits not exceeded
- Check spam folder if testing with personal email
- Review Gmail "Sent" folder for delivery confirmation

**No Slack notifications:**
- Verify OAuth2 connection is active
- Check bot has permission to post in #new-signup channel
- Confirm channel ID is correct
- Test Slack credentials in n8n

**Duplicate entries in Google Sheets:**
- Verify "Email" is set as matching column
- Confirm operation is "Append or Update" not just "Append"
- Check Sheet1 has the exact column names expected

**High validation failure rate:**
- Review invalid emails in execution logs
- Check for form submission issues (bots, testing)
- Verify VerifiEmail API is not blocking legitimate domains

## Performance Optimization

For high-volume signups (&gt;100/day):
- Switch Slack notifications to hourly digest
- Implement rate limiting on webhook
- Consider caching frequent domain validations
- Use Google Workspace for higher email sending limits

## Maintenance

**Weekly:**
- Check VerifiEmail API usage and quota
- Review Slack notifications for anomalies
- Scan Google Sheets for data quality
- Test with sample signup

**Monthly:**
- Archive old Google Sheets data (&gt;90 days)
- Review invalid email patterns
- Update email template if needed
- Audit credential security

## Support

For issues or questions, visit the [n8n community forum](https://community.n8n.io).

---

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
