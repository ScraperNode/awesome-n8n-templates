# 💬 Create an AI-powered virtual receptionist with Google Calendar & Sheets

> ⚡ **8,489 views** · 💬 [Support Chatbots](../)

## Description

# 🤖AI-Powered Appointment Scheduling with Google Calendar & Sheets Virtual Receptionist 

Automate customer conversations with an **AI-powered virtual receptionist**. This workflow can **chat naturally with clients**, **answer general business questions** (like services, location, and hours), **check availability in Google Calendar**, **book appointments**, and **save customer details in Google Sheets**. Fully customizable for **any business type** — salons, clinics, agencies, consultants, and more.  

---

## 📖 How It Works  

1. **Welcome the customer when the customer says hi**  
   - AI greets warmly: *“Hello! I’m [AI name] from [Business name].”*  

2. **Answer general questions**  
   - Provides instant replies about services, pricing, business location, hours, and availability.  

3. **Understand their need**  
   - Identifies the service requested and preferred time.  

4. **Check availability**  
   - Queries Google Calendar for open slots.  

5. **Gather customer details**  
   - Collects name, phone, and email (optional).  

6. **Confirm booking**  
   - Creates the appointment in Google Calendar.  

7. **Save records**  
   - Logs booking and customer info into Google Sheets.  



---

## ⚙️ Setup Steps (Quick)  
1. Connect your **Google Calendar** and **Google Sheets** accounts.  
2. Add your **business details** (name, type, services, hours, policies) to the **Business Info Sheet**.  
3. Configure your **OpenAI API key** (or use n8n free credits).  
4. Optional: Connect **Twilio WhatsApp** for direct chat responses.  

 

---

## 🏢 Example Business Info (Google Sheet)  

| business_id | business_name   | business_type       | location                          | phone           | email                     | services | calendar_id           | timezone | currency | working_hours                 | ai_name | ai_personality                   | ai_role                                                                                       | emergency_available | booking_advance_days | cancellation_hours |
|-------------|-----------------|---------------------|----------------------------------|-----------------|---------------------------|----------|-----------------------|----------|----------|--------------------------------|---------|-----------------------------------|------------------------------------------------------------------------------------------------|----------------------|----------------------|-------------------|
|001| Luxe Hair Studio | Hair & Beauty Salon | 123 Main Street, New York, NY 10001 | 1 (XXX) XXX-XXXX | yourbusiness@email.com | “Haircut & Styling (60 minutes, $3500…)<br>Hair Coloring (120 minutes, $8000…)<br>…” | calendar-id-here | GMT -3 | USD | Mon–Sat: 9:00 AM – 7:00 PM, Sun: Closed | bella | Friendly, Stylish, Professional | Manages bookings, answers FAQs, recommends services, gives beauty tips, sends reminders, etc. | no | 10 | 24 |

✅ **Purpose**: Supplies context (services, pricing, hours, AI personality, booking policies).  
💡 The AI uses this sheet to answer **general business questions** (e.g., “Where are you located?”, “Do you do hair colouring?”, “What are your working hours?”).  

---

## 📊 Appointments Sheet Example  

| client_number | client_name | event_id  | summary                          | services |
|----------------|-------------|-----------|----------------------------------|----------|
| 001            | Sarah Lee   | evt-10293 | Appointment with Sarah Lee – Haircut & Styling | Haircut & Styling |
| 002            | John Smith  | evt-10294 | Appointment with John Smith – Highlights | Highlights |

✅ **Purpose**: Logs confirmed bookings with service details and links back to Google Calendar.  

---

## 💡 Features  
- ✅ AI receptionist with **conversation memory**  
- ✅ **Answers FAQs** – location, services, hours, pricing  
- ✅ **Google Calendar integration** for real-time availability  
- ✅ **Google Sheets integration** for customer records & reporting  
- ✅ Customizable **AI name, role, and personality**  

---

## 🔑 Who It’s For  
- **Salons & Spas** – Manage bookings and FAQs  
- **Clinics & Health Services** – Automated scheduling + patient info  
- **Agencies & Consultants** – Answer inquiries + schedule meetings  
- **Any Service Business** – Save time, improve customer experience

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
