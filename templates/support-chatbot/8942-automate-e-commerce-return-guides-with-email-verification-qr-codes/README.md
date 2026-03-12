# 💬 Automate e-commerce return guides with email verification & QR codes

> ⚡ **269 views** · 💬 [Support Chatbots](../)

## Description

# Verified Product Return Guide Generator

A comprehensive n8n workflow template for automating e-commerce return processes with fraud prevention and professional document generation.

## Description

### Who's It For

- **E-commerce businesses** preventing fraudulent returns
- **Customer service teams** automating return processing
- **Online retailers** needing professional documentation
- **Dropshipping stores** fighting chargeback abuse
- **SMB merchants** reducing manual workload

### How It Works

- Captures return requests via **Webhook** from forms/apps
- Validates customer emails with **VerifiEmail** to prevent fraud
- Blocks **disposable emails** and **non-existent domains**
- Generates **QR codes** for quick processing at drop-off points
- Creates **professional HTML** return guides with branding
- Converts to both **PDF** (printing) and **PNG** (email preview)
- Calculates **return deadlines** automatically (7-day default)
- Sends **automated emails** with download links to customers
- Tracks **return authorization** with unique order IDs
- Provides **customer instructions** and contact information
- Offers: **fraud prevention**, **dual formats**, **QR integration**, **automation**

### How to Set Up

1. Connect your return form to **Webhook** (POST to `https://[your-n8n-url]/webhook/return-guide`)
2. Sign up for **VerifiEmail API** (100 free verifications/month)
3. Get **HtmlCssToPdf** and **HtmlCssToImage** API keys
4. Configure **Gmail OAuth2** via Google Cloud Console
5. Set up all credentials in n8n: **VerifiEmail**, **Gmail**, **PDF/Image APIs**
6. Customize HTML template colors and branding in **Code** node
7. Test with sample data: `{"customer_name": "Test User", "customer_email": "test@gmail.com", "order_id": "ORD123"}`

## Requirements

- **n8n instance** (cloud or self-hosted)
- **API credentials**: VerifiEmail (~$0.01/check), HtmlCssToPdf, HtmlCssToImage, Gmail OAuth2
- **Return form** or e-commerce integration to send webhook data
- **Email delivery** capability for customer notifications

## Core Features

- **Email Fraud Detection**: Blocks fake and disposable emails
- **Dual Format Output**: PDF for printing, PNG for previews
- **QR Code Generation**: Quick processing at shipping locations
- **Professional Templates**: Branded HTML with modern styling
- **Automated Deadlines**: 7-day return window calculation
- **Customer Communication**: Plain text emails with download links

## Use Cases & Applications

- **E-commerce Returns**: Automate return authorization process
- **Customer Service**: Reduce manual return guide creation
- **Fraud Prevention**: Stop fake return attempts before processing
- **Brand Consistency**: Professional documentation across all returns
- **Operational Efficiency**: Handle high return volumes automatically

## Key Benefits

- **Fraud Reduction**: Email validation prevents 60%+ fake returns
- **Time Savings**: Eliminates manual return guide creation
- **Professional Image**: Branded documents improve customer experience
- **Cost Control**: Prevents processing costs for invalid returns
- **Scalability**: Handles unlimited return requests automatically

## Customization Options

- Adjust **return deadline** in Set node (default 7 days)
- Modify **HTML styling** and colors in Code node
- Change **QR code size** and format in Set node expressions
- Edit **email templates** and company branding
- Add **tracking integration** with shipping APIs
- Customize **validation rules** for different email types

## Technical Specifications

- **Execution Time**: 15-30 seconds per return request
- **Success Rate**: 95%+ for valid email addresses
- **File Sizes**: PDF ~300KB, PNG ~120KB average
- **Retention**: Files hosted 30 days on service providers
- **Rate Limits**: Respects all API provider limitations

## Cost Breakdown

- **VerifiEmail**: $0.01 per email verification after free tier
- **PDF Generation**: $0.001 per document
- **Image Generation**: $0.001 per image
- **Gmail**: Free (subject to Google's sending limits)
- **Estimated**: $0.012 per return request after free tiers

## Integration Examples

- **Shopify**: Webhook from return app to n8n endpoint
- **WooCommerce**: PHP form submission to webhook URL
- **Custom Forms**: Direct POST request with customer data
- **Customer Portals**: Integration via REST API calls

## Sample Webhook Data

```json
{
  "customer_name": "Jane Doe",
  "customer_email": "test.user@gmail.com",
  "order_id": "ORD123456",
  "return_reason": "Wrong size",
  "product_name": "Blue Cotton T-Shirt",
  "purchase_date": "2025-01-15"
}
```

## Installation

1. Import the workflow JSON file into your n8n instance
2. Set up required credentials (see setup instructions above)
3. Activate the workflow
4. Test with sample data to ensure proper configuration

## Important Disclaimers

- **Email validation** accuracy depends on third-party service
- **Test thoroughly** with your specific use case and volume
- **Monitor API quotas** to avoid service interruptions
- **Backup processes** recommended for critical return periods
- **Compliance**: Ensure adherence to your return policy terms

## Support

For issues with this template:
1. Check n8n execution logs for detailed error messages
2. Verify all API credentials are properly configured
3. Test individual nodes to isolate problems
4. Review the n8n community forums for similar issues

## License

This template is provided as-is for educational and commercial use. Users are responsible for ensuring compliance with all applicable laws and service provider terms of use.

## 🔗 Nodes Used

Webhook, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
