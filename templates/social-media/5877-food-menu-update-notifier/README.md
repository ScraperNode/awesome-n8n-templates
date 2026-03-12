# 📱 Food menu update notifier

> ⚡ **1,050 views** · 📱 [Social Media & Email Marketing](../)

## Description

An intelligent food menu update notification system that automatically detects changes in your restaurant's special menu and sends personalized notifications to customers via multiple channels - WhatsApp, Email, and SMS. This workflow ensures your customers are always informed about new dishes, price changes, and menu availability in real-time.

## What's the Goal?
- Automatically monitor special menu updates from Google Sheets
- Detect menu changes and generate alert messages using AI
- Send multi-channel notifications (WhatsApp, Email, SMS) based on customer preferences
- Maintain comprehensive notification logs for tracking and analytics
- Provide seamless customer communication for menu updates
- Enable restaurant owners to keep customers engaged with latest offerings

By the end, you'll have a fully automated menu notification system that keeps your customers informed and engaged with your latest culinary offerings.

## Why Does It Matter?
Manual menu update communication is time-consuming and often missed by customers. Here's why this workflow is essential for restaurants:

- **Real-Time Updates**: Customers receive instant notifications about menu changes
- **Multi-Channel Reach**: WhatsApp, Email, and SMS ensure maximum customer reach
- **Personalized Experience**: Customers receive notifications via their preferred channels
- **Increased Sales**: Immediate awareness of new items drives orders
- **Customer Retention**: Regular updates keep customers engaged and coming back
- **Operational Efficiency**: Eliminates manual notification tasks for staff
- **Data-Driven Insights**: Comprehensive logging for marketing analytics

Think of it as your restaurant's digital menu announcer that never misses an update.

## How It Works

Here's the complete workflow process:

### Step 1: Menu Monitoring
- **Node**: Daily Menu Update Scheduler
- **Function**: Triggers the workflow on a scheduled basis
- **Frequency**: Configurable (hourly, daily, or real-time)

### Step 2: Data Retrieval
- **Node**: Fetch Special Menu Data
- **Function**: Pulls current menu data from Google Sheets (Sheet 1)
- **Data**: Retrieves item details, prices, descriptions, and availability

### Step 3: Change Detection
- **Node**: Detect Menu Changes
- **Function**: Compares current data with previous state
- **Logic**: Identifies new items, price changes, or availability updates

### Step 4: AI Content Generation
- **Node**: Generate Menu Alert Message
- **Function**: Creates engaging notification content using AI
- **Output**: Formatted message with new items, descriptions, and prices

### Step 5: Customer Data Processing
- **Node**: Fetch Customer Contact List
- **Function**: Retrieves customer preferences from Google Sheets (Sheet 2)
- **Filter**: Segments customers by notification preferences

### Step 6: Multi-Channel Delivery
The workflow splits into three parallel notification channels:

#### WhatsApp Branch
- **Node**: Filter WhatsApp Users
- **Function**: Identifies customers with WhatsApp notifications enabled
- **Node**: Send WhatsApp Notification
- **Function**: Delivers menu updates via WhatsApp
- **Node**: Log WhatsApp Status
- **Function**: Records delivery status in Sheet 3

#### Email Branch
- **Node**: Filter Email Users
- **Function**: Identifies customers with email notifications enabled
- **Node**: Send Menu Email
- **Function**: Delivers formatted email notifications
- **Node**: Log Email Status
- **Function**: Records delivery status in Sheet 3

#### SMS Branch
- **Node**: Filter SMS Users
- **Function**: Identifies customers with SMS notifications enabled
- **Node**: Send Twilio SMS Alert
- **Function**: Delivers text message notifications via Twilio
- **Node**: Log SMS Status
- **Function**: Records delivery status in Sheet 3

### Step 7: Comprehensive Logging
All notification activities are logged in Sheet 3 for tracking and analytics.

## Google Sheets Structure

### Sheet 1: Special Menu
| Column | Description | Example |
|--------|-------------|---------|
| Item ID | Unique identifier for menu item | "ITEM001" |
| Item Name | Name of the dish | "Truffle Risotto" |
| Price | Item price | "$28.99" |
| Description | Detailed item description | "Creamy arborio rice with black truffle, parmesan, and wild mushrooms" |
| Nutritions | Nutritional information | "Calories: 450, Protein: 15g" |
| Category | Menu category | "Main Course" |
| Available | Availability status | "Yes" / "No" |

### Sheet 2: Customer Database
| Column | Description | Example |
|--------|-------------|---------|
| Customer Name | Customer's full name | "ABC" |
| Email | Customer's email address | "abc@gmail.com" |
| Phone Number | Customer's phone number | "91999999999" |
| WhatsApp Number | Customer's WhatsApp number | "91999999999" |
| Email Notifications | Email preference | "Yes" / "No" |
| SMS Notifications | SMS preference | "Yes" / "No" |
| WhatsApp Notifications | WhatsApp preference | "Yes" / "No" |

### Sheet 3: Notification Logs
| Column | Description | Example |
|--------|-------------|---------|
| Timestamp | Notification send time | "2025-07-09T12:51:09.587Z" |
| Customer Name | Recipient name | "ABC" |
| Notification Type | Channel used | "Email" / "SMS" / "WhatsApp" |
| Status | Delivery status | "Sent" / "Failed" / "Pending" |
| Message | Content sent | "SPECIAL MENU UPDATE..." |

## How to Use the Workflow

### Prerequisites
1. **Google Sheets Setup**: Create three sheets with the required structure
2. **n8n Account**: Access to n8n workflow platform
3. **WhatsApp Business API**: WhatsApp Business account with API access
4. **Email Service**: Gmail or SMTP service for email notifications
5. **Twilio Account**: Twilio account for SMS functionality
6. **AI Model Access**: OpenAI or similar AI service for content generation

### Importing the Workflow in n8n

#### Step 1: Obtain the Workflow JSON
- Export the workflow from your n8n instance or obtain the JSON file
- Ensure you have the complete workflow configuration

#### Step 2: Access n8n Workflow Editor
- Log in to your n8n instance (Cloud or self-hosted)
- Navigate to the Workflows section
- Click "Add Workflow" to create a new workflow

#### Step 3: Import the Workflow
**Option A: Import from Clipboard**
1. Click the three dots (⋯) in the top-right corner
2. Select "Import from Clipboard"
3. Paste the JSON code into the text box
4. Click "Import" to load the workflow

**Option B: Import from File**
1. Click the three dots (⋯) in the top-right corner
2. Select "Import from File"
3. Choose the .json file from your computer
4. Click "Open" to import the workflow

### Configuration Setup

#### Google Sheets Integration
1. **Authentication**: Connect your Google account in n8n
2. **Sheet 1 Configuration**: Set spreadsheet ID and range for menu data
3. **Sheet 2 Configuration**: Set spreadsheet ID and range for customer data
4. **Sheet 3 Configuration**: Set spreadsheet ID and range for notification logs

#### WhatsApp Integration
1. **WhatsApp Business API**: Set up WhatsApp Business API credentials
2. **Webhook Configuration**: Configure webhook URLs for message delivery
3. **Message Templates**: Create approved message templates for menu updates

#### Email Integration
1. **Gmail/SMTP Setup**: Configure email service credentials
2. **Email Templates**: Design HTML email templates for menu notifications
3. **Sender Configuration**: Set sender name and email address

#### Twilio SMS Integration
1. **Twilio Account**: Set up Twilio Account SID and Auth Token
2. **Phone Number**: Configure Twilio phone number for SMS sending
3. **Message Templates**: Create SMS message templates

#### AI Content Generation
1. **API Configuration**: Set up OpenAI or preferred AI service credentials
2. **Prompt Customization**: Configure prompts for menu update content
3. **Content Parameters**: Set message tone, length, and style

### Workflow Execution

#### Automatic Execution
1. **Scheduled Triggers**: Set up cron expressions for regular checks
2. **Webhook Triggers**: Configure real-time triggers for immediate updates
3. **Manual Triggers**: Enable manual execution for testing

#### Monitoring and Maintenance
1. **Execution Logs**: Monitor workflow execution through n8n interface
2. **Error Handling**: Set up error notifications and retry mechanisms
3. **Performance Monitoring**: Track execution times and success rates

## Sample Notification Message

```
SPECIAL MENU UPDATE 🍽️

NEW ITEMS:
• Truffle Risotto - $28.99
  Creamy arborio rice with black truffle, parmesan, and wild mushrooms

• Chocolate Lava Cake - $18.99
  Warm chocolate cake with molten center, vanilla ice cream

Total Menu Items: 2
Updated: 7/9/2025, 12:10:50 PM

Visit our restaurant or call to place your order! 📞
```

## Best Practices

### Data Management
- Regularly validate customer contact information
- Keep menu data updated and accurate
- Maintain clean customer preference settings

### Notification Strategy
- Send notifications during optimal hours (lunch/dinner time)
- Limit frequency to avoid customer fatigue
- Personalize messages based on customer preferences

### Content Quality
- Use engaging language and emojis appropriately
- Include clear pricing and descriptions
- Add call-to-action for immediate orders

### Performance Optimization
- Batch process notifications to avoid rate limits
- Implement retry logic for failed deliveries
- Monitor API quotas and usage limits

## Troubleshooting

### Common Issues
- **Authentication Errors**: Verify API credentials and permissions
- **Rate Limiting**: Implement delays between notifications
- **Message Delivery**: Check phone number formats and email addresses
- **Sheet Access**: Ensure proper sharing permissions

### Error Handling
- Set up notification alerts for workflow failures
- Implement fallback mechanisms for service outages
- Maintain backup notification methods

## Analytics and Reporting

### Key Metrics
- **Delivery Rates**: Track successful notifications by channel
- **Customer Engagement**: Monitor response rates and feedback
- **Menu Performance**: Analyze which items generate most interest
- **Channel Effectiveness**: Compare performance across WhatsApp, Email, and SMS

### Reporting Features
- Automated daily/weekly reports
- Customer preference analytics
- Notification performance dashboards
- Revenue correlation with menu updates

## Security and Compliance

### Data Protection
- Secure storage of customer contact information
- Compliance with GDPR and local privacy laws
- Regular security audits of API access

### Rate Limiting
- Respect platform rate limits (WhatsApp, Twilio, Email)
- Implement queuing systems for high-volume notifications
- Monitor and adjust sending frequencies

## Conclusion

The Food Menu Update Notifier transforms restaurant communication from reactive to proactive, ensuring customers are always informed about your latest offerings. By leveraging multiple communication channels and AI-generated content, this workflow creates a seamless bridge between your kitchen innovations and customer awareness.

This system not only improves customer engagement but also drives immediate sales through timely notifications about new menu items, special offers, and seasonal dishes. The comprehensive logging and analytics capabilities provide valuable insights for menu optimization and marketing strategy refinement.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
