# 🔬 Workshop certificate generator with Google Drive, Gmail & QR verification

> ⚡ **92 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## **Automated Pre-Issued Workshop Certificate Generator**

## **Description:**

This workflow automates the entire pre-issuance process of workshop participation certificates.
When an attendee submits a registration form via a webhook, the workflow validates the data, verifies the attendee’s email, generates a unique Certificate ID and QR code, creates a styled certificate image, stores it on Google Drive, emails the certificate to the attendee, logs all details in Google Sheets, and notifies organizers via Slack — all fully automated.

This template is ideal for institutions, event teams, training organizations, hackathons, and workshops that want to automate certificate issuing and remove manual processing.

---

## **Key Features:**

* **Webhook-based registration intake**
* **Required field + email validation using VerifiEmail API**
* **Auto-generated Certificate ID, QR code, and verification URL**
* **Dynamic HTML-to-Image certificate generation**
* **Automatic email delivery with certificate attachment (Gmail)**
* **Auto-upload certificate to Google Drive**
* **Real-time Slack notification for organizers**
* **Registration + certificate logging in Google Sheets**
* **Instant webhook response with certificate metadata**

---

## **How It Works (Short Summary):**

1. **Webhook Trigger** receives registration details.
2. **Validator** checks for mandatory fields (name, email, event).
3. **Email verification** ensures the email is deliverable.
4. **Certificate generation** creates unique ID + QR + HTML.
5. **HTML-to-Image** converts the certificate to PNG.
6. **Upload to Google Drive** stores the certificate file.
7. **Email node** sends the certificate to the attendee.
8. **Google Sheets** logs the registration + certificate details.
9. **Slack message** notifies organizers instantly.
10. **Webhook response** returns success JSON.

---

## **Use Cases:**

* Workshops
* Webinars
* Training sessions
* Bootcamps
* Corporate events
* Hackathons
* Student registrations
* Event ticketing / entry pass systems

---

## **Required Credentials:**

* **VerifiEmail API** – email validation at verifi.email
* **HTMLCSStoImage API** – convert certificate HTML to PNG at htmlcsstoimg.com
* **Gmail OAuth2** – send certificate emails
* **Google Drive OAuth2** – store certificate files
* **Google Sheets OAuth2** – logging
* **Slack API** – organizer notifications

---

## **Setup Instructions:**

1. **Import this template** into your n8n instance.
2. Open the **Webhook node** and copy the generated webhook URL.
3. Use this URL in your registration form / frontend / Postman.
4. Add all required credentials in the Credentials Manager.
5. Customize certificate HTML (colors, branding, logos) if needed.
6. Test with a sample POST request containing all required fields:

   * name
   * email
   * event
   * date
   * time
   * venue
   * organization
   * designation
7. Enable the workflow.

---

## **Input Format (POST Body Required):**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "event": "AI Workshop 2025",
  "date": "25 Nov 2025",
  "time": "10:00 AM",
  "venue": "Auditorium Hall",
  "organization": "Tech University",
  "designation": "Student"
}
```

---

## **Output (Webhook Response):**

```json
{
  "success": true,
  "message": "Registration successful! Certificate sent to your email.",
  "certificateId": "CERT-12345-ABCD",
  "verifyUrl": "https://workshopverify.com/cert?id=CERT-12345-ABCD"
}
```

---

## **Why This Workflow is Useful:**

* Eliminates manual certificate design & sending
* Ensures professional, consistent certificates
* Reduces event staff workload
* Guarantees accurate data logging
* Provides instant attendee confirmation
* Enhances event experience with automation

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
