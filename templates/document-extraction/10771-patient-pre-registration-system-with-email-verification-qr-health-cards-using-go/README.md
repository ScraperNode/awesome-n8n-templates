# 🔬 Patient pre-registration system with email verification & QR health cards using Google Drive

> ⚡ **176 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Automated Email Verification & Digital Health Card Generator

### **Overview**
Transform your clinic's patient check-in process with this fully automated pre-registration system. When patients submit their appointment information through your website, this workflow instantly verifies their email, generates a professional digital health card with a scannable QR code, stores it securely in Google Drive, and sends personalized notifications to both the patient and your reception team—all in under 20 seconds.

### **What This Workflow Does**

This comprehensive automation handles the entire patient pre-check-in journey:

1. **Receives Patient Data** - Webhook captures form submissions from your website or app with patient details (name, email, phone, appointment date/time, symptoms, age, gender)

2. **Validates & Cleans Data** - Automatically validates required fields, cleans input data, and generates a unique patient ID with timestamp for tracking

3. **Verifies Email Address** - Uses VerifiEmail API to ensure email deliverability by checking RFC compliance, MX records, and filtering out disposable/spoof emails

4. **Generates QR Code** - Creates a unique verification URL and scannable QR code for instant patient identification at reception

5. **Builds Professional Health Card** - Generates a beautiful, responsive HTML health card featuring:
   - Patient information grid (name, ID, email, phone, age/gender, appointment)
   - Chief complaints/symptoms section
   - Embedded QR code for quick check-in
   - Important appointment instructions
   - Modern gradient design with mobile-responsive layout

6. **Converts to PNG Image** - Uses HTMLCSSToImg API to convert the HTML card into a high-quality PNG image (900x1200px)

7. **Stores in Google Drive** - Uploads the health card to an organized "Patients record" folder with patient ID-based naming for easy retrieval

8. **Emails Patient** - Sends a beautifully formatted email to the patient containing:
   - Their health card as a PNG attachment
   - Appointment details and confirmation
   - Google Drive link for backup access
   - Check-in instructions and preparation tips

9. **Notifies Reception Team** - Sends real-time Slack message to clinic reception with patient details, verification status, and Drive link

10. **Logs to Database** - Records complete patient information, timestamps, verification status, and file links in Google Sheets for tracking and analytics

11. **Returns Success Response** - Sends JSON response back to the website form with patient ID, confirmation, and Drive link

---

### **Key Features**

✅ **Email Verification** - VerifiEmail API integration prevents failed deliveries and fake emails  
✅ **Unique Patient IDs** - Timestamp-based IDs ensure no duplicates (format: PAT-{timestamp}-{random})  
✅ **QR Code Generation** - Free QR Server API creates scannable codes for instant check-in  
✅ **Professional Design** - Modern, gradient-styled health cards with responsive layout  
✅ **Multi-format Output** - PNG image format for easy viewing on any device  
✅ **Cloud Storage** - Secure Google Drive storage with organized folder structure  
✅ **Multi-channel Notifications** - Email to patient + Slack to staff for complete coverage  
✅ **Comprehensive Logging** - Google Sheets database for analytics and record-keeping  
✅ **Error Handling** - Graceful failure for invalid emails with user notification  
✅ **Webhook Response** - Real-time feedback to website form for seamless UX  
✅ **Indian Locale Support** - Date/time formatting in Indian format with 12-hour time  
✅ **Mobile Responsive** - Health cards look great on both desktop and mobile devices

---

### **Perfect For**

🏥 **Medical Clinics & Healthcare Providers** - Streamline patient pre-registration and reduce waiting times  
🦷 **Dental Practices** - Digital check-in for appointments with patient history  
💉 **Diagnostic Centers** - Pre-appointment verification for lab tests and scans  
👨‍⚕️ **Specialist Doctors** - Organized patient records with symptoms documentation  
🏃 **Physiotherapy Clinics** - Track patient visits and treatment history  
💆 **Wellness Centers & Spas** - Appointment management with customer details  
🐕 **Veterinary Clinics** - Pet owner pre-registration system  
📋 **Any Appointment-Based Business** - Adaptable to salons, consultancies, or service providers

---

### **Business Benefits**

💰 **Reduced No-Shows** - Email verification ensures valid contact information  
⏱️ **Time Savings** - Eliminates manual data entry at reception  
📊 **Better Analytics** - Automated logging provides insights into patient flow  
✨ **Professional Image** - Modern, branded health cards improve patient experience  
🔒 **Secure Records** - Cloud storage with organized folder structure  
📱 **Contactless Check-in** - QR codes enable touch-free reception process  
🎯 **Improved Communication** - Multi-channel notifications keep everyone informed  
🚀 **Scalable System** - Handles high volumes without additional staff

---

### **Required Services & Credentials**

1. **VerifiEmail API** - Email verification service  
   - Sign up at: https://verifi.email  

2. **HTMLCSSToImg API** - HTML to image conversion  
   - Sign up at: https://htmlcsstoimg.com  

3. **Google Drive** - Cloud file storage  
   - Requires: Google Account with Drive access  

4. **Gmail** - Email delivery  
   - Requires: Google Account  

5. **Slack** - Team notifications  
   - Requires: Slack workspace  

6. **Google Sheets** - Database logging  
   - Requires: Google Account  

---

### **Customization Options**

**Change Health Card Design:**
- Edit the "Build Health Card HTML" node
- Modify CSS styles, colors, layout, fonts
- Add clinic logo by including `<img>` tag in header

**Adjust Email Template:**
- Edit the "Email Health Card to Patient" node
- Customize subject line, message content, styling
- Add clinic branding and contact information

**Modify Slack Message:**
- Edit the "Notify Reception Team" node
- Change message format, add emojis, include additional fields
- Integrate with different channels

**Add PDF Generation:**
- Insert an additional HTTP Request node after "Build Health Card HTML"
- Use a PDF conversion API (like PDFMunk or Puppeteer)
- Upload both PNG and PDF to Google Drive

**Add SMS Notifications:**
- Insert Twilio or similar SMS node after email verification
- Send appointment confirmation via SMS
- Include patient ID and appointment time

**Multi-language Support:**
- Modify the HTML template to support multiple languages
- Add language detection based on patient input
- Translate email and Slack messages

---

### **Troubleshooting Guide**

**Email Verification Fails:**
- Check VerifiEmail API key is correct
- Verify API quota hasn't been exceeded
- Test with known valid email address

**Image Generation Fails:**
- Check HTMLCSSToImg API credentials
- Verify HTML content is valid (no syntax errors)
- Check API rate limits

**Google Drive Upload Fails:**
- Re-authenticate Google Drive OAuth2 credentials
- Check folder permissions
- Verify folder ID is correct

**Email Not Sending:**
- Re-authenticate Gmail OAuth2 credentials
- Check email attachment size limits
- Verify "Less secure app access" if using password auth

**Slack Message Not Posting:**
- Check Slack app permissions
- Verify channel exists and bot is invited
- Re-authenticate Slack credentials

**Google Sheets Not Logging:**
- Re-authenticate Google Sheets credentials
- Verify sheet name and column headers match exactly
- Check sheet permissions

---

### **Performance & Scalability**

**Expected Performance:**
- Single execution: 15-20 seconds
- Concurrent executions: Supports multiple parallel workflows
- API rate limits: Respects all third-party API limits

**Volume Handling:**
- Small clinics: &lt;50 patients/day - Perfect
- Medium practices: 50-200 patients/day - Excellent
- Large hospitals: 200+ patients/day - Consider API tier upgrades

---

### **Security & Compliance**

✅ **Data Privacy** - Patient data transmitted securely via HTTPS  
✅ **Access Control** - OAuth2 authentication for all Google services  
✅ **Secure Storage** - Files stored in private Google Drive folders  
✅ **Audit Trail** - Complete logging in Google Sheets with timestamps  
✅ **Email Verification** - Prevents data leakage to invalid addresses  
✅ **No Data Storage in n8n** - Patient data passes through, not stored

---

### **Tags**
```
healthcare, medical, clinic, patient-management, appointment, email-verification, qr-code, google-drive, gmail, slack, automation, workflow, pre-checkin, health-card, verifi-email, htmlcsstoimg, medical-records, patient-portal, healthcare-automation, clinic-management
```

---

### **Category**
```
Healthcare & Medical
```

---

### **Subcategory**
```
Patient Management & Appointment Systems
```

---

### **License**
```
MIT License - Free to use, modify, and distribute with attribution
```

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
