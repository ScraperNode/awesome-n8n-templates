# 🎬 Track website traffic & backlinks with Ahref API and Google Sheets

> ⚡ **481 views** · 🎬 [Content Creation & Video](../)

## Description

## 📊 Automated Website Traffic Tracker with Google Sheets Logging

Track website traffic and backlinks effortlessly using the **[Website Traffic Checker - Ahref API](https://rapidapi.com/skdeveloper/api/website-traffic-checker-ahref)**. This n8n workflow automates data retrieval and logging into Google Sheets, making it perfect for SEO professionals and digital marketers.

---

## 🧩 What This Workflow Does (Summary)

1. Accepts a domain via a simple web form.
2. Sends the domain to **[Website Traffic Checker - Ahref API](https://rapidapi.com/skdeveloper/api/website-traffic-checker-ahref)**.
3. If successful:

   * Extracts **backlink** and **traffic** data.
   * Appends the results to **two separate Google Sheets**.
4. If failed:

   * Sends an email alert with domain and status code.

---

## 🔧 Node-by-Node Explanation

| Node                               | Purpose                                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 🟢 **Form Trigger**                | Starts the workflow when a domain is submitted via form.                                                         |
| 🟩 **Set Domain Value**            | Stores the submitted domain into a variable.                                                                     |
| 🌐 **HTTP Request**                | Calls [Website Traffic Checker - Ahref API](https://rapidapi.com/skdeveloper/api/website-traffic-checker-ahref). |
| ✅ **IF Node**                      | Checks if the API responded with `statusCode = 200`.                                                             |
| ❌ **Email Node (Fail)**            | Sends an alert email if API fails.                                                                               |
| 📦 **Code (Backlink Info)**        | Extracts backlink data from API response.                                                                        |
| 📄 **Google Sheet: Backlink Info** | Appends backlink data to a sheet.                                                                                |
| 📦 **Code (Traffic Info)**         | Extracts traffic data from API response.                                                                         |
| 📄 **Google Sheet: Traffic Data**  | Appends traffic metrics to another sheet.                                                                        |

---

## 📁 Google Sheet Columns

### **Backlink Info Sheet**

| Column             | Description                 |
| ------------------ | --------------------------- |
| `website`          | Domain submitted            |
| `ascore`           | Authority score             |
| `referring domain` | Number of referring domains |
| `total backlinks`  | Total backlinks             |

---

### **Traffic Data Sheet**

| Column               | Description                                 |
|----------------------|---------------------------------------------|
| accuracy             | Accuracy level of the traffic data         |
| bounce_rate          | Bounce rate percentage                      |
| desktop_share        | Percentage of traffic from desktop devices |
| direct               | Direct traffic sources                      |
| display_ad           | Display ad traffic sources                 |
| display_date         | Date when traffic data was captured         |
| mail                 | Traffic from email campaigns                |
| mobile_share         | Percentage of traffic from mobile devices  |
| pages_per_visit      | Average number of pages per visit           |
| paid                 | Paid traffic sources                        |
| prev_bounce_rate     | Bounce rate in the previous period          |
| prev_direct          | Previous period's direct traffic            |
| prev_display_ad      | Previous period's display ad traffic        |
| prev_mail            | Previous period's email traffic             |
| prev_pages_per_visit | Previous period's pages per visit           |
| prev_referral        | Previous period's referral traffic          |
| prev_search_organic  | Previous organic search traffic             |
| prev_search_paid     | Previous paid search traffic                |
| prev_social_organic  | Previous organic social traffic             |
| prev_social_paid     | Previous paid social traffic                |
| prev_time_on_site    | Previous time spent on site                 |
| prev_users           | Number of users in the previous period      |
| prev_visits          | Visits in the previous period               |
| rank                 | Global rank of the website                  |
| referral             | Referral traffic                            |
| search               | Total search traffic                        |
| search_organic       | Organic search traffic                      |
| search_paid          | Paid search traffic                         |
| social               | Total social traffic                        |
| social_organic       | Organic social traffic                      |
| social_paid          | Paid social traffic                         |
| target               | Targeted country or demographic             |
| time_on_site         | Average time spent on site                  |
| unknown_channel      | Traffic from unknown sources                |
| users                | Number of unique users                      |
| visits               | Total number of visits                      |

---

## 🔐 How to Configure

### 🔑 Get API Key

1. Go to [**Website Traffic Checker - Ahref API on RapidAPI**](https://rapidapi.com/skdeveloper/api/website-traffic-checker-ahref).
2. Sign in or create a free RapidAPI account.
3. Subscribe to the API plan.
4. Copy your `x-rapidapi-key` from the **Endpoints** tab.

### 📝 Add Key in n8n

1. Go to your **HTTP Request** node.
2. Under **Headers**, set:

   * `x-rapidapi-host` = `website-traffic-checker-ahref.p.rapidapi.com`
   * `x-rapidapi-key` = *your API key*

---

## 📄 How to Setup Google Sheets in n8n

1. Connect a **Google account** via `Google Sheets` credentials in n8n.
2. Use the full Google Sheet URL in the `documentId` field.
3. Set correct **Sheet name or GID** (e.g., "Traffic Data").
4. Use **Auto Map** or **Custom Map** to define columns.

&gt; Make sure your Google Sheet has **edit access** and headers already created.

---

## 🧠 Use Case & Benefits

### 👤 Ideal For:

* SEO analysts
* Digital marketers
* Agencies managing multiple clients
* Web analytics consultants

### ✅ Benefits:

* Fully **automated data collection**.
* **No manual copy-paste** from tools.
* Real-time insights delivered to Google Sheets.
* Easy monitoring of **backlinks** and **traffic trends**.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
