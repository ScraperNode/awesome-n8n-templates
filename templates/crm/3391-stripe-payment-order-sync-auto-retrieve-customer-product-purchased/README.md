# 🤝 Stripe payment order sync – auto retrieve customer & product purchased

> ⚡ **3,848 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Overview

This automation template is designed to streamline your payment processing by automatically triggering upon a successful Stripe payment. The workflow retrieves the complete payment session and filters the information to display only the customer name, customer email, and the purchased product details. This template is perfect for quickly integrating Stripe transactions into your inventory management, CRM, or notification systems.

## Step-by-Step Setup Instructions

1. **Stripe Account Configuration:**
   - Ensure you have an active Stripe account.
   - Connect your Stripe Credentials.
  
2. **Retrieve Product and Customer Data:**
   - Utilize Stripe’s API within the automation to fetch the purchased product details.
   - Retrieve customer information such as: email and full name.

3. **Integration and Response:**
   - Map the retrieved data to your desired format.
   - Trigger subsequent nodes or actions such as sending a confirmation email, updating a CRM system, or logging the transaction.

## Pre-Conditions and Requirements

- **Stripe Account:** A valid Stripe account with access to API keys and webhook configurations.
- **API Keys:** Ensure you have your Stripe secret and publishable keys ready.

## Customization Guidance

- **Data Mapping:** Customize the filtering node to match your specific data schema or to include additional data fields if needed.
- **Additional Actions:** Integrate further nodes to handle post-payment actions like sending SMS notifications, updating order statuses, or generating invoices.

Enjoy seamless integration and enhanced order management with this automation template!

## 🔗 Nodes Used

HTTP Request, Stripe Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
