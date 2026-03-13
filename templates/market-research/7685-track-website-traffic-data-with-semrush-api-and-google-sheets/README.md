# 📊 Track website traffic data with SEMrush API and Google Sheets

> ⚡ **320 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## 🚀 Website Traffic Monitoring with SEMrush API and Google Sheets Integration

Leverage the powerful [**SEMrush Website Traffic Checker API**](https://rapidapi.com/PrineshPatel/api/semrush-website-traffic-checker) to automatically fetch detailed website traffic insights and log them into Google Sheets for real-time monitoring and reporting. This **no-code n8n workflow** simplifies traffic analysis for marketers, analysts, and website owners.

---

## ⚙️ Node-by-Node Workflow Breakdown

#### 1. 🟢 **On Form Submission**  
- **Trigger:** The workflow is initiated when a user submits a website URL via a form. This serves as the input for further processing.
- **Use Case:** When you want to track multiple websites and monitor their performance over time.
  
#### 2. 🌐 **Website Traffic Checker**  
- **API Request:** The workflow makes a POST request to the [**SEMrush Website Traffic Checker API**](https://rapidapi.com/PrineshPatel/api/semrush-website-traffic-checker) via RapidAPI using the website URL that was submitted.
- **API Data:** The API returns detailed traffic insights, including:
  - Visits
  - Bounce rate
  - Page views
  - Sessions
  - Traffic sources
  - And more!
  
#### 3. 🔄 **Reformat**  
- **Parsing:** The raw API response is parsed to extract the relevant data under `trafficSummary`.
- **Data Structure:** The workflow creates a clean dataset of traffic data, making it easy to store in Google Sheets.

#### 4. 📄 **Google Sheets**  
- **Logging Data:** The traffic data is appended as a new row in your Google Sheet.
- **Google Sheet Setup:** The data is organized and updated in a structured format, allowing you to track website performance over time.

---

## 💡 Use Cases

- **📊 SEO & Digital Marketing Agencies:** Automate client website audits by pulling live traffic data into reports.  
- **🌐 Website Owners & Bloggers:** Monitor traffic growth and analyze content performance automatically.  
- **📈 Data Analysts & Reporting Teams:** Feed traffic data into dashboards and integrate with other KPIs for deeper analysis.  
- **🕵️ Competitor Tracking:** Regularly log competitor site metrics for comparative benchmarking.

---

## 🎯 Key Benefits

- ✅ **Automated Traffic Monitoring** — Run reports automatically on-demand or on a scheduled basis.  
- ✅ **Real-Time Google Sheets Logging** — Easily centralize and structure traffic data for easy sharing and visualization.  
- ✅ **Zero Code Required** — Powered by n8n’s visual builder, set up workflows quickly without writing a single line of code.  
- ✅ **Scalable & Flexible** — Extend the workflow to include alerts, additional API integrations, or other automated tasks.

---

## 🔐 How to Get Your SEMrush API Key via RapidAPI

1. **Visit the API Listing**  
   👉 [SEMrush Website Traffic Checker API](https://rapidapi.com/PrineshPatel/api/semrush-website-traffic-checker)

2. **Sign In or Create an Account**  
   - Log in to RapidAPI or sign up for a free account.

3. **Subscribe to the API**  
   - Choose the appropriate pricing plan and click **Subscribe**.

4. **Access Your API Key**  
   - Go to the **Endpoints** tab.  
   - Your API key is located under the `X-RapidAPI-Key` header.

5. **Secure & Use the Key**  
   - Add your API key to the request headers in your workflow.  
   - **Never expose the key publicly**.

---

## 🔧 Step-by-Step Setup Instructions

### 1. **Creating the Form to Capture URL**

- In n8n, create a new workflow and add a **Webhook** trigger node to capture website URLs.
- Configure the webhook to accept URL submissions from your form.
- Add a form to your website or app that triggers the webhook when a URL is submitted.

### 2. **Configure SEMrush API Request Node**

- Add an **HTTP Request** node after the webhook.
- Set the method to `POST` and the URL to the SEMrush API endpoint.
- Add the necessary headers:
  - `X-RapidAPI-Host: semrush-website-traffic-checker.p.rapidapi.com`
  - `X-RapidAPI-Key: [Your API Key]`
- Pass the captured website URL from the webhook as a parameter in the request body.

### 3. **Reformat API Response**

- Add a **Set** node to parse and structure the API response.
- Extract only the necessary data, such as:
  - `trafficSummary.visits`
  - `trafficSummary.bounceRate`
  - `trafficSummary.pageViews`
  - `trafficSummary.sessions`
- Format the response to be clean and suitable for Google Sheets.

### 4. **Store Data in Google Sheets**

- Add the **Google Sheets** node to your workflow.
- Authenticate with your Google account.
- Select the spreadsheet and worksheet where you want to store the traffic data.
- Configure the node to append new rows with the extracted traffic data.

#### **Google Sheets Columns Setup**
- **A**: Website URL
- **B**: Visits
- **C**: Bounce Rate
- **D**: Page Views
- **E**: Sessions
- **F**: Date/Time (optional, you can use a timestamp)

### 5. **Test and Deploy**

- Run a test submission through your form to ensure the workflow works as expected.
- Check the Google Sheets document to verify that the data is being logged correctly.
- Set up scheduling or additional workflows as needed (e.g., periodic updates).

---

## 📈 Customizing the Template

You can modify the workflow to suit your specific needs:

- **Add more data points**: Customize the SEMrush API request to fetch additional metrics (e.g., traffic sources, keywords, etc.).
- **Create separate sheets**: If you're tracking multiple websites, you can create a different sheet for each website or group websites by category.
- **Add alerts**: Set up email or Slack notifications if specific traffic conditions (like sudden drops) are met.
- **Visualize data**: Integrate Google Sheets with Google Data Studio or other tools for more advanced visualizations.

---

### 🚀 Start Automating in Minutes

Build your automated website traffic dashboard with n8n today — no coding required.

👉 [Start with n8n for Free](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, improve accuracy, and supercharge your traffic insights workflow!

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
