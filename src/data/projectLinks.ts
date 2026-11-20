/**
 * Centralized Project Links Registry
 *
 * Easily update the GitHub repository and live demo links here.
 * When clicked in the portfolio, each project will open its corresponding GitHub repository in a new tab.
 */

export interface ProjectLinkItem {
  id: string;
  name: string;
  githubUrl: string;
  liveUrl?: string;
  docsUrl?: string;
}

export const projectLinks: Record<string, ProjectLinkItem> = {
  'uthsava-admin': {
    id: 'uthsava-admin',
    name: 'Uthsava Admin Dashboard',
    githubUrl: 'https://github.com/TODO_GITHUB_USERNAME/uthsava-admin', // TODO: Paste your Uthsava Admin GitHub repo URL here
    liveUrl: 'https://uthsava-admin-demo.vercel.app',
  },
  'inventory-warehouse-mgmt': {
    id: 'inventory-warehouse-mgmt',
    name: 'Inventory & Warehouse Management System',
    githubUrl: 'https://github.com/TODO_GITHUB_USERNAME/warehouse-inventory-system', // TODO: Paste your Warehouse GitHub repo URL here
    liveUrl: 'https://warehouse-system-demo.vercel.app',
  },
  'ai-disaster-management': {
    id: 'ai-disaster-management',
    name: 'AI Wildfire & Disaster Response',
    githubUrl: 'https://github.com/TODO_GITHUB_USERNAME/ai-disaster-management', // TODO: Paste your AI Disaster Management GitHub repo URL here
    liveUrl: 'https://disaster-intelligence-demo.vercel.app',
  },
  'cancer-risk-prediction': {
    id: 'cancer-risk-prediction',
    name: 'Clinical Risk Prediction Model',
    githubUrl: 'https://github.com/TODO_GITHUB_USERNAME/lung-cancer-risk-ml', // TODO: Paste your Cancer Risk Model GitHub repo URL here
  },
};

/**
 * Helper to get links for a project ID with safe fallback
 */
export function getProjectLinks(projectId: string): ProjectLinkItem {
  return (
    projectLinks[projectId] || {
      id: projectId,
      name: 'Project',
      githubUrl: 'https://github.com/TODO_GITHUB_USERNAME',
    }
  );
}
