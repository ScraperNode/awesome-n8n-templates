# 🤝 Handle WhatsApp course enrollment and payments with Wati and Razorpay

> ⚡ **97 views** · 🤝 [CRM & Sales Operations](../)

## Description

Transform your educational business with a fully automated mobile storefront. This workflow manages the entire student journey—from browsing course catalogues to secure payment processing and enrollment tracking—all within WhatsApp by combining WATI, Razorpay, and Google Sheets.

---

## 🎯 What This Workflow Does

Turns WhatsApp into a 24/7 automated enrollment desk:

- 📝 **Captures Student Intent**  
  Receives text commands like `courses`, `enroll`, or `pay` via the WATI Trigger from the student's phone.

- 🚦 **Smart Message Routing**  
  A Switch node identifies the keyword to trigger the correct path:
  - **courses:** Displays the full course catalogue.
  - **enroll <code>:** Shows specific course details and a payment CTA.
  - **pay <code>:** Generates a unique Razorpay payment link.
  - **mystatus:** Fetches the student's personal enrollment history.

- 👁️ **Dynamic Catalogue Generation**  
  Fetches live data from Google Sheets to build a formatted WhatsApp message with course codes, prices, and durations.

- 💳 **Instant Payment Processing**  
  Integrates with the Razorpay API to create secure, short-URL payment links tailored to the specific course and student.

- 📊 **Automated CRM Logging**  
  Logs every enrollment attempt as "Pending" in Google Sheets, capturing timestamps, phone numbers, and unique payment IDs.

---

## ✨ Key Features

- **White-Label Automation:** Sell courses under your own brand without needing a complex website or LMS.
- **Real-Time Status Tracking:** Students can instantly view their active and pending enrollments with the `mystatus` command.
- **Native Razorpay Integration:** Uses a clean REST API approach (HTTP Request) to generate payment links without requiring external SDKs.
- **Formatted Course Cards:** Automatically generates detailed summaries for each course, including instructor info and start dates.
- **Multi-Category Support:** Organizes your catalogue by subject (e.g., Programming, Marketing) for a professional user experience.

---

## 💼 Perfect For

- **Independent Tutors:** Selling recorded workshops or live sessions without manual billing.
- **Coaching Institutes:** Automating the registration process for high-volume course launches.
- **Skill-Based Bootcamps:** Providing a low-friction "chat-to-pay" experience for mobile users.
- **Corporate Trainers:** Tracking employee registrations for internal certification programs.

---

## 🔧 What You'll Need

### Required Integrations

- **WATI** – To handle WhatsApp message triggers and delivery.
- **Razorpay** – To generate unique payment links via REST API.
- **Google Sheets** – To manage your course database and enrollment logs.

### Optional Customizations

- **Payment Confirmation:** Set up a Razorpay Webhook to automatically update enrollment status from "Pending" to "Enrolled" upon payment.
- **Automated Welcome:** Add a node to send a "Course Access Guide" PDF once the payment is verified.

---

## 🚀 Quick Start

1. **Import Template** – Copy the JSON and import it into your n8n instance.
2. **Set Credentials** – Connect your WATI, Razorpay (Basic Auth), and Google Sheets accounts.
3. **Configure Sheets** – Ensure your Google Sheet has headers for:

   **Courses Tab:**  
   `name`, `code`, `category`, `price`, `duration`, `shortDesc`, `description`, `instructor`, `startDate`

   **Enrollments Tab:**  
   `timestamp`, `phone`, `courseCode`, `courseName`, `amount`, `status`, `paymentlinkId`, `paymentlinkUrl`

4. **Test Browsing** – Send the word `courses` to your WATI number.
5. **Simulate Payment** – Send `pay &lt;course_code&gt;` to receive your first automated payment link.

---

## 🎨 Customization Options

- **Currency Setup:** Change the currency from INR to USD or EUR in the Razorpay Payload node.
- **Personalized Feedback:** Edit the Build Enrollment Status code to change how the student’s history is displayed.
- **Custom CTA:** Modify the "Enroll Detail Card" to include links to your YouTube demo or LinkedIn profile.

---

## 📈 Expected Results

- 95% reduction in manual coordination for course registrations and link sharing.
- Faster conversions by allowing students to pay the moment they show interest.
- Organized data with every student interaction logged in a single spreadsheet.
- Professional image using automated, well-formatted WhatsApp cards and official payment links.

---

## 🏆 Use Cases

### Upskilling Bootcamps
A programming school sends the `courses` list to a leads group; students enroll and pay for "Python 101" entirely through the chat.

### Skill Progress Tracking
A student types `mystatus` to see which courses they have paid for and which enrollments are still pending.

### Flash Sales
Promote a course code on Instagram; when users message that code to your WhatsApp, the bot handles the sale 24/7.

---

## 💡 Pro Tips

- **Shorthand Commands:** The bot is built to handle case-insensitive commands, so `PAY PY101` and `pay py101` work equally well.
- **Razorpay Test Mode:** Always test your payment links using Razorpay's "Test Mode" keys before going live to ensure the links generate correctly.
- **Clean Database:** The Build Enrollment Status node uses phone number filtering to ensure students only see their own private history.

---

Ready to start enrolling students? Import this template and connect your Razorpay account to automate your sales today!

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
