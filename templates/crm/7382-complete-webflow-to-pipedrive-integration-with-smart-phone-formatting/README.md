# 🤝 Complete Webflow to Pipedrive integration with smart phone formatting

> ⚡ **206 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Advanced Form Submission to CRM Automation with International Phone Support
## Who's it for
Sales teams, marketing professionals, and business owners who need sophisticated lead management with international phone number support, automated CRM record creation, intelligent duplicate detection, and multi-channel team notifications.
## What it does
This advanced workflow automatically processes form submissions from your website and creates a complete, intelligent CRM structure in Pipedrive. It transforms raw form data into organized sales records including companies, contacts, deals, and relevant notes while handling international phone number formatting and providing real-time team notifications via Discord and WhatsApp messaging.
## How it works
The workflow follows an intelligent automation process with four distinct scenarios:
Form Trigger: Captures form submissions from your website (Webflow in this example)
Advanced Phone Processing: Automatically detects and formats international phone numbers with proper country codes for 20+ countries including France, Belgium, Switzerland, Germany, Spain, Italy, Morocco, Algeria, Tunisia, and more
Intelligent CRM Logic: Uses a sophisticated 4-scenario approach:

Scenario A: Existing Organization + Existing Person - Links records and creates new deal
Scenario B: Existing Organization + New Person - Creates person, links to organization, creates deal
Scenario C: New Organization + Existing Person - Creates organization, links person, creates deal
Scenario D: New Organization + New Person - Creates complete new structure from scratch

Enhanced Data Management: Adds lead source tracking, custom properties, and conditional data enhancement
Multi-Channel Communication: Sends formatted alerts to Discord and personalized WhatsApp messages to leads
## Requirements

Webflow account (or any platform that supports webhook triggers)
Pipedrive CRM account with proper API credentials
Team notification service: Discord, Slack, Microsoft Teams, email service, or any webhook-compatible notification tool
WhatsApp Business API access for lead messaging
International phone number handling capability

## How to set up
### Step 1: Configure your form trigger
Default setup: The template uses Webflow Form Trigger with site ID configuration
Alternative platforms: Replace with webhook trigger for other platforms (WordPress, custom websites, etc.)
Webhook configuration: Set up your website's form to send data to the n8n webhook URL
Form fields: Ensure your form captures the necessary fields:

Prénom (First Name)
Nom (Last Name)
Entreprise (Company)
Mail professionnel (Professional Email)
Téléphone pro (Professional Phone)
URL du site internet (Website URL)
Message

### Step 2: Configure API credentials
Set up the following credentials in n8n:
Webflow OAuth2: For form trigger authentication (or webhook authentication for other platforms)
Pipedrive API: For CRM record creation and management - ensure proper permissions for organizations, persons, deals, and notes
Discord Bot API: For team notifications with guild and channel access
WhatsApp Business API: For automated lead messaging with phone number ID configuration
### Step 3: Customize international phone formatting
The "international dialing code" node automatically handles:
European countries: France (+33), Belgium (+32), Switzerland (+41), Germany (+49), Spain (+34), Italy (+39), Portugal (+351)
North African countries: Morocco (+212), Algeria (+213), Tunisia (+216)
Global coverage: US/Canada (+1), UK (+44), and many Asian countries
Fallback handling: Defaults to French formatting for unrecognized patterns
Error management: Uses +330000000000 as fallback for invalid numbers
### Step 4: Configure Pipedrive settings
Adjust Pipedrive-specific settings in deal creation nodes:
Deal pipeline stage: Currently set to default stage (customize for your pipeline)
Deal ownership: Configure owner_id for appropriate team member assignment
Currency settings: Adjust currency code for your business region
Custom properties: Lead source automatically set to "Growth AI" (customize as needed)
### Step 5: Set up team notifications
Configure your preferred notification system:
Discord (default): Set guild ID: 1377297267014504520, channel ID: 1380469490139009106
Alternative platforms: Replace Discord node with Slack, Teams, email, or custom webhook
Message formatting: Customize notification content and structure
Multi-channel setup: Add multiple notification nodes for different channels
### Step 6: Configure WhatsApp messaging
Set up automated lead engagement:
Phone number ID: Configure WhatsApp Business API phone number (currently: 752773604591912)
Message personalization: Uses prospect's first name and customizable content
International compatibility: Works with formatted international phone numbers
Message templates: Customize welcome messages and follow-up content
## How to customize the workflow
### Form platform integration
Webflow: Use the existing Webflow trigger with site ID configuration
WordPress: Replace with webhook trigger and configure Contact Form 7, Gravity Forms, or WPForms
Custom websites: Set up webhook trigger with your form's POST endpoint
Landing page builders: Configure webhook integration (Unbounce, Leadpages, Instapage, etc.)
Form field mapping: Adjust the "Data refinement" node for your specific form structure
### Advanced CRM customization
Pipeline management: Configure different stage IDs for various lead sources
Lead scoring: Add conditional logic for deal values based on form responses
Custom fields: Map additional form fields to Pipedrive custom properties
Multiple pipelines: Route different form types to different sales pipelines
Ownership rules: Implement round-robin or territory-based assignment logic
### International phone number expansion
The phone formatting system supports extensive customization:
Additional countries: Add new country patterns to the JavaScript code
Regional preferences: Modify default formatting rules for specific regions
Validation rules: Implement stricter phone number validation
Carrier detection: Add mobile vs. landline detection logic
### Notification enhancements
Multi-platform notifications: Send to Discord, Slack, Teams, and email simultaneously
Conditional notifications: Route different lead types to different channels
Rich formatting: Add embeds, attachments, or rich text formatting
Escalation rules: Implement priority-based notification routing
Integration expansion: Connect to internal tools or third-party notification services
### Data validation and enrichment
Email validation: Add email verification steps before CRM creation
Company enrichment: Integrate with data enrichment services (Clearbit, ZoomInfo, Apollo)
Duplicate detection: Enhanced logic to check for existing contacts across multiple fields
Lead qualification: Implement sophisticated scoring based on form responses and external data
Data cleaning: Add standardization for company names, job titles, and other fields
## Advanced conditional logic features
### Intelligent scenario routing
The workflow uses sophisticated logic to determine the correct processing path:
Organization detection: Exact matching search for existing companies
Person identification: Full name matching within relevant organization contexts
Relationship preservation: Maintains proper links between organizations, persons, and deals
Data consistency: Ensures no duplicate records while preserving historical relationships
### Smart data handling
Enhanced conditional processing includes:
Phone number intelligence: Automatic international formatting with country detection
Message processing: Creates deal notes only when message field contains meaningful content
URL handling: Adds website URLs as separate notes when provided
Empty field management: Gracefully handles incomplete form submissions
Custom property management: Adds lead source tracking and other metadata
### Error handling and resilience
Graceful failures: Workflow continues even if individual steps fail
Data validation: Comprehensive checks for required fields before processing
Notification reliability: Ensures team is notified even if some CRM operations fail
Logging capabilities: Detailed error tracking for troubleshooting
Rollback mechanisms: Ability to handle partial failures without data corruption
## Results interpretation
### CRM structure created
For each form submission, the workflow creates:
Organization record: Complete company information with proper formatting
Person record: Contact information linked to correct organization with phone formatting
Deal record: Sales opportunity with appropriate stage, owner, and metadata
Enhanced notes: Separate notes for messages and website URLs when provided
Proper relationships: Full linking between organization, person, and deal records
Custom tracking: Lead source attribution and other custom properties
### Team notifications and engagement
Comprehensive communication includes:
Discord notifications: Formatted team alerts with complete prospect information
WhatsApp engagement: Personalized messages to leads with international number support
Immediate alerts: Real-time notifications for instant follow-up capability
Formatted display: Clean, organized presentation of all prospect data
Multi-channel flexibility: Easy adaptation to any notification platform
## Advanced use cases
### International lead generation
Global forms: Handle submissions from multiple countries with proper phone formatting
Multi-language support: Process forms in different languages with consistent data structure
Regional routing: Route leads to appropriate regional sales teams based on phone country codes
Currency handling: Automatic currency assignment based on detected country
### Sophisticated lead management
Lead scoring: Advanced qualification based on company size, industry, and message content
Progressive profiling: Build complete prospect profiles over multiple interactions
Engagement tracking: Monitor response rates and optimize messaging
Attribution analysis: Track lead sources and optimize marketing spend
### Enterprise integration
Custom CRM fields: Map to complex Pipedrive custom field structures
Multiple pipelines: Route leads to different sales processes based on criteria
Team assignment: Intelligent routing based on territory, expertise, or workload
Compliance handling: Ensure data processing meets regional privacy requirements
## Workflow architecture details
### Processing phases

Form capture and data extraction: Webflow trigger processes submitted data
International phone formatting: Advanced JavaScript processing for global numbers
Organization discovery: Intelligent search and creation logic
Person management: Sophisticated duplicate detection and relationship management
Deal creation: Context-aware opportunity generation with proper associations
Enhanced communication: Multi-channel notifications and lead engagement

### Performance characteristics
Processing time: Typically completes within 10-15 seconds for complex scenarios
Reliability: Built-in error handling ensures high success rates
Scalability: Handles high-volume form submissions without performance degradation
Flexibility: Easy customization for different business requirements and CRM configurations
## Limitations and considerations
Platform dependencies: Currently optimized for Webflow and Pipedrive but adaptable
Phone number coverage: Supports 20+ countries but may need expansion for specific regions
CRM limitations: Requires proper Pipedrive API permissions and rate limit considerations
Form structure: Field mapping requires customization for different form designs
Language considerations: Currently configured for French field names but easily adaptable
Notification dependencies: Requires proper configuration of Discord and WhatsApp APIs for full functionality

## 🔗 Nodes Used

Pipedrive, Webflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
