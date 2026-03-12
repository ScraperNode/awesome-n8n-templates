# 📱 Generate personalized promo cards with email verification, Gmail & Google Sheets

> ⚡ **51 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Personalized Promo Code Cards for Verified Users

## Overview
This workflow automatically generates beautiful, personalized promotional cards with QR codes and sends them via email to verified users. Perfect for e-commerce stores, marketing campaigns, and customer engagement initiatives.

## Key Features
- **Email Verification**: Validates email addresses using Verifi Email API to prevent fraud and ensure deliverability
- **Dynamic Promo Cards**: Generates stunning, personalized promotional cards with custom discount codes and QR codes
- **Automated Email Delivery**: Sends professionally designed HTML emails with embedded promo card images
- **Real-time Logging**: Tracks all promo distributions in Google Sheets for monitoring and analytics
- **Error Handling**: Includes error path for invalid emails with admin notifications
- **Fully Customizable**: Easy to customize card design, email template, and discount values

## Workflow Process

1. **Webhook Trigger**: Receives user data (name, email, promo_code, discount_value, discount_type)
2. **Data Processing**: Formats and validates incoming data with default values
3. **Email Verification**: Checks email validity using Verifi Email API
4. **Validation Gateway**: Routes valid emails to generation or invalid to error path
5. **Card Generation**: Creates personalized promo card image using HTML/CSS to Image API
6. **Email Delivery**: Sends beautifully designed email with promo card via Gmail
7. **Logging**: Records successful distributions in Google Sheets
8. **Error Notification**: Sends admin alerts for failed attempts

## What's Included

### Beautiful Promo Card Design
- Gradient purple background (#667eea to #764ba2)
- Personalized greeting with customer name
- Prominent discount display in circular badge
- QR code for easy checkout redemption
- Validity date clearly shown
- Professional, mobile-responsive design

### Professional Email Template
- Engaging gradient header matching promo card
- Highlighted promo code section with dashed border
- Three feature icons (Easy to Use, Exclusive Deal, Limited Time)
- Call-to-action button
- Embedded promo card image
- Clean footer with expiry and contact info

## Required Integrations & APIs

### 1. Verifi Email API
- **Purpose**: Email verification and validation
- **Get API Key**: https://verifi.email
- **Setup**: Sign up → Generate API key → Add to workflow credentials

### 2. HTML/CSS to Image API
- **Purpose**: Convert HTML promo card to PNG image
- **Get API Key**: https://htmlcsstoimg.com
- **Setup**: Create account → Copy API key → Configure in workflow

### 3. Gmail API (OAuth2)
- **Purpose**: Send personalized promo emails
- **Get Credentials**: https://console.cloud.google.com/
- **Setup Steps**:
  - Create new project
  - Enable Gmail API
  - Create OAuth 2.0 Client ID
  - Add credentials to n8n

### 4. Google Sheets API
- **Purpose**: Log promo distributions for tracking
- **Get Credentials**: https://console.cloud.google.com/
- **Setup Steps**:
  - Enable Google Sheets API
  - Create Service Account (or use OAuth2)
  - Share your Google Sheet with the service account email
  - Add credentials to n8n

## Quick Start Guide

### Step 1: Import the Workflow
1. Copy the workflow JSON
2. Go to n8n dashboard
3. Click "Import from File" or "Import from URL"
4. Paste the workflow

### Step 2: Configure Credentials
Set up the following credentials in n8n:
- Verifi Email API credentials
- HTML/CSS to Image API credentials
- Gmail OAuth2 credentials
- Google Sheets credentials

### Step 3: Create Google Sheet
1. Create a new Google Sheet
2. Add headers: Timestamp, Name, Email, Promo Code, Discount Value, Status
3. Share with your service account (if using service account auth)
4. Copy the Sheet ID and update in the workflow

### Step 4: Customize Settings
- **QR Code URL**: Update the checkout URL in the promo card HTML (line with YOURSTORE.com)
- **Admin Email**: Change admin notification email in the "Error Path" node
- **Validity Date**: Update expiry date in both promo card and email template
- **Colors/Design**: Customize gradient colors and styling as needed

### Step 5: Test the Workflow
1. Activate the workflow
2. Copy the webhook URL
3. Send a POST request with test data:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "promo_code": "SAVE20",
  "discount_value": "20%",
  "discount_type": "percentage"
}
```

## Input Parameters

Send a POST request to the webhook with the following JSON body:

```json
{
  "name": "Customer Name",           // Optional: defaults to "Valued Customer"
  "email": "customer@example.com",   // Required: customer email address
  "promo_code": "SUMMER25",          // Optional: defaults to "WELCOME10"
  "discount_value": "25%",           // Optional: defaults to "10%"
  "discount_type": "percentage"      // Optional: defaults to "percentage"
}
```

## Use Cases

### E-commerce
- Welcome offers for new customers
- Abandoned cart recovery with discount codes
- Birthday/anniversary promotions
- Loyalty rewards for repeat customers

### Marketing Campaigns
- Seasonal sale promotions
- Referral program rewards
- Social media contest prizes
- Email list incentives

### Customer Engagement
- Re-engagement campaigns
- VIP member benefits
- Event registration perks
- Survey completion rewards

## Customization Options

### Promo Card Design
- Modify colors and gradients in the HTML/CSS
- Change logo/emoji in the header
- Adjust card dimensions and layout
- Customize QR code size and styling
- Update validity date format

### Email Template
- Change email subject line
- Modify header text and styling
- Add company branding/logo
- Customize CTA button text and link
- Update footer information

### Business Logic
- Add conditional discounts based on user tier
- Implement time-based validity
- Add product-specific promo codes
- Include multiple discount tiers
- Add custom validation rules

## Monitoring & Analytics

The workflow automatically logs:
- Timestamp of each promo distribution
- Customer name and email
- Promo code assigned
- Discount value
- Distribution status (Success/Failed)

Use this data to:
- Track campaign performance
- Monitor redemption rates
- Identify popular discount amounts
- Analyze email delivery success
- Debug failed attempts

## Troubleshooting

### Common Issues

**Email not sending:**
- Verify Gmail API credentials are correct
- Check OAuth2 token hasn't expired
- Ensure Gmail account has proper permissions

**Image not generating:**
- Confirm HTML/CSS to Image API key is valid
- Check API usage limits haven't been exceeded
- Verify HTML syntax is correct

**Email validation failing:**
- Ensure Verifi Email API credentials are active
- Check API rate limits
- Verify email format in incoming data

**Google Sheets not updating:**
- Confirm Sheet ID is correct
- Check service account has edit permissions
- Verify sheet name matches configuration

## Pro Tips

1. **Test with Invalid Emails**: Try sending to invalid emails to verify error handling works
2. **Monitor API Limits**: Keep track of API usage to avoid hitting rate limits
3. **A/B Test Designs**: Create multiple card variations to see which performs better
4. **Personalize Further**: Add more custom fields like user tier, purchase history, etc.
5. **Schedule Reports**: Create a companion workflow to send daily/weekly promo distribution reports

## Performance Metrics

- **Processing Time**: 30-60 seconds per request
- **Success Rate**: 95%+ for valid email addresses
- **Scalability**: Handles hundreds of requests per hour
- **Error Recovery**: Automatic admin notifications for failures

## Security & Privacy

- Email validation prevents spam and fraud
- No sensitive data stored in workflow
- All API credentials encrypted in n8n
- Google Sheets logging can be disabled if needed
- Compliant with email marketing best practices

## Best Practices

1. **Email Deliverability**: Always validate emails before sending
2. **Rate Limiting**: Implement delays for bulk sends to avoid spam filters
3. **Personalization**: Use customer names and relevant discount amounts
4. **Clear CTAs**: Make it easy for customers to redeem their codes
5. **Tracking**: Monitor distribution and redemption metrics
6. **Testing**: Always test with real emails before launching campaigns

## 📄 License

This workflow template is provided as-is for use in your n8n instance. Feel free to customize and adapt to your specific needs.

---

## Why Use This Workflow?

✅ **Saves Time**: Automates entire promo distribution process  
✅ **Reduces Errors**: Email validation prevents bounce rates  
✅ **Professional Output**: Beautiful, branded promo cards  
✅ **Easy Tracking**: Real-time logging in Google Sheets  
✅ **Scalable**: Handles high volume campaigns  
✅ **Customizable**: Easy to adapt to your brand  
✅ **Cost-Effective**: Uses affordable or free tier APIs  

Perfect for marketers, e-commerce managers, and anyone looking to automate personalized promotional campaigns!

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
