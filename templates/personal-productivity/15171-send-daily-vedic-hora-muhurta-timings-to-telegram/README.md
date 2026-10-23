# ⚡ Send daily Vedic hora muhurta timings to Telegram

> ⚡ **43 views** · ⚡ [Personal Productivity](../)

## Description

## Who is this for?

Practitioners of Vedic astrology, manifestation enthusiasts, spiritual seekers, and anyone who wants to align daily intentions with classical planetary timings. If you follow the ancient science of Muhurta — the art of acting in harmony with time — this workflow delivers today's favourable Hora windows directly to your Telegram, three times a day, so you never miss a sacred hour.

## What problem does this solve?

In the Vedic tradition, each day is divided into 24 planetary hours called *Horas*, each governed by a specific planet. Acting during the right Hora is considered a quiet multiplier of intention. The challenge? Manually checking panchang tables every morning is tedious, and most people forget to look until the moment has passed. This workflow removes that friction entirely — it silently fetches today's Hora schedule from a trusted panchang source, filters for Sun (Surya) Horas, and sends you gentle reminders on Telegram so you can pause, visualize, affirm, or take inspired action during those auspicious windows.

## How it works

1. A schedule trigger fires three times daily at 8 AM, 2 PM, and 5 PM (IST)
2. The workflow fetches today's Hora timings from drikpanchang.com via an HTTP request
3. A JavaScript code node parses the HTML and extracts all 24 Horas, grouping them by ruling planet (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn) with Sanskrit names and natures
4. The workflow isolates the Sun (Surya) Hora timings — typically 3 to 4 slots per day
5. A beautifully formatted Telegram message with emojis, timings, and planetary nature is delivered to your chat
6. You see the notification, note today's Sun Hora windows, and use those 60-minute slots for your intention-setting practice

## Setup steps

Setup takes around 10 minutes. You will need:

- A Telegram bot (free — created via @BotFather)
- Your numeric Telegram chat ID (captured via @userinfobot)

Complete step-by-step setup instructions, city customization guide, and tips for tracking different planets (Moon, Jupiter, Venus, etc.) are included as sticky notes inside the workflow canvas. Import the workflow, read the yellow setup sticky note, and follow along — every step is documented.

## Customization ideas

- **Change city:** Visit drikpanchang.com/muhurat/hora.html, pick your city, copy the `geoname-id` from the URL, and paste it into the HTTP Request node. The workflow works globally — not just for India.
- **Change timezone:** Update the workflow settings from `Asia/Kolkata` to your own timezone for accurate schedule triggering.
- **Track different planets:** The parser extracts all 7 classical planets. Swap `planets.Sun` to `planets.Moon` for emotional flow, `planets.Jupiter` for wisdom and wealth, `planets.Venus` for relationships, or `planets.Mars` for courageous action. Each planet governs different domains of life.
- **Adjust reminder times:** Edit the Schedule Trigger to fire at times that suit your routine — morning meditation, midday reset, evening reflection.
- **Extend to multiple planets:** Duplicate the Telegram branch to send separate notifications for Sun Hora, Moon Hora, and Jupiter Hora — perfect for serious practitioners.

## Background on Hora Muhurta

The word *Hora* is the root from which the English "hour" is believed to derive. In classical Vedic astrology, each Hora carries the qualitative energy of its ruling planet — Sun Horas amplify leadership and vitality, Moon Horas favour creativity and emotion, Jupiter Horas bless wisdom and wealth, and so on. Seekers across centuries have used these windows to time important actions — signing documents, beginning journeys, setting intentions, or simply sitting in focused meditation. This workflow makes that ancient practice effortlessly accessible in daily modern life.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
