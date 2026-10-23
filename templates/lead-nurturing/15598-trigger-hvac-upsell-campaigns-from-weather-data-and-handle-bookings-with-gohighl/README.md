# 💬 Trigger HVAC upsell campaigns from weather data and handle bookings with GoHighLevel, WhatsApp, WeatherAPI and Gemini

> ⚡ **146 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Project Overview: Automated Climate-Driven HVAC Upsell & AI Concierge

This project is specifically built for an HVAC business to automatically upsell to old customers when their locality has a heatwave or snow wave forecast in the upcoming five days.

## Prerequisites & Setup

### 1. GoHighLevel (GHL)

* **Create Custom Fields:**
* `stop_whatsapp`: Used when a user replies "STOP" to remove them from the marketing list.
* `opp_type`: To track the campaign type (e.g., *heatwave* or *snowwave*).


* **Create Two Pipelines:**
* Pipeline A: **HEATWAVE**
* Pipeline B: **SNOWWAVE**
* *Note:* Both pipelines require 4 stages: **New Lead**, **Contacted**, **Scheduled**, and **Closed**.


* **Grab the Calendar ID:** Keep your GHL Calendar ID handy, as the workflow will need it to search for free slots and book appointments.

### 2. WhatsApp (Meta Business Suite)

Create and approve two marketing templates for proactive outreach:

**A. Heatwave Template**

&gt; Hello {{1}},
&gt; With temperatures expected to rise soon, we wanted to share a few tips to keep your home comfortable and your AC running efficiently.
&gt; **Maintenance Tips:**
&gt; • Keep blinds closed during peak sun hours.
&gt; • Check your air filters; a clean filter prevents overworking.
&gt; • If you leave the house, raise the thermostat a few degrees rather than turning it off.
&gt; **Need help?**
&gt; If your system is struggling to keep up, we are here to assist.
&gt; Stay cool and safe!

**B. Snow Wave Template**

&gt; Hello {{1}},
&gt; With a cold front and freezing temperatures expected soon, we wanted to share a few tips to keep your home warm and your heating system running efficiently.
&gt; **Winter Comfort Tips:**
&gt; • Keep curtains and blinds open during the day to let sunlight naturally warm your home, then close them at night to trap the heat.
&gt; • Check your air filters; a clogged filter makes your heater work much harder in freezing weather.
&gt; • Ensure your outdoor vents and heat pump units are clear of snow or debris to maintain proper airflow.
&gt; **Need help?**
&gt; If your heating system is struggling to stay warm or making unusual noises, we are here to assist.
&gt; Stay warm and safe!

### 3. API Integrations

* **Nominatim OpenStreetMap API:** Review the documentation. This open-source tool will be used to extract exact cities from customer street addresses.
* **WeatherAPI:** Obtain a free API key. Add this to your workflow's generic credentials (Type: `Query Auth` &gt; Name: `key` &gt; Value: `your-api-key`).
* **Gemini API:** Obtain your API key to power the AI Service Concierge.

---

## Part 1: The Climate-Driven Lead Generation Engine (Proactive Outreach)

This sub-workflow acts as a proactive scraper. It monitors your CRM contacts, cross-references their locations with live weather data, and triggers targeted upsell campaigns.

**1. Schedule Trigger & Fetch Contacts**

* **Schedule Trigger:** Kicks off the workflow every morning at 7:00 AM.
* **Fetch Contacts (HighLevel):** Pulls your entire list of previous customers and leads from GoHighLevel.

**2. Geocoding & Data Cleaning**

* **If Node (City Set):** Checks if the CRM contact already has a city populated.
* **Nominatim API (Loop & Fetch):** If a city is missing, the workflow runs the address through the Nominatim OpenStreetMap API to extract the exact city.
* **Update Contact (HighLevel):** Saves the extracted city back to the GHL contact profile to prevent redundant geocoding in the future.

**3. Weather Data Aggregation**

* **Code Node (Group by City):** A vital step to optimize API usage. Instead of making 1,000 separate calls for 1,000 contacts, custom JavaScript groups all contacts by their respective cities.
* **HTTP Request (Fetch Forecast):** Pings WeatherAPI.com to grab the 5-day forecast for each unique city.

**4. Hazard Detection & Routing**

* **Code Node (Detect Weather Hazards):** A script evaluates the 5-day forecast against dynamic, seasonal temperature thresholds (e.g., a "heatwave" threshold in May might be &gt;85°F, but &gt;95°F in August). It tags the grouped contacts with a campaign type (`HEATWAVE` or `SNOWWAVE`).
* **If Node (Check Campaign Type):** Routes the qualified leads into the appropriate pipeline logic.

**5. CRM Execution & WhatsApp Outreach**

* **Create Opportunity (HighLevel):** Drops the qualified lead into the "New Lead" stage of the respective GHL pipeline.
* **Send Template (WhatsApp):** Dispatches the pre-approved Meta marketing template to the customer.
* **Update & Upsert (HighLevel):** Moves the Opportunity to the "Contacted" stage and updates the `opp_type` custom field so the system tracks the reason for outreach.

---

## Part 2: The AI-Powered Service Concierge (Inbound Handling)

When a customer replies to the proactive blast (e.g., *"My AC is making a weird noise, can someone come out?"*), this sub-workflow seamlessly takes over to assist the customer and autonomously book an appointment.

**1. Trigger & Validation**

* **Trigger (WhatsApp Message Received):** Listens for inbound replies from customers.
* **Fetch & Validate (HighLevel):** Looks up the sender's phone number in GHL. If the number does not exist in the CRM, the workflow ignores the message to prevent spam handling.

**2. The Opt-Out Filter**

* **If Node (Stop Command):** Scans the inbound message for the keyword "STOP".
* **Upsert Contact (HighLevel):** If "STOP" is detected, the workflow immediately updates the user's `stop_whatsapp` custom field to `TRUE`, excluding them from all future blasts, and terminates the flow.

**3. The Agentic Core**

* **Customer Service AI Agent (LangChain + Gemini):** If the user is requesting assistance, the message is routed to an AI Agent powered by the Gemini Chat Model.
* **Redis Chat History Memory:** Connects to a Redis instance so the AI retains conversation context, which is crucial for natural, back-and-forth scheduling.
* **Agent Tools (HighLevel Integration):** The Gemini agent is equipped with specific tools it can trigger autonomously:
* *Fetch Available Calendar Slots:* The AI is strictly instructed to check live GHL availability before suggesting times to the user.
* *Book Calendar Appointment:* Automatically secures the timeslot in GHL if the user agrees.
* *Close Deal:* If the user declines service (*"I'm good, no thanks"*), the AI triggers this tool to mark the GHL opportunity as "Closed/Lost".
* *Update Pipeline Stage:* If an appointment is successfully booked, the AI moves the pipeline stage to "Scheduled" without any manual human intervention.



**4. Final Response**

* **Send Response (WhatsApp):** The AI formulates a conversational, friendly reply—utilizing WhatsApp's native formatting like bolding and bullet points—and sends it back to the customer to confirm the action taken.

## 🔗 Nodes Used

HTTP Request, HighLevel, WhatsApp Business Cloud, Schedule Trigger, AI Agent, Redis Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
