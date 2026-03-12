# ⚒️ Master data transformation with the complete set node guide

> ⚡ **904 views** · ⚒️ [Engineering](../)

## Description

# n8n Set Node Tutorial - Complete Guide

## 🎯 How It Works

This tutorial workflow teaches you everything about n8n's **Set node** through hands-on examples. The Set node is one of the most powerful tools in n8n - it allows you to create, modify, and transform data as it flows through your workflow.

**What makes this tutorial special:**
- **Progressive Learning**: Starts simple, builds to complex concepts
- **Interactive Examples**: Real working nodes you can modify and test
- **Visual Guidance**: Sticky notes explain every concept
- **Branching Logic**: Shows how Set nodes work in different workflow paths
- **Real Data**: Uses practical examples you'll encounter in automation

The workflow demonstrates 6 core concepts:
1. **Basic data types** (strings, numbers, booleans)
2. **Expression syntax** with `{{ }}` and `$json` references
3. **Complex data structures** (objects and arrays)
4. **"Keep Only Set"** option for clean outputs
5. **Conditional data setting** with branching logic
6. **Data transformation** and aggregation techniques

## 📋 Setup Steps

### Step 1: Import the Workflow
1. **Copy the JSON** from the code artifact above
2. **Open your n8n instance** in your browser
3. **Navigate to Workflows** section
4. **Click "Import from JSON"** or the import button (usually a "+" or import icon)
5. **Paste the JSON** into the import dialog
6. **Click "Import"** to load the workflow
7. **Save the workflow** (Ctrl+S or click Save button)

### Step 2: Choose Your Starting Point

**Option A: Default Tutorial Mode (Recommended for beginners)**
- The workflow is ready to run as-is
- Uses simple "Welcome" message as starting data
- **Click "Execute Workflow"** to begin

**Option B: Rich Test Data Mode (Recommended for experimentation)**
1. **Locate the nodes**: Find "Start (Manual Trigger)" and "0. Test Data Input"
2. **Disconnect default**: Click the connection line between "Start (Manual Trigger)" → "1. Set Basic Values" and delete it
3. **Connect test data**: Drag from "0. Test Data Input" output to "1. Set Basic Values" input
4. **Execute**: Click "Execute Workflow" to run with rich test data

### Step 3: Execute and Learn

1. **Run the workflow**: Click the "Execute Workflow" button
2. **Check outputs**: Click on each node to see its output data
3. **Read the notes**: Each sticky note explains what's happening
4. **Follow the flow**: Data flows from left to right, top to bottom

### Step 4: Experiment and Modify

**Try These Experiments:**

**🔧 Change Basic Values:**
- Click on "1. Set Basic Values"
- Modify `user_age` (try 20 vs 35)
- Change `user_name` to see how it propagates
- Execute and see the changes flow through

**📊 Test Conditional Logic:**
- Set `user_age` to 20 → triggers "Student Discount" path
- Set `user_age` to 30 → triggers "Premium Access" path
- Watch how the workflow branches differently

**🎨 Modify Expressions:**
- In "2. Set with Expressions", try changing:
  - `={{ $json.score * 2 }}` to `={{ $json.score * 3 }}`
  - `={{ $json.user_name }} Smith` to `={{ $json.user_name }} Johnson`

**🏗️ Complex Data Structures:**
- In "3. Set Complex Data", modify the JSON structure
- Add new properties to the user_profile object
- Try nested expressions

## 🎓 Learning Path

### Beginner Level (Nodes 1-2)
- **Focus**: Understanding basic Set operations
- **Learn**: Data types, static values, simple expressions
- **Time**: 10-15 minutes

### Intermediate Level (Nodes 3-4)  
- **Focus**: Complex data and output control
- **Learn**: Objects, arrays, "Keep Only Set" option
- **Time**: 15-20 minutes

### Advanced Level (Nodes 5-6)
- **Focus**: Conditional logic and data aggregation
- **Learn**: Branching workflows, merging data, complex expressions
- **Time**: 20-25 minutes

## 🔍 What Each Node Teaches

| Node | Concept | Key Learning |
|------|---------|-------------|
| **1. Set Basic Values** | Data Types | String, number, boolean basics |
| **2. Set with Expressions** | Dynamic Data | `{{ }}` syntax, `$json` references, `$now` functions |
| **3. Set Complex Data** | Advanced Structures | Objects, arrays, nested properties |
| **4. Set Clean Output** | Data Management | "Keep Only Set" for clean final outputs |
| **5a/5b. Conditional Sets** | Branching Logic | Different data based on conditions |
| **6. Tutorial Summary** | Data Aggregation | Combining and summarizing workflow data |

## 💡 Pro Tips

**🚀 Quick Wins:**
- Always check node outputs after execution
- Use sticky notes as your learning guide  
- Experiment with small changes first
- Copy nodes to try variations

**🛠️ Advanced Techniques:**
- Use `Keep Only Set` for API responses
- Combine static and dynamic data in complex objects
- Leverage conditional paths for different user types
- Reference nested object properties with dot notation

**🐛 Troubleshooting:**
- If expressions don't work, check the `{{ }}` syntax
- Ensure field names match exactly (case-sensitive)
- Use the expression editor for complex logic
- Check data types match your expectations

## 🎯 Next Steps After Tutorial

1. **Create your own Set nodes** in a new workflow
2. **Practice with real data** from APIs or databases  
3. **Build data transformation workflows** for your specific use cases
4. **Combine Set nodes** with other n8n nodes like HTTP, Webhook, etc.
5. **Explore advanced expressions** using JavaScript functions

**Congratulations!** You now have the foundation to use Set nodes effectively in any n8n workflow. The Set node is truly the "Swiss Army knife" of n8n automation! 🛠️

## 🔗 Nodes Used

Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
