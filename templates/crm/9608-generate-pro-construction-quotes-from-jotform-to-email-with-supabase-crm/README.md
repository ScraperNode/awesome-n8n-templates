# 🤝 Generate pro construction quotes from jotform to email with Supabase CRM

> ⚡ **273 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who it's for

Construction and renovation businesses that need to generate detailed quotes from customer inquiries—plasterers, painters, contractors, renovation specialists, or any construction service provider handling quote requests through online forms.

## What it does

Automatically transforms JotForm submissions into professional, itemized construction quotes with complete CRM tracking—**no subscription needed** (saving €200-500/year). When a customer fills your project request form (specifying wall/ceiling areas, finish types, ceiling heights, wet areas, prep work), the workflow extracts measurements, normalizes service selections, applies intelligent pricing rules from your Supabase catalog, calculates line items with material and labor costs plus proper VAT handling, stores everything in a structured CRM pipeline (customer → project deal → estimate), and generates a branded HTML email ready for delivery. 

This **self-hosted pricing engine** replaces paid invoicing software for quote generation, saving thousands over time while eliminating manual takeoffs and quote preparation—

from 30-60 minutes to under 30 seconds.

## How it works

**Stage 1:** JotForm webhook triggers → Parser extracts project data (m² measurements, service types, property details) → Normalize Dutch construction terms to database values → Save raw submission for audit trail

**Stage 2:** Upsert customer record (idempotent on email) → Create project deal → Link to form submission

**Stage 3:** Fetch active pricing rules → Calculate line items based on square meters, service type (smooth plaster vs decorative), ceiling height premiums, property status (new build vs renovation), wet area requirements → Apply conditional logic (high ceilings = price multiplier, prep work charges, finish level) → Group duplicate items → Save estimate header + individual lines

**Stage 4:** Query optimized view (single call, all data) → Generate professional HTML email with logo, itemized services table (description, m², unit price, totals), VAT breakdown, CTA buttons, legal disclaimer

## Setup requirements

- **Supabase account** (free tier sufficient) - Database for CRM + pricing catalog
- **JotForm account** (free tier works) - Form builder with webhook support
- **Email service** - Gmail, SendGrid, or similar (add your own email node)

## How to set up

**1. Database setup (2 minutes):**
- Run this workflow's "SQL Generator" node to output complete schema
- Copy output → Paste in Supabase SQL Editor → Click Run
- Creates 9 tables + 1 optimized view + sample construction services (plastering €21-32/m², painting €12-15/m², ornamental work, ceiling finishes)

**2. Credentials:**
- Add Supabase credentials to n8n (Project URL + Service Role Key from Supabase Settings → API)
- No JotForm credentials needed (uses webhook)

**3. JotForm webhook:**
- Clone demo construction form: [jotform stucco planet demo](https://form.jotform.com/252844786304060
)- Form fields: Property type, postcode, services needed, wall/ceiling m², finish level, ornament quantities, molding meters, wet areas, ceiling heights, prep removal, start date, customer contact
- Settings → Integrations → Webhooks → Add your n8n webhook URL
- Test with preview submission

**4. Customize email:**
- Update company info in "Generate Email HTML" node (logo, business address, contact details, Chamber of Commerce number, VAT number)
- Adjust colors/branding in HTML template
- Available in Dutch and English versions

## How to customize

**Add your construction services:**
Edit `price_catalog` table in Supabase (no code changes):
```sql
INSERT INTO price_catalog (item_code, name, unit_price, vat_rate, unit_type) 
VALUES ('DRYWALL_INSTALL', 'Drywall Installation', 18.50, 9, 'm²');

## 🔗 Nodes Used

Webhook, Gmail, Stop and Error, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
