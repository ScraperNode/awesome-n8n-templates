# 🎫 Automate WordPress contact form (CF7) responses and classification with Gemini

> ⚡ **2,205 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow optimizes the management of inquiries received through a **contact form (Contact Form 7 - CF7 Plugin)** on a **WordPress site**, automating the process of classification, response drafting, and data storage.

This workflow is particularly useful for businesses that receive multiple daily inquiries and want to improve their efficiency in managing customer communications. 

### **Benefits:**  
✅ **Automation & Speed** – Reduces the time needed to handle inquiries manually.  
✅ **Better Email Management** – Ensures every message receives a timely and accurate response.  
✅ **Customization** – The generated draft can be edited before sending, maintaining a personal touch.  
✅ **Inquiry History** – Storing data in Google Sheets allows for easy tracking of customer interactions.  
✅ **Easy Integration** – Works seamlessly with Contact Form 7 without complex configurations. 


---- 

### How It Works  
1. **Form Submission Handling**: The workflow starts with a WordPress form submission captured via a webhook. The form data (first name, last name, email, phone, and message) is extracted and structured using the "Set Fields" node.  
2. **Message Classification**: The submitted message is classified into predefined categories (e.g., "Product Info," "Order Info," or "Other") using the "Message Classifier" node, powered by Google Gemini.  
3. **Automated Email Drafting**: Based on the classification, the workflow generates a professional email draft using one of three "Email Writer" nodes (for Product, Order, or Other requests). Each node uses Google Gemini to craft a personalized response with a structured format (subject and body).  
4. **Email Draft Creation**: The drafted email is sent as a Gmail draft to the appropriate department, including the original form data for context.  
5. **Data Logging**: All submissions, along with their classifications and email drafts, are logged in a Google Sheets spreadsheet for record-keeping and further action.  

---

### Set Up Steps  
1. **Install WordPress Plugin**: Install the "CF7 to Webhook" plugin on WordPress and configure it to send form submissions to the n8n webhook URL.  
2. **Configure Webhook in n8n**: Set up the "From Wordpress" webhook node in n8n to receive POST requests from the WordPress form.  
3. **Google Gemini Integration**: Ensure the Google Gemini nodes are properly authenticated with the correct API credentials.  
4. **Gmail and Google Sheets Setup**: Authenticate the Gmail and Google Sheets nodes with the appropriate OAuth2 credentials and specify the target spreadsheet and sheet name.  
5. **Customize Classification Categories**: Adjust the categories in the "Message Classifier" node to match your business needs.  
6. **Test the Workflow**: Trigger a test form submission to verify the workflow processes data correctly, classifies the message, generates an email draft, and logs the data.  

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
