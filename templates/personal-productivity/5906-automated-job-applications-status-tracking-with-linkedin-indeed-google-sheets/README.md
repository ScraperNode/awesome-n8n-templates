# ⚡ Automated job applications & status tracking with LinkedIn, Indeed & Google Sheets

> ⚡ **76,321 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Apply to jobs automatically from Google Sheets with status tracking

## Who's it for

Job seekers who want to streamline their application process, save time on repetitive tasks, and never miss following up on applications. Perfect for anyone managing multiple job applications across different platforms.

## What it does

This workflow automatically applies to jobs from a Google Sheet, tracks application status, and keeps you updated with notifications. It handles the entire application lifecycle from submission to status monitoring.

**Key features:**
- Reads job listings from Google Sheets with filtering by priority and status
- Automatically applies to jobs on LinkedIn, Indeed, and other platforms
- Updates application status in real-time
- Checks application status every 2 days and notifies you of changes
- Sends email notifications for successful applications and status updates
- Prevents duplicate applications and manages rate limiting

## How it works

The workflow runs on two main schedules:

**Daily Application Process (9 AM, weekdays):**
1. Reads your job list from Google Sheets
2. Filters for jobs marked as "Not Applied" with Medium/High priority
3. Processes each job individually to prevent rate limiting
4. Applies to jobs using platform-specific APIs (LinkedIn, Indeed, etc.)
5. Updates the sheet with application status and reference ID
6. Sends confirmation email for each application

**Status Monitoring (Every 2 days at 10 AM):**
1. Checks all jobs with "Applied" status
2. Queries job platforms for application status updates
3. Updates the sheet if status has changed
4. Sends notification emails for status changes (interviews, rejections, etc.)

## Requirements

- Google account with Google Sheets access
- Gmail account for notifications
- Resume stored online (Google Drive, Dropbox, etc.)
- API access to job platforms (LinkedIn, Indeed) - optional for basic version
- n8n instance (self-hosted or cloud)

## How to set up

### Step 1: Create Your Job Tracking Sheet

Create a Google Sheet with these exact column headers:

| Job_ID | Company | Position | Status | Applied_Date | Last_Checked | Application_ID | Notes | Job_URL | Priority |
|--------|---------|----------|--------|--------------|--------------|----------------|-------|---------|----------|
| JOB001 | Google | Software Engineer | Not Applied | | | | | https://careers.google.com/jobs/123 | High |
| JOB002 | Microsoft | Product Manager | Not Applied | | | | | https://careers.microsoft.com/jobs/456 | Medium |

**Column explanations:**
- **Job_ID**: Unique identifier (JOB001, JOB002, etc.)
- **Company**: Company name
- **Position**: Job title
- **Status**: Not Applied, Applied, Under Review, Interview Scheduled, Rejected, Offer
- **Applied_Date**: Auto-filled when application is submitted
- **Last_Checked**: Auto-updated during status checks
- **Application_ID**: Platform reference ID (auto-generated)
- **Notes**: Additional information or application notes
- **Job_URL**: Direct link to job posting
- **Priority**: High, Medium, Low (Low priority jobs are skipped)

### Step 2: Configure Google Sheets Access

1. In n8n, go to **Credentials** → **Add Credential**
2. Select **Google Sheets OAuth2 API**
3. Follow the OAuth setup process to authorize n8n
4. Test the connection with your job tracking sheet

### Step 3: Set Up Gmail Notifications

1. Add another credential for **Gmail OAuth2 API**
2. Authorize n8n to send emails from your Gmail account
3. Test by sending a sample email

### Step 4: Update Workflow Configuration

In the **"Set Configuration"** node, update these values:
- **spreadsheetId**: Your Google Sheet ID (found in the URL)
- **resumeUrl**: Direct link to your resume (make sure it's publicly accessible)
- **yourEmail**: Your email address for notifications
- **coverLetterTemplate**: Customize your cover letter template

### Step 5: Customize Application Logic

**For basic version (no API access):**
The workflow includes placeholder HTTP requests that you can replace with actual job platform integrations.

**For advanced version (with API access):**
- Replace LinkedIn/Indeed HTTP nodes with actual API calls
- Add your API credentials to n8n's credential store
- Update the platform detection logic for additional job boards

### Step 6: Test and Activate

1. Add 1-2 test jobs to your sheet with "Not Applied" status
2. Run the workflow manually to test
3. Check that the sheet gets updated and you receive notifications
4. Activate the workflow to run automatically

## How to customize the workflow

### Adding New Job Platforms

1. **Update Platform Detection**: Modify the "Check Platform Type" node to recognize new job board URLs
2. **Add New Application Node**: Create HTTP request nodes for new platforms
3. **Update Status Checking**: Add status check logic for the new platform

### Customizing Application Strategy

- **Rate Limiting**: Add "Wait" nodes between applications (recommended: 5-10 minutes)
- **Application Timing**: Modify the cron schedule to apply during optimal hours
- **Priority Filtering**: Adjust the filter conditions to match your criteria
- **Multiple Resumes**: Use conditional logic to select different resumes based on job type

### Enhanced Notifications

- **Slack Integration**: Replace Gmail nodes with Slack for team notifications
- **Discord Webhooks**: Send updates to Discord channels
- **SMS Notifications**: Use Twilio for urgent status updates
- **Dashboard Updates**: Connect to Notion, Airtable, or other productivity tools

### Advanced Features

- **AI-Powered Personalization**: Use OpenAI to generate custom cover letters
- **Job Scoring**: Implement scoring logic based on job requirements vs. your skills
- **Interview Scheduling**: Auto-schedule interviews when status changes
- **Follow-up Automation**: Send follow-up emails after specific time periods

## Important Notes

### Platform Compliance
- Always respect rate limits to avoid being blocked
- Follow each platform's Terms of Service
- Use official APIs when available instead of web scraping
- Don't spam job boards with excessive applications

### Data Privacy
- Store credentials securely using n8n's credential store
- Don't hardcode API keys or personal information in nodes
- Regularly review and clean up old application data
- Ensure your resume link is secure but accessible

### Quality Control
- Start with a small number of jobs to test the workflow
- Review application success rates and adjust strategy
- Monitor for errors and set up proper error handling
- Keep your job list updated and remove expired postings

This workflow transforms job searching from a manual, time-consuming process into an automated system that maximizes your application efficiency while maintaining quality and compliance.

## 🔗 Nodes Used

Cron, Google Sheets, HTTP Request, Gmail, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
