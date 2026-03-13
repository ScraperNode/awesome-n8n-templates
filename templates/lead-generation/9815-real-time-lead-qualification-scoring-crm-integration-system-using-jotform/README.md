# 🎣 Real-time lead qualification, scoring & CRM integration system using Jotform

> ⚡ **406 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Jotform Lead Qualification & Distribution System

Transform lead chaos into systematic qualification and instant routing - achieving 5-minute response times, 300% conversion increase, and eliminating sales team conflicts through AI-powered BANT scoring and intelligent territory assignment.

## What This Workflow Does

Revolutionizes lead management with AI-driven qualification and automated distribution to the right sales rep:

📝 **Intelligent Lead Capture** - Jotform collects complete lead profile including budget, timeline, and pain points  
🤖 **AI BANT Scoring** - GPT-4 evaluates leads across Budget, Authority, Need, Timeline (0-100 score)  
🎯 **Smart Routing** - Automatically assigns leads based on score, territory, industry expertise, and workload  
💼 **Instant CRM Creation** - Creates detailed contact records in HubSpot/Salesforce with full context  
📧 **Dual Notifications** - Sales rep gets detailed brief, lead receives professional confirmation  
📊 **Complete Tracking** - Google Sheets logging enables performance analysis and conversion metrics  
🔥 **Priority Tiering** - Hot leads (75+) go to senior reps, warm to mid-level, cold to SDRs  
💡 **Pre-Written Talking Points** - AI provides conversation starters based on lead pain points  
🚀 **Zero Manual Work** - End-to-end automation from form submission to first contact

## Key Features

**AI Lead Qualification Engine**: GPT-4 analyzes every lead using BANT framework with 25-point scoring per category (Budget, Authority, Need, Timeline)

**Intelligent Territory Routing**: Matches leads to sales reps based on geography, industry expertise, deal size capacity, and current workload

**Real-Time CRM Integration**: Creates fully populated contact records in HubSpot, Salesforce, or Pipedrive with AI insights

**Instant Rep Notifications**: Beautiful HTML emails with complete lead profile, BANT breakdown, talking points, and recommended next steps

**Lead Confirmation Emails**: Professional auto-responses set expectations and introduce assigned account executive

**Conversion Probability Scoring**: AI estimates likelihood of close based on BANT signals and pain severity

**Deal Value Estimation**: Automatically calculates potential deal size based on company size and budget range

**Red Flag Detection**: AI identifies concerns (budget constraints, wrong decision-maker, competitor lock-in)

**Competitor Vulnerability Assessment**: Evaluates how easily lead can switch from current solution

**Opportunity Size Classification**: Tags leads as Small/Medium/Large/Enterprise for proper resource allocation

**24-Hour SLA Monitoring**: Hourly checks identify uncontacted leads and escalate to sales management

**Complete Audit Trail**: Every lead logged to Google Sheets with timestamps, scores, and assignments for analytics

## Perfect For

**B2B SaaS Companies**: Fast-growing software companies with high lead volume (100+ leads/month)  
**Technology Services**: IT consulting, MSPs, and technology solution providers  
**Enterprise Sales Teams**: Organizations with complex products requiring senior rep expertise  
**Professional Services**: Law firms, accounting firms, consulting practices with territory-based teams  
**Manufacturing**: Industrial equipment sales with industry-specific expertise requirements  
**Healthcare Tech**: Medical software and equipment sales with compliance considerations  
**Financial Services**: Wealth management, insurance, and fintech with regulatory requirements  
**Marketing Agencies**: Digital marketing and advertising agencies qualifying client prospects  

## What You'll Need

### Required Integrations

**Jotform** - Lead capture form (free tier works)  
*Create your form for free on [Jotform using this link](https://www.jotform.com/?partner=mediajade)*

**OpenAI API** - GPT-4 for AI BANT scoring (~$0.20-0.40 per lead)  

**Gmail** - Automated notifications to sales reps and leads  

**Google Sheets** - Lead tracking database and analytics  

**CRM System** - HubSpot, Salesforce, or Pipedrive (via API)  

### Optional Integrations

**Slack** - Real-time lead notifications to sales channel  
**Calendar Integration** - Auto-schedule follow-up calls  

## Quick Start

1. **Import Template** - Copy JSON and import into n8n
2. **Add OpenAI Credentials** - Set up OpenAI API key (GPT-4 required for best BANT analysis)
3. **Create Jotform Lead Capture Form**:
   - Company Name (q3_companyName)
   - Contact Name (q4_contactName)
   - Email (q5_email)
   - Phone (q6_phone)
   - Company Size (q7_companySize) - dropdown: 1-10, 11-50, 51-200, 201-500, 500+
   - Budget Range (q8_budgetRange) - dropdown: &lt;$10K, $10K-$25K, $25K-$50K, $50K-$100K, $100K+
   - Timeline (q9_timeline) - dropdown: Immediate, 1-3 months, 3-6 months, 6+ months
   - Industry (q10_industry) - dropdown or text
   - Current Solution (q11_currentSolution) - text area
   - Pain Points (q12_painPoints) - text area
4. **Configure Gmail** - Add Gmail OAuth2 credentials (same for all Gmail nodes)
5. **Setup Sales Team Routing**:
   - Edit "Intelligent Routing Logic" node
   - Update `salesTeam` object with your actual sales reps
   - Configure territories, industries, and deal size thresholds
6. **Configure CRM Integration**:
   - Choose your CRM (HubSpot shown, easily adapted for Salesforce/Pipedrive)
   - Add CRM API credentials
   - Map custom fields as needed
7. **Setup Google Sheets**:
   - Create spreadsheet with "Lead_Tracking" sheet
   - Replace `YOUR_GOOGLE_SHEET_ID` in workflow (3 places)
   - Columns auto-populate on first submission
8. **Customize Email Templates**:
   - Update company name, phone, website URLs
   - Adjust branding colors if desired
9. **Set Up Escalation**:
   - Update sales manager email in escalation node
   - Adjust 24-hour SLA threshold if needed
10. **Test Workflow** - Submit test lead through Jotform
11. **Go Live** - Embed form on website, share link, add to email signatures

## Customization Options

**Lead Scoring Thresholds**: Adjust what constitutes Hot (75+), Warm (50-74), Cold (25-49)  
**Territory Configuration**: Add/modify territories, states, countries for rep assignment  
**Industry Expertise**: Define which reps specialize in which industries  
**Multi-Level Routing**: Add VP or director assignment for enterprise deals  
**Custom BANT Weights**: Adjust importance of Budget vs Authority vs Need vs Timeline  
**Qualification Disqualification**: Auto-reject leads below minimum score  
**Round-Robin vs Workload**: Choose between even distribution or capacity-based assignment  
**Integration Flexibility**: Swap HubSpot for Salesforce, Pipedrive, Zoho, or custom CRM  
**Follow-Up Sequences**: Add automated email nurture campaigns for different tiers  
**Calendar Booking**: Include Calendly/Chili Piper links for instant meeting scheduling  
**Lead Source Tracking**: Add UTM parameters and campaign tracking  
**Industry-Specific Qualifying**: Custom questions and scoring for different verticals  
**Multi-Touch Attribution**: Track which marketing channels produce best leads  
**Competitor Intelligence**: Add fields to track which competitor they're considering  

## Expected Results

**5-minute response time** - From form submission to rep contact (vs 48+ hours manual)  
**300% conversion increase** - Faster response + better qualification = 3x more deals  
**Zero lead conflicts** - Automated assignment eliminates sales team arguments  
**95% SLA compliance** - 24-hour escalation ensures no leads fall through cracks  
**40% time savings** - Reps spend time selling, not qualifying or cherry-picking leads  
**85% accurate routing** - AI + territory logic assigns to optimal rep first time  
**60% reduction in unqualified meetings** - BANT scoring filters out poor-fit prospects  
**100% lead visibility** - Complete tracking from inquiry to close in Google Sheets  
**50% manager time savings** - Automated monitoring vs manual lead assignment  
**2x rep productivity** - Only work high-quality, properly matched leads  

## Use Cases

### SaaS Company (Series B, 50 Sales Reps)

**Scenario**: Lead submits form requesting project management software for 200-person engineering team. Budget: $50K-$100K annually. Timeline: 1-3 months. Current solution: Jira. Pain: Poor cross-team visibility.

**AI BANT Analysis**: 
- Budget: 23/25 (has budget, validated by company size)
- Authority: 22/25 (VP Engineering, decision-maker)
- Need: 24/25 (critical pain, expanding team needs better tools)
- Timeline: 20/25 (moderate urgency, current fiscal quarter)
- **Total Score: 89/100 - HOT LEAD**

**Automated Response**:
- 9:14 AM: Form submitted
- 9:14 AM: CRM contact created with full profile
- 9:15 AM: Sarah Johnson (Senior AE, specializes in Tech/Engineering tools) receives detailed notification
- 9:15 AM: Lead receives confirmation email introducing Sarah
- 9:17 AM: Sarah calls lead (3-minute response time)
- 9:45 AM: Discovery meeting scheduled for tomorrow
- 10:30 AM: Sarah updates CRM status to "Qualified Opportunity"

**Result**: Lead converts to $85K annual contract. 3-minute response time impressed prospect (competitor took 2 days). Total sales cycle: 18 days vs 45-day average.

### Professional Services Firm (8 Consultants)

**Scenario**: Small business owner (25 employees) inquires about IT consulting. Budget: &lt;$10K. Timeline: 6+ months. Current solution: "We handle it ourselves." Pain: "Sometimes things break."

**AI BANT Analysis**:
- Budget: 8/25 (insufficient budget for typical engagement)
- Authority: 18/25 (owner, but budget-constrained)
- Need: 12/25 (low pain severity, reactive not proactive)
- Timeline: 5/25 (no urgency, exploratory inquiry)
- **Total Score: 43/100 - COLD LEAD**
- **Red Flags**: Below minimum deal size, no immediate pain, DIY mentality

**Automated Response**:
- Assigned to Emily Brown (SDR) for nurture track
- Lead receives confirmation with educational resources
- Emily sends follow-up email with free IT assessment offer
- Lead added to quarterly newsletter nurture campaign
- No immediate sales rep time wasted on low-probability lead

**Result**: 6 months later, business experiences server crash. Remembers firm from newsletter. Submits new request with "Immediate" timeline and $25K budget. This time routes to senior consultant, converts to $40K managed services contract.

### Enterprise Software (Global Sales Team)

**Scenario**: Fortune 500 procurement manager submits RFP for enterprise data platform. Budget: $500K+. Timeline: Immediate (Q1 deadline). 5,000 employees. Industry: Healthcare. Current: Legacy Oracle system.

**AI BANT Analysis**:
- Budget: 25/25 (enterprise budget, board-approved)
- Authority: 20/25 (procurement, but mentions C-suite sponsorship)
- Need: 25/25 (critical: compliance requirements, legacy system EOL)
- Timeline: 25/25 (urgent: Q1 deadline 8 weeks away)
- **Total Score: 95/100 - ENTERPRISE HOT LEAD**
- **Key Insight**: Competitor vulnerability HIGH (legacy system, compliance pressure)

**Automated Response**:
- Assigned to Michael Chen (Senior AE, Healthcare + Enterprise specialist)
- Sales VP automatically CC'd on notification (deal size &gt;$250K)
- CRM tags: "Enterprise", "Healthcare", "RFP", "Q1 Deadline"
- Michael's calendar checked, existing demo moved to prioritize this lead
- Michael calls within 8 minutes (prospect answered, impressed)
- Enterprise demo scheduled for next day with solutions engineer
- Legal and compliance teams looped in proactively

**Result**: Won $650K 3-year contract. 8-minute response time + pre-qualified insights helped beat 4 competitors. Sales cycle: 6 weeks (vs 6-month average for enterprise deals).

### Manufacturing Sales (Regional Reps)

**Scenario**: Plant manager in Texas requests quote for industrial equipment. Company size: 200 employees. Budget: $25K-$50K. Timeline: 3-6 months. Industry: Automotive. Current: 10-year-old machinery, frequent breakdowns.

**AI BANT Analysis**:
- Budget: 20/25 (has capital budget, needs approval)
- Authority: 19/25 (plant manager, recommends to CFO)
- Need: 22/25 (high: downtime costs, efficiency losses)
- Timeline: 18/25 (planned capital purchase, budget cycle timing)
- **Total Score: 79/100 - HOT LEAD**
- **Talking Points**: Focus on ROI from reduced downtime, payback period

**Automated Response**:
- Territory-based routing assigns to Jessica Martinez (Southwest US, Manufacturing)
- Email highlights equipment efficiency ROI calculator
- Lead receives PDF product catalog automatically
- Jessica calls within 12 minutes, schedules site visit for next week
- Technical specialist added to meeting invite automatically

**Result**: $42K equipment sale + $8K annual maintenance contract. Jessica's quick response and ROI-focused approach (from AI talking points) won deal over competitor who took 3 days to respond.

### Marketing Agency (Qualifying Client Fit)

**Scenario**: E-commerce startup (2 employees) requests full-service digital marketing. Budget: &lt;$10K monthly. Timeline: Immediate. Current: Doing it themselves. Pain: "Need more customers."

**AI BANT Analysis**:
- Budget: 12/25 (below agency minimum of $15K monthly)
- Authority: 22/25 (founder, decision-maker)
- Need: 18/25 (need is real, but unrealistic expectations)
- Timeline: 20/25 (urgent, but may not understand scope)
- **Total Score: 72/100 - WARM LEAD**
- **Red Flags**: Budget too low, unrealistic expectations, startup risk

**Automated Response**:
- Assigned to David Williams (Mid-Level AE)
- AI recommends: "Qualify budget realism, educate on agency pricing"
- David calls, explains pricing, suggests DIY consulting option ($5K)
- Lead appreciates transparency, opts for consulting package now
- Agreed to revisit full-service when reaches $100K MRR

**Result**: $5K consulting engagement (profitable given rep level). Client reaches $100K MRR 8 months later, upgrades to $20K monthly retainer. Honesty during qualification built trust and long-term relationship.

## Pro Tips

**Response Time is King**: Every minute delayed reduces conversion by 10%. Use mobile notifications for reps.

**BANT Customization**: Adjust scoring weights based on your sales cycle. Enterprise may weight Authority higher, transactional sales may weight Timeline higher.

**Territory Conflicts**: Use round-robin within territories to prevent cherry-picking. Track conversion rates by rep.

**Lead Source Attribution**: Add hidden fields to Jotform to track UTM parameters and campaign sources.

**Continuous Improvement**: Monthly review of Google Sheets data to refine AI scoring thresholds.

**Rep Accountability**: Use 24-hour escalation data to identify training needs or workload issues.

**Disqualification Criteria**: Add automatic rejection for competitors, students, or leads outside serviceable areas.

**Integration Expansion**: Connect to calendar systems (Calendly, Chili Piper) for instant meeting booking.

**Lead Nurture Tracks**: Route cold leads to marketing automation (HubSpot sequences, Mailchimp campaigns).

**A/B Testing**: Try different form fields and AI prompts to optimize qualification accuracy.

**Mobile Optimization**: Ensure Jotform is mobile-friendly for leads submitting from phones.

**Follow-Up Sequences**: Add automated day 2, day 7, day 30 follow-ups for non-responsive leads.

**Competitive Intelligence**: Track which competitors are mentioned most, adjust positioning accordingly.

**Budget Realism Check**: AI can identify when stated budget doesn't match company size/needs.

**Multi-Product Routing**: For companies with multiple product lines, route based on interest.

## Learning Resources

This workflow demonstrates advanced automation:

**AI Agents for Complex Qualification**: Multi-dimensional BANT scoring with natural language understanding

**Dynamic Routing Algorithms**: JavaScript-based logic for territory, expertise, and workload balancing

**CRM API Integration**: Creating fully populated contact records with custom fields

**Conditional Email Formatting**: HTML templates with dynamic content based on lead tier

**Scheduled Monitoring**: Cron-based checking for SLA compliance and escalation

**Data Aggregation**: Complete lead pipeline tracking for business intelligence

**Code Node Efficiency**: Custom JavaScript for complex routing logic beyond visual nodes

**Multi-Output Branching**: Parallel execution for CRM, notifications, and tracking

**Error Handling**: Graceful failure modes for API timeouts or missing data

**Performance Optimization**: Minimizing API calls while maximizing data capture

## Business Impact Metrics

**Lead Response Time**: Track average time from submission to first contact (target: &lt;5 minutes)

**Conversion Rate by Tier**: Compare close rates for Hot vs Warm vs Cold leads to validate scoring

**Rep Performance**: Measure conversion rates by sales rep to identify training needs or star performers

**Lead Source ROI**: Calculate which marketing channels produce highest-scoring leads

**SLA Compliance**: Track % of leads contacted within 24 hours (target: &gt;95%)

**Revenue Per Lead**: Compare deal sizes for AI-qualified leads vs manual qualification

**Time to Close**: Measure if faster response and better qualification shortens sales cycles

**Assignment Accuracy**: Track how often leads need re-assignment (target: &lt;10%)

**Manager Escalations**: Monitor frequency of 24-hour SLA breaches by rep

**Cost Per Lead Processed**: Calculate ROI of automation vs manual lead distribution

---

## Ready to Transform Your Lead Management?

Import this template and turn lead chaos into systematic qualification and instant routing with AI-powered BANT scoring! 🎯✨

**Questions or customization?** The workflow includes detailed sticky notes explaining each component's logic and decision criteria.

### Template Compatibility
- ✅ n8n version 1.0+
- ✅ Works with n8n Cloud and Self-Hosted
- ✅ Fully customizable routing logic
- ✅ Integrates with any CRM via API

## 🔗 Nodes Used

Google Sheets, HTTP Request, Jotform Trigger, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
