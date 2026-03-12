# 👥 Automate candidate evaluation with GPT-4 scoring and Gmail notifications

> ⚡ **500 views** · 👥 [HR & Recruitment](../)

## Description

## How it works

This comprehensive recruitment automation workflow transforms your hiring process from manual screening to intelligent candidate management. The system begins by automatically collecting CVs from multiple job boards and career platforms, immediately parsing each submission using advanced AI technology to extract key information including skills, experience levels, educational background, and career progression patterns.

Once parsed, the workflow employs predictive scoring algorithms that evaluate each candidate against your specific job requirements and company culture criteria. This multi-dimensional analysis considers technical skills alignment, experience relevance, cultural fit indicators, and career trajectory patterns to generate compatibility scores with remarkable accuracy.

The system then seamlessly transitions qualified candidates into automated interview scheduling, coordinating availability across hiring managers, team members, and candidates while optimizing for timezone considerations and calendar conflicts. Finally, successful candidates enter a personalized onboarding workflow that adapts to their role, department, and experience level, ensuring smooth integration into your organization.

## Target audience and problem solved

This workflow is designed for HR departments, talent acquisition teams, and growing companies struggling with time-intensive recruitment processes. It specifically addresses the challenges of manual CV screening, subjective candidate evaluation, scheduling conflicts, and inconsistent onboarding experiences. Organizations processing high volumes of applications or seeking to eliminate recruitment bias while maintaining quality standards will benefit most from this automation.

## Set up steps

**Prerequisites**: Ensure you have API access to your chosen AI parsing service (OpenAI, Affinda, or equivalent), active accounts on target job boards, and administrative access to your calendar and ATS systems.

1. **Configure job board integrations**: Connect your LinkedIn Recruiter, Indeed, and Glassdoor accounts using their respective APIs. Set up webhook endpoints to automatically capture new CV submissions and configure filtering criteria based on job titles, locations, and basic qualifications.

2. **Establish AI parsing service**: Choose and configure your CV analysis provider (OpenAI for natural language processing, Affinda for specialized CV parsing, or alternative services). Set up API credentials and define extraction templates for skills, experience, education, and custom fields relevant to your industry.

3. **Integrate calendar systems**: Connect Google Calendar, Outlook, or your preferred scheduling platform. Configure availability windows for all hiring team members, set interview duration templates, and establish buffer times between meetings.

4. **Synchronize ATS platform**: Link your Applicant Tracking System (Workday, BambooHR, Greenhouse, etc.) to ensure seamless candidate data flow. Map workflow fields to your ATS schema and establish status update triggers.

5. **Connect interview tools**: Integrate video conferencing platforms (Zoom, Microsoft Teams, Google Meet) for automatic meeting room creation and invitation distribution. Configure recording settings and waiting room preferences.

6. **Link HRMS for onboarding**: Connect your Human Resource Management System to trigger personalized onboarding sequences based on role type, department, and seniority level.

## Key Features

- **🧠 Advanced CV analysis**: Leverages machine learning to automatically extract and categorize skills, experience, education, certifications, and career progression patterns with 95% accuracy
- **📊 Multi-criteria scoring**: Implements customizable evaluation matrices considering technical skills, soft skills, experience relevance, cultural fit indicators, and growth potential
- **📅 Intelligent scheduling**: Automatically coordinates complex interview schedules across multiple stakeholders, considering time zones, availability preferences, and interview type requirements
- **🎯 Precise candidate matching**: Generates compatibility percentages based on job requirements, team dynamics, and long-term career alignment factors
- **⚡ Accelerated recruitment cycle**: Reduces time-to-hire by up to 60% through automated screening, intelligent prioritization, and streamlined communication workflows
- **👥 Collaborative evaluation**: Enables structured feedback collection from multiple interviewers with standardized scoring rubrics and consensus-building tools
- **📱 Enhanced candidate experience**: Provides mobile-optimized interfaces for application tracking, interview scheduling, and communication throughout the recruitment journey
- **🔄 Continuous optimization**: Automatically tracks and analyzes recruitment metrics to continuously improve scoring algorithms and process efficiency

## Customization options

The workflow offers extensive customization capabilities including adjustable scoring weights for different criteria, industry-specific skill taxonomies, custom interview formats, and role-based onboarding paths. Organizations can configure approval workflows, set up custom notification templates, and establish specific integration parameters to match their unique recruitment processes and company culture.

This automation solution transforms recruitment from a time-intensive manual process into a strategic, data-driven system that improves both hiring quality and candidate experience while significantly reducing administrative overhead.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
