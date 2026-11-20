import { Project } from '../types';

/**
 * Projects Data Source
 * To add a new project, simply append an object matching the Project interface.
 * The UI, bento showcase, filters, and detail modals will dynamically render it.
 */
export const projects: Project[] = [
  {
    id: 'uthsava-admin',
    title: 'Uthsava Admin',
    tagline: 'Multi-tenant Enterprise OTT Admin & Content Moderation Suite',
    shortDescription: 'Multi-tenant admin dashboard centralizing content approvals, producer management, payouts, and audit logs with real-time state sync.',
    longerDescription: 'Engineered as the administrative backbone for Uthsava Entertainment streaming platform. Features high-security RBAC, producer royalty settlement calculators, streaming asset transcoding status pipelines, and real-time state synchronization with optimistic UI updates.',
    tech: ['React.js', 'TypeScript', 'TanStack Start', 'TanStack Query', 'Node.js', 'MongoDB', 'AWS S3', 'Tailwind CSS'],
    githubUrl: 'https://github.com/TODO_GITHUB_USERNAME/uthsava-admin', // TODO: Update with your repo link
    liveUrl: 'https://TODO-uthsava-admin-demo.vercel.app', // Optional live demo placeholder
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
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
    githubUrl: 'https://github.com/TODO_GITHUB_USERNAME/warehouse-inventory-system', // TODO: Update with your repo link
    liveUrl: 'https://TODO-warehouse-system.vercel.app',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
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
    githubUrl: 'https://github.com/TODO_GITHUB_USERNAME/ai-disaster-management', // TODO: Update with your repo link
    liveUrl: 'https://TODO-disaster-intelligence.vercel.app',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80',
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
    githubUrl: 'https://github.com/TODO_GITHUB_USERNAME/lung-cancer-risk-ml', // TODO: Update with your repo link
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
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

