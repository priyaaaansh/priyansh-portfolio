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
    githubUrl: 'https://github.com/priyaaaansh/uthsava-admin',
    liveUrl: 'https://uthsava-admin-demo.vercel.app',
  },
  'inventory-warehouse-mgmt': {
    id: 'inventory-warehouse-mgmt',
    name: 'Inventory & Warehouse Management System',
    githubUrl: 'https://github.com/priyaaaansh/warehouse-inventory-system',
    liveUrl: 'https://warehouse-system-demo.vercel.app',
  },
  'ai-disaster-management': {
    id: 'ai-disaster-management',
    name: 'AI Wildfire & Disaster Response',
    githubUrl: 'https://github.com/priyaaaansh/ai-disaster-management',
    liveUrl: 'https://disaster-intelligence-demo.vercel.app',
  },
  'cancer-risk-prediction': {
    id: 'cancer-risk-prediction',
    name: 'Clinical Risk Prediction Model',
    githubUrl: 'https://github.com/priyaaaansh/lung-cancer-risk-ml',
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
      githubUrl: 'https://github.com/priyaaaansh',
    }
  );
}

