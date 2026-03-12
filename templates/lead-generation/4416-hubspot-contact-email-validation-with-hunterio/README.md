# 🎣 HubSpot contact email validation with Hunter.io

> ⚡ **566 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Workflow: HubSpot Contact Email Validation with Hunter.io

## Overall Goal

This workflow retrieves contacts from HubSpot that have an email address but haven't yet had their email validated by Hunter. It then iterates through each of these contacts, uses Hunter.io to verify their email, updates the contact record in HubSpot with the validation status and date, and finally sends a summary email notification upon completion.

## How it Works (Step-by-Step Breakdown)

### Node: "When clicking ‘Test workflow’" (Manual Trigger)
- **Type:** n8n-nodes-base.manualTrigger
- **Purpose:** Start the workflow manually via the n8n interface.
- **Output:** Triggers workflow execution.

### Node: "HubSpot" (HubSpot)
- **Type:** n8n-nodes-base.hubspot
- **Purpose:** Fetch contacts from HubSpot.
- **Configuration:**
  - Authentication: App Token
  - Operation: Search for contacts
  - Return All: True
  - Filter Groups:
    - Contact HAS_PROPERTY email
    - Contact NOT_HAS_PROPERTY hunter_email_validation_status
- **Output:** List of contact objects.

### Node: "Loop Over Items" (SplitInBatches)
- **Type:** n8n-nodes-base.splitInBatches
- **Purpose:** Process each contact one-by-one.
- **Configuration:**
  - Options &gt; Reset: false
- **Output:**
  - Output 1 to "Hunter"
  - Output 2 to "Send Email"

### Node: "Hunter" (Inside the loop)
- **Type:** n8n-nodes-base.hunter
- **Purpose:** Verify email with Hunter.io
- **Configuration:**
  - Operation: Email Verifier
  - Email: `{{ $json.properties.email }}`

### Node: "Add Hunter Details (Contact)" (HTTP Request - Inside the loop)
- **Type:** n8n-nodes-base.httpRequest
- **Purpose:** Update HubSpot contact.
- **Configuration:**
  - Method: PATCH
  - URL: `https://api.hubapi.com/crm/v3/objects/contacts/{{ $('Loop Over Items').item.json.id }}`
  - Headers: Content-Type: application/json
  - Body (JSON):
    ```json
    {
      "properties": {
        "hunter_email_validation_status": "{{ $json.status }}",
        "hunter_verification_date": "{{ $now.format('yyyy-MM-dd') }}"
      }
    }
    ```

### Node: "Wait" (Inside the loop)
- **Type:** n8n-nodes-base.wait
- **Purpose:** Avoid API rate limits.
- **Configuration:** Wait for 1 second.

### Node: "Replace Me" (NoOp - Inside the loop)
- **Type:** n8n-nodes-base.noOp
- **Purpose:** Junction node to complete the loop.

### Node: "Send Email" (After the loop completes)
- **Type:** n8n-nodes-base.emailSend
- **Purpose:** Send summary notification.
- **Configuration:**
  - From Email: test@gmail.com
  - To Email: akhilgadiraju@gmail.com
  - Subject: "Email Verification Completed for Your HubSpot Contacts"
  - HTML: Formatted confirmation message

## Sticky Notes
- "HubSpot": Create custom properties (`hunter_email_validation_status`, `hunter_verification_date`).
- "Add Hunter Details": Ensure field names match HubSpot properties.
- "Wait": Prevent API rate limits.

## How to Customize It

### Trigger
- Replace Manual Trigger with Schedule Trigger (Cron) for automation.
- Optionally use HubSpot Trigger for new contact events.

### HubSpot Node
- Create matching custom properties.
- Adjust filters and returned properties as needed.

### Hunter Node
- Minimal customization needed.

### HTTP Request Node
- Update JSON property names if renaming in HubSpot.
- Customize date format as needed.

### Wait Node
- Adjust wait time to balance speed and API safety.

### Email Node
- Customize email addresses, subject, and body.
- Add dynamic contact count with a Set or Function node.

## Error Handling
- Add Error Trigger nodes.
- Use If nodes inside loop to act on certain statuses.

## Use Cases
- Clean your email list.
- Enrich CRM data.
- Prep verified lists for campaigns.
- Automate contact hygiene on a schedule.

## Required Credentials

### HubSpot App Token
- Used by: HubSpot node and HTTP Request node
- Create a Private App in HubSpot with required scopes.

### Hunter API
- Used by: Hunter node

### SMTP
- Used by: Email Send node
- Configure host, port, username, and password.

---

**Made with ❤️ using n8n by Akhil.**

## 🔗 Nodes Used

Send Email, HTTP Request, HubSpot, Hunter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
