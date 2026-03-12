# 💬 Automated demo scheduling system with Outlook Calendar and Zoom integration

> ⚡ **529 views** · 💬 [Support Chatbots](../)

## Description

## Live Demo Booking Form with Outlook Calendar and Zoom link

### Who’s it for
This workflow is designed for SaaS companies, consultants, or sales teams that regularly run live demos. It helps automate demo scheduling, ensuring clients can only book from available time slots while instantly generating Zoom links and calendar invitations.

### How it works / What it does
1. **Client fills demo request form** → Collects company, contact details, and a preferred date.  
2. **Check Outlook calendar availability** → Searches for pre-created “Online Meeting Slot” events.  
3. **Time slot selection** → If the date has slots, the client chooses from up to 3 nearest available times. If not, they’re asked to pick another date.  
4. **Create Zoom meeting** → Once a date & time are confirmed, a Zoom link is automatically generated.  
5. **Update Outlook calendar** → The chosen slot is updated with the client’s details and Zoom link, marked as “Booked Live Demo” so it can’t be double-booked.  
6. **Send confirmation** → The client receives a styled confirmation screen, and both parties get the calendar invite.

### How to set up
1. Import the workflow JSON into your n8n instance.  
2. Configure the following credentials:  
   - **Microsoft Outlook OAuth2 API** (for calendar access).  
   - **Zoom OAuth2 API** (for automatic meeting creation).  
3. Pre-create “Online Meeting Slot” events in your Outlook calendar to define available demo times.  
4. Publish the form via n8n’s webhook URL (embed it in your website or share the link).  
5. Test by submitting a request to ensure slots update correctly and Zoom links are created.

### Requirements
- n8n self-hosted or cloud account.  
- Microsoft Outlook account with calendar access.  
- Zoom account with OAuth2 credentials.  
- Pre-created calendar slots named **“Online Meeting Slot”**.

### How to customize the workflow
- **Form fields**: Adjust the client details form to capture additional data (e.g., industry, product interest).  
- **Email/notification**: Add an Email or Slack node to notify your sales team of new demo bookings.  
- **Custom branding**: Update the CSS in the form nodes to match your company’s style.  
- **Capacity rules**: Modify the IF nodes to limit the number of bookings per day or adjust the slot-checking logic.

## 🔗 Nodes Used

HTTP Request, Zoom, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
