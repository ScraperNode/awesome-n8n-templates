# 🔬 Generate & deliver certificates with VerifiEmail & HTMLcsstoImg to Gmail

> ⚡ **209 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Automated Certificate Generator with Email Validation & Delivery

Automatically generate, validate, and deliver professional course completion certificates with zero manual work — from webhook request to PDF delivery in seconds.

---

## Overview

This workflow transforms certificate generation from a manual design task into a fully automated system. It receives certificate requests via webhook, validates recipient emails using advanced verification, generates beautifully designed HTML certificates, converts them to high-quality PNG images, delivers via professional email templates, and maintains complete audit trails in Google Sheets.

Powered by email validation APIs and HTML-to-image conversion, it ensures every certificate meets professional standards while preventing delivery to invalid or fraudulent email addresses.

---

## What This Workflow Does

- **Receives certificate requests** via webhook from your LMS, CRM, or custom application
- **Validates recipient emails** using VerifiEmail API with comprehensive checks:
  - RFC compliance verification
  - MX record validation
  - Disposable email detection
  - Spoof and fraud prevention
- **Generates professional certificates** with custom HTML/CSS templates featuring:
  - Purple gradient backgrounds with modern typography
  - Google Fonts integration (Playfair Display + Montserrat)
  - Gold achievement badges
  - Auto-generated unique certificate IDs
  - Formatted completion dates
  - Instructor signatures
- **Converts HTML to PNG** using HTMLcsstoImg API for permanent, shareable images
- **Delivers via email** with branded HTML templates including download links and LinkedIn sharing CTAs
- **Logs everything** to Google Sheets for reporting, analytics, and certificate verification
- **Handles errors** with automatic validation checks and optional Slack notifications

---

## Key Features

- **Zero Manual Work**: Fully automated from request to delivery
- **Advanced Email Validation**: Blocks invalid, temporary, and fraudulent email addresses
- **Professional Design**: Print-ready certificates with customizable branding
- **Unique Certificate IDs**: Auto-generated format: CERT-{timestamp}-{random}
- **Instant Delivery**: Certificates sent within seconds of completion
- **Complete Audit Trail**: All certificates logged with 10+ data points
- **Error Prevention**: Validation stops invalid requests before processing
- **Highly Customizable**: Easy to modify colors, fonts, layouts, and email templates
- **Scalable**: Handles hundreds of certificates per day
- **API-Ready**: RESTful webhook endpoint for easy integration

---

## Use Cases

**Educational Institutions**
- Automatically issue certificates for online courses and programs
- Generate graduation certificates for completed degrees
- Create participation certificates for workshops and seminars

**Corporate Training**
- Award compliance training certificates to employees
- Recognize professional development completions
- Issue skill certification for internal programs

**Online Course Platforms**
- Integrate with LMS systems (Teachable, Thinkific, Kajabi)
- Automate certificate delivery upon course completion
- Build certificate libraries for student portfolios

**Event Management**
- Issue attendance certificates for conferences and webinars
- Generate speaker appreciation certificates
- Create volunteer recognition certificates

**Certification Programs**
- Award professional certifications and credentials
- Generate CPE/CE certificates for continuing education
- Issue examination completion certificates

---

## Prerequisites

### Required Services & Accounts

- **n8n** (self-hosted or cloud) - Workflow automation platform
- **VerifiEmail Account** - Email validation API 
- **HTMLcsstoImg Account** - HTML to PNG conversion 
- **Gmail Account** - Email delivery via OAuth2 
- **Google Workspace** - For Sheets logging and tracking

### Required Credentials

1. VerifiEmail API Key
2. HTMLcsstoImg User ID + API Key
3. Gmail OAuth2 credentials
4. Google Sheets OAuth2 credentials

---

## Setup Instructions

### 1. Import the Workflow

1. Download the `certificate-generator.json` file
2. In n8n, navigate to **Workflows** → **Import from File**
3. Select the JSON file and click **Import**

### 2. Configure Credentials

#### VerifiEmail API

1. Sign up at https://verifi.email
2. Navigate to **Dashboard** → **API Keys**
3. Copy your API key
4. In n8n: **Settings** → **Credentials** → **Add Credential**
5. Search for "VerifiEmail"
6. Name: `VerifiEmail API`
7. Paste API key and save
8. Assign to "Verifi Email" node in workflow

#### HTMLcsstoImg API

1. Sign up at https://htmlcsstoimg.com
2. Go to **Dashboard** → **API**
3. Copy User ID and API Key
4. In n8n: **Credentials** → **Add Credential** → "HTMLcsstoImg"
5. Name: `HTMLcsstoImg API`
6. Enter User ID and API Key
7. Assign to "HTML/CSS to Image" node

#### Gmail OAuth2

1. In n8n: **Credentials** → **Add Credential** → "Gmail OAuth2"
2. Click **Connect my account**
3. Follow Google OAuth flow
4. Grant permissions: Send email
5. Name: `Gmail OAuth2`
6. Assign to "Send Certificate Email" node

#### Google Sheets OAuth2

1. Create new Google Sheet: **"Certificates Log"**
2. Add column headers in Row 1:
   - Certificate ID
   - Recipient Name
   - Course
   - Email
   - Completion Date
   - Generated At
   - Certificate URL
   - Status
   - Instructor
   - Duration
3. In n8n: **Credentials** → **Gmail OAuth2** (same as above works for Sheets)
4. Assign to "Log to Google Sheets" node
5. Select your "Certificates Log" spreadsheet
6. Select "Sheet1"

### 3. Activate Workflow

1. Click the **toggle switch** in top-right to activate
2. Copy the **Webhook URL** from "Certificate Request Webhook" node
3. Format: `https://your-n8n-instance.com/webhook/certificate-generator`

### 4. Configure Your Application

**For LMS Integration:**
```javascript
// When course is completed
fetch('https://your-n8n-instance.com/webhook/certificate-generator', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: student.fullName,
    course: course.title,
    date: new Date().toISOString().split('T')[0],
    email: student.email,
    instructor: course.instructor,
    duration: course.duration
  })
});
```

**For Zapier/Make.com:**
1. Trigger: Course completed
2. Action: Webhooks → POST
3. URL: Your webhook URL
4. Body: Map fields to JSON format

### 5. Test the Workflow

Send test request:
```bash
curl -X POST https://your-n8n-instance.com/webhook/certificate-generator \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "course": "Test Course",
    "date": "2025-10-04",
    "email": "test@gmail.com"
  }'
```

**Verify:**
- Email validation passes
- Certificate generated successfully
- Image created at HTMLcsstoImage
- Email delivered to inbox
- Entry logged in Google Sheets

---

## How It Works

1. **Webhook Trigger** → Receives POST request with certificate data
2. **Email Validation** → VerifiEmail checks RFC, MX records, disposable status
3. **Field Validation** → Ensures name, course, date present and email valid
4. **Data Combination** → Merges webhook data with validation results
5. **HTML Generation** → Creates styled certificate with dynamic content
6. **Image Conversion** → HTMLcsstoImg renders 1200x850px PNG
7. **Email Delivery** → Gmail sends professional template with download link
8. **Database Logging** → Google Sheets records all certificate details
9. **Error Handling** → Catches failures and stops invalid requests

**Processing Time:** 5-10 seconds per certificate

---

## API Reference

### Endpoint
```
POST /webhook/certificate-generator
Content-Type: application/json
```

### Required Fields
```json
{
  "name": "string",      // Full name of recipient
  "course": "string",    // Course or program name
  "date": "YYYY-MM-DD",  // Completion date
  "email": "string"      // Recipient email address
}
```

### Optional Fields
```json
{
  "instructor": "string",     // Instructor name (default: "Program Director")
  "duration": "string",       // Course duration (e.g., "40 hours")
  "certificateId": "string"   // Custom ID (auto-generated if not provided)
}
```

### Success Response
```json
{
  "success": true,
  "message": "Certificate generated and sent successfully",
  "certificateId": "CERT-1728000000-ABC123",
  "certificateUrl": "https://hcti.io/v1/image/xyz123"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Missing required fields: name, course, date, or valid email"
}
```

---

## Customization

### Certificate Design

Edit the "Generate HTML Certificate" Code node:

**Change Brand Colors:**
```javascript
// Background gradient
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);

// Border color
border: 3px solid #YOUR_BRAND_COLOR;
```

**Add Company Logo:**
```html
<div>
    <img src="https://your-domain.com/logo.png">
</div>
```

**Modify Fonts:**
```javascript
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
font-family: 'Your Font', sans-serif;
```

### Email Template

Edit the "Send Certificate Email" node message:

**Update Company Info:**
```html
<p>© 2025 Your Company Name</p>
<p>Contact: support@yourcompany.com</p>
```

**Change Header Color:**
```css
.header { 
    background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
```

### Certificate ID Format

In "Generate HTML Certificate" node:
```javascript
// Custom format: COURSE-YEAR-NUMBER
const certId = `${data.course.substring(0,3).toUpperCase()}-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`;
```

---

## Data Flow

```
Webhook → Email Validation → Field Validation → Combine Data
    ↓
Generate HTML → Convert to PNG → Send Email
    ↓
Log to Sheets → Success Response
    ↓
Error Handling (if failed)
```

---

## Expected Output

**PNG Certificate Includes:**
- Branded header with logo/company name
- Recipient name in large display font
- Course name and duration
- Formatted completion date
- Instructor signature section
- Unique certificate ID
- Gold achievement badge
- Professional borders and styling

**Google Sheets Entry:**
- Certificate ID
- Recipient details
- Course information
- Completion date and time
- Direct link to certificate image
- Status: "Sent"

**Email Notification:**
- Professional HTML template
- Personalized congratulations message
- Direct download button
- Certificate details table
- LinkedIn sharing encouragement

---

## Performance

- **Processing Time:** 5-10 seconds per certificate
- **Daily Capacity:** 250+ certificates (limited by free tier quotas)
- **Image Resolution:** 1200x850px (print-ready)
- **File Size:** ~200-400 KB per PNG
- **Email Delivery:** ~98% success rate

---

## Troubleshooting

**Webhook not receiving data**
- Verify webhook URL is correct
- Check n8n workflow is activated
- Ensure POST method is used
- Validate JSON format

**Email validation fails**
- Use real email domains (not example.com)
- Check VerifiEmail API quota
- Verify API credentials are correct
- Test with gmail.com addresses first

**Certificate not generating**
- Check required fields are present
- Verify date format is YYYY-MM-DD
- Review "Generate HTML Certificate" node logs
- Ensure HTMLcsstoImg API key valid

**Image conversion fails**
- Verify HTMLcsstoImg credits available
- Check HTML syntax is valid
- Review API response in execution logs
- Test HTML locally first

**Email not delivered**
- Confirm Gmail OAuth2 connected
- Check recipient email is valid
- Review spam/junk folders
- Verify Gmail daily limit not exceeded

**Google Sheets not updating**
- Re-authenticate Google Sheets OAuth2
- Verify spreadsheet permissions
- Check column names match exactly
- Ensure sheet exists and is accessible

---

## Best Practices

1. **Test with small batches** before production rollout
2. **Monitor API quotas** to avoid unexpected failures
3. **Use real email addresses** during testing (avoid disposable)
4. **Archive old certificates** periodically from Google Sheets
5. **Set up Slack notifications** for error monitoring
6. **Validate webhook payload** before sending
7. **Document customizations** for team reference
8. **Back up Google Sheets** regularly
9. **Review email deliverability** weekly
10. **Keep credentials secure** and rotate periodically

---

## Security Notes

- All API credentials encrypted in n8n
- Certificate URLs are publicly accessible via direct link
- Email validation prevents delivery to fraudulent addresses
- Webhook uses HTTPS for secure data transmission
- Google Sheets access controlled via OAuth2 permissions
- No sensitive data stored in workflow logs

---

## Future Enhancements

- PDF output option for formal certifications
- Multiple certificate templates (modern, classic, minimalist)
- QR code verification system
- Batch certificate generation
- Multi-language support
- Certificate revocation capability
- Analytics dashboard
- WhatsApp/SMS delivery option
- Integration with Notion/Confluence knowledge bases

---

## Support Resources

- [n8n Documentation](https://docs.n8n.io)
- [n8n Community Forum](https://community.n8n.io)
- [VerifiEmail Docs](https://verifi.email/docs)
- [HTMLcsstoImage API](https://htmlcsstoimage.com/docs)
- [Gmail API Reference](https://developers.google.com/gmail/api)
- [Google Sheets API](https://developers.google.com/sheets/api)

---

## License

This workflow template is provided as-is for free use and modification under the MIT License. Attribution appreciated but not required.

**Version:** 1.0.0  
**Last Updated:** October 2025  
**Compatibility:** n8n v1.0.0+

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
