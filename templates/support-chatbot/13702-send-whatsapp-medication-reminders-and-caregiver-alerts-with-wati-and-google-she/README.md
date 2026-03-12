# 💬 Send WhatsApp medication reminders and caregiver alerts with WATI and Google Sheets

> ⚡ **16 views** · 💬 [Support Chatbots](../)

## Description

# 💊 WhatsApp Medication Adherence & Caregiver Alert Automation

Ensure health and safety with a fully automated medication adherence system. This workflow manages the entire patient care cycle—from scheduled dosage reminders to interactive logging and automated caregiver escalations—all through WhatsApp using WATI and Google Sheets.

---

## 🎯 What This Workflow Does

Turns WhatsApp into a proactive health assistant and caregiver's dashboard:

- 📝 **Timed Dosage Reminders**  
  A scheduled trigger fires 3x daily (Morning, Afternoon, Night) to identify which medications are due and send personalized WhatsApp alerts.

- 🚦 **Smart Patient Routing**  
  A Switch node detects patient replies to manage their health data in real-time:
  - **taken:** Logs the dose as complete and updates the patient's "Streak".
  - **skip:** Records the skipped dose and empathetic feedback while checking for consecutive skips.
  - **snooze:** Schedules a 30-minute follow-up reminder.
  - **mystats:** Generates a 7-day adherence report with visual progress bars.
  - **mymeds:** Provides the full daily medication schedule and instructions.

- 👁️ **Automated Caregiver Alerts**  
  An hourly check detects "Pending" reminders. If a patient hasn't responded within 2 hours, the bot automatically alerts the designated caregiver via WhatsApp.

- 📊 **Comprehensive Analytics**  
  Caregivers can request a full patient report (e.g., `report &lt;phone&gt;`) to view a categorized summary of taken vs. missed doses.

---

## ✨ Key Features

- **Slot-Based Intelligence:** Automatically determines if it is Morning, Afternoon, or Night to send only relevant medications.
- **Gamified Adherence:** Tracks "Streaks" (consecutive days taken) with motivational emojis to encourage patient consistency.
- **Visual Bar Charts:** Patients and caregivers receive structured reports using visual bars (`███░░`) to show adherence percentages.
- **Temporary Snooze Queue:** Uses a dedicated "SnoozeQueue" tab to ensure follow-up reminders aren't forgotten.
- **Proactive Safety:** Built-in logic to detect 2+ consecutive skips, alerting caregivers before it becomes a health risk.

---

## 💼 Perfect For

- **Elderly Care:** Providing automated support for seniors managing multiple daily medications.
- **Chronic Condition Management:** Ensuring strict adherence for long-term treatments like hypertension or diabetes.
- **Home Healthcare Agencies:** Scaling patient monitoring without increasing manual staff check-ins.
- **Clinical Trials:** Tracking participant adherence with a digital, timestamped audit trail.

---

## 🔧 What You'll Need

### Required Integrations

- **WATI** – To deliver medication reminders and process patient responses.
- **Google Sheets** – To store the master medication list, adherence logs, and snooze queue.

### Optional Customizations

- **AI Analysis:** Integrate OpenAI to answer patient questions about specific medication side effects.
- **Emergency Escalation:** Add a voice call node if a high-priority medication is missed 3 times in a row.

---

## 🚀 Quick Start

1. **Import Template** – Copy the JSON and import it into your n8n instance.
2. **Set Credentials** – Connect your WATI and Google Sheets accounts.
3. **Configure Sheets** – Ensure your Google Sheet has three tabs:

   **Medications:**  
   `phone`, `patientName`, `medName`, `dosage`, `frequency`, `timeSlots`, `status`, `caregiverPhone`

   **AdherenceLog:**  
   `logKey`, `phone`, `patientName`, `date`, `slot`, `status`, `sentAt`, `respondedAt`, `caregiverPhone`

   **SnoozeQueue:**  
   `phone`, `patientName`, `followUpAt`, `snoozedAt`, `status`

4. **Test Reminders** – Add a test row to your sheet and manually trigger the 8 AM node.
5. **Simulate a Reply** – Reply `taken` or `mystats` to your WATI number to see your report generated live.

---

## 🎨 Customization Options

- **Custom Time Windows:** Modify the Filter Medications by Time Slot code to align with specific clinic hours.
- **Empathetic Messaging:** Customize the reinforce messages in the Process Taken and Process Skip nodes to match your brand voice.
- **Adherence Thresholds:** Adjust the caregiver alert logic to trigger after 1 hour or 4 hours depending on medication sensitivity.

---

## 📈 Expected Results

- 95% adherence transparency for caregivers and family members.
- Reduced health risks by identifying missed doses within a 2-hour window.
- Improved patient morale through positive streak reinforcement and visual progress.
- Efficient monitoring: One caregiver can monitor dozens of patients through a single WhatsApp interface.

---

Ready to launch your digital health assistant? Import this template and connect your Google Sheets to start improving patient adherence today!

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
