# 🎣 Lusha to Easy Redmine CRM: automated lead enrichment

> ⚡ **203 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

**Use this workflow to enrich lead records from Easy Redmine with Lusha data and sync updated fields back to the CRM.**

### About Workflow  
This workflow connects Easy Redmine CRM with Lusha via API to enrich lead records. It fetches lead data from Easy Redmine, queries Lusha for matching contact information, transforms the results (e.g., phone, employee count, LinkedIn), and updates the original records in Easy Redmine CRM automatically.

### Use Case  
Built for CRM and sales teams using Easy Redmine, this automation replaces manual Lusha lookups and lead updates. It ensures that enriched data is consistently added to your CRM—boosting lead quality and reducing data maintenance time.

### How it works  
- **Schedule Trigger**  
=&gt; Runs daily at a set hour (e.g., 10:00)  
- **Get Leads from Easy Redmine**  
=&gt; Pulls leads via saved query (e.g., today's leads) using the `easy_leads` resource  
- **Split Out**  
=&gt; Breaks down the batch of leads into single records for enrichment  
- **Get Data from Lusha**  
=&gt; Sends HTTP requests to Lusha’s API using lead fields (email, name, company)  
- **Filter Leads Found in Lusha**  
=&gt; Skips leads with missing or failed Lusha enrichment  
- **Contact Data Transformation for CRM**  
=&gt; Maps and transforms contact data:  
  - Extracts phones, email, LinkedIn, job info  
  - Converts employee ranges like [1000, 5000] into `5000`  
  - Flattens nested Lusha response into CRM-friendly format  
- **Update Leads in Easy Redmine CRM**  
=&gt; Sends a PUT request to update each lead  

### How to use  
- Import the workflow into your n8n instance  
- Set credentials for:  
  - Easy Redmine API  
  - Lusha API (HTTP Header Auth)  
- Update the `Get Leads from Easy Redmine` node with your query ID  
- Ensure Lusha API fields (email, name, company) match available lead fields  
- Adjust the transformation logic in the Code node if needed  
- Update the custom field ID in the final PUT request if your CRM uses different IDs  
- Test with sample data before activating the automation  

### Example Use Cases  
- **Sales Intelligence**: Enrich new leads with verified phone and social info  
- **CRM Hygiene**: Keep records consistent and complete without manual edits  
- **Lead Scoring**: Add employee count and LinkedIn for better segmentation  

### Requirements  
- Easy Redmine API access  
- Lusha API access    
- API credentials for both platforms  

### Customization Options  
- Add more fields from Lusha (job title, company website, etc.)  
- Include error notifications if updates fail  
- Add filters to target only leads missing phone or LinkedIn info  
- Use Merge node if fetching multiple lead segments  

### Workflow Improvement Suggestions  
- Rename technical node labels for better readability  
- Secure credentials via environment variables or vault  
- Handle rate limits or retries if using large lead batches  

**This workflow automates lead enrichment, ensuring CRM records are updated with accurate, verified data—without the manual copy-paste.**

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
