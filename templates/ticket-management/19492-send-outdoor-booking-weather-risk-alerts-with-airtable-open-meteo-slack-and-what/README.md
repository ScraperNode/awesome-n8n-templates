# 🎫 Send outdoor booking weather risk alerts with Airtable, Open-Meteo, Slack and WhatsApp

> ⚡ **5 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs daily to check upcoming confirmed outdoor bookings in Airtable, fetches location-based forecasts from Open-Meteo, scores weather risk, and sends Slack and WhatsApp notifications for moderate or severe conditions while updating the booking record to avoid repeat customer alerts.

## How it works
1. Runs daily on a schedule.
2. Searches Airtable for confirmed bookings marked as outdoor and filters them to only those within the configured lookahead window.
3. Geocodes each booking’s location with Open-Meteo Geocoding and fetches a date-specific forecast from the Open-Meteo Forecast API.
4. Calculates a risk level (none, moderate, severe) from rain probability, expected precipitation, and maximum wind speed using the configured thresholds.
5. If the risk is moderate, posts an internal alert to a Slack channel and updates the booking’s risk level in Airtable.
6. If the risk is severe and the customer has not been notified yet, sends a WhatsApp message to the customer, posts a Slack alert to the owner, and marks the Airtable record as severe with customer_notified enabled.
7. If the risk is severe and the customer was already notified, posts a “still severe” update to Slack and updates the Airtable risk level without messaging the customer again.

## Setup
1. Create an Airtable base with a Bookings table that includes fields like customer_name, customer_number, location, booking_date, is_outdoor, status, customer_notified, and risk_level, and connect an Airtable Personal Access Token credential.
2. Connect a Slack credential and set the target owner Slack channel ID in the configuration values.
3. Connect a WhatsApp Business Cloud credential, set your WhatsApp phone number ID in the configuration values, and ensure Airtable customer_number uses an addressable WhatsApp recipient format.
4. Update the configuration values for Airtable base ID/table name, lookahead days, and rain/wind thresholds to match your business rules.
5. Adjust the schedule trigger time to your preferred daily run hour and activate the workflow.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
