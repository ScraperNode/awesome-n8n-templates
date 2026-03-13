# 🎫 N8N contact form workflow

> ⚡ **3,804 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 📬 N8N Contact Form Workflow: Capture, Notify via Email, and Redirect with Confirmation/Error Handling

This n8n workflow facilitates contact form submissions through a customizable form that sends an email notification to support and redirects users based on the submission outcome. It is ideal for embedding a functional "Contact Us" form on websites with automated email notifications.

---

## ✨ Features

- Collects first name, last name, email, company name, and a message
- Sends formatted email notification to the support team
- Displays success or error confirmation to the user
- Customizable UI and form behavior
- Error fallback handling with user-friendly feedback

---

## 🧩 Nodes Overview

### 1. **On form submission (Trigger)**
- **Type:** `formTrigger`
- Displays the contact form to users and triggers the workflow on submission.

### 2. **Send Email to Support**
- **Type:** `emailSend`
- Sends an HTML email to a support address with the form details.
- Uses an SMTP credential for sending.

### 3. **If Email Sent**
- **Type:** `if`
- Checks if the email was sent successfully using the existence of `messageId`.

### 4. **Confirmation Form**
- **Type:** `form`
- Displays a “Thank You” HTML message after a successful submission.

### 5. **Redirect Form**
- **Type:** `form`
- Redirects the user to a specified URL (e.g., LinkedIn profile).

### 6. **Form (Error)**
- **Type:** `form`
- Displays an error message if email delivery fails.

### 7. **NoOp Nodes**
- **End (Success)** and **End (Error)** to mark flow terminations cleanly.

---

## ⚙️ Customization Options

- Change the form fields, title, or descriptions in the `formTrigger` node.
- Update the email body or subject in the `emailSend` node.
- Redirect to a different URL by editing the `Redirect Form` node.
- Modify success and error UI with HTML content in the `Confirmation Form` and `Form`.

---

## 🧠 Use Cases

- Website "Contact Us" form integration
- Lead generation forms for businesses
- Customer service inquiry collection
- Feedback or support ticket system

---

## 🚀 How to Use

1. **Import** this workflow into your n8n instance.
2. **Configure SMTP credentials** for the `emailSend` node.
3. **Publish the formTrigger** endpoint (e.g., `/contact-us`) publicly or embed in your website.
4. Test submission and confirm email delivery and redirects.

---

## 🔐 Notes

- Ensure SMTP credentials are correctly configured in n8n.
- Make sure your n8n webhook URLs are reachable from your website or frontend.

---

Made with ❤️ using n8n by Akhil.

## 🔗 Nodes Used

Send Email, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
