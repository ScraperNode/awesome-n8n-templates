# ⚡ Create daily prayer and sunnah fasting reminders in Google Calendar using Aladhan API

> ⚡ **57 views** · ⚡ [Personal Productivity](../)

## Description

🕌 How it works

This workflow automatically creates daily Islamic reminders in your Google Calendar based on your location 📍

It fetches real-time prayer times 🌐 and generates events for:
	•	🕌 Daily prayers (Subuh, Dzuhur, Ashar, Maghrib, Isya)
	•	🤲 Morning & evening dhikr (Doa Pagi & Petang)
	•	🌙 Sunnah fasting reminders (Ayamul Bidh – 13, 14, 15 Hijri)

To prevent duplicates 🔍, it compares generated events with existing calendar entries 📅 and only creates new ones if they do not already exist ✅

⸻

⚙️ Setup steps
	•	Set your location (city & country) in the Set City and Country node
	•	Connect your Google Calendar account
	•	Adjust the schedule trigger if needed (default: daily)
	•	Activate the workflow

Setup takes less than 5 minutes ⏱️

⸻

⚠️ Notes
	•	This workflow uses the Aladhan API for prayer times and Hijri date conversion
	•	Timezone is set to Asia/Jakarta (you can adjust it if needed)
	•	Detailed logic and explanations are available inside the workflow using sticky notes

⸻

💡 Tip

Perfect for building consistent daily worship habits using automation 🤖

## 🔗 Nodes Used

HTTP Request, Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
