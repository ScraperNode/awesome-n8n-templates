# ⚡ Effortless job hunting: Let this automation find your next role

> ⚡ **11,666 views** · ⚡ [Personal Productivity](../)

## Description

# Find Job Postings from LinkedIn, Indeed, and Glassdoor and Save Them to Google Sheets Using AI

## Overview
Effortlessly discover and apply to jobs tailored to your profile—AI handles the search, you handle the interviews.

Say goodbye to endless job board scrolling. This automation leverages AI to analyze your resume, identify your skills, experience, and more, to match you with the most relevant job opportunities. It sources job postings from LinkedIn, Indeed, Glassdoor, ZipRecruiter, Monster, and other public job sites on the web. With seamless integration and automatic organization of results, you can focus on applying rather than searching.

## Key Features

### **Intelligent Resume Parsing**
- Extracts key information from your PDF resume using AI.
- Identifies skills, experience, education, and job preferences.

### **Targeted Job Matching**
- Uses the parsed resume data to search for jobs that align with your profile.
- Ensures relevance by analyzing job descriptions for matching criteria.

### **Automated Data Organization**
- Compiles job listings into a structured Google Spreadsheet.
- Eliminates the need for manual data entry, saving valuable time.

### **Easy Access and Review**
- Stores results in a familiar Google Sheets format for easy tracking.
- Allows for filtering and sorting to prioritize applications.

## **Setup Instructions**

### **Prerequisites**
- A free API key for the job search service.
- Google Drive and Google Sheets accounts.
- An updated resume in PDF format.

### **Step 1: Connect Your Resume Parsing AI**
1. Upload your PDF resume to Google Drive.
2. Configure the AI parser node in n8n to extract relevant information.
3. Map the extracted fields (e.g., skills, job title, experience) for job searching.

### **Step 2: Automate the Job Search**
1. Use the extracted data to perform a job search on LinkedIn, Indeed, Glassdoor, and other supported job sites.
2. Retrieve job postings based on relevant keywords and location preferences.

### **Step 3: Save Job Listings to Google Sheets**
1. Create a new Google Sheet to store job listings.
2. Set up the automation to write job details (e.g., title, company, location, link) into the sheet.
3. Format the sheet for better readability and tracking.

### **Step 4: Review and Apply to Jobs**
1. Open your Google Sheet to view job matches.
2. Click on the links to apply directly on the respective job sites.
3. Update the status of each job application as you progress.

## **Why Use This Automation?**
- **Saves Time**: Automates job searching and listing compilation.
- **Enhances Efficiency**: Eliminates manual scrolling and data entry.
- **Improves Organization**: Keeps all job opportunities in a structured format.
- **Optimizes Your Job Hunt**: Increases chances of landing the perfect role.

Designed specifically for job seekers aiming to optimize their search process, this automation integrates with Google Drive and Sheets, streamlining your job hunt and enhancing your chances of finding the right opportunity. Get started today and accelerate your career growth!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Read PDF, Google Drive, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
