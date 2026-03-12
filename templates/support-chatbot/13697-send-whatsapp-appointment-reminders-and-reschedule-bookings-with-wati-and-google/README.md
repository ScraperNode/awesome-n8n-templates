# 💬 Send WhatsApp appointment reminders and reschedule bookings with Wati and Google Sheets

> ⚡ **23 views** · 💬 [Support Chatbots](../)

## Description

Streamline your clinic's operations with a fully automated patient communication system. This workflow manages the entire appointment lifecycle—from automated morning reminders to real-time confirmations and self-service rescheduling—all through WhatsApp using WATI and Google Sheets.

---

## 🎯 What This Workflow Does

Turns WhatsApp into a 24/7 automated medical receptionist:

- 📝 **Automated Reminder Dispatch**  
  A scheduled trigger runs daily at 9 AM to identify upcoming appointments and send personalized WhatsApp reminders.

- 🚦 **Smart Patient Routing**  
  A Switch node detects patient replies and triggers the correct operational path:
  - **confirm:** Marks the appointment as confirmed in the database.
  - **cancel:** Updates the status to cancelled and alerts the clinic.
  - **reschedule:** Initiates the automated slot-selection flow.
  - **myappointment:** Provides the patient with their full booking history.

- 👁️ **Self-Service Rescheduling**  
  The bot reads available time slots from Google Sheets, presents them as a numbered list, and handles the booking update automatically once a patient picks a slot.

- 📊 **Live Database Synchronization**  
  Every action—confirmation, cancellation, or time change—is instantly updated in Google Sheets, ensuring the clinic staff always sees the latest status.

---

## ✨ Key Features

- **Morning "Pulse" Check:** Automatically filters today’s and tomorrow’s appointments to ensure high attendance rates.
- **Slot Memory:** Uses a "Reschedule Session" tab to maintain chat context, allowing patients to simply type `slot 2` to rebook.
- **Visual Appointment Cards:** Sends patients a clean summary of their upcoming and past visits with status emojis (✅, ⏳, 🔁).
- **Admin Alerting (Optional):** Built-in logic to notify doctors or administrators via WhatsApp for any schedule changes.
- **Zero-Friction Updates:** Patients manage their bookings without downloading an app or calling the front desk.

---

## 💼 Perfect For

- **Medical Clinics:** Reducing "no-shows" with automated 24-hour reminders.
- **Dental Practices:** Allowing patients to easily reschedule cleanings via chat.
- **Wellness & Spas:** Managing therapist availability and booking confirmations.
- **Professional Services:** Automating client reminders for consultations or coaching sessions.

---

## 🔧 What You'll Need

### Required Integrations

- **WATI** – To trigger reminders and receive patient responses.
- **Google Sheets** – To serve as the master database for appointments and available slots.

### Optional Customizations

- **Google Calendar Sync:** Although current logic is Sheets-based, you can add nodes to sync these updates to a visual doctor's calendar.
- **AI Triage:** Add an OpenAI node to understand patient questions that fall outside of standard commands.

---

## 🚀 Quick Start

1. **Import Template** – Copy the JSON and import it into your n8n instance.
2. **Set Credentials** – Connect your WATI and Google Sheets accounts.
3. **Configure Sheets** – Ensure your Google Sheet has three tabs:

   **Appointments:**  
   `appointmentId`, `phone`, `patientName`, `doctorName`, `appointmentDate`, `appointmentTime`, `clinicName`, `status`

   **AvailableSlots:**  
   `slotId`, `date`, `time`, `doctorName`, `status`

   **RescheduleSessions:**  
   `phone`, `slotsData`, `createdAt`

4. **Test the Flow** – Add a test row to your sheet and manually trigger the 9 AM node.
5. **Simulate a Reply** – Reply `confirm` or `reschedule` to your WATI number to see the database update live.

---

## 🎨 Customization Options

- **Urgency Tags:** The workflow automatically flags appointments happening TODAY in red for higher visibility.
- **Doctor Specificity:** Filter slot availability by specific doctor names if your clinic has multiple practitioners.
- **Flexible Matching:** Uses phone number matching to ensure patients only see and edit their own private records.

---

## 📈 Expected Results

- 30–50% reduction in appointment "no-shows" through proactive reminders.
- Faster re-booking: Cancellations are instantly replaced by rescheduling requests.
- Staff efficiency: Front desk spends less time on the phone and more time on patient care.
- Accurate records: Eliminates manual data entry errors by having the patient confirm their own status.

---

## 🏆 Use Cases

### High-Volume Clinics
A multi-doctor clinic sends 100+ reminders every morning; patients confirm via chat, and the staff arrives to a perfectly updated "Confirmed" list in Sheets.

### Out-of-Hours Rebooking
A patient realizes at 10 PM they can’t make it; they type `reschedule` and pick a new time for next week without waiting for the clinic to open.

### Booking Verification
A patient forgets their visit time and simply types `myappointment` to receive an instant digital summary card.

---

## 💡 Pro Tips

- **International Formats:** Always ensure phone numbers in your Sheets include the country code for reliable WATI delivery.
- **Slot Maintenance:** Keep your AvailableSlots tab updated with future dates to ensure the bot always has options to offer.
- **Status Check:** If the bot doesn't respond, ensure the WATI Trigger node is active and the webhook URL is correctly registered in your WATI dashboard.

---

Ready to automate your clinic's schedule? Import this template and connect your Google Sheets to start reducing no-shows today!

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
