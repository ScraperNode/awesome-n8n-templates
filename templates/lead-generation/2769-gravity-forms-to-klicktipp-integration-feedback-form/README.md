# 🎣 Gravity forms to KlickTipp integration - feedback form

> ⚡ **613 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

![Gravity Forms WF.png](fileId:1066)

**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.

**How It Works**  

Gravity Forms Customer Feedback Form Integration: This workflow streamlines the process of handling customer feedback submitted via Gravity Forms. It ensures the data is correctly formatted and seamlessly integrates with KlickTipp.  

Data Transformation: Input data is validated and transformed to meet KlickTipp’s API requirements, including formatting phone numbers and converting dates.  

**Key Features**  

**Gravity Forms Trigger**  
- Captures new form submissions from Gravity Forms via a webhook and initiates the workflow.  

**Data Processing and Transformation**  
- Formats and validates essential data:  
  - Converts phone numbers to numeric-only format with international prefixes.  
  - Transforms dates (e.g., birthdays) to UNIX timestamps.  
  - Calculates and scales numeric responses (e.g., webinar ratings).  
  - Parses webinar selections into timestamps for structured scheduling.  

**Subscriber Management in KlickTipp**  
- Adds or updates contacts in a KlickTipp subscriber list.  
- Includes custom field mappings such as:  
  - Personal details (name, email, birthday, phone number).  
  - Feedback and preferences (e.g., webinar ratings, chosen sessions).  
  - Structured answers from form responses.
- Tags contacts for segmentation: Adds fixed and dynamic tags to contacts.
  

**Error Handling**  
- Ensures invalid or empty data is handled gracefully, preventing workflow interruptions.  

**Setup Instructions**  

**Install and Configure Nodes:**  
- Set up the Webhook, Set, and KlickTipp nodes in your n8n instance.  
- Authenticate your Gravity Forms and KlickTipp accounts.  

**Prepare Custom Fields in KlickTipp:**  
- Create fields in KlickTipp to align with the form submission data, such as:  

| **Field Name**                               | **Field Type**   |
|----------------------------------------------|------------------|
| Gravityforms \| URL Linkedin                 | URL              |
| Gravityforms \| Course/webinar start timestamp | Date & Time      |
| Gravityforms \| Course/webinar rating        | Decimal Number   |
| Gravityforms \| Feedback                     | Text             |
| Gravityforms \| Contact permission           | Text             |

After creating fields, allow 10-15 minutes for them to sync. If fields don’t appear, reconnect your KlickTipp credentials.  

**Field Mapping and Adjustments:**  
Verify and customize field assignments in the workflow to align with your specific form and subscriber list setup.  

**Workflow Logic**  

1. **Trigger via Gravity Forms Submission:**  
   The workflow begins when a new form submission is received through the webhook.  

2. **Transform Data for KlickTipp:**  
   Formats and validates raw form data for compatibility with KlickTipp’s API.  

3. **Add to KlickTipp Subscriber List:**  
   Adds processed data as a new subscriber or updates an existing one.  

4. **Get all tags from KlickTipp and create a list:** Fetches all existing Tags and turns them into an array

5. **Define tags to dynamically set for contacts:** Definiton of variables that are received from the form submission and should be converted into tags

6. **Merge tags of both lists:**
Checks whether the list of existing tags in KlickTipp contains the tags which should be dynamically set based on the form submission

7. **Tag creation and tagging contacts:** Creates new tags if it previously did not exist and then tags the contact


**Benefits**  

**Efficient lead generation:** Contacts from forms are automatically imported into KlickTipp and can be used immediately, saving time and increasing the conversion rate.  
**Automated processes:** Experts can start workflows directly, such as welcome emails or course admissions, reducing administrative effort.  
**Error-free data management:** The template ensures precise data mapping, avoids manual corrections and reinforces a professional appearance.  

**Testing and Deployment**  

Test the workflow by filling the form on Gravity Forms and verifying data updates in KlickTipp.  

**Notes**  

**Customization:** Update field mappings within the KlickTipp nodes to align with your account setup. This ensures accurate data syncing.  

**Resources:**  
- [Gravity Forms KlickTipp Knowledge Base help article](https://www.klicktipp.com/de/support/wissensdatenbank/gravity-forms-integration-n8n/)
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
