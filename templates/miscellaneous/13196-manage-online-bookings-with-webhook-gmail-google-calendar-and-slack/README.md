# 🔧 Manage online bookings with webhook, Gmail, Google Calendar and Slack

> ⚡ **12 views** · 🔧 [Miscellaneous](../)

## Description

Receive booking requests via webhook with automatic validation, duplicate detection, availability checking, confirmation emails, Google Calendar sync, and Slack notifications.

WHAT IT DOES:

Accepts booking requests (name, email, date, time, service type, party size) via webhook
Validates all required fields and email format
Checks for duplicate bookings within 24 hours for the same customer
Verifies slot availability against your database
Generates unique confirmation code (BOOK-timestamp-random) for each booking
Sends styled HTML confirmation email via Gmail
Creates Google Calendar event for staff scheduling
Notifies team via Slack #bookings channel
Logs audit trail entry for every booking attempt
Returns alternative time suggestions when requested slot is unavailable

INCLUDED FLOWS:

Valid booking: Webhook receives POST → Validate fields and email → Check duplicates via API → Check availability via API → Create booking → Send confirmation email → Create Calendar event → Notify Slack → Log audit → Return 201 with confirmation
Invalid request: Missing name, email, date, or time → Return 400 with specific validation errors
Duplicate booking: Same email already has booking on requested date → Return 409 with existing booking ID
Unavailable slot: Time slot already booked → Return 409 with list of alternative available slots
Workflow error: Any node fails → Error trigger → Slack alert to #errors channel

RESPONSE CODES:

201 Created: Booking confirmed with bookingId, customer details, date, time, duration, and confirmationSent flag
400 Bad Request: Validation failed with list of specific errors and received data
409 Conflict (duplicate): Booking already exists for this email on requested date with existingBookingId
409 Conflict (unavailable): Requested slot not available with array of alternative slots

BOOKING DATA:

Each booking generates a unique ID (BOOK-timestamp-random)
Captures customerName, customerEmail, customerPhone, serviceType, requestedDate, requestedTime
Default duration 60 minutes, default partySize 1
Includes notes and source fields (default: website)

SETUP:

HTTP Header Auth credential with API key and base URL for your booking REST API
Gmail credential for sending HTML confirmation emails to customers
Google Calendar credential for creating staff scheduling events (uses primary calendar)
Slack credential with access to #bookings and #errors channels
Backend API with endpoints: POST /api/bookings, GET /api/bookings/check-duplicate, GET /api/bookings/availability, POST /api/bookings/audit

CUSTOMIZABLE:

Validation rules are adjustable in the Validate Booking code node (add or remove required fields, change email regex)
Duplicate detection window can be modified in the API - Check Duplicates request parameters
Confirmation email HTML template is fully editable in the Format Email code node (colors, layout, content)
Calendar event format is configurable in the Prepare Calendar Event code node
Slack notification format and channel are editable in the Slack - Notify Team node
Party size, duration defaults, and service types can be adjusted in the Validate Booking code node

IDEAL FOR:

Restaurants, salons, clinics, hotels, and service businesses that need automated booking management with confirmation emails, calendar sync, and team notifications.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
