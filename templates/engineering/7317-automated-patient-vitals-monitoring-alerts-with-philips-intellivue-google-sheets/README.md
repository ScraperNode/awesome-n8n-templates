# ⚒️ Automated patient vitals monitoring & alerts with Philips IntelliVue & Google Sheets

> ⚡ **374 views** · ⚒️ [Engineering](../)

## Description

This workflow utilizes **Philips IntelliVue Device** details to automatically track patient vitals, such as heart rate and oxygen levels. It quickly spots critical health issues and sends alerts to healthcare staff for fast action. The system saves data for records and helps improve patient care with real-time updates. It’s simple to set up and adjust for different needs.

## Essential Information

- Processes data from **Philips IntelliVue Devices** to monitor vitals instantly.
- Filters and categorizes conditions as critical or non-critical based on thresholds.
- Sends clinical alerts for critical conditions and logs data for review.
- Runs every 30 seconds to ensure timely updates.

## System Architecture

### Data Collection Pipeline:

- **Poll Device Data Every 30s**: Continuously retrieves vitals from Philips IntelliVue Devices.
- **Fetch from IntelliVue Gateway**: Retrieves data via HTTP GET requests.

### Processing Pipeline:
- **Process Device Data**: Analyzes and validates the data stream.

### Alert Generation Flow:

- **Validate & Enrich Data**: Ensures accuracy and adds patient context.
- **Save to Patient Database**: Stores data for records.
- **Check Alert Status**: Applies rules to trigger alerts.
- **Send Clinical Alert**: Notifies staff for critical conditions.

## Implementation Guide

- Import workflow JSON into n8n.
- Configure the Philips IntelliVue Devices gateway URL and test with sample data.
- Set up alert credentials (e.g., email).
- Test and adjust rule thresholds.

## Technical Dependencies

- Philips IntelliVue Devices for vitals data.
- n8n for automation.
- Email or messaging API for alerts.
- Database for data storage.

## Customization Possibilities

- Adjust Switch node rules for critical thresholds.
- Customize alert messages.
- Modify database schema.
- Add logging for analysis.

## 🔗 Nodes Used

Cron, Send Email, Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
