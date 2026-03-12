# 🎣 Calendly to KlickTipp integration

> ⚡ **723 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

![Bildschirmfoto 20251126 um 17.18.40.png](fileId:3459)

**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.

**How It Works**  

Enhanced Calendly Integration: This workflow processes bookings and cancellations in Calendly, dynamically managing invitee and guest data with KlickTipp.  

Data Transformation: Dates and times are converted into formats (UNIX timestamps) compatible with KlickTipp’s API, ensuring seamless data integration.  

**Key Features**  

**Calendly Trigger:**  
- Captures new bookings or cancellations of events, including participant details.  

**Invitee and Guest Subscription in KlickTipp:**  
- Adds or updates invitees and guests in KlickTipp based on booking details (event name, time, join link, reschedule link, cancel link, etc.).  
- Tracks and processes cancellations for both invitees and guests.  
- Handles rescheduling intelligently to avoid redundant operations.  

**Guest-Specific Operations:**  
- Processes guests individually for bookings and cancellations using dynamic arrays of email addresses.  
- Recovers guest data from invitee records for cancellations since Calendly does not provide guest data upon cancellation.  

**Data Processing:**  
- Standardizes and validates input fields  
- Converts phone numbers to numeric-only format with international prefixes.  
- Transforms dates into UNIX timestamps.  
- Reads out the name of the invitee based on both possible input fields for name (name vs. firstname and lastname field setup).  

**Error Handling:**  
- Validates critical fields like phone numbers, URLs, and dates to prevent incorrect data submissions.  

**Setup Instructions**  

**Authentication:**  
- Set up the Calendly and KlickTipp nodes in your n8n instance.  
- Configure authentication for both Calendly and KlickTipp nodes.  

**Custom Field Preparation in KlickTipp:**  
Create the following custom fields in KlickTipp to align with workflow requirements:  

| **Field Name**                        | **Field Type**   |
|---------------------------------------|------------------|
| Calendly \| event name                | Text             |
| Calendly \| join url                  | URL              |
| Calendly \| reschedule url            | URL              |
| Calendly \| cancel url                | URL              |
| Calendly \| event start datetime      | Date & Time      |
| Calendly \| event end datetime        | Date & Time      |
| Calendly \| invitee start date        | Date             |
| Calendly \| invitee end date          | Date             |
| Calendly \| invitee start time        | Time             |
| Calendly \| invitee end time          | Time             |
| Calendly \| invitee timezone          | Text             |
| Calendly \| invitee guests addresses  | Text             |


After creating fields, allow 10-15 minutes for them to sync. If fields don’t appear, reconnect your KlickTipp credentials.  

**Field Mapping and Adjustments:**  
Open each KlickTipp node and map fields to match your setup. The workflow includes placeholders for:  
- Invitee details (first name, last name, email, and phone).  
- Event details (start/end times, timezone, etc.).  

**Workflow Logic**  

1. **Trigger via Calendly event Booking:**  
   A new form event booking or cancellation from Calendly initiates the workflow  

2. **Data Transformation:**  
   Processes raw Calendly event data to ensure compatibility with KlickTipp’s API.  

3. **Add to KlickTipp Subscriber List:**  
   Adds invitees and guests to the designated KlickTipp list, including event-specific details.  

**Benefits**  

**Efficient lead generation:** Contacts from event bookings are automatically imported into KlickTipp and can be used immediately, saving time and increasing the conversion rate.  
**Automated processes:** Experts can start workflows directly, such as reminder emails or course admissions, reducing administrative effort.  
**Error-free data management:** The template ensures precise data mapping, avoids manual corrections and reinforces a professional appearance.  

**Testing and Deployment**  

Test the workflow by triggering a Calendly event and verifying data updates in KlickTipp.  

**Notes:**  

**Customization:**  
Update field mappings within the KlickTipp nodes to align with your account setup. This ensures accurate data syncing.  

**Resources:**
- [Calendly KlickTipp Knowledge Base help article](https://www.klicktipp.com/de/support/wissensdatenbank/calendly-integration/)
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)

## 🔗 Nodes Used

Calendly Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
