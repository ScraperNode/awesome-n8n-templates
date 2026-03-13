# 💬 Route and nurture financial services leads with OpenAI, Gmail and Google Sheets

> ⚡ **55 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Financial services lead magnet with Lovable/Base44 and n8n

Automatically route and nurture leads for Business Funding, Life Insurance, Credit Repair, and Agent Recruitment with hyper-personalized AI-generated emails.

## How it works

**1. Lead Capture via Webhook**
Your landing page submits lead data (name, email, phone, interest, service-specific details) to the workflow webhook.

**2. Intelligent Routing by Interest**
Switch node routes leads to the appropriate path based on their selected service interest.

**3. AI Email Generation**
OpenAI generates hyper-personalized HTML emails using the lead's specific data - calculating funding amounts, insurance premiums, credit repair timelines, or recruitment benefits.

**4. Automated Email Delivery**
Gmail sends the customized email with dynamic subject lines and professional templates.

**5. Lead Tracking**
Google Sheets logs all lead data for follow-up and analytics.

---

## Set up steps

**Time to set up:** 15-20 minutes

### 1. Configure Credentials (5 min)
- Add your **OpenAI API key** (all AI nodes use the same credential)
- Connect **Gmail OAuth2** for sending emails
- Connect **Google Sheets OAuth2** for lead tracking

### 2. Create Your Lead Tracking Sheet (2 min)
- Create a Google Sheet with columns: Name, Interest, Phone, Email, Details/Additional Data
- Copy the Sheet ID and update all Google Sheets nodes

### 3. Set Up Webhook (3 min)
- Activate the workflow to generate your webhook URL
- Copy the webhook URL for your landing page integration

### 4. Customize Your Brand (5 min)
- Replace all "Your Name" placeholders with your name
- Update "Your Company" and "Your Title" references
- Add your actual service links (funding, insurance, credit repair, recruitment)
- Adjust brand colors in HTML templates if desired

### 5. Test the Workflow (5 min)
- Use the pinned test data in the Webhook node to validate each path
- Send test emails to yourself
- Verify data appears correctly in Google Sheets

**Detailed setup instructions are included in the sticky notes throughout the workflow.**

---

## Building Your Landing Page Frontend

This workflow needs a landing page to collect leads. Here's how to build one quickly:

### Option 1: Build with Lovable (Recommended - Fastest)

**Lovable Prompt:**

```
Create a modern lead magnet landing page for a financial services company with the following:

LAYOUT:
- Hero section with headline "Unlock Your Financial Future" and subheadline about multiple services
- Service selection cards for: Business Funding, Life Insurance, Credit Repair, Become an Agent
- Lead capture form that appears when user selects a service
- Professional color scheme: Green (#2EAE4E) primary, Cream (#F5F5DC) secondary, Gold (#FFD700) accents

FORM FUNCTIONALITY:
- Universal fields: First Name, Last Name, Email, Phone
- Service-specific conditional fields that appear based on selection:
  
  Business Funding:
  - Business Length (dropdown: &lt;1 year, 1-2 years, 2-5 years, 5+ years)
  - Monthly Revenue (dropdown: Under $10k, $10k-$50k, $50k-$100k, $100k+)
  - Credit Score (dropdown: Below 600, 600-650, 650-700, 700+)
  - Funding Purpose (text input)
  
  Life Insurance:
  - Age Range (dropdown: 18-30, 31-40, 41-50, 51-60, 60+)
  - Has Dependents (radio: Yes/No)
  - Health Status (dropdown: Excellent, Good, Fair)
  - Coverage Needed (dropdown: $250k-$500k, $500k-$1M, $1M+)
  - State (dropdown: all US states)
  
  Credit Repair:
  - Current Credit Score (dropdown: Below 500, 500-580, 580-650, 650-700, 700+)
  - Credit Goals (dropdown: Buy a home, Get a loan, Better rates, Start a business)
  - Negative Items (text input)
  
  Become an Agent:
  - Has Experience (radio: Yes/No)
  - Is Licensed (radio: Yes/No)
  - Interests (checkboxes: Flexible schedule, Passive income, Helping others, Building team)
  - Start Time (dropdown: Immediately, 1-2 weeks, 1 month, Just exploring)

FORM SUBMISSION:
- On submit, POST form data as JSON to webhook URL: [YOUR_WEBHOOK_URL_HERE]
- JSON structure:
{
  "firstName": "string",
  "lastName": "string", 
  "email": "string",
  "phone": "string",
  "interest": "string",
  "additionalData": {
    // service-specific fields as object
  },
  "timestamp": "ISO date string",
  "source": "leadmagnet_page"
}

- Show success message after submission
- Reset form for next lead
- Add subtle animations and hover effects
- Mobile responsive design
- Include trust badges/testimonials section
- Add privacy policy notice

STYLING:
- Modern, professional design
- Gradient buttons with hover effects
- Card-based layout for services
- Smooth transitions between form states
- Loading state during submission
```

**After Lovable generates it:**
1. Replace `[YOUR_WEBHOOK_URL_HERE]` with your actual n8n webhook URL
2. Customize branding, copy, and testimonials
3. Deploy to Netlify/Vercel (Lovable can do this automatically)

---

### Option 2: Build with Base44 (v0.dev)

**Base44/v0 Prompt:**

```
Create a conversion-optimized lead capture landing page for financial services with:

STRUCTURE:
- Single-page application with smooth scrolling
- Hero section with value proposition
- 4 service option cards (Business Funding, Life Insurance, Credit Repair, Agent Recruitment)
- Dynamic form that shows service-specific fields based on card selection
- Social proof section with stats/testimonials
- Footer with company info

FORM BEHAVIOR:
When user clicks a service card:
1. Highlight selected card
2. Scroll smoothly to form section
3. Show universal fields (name, email, phone)
4. Show conditional fields based on service:

Business Funding → creditScore, monthlyRevenue, businessLength, fundingPurpose
Life Insurance → ageRange, hasDependents, healthStatus, coverageNeeded, state
Credit Repair → currentScore, creditGoals, negativeItems
Agent Recruitment → hasExperience, isLicensed, interests (multi-select), startTime

TECHNICAL REQUIREMENTS:
- React components with TypeScript
- Form validation with error messages
- Submit to webhook endpoint via fetch API with POST
- JSON payload structure:
  {
    firstName, lastName, email, phone, interest,
    additionalData: { ...service-specific fields },
    timestamp: new Date().toISOString(),
    source: "leadmagnet_page"
  }
- Loading spinner during submission
- Success confirmation modal
- Error handling with user-friendly messages

DESIGN:
- Color palette: Primary green #2EAE4E, Cream #F5F5DC, Gold accents #FFD700
- Tailwind CSS styling
- Responsive breakpoints for mobile/tablet/desktop
- Accessible form inputs with proper labels
- Smooth animations using Framer Motion
- Professional sans-serif font (Inter or similar)

COMPONENTS TO CREATE:
- ServiceCard: clickable cards with icon, title, description
- DynamicForm: form that renders fields based on selected service
- SuccessModal: confirmation after submission
- TestimonialsSection: social proof carousel
- HeroSection: headline, subheadline, CTA

Make it modern, trustworthy, and conversion-focused.
```

---

### Option 3: Use Existing Form Builders

If you prefer no-code tools:

**Typeform:**
- Create multi-step form with conditional logic
- Use Typeform webhook to send data to n8n
- Map Typeform fields to expected JSON structure

**Webflow:**
- Build custom landing page
- Use Webflow Forms with custom code to POST to webhook
- Add JavaScript to format data correctly

**Carrd:**
- Simple single-page landing
- Use custom form with JavaScript submission
- Lightweight and fast-loading

---

## What You Get

✅ **4 Complete Service Paths:**
- Business Funding (dynamic loan amount calculations)
- Life Insurance (age/health-based premium estimates)
- Credit Repair (realistic timeline projections)
- Agent Recruitment (experience-matched messaging)

✅ **AI-Powered Personalization:**
- Uses prospect's specific data points
- Calculates service-specific metrics
- First-person conversational tone
- Professional HTML email templates

✅ **Complete Lead Management:**
- Automated email delivery
- Google Sheets tracking
- Service-specific data capture
- Timestamp logging

✅ **Production-Ready Prompts:**
- Detailed AI instructions for each service
- Dynamic calculations built-in
- Brand voice guidelines
- HTML template structure

---

## Perfect For

- Financial advisors and planners
- Insurance agents and brokers
- Business funding consultants
- Credit repair services
- MLM/Network marketing in financial services
- Lead generation agencies serving finance clients

---

## Customization Ideas

🎨 **Branding:**
- Update colors in HTML templates to match your brand
- Add your logo to email headers
- Customize email signatures

📊 **Integrations:**
- Add SMS notifications (Twilio node)
- Connect to your CRM (HubSpot, Salesforce)
- Set up Slack notifications for high-value leads
- Add calendar booking links

🔄 **Follow-up Sequences:**
- Add delay nodes for drip campaigns
- Create nurture paths for non-responders
- Set up reminder emails

📈 **Analytics:**
- Connect to Google Analytics
- Track conversion rates per service
- Monitor email open/click rates
- Set up performance dashboards

---

## Technical Requirements

- n8n instance (cloud or self-hosted)
- OpenAI API key (GPT-4o-mini recommended for cost efficiency)
- Gmail account with OAuth2 enabled
- Google Sheets access
- Landing page with webhook integration

---

## Cost Estimate

**Per 100 leads:**
- OpenAI API: ~$0.50-$1.00 (GPT-4o-mini)
- Gmail: Free (within limits)
- Google Sheets: Free
- n8n: Depends on hosting (cloud ~$20/mo, self-hosted variable)

**Total: Roughly $1-2 per 100 leads for AI generation**

---

## Support & Documentation

📚 **Included Documentation:**
- 10+ detailed sticky notes throughout workflow
- Setup checklist
- Data structure specifications
- Troubleshooting guide
- Customization tips

🎥 **Recommended Resources:**
- n8n webhook documentation
- OpenAI API best practices
- Gmail API quotas and limits

---

## Author

**David Olusola**  


---

## Version History

**v1.0** - Initial release
- 4 service paths with AI personalization
- Complete email automation
- Google Sheets integration
- Production-ready prompts
- Comprehensive documentation

---

## License & Usage

Free to use and modify for your business. 

⭐ If this template helps you, please:
- Leave a review
- Share with others in financial services
- Tag me in your success stories

Questions? Find me on the n8n community forum or LinkedIn.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
