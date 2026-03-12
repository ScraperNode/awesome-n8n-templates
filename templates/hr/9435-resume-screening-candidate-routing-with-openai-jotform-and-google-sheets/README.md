# 👥 Resume screening & candidate routing with OpenAI, Jotform, and Google Sheets

> ⚡ **354 views** · 👥 [HR & Recruitment](../)

## Description

Revolutionize your recruitment process with intelligent AI-driven candidate screening that evaluates resumes, scores applicants, and automatically routes them based on fit - saving 10-15 hours per week on initial screening.

## 🎯 What This Workflow Does

Transforms your hiring pipeline from manual resume review to intelligent automation:

1. **📝 Captures Applications** - Jotform intake with resume upload
2. **🤖 AI Resume Analysis** - OpenAI parses skills, experience, education, and red flags
3. **🎯 Intelligent Scoring** - Evaluates candidates against job requirements with structured scoring (0-100)
4. **🚦 Smart Routing** - Automatically routes based on AI recommendation:
   - **Strong Yes (85-100)**: Instant Slack alert → Interview invitation
   - **Maybe/Yes (60-84)**: Manager review → Approval workflow
   - **No (&lt;60)**: Polite rejection email
5. **📊 Analytics Tracking** - All data logged to Google Sheets for hiring insights

## ✨ Key Features

- **AI Resume Parsing**: Extracts structured data from any resume format
- **Intelligent Scoring System**: Multi-dimensional evaluation (skills match, experience quality, cultural fit)
- **Structured Output**: Consistent JSON schema ensures reliable data for decision-making
- **Automated Communication**: Personalized emails for every candidate outcome
- **Human-in-the-Loop**: Manager approval for borderline candidates
- **Comprehensive Analytics**: Track conversion rates, average scores, and hiring metrics
- **Customizable Job Requirements**: Easy prompt editing to match any role

## 💼 Perfect For

- **Startups & Scale-ups**: Processing 50+ applications per week
- **HR Teams**: Wanting to reduce time-to-hire by 40-60%
- **Technical Recruiters**: Screening engineering, product, or design roles
- **Growing Companies**: Scaling hiring without scaling headcount

## 🔧 What You'll Need

### Required Integrations
- **Jotform** - Application intake form (free tier works)
Create your form for free on [Jotform using this link](https://www.jotform.com/?partner=mediajade)
- **OpenAI API** - GPT-4o-mini for cost-effective AI analysis (~$0.15 per candidate)
- **Gmail** - Automated candidate communication
- **Google Sheets** - Hiring database and analytics

### Optional Integrations
- **Slack** - Instant alerts for hot candidates
- **Linear/Asana** - Task creation for interview scheduling
- **Calendar APIs** - Automated interview booking

## 🚀 Quick Start

1. **Import Template** - Copy JSON and import into n8n
2. **Create Jotform** - Use provided field structure (name, email, resume upload, etc.)
3. **Add API Keys** - OpenAI, Jotform, Gmail, Google Sheets
4. **Customize Job Requirements** - Edit AI screening prompt with your role details
5. **Personalize Emails** - Update templates with your company branding
6. **Test & Deploy** - Submit test application and verify all nodes

## 🎨 Customization Options

- **Adjust Scoring Thresholds**: Change routing logic based on your needs
- **Multiple Positions**: Clone workflow for different roles with unique requirements
- **Add Technical Assessments**: Integrate HackerRank, CodeSignal, or custom tests
- **Interview Scheduling**: Connect Calendly or Google Calendar for auto-booking
- **ATS Integration**: Push data to Lever, Greenhouse, or BambooHR
- **Diversity Tracking**: Add demographic fields and analytics
- **Reference Checking**: Automate reference request emails

## 📈 Expected Results

- **90% reduction** in manual resume review time
- **24-hour response time** to all candidates
- **Zero missed applications** - every candidate gets feedback
- **Data-driven hiring** - track what works with comprehensive analytics
- **Better candidate experience** - fast, professional communication
- **Consistent evaluation** - eliminate unconscious bias with structured AI scoring

## 🏆 Use Cases

### Technology Companies
Screen 100+ engineering applications per week, identify top 10% instantly, schedule interviews same-day.

### Agencies & Consultancies
Evaluate consultant candidates across multiple skill dimensions, route to appropriate practice areas.

### High-Volume Hiring
Process retail, customer service, or sales applications at scale with consistent quality.

### Remote-First Teams
Evaluate global candidates 24/7, respond instantly regardless of timezone.

## 💡 Pro Tips

- **Train Your AI**: After 50+ applications, refine prompts based on false positives/negatives
- **A/B Test Thresholds**: Experiment with score cutoffs to optimize for your needs
- **Build Talent Pipeline**: Keep "maybe" candidates in CRM for future roles
- **Track Source Effectiveness**: Add UTM parameters to measure which job boards deliver best candidates
- **Continuous Improvement**: Weekly review of AI assessments to calibrate accuracy

## 🎓 Learning Resources

This workflow demonstrates:
- AI Agents with structured output
- Multi-stage conditional routing
- Human-in-the-loop automation
- Binary data processing (resume files)
- Email automation with HTML templates
- Real-time notifications
- Analytics and data logging

Perfect for learning advanced n8n automation patterns!

---

**Ready to transform your hiring process?** Import this template and start screening candidates intelligently in under 30 minutes.

**Questions or customization needs?** The workflow includes detailed sticky notes explaining each section.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Jotform Trigger, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
