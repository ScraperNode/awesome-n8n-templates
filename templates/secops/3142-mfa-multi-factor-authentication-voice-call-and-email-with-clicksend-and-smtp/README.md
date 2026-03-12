# 🔒 MFA multi-factor authentication (Voice call and Email) with ClickSend and SMTP

> ⚡ **2,810 views** · 🔒 [SecOps & Security Automation](../)

## Description

This workflow automates the process of sending **voice calls** for verification purposes and combines it with **email verification**. It uses the **ClickSend API** for voice calls and integrates with **SMTP** for email verification. 

This workflow is a powerful tool for automating phone and email verification, ensuring a seamless and secure user verification process.

Below is a breakdown of the workflow:

---

#### **1. How It Works**
The workflow is designed to verify a user's phone number and email address through a combination of voice calls and email verification. Here's how it works:

1. **Form Submission**:
   - The workflow starts with a **Form Trigger** node, where users submit a form with the following fields:
     - **To**: The recipient's phone number (including the international prefix, e.g., +1xxxx).
     - **Voice**: The voice type (male or female).
     - **Lang**: The language for the voice call (e.g., en-us, it-it, fr-fr, etc.).
     - **Email**: The recipient's email address.
     - **Name**: The recipient's name.

2. **Set Voice Code**:
   - The **Set Voice Code** node defines the verification code that will be spoken during the voice call.

3. **Format Code for Voice**:
   - The **Code for Voice** node formats the verification code by adding spaces between characters for better clarity during the voice call.

4. **Send Voice Call**:
   - The call includes the verification code, which is read aloud to the recipient.

5. **Verify Voice Code**:
   - The **Verify Voice Code** node prompts the user to enter the code they received via the voice call.
   - The **Is Voice Code Correct?** node checks if the entered code matches the predefined code.
     - If correct, the workflow proceeds to email verification.
     - If incorrect, the user is notified of the failure.

6. **Set Email Code**:
   - The **Set Email Code** node defines the verification code that will be sent via email.

7. **Send Email**:
   - The **Send Email** node sends an email to the recipient with the verification code using **SMTP**.

8. **Verify Email Code**:
   - The **Verify Email Code** node prompts the user to enter the code they received via email.
   - The **Is Email Code Correct?** node checks if the entered code matches the predefined code.
     - If correct, the user is notified of successful verification.
     - If incorrect, the user is notified of the failure.

---

#### **2. Set Up Steps**
To set up and use this workflow in n8n, follow these steps:

1. **ClickSend API Key**:
   - Create an account on [ClickSend](https://clicksend.com/?u=586989) and obtain your **API Key**.
   - In the **Send Voice** node, set up **HTTP Basic Authentication**:
     - **Username**: Use the username you registered with on ClickSend.
     - **Password**: Use the **API Key** provided by ClickSend.

2. **SMTP Configuration**:
   - Set up **SMTP** credentials in n8n for the **Send Email** node.
   - Ensure the SMTP server is configured to send emails from the specified email address.

3. **Form Configuration**:
   - The **Form Trigger** node is pre-configured with fields for:
     - **To**: The recipient's phone number.
     - **Voice**: Choose between male or female voice.
     - **Lang**: Select the language for the voice call.
     - **Email**: The recipient's email address.
     - **Name**: The recipient's name.
   - Customize the form fields if needed.

4. **Set Verification Codes**:
   - In the **Set Voice Code** node, define the verification code that will be spoken during the voice call.
   - In the **Set Email Code** node, define the verification code that will be sent via email.

5. **Test the Workflow**:
   - Submit the form with the required details (phone number, voice, language, email, and name).
   - The workflow will:
     - Send a voice call with the verification code.
     - Prompt the user to verify the code.
     - Send an email with the verification code.
     - Prompt the user to verify the email code.
     - Notify the user of success or failure.

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Send Email, HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
