# ⚒️ Clean and log IoT sensor data to InfluxDB (Webhook | Function | HTTP)

> ⚡ **486 views** · ⚒️ [Engineering](../)

## Description

# 🌡 IoT Sensor Data Cleaner + InfluxDB Logger (n8n | Webhook | Function | InfluxDB)

This workflow accepts raw sensor data from IoT devices via webhook, applies basic cleaning and transformation logic, and writes the cleaned data to an InfluxDB instance for time-series tracking. Perfect for renewable energy sites, smart farms and environmental monitoring setups using dashboards like Grafana or Chronograf.

## ⚡ Quick Implementation Steps

1. Import the workflow JSON into your n8n instance.
2. Edit the **Set Config** node to include your InfluxDB credentials and measurement name.
3. Use the webhook URL (`/webhook/sensor-data`) in your IoT device or form to send sensor data.
4. Start monitoring your data directly in InfluxDB!

## 🎯 Who’s It For

- IoT developers and integrators.
- Renewable energy and environmental monitoring teams.
- Data engineers working with time-series data.
- Smart agriculture and utility automation platforms.

## 🛠 Requirements

| Tool | Purpose |
|------|---------|
| n8n Instance | For automation |
| InfluxDB (v1 or v2) | To store time-series sensor data |
| IoT Device or Platform | To POST sensor data |
| Function Node | To filter and transform data |

## 🧠 What It Does

- Accepts JSON-formatted sensor data via HTTP POST.
- Validates the data (removes invalid or noisy readings).
- Applies transformation (rounding, timestamp formatting).
- Pushes the cleaned data to InfluxDB for real-time visualization.

## 🧩 Workflow Components

- **Webhook Node:** Exposes an HTTP endpoint to receive sensor data.
- **Function Node:** Filters out-of-range values, formats timestamp, rounds data.
- **Set Node:** Stores configurable values like InfluxDB host, user/pass, and measurement name.
- **InfluxDB Node:** Writes valid records into the specified database bucket.

## 🔧 How To Set Up – Step-by-Step

1. **Import Workflow:**
   - Upload the provided `.json` file into your n8n workspace.

2. **Edit Configuration Node:**
   - Update InfluxDB connection info in the `Set Config` node:
     - `influxDbHost`, `influxDbDatabase`, `influxDbUsername`, `influxDbPassword`
     - `measurement`: What you want to name the data set (e.g., `sensor_readings`)

3. **Send Data to Webhook:**
   - Webhook URL: `https://your-n8n/webhook/sensor-data`
   - Example payload:
     ```json
     {
       "temperature": 78.3,
       "humidity": 44.2,
       "voltage": 395.7,
       "timestamp": "2024-06-01T12:00:00Z"
     }
     ```

4. **View in InfluxDB:**
   - Log in to your InfluxDB/Grafana dashboard and query the new measurement.

## ✨ How To Customize

| Customization | Method |
|---------------|--------|
| Add more fields (e.g., wind_speed) | Update the Function & InfluxDB nodes |
| Add field/unit conversion | Use math in the Function node |
| Send email alerts on anomalies | Add IF → Email branch after Function node |
| Store in parallel in Google Sheets | Add Google Sheets node for hybrid logging |

## ➕ Add‑ons (Advanced)

| Add-on | Description |
|--------|-------------|
| 📊 Grafana Integration | Real-time charts using InfluxDB |
| 📧 Email on Faulty Data | Notify if voltage &lt; 0 or temperature too high |
| 🧠 AI Filtering | Add OpenAI or TensorFlow for anomaly detection |
| 🗃 Dual Logging | Save data to both InfluxDB and BigQuery/Sheets |

## 📈 Use Case Examples

1. Remote solar inverter sends temperature and voltage via webhook.
2. Environmental sensor hub logs humidity and air quality data every minute.
3. Smart greenhouse logs climate control sensor metrics.
4. Edge IoT devices periodically report health and diagnostics remotely.

## 🧯 Troubleshooting Guide

| Issue | Cause | Solution |
|-------|-------|----------|
| No data logged in InfluxDB | Invalid credentials or DB name | Recheck InfluxDB values in config |
| Webhook not triggered | Wrong method or endpoint | Confirm it is a POST to `/webhook/sensor-data` |
| Data gets filtered | Readings outside valid range | Check logic in Function node |
| Data not appearing in dashboard | Influx write format error | Inspect InfluxDB log and field names |


## 📞 Need Assistance?

Need help integrating this workflow into your energy monitoring system or need InfluxDB dashboards built for you?

👉 Contact WeblineIndia | Experts in workflow automation and time-series analytics.

## 🔗 Nodes Used

Function, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
