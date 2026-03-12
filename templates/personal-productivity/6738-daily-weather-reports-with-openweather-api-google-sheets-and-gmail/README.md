# ⚡ Daily weather reports with OpenWeather API, Google Sheets, and Gmail

> ⚡ **415 views** · ⚡ [Personal Productivity](../)

## Description

# Daily Weather Reports with OpenWeather API, Google Sheets, and Gmail

This workflow fetches real-time weather data from the OpenWeather API, stores it in a Google Sheet, formats it into a beautifully styled HTML report and emails it to recipients automatically every day at 10:00 AM. It helps teams track and monitor daily weather trends and optionally correlate them with energy production or field operations.

## Who’s it for?

* Renewable energy teams monitoring solar/wind energy output vs weather
* Facility or operations managers requiring daily climate updates
* Researchers or analysts logging environmental metrics
* Any team needing automated, daily weather reports by email

## How it works?

* The workflow begins with a **Schedule Trigger** set to run at **10:00 AM IST daily**.
* It calls the **OpenWeather API** to fetch weather metrics for a predefined location.
* The data is then passed to a **Google Sheets node named "Append Weather to Sheet"**, which stores all the key values into a structured spreadsheet.
* A **Set or Function node** generates a clean, styled HTML email using inline CSS and the weather values.
* Finally, a **Gmail node** sends this report to one or more recipients with a clear subject line and formatted body.

## How to set up?

1. Create/Open your n8n instance (Cloud or Self-hosted).
2. Connect the following credentials:
	* Google Sheets (OAuth2)
	* Gmail (OAuth2)
3. Set your OpenWeather API key in the **HTTP Request** node (`api.openweathermap.org`).
4. Replace latitude/longitude in the request URL as per your location.
5. Link a Google Sheet and define the correct tab name and headers.
6. Configure recipient email(s) in the **Gmail node**.
7. Deploy the workflow and test.

## Requirements

* n8n account (self-hosted or cloud)
* OpenWeather API key (free or paid)
* Google account with access to:
	- Google Sheets
	- Gmail
* A valid Google Sheet created with the following headers (columns):

```
Country
Location Latitude
Location Longitude
Temperature (°C)
Feels Like (°C)
Min Temp (°C)
Max Temp (°C)
Humidity (%)
Pressure (hPa)
Sea Level (hPa)
Ground Level (hPa)
Visibility (m)
Wind Speed (m/s)
Wind Direction (°)
Wind Gust (m/s)
Cloudiness (%)
Sunrise (UTC)
Sunset (UTC)
Date Time (UTC)
```

## How to customize?

* Change the **scheduled time** in the Schedule Trigger node.
* Modify the **location coordinates** in the OpenWeather API URL.
* Update the **HTML template** with different formatting or styling.
* Add a **second email** or sheet for energy output to correlate with weather.
* Extend the workflow with Slack, Notion, or Telegram alerts.

## Add‑ons

* Integrate with a **solar energy API** to track power production with weather.
* Post weather summaries to **Notion**, **Slack** or internal dashboards.
* Generate a visual **chart in Google Sheets** over time using the collected data.
* Trigger alerts when specific thresholds are exceeded (e.g., wind gust &gt; 10 m/s).

## Use Case Examples

* **Solar farm reporting**: Monitor daily weather impact on solar panel output.
* **Logistics planning**: Notify teams of visibility or wind risks before dispatch.
* **Site operations**: Send forecasts to maintenance or ground staff.
* **Academic/weather logging**: Track atmospheric data over time.

## Common Troubleshooting

| **Issue** | **Possible Cause** | **Solution** |
| ------------------------------ | ---------------------------------------- | --------------------------------------------------------- |
| Email not sent | Gmail credentials not connected properly | Reconnect Gmail account via n8n credential manager |
| Weather data is missing fields | API response changed or API key invalid | Verify OpenWeather API key and URL format |
| Google Sheet not updating | Incorrect spreadsheet ID or tab name | Double-check spreadsheet ID and sheet name in node |
| HTML email renders incorrectly | Broken or missing tags in HTML | Test output HTML separately in browser/email preview tool |

---

## **Need Help?**

If you need assistance setting up or customizing this workflow, feel free reach out. We’re here to help!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
