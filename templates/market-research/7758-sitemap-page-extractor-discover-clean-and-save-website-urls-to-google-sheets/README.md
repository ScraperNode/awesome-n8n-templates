# 📊 Sitemap page extractor: Discover, clean, and save website URLs to Google Sheets

> ⚡ **1,048 views** · 📊 [Market Research & Insights](../)

## Description

## **Description:** 
Automatically extracts all page URLs from website sitemaps, filters out unwanted sitemap links, and saves clean URLs to Google Sheets for SEO analysis and reporting.

## **How It Works:**
This workflow automates the process of discovering and extracting all page URLs from a website's sitemap structure. Here's how it works step-by-step:

**Step 1:** URL Input
The workflow starts when you submit a website URL through a simple form interface.

**Step 2:** Sitemap Discovery
The system automatically generates and tests multiple possible sitemap URLs including /sitemap.xml, /sitemap_index.xml, /robots.txt, and other common variations.

**Step 3:** Valid Sitemap Identification
It sends HTTP requests to each potential sitemap URL and filters out empty or invalid responses, keeping only accessible sitemaps.

**Step 4:** Nested Sitemap Processing
For sitemap index files, the workflow extracts all nested sitemap URLs and processes each one individually to ensure complete coverage.

**Step 5:** Page URL Extraction
 From each valid sitemap, it parses the XML content and extracts all individual page URLs using both XML &lt;loc&gt; tags and HTML links.

**Step 6:** URL Filtering
The system removes any URLs containing "sitemap" to ensure only actual content pages (like product, service, or blog pages) are retained.

**Step 7:** Google Sheets Integration
Finally, all clean page URLs are automatically saved to a Google Sheets document with duplicate prevention for easy analysis and reporting.

## **Setup Steps:**

**Estimated Setup Time:** 10-15 minutes

**1. Import the Workflow:** 
Import the provided JSON file into your n8n instance.

**2. Configure Google Sheets Integration:**
-  Set up Google Sheets OAuth2 credentials in n8n
- Create a new Google Sheet or use an existing one
- Update the "Save Page URLs to Sheet" node with your Google Sheet URL
- Ensure your sheet has a tab named "Your sheet tab name" with a column header "Column name"


**3. Test the Workflow:**

- Activate the workflow in n8n
- Use the form trigger URL to submit a test website URL
- Verify that URLs are being extracted and saved to your Google Sheet

**4. Customize (Optional):**

- Modify the sitemap URL patterns in the "Build sitemap URLs" node if needed
- Adjust the filtering criteria in the "Exclude the Sitemap URLs" node
- Update the Google Sheets column mapping as required

## **Important Notes:**

- Ensure your Google Sheets credentials have proper read/write permissions
- The workflow handles both XML sitemaps and robots.txt sitemap references
- Duplicate URLs are automatically prevented when saving to Google Sheets
- The workflow continues processing even if some sitemap URLs are inaccessible

## **Need Help?**

For technical support or questions about this workflow:  
✉️ [info@incrementors.com](mailto:info@incrementors.com)  
or  
fill out this form: [Contact Us](https://www.incrementors.com/contact-us/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
