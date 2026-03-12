# 🔬 Parse & track orders from email with Gemini/GPT & Notion database sync

> ⚡ **139 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# **Automated Email Order Tracking System with AI Classification and Notion Sync**

## Overview

**⚠️ Self-Hosted Solution Required**  
This workflow requires a self-hosted n8n instance with active integrations for Gmail, Google Gemini AI, OpenAI, and Notion. API credentials and database IDs must be configured before use.

---

## Template Image

![image.png](fileId:3011)
---

## Description

This intelligent automation system monitors your Gmail inbox for order-related emails, extracts key order information using AI, and automatically syncs the data to a Notion database for centralized order tracking. Perfect for individuals managing multiple e-commerce accounts or small businesses tracking customer orders across various platforms (Amazon, Noon, Namshi, etc.).

### **What This Workflow Does**

1. **Email Monitoring**: Continuously monitors Gmail inbox for new incoming emails
2. **Smart Classification**: Uses AI to identify order-related emails (confirmations, shipping notifications, delivery updates)
3. **Intelligent Extraction**: Parses email content to extract order details (order number, items, prices, status, delivery info)
4. **Database Synchronization**: Automatically creates or updates Notion database records with order information
5. **Status Tracking**: Monitors order progression through stages (Ordered → Shipped → Out for Delivery → Delivered)

### **Key Features**

- **Multi-vendor support**: Works with any e-commerce platform (Amazon, Noon, Carrefour, Namshi, etc.)
- **Duplicate prevention**: Searches existing records before creating new entries
- **Smart updates**: Only modifies records when order status actually changes
- **Status validation**: Detects backward status changes (potential returns/reshipments)
- **Graceful error handling**: Handles missing data and optional fields intelligently
- **Timestamped history**: Maintains audit trail of all status changes

### **Technologies Used**

- **Gmail Trigger**: Email monitoring
- **JavaScript Code**: Email content classification with pattern matching
- **Google Gemini AI / OpenAI**: Natural language processing for order extraction
- **Structured Output Parser**: JSON formatting and validation
- **Notion API**: Database search, create, and update operations

---

## Prerequisites

Before setting up this workflow, ensure you have:

1. **Self-hosted n8n instance** (version 1.0.0 or higher)
2. **Gmail account** with IMAP access enabled
3. **Google Gemini API key** OR **OpenAI API key**
4. **Notion workspace** with:
   - Integration access configured
   - Database created with the required schema (see below)
   - Integration token/API key

---

## Notion Database Schema

Create a Notion database with the following properties:

### **Required Properties**
| Property Name | Type | Description |
|--------------|------|-------------|
| Name of the Item | Title | Product/item name |
| Order Number | Text | Unique order identifier |
| Quantity | Number | Number of items |
| Expected Date | Date or Text | Expected delivery date |
| Order Status | Select | Options: `Ordered`, `Shipped`, `Out for Delivery`, `Delivered` |

### **Optional Properties** (Recommended)
| Property Name | Type | Description |
|--------------|------|-------------|
| Vendor | Select | E-commerce platform (Amazon, Noon, etc.) |
| Customer Name | Rich Text | Order recipient name |
| Price | Number or Rich Text | Item price |
| Order Total | Number | Total order amount |
| Currency | Select | Currency code (AED, USD, SAR, etc.) |
| Delivery Location | Rich Text | Delivery city/address |
| Notes | Rich Text | Status change history |
| Created Date | Created Time | Auto-populated by Notion |
| Last Updated | Last Edited Time | Auto-populated by Notion |

---

## Setup Instructions

### **Step 1: Import the Workflow**

1. Copy the workflow JSON from this template
2. In your n8n instance, go to **Workflows** → **Add Workflow** → **Import from File/URL**
3. Paste the JSON and click **Import**

---

### **Step 2: Configure Gmail Trigger**

1. Click on the **Gmail Trigger** node
2. Click **Create New Credential**
3. Follow the OAuth authentication flow to connect your Gmail account
4. Configure trigger settings:
   - **Trigger On**: `Message Received`
   - **Filters**: (Optional) Add label filters to monitor specific folders

---

### **Step 3: Configure AI Model (Choose One)**

#### **Option A: Google Gemini AI**

1. Click on the **Google Gemini AI Model** node
2. Click **Create New Credential**
3. Enter your Gemini API key (obtain from [Google AI Studio](https://makersuite.google.com/app/apikey))
4. Select model: `gemini-1.5-pro` or `gemini-1.5-flash`

#### **Option B: OpenAI**

1. Click on the **OpenAI Chat Model** node
2. Click **Create New Credential**
3. Enter your OpenAI API key (obtain from [OpenAI Platform](https://platform.openai.com/api-keys))
4. Select model: `gpt-4o` or `gpt-4-turbo`

---

### **Step 4: Update Email Classification Node**

1. Click on the **Check Email Type** node (JavaScript code)
2. Review the classification patterns (pre-configured for common e-commerce emails)
3. (Optional) Add custom keywords specific to your vendors

---

### **Step 5: Configure Notion Integration**

#### **5.1: Create Notion Integration**

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click **New Integration**
3. Name it (e.g., "n8n Order Tracker")
4. Select your workspace
5. Copy the **Internal Integration Token**

#### **5.2: Share Database with Integration**

1. Open your Notion order database
2. Click **Share** → **Invite**
3. Search for your integration name and select it
4. Grant **Edit** permissions

#### **5.3: Get Database ID**

1. Open your Notion database in browser
2. Copy the database ID from the URL:
   ```
   https://notion.so/workspace/DATABASE_ID?v=...
                              ^^^^^^^^^^^^
   ```

#### **5.4: Configure Notion Nodes**

1. Click on **Search a database in Notion** node
2. Click **Create New Credential**
3. Paste your Integration Token
4. In the node parameters:
   - **Database ID**: Paste your database ID
   - **Filter**: Set to search by `Order Number` property

5. Repeat credential setup for **Create a database page in Notion** and **Update a database page in Notion** nodes

---

### **Step 6: Update Agent Prompts**

1. Click on the **Email Classification and Extraction Agent** node
2. Review the system prompt (pre-configured for common order emails)
3. Update the `{{$now}}` variable if using a different timezone
4. (Optional) Customize extraction rules for specific vendors

5. Click on the **Order Database Sync Agent** node
6. Replace `{{notion_database_id}}` with your actual database ID in the prompt
7. Review status handling logic

---

### **Step 7: Test the Workflow**

1. Click **Execute Workflow** to activate it
2. Send yourself a test order confirmation email
3. Monitor the execution:
   - Check if email was classified correctly
   - Verify extraction output in the AI agent node
   - Confirm Notion database was updated
4. Review your Notion database for the new/updated record

---

### **Step 8: Activate for Production**

1. Click **Active** toggle in the top-right corner
2. The workflow will now run automatically for new emails
3. Monitor executions in the **Executions** tab

---

## Workflow Node Descriptions

### **Email Trigger**
Monitors Gmail inbox for new incoming emails and triggers the workflow when a message is received.

### **Check Email Type**
JavaScript code node that analyzes email content using pattern matching to identify order-related emails based on keywords, order numbers, and shipping terminology.

### **Email Router (IF Node)**
Routes emails based on classification results:
- **TRUE branch**: Order-related emails proceed to extraction
- **FALSE branch**: Non-order emails are filtered out (no action)

### **Email Classification and Extraction Agent**
AI-powered parser using Google Gemini or OpenAI to extract structured order information:
- Order number, items, prices, quantities
- Order status (Ordered/Shipped/Out for Delivery/Delivered)
- Customer name, delivery location, expected dates
- Vendor identification

### **Structured Output Parser**
Validates and formats AI extraction output into clean JSON for downstream processing.

### **Search a database in Notion**
Queries the Notion database by order number to check if a record already exists, preventing duplicates.

### **Order Database Sync Agent**
Intelligent database manager that decides whether to create new records or update existing ones based on search results and status comparison.

### **Create a database page in Notion**
Adds new order records to Notion when no existing record is found.

### **Update a database page in Notion**
Modifies existing records when order status changes, appending timestamped notes for audit history.

### **No Action Taken**
Terminates workflow branch for non-order emails with no further processing.

---

## Customization Options

### **Add More Vendors**
Edit the **Check Email Type** node to add vendor-specific keywords:
```javascript
const customVendors = [
  'your-vendor-name',
  'vendor-domain.com'
];
```

### **Modify Status Values**
Update the **Email Classification and Extraction Agent** prompt to add custom status values or change status progression logic.

### **Add Email Notifications**
Insert a **Send Email** node after database sync to receive notifications for status changes.

### **Filter by Labels**
Configure Gmail Trigger to monitor only specific labels (e.g., "Orders", "Shopping").

### **Multi-Database Support**
Duplicate the Notion sync section to route different vendors to separate databases.

---

## Troubleshooting

### **Email not being classified as order**
- Check the **Check Email Type** node output
- Add vendor-specific keywords to the classification patterns
- Review email content for order indicators

### **AI extraction returning empty data**
- Verify AI model credentials are valid
- Check if email content is being passed correctly
- Review the extraction prompt for compatibility with email format

### **Notion database not updating**
- Confirm integration has edit permissions on the database
- Verify database ID is correct in all Notion nodes
- Check that property names in the workflow match your Notion schema exactly

### **Duplicate records being created**
- Ensure **Search a database in Notion** node is filtering by `Order Number`
- Verify the search results are being evaluated correctly in the sync agent

### **Status not updating**
- Check if the **Order Database Sync Agent** is comparing current vs new status
- Review the status comparison logic in the agent prompt

---

## Performance Considerations

- **Email Volume**: This workflow processes each email individually. For high-volume inboxes, consider adding filters or label-based routing.
- **AI Costs**: Each email classification uses AI tokens. Monitor your API usage and costs.
- **Rate Limits**: Notion API has rate limits (3 requests/second). The workflow handles this gracefully with built-in error handling.

---

## Privacy & Security

- All email content is processed through AI APIs (Google/OpenAI) - review their privacy policies
- Notion data is stored in your workspace with your configured permissions
- No data is stored or logged outside your n8n instance, AI provider, and Notion workspace
- Consider using self-hosted AI models for sensitive order information

---

## Support & Contributions

Found a bug or have a suggestion? Please open an issue or contribute improvements to this template!

---

## License

This template is provided as-is under the MIT License. Feel free to modify and distribute as needed.

---

## Credits

Created for the n8n community to streamline e-commerce order tracking across multiple platforms.

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
