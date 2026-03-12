# ⚡ Weather alerts via SMS (OpenWeather + Twilio)

> ⚡ **400 views** · ⚡ [Personal Productivity](../)

## Description

# 🌤️ Weather Alerts via SMS (OpenWeather + Twilio)

This workflow checks the **current weather and forecast** every 6 hours using the **OpenWeather API**, and automatically sends an **SMS alert via Twilio** if severe conditions are detected. It’s great for keeping teams, family, or field workers updated about extreme heat, storms, or snow.

---

## ⚙️ How It Works

1. **Check Every 6 Hours**  
   - A **Cron node** triggers the workflow every 6 hours.  
   - Frequency can be adjusted based on your needs.  

2. **Fetch Current Weather & Forecast**  
   - Calls **OpenWeather API** for both current conditions and the 24-hour forecast.  
   - Retrieves temperature, precipitation, wind speed, and weather descriptions.  

3. **Analyze Weather Data**  
   - A **Code node** normalizes the weather data.  
   - Detects alert conditions such as:  
     - Extreme heat (≥95°F)  
     - Extreme cold (≤20°F)  
     - Severe storms (thunderstorm, tornado)  
     - Rain or snow  
     - High winds (≥25 mph)  
   - Also checks upcoming forecast for severe weather in the next 24 hours.  

4. **Alert Needed?**  
   - If no severe conditions → workflow stops.  
   - If alerts exist → proceed to SMS formatting.  

5. **Format SMS Alert**  
   - Prepares a compact, clear SMS message with:  
     - Current conditions  
     - Detected alerts  
     - Next 3 hours forecast preview  
   - Example:  
     ```
     🌤️ WEATHER ALERT - New York, US
     NOW: 98°F, clear sky
     🚨 ALERTS (1): 🔥 EXTREME HEAT: 98°F (feels like 103°F)

     📅 NEXT 3 HOURS:
     1 PM: 99°F, sunny
     2 PM: 100°F, sunny
     3 PM: 100°F, partly cloudy
     ```  

6. **Send Weather SMS**  
   - Twilio sends the SMS to configured phone numbers.  
   - Supports multiple recipients.  

7. **Log Alert Sent**  
   - Logs the alert type, urgency, and timestamp.  
   - Useful for auditing and troubleshooting.  

---

## 🛠️ Setup Steps

### 1. OpenWeather API
- Sign up at [openweathermap.org](https://openweathermap.org).  
- Get a **free API key** (1000 calls/day).  
- Update the API key and location (`city` or `lat/long`) in the HTTP Request nodes.  

### 2. Twilio Setup
- Sign up at [twilio.com](https://twilio.com).  
- Get your **Account SID & Auth Token**.  
- Buy a Twilio phone number (≈ $1/month).  
- Add Twilio credentials in n8n.  

### 3. Recipients
- In the **Send Weather SMS** node, update phone numbers (format: `+1234567890`).  
- You can add multiple recipients.  

### 4. Customize Alert Conditions
- Default alerts: rain, snow, storms, extreme temps, high winds.  
- Modify the **Analyze Weather Data** node to fine-tune conditions.  

---

## 📲 Example SMS Output

🌤️ WEATHER ALERT - New York, US
NOW: 35°F, light snow
🚨 ALERTS (2):
❄️ SNOW ALERT: light snow
💨 HIGH WINDS: 28 mph

📅 NEXT 3 HOURS:
10 AM: 34°F, snow
11 AM: 33°F, snow
12 PM: 32°F, overcast

⏰ Alert sent: 08/29/2025, 09:00 AM


---

⚡ With this workflow, you’ll always know when bad weather is on the way — keeping you, your team, or your customers safe and informed.

## 🔗 Nodes Used

Cron, HTTP Request, Twilio

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
