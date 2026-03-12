# 📊 Live flight fare tracker with Aviation Stack API – alerts via Gmail & Telegram

> ⚡ **907 views** · 📊 [Market Research & Insights](../)

## Description

This automated **n8n workflow** continuously tracks real-time flight fare changes by querying airline APIs (e.g., Amadeus, Skyscanner). It compares new prices with historical fares and sends instant notifications to users when a fare drop is detected. All tracked data is structured and logged for audit and analysis.

## **Key Insights**

* Works post-booking to track price fluctuations for booked routes.
* Supports multiple fare sources for improved accuracy and comparison.
* Users are notified instantly via **email, SMS**, or **Slack** for high-value drops.
* Historical pricing data is stored for trend analysis and refund eligibility checks.
* Can be extended to monitor specific routes or apply airline-specific refund rules.

## **Workflow Process**

1. **Schedule Trigger**
   Initiates the fare check every 6 hours.

2. **Fetch Flight Fare Data**
   Queries APIs (Amadeus, Skyscanner) for current flight fares.

3. **Get Tracked Bookings**
   Retrieves tracked routes from the internal database.

4. **Compare Fares**
   Detects price drops compared to original booking fares.

5. **Update Fare History Table**
   Logs the new fare and timestamp into the `fare_tracking` table.

6. **Classify Drops**
   Determines priority based on absolute and percentage savings.

7. **Notify Users**

   * **Email Alerts**: For all medium/high priority drops.
   * **SMS Alerts**: For savings &gt; \$100 or &gt;15%.
   * **Slack Notifications**: For internal alerts and rebooking suggestions.

8. **Log Activity**
   Stores all sync actions and notifications in `fare_alert_logs`.

## **Usage Guide**

* **Import** the workflow into your n8n instance.
* **Set up** API credentials for Amadeus and Skyscanner.
* Configure **email, SMS (Twilio)**, and **Slack** credentials.
* Update the booking database with valid records (with route, fare, timestamp).
* Set schedule frequency (e.g., every 6 hours).
* Review logs regularly to monitor fare alert activity and system health.

## **Prerequisites**

* Valid accounts and credentials for:

  * **Amadeus API**
  * **Skyscanner API**
  * **SendGrid (or SMTP)** for email
  * **Twilio** for SMS
  * **Slack** workspace & bot token
* PostgreSQL or MySQL database for fare tracking
* Tracked booking dataset (with routes, fares, and user contacts)

## **Customization Options**

* Adjust **alert thresholds** in the comparison logic (e.g., trigger only if fare drops &gt; \$50 or &gt;10%).
* Add new notification channels (e.g., WhatsApp, Telegram).
* Extend logic to track multi-leg or roundtrip fares.
* Integrate airline refund APIs (where supported) to auto-initiate refund or credit requests.

## **Excel Output Columns**

When exporting or logging fare tracking data to Excel or CSV, use the following structure:

| flight\_number | airline         | departure                    | arrival                   | departure\_time           | arrival\_time             | current\_fare | route   | timestamp                |
| -------------- | --------------- | ---------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------- | ------- | ------------------------ |
| AT5049         | Royal Air Maroc | John F Kennedy International | Los Angeles International | 2025-07-21T06:00:00+00:00 | 2025-07-21T08:59:00+00:00 | 235           | JFK-LAX | 2025-07-21T13:04:14.000Z |
| BA1905         | British Airways | John F Kennedy International | Los Angeles International | 2025-07-21T06:00:00+00:00 | 2025-07-21T08:59:00+00:00 | 479           | JFK-LAX | 2025-07-21T13:04:14.000Z |

## 🔗 Nodes Used

Cron, Function, Google Sheets, HTTP Request, Telegram, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
