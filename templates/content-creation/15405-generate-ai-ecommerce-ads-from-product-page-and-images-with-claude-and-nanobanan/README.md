# 🎬 Generate AI ecommerce ads from product page and images with Claude and NanoBanana

> ⚡ **196 views** · 🎬 [Content Creation & Video](../)

## Description

## Generate AI Ecommerce Ads from Product Page and Images with Claude + NanoBanana

### 👥 Who is this for?

This workflow is designed for **ecommerce brands, marketers, agencies, and content teams** who want to generate static product ads faster from minimal product input.

It works especially well if you already have:

- a **product page URL**
- a **logo**
- a **product image**
- a need to turn that into a more structured ecommerce ad concept and final creative without building everything manually

### 🧩 What problem is this workflow solving? / Use case

Creating decent ecommerce ad creatives usually takes more than just prompting an image model.

You need to:

- understand what the product actually is
- extract the real use cases and customer needs
- identify the most important product features and benefits
- pull proof points, pricing, or offer context from the page
- decide what visual direction makes sense for the product
- then generate the final ad

This workflow solves that by automating the full process from **product page + brand assets → product insights → ad concept → generated image**.

### ⚙️ What this workflow does

- Collects a **product URL**, **logo**, and **product image** through a form
- Analyzes the uploaded product image with Claude to understand what kind of product visual it is
- Fetches the product page
- Extracts and cleans product page text into one usable source
- Builds structured product insights such as:
  - **product name**
  - **product summary**
  - **product category**
  - **customer group**
  - **use cases**
  - **problems / needs**
  - **key product features**
  - **key benefits**
  - **proof / trust signals**
  - **offer / pricing**
  - **brand voice**
- Creates an ecommerce ad concept with Claude
- Generates a static ecommerce ad creative with NanoBanana through OpenRouter
- Converts the output into a file and uploads it to Google Drive

### 🔌 Setup

Connect your accounts:

- **Anthropic API** for product insight extraction and ad concept generation
- **OpenRouter** for image analysis and final image generation
- **Google Drive** if you want to store the final output

Set your credentials in the respective nodes.

Make sure your form accepts:

- **.jpg**
- **.png**
- **.webp**

If you do not want file export, disable the **Upload file** node.

### 🛠️ How to customize this workflow to your needs

**Product analysis:**  
Adjust the product insight prompt if you want different fields, such as ingredients, materials, objections, bundle logic, or audience segments.

**Ad concept style:**  
Edit the concept generation prompt to control tone, structure, and creative direction.

**Visual output:**  
Update the image generation prompt to make outputs more minimal, more premium, more editorial, more offer-led, or more product-shot focused.

**Copy structure:**  
Change the allowed copy structures if you want more offer-first, testimonial-first, or badge-led ecommerce ads.

**Export flow:**  
Replace Google Drive with your own storage, CMS, or downstream creative workflow.

### 🔍 How it works

The workflow starts with a form submission containing a product URL, logo, and optional product image. The uploaded assets are processed first: the logo is prepared for generation, while the product image is analyzed to understand whether it is a product shot, packaging, illustration, object, or another kind of asset.

Next, the workflow fetches the product page and converts it into readable text. That content is then cleaned and turned into one usable source. Claude uses it to build structured product insights, including product summary, category, customer group, problems or needs, use cases, features, benefits, trust signals, pricing or offer, and brand voice.

Based on that, Claude creates one ecommerce ad concept with the copy structure, main text, optional supporting text, badges or microcopy, CTA, visual direction, layout direction, and style direction.

Finally, the concept and uploaded assets are passed to the image model to generate the final ecommerce ad creative, which can then be exported automatically.

### ✅ Result

With this workflow, you go from **product page + assets → product insights → ad concept → generated ecommerce creative** in one flow, with much less manual prompting and much more structure.

This is also close to the idea behind **Blumpo**: better ads come from better context first, not just better prompting.

## 🔗 Nodes Used

HTTP Request, Google Drive, Markdown, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
