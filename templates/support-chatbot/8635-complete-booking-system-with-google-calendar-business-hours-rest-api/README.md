# 💬 Complete booking system with Google Calendar, business hours & REST API

> ⚡ **2,785 views** · 💬 [Support Chatbots](../)

## Description

## GCalendar Smart Booking System 

### Demo
![Demo](https://raw.githubusercontent.com/dragonjump/suarify-booking/main/full-demo-makebooking.gif)

* [github code ](https://github.com/dragonjump/suarify-booking/blob/gh-pages/index.html/)
* [Try yourself](https://dragonjump.github.io/suarify-booking/)


## 📋 **Description**

Transform your booking chaos into streamlined automation with this production-ready GCalendar Smart Booking System. This comprehensive n8n workflow eliminates weeks of custom development by providing two powerful REST APIs that handle everything from input validation to calendar integration.

**What makes this special?** Unlike basic booking forms, this system includes enterprise-grade features like intelligent conflict detection, public holiday awareness, business hours enforcement, and automatic Google Calendar integration with Meet links. It's battle-tested with real-world business logic including lunch breaks, timezone handling, and comprehensive error responses.

### **Privacy & Cost Benefits:**
- **🔐 Privately yours & free** - No need to purchase expensive booking software or worry about data breaches. Your booking data stays secure in your own Google Calendar, completely under your control.
- **🎯 All-in-One solution** - No manual invitation sending required. Google Calendar automatically handles attendee notifications and generates real Google Meet links for every booking, creating a seamless experience for both you and your clients. No need pay for API to get public holiday, use the google calendar free default .

**Perfect for rapid deployment:** Whether you're building for clients, launching an MVP, or replacing expensive booking software, this template gets you from zero to production in under 15 minutes. The clean API design makes frontend integration effortless, while the robust validation ensures reliable operation at scale.

**Two endpoints, endless possibilities:**
- `/make-booking` - Complete booking creation with multi-layer validation
- `/check-booking-date` - Real-time slot availability listing (comes with conflict detection, business hour checks)

Built by developers, for developers - with comprehensive documentation, testing examples, and customization guides included.


### Purpose 
This workflow provides a webhook API endpoint that your frontend can easily integrate typically triggered by a submit button on a booking form.
When the frontend calls this REST API, the workflow handles the booking logic by performing several key checks:
- Valid Input — Ensures all required fields are present and correctly formatted.
- Date & Time Validation — Confirms the requested slot falls within business hours, excludes lunch/dinner breaks, and respects public holidays.
- Conflict Detection — Checks for any existing bookings at the requested time to prevent overlaps.
- Calendar Integration — Once all checks pass, the workflow automatically creates a booking entry in your Google Calendar, keeping everything synced and visible.



## 🎯 **Target Audience**

This template is perfect for:

**🏥 Healthcare & Medical Professionals**: Clinics, dental offices, physiotherapy centers, and medical practices needing automated appointment scheduling with proper business hours validation and no-show reduction.

**💼 Professional Service Providers**: Consultants, lawyers, accountants, financial advisors, and coaches who require sophisticated booking systems with calendar integration and conflict prevention.

**🎓 Educational Institutions**: Universities, tutoring centers, training academies, and educational consultants needing student appointment scheduling with academic calendar integration.

**🏢 Small to Medium Businesses**: Service-based businesses like salons, spas, repair services, and consulting firms looking to automate their booking process without expensive software subscriptions.

**👨‍💻 Software Development Teams**: Developers and engineering teams who need to rapidly deploy booking functionality for client projects without building from scratch.

**🌐 Digital Agencies**: Web development agencies, marketing firms, and digital consultancies building booking solutions for multiple clients across different industries.

**🏨 Hospitality & Events**: Meeting room booking, event venue scheduling, equipment rental companies, and co-working spaces requiring intelligent availability management.

**🔧 Freelancers & Solo Entrepreneurs**: Independent professionals like designers, photographers, personal trainers, and contractors who need professional booking systems on a budget.

**📊 Product Managers**: Teams building SaaS products that require booking/scheduling features as part of their core functionality or user experience.

**🚀 Startup Founders**: Early-stage companies needing to validate booking-related business models quickly without significant development investment.

**🎨 Creative Professionals**: Photographers, videographers, music instructors, and artists who need client appointment scheduling with portfolio integration possibilities.

**⚙️ Technical Operations Teams**: DevOps engineers and system administrators who need to implement booking systems for internal resource allocation (servers, equipment, meeting rooms).

*This template eliminates weeks of development time while providing enterprise-grade validation, making it ideal for anyone who values rapid deployment, reliability, and professional functionality in their booking systems.*

## ⚙️ **How It Works**

### **🔄 Booking Flow (Step-by-Step)**

#### **Phase 1: Input Validation** 
```javascript
// Real validation logic from the workflow
✅ Name, email, phone, date, time validation
✅ Email format verification (RFC compliant)
✅ Phone number format checking
✅ Date/time format standardization (YYYY-MM-DD, HH:MM)
```

#### **Phase 2: Business Logic Validation**
```javascript
// Business hours: Monday-Friday, 9AM-9PM (customizable)
✅ Weekend blocking
✅ Business hours enforcement  
✅ Lunch break exclusion (12PM-2PM)
✅ Dinner break exclusion (6PM-8PM)
✅ Timezone handling (Malaysia/UTC+8 default)
```

#### **Phase 3: Intelligent Conflict Detection**
```javascript
// Multi-calendar checking
✅ Public holiday calendar integration
✅ Main booking calendar conflict detection
✅ Real-time availability verification
✅ Overlap prevention algorithms
```

#### **Phase 4: Calendar Integration**
```javascript
// Google Calendar automation
✅ Event creation with attendee invitation
✅ Google Meet link generation
✅ Custom event descriptions and summaries
✅ Calendar color coding
```

### **🕒 Availability API Flow**

1. **Date Input** → Validates YYYY-MM-DD format
2. **Weekend/Holiday Check** → Blocks non-working days
3. **Slot Generation** → Creates available time slots
4. **Conflict Mapping** → Marks booked vs available slots
5. **Response Formatting** → Returns structured availability data

---

## 🛠️ **Quick Start Guide**

### **Prerequisites**
- n8n instance (cloud or self-hosted)
- Google Cloud Project with Calendar API enabled
- Google Calendar credentials

### **Simple Setup Guide**

#### **Step 1: Import the Workflow** ⬇️
1. Download the `smart-booking-system.json` file
2. In your n8n instance: **Workflows** → **Import from File**
3. Select the downloaded JSON file
4. Click **Import**

#### **Step 2: Set Up Google Calendar Credentials** 🔑
1. **Create Google Cloud Project:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create new project or select existing one
   - Enable **Google Calendar API**

2. **Configure n8n Credentials:**
   - In n8n: **Credentials** → **Add Credential** → **Google Calendar OAuth2 API**
   - Enter your Google Cloud **Client ID** and **Client Secret**
   - Save as "Google Calendar account"

3. **Update Workflow Nodes:**
   - Find nodes: `Create Calendar Event`, `Check Calendar Availability`, etc.
   - Select your Google Calendar credential in each node

#### **Step 3: Configure Your Calendars** 📅
1. **Main Booking Calendar:**
   - Create a dedicated Google Calendar for bookings
   - Copy the Calendar ID (found in Calendar Settings)
   - Replace `YOUR_BOOKING_CALENDAR_ID@group.calendar.google.com` in these nodes:
     - `Create Calendar Event`
     - `Check Calendar Availability - Main`
     - `Check Calendar Availability`

2. **Holiday Calendar (Optional):**
   - Add your country's holiday calendar to Google Calendar
   - Find the calendar ID (e.g., `en.usa#holiday@group.v.calendar.google.com`)
   - Update `Check Calendar Availability - public holiday` and `Check Public Holiday Calendar` nodes

#### **Step 4: Customize Business Hours** ⏰
1. **Find the ConfigTimeSlots node**
2. **Edit the time slots array:**
```javascript
[
  { "time": "09:30", "display": "9:30 AM - 10:30 AM", "available": true },
  { "time": "10:30", "display": "10:30 AM - 11:30 AM", "available": true },
  { "time": "11:30", "display": "11:30 AM - 12:30 PM", "available": true },
  { "time": "14:30", "display": "2:30 PM - 3:30 PM", "available": true },
  { "time": "15:30", "display": "3:30 PM - 4:30 PM", "available": true },
  { "time": "16:30", "display": "4:30 PM - 5:30 PM", "available": true },
  { "time": "17:30", "display": "5:30 PM - 6:30 PM", "available": true },
  { "time": "20:30", "display": "8:30 PM - 9:30 PM", "available": true }
]
```

#### **Step 5: Activate & Test** 🚀
1. **Activate the workflow:** Toggle the workflow **Active** switch
2. **Get your webhook URLs:**
   - Booking: `https://your-n8n-domain/webhook/suarify-make-booking`
   - Availability: `https://your-n8n-domain/webhook/suarify-check-booking-date`

3. **Test with sample requests:**
```bash
# Test booking creation
curl -X POST 'https://your-n8n-domain/webhook/suarify-make-booking' \
-H 'Content-Type: application/json' \
-d '{
    "name": "John Doe",
    "email": "john@example.com", 
    "phone": "+1234567890",
    "date": "2024-03-15",
    "time": "14:30"
}'

# Test availability checking  
curl -X POST 'https://your-n8n-domain/webhook/suarify-check-booking-date' \
-H 'Content-Type: application/json' \
-d '{"date": "2024-03-15"}'
```

#### **Step 6: Integrate with Your Frontend** 💻
- Use the webhook URLs in your booking form
- Handle the JSON responses for success/error states
- Display available time slots from the availability API

**🎉 You're ready to start taking bookings!**

---

## 📋 **API Documentation**

### **📤 Booking Creation API**

**Endpoint:** `POST /webhook/make-booking`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890", 
  "date": "2024-03-15",
  "time": "14:30",
  "source": "Website Form"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Booking confirmed successfully!",
  "bookingDetails": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "date": "2024-03-15", 
    "time": "14:30",
    "eventId": "abc123def456",
    "eventLink": "https://calendar.google.com/event?eid=...",
    "calendarEvent": { /* Full calendar event object */ }
  },
  "confirmationMessage": "Hi John Doe, your booking has been confirmed for 2024-03-15 at 14:30. You will receive a calendar invitation shortly."
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Invalid email format",
  "message": "Booking request failed validation",
  "details": { /* Error context */ }
}
```

### **📅 Availability Check API**

**Endpoint:** `POST /webhook/check-booking-date`

**Request Body:**
```json
{
  "date": "2024-03-15"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "isWorkingDay": true,
  "isWeekend": false,
  "holidayName": "",
  "availableSlots": [
    {
      "time": "09:30",
      "display": "9:30 AM - 10:30 AM", 
      "available": true
    },
    {
      "time": "10:30",
      "display": "10:30 AM - 11:30 AM",
      "available": false,
      "status": "booked"
    }
  ],
  "totalConflicts": 3
}
```

---

## 🎛️ **Customization Guide**

### **Business Hours Configuration**
Edit the `ConfigTimeSlots` node to modify available booking times:

```javascript
const timeSlots = [
  { time: '09:00', display: '9:00 AM - 10:00 AM', available: true },
  { time: '10:00', display: '10:00 AM - 11:00 AM', available: true },
  // Lunch break automatically excluded
  { time: '14:00', display: '2:00 PM - 3:00 PM', available: true },
  // Customize as needed...
];
```

### **Timezone Adjustment**
Modify the `Business Hours Check` node:

```javascript
// Change from Malaysia (UTC+8) to your timezone
const timezone = 'America/New_York'; // UTC-5
const timezoneOffset = '-05:00';
```

### **Holiday Calendar**
Update calendar ID in holiday checking nodes:

```javascript
// Replace with your country's holiday calendar
"value": "en.usa#holiday@group.v.calendar.google.com"
```

### **Business Rules**
Customize validation in the `Business Hours Check` node:

```javascript
// Business hours: Mon-Fri, 9am-6pm (example)
const isWithinBusinessHours = timeInMinutes &gt;= 540 && timeInMinutes &lt;= 1080;
// Remove lunch breaks if not needed
const isNotLunchBreak = true; // Always allow
```

---

**Start automating in under 15 minutes!** 🎉

---

*Made with ❤️ for the engineering community. Star this repo if it saves you time!*

## 🔗 Nodes Used

Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
