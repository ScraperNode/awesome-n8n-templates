# 💬 Automated post-purchase product delivery & upsell with Jotform,  GDrive, Gemini

> ⚡ **223 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Explanation video: [https://youtu.be/QjbA-tFYCFE?si=--C36KlSgABzteoB](https://youtu.be/QjbA-tFYCFE?si=--C36KlSgABzteoB)

### Workflow Overview

This automation handles what happens right after a customer makes a purchase on your online form. It automatically shares a document with them, records the sale in a spreadsheet, uses AI to write a personalized thank-you email, and then sends it to their inbox.

### Prerequisites

Before you can use this workflow, you'll need to have a few things set up and ready:

**1. A Configured JotForm**
You need an active JotForm account with a form that is set up to sell a product. The form must include:
* **Required Fields:** `Full Name`, `Email Address`, and `Phone Number`.
* **Product List:** An element where customers can select and pay for a product.
* **Active Payment Integration:** A payment gateway (like Stripe or PayPal) must be connected and activated so the form can process live transactions.

**2. A Google Sheet**
Create a blank Google Sheet to log your sales. It should have columns (headers) prepared to receive the customer data, such as:
* `name`
* `email`
* `phone`
* `products`
* `amount of sale`

**3. A Digital Product in Google Drive**
The digital product you want to deliver to your customers (e.g., a PDF guide, a document, a link to a video) must be uploaded to your Google Drive. You'll need this file ready to be selected within the workflow.


---
### Here is the node by node explanation:

### 1. JotForm Trigger: "Wait for a New Order"

* **Node:** `JotForm Trigger`

This is the starting point. The workflow is constantly watching a specific JotForm you've set up. As soon as a customer fills out the form and submits their purchase, this node catches their information and kicks off the automation.

It passes along all the customer's details—like their name, email, and what they bought—to the next step.

---

### 2. Google Drive: "Share a File"

* **Node:** `Share file`

Once an order comes in, this step automatically shares a specific file from your Google Drive with the customer. It takes the customer's email address from the form and instantly gives them "editor" access to a pre-selected document, like a welcome guide or a digital product.

---

### 3. Google Sheets: "Log the Sale"

* **Node:** `Append or update row in sheet`

Next, the workflow logs the purchase details in a Google Sheet. It neatly organizes the customer's name, email, and order information into a new row. This keeps your sales records automatically updated.

If a customer with the same email buys again, the node is smart enough to just update their existing row instead of creating a duplicate entry.

---

### 4. AI Agent: "Write a Thank-You Email"

* **Node:** `AI Agent` (using Google Gemini)

This is the creative part of the workflow. This node acts like an AI assistant that writes a brand new, personalized thank-you email for each customer. It follows a specific set of instructions (a prompt) you've given it, which includes:

* Greeting the customer by their name.
* Mentioning the specific product they just purchased.
* Inviting them to join an exclusive online community (like Discord) with a clickable link.
* Signing off with your company's name.

The AI is specially configured to generate a ready-to-send email, complete with a subject line and a professionally formatted HTML body.

---

### 5. Gmail: "Send the Email"

* **Node:** `Send a message`

This is the final step. The workflow takes the personalized email written by the AI and sends it directly to the customer from your Gmail account. It automatically fills in the "To" field with the customer's email, uses the AI-generated subject line, and adds the custom message body.

After this step, the automation is complete for that customer.

## 🔗 Nodes Used

Google Sheets, Google Drive, Jotform Trigger, Gmail, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
