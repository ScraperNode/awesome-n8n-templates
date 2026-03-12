# 💬 Two-factor authentication with ClickSend voice calls and email verification

> ⚡ **123 views** · 💬 [Support Chatbots](../)

## Description

### **N8N Workflow: Send and Check TTS (Text-to-speech) Voice Calls with Email Verification**

This workflow automates a two-factor verification process using a voice call and an email. It is designed to send a text-to-speech (TTS) voice call with a verification code and, upon successful voice verification, to send an email with a second verification code.

#### **How it Works**

This workflow automates the process of sending voice calls for verification and combines it with email verification. It uses the ClickSend API for the voice call and an SMTP integration for sending the email.

#### **Use Cases**

- Two-factor authentication (2FA) for user registration or login.
- Automated verification for phone numbers and email addresses.
- Building a custom verification system for web applications.

#### **Setup Instructions**

1. **ClickSend API**: Register on ClickSend and obtain your API Key. In the **Send Voice** node, create a Basic Auth credential using your ClickSend username and API Key as the password.

2. **SMTP Credentials**: In the **Send Email** node, you must set up your SMTP credentials for the sender's email.

#### **Workflow Logic**

1. **Trigger**: The workflow is started by submitting a form.

2. **Set Voice Code**: The workflow sets a predefined voice verification code.

3. **Send Voice Call**: A voice call is made to the provided phone number using the ClickSend API, where a synthesized voice reads the code.

4. **Verify Voice Code**: A form appears to prompt the user to enter the voice code they received.

5. **Conditional Check**: An If node checks if the entered voice code is correct.

6. **Set Email Code & Send Email**: If the voice code is correct, a second code is set, and an email is sent to the user with that code.

7. **Verify Email Code**: The user is then prompted to enter the code from the email.

8. **Final Check**: A final If node verifies the email code. The workflow either leads to a Success message or a Fail email code message.

#### **Node Descriptions**

| Node Name | Description |
|-----------|-------------|
| **On form submission** | This trigger node presents a form to the user to collect their phone number, desired voice, language, email, and name. |
| **Set voice code** | A Set node that defines the verification code for the voice call. |
| **Code for voice** | A Code node that adds spaces between the digits of the voice code to make it sound clearer during the call. |
| **Send Voice** | This httpRequest node sends a POST request to the ClickSend API to initiate the TTS voice call. |
| **Verify voice code** | A form node that prompts the user to enter the code they received via the voice call. |
| **Is voice code correct?** | An If node that checks if the code entered by the user matches the predefined voice code. |
| **Set email code** | A Set node that defines the verification code for the email. |
| **Send Email** | This node uses an SMTP credential to send an email to the user with their verification code. |
| **Verify email code** | A form node that prompts the user to enter the code they received via email. |
| **Is email code correct?** | An If node that checks if the code entered by the user matches the predefined email code. |
| **Success** | A form node that displays a success message upon completion of both verifications. |
| **Fail voice code** | A form node that displays a failure message if the voice code is incorrect. |
| **Fail email code** | A form node that displays a failure message if the email code is incorrect. |

#### **Customization Tips**

- You can change the verification codes by modifying the values in the **Set voice code** and **Set email code** nodes.
- The form can be customized to change the fields, labels, and dropdown options for voice and language.
- The email content and subject can be customized in the **Send Email** node.

#### **Suggested Sticky Notes for Workflow**

- **STEP 1**: "Register here to ClickSend and obtain your API Key... In the node 'Send Voice' create a 'Basic Auth' with the username you registered and the API Key provided as your password".

- **STEP 2**: "Set the verification code for this explanatory flow... In the node 'Send Email' set the sender".

- **STEP 3**: "Submit the form and you will receive a call to the phone number you entered where the selected voice will tell you the content of the text you wrote".

- **Set voice code**: "Set the code that will be spoken in the verification phone call".

- **Set email code**: "Set the code that will be sent in the verification email".

#### **Required Files**

- 1g8EAij2RwhNN70t_xSend_and_check_TTS_(Text-to-speech)_voice_calls_end_email_verification.json: The n8n workflow export file for this automation.

#### **Testing Tips**

- Run the workflow and submit the form with your phone number and email.
- Check your phone for the voice call and listen for the code.
- Enter the correct voice code in the next form and submit.
- Check your email for the second verification code.
- Enter the correct email code to test the success path, or an incorrect one to test the failure path.

#### **Suggested Tags & Categories**

- #Verification
- #Voice
- #Email
- #API
- #Authentication

## 🔗 Nodes Used

Send Email, HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
