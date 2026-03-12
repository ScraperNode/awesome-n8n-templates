# 👥 Automate employee date tracking & reminders for HR with JavaScript

> ⚡ **477 views** · 👥 [HR & Recruitment](../)

## Description

# HR Date Management Automation - Complete Setup Guide

## 🎯 **How It Works**

This n8n workflow transforms your HR department from reactive to proactive by automatically monitoring 5 critical employee timelines and generating smart alerts before deadlines hit.

### **Core Components**

1. **Data Input** → Employee information (hire dates, contracts, certifications)
1. **Date Analysis Engine** → Calculates days until critical events
1. **Smart Categorization** → Sorts employees by urgency level
1. **Reminder Scheduler** → Creates proactive notifications
1. **Multi-Format Export** → Sends alerts to your preferred systems

### **Business Value**

- **Prevents compliance violations** ($5K-50K+ in fines)
- **Reduces HR workload** (15-20 hours/month saved)
- **Improves employee experience** (no missed reviews/renewals)
- **Provides management visibility** (dashboard reporting)

-----

## 🚀 **Quick Start Test**

### **1. Import the Workflow**

1. Download the `Javascript_Hr.json` file
1. Open n8n and click “Import from file”
1. Select the downloaded JSON file
1. Click “Import”

### **2. Test with Sample Data**

1. Click the “Execute Workflow” button
1. Review the sample output in each node
1. Check the final export data format

**What you’ll see:**

- 5 sample employees with different scenarios
- Calculated days until contract/certification expiry
- Priority levels (high/medium/low)
- Scheduled reminders with recipient emails
- Export data in multiple formats

-----

## 🔧 **Real-World Integration Setup**

### **Option 1: Google Sheets Integration (Most Popular)**

#### **Step 1: Prepare Your Employee Data**

Create a Google Sheet with these columns:

```
| Employee ID | Name | Email | Department | Hire Date | Contract End | Certification Expiry | Last Review | Probation End | Vacation Days | Status |
```

**Sample data format:**

```
| 1 | John Smith | john@company.com | IT | 2024-01-15 | 2025-12-31 | 2025-03-20 | 2024-06-15 | 2024-07-15 | 20 | active |
```

#### **Step 2: Replace Sample Data Generator**

1. Delete the “Sample Data Generator” node
1. Add “Google Sheets” node
1. Connect to your Google account
1. Configure these settings:
- **Operation**: Read
- **Document**: Your employee spreadsheet
- **Sheet**: Employee data sheet
- **Range**: A1:K100 (adjust for your data size)
- **Options**: ✅ RAW data, ✅ Header row

#### **Step 3: Map Your Data**

Add a “Set” node after Google Sheets to standardize field names:

```javascript
// Map your sheet columns to workflow format
{
  "id": "{{ $json['Employee ID'] }}",
  "name": "{{ $json['Name'] }}",
  "email": "{{ $json['Email'] }}",
  "department": "{{ $json['Department'] }}",
  "hiredOn": "{{ $json['Hire Date'] }}",
  "contractEndDate": "{{ $json['Contract End'] }}",
  "certificationExpiry": "{{ $json['Certification Expiry'] }}",
  "lastReviewDate": "{{ $json['Last Review'] }}",
  "probationEndDate": "{{ $json['Probation End'] }}",
  "vacationDays": "{{ $json['Vacation Days'] }}",
  "status": "{{ $json['Status'] }}"
}
```

### **Option 2: HRIS Integration (BambooHR Example)**

#### **Step 1: BambooHR API Setup**

1. Get your BambooHR API key from Settings &gt; API Keys
1. Note your company subdomain (e.g., `yourcompany.bamboohr.com`)

#### **Step 2: Replace Sample Data Generator**

1. Delete the “Sample Data Generator” node
1. Add “HTTP Request” node
1. Configure these settings:
- **Method**: GET
- **URL**: `https://api.bamboohr.com/api/gateway.php/[SUBDOMAIN]/v1/employees/directory`
- **Authentication**: Basic Auth
- **Username**: Your API key
- **Password**: x (leave as ‘x’)
- **Headers**: `Accept: application/json`

#### **Step 3: Transform BambooHR Data**

Add a “Code” node to transform the API response:

```javascript
// Transform BambooHR response to workflow format
const employees = [];

for (const employee of $input.all()) {
  const emp = employee.json;
  
  employees.push({
    id: emp.id,
    name: `${emp.firstName} ${emp.lastName}`,
    email: emp.workEmail,
    department: emp.department,
    hiredOn: emp.hireDate,
    contractEndDate: emp.terminationDate || "2025-12-31", // Default if not set
    certificationExpiry: emp.customCertDate || "2025-12-31",
    lastReviewDate: emp.customReviewDate || null,
    probationEndDate: emp.customProbationDate || null,
    vacationDays: emp.paidTimeOff || 20,
    status: emp.employeeStatus || "active"
  });
}

return employees.map(emp =&gt; ({ json: emp }));
```

### **Option 3: CSV File Upload**

#### **Step 1: Prepare CSV File**

Create a CSV with the same structure as the Google Sheets format.

#### **Step 2: Use CSV Parser**

1. Replace “Sample Data Generator” with “Read Binary File” node
1. Add “CSV Parser” node
1. Configure settings:
- **Include Headers**: Yes
- **Delimiter**: Comma
- **Skip Empty Lines**: Yes

-----

## 📧 **Output Integration Setup**

### **Email Notifications**

#### **Step 1: Add Email Node**

1. Add “Email” node after “Reminder Scheduler”
1. Connect to your email provider (Gmail/Outlook)

#### **Step 2: Configure Email Templates**

```javascript
// Dynamic email content based on reminder type
const reminder = $json;

const emailTemplates = {
  contract_renewal: {
    subject: `🚨 Contract Renewal Required - ${reminder.employeeName}`,
    body: `
      Hi HR Team,
      
      ${reminder.employeeName}'s contract expires on ${reminder.dueDate}.
      
      Days remaining: ${Math.ceil((new Date(reminder.dueDate) - new Date()) / (1000*60*60*24))}
      
      Please initiate renewal process immediately.
      
      Best regards,
      HR Automation System
    `
  },
  certification_renewal: {
    subject: `📜 Certification Renewal Reminder - ${reminder.employeeName}`,
    body: `
      Hi ${reminder.employeeName},
      
      Your certification expires on ${reminder.dueDate}.
      
      Please renew your certification to maintain compliance.
      
      Contact HR if you need assistance.
      
      Best regards,
      HR Team
    `
  }
};

const template = emailTemplates[reminder.type];
return {
  to: reminder.recipientEmail,
  subject: template.subject,
  body: template.body
};
```

### **Slack Integration**

#### **Step 1: Add Slack Node**

1. Add “Slack” node after “Advanced Date Filters”
1. Connect to your Slack workspace

#### **Step 2: Configure Channel Alerts**

```javascript
// Send summary to #hr-alerts channel
const summary = $json.summary;

const message = `
🏢 *Daily HR Report*

👥 Total Employees: ${summary.totalEmployees}
🆕 New Hires: ${summary.newHires}
⚠️ High Priority Actions: ${summary.highPriority}
📋 Contracts Expiring: ${summary.contractsExpiring}
🎓 Certifications Expiring: ${summary.certificationsExpiring}

Generated: ${new Date().toLocaleDateString()}
`;

return {
  channel: '#hr-alerts',
  text: message
};
```

### **Google Calendar Integration**

#### **Step 1: Add Calendar Node**

1. Add “Google Calendar” node after “Reminder Scheduler”
1. Connect to your Google account

#### **Step 2: Create Calendar Events**

```javascript
// Create calendar events for upcoming deadlines
const reminder = $json;

const eventTitles = {
  contract_renewal: `Contract Renewal - ${reminder.employeeName}`,
  certification_renewal: `Certification Renewal - ${reminder.employeeName}`,
  performance_review: `Performance Review - ${reminder.employeeName}`,
  probation_review: `Probation Review - ${reminder.employeeName}`
};

return {
  calendarId: 'hr-calendar@yourcompany.com',
  summary: eventTitles[reminder.type],
  description: reminder.message,
  start: {
    dateTime: reminder.dueDate,
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: reminder.dueDate,
    timeZone: 'America/New_York'
  },
  attendees: [
    { email: 'hr@yourcompany.com' },
    { email: reminder.recipientEmail }
  ]
};
```

-----

## 🎯 **Scheduling & Automation**

### **Daily Monitoring Setup**

#### **Step 1: Add Cron Trigger**

1. Replace “Manual Trigger” with “Cron” node
1. Set schedule: `0 9 * * 1-5` (9 AM, Monday-Friday)
1. Configure timezone to your business hours

#### **Step 2: Error Handling**

1. Add “Error Trigger” node
1. Connect to email notification for failures
1. Set up retry logic for failed integrations

### **Weekly Reports**

#### **Step 1: Create Weekly Summary**

1. Add separate “Cron” trigger for weekly reports
1. Set schedule: `0 9 * * 1` (9 AM every Monday)
1. Modify the filtering logic to show weekly trends

-----

## 🔍 **Customization Options**

### **Adjust Alert Timings**

In the “Date Analysis & Categorization” node:

```javascript
// Modify these values to change alert timing
const isContractExpiringSoon = daysUntilContractEnd &lt;= 90; // Change from 90 days
const isCertificationExpiringSoon = daysUntilCertificationExpiry &lt;= 60; // Change from 60 days
const needsReview = daysSinceLastReview &gt;= 365; // Change from 365 days
```

### **Add Custom Employee Categories**

```javascript
// Add new categories in the analysis node
const isContractor = employee.employeeType === 'contractor';
const isRemoteWorker = employee.location === 'remote';
const isHighRisk = employee.performanceRating === 'needs_improvement';
```

### **Custom Date Formats**

Modify the “Date Formatting & Export” node to add your preferred formats:

```javascript
// Add custom date format
const formatters = {
  custom: (date) =&gt; {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    };
    return date.toLocaleDateString('en-US', options);
  }
};
```

-----

## 🎚️ **Testing & Validation**

### **Step 1: Data Validation**

1. Test with 2-3 sample employees first
1. Verify all dates are parsing correctly
1. Check that calculations match manual calculations

### **Step 2: Alert Testing**

1. Create test scenarios with dates 30/60/90 days out
1. Verify emails are sent to correct recipients
1. Test Slack notifications in a test channel

### **Step 3: Performance Testing**

1. Test with your full employee dataset
1. Monitor execution time (should be under 30 seconds)
1. Check for memory usage with large datasets

-----

## 🆘 **Troubleshooting Guide**

### **Common Issues**

#### **Date Parsing Errors**

```javascript
// Add date validation in the analysis node
const parseDate = (dateStr) =&gt; {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    console.error(`Invalid date: ${dateStr}`);
    return null;
  }
  return date;
};
```

#### **Missing Data Fields**

```javascript
// Add data validation
const validateEmployee = (employee) =&gt; {
  const required = ['name', 'email', 'hiredOn'];
  const missing = required.filter(field =&gt; !employee[field]);
  
  if (missing.length &gt; 0) {
    console.error(`Missing required fields for ${employee.name}: ${missing.join(', ')}`);
    return false;
  }
  return true;
};
```

#### **API Rate Limits**

1. Add “Wait” nodes between API calls
1. Implement retry logic with exponential backoff
1. Cache API responses when possible

-----

## 🚀 **Advanced Features**

### **Multi-Company Support**

```javascript
// Add company filtering in the analysis node
const processEmployeesByCompany = (employees, companyId) =&gt; {
  return employees.filter(emp =&gt; emp.companyId === companyId);
};
```

### **Custom Notification Rules**

```javascript
// Advanced notification logic
const shouldNotify = (employee, eventType) =&gt; {
  const rules = {
    contract_renewal: employee.department !== 'intern',
    certification_renewal: employee.role === 'certified_professional',
    performance_review: employee.status === 'active'
  };
  
  return rules[eventType] || false;
};
```

### **Integration with Time Tracking**

```javascript
// Connect to time tracking APIs
const calculateWorkingDays = (startDate, endDate) =&gt; {
  // Implementation for working days calculation
  // Excluding weekends and holidays
};
```

-----



*This workflow transforms your HR department from reactive to proactive, preventing costly compliance issues while improving employee experience. The modular design allows you to start simple and add complexity as needed.*

## 🔗 Nodes Used

Google Sheets, Slack, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
