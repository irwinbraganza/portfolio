import { Injectable } from '@nestjs/common';
import { ProfileDto } from '../common/dtos/profile.dto';
import { ProjectsDto, CaseStudyDto } from '../common/dtos/projects.dto';
import { ArchitectureDto } from '../common/dtos/architecture.dto';

@Injectable()
export class DataService {
  getProfile(): ProfileDto {
    return {
      name: 'Irwin Braganza',
      title: 'Acting Engineering Manager / Senior Software Engineer (IC3)',
      tagline: 'I lead engineering delivery and build distributed systems that coordinate real-time physical operations.',
      secondaryTagline: 'Engineering leader with 10+ years of experience across full-stack development, distributed systems, event-driven architecture, architectural ownership, and cross-functional delivery.',
      about: `I am an Acting Engineering Manager and Senior Software Engineer with more than 10 years of experience building full-stack products and distributed systems. At Delivery Hero, I combine hands-on engineering with architectural ownership, cross-functional coordination, mentoring, planning, and delivery leadership for platforms supporting physical logistics and operational workflows.\n\nMy experience spans TypeScript and Node.js services, React applications, GraphQL APIs, asynchronous processing with Google Cloud Pub/Sub, operational data systems, cloud infrastructure, and production visibility.`,
      leadershipThemes: [
        'End-to-end initiative ownership',
        'Sprint planning and backlog shaping',
        'Cross-functional coordination',
        'Architectural decision-making',
        'Mentoring and onboarding',
        'Design and code reviews',
        'Stakeholder alignment',
        'Technical-debt stewardship',
        'Delivery through ambiguity',
        'Product and business awareness',
        'Reliability and operational ownership',
        'Positive team influence'
      ],
      leadershipRecognition: 'Recognized in 2025 manager and peer feedback for end-to-end ownership, technical depth, cross-team execution, product and business awareness, delivery through ambiguity, and positive team influence.',
      languages: 'English (ielts C1) | German (telc A1) | Konkani (native) | Hindi (fluent)',
      links: {
        linkedin: 'https://linkedin.com/in/irwinbraganza',
        github: 'https://github.com/irwinbraganza',
        email: 'irwinbraganza@gmail.com'
      },
      location: 'Berlin, Germany'
    };
  }

  getProjects(): ProjectsDto {
    const caseStudies: CaseStudyDto[] = [
      {
        id: 'operational-platform',
        title: 'Operational Platform Ownership',
        context: 'Pepper Sales and Partner Central support operational and commercial workflows across Delivery Hero\'s Global Food Services organisation. Their capabilities span sales data, partner acquisition, lead qualification, facility operations, and integrations with other business systems.',
        challenge: 'Delivering the tagging ecosystem required aligning product requirements, business definitions, BigQuery-sourced data, backend models, GraphQL APIs, filtering behaviour, and user interfaces. The work crossed Product, BI, Data, and engineering boundaries and evolved over multiple initiatives.',
        role: 'Senior Software Engineer and technical owner',
        technicalApproach: 'Designed and evolved a full-stack tagging capability across lead, brand, kitchen, and custom-tag workflows. Integrated data from BigQuery, developed TypeScript and Node.js backend functionality using Koa.js and GraphQL, extended data models and APIs, and delivered React-based filtering and user-interface capabilities.\n\nBroke the initiative into incremental deliverables, clarified dependencies and data semantics with Product, BI, and Data stakeholders, and supported other engineers through technical guidance and reviews.',
        outcome: 'Delivered a cohesive tagging ecosystem that gives sales users clearer information for understanding, filtering, and segmenting leads and brands. Established maintainable patterns across the data, backend, and frontend layers while enabling multiple contributors to work within the domain.',
        lessons: [
          'Align data semantics before implementing cross-system features',
          'Break multi-layer initiatives into independently deliverable increments',
          'Keep API contracts explicit when several teams depend on the same domain',
          'Design for future tag types and workflows rather than individual use cases',
          'Treat usability and business meaning as architectural concerns'
        ]
      },
      {
        id: 'event-driven-systems',
        title: 'Event-Driven and Operational Systems',
        context: 'Delivery Hero\'s operational platforms process changing order, facility, partner, sales, and logistics states across multiple applications and integrations.',
        challenge: 'These systems must coordinate asynchronous workflows, remain reliable when dependencies fail, protect data integrity, and provide sufficient visibility for engineers and operational teams to understand production behaviour.',
        role: 'Senior Software Engineer contributing architecture, implementation, incident resolution, reliability improvements, and technical ownership across operationally important services.',
        technicalApproach: 'Built and maintained TypeScript and Node.js services using Koa.js, GraphQL, MongoDB, Redis, and Google Cloud Pub/Sub. Contributed to asynchronous processing, background jobs, data synchronisation, and operational state transitions.\n\nRe-architected stall scheduling around an event-sourced model, improved resource-intensive processing through incremental and batched workflows, strengthened logging, monitoring, and production visibility, and resolved high-priority issues affecting live operational flows.\n\nDesigned consumers and workflows to tolerate retries and repeated delivery through defensive validation, idempotent handling where required, and safe production migrations.',
        outcome: 'Improved the scalability, maintainability, and production visibility of critical workflows. Reduced risk in background processing and data synchronisation while supporting continued delivery across interconnected operational systems.',
        lessons: [
          'Consumers should tolerate at-least-once delivery through idempotent processing and deduplication where required'
        ]
      },
      {
        id: 'engineering-leadership',
        title: 'Engineering Leadership and Team Enablement',
        context: 'Complex platform work requires engineers to coordinate across product areas, understand historical system decisions, and deliver safely while priorities and requirements continue to evolve.',
        challenge: 'The team needed clear initiative breakdowns, architectural direction, effective onboarding, consistent reviews, and sufficient autonomy for multiple engineers to contribute without losing domain integrity.',
        role: 'Acting Engineering Manager / Senior Software Engineer',
        technicalApproach: 'Supported sprint planning and backlog shaping, clarified requirements with Product and business stakeholders, and broke large initiatives into structured epics and shippable increments.\n\nIntroduced separate product and technical refinement, grouped work into epics before execution, encouraged paired ownership for major initiatives, and supported multiple initiatives running in parallel.\n\nMentored and onboarded engineers through regular technical discussions, code and design reviews, domain walkthroughs, and progressively increasing ownership. Provided architectural guidance while creating space for other engineers to contribute independently.',
        outcome: 'Improved delivery clarity, supported effective contributor onboarding, and enabled engineers to take meaningful ownership within complex product areas. Strengthened collaboration among Engineering, Product, Data, BI, Design, Operations, and business stakeholders.',
        lessons: [
          'Planning should create clarity without becoming bureaucracy',
          'Large initiatives become safer when divided into reviewable increments',
          'Mentoring works best when paired with real ownership',
          'Technical context should be documented and shared rather than concentrated',
          'Delegation creates capacity for higher-level technical and people leadership'
        ]
      }
    ];

    return { caseStudies };
  }

  getArchitecture(): ArchitectureDto {
    return {
      title: 'How I Approach Real-Time Operational Systems',
      description: 'Operational platforms must process continuous state changes, coordinate asynchronous services, tolerate partial failures, protect data integrity, and provide visibility into production behaviour. These engineering principles apply across logistics, mobility, energy, IoT, supply chain, marketplaces, and industrial platforms.',
      diagram: {
        stages: [
          'Operational Events',
          'Google Cloud Pub/Sub',
          'TypeScript / Node.js Services',
          'Validation and Business Rules',
          'MongoDB / Redis',
          'BigQuery / Logging / Monitoring'
        ],
        explanation: 'Operational events are published through Google Cloud Pub/Sub and consumed by TypeScript and Node.js services. Consumers validate data, apply domain rules, and update persistent or cached state using MongoDB and Redis. BigQuery supports analytical workflows, while logging and monitoring provide production visibility.'
      },
      topics: [
        'Event ingestion',
        'Message validation',
        'Idempotent processing',
        'Retries and failure handling',
        'State transitions',
        'Data consistency',
        'Service boundaries',
        'Logging, monitoring, and production visibility',
        'Safe migrations',
        'Deployment and rollback safety',
        'Operational ownership',
        'Technical-debt management'
      ],
      technologies: {
        leadership: [
          'Acting Engineering Management',
          'Technical Leadership',
          'Cross-Functional Delivery',
          'Sprint Planning',
          'Backlog Shaping',
          'Stakeholder Alignment',
          'Mentoring and Onboarding',
          'System Design',
          'Architectural Decision-Making',
          'Design and Code Reviews',
          'Reliability Ownership',
          'Technical-Debt Management'
        ],
        backend: [
          'TypeScript',
          'JavaScript',
          'Node.js',
          'Koa.js',
          'GraphQL',
          'Apollo Server',
          'TypeGraphQL',
          'Google Cloud Pub/Sub',
          'MongoDB',
          'Redis',
          'SQL',
          'MySQL',
          'Event-Driven Architecture',
          'Distributed Systems'
        ],
        frontend: [
          'React',
          'Next.js',
          'Apollo Client',
          'Chakra UI',
          'React Hook Form',
          'Jest',
          'Cypress',
          'GraphQL Code Generator'
        ],
        cloud: [
          'Google Cloud Platform',
          'Google Kubernetes Engine',
          'BigQuery',
          'Kubernetes',
          'Terraform',
          'Helm',
          'GitHub Actions',
          'Drone CI',
          'Docker',
          'Datadog',
          'Graphana'
        ]
      }
    };
  }
}
