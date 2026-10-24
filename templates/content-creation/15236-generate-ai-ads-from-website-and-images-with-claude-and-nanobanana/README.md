# 🎬 Generate AI ads from website and images with Claude and NanoBanana

> ⚡ **402 views** · 🎬 [Content Creation & Video](../)

## Description

## Generate AI ad creatives from website, logo, and product image with Claude + NanoBanana

### Who is this for?

This workflow is designed for **marketers, founders, agencies, and content teams** who want to generate static ad creatives faster from minimal brand input.

It works especially well if you already have:
- a **website**
- a **logo**
- a **product image**, screenshot, or UI visual

and want to turn that into a structured ad concept and final creative without building everything manually.

### What problem is this workflow solving? / Use case

Creating decent ad creatives usually takes more than just prompting an image model.

You need to:
- understand what the product actually does
- pull useful messaging from the website
- figure out who the product is for
- write a clear value proposition
- decide what visual direction makes sense
- then generate the final ad

This workflow solves that by automating the full process from **website + brand assets → insights → ad concept → generated image**.

### What this workflow does

- Collects a **website URL**, **logo**, and **product image** through a form
- Analyzes the uploaded product image with Claude to understand what kind of visual it is
- Fetches the homepage and selected internal pages from the website
- Extracts and cleans website text into one usable source
- Builds structured brand insights such as:
  - **product summary**
  - **customer group**
  - **problems**
  - **key features**
  - **key benefits**
  - **brand voice**
- Creates a marketing brief and ad concept with Claude
- Generates a static ad creative with NanoBanana through OpenRouter
- Converts the output into a file and uploads it to Google Drive

### Setup

Connect your accounts:

- **Anthropic API** for brand insights and ad concept generation
- **OpenRouter** for image analysis and final image generation
- **Google Drive** if you want to store the final output

Set your credentials in the respective nodes.

Make sure your form accepts:
- **.jpg**
- **.png**
- **.webp**

If you do not want file export, disable the **Upload file** node.

### How to customize this workflow to your needs

**Brand analysis:**  
Adjust the prompt in the brand insight step if you want different fields, such as competitor angles, tone categories, or ICP detail.

**Page selection:**  
Change the subpage selection prompt if you want to prioritize pages like pricing, testimonials, integrations, or case studies.

**Ad concept style:**  
Edit the concept generation prompt to control tone, structure, and creative direction.

**Visual output:**  
Update the image generation prompt to make outputs more minimal, more editorial, more SaaS-like, or more product-focused.

**Export flow:**  
Replace Google Drive with your own storage, CMS, or downstream creative workflow.

### How it works

The workflow starts with a form submission containing a website, logo, and optional product image. The uploaded assets are processed first: the logo is prepared for generation, while the product image is analyzed to understand whether it is a UI, product shot, illustration, object, or another type of visual.

Next, the workflow fetches the homepage, extracts navigation links, and uses Claude to select a few useful internal pages likely to contain stronger marketing input. Those pages are fetched and converted into text.

That content is then cleaned and merged into one source. Claude uses it to build structured brand insights and turn them into a full ad concept, including headline, subheadline, CTA, visual direction, and layout direction.

Finally, the concept and uploaded assets are passed to the image model to generate the final ad creative, which can then be exported automatically.

### Result

With this workflow, you go from **website + assets → brand insights → ad concept → generated creative** in one flow, with much less manual prompting and much more structure.

## 🔗 Nodes Used

HTTP Request, Google Drive, Markdown, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
