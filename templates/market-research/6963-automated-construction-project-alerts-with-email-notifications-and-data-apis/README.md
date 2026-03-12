# 📊 Automated construction project alerts with email notifications and data APIs

> ⚡ **493 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow monitors and alerts you about new construction projects in specified areas, helping you track competing builders and identify business opportunities. The system automatically searches multiple data sources and sends detailed email reports with upcoming projects.

## **Good to know**
* Email parsing accuracy depends on the consistency of request formats - use the provided template for best results.
* The workflow includes fallback mock data for demonstration when external APIs are unavailable.
* Government data sources may have rate limits - the workflow includes proper error handling.
* Results are filtered to show only upcoming/recent projects (within 3 months).

## **How it works**
* **Email Trigger** - Detects new email requests with "Construction Alert Request" in the subject line
* **Check Email Subject** - Validates that the email contains the correct trigger phrase
* **Extract Location Info** - Parses the email body to extract area, city, state, and zip code information
* **Search Government Data** - Queries government databases for public construction projects and permits
* **Search Construction Sites** - Searches construction industry databases for private projects
* **Process Construction Data** - Combines and filters results from both sources, removing duplicates
* **Wait For Data** - Wait for Combines and filters results.
* **Check If Projects Found** - Determines whether to send a results report or no-results notification
* **Generate Email Report** - Creates a professional HTML email with project details and summaries
* **Send Alert Email** - Delivers the construction project report to the requester
* **Send No Results Email** - Notifies when no projects are found in the specified area

The workflow also includes a **Schedule Trigger** that can run automatically on weekdays at 9 AM for regular monitoring.

## **Email Format Examples**

### **Input Email Format**
```
To: alerts@yourcompany.com
Subject: Construction Alert Request

Area: Downtown Chicago
City: Chicago  
State: IL
Zip: 60601

Additional notes: Looking for commercial projects over $1M
```

**Alternative format:**
```
To: alerts@yourcompany.com
Subject: Construction Alert Request

Please search for construction projects in Miami, FL 33101
Focus on residential and mixed-use developments.
```

### **Output Email Example**
```html
Subject: 🏗️ Construction Alert: 8 Projects Found in Downtown Chicago

🏗️ Construction Project Alert Report

Search Area: Downtown Chicago
Report Generated: August 4, 2024, 2:30 PM

📊 Summary
Total Projects Found: 8
Search Query: Downtown Chicago IL construction permits

🔍 Upcoming Construction Projects

1. New Commercial Complex - Downtown Chicago
   📍 Location: Downtown Chicago | 📅 Start Date: March 2024 | 🏢 Type: Mixed Development
   Description: Mixed-use commercial and residential development
   Source: Local Planning Department

2. Office Building Construction - Chicago
   📍 Location: Chicago, IL | 📅 Start Date: April 2024 | 🏢 Type: Commercial  
   Description: 5-story office building with retail space
   Source: Building Permits

[Additional projects...]

💡 Next Steps
• Review each project for potential competition
• Contact project owners for partnership opportunities  
• Monitor progress and timeline changes
• Update your competitive analysis
```

## **How to use**

### **Setup Instructions**
1. **Import the workflow** into your n8n instance
2. **Configure Email Credentials:**
   - Set up IMAP credentials for receiving emails
   - Set up SMTP credentials for sending alerts
3. **Test the workflow** with a sample email
4. **Set up scheduling** (optional) for automated daily checks

### **Sending Alert Requests**
1. Send an email to your configured address
2. Use "Construction Alert Request" in the subject line
3. Include location details in the email body
4. Receive detailed project reports within minutes

## **Requirements**
* **n8n instance** (cloud or self-hosted)
* **Email account** with IMAP/SMTP access
* **Internet connection** for API calls to construction databases
* **Valid email addresses** for sending and receiving alerts

## **API Integration Code Examples**

### **Government Data API Integration**
```javascript
// Example API call to USA.gov jobs API
const searchGovernmentProjects = async (location) =&gt; {
  const response = await fetch('https://api.usa.gov/jobs/search.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      keyword: 'construction permit',
      location_name: location,
      size: 20
    }
  });
  
  return await response.json();
};
```

### **Construction Industry API Integration**
```javascript
// Example API call to construction databases
const searchConstructionProjects = async (area) =&gt; {
  const response = await fetch('https://www.construction.com/api/search', {
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json'
    },
    params: {
      q: `${area} construction projects`,
      type: 'projects',
      limit: 15
    }
  });
  
  return await response.json();
};
```

### **Email Processing Function**
```javascript
// Extract location from email content
const extractLocationInfo = (emailBody) =&gt; {
  const lines = emailBody.split('\n');
  let area = '', city = '', state = '', zipcode = '';
  
  for (const line of lines) {
    if (line.toLowerCase().includes('area:')) {
      area = line.split(':')[1]?.trim();
    }
    if (line.toLowerCase().includes('city:')) {
      city = line.split(':')[1]?.trim();
    }
    if (line.toLowerCase().includes('state:')) {
      state = line.split(':')[1]?.trim();
    }
    if (line.toLowerCase().includes('zip:')) {
      zipcode = line.split(':')[1]?.trim();
    }
  }
  
  return { area, city, state, zipcode };
};
```

## **Customizing this workflow**

### **Adding New Data Sources**
1. **Add HTTP Request nodes** for additional APIs
2. **Update the Process Construction Data node** to handle new data formats
3. **Modify the search parameters** based on API requirements

### **Enhanced Email Parsing**
```javascript
// Custom email parsing for different formats
const parseEmailContent = (emailBody) =&gt; {
  // Add regex patterns for different email formats
  const patterns = {
    address: /(\d+\s+[\w\s]+,\s*[\w\s]+,\s*[A-Z]{2}\s*\d{5})/,
    coordinates: /(\d+\.\d+),\s*(-?\d+\.\d+)/,
    zipcode: /\b\d{5}(-\d{4})?\b/
  };
  
  // Extract using multiple patterns
  // Implementation details...
};
```

### **Custom Alert Conditions**
1. **Modify the Check If Projects Found node** to filter by:
   - Project value/budget
   - Project type (residential, commercial, etc.)
   - Distance from your location
   - Timeline criteria

### **Advanced Scheduling**
```javascript
// Set up multiple schedule triggers for different areas
const scheduleConfigs = [
  { area: "Downtown", cron: "0 9 * * 1-5" },    // Weekdays 9 AM
  { area: "Suburbs", cron: "0 14 * * 1,3,5" },  // Mon, Wed, Fri 2 PM
  { area: "Industrial", cron: "0 8 * * 1" }     // Monday 8 AM
];
```

### **Integration with CRM Systems**
Add HTTP Request nodes to automatically create leads in your CRM when high-value projects are found:

```javascript
// Example CRM integration
const createCRMLead = async (project) =&gt; {
  await fetch('https://your-crm.com/api/leads', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_TOKEN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: project.title,
      location: project.location,
      value: project.estimatedValue,
      source: 'Construction Alert System'
    })
  });
};
```

## **Troubleshooting**
* **No emails received**: Check IMAP credentials and email filters
* **Empty results**: Verify API endpoints and add fallback data sources  
* **Failed email delivery**: Confirm SMTP settings and recipient addresses
* **API rate limits**: Implement delays between requests and error handling

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
