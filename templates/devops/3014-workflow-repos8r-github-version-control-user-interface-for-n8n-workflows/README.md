# ⚙️ 🔄 Workflow repos8r: Github version control user interface for n8n workflows

> ⚡ **1,513 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

🔥 **[n8n Members Sale – n8n Community Members Get ideoGener8r for Just $10!](#) (Reg. $15)**
**Use Coupon Code:** `FeelinTheFlowgramming`
(Valid for n8n community members)

## 💪 How it works
Seamlessly track, manage, and version-control your **n8n workflows** with an intuitive Git-style system. Whether you're making updates or creating new workflows, this tool ensures structured commits, detailed change tracking, and seamless GitHub integration—all within a **Matrix-inspired UI**.

## 🎯 **Who is this for?**

Perfect for:

- **n8n Developers & Automation Engineers** – Maintain workflow history and prevent accidental overwrites.
- **Teams Collaborating on Automation** – Track and commit changes with structured version control.
- **DevOps & IT Professionals** – Streamline deployment across multiple n8n environments.

## 🚀 **Key Features**

### **Version Control & Workflow Management**

- Commit changes when editing existing workflows
- Create & commit new workflows from scratch
- Detect modifications with **deep node comparison**
- Access repo with **direct links** from changes window
- Workflow JSON Browser Caching **to avoid large loads on n8n"

## Core Features

### Workflow Management
- **Workflow Selection**: Easy selection of n8n workflows and GitHub workflows from dropdown menus
- **Smart Caching**: Client-side caching of workflows for faster loading (1-week cache duration)
- **Cache Control**: Manual cache clearing via hard refresh (Cmd+Shift+R)
- **Matrix-Style UI**: Terminal-inspired interface with glowing effects and animations

### GitHub Integration
- **Push to GitHub**: Direct pushing of n8n workflows to GitHub repositories
- **Commit Control**: Automated commit message generation with workflow details
- **Branch Management**: Automatic branch creation and management
- **Pull from GitHub**: Future feature for pulling workflows from GitHub (Coming Soon)

### Workflow Comparison
- **Side-by-Side Comparison**: Compare n8n workflows with their GitHub counterparts
- **Change Detection**: Automatic detection and highlighting of workflow changes
- **Diff Visualization**: Clear visualization of additions, deletions, and modifications
- **JSON Validation**: Ensures workflow JSON integrity before operations

### User Experience
- **System Notifications**: Matrix-themed toast notifications for important alerts
  - 30-second duration with manual close option
  - Context-aware messages (e.g., cache refresh hints)
  - Glowing effects matching system console aesthetics
- **Loading Animations**: Matrix-style loading indicators during operations
- **Error Handling**: Clear error messages and recovery suggestions
- **Responsive Design**: Adapts to different screen sizes

### Security & Performance
- **Local Storage**: Efficient client-side storage for workflow data
- **Header Authentication**: Secure API communication with authentication tokens
- **Performance Optimization**: Smart caching to reduce server load
- **Data Validation**: Input validation and sanitization

## Technical Features

### Code Organization
- **Modular Structure**: Well-organized HTML, CSS, and JavaScript
- **Component Separation**: Clear separation of concerns
- **CSS Variables**: Consistent styling with CSS custom properties
- **Event Handling**: Robust event listeners and handlers

### API Integration
- **n8n Integration**: Direct communication with n8n workflow API
- **GitHub API**: Seamless integration with GitHub repositories
- **RESTful Endpoints**: Clean API design for workflow operations
- **Error Handling**: Comprehensive error handling and user feedback

### Development Features
- **Debug Mode**: Console logging for development
- **Code Comments**: Well-documented code sections
- **CSS Animations**: Smooth transitions and effects
- **Browser Compatibility**: Works across modern browsers

## Future Enhancements
- Pull workflows from GitHub repositories
- Enhanced diff visualization
- Additional GitHub integration features
- Extended caching options
- More customization options for notifications
- Advanced workflow comparison tools

### **GitHub Integration**

- Push workflows directly to GitHub
- Commit new workflows directly to GitHub
- Auto-generate structured commit messages
- Pull workflows from GitHub into n8n

### **Change Detection**

- Identifies node additions, deletions, and property modifications
- Compares connections, settings, and configurations
- **Real-time visualization** of detected changes

### **Sleek UI for Effortless Control**

- **Matrix-style interface** for a futuristic feel
- Clear prompts to prevent accidental overwrites
- Interactive workflow commit & sync options

## 🔧 **Setup & Usage**

1. **Generate your n8n API key**
2. **Set up GitHub repository & access tokens**
3. **Create Generic Basic Auth credentials**
4. **Create Generic Header Auth credentials**
5. **Set the workflow variables**
6. **Deploy & start tracking your workflow versions**

## 📚 **Use Cases**

🔹 **Workflow Development** – Ensure clean versioning and commit history.  
🔹 **Team Collaboration** – Review and track modifications before deployment.  
🔹 **Audit & Compliance** – Maintain an organized change log.

## 🙌 **Built for the n8n Community**

Created with ❤️ to bring **reliable version control** to the n8n community.

## 🔗 Nodes Used

GitHub, Webhook, n8n, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
