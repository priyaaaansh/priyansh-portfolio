import { Project } from '../types';
import { getProjectLinks } from './projectLinks';

/**
 * Projects Data Source
 * Centralized registry for all projects.
 * Link details are maintained in ./projectLinks.ts
 */
export const projects: Project[] = [
  {
    id: 'uthsava-admin',
    title: 'Uthsava Admin',
    tagline: 'Multi-tenant Enterprise OTT Admin & Content Moderation Suite',
    shortDescription: 'Multi-tenant admin dashboard centralizing content approvals, producer management, payouts, and audit logs with real-time state sync.',
    longerDescription: 'Engineered as the administrative backbone for Uthsava Entertainment streaming platform. Features high-security RBAC, producer royalty settlement calculators, streaming asset transcoding status pipelines, and real-time state synchronization with optimistic UI updates.',
    tech: ['React.js', 'TypeScript', 'TanStack Start', 'TanStack Query', 'Node.js', 'MongoDB', 'AWS S3', 'Tailwind CSS'],
    githubUrl: getProjectLinks('uthsava-admin').githubUrl,
    liveUrl: getProjectLinks('uthsava-admin').liveUrl,
    image: './images/uthsava-admin.svg',
    featured: true,
    category: 'Frontend / Dashboard',
    metrics: [
      'Multi-tenant RBAC access controls',
      'Real-time streaming catalog moderation',
      'Automated producer payout calculations',
      'Optimistic locking for concurrent data updates'
    ],
    highlights: [
      'Built SSR interfaces and REST catalog APIs for high-performance dashboard loading.',
      'Implemented transactional audit logging to track content approval state changes.',
      'Streamlined media uploads with presigned AWS S3 URLs and BullMQ background transcoding queues.'
    ]
  },
  {
    id: 'inventory-warehouse-mgmt',
    title: 'Inventory & Warehouse Management',
    tagline: 'Automated FEFO/FIFO Inventory & PO Approval Engine',
    shortDescription: 'Scalable warehouse logistics platform with hierarchical storage slotting, automated purchase orders, and asynchronous queue processing.',
    longerDescription: 'A robust warehouse management system engineered to streamline supply chain logistics. Features multi-warehouse slotting algorithms, FEFO/FIFO batch tracking, PO authorization workflows, and background email dispatchers powered by BullMQ and Redis.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'BullMQ', 'Redis', 'Tailwind CSS'],
    githubUrl: getProjectLinks('inventory-warehouse-mgmt').githubUrl,
    liveUrl: getProjectLinks('inventory-warehouse-mgmt').liveUrl,
    image: './images/warehouse.svg',
    featured: true,
    category: 'Full Stack',
    metrics: [
      'Zero inventory mismatch via ACID transactions',
      'Automated supplier dispatch within <2 seconds',
      'Real-time stock alerts via Redis Pub/Sub'
    ],
    highlights: [
      'Developed interactive hierarchical storage tree views using TanStack Query caching.',
      'Engineered automated return-to-vendor (RTV) and invoice-matching workflows.',
      'Containerized background queue workers for reliable PO email delivery.'
    ]
  },
  {
    id: 'ai-disaster-management',
    title: 'AI Wildfire & Disaster Response',
    tagline: 'Satellite Anomaly Detection & Emergency Resource Allocation',
    shortDescription: 'Geospatial hazard intelligence platform combining NASA FIRMS satellite data with ML anomaly detection for real-time wildfire triage.',
    longerDescription: 'Leverages live satellite telemetry from NASA FIRMS to detect thermal hotspots across forest regions. Employs statistical Z-score anomaly detection and Random Forest models to calculate wildfire velocity, prioritizing emergency personnel and aerial assets on interactive tactical maps.',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Supabase', 'NASA FIRMS API', 'Leaflet.js', 'React.js'],
    githubUrl: getProjectLinks('ai-disaster-management').githubUrl,
    liveUrl: getProjectLinks('ai-disaster-management').liveUrl,
    image: './images/disaster-ai.svg',
    featured: true,
    category: 'AI / ML',
    metrics: [
      'NASA FIRMS thermal telemetry integration',
      'Z-score anomaly thresholding algorithm',
      'Tactical coordinate mapping with Leaflet.js'
    ],
    highlights: [
      'Aggregated high-resolution thermal anomaly feeds with low-latency Supabase storage.',
      'Trained predictive classification models to distinguish controlled burns from spreading wildfires.',
      'Designed a situational incident commander interface with dynamic geographic radius overlays.'
    ]
  },
  {
    id: 'cancer-risk-prediction',
    title: 'Clinical Risk Prediction Model',
    tagline: 'High-Precision Diagnostic Classifier with 94% Recall',
    shortDescription: 'Machine learning clinical decision engine achieving 85.92% classification accuracy and 94% recall for early risk stratification.',
    longerDescription: 'Comprehensive biomedical data modeling project focusing on patient screening datasets. Employs rigorous feature engineering, SMOTE balancing, hyperparameter grid search, and explainable AI feature importance plots to aid diagnostic decision making.',
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Matplotlib', 'Pandas', 'FastAPI'],
    githubUrl: getProjectLinks('cancer-risk-prediction').githubUrl,
    image: './images/cancer-risk.svg',
    featured: false,
    category: 'AI / ML',
    metrics: [
      '85.92% Accuracy on holdout validation',
      '94.00% High sensitivity recall rate',
      'Sub-50ms inference latency'
    ],
    highlights: [
      'Tuned ensemble Random Forest and Logistic Regression models with rigorous 10-fold cross validation.',
      'Generated clinical feature attribution plots identifying top risk determinants.',
      'Packaged trained models into a lightweight REST endpoint ready for EHR integration.'
    ]
  }
];
