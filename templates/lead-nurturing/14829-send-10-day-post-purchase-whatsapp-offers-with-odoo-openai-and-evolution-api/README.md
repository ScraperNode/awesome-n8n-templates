# 💬 Send 10-day post-purchase WhatsApp offers with Odoo, OpenAI and Evolution API

> ⚡ **274 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

What Problem Does It Solve?

* Generic, automated retention messages often feel like spam and fail to engage returning customers.
* Manually tracking which customers ordered exactly 10 days ago to send them tailored offers is extremely time-consuming.
* Sending bulk promotional WhatsApp messages too quickly can result in phone number bans.
* This workflow solves these issues by:
  - Automatically fetching customers from Odoo whose invoices are exactly 10 days old.
  - Using an AI Agent (OpenAI) to generate a highly personalized, warm Egyptian Arabic message for each customer.
  - Offering a targeted 10% extra discount to encourage repeat purchases via social media platforms.
  - Implementing a 1-minute "Wait" mechanism between messages to protect your WhatsApp account from being flagged.

How to Configure It

* Odoo Setup
  - Connect your Odoo credentials in n8n.
  - The workflow fetches invoices starting from April 2026. Adjust the date filter in the "Fetch 10-Day Old Invoices" node if needed.
* OpenAI Setup
  - Add your OpenAI API key to the "Generate AI Message" node.
  - You can tweak the system prompt to match your specific brand voice or adjust the discount offer.
* WhatsApp API Setup
  - This workflow uses the Evolution API. Update the URL and "apikey" in the "Send WhatsApp Discount" node with your specific instance details.

How It Works

* Every day at 10:01 AM, the schedule node triggers the workflow automatically.
* It queries Odoo for all posted invoices exactly 10 days old and retrieves the corresponding customer contact details (Name and Phone).
* It processes the customers one by one through a loop (Split In Batches).
* For each customer, OpenAI generates a unique, friendly colloquial Arabic message calling them by their first name and offering a 10% discount.
* The message explicitly directs the customer to claim the offer via social media messages, completely avoiding formal "terms & conditions" jargon.
* The workflow sends the AI-generated text via WhatsApp and then pauses for 1 minute before processing the next customer.

Customization Ideas

* Change the AI prompt to offer different discounts based on the total amount the customer spent in their last order.
* Add a condition to skip customers who have already made a new purchase within the last 10 days.
* Switch the AI model to Claude or Gemini depending on your preference for Arabic copywriting.

For more info [Contact Me](https://www.linkedin.com/in/khaledyasser01/)

## 🔗 Nodes Used

HTTP Request, Odoo, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
