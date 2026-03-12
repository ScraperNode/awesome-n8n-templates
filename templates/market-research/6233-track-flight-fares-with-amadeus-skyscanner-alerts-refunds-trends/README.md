# 📊 Track flight fares with Amadeus & Skyscanner - alerts, refunds & trends

> ⚡ **965 views** · 📊 [Market Research & Insights](../)

## Description

This automated n8n workflow tracks booked flight fares post-purchase using Amadeus and Skyscanner APIs to detect drops for refund or credit opportunities. It streamlines fare monitoring, updates booking statuses, and notifies users via SMS or email.

## Fundamental Aspects
- **Fare Check Trigger** - Initiates the workflow
- **Get Tracked Bookings** - Retrieves existing booking data
- **Prepare Fare Query** - Prepares query parameters
- **Search Current Fares** - Queries Skyscanner for current fares
- **Analyze Fare Drops** - Identifies significant fare reductions
- **Update Fare Tracking** - Updates fare tracking records
- **Update Booking Status** - Updates status based on fare changes
- **Check if Notification Needed** - Determines if alerts are required
- **Send Fare Drop Email** - Notifies users via email
- **Notify Slack Team** - Alerts the team via Slack
- **Check Refund Eligible** - Assesses refund eligibility
- **Initiate Refund Process** - Starts refund procedure if eligible
- **Check if SMS Needed** - Decides if SMS alert is necessary
- **Send SMS Alert** - Sends SMS notification

## Setup Instructions
1. Import the workflow into n8n
2. Configure API credentials for Amadeus and Skyscanner
3. Run the workflow
4. Verify notifications and refund processes

## Features
- **Fare Monitoring** - Tracks and compares fares using Amadeus and Skyscanner
- **Alert System** - Sends email and SMS notifications for fare drops
- **Refund Management** - Checks and initiates refund processes
- **Trend Analysis** - Analyzes fare trends for strategic decisions

## DB Queries

- **Get Tracked Bookings Columns:** - booking_id, passenger_name, email, phone, flight_number, departure_date, origin, destination, airline, booking_class, original_fare, booking_date, confirmation_code, tracking_enabled, last_checked, current_lowest_fare, trend.
- **Update Fare Tracking Columns:** - booking_id, check_date, lowest_fare, fare_source, savings_amount, savings_percentage, fare_trend, priority_level, action_recommended, refund_eligible, available_fares_json, updated_at.
- **Update Booking Status: Columns** - last_checked, current_lowest_fare, booking_id.



## DB Setup: 

- Create tables **'bookings'** and **'fare_tracking'** with above columns, set 'booking_id' as primary key, and ensure proper indexing for performance.
- Run queries after configuring DB connection in n8n with appropriate credentials.

## Parameters to Configure
- **amadeus_api_key**: Amadeus API key
- **skyscanner_api_key**: Skyscanner API key
- **email_recipients**: List of email addresses for alerts
- **sms_recipients**: List of phone numbers for SMS alerts
- **slack_channel**: Slack channel for team notifications
- **refund_threshold**: Minimum fare drop for refund eligibility

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
