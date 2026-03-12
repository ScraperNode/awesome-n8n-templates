# 💬 Create personalized city trip itineraries with Telegram Bot & GPT-4o

> ⚡ **181 views** · 💬 [Support Chatbots](../)

## Description

### Overview

This workflow transforms your **Telegram bot** into a smart AI-powered travel assistant that instantly creates **3-day trip plans** for any city in the world. Users can personalize trips by sending hashtags such as `#luxury`, `#budget`, or `#romantic` to receive itineraries aligned with their travel style — from cozy getaways to adrenaline-filled adventures.

Ideal for **travel bloggers, tour operators, and AI enthusiasts** looking to provide interactive trip suggestions through Telegram.

---

### How it Works

1. **Telegram Trigger** — Listens for new messages from users.
2. **Show Typing Indicator** — Sends a “typing…” signal for a smooth user experience.
3. **Switch Node** — Detects preset hashtags (e.g. `#cozy`, `#nightlife`, `#cultural`) and routes the flow.
4. **Prompt Builder** — Creates a JSON prompt with the selected city, trip duration, and preset theme.
5. **AI/ML API (GPT-5 or GPT-4o)** — Generates a detailed 3-day itinerary including sights, restaurants, and travel tips.
6. **Telegram Message** — Sends the formatted trip plan back to the user.

---

### Key Features

* 🌍 **Dynamic Itinerary Generation** — Get personalized 3-day travel plans for any city.
* 🧠 **AI-Driven Recommendations** — Sights, food, local culture, and insider tips generated via AI/ML API.
* 🎯 **Preset Travel Styles** — Support for multiple hashtags:

  * `#cozy` — Relaxed and charming 🛋️
  * `#nightlife` — Bars, concerts, and clubbing 🌃🍸
  * `#extreme` — Adventure & adrenaline 🧗‍♂️
  * `#family` — Kid-friendly fun 👨‍👩‍👧‍👦
  * `#budget` — Affordable travel 💰
  * `#luxury` — Premium experiences ✨
  * `#cultural` — Museums & history 🎨🏛️
  * `#nature` — Parks & scenic hikes 🌲🏞️
  * `#romantic` — Cozy and scenic spots 💕
* 💬 **Interactive Telegram Experience** — Fast responses with typing indicators.
* ⚙️ **Plug-and-Play Setup** — Ready to import and activate.

---

### Setup Steps

1. **Create Telegram Bot**

   * Open [@BotFather](https://t.me/BotFather)
   * Run `/newbot`, set a name and username
   * Save your bot token

2. **Add Credentials in n8n**

   * **Telegram API** → Use your bot token
   * **AI/ML API** → Add your API key (GPT-4o or GPT-5 model)

3. **Import and Configure**

   * Import this JSON workflow into n8n
   * Link credentials for Telegram and AI/ML API
   * Activate the workflow

4. **Test the Bot**

   * Send: `#luxury Paris` or `#nature Bali`
   * Receive your detailed AI-generated itinerary instantly

---

### Example Interaction

**User:**

```
/romantic Florence
```

**Bot:**

```
✨ 3-Day Romantic Getaway in Florence ✨  

Day 1 — Artistic Beginnings  
• Visit: Uffizi Gallery, Ponte Vecchio  
• Eat: Trattoria ZaZa 🍝  
• Tip: Sunset walk along Arno River 🌇  

Day 2 — Tuscan Charm  
• Visit: Boboli Gardens, Piazzale Michelangelo  
• Eat: Wine tasting in Chianti region 🍷  
• Tip: Rent a Vespa for the full Italian vibe 🇮🇹  

Day 3 — Hidden Gems  
• Visit: Fiesole hilltop village  
• Eat: Local bakery for morning cappuccino ☕  
• Tip: Avoid peak crowds by starting early 🌅  
```

---

### Resources

* 📘 [AI/ML API Documentation](https://docs.aimlapi.com)

## 🔗 Nodes Used

Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
