# 💬 Automate webinar registration with Zoom & KlickTipp form integration

> ⚡ **103 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

![Zoom registration wf.png](fileId:2329)

**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.

### Introduction
This workflow automates Zoom recurring webinar registrations by capturing form submissions from a KlickTipp Landingpage and enriching contacts with webinar details. Depending on the registrant’s webinar choice (for example “E-Mail Zustellung für Anfänger” or “E-Mail Zustellung für Experten”), the system fetches the correct Zoom webinar info and writes it into KlickTipp. Ideal for running scalable webinar funnels without manual data entry.

### Benefits
- **Instant contact enrichment**: Automatically populates KlickTipp with Zoom join links and session times.  
- **Dynamic segmentation**: Applies specific tags for “Beginner” or “Expert” webinar participants.  
- **Scalable structure**: Router logic allows easy extension for more webinar types.  

### Key Features
- **KlickTipp Trigger**:
  - Starts the workflow when a landing-page form is submitted via outbound webhook.
- **Switch Router**:
  - Routes based on the webinar selection.
  - Supports multiple webinar options.
- **Zoom API Integration**:
  - Retrieves recurring webinar data including join URL and future occurrences.
  - webinar IDs are set per path (Beginner vs Expert).
- **KlickTipp Contact Sync**:
  - Updates or subscribes contacts in the correct list.
  - Writes custom fields for join link and next session timestamp.
  - Applies topic-specific tags for segmentation.

---

### Custom Fields (KlickTipp Setup)

| **Name**                        | **Field type**   |
|---------------------------------|----------------|
| Zoom \| webinar choice          | Line Text          |
| Zoom \| webinar start timestamp | Date & Time   |
| Zoom \| Join URL                | URL            |
| Zoom \| Registration ID         | Line Text          |
| Zoom \| Duration webinar        | Line Text              |

---

### Tags (Segmentation)

- Zoom webinar E-Mail Zustellung für Anfänger  
- Zoom webinar E-Mail Zustellung für Experten  

---

### Setup Instructions
**KlickTipp Preparation**
- Create the custom fields above.  
- Add dropdown for webinar choice on landing page.  
- Configure outbound webhook to n8n.  

**Credential Configuration**
- Authenticate KlickTipp API.  
- Connect Zoom via OAuth2 (`webinar:write:registrant` scope).  
- Insert correct Zoom webinar IDs in workflow nodes.  

**Field Mapping**
- Map the zoom data to the newly created KlickTipp custom fields.
- Ensure tags match campaign setup.  

---

### Testing and Deployment
1. Submit a registration form.  
2. Confirm workflow triggers and Zoom data is fetched.  
3. Verify KlickTipp contact is updated with:  
   - Join URL  
   - Start timestamp  
   - Correct segmentation tag  

⚠️ *Note*: Zoom OAuth tokens may expire — refresh when needed. Zoom may also enforce API rate limits.  

---

### Campaign Expansion Ideas
- Add more webinar types and extend router.  
- Build reminder and follow-up campaigns in KlickTipp by tag.  
- Track attendance tags for automated post-event actions.  

### Customization
- Adapt Zoom nodes for webinars.  
- Add fallback logic if Zoom data is missing.  
- Trigger cross-tool automations (CRM, Slack, invoicing).  

**Resources:**  
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
