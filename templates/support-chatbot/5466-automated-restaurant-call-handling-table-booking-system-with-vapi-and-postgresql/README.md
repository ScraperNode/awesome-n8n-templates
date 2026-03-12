# 💬 Automated restaurant call handling & table booking system with VAPI and PostgreSQL

> ⚡ **7,166 views** · 💬 [Support Chatbots](../)

## Description

Acts as a virtual receptionist for the restaurant, handling incoming calls via VAPI without human intervention. It collects user details (name, booking time, number of people) for table bookings, checks availability in a PostgreSQL database using n8n, books the table if available, and sends confirmation. It also provides restaurant details to users, mimicking a human receptionist.

### Key Insights

1. VAPI must be configured to accurately capture user input for bookings and inquiries.
2. PostgreSQL database requires a table to manage restaurant bookings and availability.

### Workflow Process

- Initiate the workflow with a VAPI call to collect user details (name, time, number of people).  
- Use n8n to query the PostgreSQL database for table availability.  
- If a table is available, book it using n8n and update the PostgreSQL database.  
- Send a booking confirmation and hotel service details back to VAPI via n8n.  
- Store and update restaurant table data in the PostgreSQL database using n8n.

### Usage Guide

1. Import the workflow into n8n and configure VAPI and PostgreSQL credentials.  
2. Test with a sample VAPI call to ensure proper data collection and booking confirmation.

### Prerequisites

- VAPI API credentials for call handling  
- PostgreSQL database with booking and availability tables  

### Customization Options

Modify the **VAPI** input fields to capture additional user details or adjust the **PostgreSQL** query for specific availability criteria.

## 🔗 Nodes Used

Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
