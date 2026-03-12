# 📱 Automated asteroid alerts with NASA API, Slack & Google Calendar

> ⚡ **107 views** · 📱 [Social Media & Email Marketing](../)

## Description

This n8n template creates an automated alert system that checks NASA's data for near-Earth asteroids twice a day. When it finds asteroids meeting specific criteria, it sends a summary alert to Slack and creates individual events in Google Calendar for each object.

## Use cases

- **Automated Monitoring**: Keep track of potentially hazardous asteroids without manually checking websites.
- **Team or Community Alerts**: Automatically inform a team, a group of friends, or a community about significant celestial events via Slack.
- **Personalized Space Calendar**: Populate your Google Calendar with upcoming asteroid close approaches, creating a personal "what's up in space" agenda.
- **Educational Tool**: Use this as a foundation to learn about API data fetching, data processing, and multi-channel notifications in n8n.

## Good to know

- This workflow runs on a **schedule** (every 12 hours by default) and does not require a manual trigger.
- **NASA API Key is highly recommended**. The default `DEMO_KEY` has strict rate limits. Get a free key from [api.nasa.gov](https://api.nasa.gov/).
- The filtering logic for what constitutes an "alert-worthy" asteroid (distance and size) is fully customizable within the "Filter and Process Asteroids" Code node.

## How it works

1.  A **Schedule Trigger** starts the workflow every 12 hours.
2.  The "Calculate Date Range" **Code node** generates the start and end dates for the API query (today to 14 days from now).
3.  The **NASA node** uses these dates to query the Near Earth Object Web Service (NeoWs) API, retrieving a list of all asteroids that will pass by Earth in that period.
4.  The "Filter and Process Asteroids" **Code node** iterates through the list. It filters out objects that are too small or too far away, based on thresholds defined in the code. It then formats and sorts the remaining "interesting" asteroids by their closest approach distance.
5.  An **If node** checks if any asteroids were found after filtering.
    - If **true** (asteroids were found), the flow continues to the alert steps.
    - If **false**, the workflow ends quietly via a **NoOp node**.
6.  The "Format Alert Messages" **Code node** compiles a single, well-formatted summary message for Slack and prepares the data for other notifications.
7.  The workflow then splits into two parallel branches:
    - **Slack Alert**: The **Slack node** sends the summary message to a specified channel.
    - **Calendar Events**: The **Split Out node** separates the data so that each asteroid is processed individually. For each asteroid, the **Google Calendar node** creates an all-day event on its close-approach date.

## How to use

1.  **Configure the NASA Node**:
    - Open the "Get an asteroid neo feed" (NASA) node.
    - Create new credentials and replace the default `DEMO_KEY` with your own NASA API key.

2.  **Customize Filtering (Optional)**:
    - Open the "Filter and Process Asteroids" Code node.
    - Adjust the `MAX_DISTANCE_KM` and `MIN_DIAMETER_METERS` variables to make the alerts more or less sensitive.
      ```javascript
      // Example: For closer, larger objects
      const MAX_DISTANCE_KM = 7500000; // 7.5 million km (approx. 19.5 lunar distances)
      const MIN_DIAMETER_METERS = 100;   // 100 meters
      ```

3.  **Configure Slack Alerts**:
    - Open the "Send Slack Alert" node.
    - Add your Slack OAuth2 credentials.
    - Select the channel where you want to receive alerts (e.g., `#asteroid-watch`).

4.  **Configure Google Calendar Events**:
    - Open the "Create an event" (Google Calendar) node.
    - Add your Google Calendar OAuth2 credentials.
    - Select the calendar where events should be created.

5.  **Activate the workflow**.

## Requirements

- A free **NASA API Key**.
- **Slack credentials** (OAuth2) and a workspace to post alerts.
- **Google Calendar credentials** (OAuth2) to create events.

## Customising this workflow

- **Add More Notification Channels**: Add nodes for Discord, Telegram, or email to send alerts to other platforms.
- **Create a Dashboard**: Instead of just sending alerts, use the processed data to populate a database (like Baserow or Postgres) to power a simple dashboard.
- **Different Data Source**: Modify the HTTP Request node to pull data from other space-related APIs, like a feed of upcoming rocket launches.

## 🔗 Nodes Used

Slack, Google Calendar, NASA, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
