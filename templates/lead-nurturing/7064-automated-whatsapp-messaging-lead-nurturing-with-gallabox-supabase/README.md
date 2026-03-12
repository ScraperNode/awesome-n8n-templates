# 💬 Automated WhatsApp messaging & lead nurturing with Gallabox & Supabase

> ⚡ **206 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

WABA Message Journey Flow Documentation
This document outlines the automated workflow for sending WhatsApp messages to contacts, triggered hourly and managed through disposition and message count logic. The workflow is designed to ensure contacts receive messages based on their status and the frequency of previous interactions.

1. Trigger and Data Retrieval
The journey begins with a time-based trigger and data retrieval from the Supabase contacts table.
Trigger: A "Schedule Trigger3" node initiates the workflow every hour. This ensures that the system regularly checks for contacts requiring messages.
Get Contacts: The "Get many rows1" node (Supabase) then retrieves all relevant contact data from the contacts_ampere table in Supabase. This brings in contact details such as name, phone, Disposition, Count, and last_message_sent.

2. Disposition-Based Segregation
After retrieving the contacts, the workflow segregates them based on their Disposition status.
Disposition Switch: The "Disposition Switch" node acts as the primary routing mechanism. It evaluates the Disposition field of each contact and directs them to different branches of the workflow based on predefined categories.
Case 0: new_lead: Contacts with the disposition new_lead are routed to the "Count Switch" for further processing.
Cases 1-4: The workflow also includes branches for test_ride, Booking, walk_in, and Sale dispositions, though the detailed logic for these branches is not fully laid out in the provided JSON beyond the switch nodes ("Switch2", "Switch3", "Switch4", "Switch5"). The documentation focuses on the new_lead disposition's detailed flow, which can be replicated for others.

3. Message Count Logic (for new_lead Disposition)
For contacts identified as new_lead, the workflow uses a "Count Switch" to determine which message in the sequence should be sent.
Count Switch: This node evaluates the Count field for each new_lead contact. This Count likely represents the number of messages already sent to the contact within this specific journey.
Count = 0: Directs to "Loop Over Items1" (first message in sequence).
Count = 1: Directs to "Loop Over Items2" (second message in sequence).
Count = 2: Directs to "Loop Over Items3" (third message in sequence).
Count = 3: Directs to "Loop Over Items4" (fourth message in sequence).

4. Looping and Interval Check
Each "Loop Over Items" node processes contacts in batches and incorporates an "If Interval" check (except for Loop Over Items1).
Loop Over Items (e.g., "Loop Over Items1", "Loop Over Items2", "Loop Over Items3", "Loop Over Items4"): These nodes iterate through the contacts received from the "Count Switch" output.
Interval Logic:
"If Interval" (for Count = 1 from "Loop Over Items2"): Checks if the interval is greater than or equal to 4. This interval value is handled by a separate Supabase cron job, which updates it every minute based on Current time - last api hit time in hours.
"If Interval1" (for Count = 2 from "Loop Over Items3"): Checks if the interval is exactly 24 hours.
"If2" (for Count = 3 from "Loop Over Items4"): Checks if the interval is exactly 24 hours.

5. Sending WhatsApp Messages
If a contact passes the interval check (or immediately for Count = 0), a WhatsApp message is sent using the Gallabox API.
HTTP Request Nodes (e.g., "new_lead_0", "new_lead_", "new_lead_3", "new_lead_2"): These nodes are responsible for sending the actual WhatsApp messages via the Gallabox API. They are configured with:
Method: POST
URL: https://server.gallabox.com/devapi/messages/whatsapp
Authentication: apiKey and apiSecret are used in the headers.
Body: Contains channelId, channelType (whatsapp), and recipient (including name and phone).
WhatsApp Message Content: Includes type: "template" and templateName (e.g., testing_rahi, wu_2, testing_rahi_1). The bodyValues dynamically insert the contact's name and other details. Some messages also include buttonValues for quick replies (e.g., "Show me Brochure").

6. Logging and Updating Contact Status
After a message is sent (or attempted), the workflow logs the interaction and updates the contact's record.
Create Logs (e.g., "Create Logs", "Create Logs1", "Create Logs2", "Create Logs3"): These Supabase nodes record details of the message send attempt into the logs_nurture_ampere table. This includes:
message_id (from the Gallabox API response body)
phone and name of the contact
disposition and mes_count (which is Count + 1 from the contacts table)
last_sent (timestamp from Gallabox API response headers)
status_code and status_message (from Gallabox API response or error).
These nodes are configured to "continueRegularOutput" on error, meaning the workflow will attempt to proceed even if logging fails.
Status Code Check (e.g., "If StatusCode", "If StatusCode 202", "If StatusCode 203", "If StatusCode 204"): Immediately after attempting to create a log, an "If" node checks if the status_code from the message send attempt is "202" (indicating acceptance by the messaging service).
Update Contact Row (e.g., "Update a row1", "Update a row2", "Update a row3", "Update a row4"): If the status code is 202, these Supabase nodes update the contacts_ampere table for the specific contact.
The Count for the contact is incremented by 1 (Count + 1).
The last_message_sent field is updated with the date from the Gallabox API response headers.
These nodes are also configured to "continueRegularOutput" on error.
This structured flow ensures that contacts are nurtured through a sequence of WhatsApp messages, with each interaction logged and the contact's status updated for future reference and continuation of the journey.

## 🔗 Nodes Used

HTTP Request, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
