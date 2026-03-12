# 👥 Automate Zoom 🎦 user onboarding with OAuth token management and data tables

> ⚡ **118 views** · 👥 [HR & Recruitment](../)

## Description

This workflow automates the management of **Zoom OAuth tokens** and the **creation of new Zoom users** through the Zoom API.

This workflow automates the process of creating a new Zoom user by first ensuring a valid OAuth access token is available. It is designed to handle the fact that Zoom access tokens are short-lived (1 hour) by using a longer-lived refresh token (90 days) stored in an n8n Data Table.

It includes two main phases:

1. **Token Generation & Management**

   * The workflow initially requests a **Zoom access token** using the OAuth 2.0 “authorization code” method.
   * The resulting **access token** (valid for 1 hour) and **refresh token** (valid for 90 days) are stored in an n8n **Data Table**.
   * When executed again, the workflow checks for the most recent token, refreshes it using the refresh token, and updates the Data Table automatically.

2. **User Creation in Zoom**

   * Once a valid token is retrieved, the workflow collects the user’s first name, last name, and email (set in the “Data” node).
   * It then generates a **secure random password** for the new user.
   * Using the Zoom API, it sends a POST request to create the new user, automatically triggering an invitation email from Zoom.

---

### **Key Features**

1. ✅ **Full Automation of Zoom Authentication**

   * Eliminates manual token handling by automatically refreshing and updating OAuth credentials.

2. ✅ **Centralized Token Storage**

   * Securely stores access and refresh tokens in an n8n Data Table, simplifying reuse across workflows.

3. ✅ **Error Prevention**

   * Ensures that expired tokens are replaced before API requests, avoiding failed Zoom operations.

4.✅  **Automatic User Provisioning**

   * Creates Zoom users automatically with prefilled credentials and triggers Zoom’s built-in invitation process.

5. ✅ **Scalability**

   * Can be easily extended to handle bulk user creation, role assignments, or integration with other systems (e.g., HR, CRM).

6. ✅ **Transparency & Modularity**

   * Each node is clearly labeled with “Sticky Notes” explaining every step, making maintenance and handover simple.

---

### How it works


1.  **Trigger and Data Retrieval:** The workflow starts manually. It first retrieves user data (first name, last name, email) from the "Data" node. In parallel, it fetches all stored token records from a Data Table.
2.  **Token Management:** The retrieved tokens are sorted and limited to get only the most recent one. This latest token (which contains the `refresh_token`) is then used in an HTTP Request to Zoom's OAuth endpoint to generate a fresh, valid `access_token`.
3.  **User Creation:** The new `access_token` and `refresh_token` are saved back to the Data Table for future use. The workflow then generates a random password for the new user, merges this password with the initial user data, and finally sends a POST request to the Zoom API to create the new user. If the creation is successful, Zoom automatically sends an invitation email to the new user.

---

### Set up steps

1.  **Prepare the Data Table:**
    *   Create a new Data Table in your n8n project.
    *   Add two columns to it: `accessToken` and `refreshToken`.

2.  **Configure Zoom OAuth App:**
    *   Create a standard OAuth app in the Zoom Marketplace (not a Server-to-Server app).
    *   Note your Zoom `account_id`.
    *   Encode your Zoom app's `client_id` and `client_secret` in Base64 format (as `client_id:client_secret`).
    *   In both the "Get new token" and "Zoom First Access Token" nodes, replace the `"XXX"` in the `Authorization` header with this Base64-encoded string.

3.  **Generate Initial Tokens (First Run Only):**
    *   Manually execute the "Zoom First Access Token" node once. This node uses an authorization code to fetch the first-ever access and refresh tokens and saves them to your Data Table. The main workflow will use these stored tokens from this point forward.

4.  **Configure User Data:**
    *   In the "Data" node, set the default values for the new Zoom user by replacing the `"XXX"` placeholders for `first_name`, `last_name`, and `email`.

After these setup steps, the main workflow (triggered via "When clicking 'Execute workflow'") can be run whenever you need to create a new Zoom user. It will automatically refresh the token and use the provided user data to create the account.


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
