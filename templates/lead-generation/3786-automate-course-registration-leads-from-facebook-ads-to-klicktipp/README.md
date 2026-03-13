# 🎣 Automate Course Registration Leads from Facebook Ads to KlickTipp

> ⚡ **3,313 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![FB WF.png](fileId:1856)

**Community Node Disclaimer:** This workflow uses KlickTipp community nodes.

**How It Works:**  

**Facebook Lead Ads to KlickTipp Integration:**  
This workflow automatically transfers lead information submitted via Facebook Lead Ads into KlickTipp. It is ideal for automating course registrations or similar campaigns, enabling targeted email sequences based on user input.  

**Data Handling:**  
Lead data from Facebook is received via webhook, matched to KlickTipp’s custom fields, and the contact is tagged for segmentation and automation.


**Key Features**  

**Webhook Trigger for Facebook Lead Ads:**  
- Captures new lead form submissions from Facebook, including:
  - Name
  - Email address
  - Chosen course
  - Preferred payment method
  - Optional comments  

**Data Mapping & Validation:**  
- Maps Facebook field values to pre-defined custom fields in KlickTipp  

**Subscriber Management in KlickTipp:**  
- Adds or updates leads as subscribers in KlickTipp  
- Includes mapping to custom fields such as:
  - `Course choice`
  - `Payment Option`
  - `Comment`  
- Assigns relevant tags for automated campaign triggers


**Setup Instructions**  

**1. Prepare KlickTipp Custom Fields:**  
Before using the workflow, create the following custom fields in KlickTipp under → Contacts → Custom fields:  

| **Field Name**            | **Field Type** |
|------------------------------------------|----------------|
| Facebook Leads Ads \| Comment            | Text           |
| Facebook Leads Ads \| Course choice      | Text           |
| Facebook Leads Ads \| Payment option     | Text           |

**2. Facebook Lead Ads Setup:**  
- Create a lead form under Facebook Ads Manager  
- Include custom fields for course interest, payment preference, and comments   

**3. Set Up Facebook Webhook in n8n:**  
- Use the Facebook Lead Ads node to create a webhook  
- Authenticate your Facebook account  
- Choose the Page and corresponding lead form  
- Save and activate the webhook  

**4. Map Data to KlickTipp Fields:**  
- Open the KlickTipp node to Authenticate with your credentials (username&password)  
- Map the fields from the Facebook webhook to the according custom fields in KlickTipp. 


**Testing & Deployment**  

**Run a Test:**  
- Use Meta’s testing tool to generate a test lead  
- Run the n8n workflow once manually  

Note: Facebook test email (e.g., test@fb.com) is invalid—expect an error in KlickTipp during testing. You can pin the output of the node and manipulate the address to a valid test-address.


**Workflow Logic**  

1. **Webhook Trigger from Facebook:** Initiates workflow upon new lead form submission  
2. **Add or Update Contact in KlickTipp:** Submits mapped data into your KlickTipp account 


**Benefits**  

**Automated Lead Management:**  
No manual data transfers needed—new Facebook leads are instantly pushed to KlickTipp.  

**Personalized Campaigns:**  
Segment leads based on selected course or payment method for targeted follow-up emails.   


**Notes:**  

**Customization:**  
Adjust field mappings in the KlickTipp node based on your lead form structure. Ensure all required fields (email, opt-in, etc.) are mapped correctly.  

**Resources:**  
- Use the [Meta Lead Ads Testing Tool](https://developers.facebook.com/tools/lead-ads-testing) to simulate lead submissions during setup.
- Look into our knowledgebase article [Send Facebook Leads to KlickTipp with Make or n8n](https://www.klicktipp.com/de/support/wissensdatenbank/facebook-leads-make-n8n-integration/) to learn more.
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)

## 🔗 Nodes Used

Facebook Lead Ads Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
