# 🤝 Automate paid Zoom meetings with Stripe, Gmail & Google Sheets tracking

> ⚡ **150 views** · 🤝 [CRM & Sales Operations](../)

## Description

### **Streamline Your Zoom Meetings with Secure, Automated Stripe Payments**

This comprehensive workflow automates the entire process of setting up a paid online event, from scheduling a Zoom meeting and creating a Stripe payment link to tracking participants and sending confirmation emails.

#### **How it Works**

This workflow has two primary, distinct branches: Event Creation and Participant Registration.

**Event Creation Flow (Triggered via Form):**
- An administrator submits details (title, price, date/time) via a form.
- The workflow creates a new Zoom meeting with a unique password.
- It creates a Stripe Product and a Payment Link.
- A dedicated Google Sheet tab is created for tracking participants.
- An email is sent to the event organizer with all the details, including the Zoom link, payment link, and participant list URL.

**Participant Registration Flow (Triggered via Stripe Webhook):**
- A webhook is triggered when a Stripe payment is completed (checkout.session.completed).
- The participant's details are added to the dedicated Google Sheet tab.
- A confirmation email is sent to the participant with the Zoom link and password.
- A notification email is sent to the event organizer about the new registration.

#### **Use Cases**

- **Webinar Sales**: Automate setup and registration for paid webinars.

- **Consulting/Coaching Sessions**: Streamline the booking and payment process for group coaching calls.

- **Online Classes**: Handle registration, payment, and access distribution for online courses or classes.

#### **Setup Instructions**

1. **Credentials**: Add credentials for:
   - **Zoom**: For creating the meeting.
   - **Google**: You need both Gmail and Google Sheets credentials.
   - **Stripe**: For creating products and handling payment webhooks.

2. **Google Sheet**: Create a new, blank Google Sheet to hold meeting and participant information.

3. **Config Node**: Fill the Config node with:
   - currency (e.g., EUR).
   - sheet_url (the URL of the Google Sheet you created).
   - teacher_email (the organizer/host's email).

#### **Workflow Logic**

The workflow splits into two logical parts handled by an if node:

**Part A: Event Creation (Triggered by Creation Form)**

1. **Trigger**: Creation Form (Form Trigger).

2. **Check**: if is creation flow (If) evaluates to true.

3. **Zoom**: Create Zoom meeting creates the session.

4. **Stripe Product**: Create Stripe Product creates a product and price in Stripe.

5. **Stripe Link**: Create payment link generates the public payment link, embedding Zoom and sheet metadata.

6. **Google Sheet**: Create participant list creates a new sheet tab for the event.

7. **Email Host**: Send email to teacher notifies the host of the successful setup.

**Part B: Participant Registration (Triggered by On payment)**

1. **Trigger**: On payment (Stripe Trigger - checkout.session.completed).

2. **Format**: Format participant extracts customer details.

3. **Google Sheet**: Add participant to list appends the new participant's info to the event's sheet.

4. **Email Participant**: Send confirmation to participant sends the Zoom access details.

5. **Email Host**: Notify teacher sends a registration alert.

#### **Node Descriptions**

| Node Name | Description |
|-----------|-------------|
| **Creation Form** | A form trigger used to input the event's required details (title, price, start date/time). |
| **On payment** | A Stripe trigger that listens for the checkout.session.completed event, indicating a successful payment. |
| **Create Zoom meeting** | Creates a new Zoom meeting, calculating the start time based on the form inputs. |
| **Create Stripe Product** | Posts to the Stripe API to create a new product and price based on the form data. |
| **Create payment link** | Creates a Stripe Payment Link, embedding Zoom meeting and Google Sheet ID metadata. |
| **Create participant list** | Creates a new tab (named dynamically) in the configured Google Sheet for event tracking. |
| **Add participant to list** | Appends a new row to the event's Google Sheet tab upon payment completion. |
| **Send email to teacher / Notify teacher** | Sends emails to the host/organizer for creation confirmation and new participant registration, respectively. |
| **Send confirmation to participant** | Sends the welcome email to the paying customer with the Zoom access details retrieved from the Stripe metadata. |

#### **Customization Tips**

- **Email Content**: You are encouraged to adapt the email contents in the Gmail nodes to fit your branding and tone.

- **Currency**: Change the currency in the Config node.

- **Zoom Password**: The password is set to a random 4-character string; you can modify the logic in the Create Zoom meeting node.

- **Stripe Price**: The price is sent to Stripe in the smallest currency unit (e.g., cents, * 100).

#### **Suggested Sticky Notes for Workflow**

- **Setup**: "Add Your credentials [Zoom, Google, Stripe]. Note: For Google, you need to add Gmail and Google Sheet. Create a new Google Sheet. Keep this sheet blank for now. And fill the config node."

- **Creation Form**: "Your journey to easy event management starts here. Click this node, copy the production URL, and keep it handy. It's your personal admin tool for quickly creating new meetings."

- **Customize**: "Feel free to adapt email contents to your needs."

- **Config**: "Setup your flow".

#### **Required Files**

- 2DT5BW5tOdy87AUl_Streamline_Your_Zoom_Meetings_with_Secure,_Automated_Stripe_Payments.json: The n8n workflow export file.

- A new, blank Google Sheet (URL configured in the Config node).

#### **Testing Tips**

- **Test Creation**: Run the Creation Form to trigger the Part A flow. Verify that a Zoom meeting and Stripe Payment Link are created, a new Google Sheet tab appears, and the host receives the setup email.

- **Test Registration**: Simulate a successful payment to the generated Stripe link to trigger the Part B flow. Verify that the participant is added to the Google Sheet, receives the confirmation email with Zoom details, and the host receives the notification.

#### **Suggested Tags & Categories**

- #Stripe

- #Zoom

- #Payment

- #E-commerce

- #GoogleSheets

- #Gmail

- #Automation

- #Webinar

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stripe Trigger, Zoom, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
