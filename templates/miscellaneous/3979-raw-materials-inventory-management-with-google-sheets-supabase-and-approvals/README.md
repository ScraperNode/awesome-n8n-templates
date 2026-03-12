# 🔧 Raw materials inventory management with Google Sheets, Supabase and approvals

> ⚡ **5,215 views** · 🔧 [Miscellaneous](../)

## Description

# Automated Raw Materials Inventory Management with Google Sheets, Supabase, and Gmail using n8n Webhooks

![Screenshot 20250514 at 14.02.15.png](fileId:1312)

## Description

### What Problem Does This Solve? 🛠️
This workflow automates raw materials inventory management for businesses, eliminating manual stock updates, delayed material issue approvals, and missed low stock alerts. It ensures real-time stock tracking, streamlined approvals, and timely notifications. 

**Target audience**: Small to medium-sized businesses, inventory managers, and n8n users familiar with Google Sheets, Supabase, and Gmail integrations.

### What Does It Do? 🌟
- Receives raw material data and issue requests via form submissions.
- Updates stock levels in Google Sheets and Supabase.
- Manages approvals for material issue requests with email notifications.
- Detects low stock levels and sends alerts via Gmail.
- Maintains data consistency across Google Sheets and Supabase.

### Key Features 
- Real-time stock updates from form submissions.
- Automated approval process for material issuance.
- Low stock detection with Gmail notifications.
- Dual storage in Google Sheets and Supabase for redundancy.
- Error handling for robust data validation.

## Setup Instructions

### Prerequisites 
- **n8n Instance**: Self-hosted or cloud n8n instance.
- **API Credentials**:
  - **Google Sheets API**: Credentials from Google Cloud Console with Sheets scope, stored in n8n credentials.
  - **Supabase API**: API key and URL from Supabase project, stored in n8n credentials (do not hardcode in nodes).
  - **Gmail API**: Credentials from Google Cloud Console with Gmail scope.
- **Forms**: A form (e.g., Google Form) to submit raw material receipts and issue requests, configured to send data to n8n webhooks.

### Installation Steps 
1. **Import the Workflow**:
   - Copy the workflow JSON from the “Template Code” section (to be provided).
   - Import it into n8n via “Import from File” or “Import from URL”.
2. **Configure Credentials**:
   - Add API credentials in n8n’s Credentials section for Google Sheets, Supabase, and Gmail.
   - Assign credentials to respective nodes. For example:
     - In the Append Raw Materials node, use Google Sheets credentials: `{{ $credentials.GoogleSheets }}`.
     - In the Current Stock Update node, use Supabase credentials: `{{ $credentials.Supabase }}`.
     - In the Send Low Stock Email Alert node, use Gmail credentials.
3. **Set Up Nodes**:
   - **Webhook Nodes (Receive Raw Materials Webhook, Receive Material Issue Webhook)**: Configure webhook URLs and link them to your form submissions.
   - **Approval Email (Send Approval Request)**: Customize the HTML email template if needed.
   - **Low Stock Alerts (Send Low Stock Email Alert, Send Low Stock Email After Issue)**: Configure recipient email addresses.
4. **Test the Workflow**:
   - Submit a test form for raw material receipt and verify stock updates in Google Sheets/Supabase.
   - Submit a material issue request, approve/reject it, and confirm stock updates and notifications.

## How It Works

### High-Level Steps 
1. **Receive Raw Materials**: Processes form submissions for raw material receipts.
2. **Update Stock**: Updates stock levels in Google Sheets and Supabase.
3. **Handle Issue Requests**: Processes material issue requests via forms.
4. **Manage Approvals**: Sends approval requests and processes decisions.
5. **Monitor Stock Levels**: Detects low stock and sends Gmail alerts.

### Detailed Descriptions
Detailed node descriptions are available in the sticky notes within the workflow screenshot (to be provided). Below is a summary of key actions.

## Node Names and Actions

### Raw Materials Receiving and Stock Update
- **Receive Raw Materials Webhook**: Receives raw material data from a form submission.
- **Standardize Raw Material Data**: Maps form data into a consistent format.
- **Calculate Total Price**: Computes `Total Price` (Quantity Received * Unit Price).
- **Append Raw Materials**: Records receipt in Google Sheets.
- **Check Quantity Received Validity**: Ensures `Quantity Received` is valid.
- **Lookup Existing Stock**: Retrieves current stock for the `Product ID`.
- **Check If Product Exists**: Branches based on `Product ID` existence.
- **Calculate Updated Current Stock**: Adds `Quantity Received` to stock (True branch).
- **Update Current Stock**: Updates stock in Google Sheets (True branch).
- **Retrieve Updated Stock for Check**: Retrieves updated stock for low stock check.
- **Detect Low Stock Level**: Flags if stock is below minimum.
- **Trigger Low Stock Alert**: Triggers email if stock is low.
- **Send Low Stock Email Alert**: Sends low stock alert via Gmail.
- **Add New Product to Stock**: Adds new product to stock (False branch).
- **Current Stock Update**: Updates Supabase `Current Stock` table.
- **New Row Current Stock**: Inserts new product into Supabase.
- **Search Current Stock**: Retrieves Supabase stock records.
- **New Record Raw**: Inserts raw material record into Supabase.
- **Format Response**: Removes duplicates from Supabase response.
- **Combine Stock Update Branches**: Merges branches for existing/new products.

### Material Issue Request and Approval
- **Receive Material Issue Webhook**: Receives issue request from a form submission.
- **Standardize Data**: Normalizes request data and adds `Approval Link`.
- **Validate Issue Request Data**: Ensures `Quantity Requested` is valid.
- **Verify Requested Quantity**: Validates `Product ID` and `Submission ID`.
- **Append Material Request**: Records request in Google Sheets.
- **Check Available Stock for Issue**: Retrieves current stock for the request.
- **Prepare Approval**: Checks stock sufficiency for the request.
- **Send Approval Request**: Emails approver with Approve/Reject options.
- **Receive Approval Response**: Captures approver’s decision via webhook.
- **Format Approval Response**: Processes approval data with `Approval Date`.
- **Verify Approval Data**: Validates the approval response.
- **Retrieve Issue Request Details**: Retrieves original request from Google Sheets.
- **Process Approval Decision**: Branches based on approval action.
- **Get Stock for Issue Update**: Retrieves stock before update (Approved).
- **Deduct Issued Stock**: Reduces stock by `Approved Quantity` (Approved).
- **Update Stock After Issue**: Updates stock in Google Sheets (Approved).
- **Retrieve Stock After Issue**: Retrieves updated stock for low stock check.
- **Detect Low Stock After Issue**: Flags low stock after issuance.
- **Trigger Low Stock Alert After Issue**: Triggers email if stock is low.
- **Send Low Stock Email After Issue**: Sends low stock alert via Gmail.
- **Update Issue Request Status**: Updates request status (Approved/Rejected).
- **Combine Stock Lookup Results**: Merges stock lookup branches.
- **Create Record Issue**: Inserts issue request into Supabase.
- **Search Stock by Product ID**: Retrieves Supabase stock records.
- **Issues Table Update**: Updates Supabase `Materials Issued` table.
- **Update Current Stock**: Updates Supabase stock after issuance.
- **Combine Issue Lookup Branches**: Merges issue lookup branches.
- **Search Issue by Submission ID**: Retrieves Supabase issue records.

## Customization Tips
- **Expand Storage Options **: Add nodes to store data in other databases (e.g., Airtable) alongside Google Sheets and Supabase.
- **Modify Approval Email **: Update the Send Approval Request node to customize the HTML email template (e.g., adjust styling or add branding).
- **Alternative Notifications **: Add nodes to send low stock alerts via other platforms (e.g., Slack or Telegram).
- **Adjust Low Stock Threshold **: Modify the Detect Low Stock Level node to change the `Minimum Stock Level` (default: 50).!

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
