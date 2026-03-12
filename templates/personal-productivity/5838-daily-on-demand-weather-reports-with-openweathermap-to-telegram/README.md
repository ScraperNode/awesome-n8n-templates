# ⚡ Daily & on-demand weather reports with OpenWeatherMap to Telegram

> ⚡ **137 views** · ⚡ [Personal Productivity](../)

## Description

This powerful **n8n automation** sends you **daily weather updates** directly to your **Telegram chat** using **live data from OpenWeatherMap**. It supports **automatic daily updates** and **manual lookups** via form input.

---

## ✅ Prerequisites

Before you begin, make sure you have:

* A working **n8n instance** (v1.0 or later recommended).
* An account with **OpenWeatherMap** (free plan is sufficient).
* A **Telegram Bot** created via [@BotFather](https://t.me/botfather).
* Your **Telegram user ID** or **chat ID**.

---

## 🔐 API & Bot Setup

### 🧩 OpenWeatherMap API

1. Go to [https://openweathermap.org/api](https://openweathermap.org/api)
2. Sign up and verify your account.
3. Navigate to **API Keys** in your account dashboard.
4. Copy your **API key** (used later in the HTTP Request node).

### 🤖 Telegram Bot

1. Open [@BotFather](https://t.me/botfather) in Telegram.
2. Run `/newbot` and follow the prompts:

   * Choose a name and username for your bot.
   * You’ll get a **bot token** (copy this).
3. Start a chat with your new bot to activate it.
4. To get your **Telegram User ID**, use [@userinfobot](https://t.me/userinfobot) or an n8n Telegram Trigger node.

---

## 🔄 Trigger Options

### ⏰ Schedule Trigger (Automatic)

* Runs **daily at 8:00 AM IST**.
* Ideal for consistent, passive updates.

### 📝 Form Trigger (Manual)

* Input 🌆 **City** and 🌍 **Country** manually.
* Instantly receive weather info in Telegram.

---

## 🧠 How the Flow Works

1. **Trigger Activated** (Scheduled or Form)
2. **City & Country fetched** (default or from form)
3. **HTTP Request** sent to OpenWeatherMap with API key
4. **Weather Data Parsed & Formatted**:

   * 📅 Current Date
   * 📍 City & Country
   * 🌤️ Weather Description
   * 🌡️ Temperature (°C)
   * 💧 Humidity (%)
   * 🌬️ Wind Speed (m/s)
   * 🔼 Atmospheric Pressure
   * 🌅 Sunrise Time (IST)
   * 🌇 Sunset Time (IST)
5. **Message Sent to Telegram**

---

## 🧰 Nodes Used

* **Schedule Trigger** – Runs every day at 8:00 AM IST
* **Form Trigger** – Accepts user input
* **Set Node** – Default city/country values and date formatting
* **HTTP Request** – Calls OpenWeatherMap API
* **Function Node** – Converts timestamps to IST
* **Telegram Node** – Sends formatted weather message

---

## 📦 Example Telegram Output

```
📅 Wednesday, 10 July 2025  
🌤 Weather in Mumbai, IN:  
Condition: Clear sky  
Temperature: 30°C  
💧 Humidity: 70%  
🌬 Wind Speed: 3 m/s  
🔼 Pressure: 1013 hPa  
🌅 Sunrise: 5:57:12 AM  
🌇 Sunset: 6:53:45 PM
```

---

## 🛠️ Customization Tips

### 🏙️ Change Default City/Country

* Locate the **Set Node** (used before the API call).
* Replace `"Mumbai"` and `"IN"` with your preferred location.
* Or connect the **Form Trigger** input to allow dynamic values.

### 🕗 Change Schedule Time

* Open the **Schedule Trigger** node.
* Adjust to your preferred time zone and daily timing (e.g., 7 AM IST).

### 🧪 Add Extra Data

* OpenWeatherMap returns more fields like visibility, UV index, etc.
* You can include these in your Telegram message via the **Function Node** and **Set Node**.

---

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
