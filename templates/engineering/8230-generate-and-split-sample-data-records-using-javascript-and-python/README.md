# ⚒️ Generate and split sample data records using JavaScript and Python

> ⚡ **1,283 views** · ⚒️ [Engineering](../)

## Description

A minimal, plug-and-play workflow that generates **sample data** using n8n’s **Code** node (both JavaScript and Python versions included) and then **fans out** those records into individual items with **Split Out**. Perfect for testing downstream nodes, mapping, pagination, or prototyping list-based logic without connecting to real data sources.

---

## ✅ What this template does
- **Generates 20 sample records** with fields: `index`, `num`, and `test`
- Writes the array to `item.json.barr`
- Uses **Split Out** to convert the array into **one item per record**
- Includes **both JavaScript and Python** implementations side-by-side

---

## 👤 Who’s it for
- Builders who need **mock data** to test mappings and loops  
- Educators/demo makers who want a simple **fan-out pattern**  
- Anyone who wants a **clean scaffold** for list processing in n8n

---

## ⚙️ How it works / What it does
- **Generate Data Javascript**: Produces `barr = [{ index, num, test }, ...]` for 20 rows  
- **Generate Data Python**: Same output, written in Python  
- **Split Out Javascript / Python**: Takes `barr` and emits **one item per element**  

&gt; Use either branch (JS or Python) depending on your preference.

---

## 🛠️ How to set up
No external setup required. Import the workflow and **Execute**.  
Select either the **JavaScript** or **Python** branch to see fan-out items.

---

## 📋 Requirements
- n8n (Cloud or self-hosted)
- No credentials or third-party services

---

## 🎛️ Customize the workflow
- Change the number of rows: adjust the loop range (`0..N`)  
- Rename or add fields to each record (e.g., `name`, `price`, `tags`)  
- Replace the static array with generated or randomized data  
- Pipe the Split Out output into **Set**, **Function**, **HTTP**, or **Sheets** nodes for further testing

---

## 🗒️ Notes
- Sticky notes are included for in-editor guidance.
- Both implementations return the same structure so you can swap freely.

---

## 📬 Contact  
Need help customizing this (e.g., shaping fields, adding randomizers, or exporting to CSV/Sheets)?  

- 📧 **rbreen@ynteractive.com**  
- 🔗 **Robert Breen** — https://www.linkedin.com/in/robert-breen-29429625/  
- 🌐 **ynteractive.com** — https://ynteractive.com

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
