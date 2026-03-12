# 🔧 Real-time flight tracking with Aviation API, Slack & SendGrid/Twilio alerts

> ⚡ **588 views** · 🔧 [Miscellaneous](../)

## Description

This automated n8n workflow continuously monitors airline schedule changes by fetching real-time flight data, comparing it with stored schedules, and instantly notifying both internal teams and affected passengers through multiple communication channels. The system ensures stakeholders are immediately informed of any flight delays, cancellations, gate changes, or other critical updates.

## **Good to Know**

* Flight data accuracy depends on the aviation API provider's update frequency and reliability
* Critical notifications (cancellations, major delays) trigger immediate passenger alerts via SMS and email
* Internal Slack notifications keep operations teams informed in real-time
* Database logging maintains a complete audit trail of all schedule changes
* The system processes only confirmed schedule changes to avoid false notifications
* Passenger notifications are sent only to those with confirmed tickets for affected flights

## **How It Works**

1. **Schedule Trigger** - Automatically runs every 30 minutes to check for flight schedule updates
2. **Fetch Airline Data** - Retrieves current flight information from aviation APIs
3. **Get Current Schedules** - Pulls existing schedule data from the internal database
4. **Process Changes** - Compares API data with database records to identify schedule changes
5. **Check for Changes** - Determines if any updates require processing and notifications
6. **Update Database** - Saves schedule changes to the internal flight database
7. **Notify Slack Channel** - Sends operational updates to the flight operations team
8. **Check Urgent Notifications** - Identifies critical changes requiring immediate passenger alerts
9. **Get Affected Passengers** - Retrieves contact information for passengers on changed flights
10. **Send Email Notifications** - Dispatches detailed schedule change emails via SendGrid
11. **Send SMS (Critical Only)** - Sends urgent text alerts for cancellations and major delays
12. **Update Internal Systems** - Syncs changes with other airline systems via webhooks
13. **Log Sync Activity** - Records all synchronization activities for audit and monitoring

## **Data Sources**

The workflow integrates with multiple data sources and systems:

1. **Aviation API (Primary Data Source)**
   * Real-time flight status and schedule data
   * Departure/arrival times, gates, terminals
   * Flight status (on-time, delayed, cancelled, diverted)
   * Aircraft and route information

2. **Internal Flight Database**
   * **flight_schedules table** - Current schedule data with columns:
     * flight_number (text) - Flight identifier (e.g., "AA123")
     * departure_time (timestamp) - Scheduled departure time
     * arrival_time (timestamp) - Scheduled arrival time
     * status (text) - Flight status (active, delayed, cancelled, diverted)
     * gate (text) - Departure gate number
     * terminal (text) - Terminal identifier
     * airline_code (text) - Airline IATA code
     * origin_airport (text) - Departure airport code
     * destination_airport (text) - Arrival airport code
     * aircraft_type (text) - Aircraft model
     * updated_at (timestamp) - Last update timestamp
     * created_at (timestamp) - Record creation timestamp
   
   * **passengers table** - Passenger contact information with columns:
     * passenger_id (integer) - Unique passenger identifier
     * name (text) - Full passenger name
     * email (text) - Email address for notifications
     * phone (text) - Mobile phone number for SMS alerts
     * notification_preferences (json) - Communication preferences
     * created_at (timestamp) - Registration timestamp
     * updated_at (timestamp) - Last profile update
   
   * **tickets table** - Booking and ticket status with columns:
     * ticket_id (integer) - Unique ticket identifier
     * passenger_id (integer) - Foreign key to passengers table
     * flight_number (text) - Flight identifier
     * flight_date (date) - Travel date
     * seat_number (text) - Assigned seat
     * ticket_status (text) - Status (confirmed, cancelled, checked-in)
     * booking_reference (text) - Booking confirmation code
     * fare_class (text) - Ticket class (economy, business, first)
     * created_at (timestamp) - Booking timestamp
     * updated_at (timestamp) - Last modification timestamp
   
   * **sync_logs table** - Audit trail and system logs with columns:
     * log_id (integer) - Unique log identifier
     * workflow_name (text) - Name of the workflow that created the log
     * total_changes (integer) - Number of schedule changes processed
     * sync_status (text) - Status (completed, failed, partial)
     * sync_timestamp (timestamp) - When the sync occurred
     * details (json) - Detailed log information and changes
     * error_message (text) - Error details if sync failed
     * execution_time_ms (integer) - Processing time in milliseconds

3. **Communication Channels**
   * Slack - Internal team notifications
   * SendGrid - Passenger email notifications
   * Twilio - Critical SMS alerts
   * Internal webhooks - System integrations

## **How to Use**

* Import the workflow into your n8n instance
* Configure aviation API credentials (AviationStack, FlightAware, or airline-specific APIs)
* Set up PostgreSQL database connection with required tables
* Configure Slack bot token for operations team notifications
* Set up SendGrid API key and email templates for passenger notifications
* Configure Twilio credentials for SMS alerts (critical notifications only)
* Test with sample flight data to verify all notification channels
* Adjust monitoring frequency and severity thresholds based on operational needs
* Monitor sync logs to ensure reliable data synchronization

 ## **Requirements**

1. **API Access**
   * Aviation data provider (AviationStack, FlightAware, etc.)
   * SendGrid account for email delivery
   * Twilio account for SMS notifications
   * Slack workspace and bot token

2. **Database Setup**
   * PostgreSQL database with flight schedule tables
   * Passenger and ticket management tables
   * Audit logging tables for tracking changes

3. **Infrastructure**
   * n8n instance with appropriate node modules
   * Reliable internet connection for API calls
   * Proper credential management and security

## **Customizing This Workflow**

Modify the **Process Changes** node to adjust change detection sensitivity, add custom business rules, or integrate additional data sources like weather or airport operational data. Customize notification templates in the email and SMS nodes to match your airline's branding and communication style. Adjust the **Schedule Trigger** frequency based on your operational requirements and API rate limits.

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
