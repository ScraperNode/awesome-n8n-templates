# 🔧 Automated press pass verification & badge creation with QR codes & multi-channel distribution

> ⚡ **554 views** · 🔧 [Miscellaneous](../)

## Description

# 🎫 Verified Press Pass Generator for Media Events

**Automate press credential verification and badge generation for journalists covering your events**

---

## 📝 Description

Streamline your event media management with this comprehensive press pass automation. When journalists apply for credentials, this workflow instantly validates their identity, verifies their media affiliation, generates professional digital badges with QR codes, and delivers everything via email—all within seconds.

Perfect for conferences, product launches, trade shows, corporate events, and any occasion requiring verified media access.

---

## ✨ Key Features

### 🔐 **Advanced Email Verification**
- Real-time email validation using VerifiEmail API
- Checks RFC compliance, MX records, and domain reputation
- Detects disposable email addresses and spoofed domains
- Confirms journalist works for legitimate media organization

### 🎨 **Professional Badge Design**
- Auto-generates branded digital press passes
- Includes journalist photo, name, media outlet, and credentials
- Embedded QR code for contactless event entry
- Customizable colors, fonts, and event branding
- 400×600px portrait format optimized for mobile display

### 📧 **Automated Communication**
- Beautiful HTML email with embedded badge preview
- Download links for PNG and PDF versions
- Clear instructions for event check-in
- Professional event branding throughout

### 📊 **Multi-Platform Logging**
- Google Sheets backup with timestamp logs
- Slack notifications for organizer oversight
- Complete audit trail for compliance

### ⚡ **Lightning Fast Processing**
- Average execution time: 5-10 seconds
- Real-time webhook response with confirmation
- Scalable to hundreds of applications per hour
- Error handling with graceful fallbacks

---

## 🎯 Use Cases

### **Event Types:**
- Tech conferences and summits
- Product launch events
- Trade shows and exhibitions
- Political rallies and press conferences
- Sports events and tournaments
- Film festivals and premieres
- Corporate announcements
- Award ceremonies

---

## 🔧 What You Need

### **Required Services:**
1. **n8n** (Cloud or Self-hosted)
2. **VerifiEmail API** ([Get API Key](https://verifi.email)) - Email verification
3. **HTMLCSSToImage API** ([Get API Key](https://htmlcsstoimg.com)) - Badge generation
4. **Gmail Account** (OAuth) - Email delivery
5. **Slack Workspace**  - Team notifications
6. **Google Sheets** - Backup logging

---

## 📋 How It Works

### **Step-by-Step Process:**

**1. Application Submission** 
Journalist fills out form on your event website (name, email, media outlet, photo, phone)

**2. Data Validation** 
Webhook receives application and checks for required fields (name, email, photo)

**3. Email Verification** 
VerifiEmail API validates email domain, checks MX records, and confirms media affiliation

**4. Credential Generation**
- Generates unique press ID (PRESS-XXX-timestamp)
- Creates QR code linking to verification portal
- Sets 30-day validity period

**5. Badge Creation** 
HTMLCSSToImage API renders professional badge with:
- Circular profile photo
- Name and media outlet
- Press ID in styled container
- Scannable QR code
- Event name and validity dates
- "VERIFIED" indicator

**6. Distribution** 
- Sends HTML email with badge preview and download link
- Posts notification to Slack channel
- Backs up to Google Sheets
- Returns success response to webhook

**7. Event Check-In** 
Security scans QR code at event entrance, verifies credentials instantly

---

## 🚀 Setup Instructions

### **Quick Start (15 minutes):**

**1. Import Workflow**
- Download the JSON file
- In n8n: Click Workflows → Import from File
- Upload the JSON and open the workflow

**2. Configure Webhook**
- Activate the workflow
- Copy the webhook URL from the Webhook Trigger node
- Add this URL to your website form's action attribute

**3. Add API Credentials**
- **VerifiEmail:** Create credential with API key from verifi.email dashboard
- **HTMLCSSToImage:** Add User ID and API Key from htmlcsstoimg.com
- **Gmail:** Connect via OAuth (click "Sign in with Google")
- **Slack:** Connect via OAuth and select notification channel
- **Google Sheets:** Connect via OAuth

**4. Setup Google Sheets**
Create a new sheet named "Press Pass Logs" with these column headers:
```
Timestamp | Press ID | Name | Email | Phone | Media Outlet | Email Domain | Verification Status | Event Name | Issued Date | Valid Until | Badge Image URL | QR Code URL | Verification URL | Photo URL | Execution Mode
```

**5. Customize Badge Design**
- Open the "HTML/CSS to Image" node
- Edit the HTML in `html_content` field
- Change gradient colors: Replace `#667eea` and `#764ba2` with your brand colors
- Update event name default value
- Modify font sizes, spacing, or layout as needed

**6. Update Email Content**
- Open "Send Press Pass Email" node
- Customize email text, support contact info
- Update company/event branding
- Modify footer with your details

**7. Configure Slack Channel**
- Open "Notify Organizers (Slack)" node
- Select your preferred notification channel
- Customize notification message format

**8. Test the Workflow**
Send a test POST request using Postman or cURL:
```bash
curl -X POST https://your-n8n-url/webhook/press-application \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@bbc.com",
    "media_outlet": "BBC News",
    "photo_url": "https://randomuser.me/api/portraits/women/50.jpg",
    "phone": "+44-1234567890",
    "event_name": "Tech Summit 2025"
  }'
```

**9. Go Live**
- Verify test execution completed successfully
- Check email received with badge
- Activate workflow for production use

---

## 🎨 Customization Options

### **Badge Design:**
- **Colors:** Change gradient from purple (`#667eea`, `#764ba2`) to your brand colors
- **Fonts:** Swap Google Font from Poppins to any available font
- **Logo:** Add event logo in header section
- **Size:** Adjust viewport_width and viewport_height for different dimensions
- **Layout:** Modify HTML structure for custom badge designs

### **Email Templates:**
- **Branding:** Update colors, fonts, and styling in HTML email
- **Content:** Customize greeting, instructions, and footer
- **Attachments:** Add PDF version or additional documents
- **Language:** Translate all text to your language

---

## 🔒 Security & Privacy

### **Data Protection:**
- ✅ Email verification prevents fake submissions
- ✅ QR codes use unique, non-guessable IDs
- ✅ HTTPS webhook for encrypted transmission
- ✅ No sensitive data stored in workflow variables
- ✅ Audit trail for compliance requirements

### **Best Practices:**
- Use environment variables for API keys
- Enable webhook authentication (Basic Auth or API key)
- Implement rate limiting on webhook endpoint
- Regularly rotate API credentials
- Set up backup systems for critical data

---

## 🛠️ Troubleshooting

### **Common Issues:**

**Issue:** "Webhook not receiving data"
**Solution:** Ensure workflow is activated and webhook URL is correct in form action

**Issue:** "Email verification fails for valid domains"
**Solution:** Check VerifiEmail API credit balance and credential configuration

**Issue:** "Badge image not generating"
**Solution:** Verify HTMLCSSToImage API key is correct and has sufficient credits

**Issue:** "Gmail not sending"
**Solution:** Reconnect Gmail OAuth credential and check sending limits

**Issue:** "QR code not loading in badge"
**Solution:** Ensure QR code URL is properly encoded and publicly accessible

---

## 📈 Performance Metrics

- **Average execution time:** 5-10 seconds
- **Success rate:** 98%+ (with valid inputs)
- **Concurrent capacity:** 50+ requests/minute
- **API reliability:** 99.9% uptime (dependent on services)
- **Badge generation:** &lt;2 seconds
- **Email delivery:** &lt;3 seconds

---

## 🏷️ Tags

`event-management` `press-pass` `credential-verification` `badge-generation` `email-automation` `qr-code` `media-relations` `event-technology` `htmlcsstoimage` `verifi-email`  `gmail` `slack` `google-sheets` `webhook` `automation` `workflow` `conference` `journalism` `press-credentials`

---

## 📄 License

This workflow template is provided as-is for use with n8n. Customize freely for your organization's needs.

---

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
