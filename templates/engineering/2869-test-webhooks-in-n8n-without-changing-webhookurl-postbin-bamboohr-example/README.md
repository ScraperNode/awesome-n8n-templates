# ⚒️ Test webhooks in n8n without changing WEBHOOK_URL (PostBin & BambooHR example)

> ⚡ **2,019 views** · ⚒️ [Engineering](../)

## Description

## **Using PostBin to Test Webhooks Without Changing WEBHOOK_URL**  

### **How it Works**  
Many new n8n users struggle with testing webhooks when running n8n on localhost, as external services cannot reach `localhost`. This workflow introduces a technique using PostBin, which provides a temporary, publicly accessible URL to receive webhook requests.  

1. Generates a temporary webhook endpoint via PostBin.  
2. Uses this endpoint in place of `localhost` to test webhooks.  
3. Captures and displays the incoming webhook request data.  
4. Enables debugging and iterating without modifying the `WEBHOOK_URL` environment variable.  

### **Set Up Steps**  
- **Estimated time:** ~5–10 minutes  
1. **Create a PostBin instance** to generate a publicly accessible webhook URL.  
2. **Copy the PostBin URL** and use it as the webhook destination in n8n.  
3. **Trigger the webhook** from an external service or manually.  
4. **Inspect the request payload** in PostBin to verify data reception.  

---  

## **(EXAMPLE) Using PostBin for Webhook Testing in a BambooHR Integration**  

### **How it Works**  
In this example, we apply the PostBin technique to a BambooHR integration. Instead of manually configuring a webhook in BambooHR, this workflow automates webhook registration using the BambooHR API. The workflow:  

1. Uses the BambooHR API to programmatically register the PostBin URL as a webhook.  
2. Retrieves the most recent webhook calls made by BambooHR to the PostBin URL.  
3. (Optional) Sends a personalized Slack message for new employees using OpenAI.  

### **Set Up Steps**  
- **Estimated time:** ~15–20 minutes  
1. **Set up PostBin** using the steps from the first section.  
2. **Log into BambooHR** to generate an API key for authentication.  
3. **Run the workflow** to register the PostBin URL as a webhook in BambooHR via the API.
4. **Retrieve recent webhook calls** from PostBin to validate data reception.  
5. (Optional) **Send a Slack notification** using the processed data.

## 🔗 Nodes Used

HTTP Request, Rename Keys, Slack, BambooHR, PostBin, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
