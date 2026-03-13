# 🎣 AI-Powered Contact Intelligence & Enrichment with OpenAI/Anthropic and Supabase

> ⚡ **58 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# AI Contact Enrichment

## 📋 Template Description

### Overview
Automatically enhance and enrich contact data using AI to fill in missing information, generate insights, and create detailed buyer personas. Supports multiple AI providers (OpenAI, Anthropic, etc.) with automatic logging to Supabase.

### Description
This workflow transforms incomplete contact records into rich, actionable profiles. By leveraging AI, it can infer job roles, company information, likely pain points, communication preferences, and buying motivations from minimal input data. Perfect for sales and marketing teams looking to improve data quality and personalize outreach.

**Key Benefits:**
- **Smart Data Completion**: Fill in missing contact fields using AI inference
- **Buyer Persona Generation**: Create detailed profiles from basic information
- **Universal AI Support**: Works with OpenAI, Anthropic Claude, or custom providers
- **CRM Enhancement**: Automatically enrich contacts as they enter your system
- **Lead Qualification**: Assess lead quality and fit based on enriched data
- **Personalization Engine**: Generate insights for tailored outreach
- **Data Quality**: Maintain clean, complete contact records

**Use Cases:**
- Sales prospecting and lead enrichment
- Marketing persona development
- CRM data cleansing and completion
- Account-based marketing (ABM) research
- Lead scoring and qualification
- Personalized email campaign preparation
- Contact segmentation and targeting

---

## ⚙️ Setup Instructions

### Prerequisites
1. **n8n instance** (cloud or self-hosted)
2. **AI Provider account** (OpenAI, Anthropic, or custom)
3. **Supabase account** with database access

### Step 1: Configure Environment Variables
Add these to your n8n environment settings:

```bash
AI_PROVIDER=openai              # or 'anthropic', 'custom'
AI_API_KEY=your_api_key_here
AI_MODEL=gpt-3.5-turbo         # or 'gpt-4', 'claude-3-sonnet-20240229'
AI_ENDPOINT=                    # Only for custom providers
```

**Recommended Models:**
- **Cost-effective**: `gpt-3.5-turbo` (fast, affordable, good for basic enrichment)
- **High-quality**: `gpt-4` or `claude-3-sonnet-20240229` (better inference, deeper insights)
- **Premium**: `claude-3-opus-20240229` (best for complex persona generation)

**How to set environment variables:**
- **n8n Cloud**: Go to Settings → Environment Variables
- **Self-hosted**: Add to your `.env` file or docker-compose configuration

### Step 2: Set Up Supabase Database
Create the logging table in your Supabase database:

```sql
CREATE TABLE workflow_logs (
  id BIGSERIAL PRIMARY KEY,
  workflow_name TEXT NOT NULL,
  data JSONB NOT NULL,
  ai_response JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_workflow_logs_created_at ON workflow_logs(created_at);
CREATE INDEX idx_workflow_logs_workflow_name ON workflow_logs(workflow_name);

-- Optional: Create a view for enriched contacts
CREATE VIEW enriched_contacts AS
SELECT 
  id,
  data-&gt;&gt;'email' as email,
  data-&gt;&gt;'name' as name,
  data-&gt;&gt;'company' as company,
  ai_response as enrichment_data,
  created_at
FROM workflow_logs
WHERE workflow_name = 'AI Contact Enrichment'
ORDER BY created_at DESC;
```

**To run this SQL:**
1. Open your Supabase project dashboard
2. Go to the SQL Editor
3. Paste the SQL above and click "Run"

### Step 3: Configure Supabase Credentials in n8n
1. Go to **Settings** → **Credentials**
2. Click **Add Credential** → **Supabase API**
3. Enter your Supabase URL and API key (found in Project Settings → API)
4. Name it `Supabase API`
5. Click **Save**

### Step 4: Activate the Webhook
1. Import this workflow into n8n
2. Click the **Activate** toggle in the top-right corner
3. Click on the "Webhook Trigger" node
4. Copy the **Production URL** (this is your webhook endpoint)
5. Save this URL for integration with your applications

### Step 5: Test the Workflow
Send a test POST request to the webhook:

```bash
curl -X POST https://your-n8n-instance.com/webhook/contact-enrichment \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@acmecorp.com",
    "name": "John Doe",
    "company": "Acme Corporation",
    "linkedin_url": "https://linkedin.com/in/johndoe"
  }'
```

**Successful Response:**
```json
{
  "success": true,
  "workflow": "AI Contact Enrichment",
  "timestamp": "2025-01-14T12:00:00.000Z"
}
```

---

## 📥 Expected Payload Format

The webhook accepts JSON with basic contact information:

### Minimal Input
```json
{
  "email": "string (required or name required)",
  "name": "string (required or email required)"
}
```

### Recommended Input
```json
{
  "email": "string",
  "name": "string",
  "company": "string",
  "job_title": "string",
  "linkedin_url": "string",
  "phone": "string",
  "location": "string",
  "website": "string"
}
```

### Complete Input Example
```json
{
  "email": "sarah.chen@techstartup.io",
  "name": "Sarah Chen",
  "company": "TechStartup Inc.",
  "job_title": "VP of Marketing",
  "linkedin_url": "https://linkedin.com/in/sarahchen",
  "phone": "+1-555-0123",
  "location": "San Francisco, CA",
  "website": "https://techstartup.io",
  "industry": "B2B SaaS",
  "company_size": "50-200 employees",
  "notes": "Met at SaaS conference 2024"
}
```

**Field Guidelines:**
- At minimum, provide either `email` or `name`
- More input fields = better AI enrichment quality
- Include `linkedin_url` for best results
- `company` helps with firmographic enrichment
- Any additional context improves accuracy

---

## 🔄 Workflow Flow

1. **Webhook Trigger**: Receives basic contact information from your application, form, or CRM
2. **Process Data**: Adds unique ID and timestamp to the incoming data
3. **Prepare AI Request**: Configures AI provider settings from environment variables
4. **Call AI API**: Sends contact data to AI with enrichment prompt
5. **Save to Supabase**: Archives original data and enrichment results
6. **Format Response**: Returns success confirmation

---

## 🎯 Customization Tips

### Enhance AI Prompts for Better Enrichment

Modify the "Prepare AI Request" node to customize enrichment:

```javascript
// Enhanced prompt for contact enrichment
const systemPrompt = `You are an expert sales intelligence analyst. 
Analyze the provided contact information and generate a comprehensive enrichment including:

1. INFERRED DETAILS: Fill in missing information based on available data
   - Full job title and seniority level
   - Department and reporting structure
   - Years of experience (estimated)
   - Professional background

2. COMPANY INSIGHTS: If company name provided
   - Industry and sub-industry
   - Company size and revenue (estimated)
   - Key products/services
   - Recent news or developments

3. BUYER PERSONA: Create a detailed profile
   - Primary responsibilities
   - Likely pain points and challenges
   - Key priorities and goals
   - Decision-making authority
   - Budget influence level

4. ENGAGEMENT STRATEGY: Provide outreach recommendations
   - Best communication channels
   - Optimal outreach timing
   - Key talking points
   - Personalization suggestions
   - Content interests

5. LEAD SCORE: Rate 1-10 based on:
   - Fit for product/service (specify your ICP)
   - Seniority and decision power
   - Company size and maturity
   - Engagement potential

Return as structured JSON with clear sections.`;

const userMessage = `Contact Information:\n${JSON.stringify($json.data, null, 2)}`;

const aiConfig = {
  provider: $env.AI_PROVIDER || 'openai',
  apiKey: $env.AI_API_KEY,
  model: $env.AI_MODEL || 'gpt-3.5-turbo',
  endpoint: $env.AI_ENDPOINT,
  messages: [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userMessage }
  ]
};

return { json: { aiConfig, data: $json } };
```

### Add External Data Sources

Enhance enrichment with third-party APIs:

**After "Process Data" node, add:**

1. **Clearbit/Hunter.io Node**: Get verified company data
2. **LinkedIn API**: Pull professional information
3. **Company Database**: Query internal customer data
4. **Web Scraping**: Extract data from company websites

**Then merge all data before AI enrichment for best results**

### Connect to Your CRM

Auto-update contacts after enrichment:

**Salesforce Integration:**
```javascript
// Add after "Call AI API" node
// Update Salesforce contact with enriched data
const enrichedData = JSON.parse($json.ai_response);
return {
  json: {
    contactId: $json.data.salesforce_id,
    updates: {
      Description: enrichedData.buyer_persona,
      Custom_Score__c: enrichedData.lead_score,
      Pain_Points__c: enrichedData.pain_points
    }
  }
};
```

**HubSpot Integration:**
- Add **HubSpot** node to update contact properties
- Map enriched fields to custom HubSpot properties

**Pipedrive Integration:**
- Use **Pipedrive** node to update person records
- Add custom fields for AI insights

### Implement Lead Scoring

Add scoring logic after enrichment:

```javascript
// Calculate lead score based on enrichment
const enrichment = JSON.parse($json.ai_response);

let score = 0;

// Job title scoring
if (enrichment.seniority === 'C-Level') score += 30;
else if (enrichment.seniority === 'VP/Director') score += 20;
else if (enrichment.seniority === 'Manager') score += 10;

// Company size scoring
if (enrichment.company_size === 'Enterprise') score += 25;
else if (enrichment.company_size === 'Mid-Market') score += 15;

// Decision authority scoring
if (enrichment.decision_authority === 'High') score += 25;
else if (enrichment.decision_authority === 'Medium') score += 15;

// Budget influence
if (enrichment.budget_influence === 'Direct') score += 20;

return { json: { ...enrichment, lead_score: score } };
```

### Add Compliance Checks

Insert before AI processing:

```javascript
// Check for opt-out or compliance flags
const email = $json.email.toLowerCase();

// Check against suppression list
const suppressedDomains = ['competitor.com', 'spam.com'];
const domain = email.split('@')[1];

if (suppressedDomains.includes(domain)) {
  throw new Error('Contact on suppression list');
}

// Verify email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  throw new Error('Invalid email format');
}

return { json: $json };
```

### Batch Enrichment

Process multiple contacts:

1. Add **Spreadsheet File** trigger instead of webhook
2. Add **Split In Batches** node (process 10-20 at a time)
3. Run enrichment for each contact
4. Combine results and export to CSV

---

## 🛠️ Troubleshooting

### Common Issues

**Issue**: "Enrichment is too generic"
- **Solution**: Provide more input data (company, job title, LinkedIn)
- Use GPT-4 or Claude models for better inference
- Enhance the system prompt with specific instructions

**Issue**: "AI_API_KEY is undefined"
- **Solution**: Ensure environment variables are set correctly
- Verify variable names match exactly (case-sensitive)

**Issue**: "Enrichment contradicts actual data"
- **Solution**: AI makes inferences - always validate critical information
- Add validation step to check enriched data against known facts
- Use external APIs for verification

**Issue**: "Too slow for real-time use"
- **Solution**: Implement queue system for async processing
- Use faster models (gpt-3.5-turbo) for speed
- Process in batches during off-peak hours

**Issue**: "Supabase credentials not found"
- **Solution**: Check credential name matches exactly: "Supabase API"
- Verify Supabase URL and API key are correct

### Debugging Tips
1. Test with known contacts first to validate accuracy
2. Compare AI enrichment against actual data
3. Check execution logs for API errors
4. Start with minimal prompt, then enhance gradually
5. Use "Execute Node" to test individual steps

---

## 📊 Analyzing Enriched Data

Query and analyze your enriched contacts:

```sql
-- Get all enriched contacts
SELECT * FROM enriched_contacts
ORDER BY created_at DESC;

-- Find high-value leads (assuming scoring implemented)
SELECT 
  email,
  name,
  company,
  ai_response-&gt;&gt;'lead_score' as score
FROM enriched_contacts
WHERE (ai_response-&gt;&gt;'lead_score')::int &gt; 70
ORDER BY (ai_response-&gt;&gt;'lead_score')::int DESC;

-- Analyze enrichment by company
SELECT 
  data-&gt;&gt;'company' as company,
  COUNT(*) as contact_count,
  AVG((ai_response-&gt;&gt;'lead_score')::int) as avg_score
FROM workflow_logs
WHERE workflow_name = 'AI Contact Enrichment'
  AND ai_response-&gt;&gt;'lead_score' IS NOT NULL
GROUP BY data-&gt;&gt;'company'
ORDER BY contact_count DESC;

-- Find contacts needing follow-up
SELECT 
  email,
  name,
  ai_response-&gt;&gt;'engagement_strategy' as strategy,
  created_at
FROM enriched_contacts
WHERE created_at &gt; NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

### Export Enriched Data

```sql
-- Export to CSV
COPY (
  SELECT 
    data-&gt;&gt;'email' as email,
    data-&gt;&gt;'name' as name,
    data-&gt;&gt;'company' as company,
    ai_response-&gt;&gt;'job_title' as enriched_title,
    ai_response-&gt;&gt;'seniority' as seniority,
    ai_response-&gt;&gt;'lead_score' as score
  FROM workflow_logs
  WHERE workflow_name = 'AI Contact Enrichment'
) TO '/tmp/enriched_contacts.csv' WITH CSV HEADER;
```

---

## 📈 Integration Ideas

### Form Integration
Automatically enrich new leads from forms:
- **Typeform**: Trigger on form submission
- **Google Forms**: Use Google Sheets trigger
- **Calendly**: Enrich after meeting booking
- **Webflow Forms**: Webhook trigger from form

### CRM Integration
Real-time enrichment as contacts enter CRM:
- **Salesforce**: Trigger on new lead/contact creation
- **HubSpot**: Enrich on form submission or import
- **Pipedrive**: Auto-enrich new persons
- **Close**: Webhook on lead creation

### Email Tools
Enhance cold outreach campaigns:
- **Instantly.ai**: Enrich before campaign launch
- **Lemlist**: Generate personalization variables
- **Apollo.io**: Supplement with AI insights
- **Mailshake**: Enrich prospect lists

### Marketing Automation
Power ABM and segmentation:
- **Marketo**: Enrich leads for scoring
- **Pardot**: Enhance prospect profiles
- **ActiveCampaign**: Personalization data
- **Klaviyo**: E-commerce customer insights

### Slack Integration
Team notifications and collaboration:
- Send enrichment summaries to sales channel
- Notify reps of high-value leads
- Share persona insights with marketing
- Alert on key account contacts

---

## 🔒 Security & Compliance Best Practices

### Data Protection
1. **Encrypt Sensitive Data**: Use environment variables for all credentials
2. **Access Control**: Limit webhook access with authentication
3. **Data Retention**: Set automatic deletion policies in Supabase
4. **Audit Logging**: Track all enrichment activities

### Privacy Compliance
1. **GDPR Compliance**: 
   - Get consent before enriching personal data
   - Allow contacts to request data deletion
   - Document legal basis for processing
2. **CCPA Compliance**: Honor do-not-sell requests
3. **Data Minimization**: Only enrich necessary fields
4. **Right to Access**: Allow contacts to view enriched data

### AI Ethics
1. **Bias Awareness**: Review AI inferences for bias
2. **Accuracy Validation**: Verify critical information
3. **Transparency**: Disclose use of AI enrichment
4. **Human Oversight**: Review before critical decisions

---

## 💡 Best Practices

### Input Data Quality
- **Always include email or full name** as anchor point
- **Add LinkedIn URLs** for 50% better accuracy
- **Provide company name** for firmographic insights
- **Include any known details** - more data = better results

### Prompt Engineering
- **Be specific** about your ideal customer profile (ICP)
- **Request structured output** (JSON format)
- **Define scoring criteria** that match your business
- **Ask for actionable insights** not just descriptions

### Post-Enrichment Workflow
- **Always validate** critical information before use
- **Review AI inferences** for accuracy and bias
- **Update CRM promptly** to maintain data freshness
- **Track enrichment ROI** (conversion rates, time saved)

### Performance Optimization
- **Batch process** during off-peak hours
- **Use appropriate models** (gpt-3.5 for speed, gpt-4 for quality)
- **Cache common enrichments** to reduce API costs
- **Set rate limits** to avoid API throttling

---

## 🏷️ Tags
`sales-automation`, `lead-enrichment`, `ai-automation`, `crm-integration`, `data-enrichment`, `contact-intelligence`, `buyer-personas`, `lead-scoring`, `webhook`, `supabase`, `openai`, `anthropic`, `b2b-sales`

---

## 📝 License
This workflow template is provided as-is for use with n8n.

## 🤝 Support
For questions or issues:
- n8n Community Forum: https://community.n8n.io
- n8n Documentation: https://docs.n8n.io

## 🌟 Example Output

**Input:**
```json
{
  "email": "mike.johnson@cloudtech.com",
  "name": "Mike Johnson",
  "company": "CloudTech Solutions",
  "job_title": "Director of IT"
}
```

**AI-Generated Enrichment:**
```json
{
  "full_title": "Director of Information Technology",
  "seniority": "Director",
  "department": "Technology/IT",
  "experience_years": "10-15",
  "company_insights": {
    "industry": "Cloud Computing",
    "size": "Mid-Market (100-500)",
    "revenue_estimate": "$10M-$50M"
  },
  "buyer_persona": {
    "responsibilities": ["Infrastructure management", "Vendor selection", "Security oversight"],
    "pain_points": ["Legacy system migration", "Cost optimization", "Security compliance"],
    "priorities": ["Scalability", "Cost reduction", "Team efficiency"]
  },
  "engagement_strategy": {
    "best_channels": ["Email", "LinkedIn"],
    "timing": "Tuesday-Thursday, 9-11 AM",
    "talking_points": ["ROI and cost savings", "Security features", "Ease of implementation"],
    "personalization": "Reference cloud migration challenges"
  },
  "lead_score": 75
}
```

---

## 🔄 Version History
- **v1.0.0** (2025-01-14): Initial release with universal AI provider support

## 🔗 Nodes Used

HTTP Request, Webhook, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
