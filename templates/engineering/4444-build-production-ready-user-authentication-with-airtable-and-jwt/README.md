# ⚒️ Build production-ready user authentication with Airtable and JWT

> ⚡ **915 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

This n8n workflow provides a comprehensive solution for user authentication and management, leveraging Airtable as the backend database. It includes flows for user sign-up and login, aswell as the sample crud operations retrieving user details, and updating user information.

**Youtube Video of me explaining the flow:** https://www.youtube.com/watch?v=gKcGfyq3dPM

### How it Works

**User Sign-Up Flow**
1.  **Receives POST request**: A webhook listens for POST requests containing new user details (email, first name, last name, password).
2.  **Checks for existing email**: The workflow queries Airtable to see if the submitted email already exists.
3.  **Handles email in use**: If the email is found, it responds with `{"response": "email in use"}`.
4.  **Creates new user**: If the email is unique, the password is **SHA256 hashed (Base64 encoded)**, and the user's information (including the hashed password) is stored in Airtable. A successful response of `{"response": "success"}` is then sent.

**User Login Flow**
1.  **Receives POST request**: A webhook listens for POST requests with user email and password for login.
2.  **Verifies user existence**: It checks Airtable for a user with the provided email. If no user is found, it responds with a failure message (`"wrong email"`).
3.  **Compares passwords**: If a user is found, the submitted password is **hashed (SHA256, Base64 encoded)** and compared with the stored hashed password in Airtable.
4.  **Responds with JWT or error**: If passwords match, a **JWT token** containing the user's ID and email is issued. If they don't match, a `"wrong password"` response is sent.

**Flows for a Logged-In User**

These flows require a **JWT-authenticated request**.

* **Get User Details:**
    1.  **Webhook (GET)**: Receives a JWT-authenticated request.
    2.  **Airtable (Read)**: Fetches the current user’s record using the `jwtPayload.id`.
    3.  **Set Node ("Specify Current Details")**: Maps fields like "First Name," "Last Name," "Email," and "Date" from Airtable to a standard output format.

* **Update User Details:**
    1.  **Webhook (POST)**: Receives updated user data (email, name, password).
    2.  **Airtable (Upsert)**: Updates the record matching `jwtPayload.id` using the submitted fields.
    3.  **Set Node ("Specify New Details")**: Outputs the updated data in a standard format.

### Set Up Steps (Approx. 5 Minutes)

**Step 1: Set up your Airtable Base and Table**

You'll need an Airtable Base and a table to store your user data. Ensure your table has at least the following columns:

* **Email** (Single Line Text)
* **First Name** (Single Line Text)
* **Last Name** (Single Line Text)
* **Password** (Single Line Text - this will store the hashed password)
* **Date** (Date - optional, for user sign-up date)

**Step 2: Obtain an Airtable Personal Access Token**

1.  Go to the Airtable website and log in to your account.
2.  Navigate to your personal access token page (usually found under your developer settings or by searching for "personal access tokens").
3.  Click "Create new token."
4.  Give your token a name (e.g., "n8n User Management").
5.  **Grant necessary permissions**:
    * **Scope**: `data.records:read`, `data.records:write` for the specific base you will be using.
    * **Base**: Select the Airtable base where your user management table resides.
6.  Generate the token and **copy it immediately**. You won't be able to see it again. Store it securely.

**Step 3: Create a JWT Auth Credential in n8n**

1.  In your n8n instance, go to "Credentials" (usually found in the left-hand sidebar).
2.  Click "New Credential" and search for "JWT Auth".
3.  Give the credential a name (e.g., "UserAuthJWT").
4.  For the "Signing Secret," enter a strong, random string of characters. This secret will be used to sign and verify your JWT tokens. **Keep this secret highly confidential.**
5.  Save the credential.

### Customization Options

This workflow is designed to be highly adaptable:

* **Database Integration**: Easily switch from Airtable to other databases like PostgreSQL, MySQL, MongoDB, or even Google Sheets by replacing the Airtable nodes with the appropriate database nodes in n8n.
* **Authentication Methods**: Extend the authentication to include multi-factor authentication (MFA), social logins (Google, Facebook), or integrate with existing identity providers (IdP) by adding additional nodes.
* **User Profile Fields**: Add or remove user profile fields (e.g., phone number, address, user roles) by adjusting the Airtable table columns and the Set nodes in the workflow.
* **Notification System**: Integrate notification systems (e.g., email, SMS) for events like new user sign-ups, password resets, or account changes.
* **Admin Panel**: Build an admin panel using n8n to manage users directly, including functionalities for adding, deleting, or updating user records, and resetting passwords.

This workflow provides a solid foundation for building robust user management systems, adaptable to a wide range of applications and security requirements.

---

### Need Assistance or Customization?

Do you have specific integrations in mind, or are you looking to add more user management features to this workflow?

If you need help setting this up, or want to adapt it for a unique use case, don't hesitate to reach out! You can contact me directly at **nanabrownsnr@gmail.com**. I'd be glad to assist you.

## 🔗 Nodes Used

Airtable, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
