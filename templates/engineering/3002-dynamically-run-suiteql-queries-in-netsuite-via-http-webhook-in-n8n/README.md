# ⚒️ Dynamically run SuiteQL queries in NetSuite via HTTP webhook in n8n

> ⚡ **1,641 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

![image.png](fileId:965)

# Dynamically Run SuiteQL Queries in NetSuite via HTTP Webhook in n8n

&gt; **Important:** This template uses a NetSuite community node, so it only works on **self-hosted n8n**. Cloud-based n8n instances currently do not support community nodes.  

## Summary

This workflow template allows you to **dynamically run SuiteQL queries in NetSuite** by sending an HTTP request to an n8n Webhook node. Once triggered, the workflow uses token-based authentication to execute your SuiteQL query and returns the results as JSON. This makes it easy to integrate real-time NetSuite data into dashboards, reporting tools, or other applications.

## Who Is This For?

- **Developers & Integrators**: Easily embed NetSuite data retrieval into custom apps or internal tools.  
- **Enterprises & Consultants**: Integrate dynamic reporting or data enrichment from NetSuite without manual exports.  
- **System Administrators**: Automate routine queries and reduce manual intervention.

## Use Cases & Benefits

### 1. Dynamic Data Access
Send any SuiteQL query on demand instead of hardcoding queries or manually running reports.

### 2. Seamless Integration
Quickly pull NetSuite data into front-end systems (like Excel dashboards, custom web apps, or internal tools) by calling the webhook endpoint.

### 3. Simplified Reporting
Automate data extraction and formatting, reducing the need for manual exports and improving efficiency.

## How It Works

1. **Trigger**:  
   - An HTTP request to the webhook node initiates the workflow.  

2. **Input Processing**:  
   - The workflow reads the SuiteQL query from the incoming request parameter (`suiteql`).  

3. **Query Execution**:  
   - The NetSuite node uses your token-based authentication credentials to run the SuiteQL query.  

4. **Response**:  
   - Results are returned as JSON in the HTTP response, ready for further processing or immediate consumption.

## Prerequisites & Setup

1. **NetSuite Community Node**  
   - This workflow requires the NetSuite community node. Make sure your **self-hosted** n8n instance supports community nodes.

2. **NetSuite Token-Based Authentication**  
   - Enable TBA in NetSuite. Obtain the required consumer key, consumer secret, token ID, and token secret.

3. **n8n Webhook**  
   - Copy the auto-generated webhook URL (e.g. `http://&lt;your-n8n-domain&gt;/webhook/unique-id`) from the Webhook node.

4. **Usage**  
   - Send an HTTP GET or POST request to the webhook with your SuiteQL query. For example:  
     ```sh
     curl "http://&lt;your-n8n-domain&gt;/webhook/unique-id?suiteql=SELECT%20*%20FROM%20account%20LIMIT%2010"
     ```  
   - The workflow will execute the query and return JSON data.

## Customization

- **Change the Query**:  
  Simply adjust the `suiteql` parameter in your HTTP request to run different SuiteQL statements.

- **Data Transformation**:  
  Insert nodes (e.g., Function, Set, or Format) to modify or reformat the data before returning it.

- **Extend Integration**:  
  Chain additional nodes to push the retrieved data to other services (Google Sheets, Slack, custom dashboards, etc.).

## Additional Notes

- Remember that this template is **only compatible with self-hosted n8n** because it uses a community node. - 
[netsuite community node](https://www.npmjs.com/package/n8n-nodes-netsuite
)
- If you have questions, suggestions, or need support, contact us at [support@dataants.org](mailto:support@dataants.org).

---

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
