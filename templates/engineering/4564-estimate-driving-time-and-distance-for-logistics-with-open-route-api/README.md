# ⚒️ 🚚 Estimate driving time and distance for logistics with Open Route API

> ⚡ **1,802 views** · ⚒️ [Engineering](../)

## Description

***Tags**: Supply Chain, Logistics, Route Planning, Transportation, GPS API*

### Context

Hi! I’m [Samir](https://samirsaci.com), a Supply Chain Engineer and Data Scientist based in Paris, and founder of [LogiGreen Consulting](https://logi-green.com).

I help companies improve their **logistics operations** using data, AI, and automation to **reduce costs and minimize environmental footprint**.

&gt; Let’s use n8n to build smarter and greener transport operations!

📬 For business inquiries, you can add find me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This workflow is designed for **logistics and transport teams** who want to automate **distance and travel time calculations for truck shipments**.

[![Example of Results](https://www.samirsaci.com/content/images/2025/06/image-2.png)](https://www.youtube.com/watch?v=uJtp2NsmR2E)


Ideal for:
- Control tower dashboards  
- Transport cost simulations  
- Route optimisation studies 

[![Workflow](https://www.samirsaci.com/content/images/size/w1600/2025/06/image-1.png)](https://www.youtube.com/watch?v=uJtp2NsmR2E)


### How does it work?

This n8n workflow connects to a **Google Sheet** where you store city-to-city shipment lanes, and uses the **OpenRouteService API** to calculate:

- 📏 Distance (in meters)  
- ⏱️ Travel time (in seconds)  
- 🪪 Number of route steps  

### Steps:
1. ✅ Load departure/destination city coordinates from a Google Sheet  
2. 🔁 Loop through each record  
3. 🚚 Query OpenRouteService using the **truck (driving-hgv)** profile  
4. 🧾 Extract and store results: distance, duration, number of steps  
5. 📤 Update the Google Sheet with new values  

### What do I need to get started?

This workflow is beginner-friendly and requires:

- A **Google Sheet** with route pairs (departure and destination coordinates)
- A free **OpenRouteService API key**  
  [👉 Get one here](https://openrouteservice.org/dev/#/signup)

### Next Steps

🗒️ Follow the sticky notes inside the workflow to:

- Select your sheet
- Plug in your API key
- Launch the flow!

[![Thumbnail](https://www.samirsaci.com/content/images/2025/06/image-11.png)](https://www.youtube.com/watch?v=uJtp2NsmR2E)

[🎥 Check the Tutorial](https://www.youtube.com/watch?v=uJtp2NsmR2E)

🚀 You can customize the workflow to:
- Add **CO2 emission estimates** for Sustainability Reporting
- Connect to your TMS via API or EDI

*This template was built using n8n v1.93.0*  
*Submitted: June 1, 2025*

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
