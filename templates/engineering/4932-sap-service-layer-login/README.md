# ⚒️ Sap service layer login

> ⚡ **2,409 views** · ⚒️ [Engineering](../)

## Description

This minimal utility workflow connects to the SAP Business One Service Layer API to verify login credentials and return the session ID. It's ideal for testing access or using as a sub-workflow to retrieve the B1SESSION token for other operations.

**++⚙️ HOW IT WORKS:++**
**🔹 1. Trigger Manually**

The workflow is initiated using a Manual Trigger.

Ideal for testing or debugging credentials before automation.

**🔹 2. Set SAP Login Data**

The Set Login Data node defines four key input variables:

sap_url: Base URL of the SAP B1 Service Layer (e.g. https://sap-server:50000/b1s/v1/)

sap_username: SAP B1 username

sap_password: SAP B1 password

sap_companydb: SAP B1 Company DB name

**🔹 3. Connect to SAP**

A HTTP Request node performs a POST to the Login endpoint.

The body is structured as:

{
  "UserName": "your_sap_username",
  "Password": "your_sap_password",
  "CompanyDB": "your_sap_companydb"
}

If successful, the response contains a SessionId which is essential for authenticated requests.

**🔹 4. Return Session or Error**

The response is branched:

On success → the sessionID is extracted and returned.

On failure → the error message and status code are stored separately.

**++🛠 SETUP STEPS:++**
**1️⃣ Create SAP Service Layer Credentials**
Although this workflow uses manual inputs (via Set), it's best to define your connection details as environment variables for reuse:

SAP_URL=https://your-sap-host:50000/b1s/v1/
SAP_USER=your_sapuser
SAP_PASSWORD=your_password
SAP_COMPANY_DB=your_companyDB

Alternatively, update the Set Login Data node directly with your values.

**2️⃣ Run the Workflow**
Click "Execute Workflow" in n8n.

Watch the response from SAP:

If successful: sessionID will be available in the Success node.

If failed: statusCode and errorMessage will be available in the Failed node.

**++✅ USE CASES:++**
- 🔄 Reusable Login Module
Export this as a reusable sub-workflow for other SAP-integrated flows.

- 🔐 Credential Testing Tool
Validate new environments, test credentials before deployment.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
