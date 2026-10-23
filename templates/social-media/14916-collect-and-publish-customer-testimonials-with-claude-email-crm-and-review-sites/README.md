# 📱 Collect and publish customer testimonials with Claude, email, CRM and review sites

> ⚡ **177 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow automatically collects, processes, and publishes customer testimonials and reviews after project completion or purchase. It uses AI to generate polished testimonials from raw feedback and distributes them across your marketing channels.

### How it works

1. **Trigger** - Detects project completion, purchase, or manual trigger
2. **Customer Lookup** - Fetches customer details from CRM/database
3. **Smart Timing Check** - Determines optimal follow-up timing based on purchase/completion date
4. **Send Feedback Request** - Sends personalized email/SMS requesting review
5. **Track Form Submissions** - Monitors feedback form responses
6. **Sentiment Analysis** - AI analyzes feedback sentiment and quality
7. **Generate Polished Testimonial** - Claude AI converts raw feedback into professional testimonials
8. **Quality Filter** - Filters testimonials based on rating and sentiment
9. **Format for Channels** - Prepares testimonials for different platforms
10. **Publish to Website** - Auto-posts to WordPress/Webflow/custom CMS
11. **Post to Social Proof Tools** - Sends to Trustpilot, Google Reviews, testimonial widgets
12. **Update CRM** - Logs testimonial status in customer records
13. **Send Thank You** - Automated appreciation message to customer
14. **Analytics Dashboard** - Tracks collection rates and testimonial performance

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** - Claude AI for testimonial generation
   - **CRM Integration** - HubSpot/Salesforce/Airtable for customer data
   - **Email Service** - SendGrid/Mailgun for follow-up emails
   - **SMS Provider** - Twilio for SMS reminders
   - **Website CMS** - WordPress/Webflow API for publishing
   - **Social Proof Tools** - Trustpilot, Google My Business, Yotpo
   - **Form Builder** - Typeform/Google Forms for feedback collection
3. Set your timing rules (e.g., 7 days after purchase)
4. Configure AI testimonial generation prompts
5. Set quality thresholds (minimum 4-star rating)
6. Map testimonial fields to your website/tools
7. Activate the workflow

### Sample Trigger Payload
```json
{
  "customerId": "CUST-12345",
  "customerEmail": "john@example.com",
  "customerName": "John Smith",
  "projectType": "Website Development",
  "completionDate": "2024-04-01",
  "projectValue": 5000,
  "followUpDelay": 7,
  "preferredChannel": "email"
}
```

### AI Testimonial Generation Features
- Converts casual feedback into professional testimonials
- Maintains authenticity while improving clarity
- Generates multiple versions for different platforms
- Extracts key benefits and outcomes mentioned
- Creates compelling headlines from feedback
- Suggests best quotes for marketing materials

### Publishing Channels
- Website testimonial sections (auto-inject HTML)
- Google My Business reviews
- Trustpilot/G2/Capterra
- Social media testimonial posts
- Email signature testimonials
- Case study content
- Landing page social proof widgets

### Smart Features
- Multi-touch follow-up sequences (email → SMS → reminder)
- Optimal timing based on customer journey stage
- Personalized feedback requests with project context
- Automatic language detection and translation
- Video testimonial collection via integrated forms
- Screenshot/photo attachment handling
- Auto-detection of negative feedback for internal review
- A/B testing of follow-up messaging
- Response rate tracking and optimization

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
