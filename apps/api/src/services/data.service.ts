import { Injectable } from '@nestjs/common';
import { ProfileDto } from '../common/dtos/profile.dto';
import { ProjectsDto, CaseStudyDto } from '../common/dtos/projects.dto';
import { ArchitectureDto } from '../common/dtos/architecture.dto';

@Injectable()
export class DataService {
  getProfile(): ProfileDto {
    return {
      name: 'Irwin Braganza',
      title: 'Acting Engineering Manager / Senior Software Engineer',
      tagline: 'I lead engineering teams and build distributed systems that coordinate real-time physical operations.',
      secondaryTagline: 'Engineering leader with 10+ years of experience across full-stack development, distributed systems, event-driven architecture, cross-functional delivery, and technical team leadership.',
      about: `I am an engineering leader and senior software engineer with more than 10 years of experience building full-stack products and distributed systems. At Delivery Hero, I combine hands-on technical leadership with cross-functional execution, architectural ownership, mentoring, and delivery planning for platforms supporting real-time physical operations.`,
      leadershipThemes: [
        'End-to-end ownership',
        'Team mentoring and onboarding',
        'Sprint planning and backlog shaping',
        'Cross-functional coordination',
        'Architectural decision-making',
        'Stakeholder alignment',
        'Technical debt management',
        'Delivery through ambiguity',
        'Product and business awareness',
        'Positive team influence'
      ],
      performanceRating: '2025: Exceeding',
      performanceText: 'Recognized for end-to-end ownership, technical depth, cross-team execution, product awareness, execution across the full delivery lifecycle, and positive team influence.',
      links: {
        linkedin: 'https://linkedin.com/in/irwinbraganza',
        github: 'https://github.com/irwinbraganza',
        email: 'mailto:irwin.braganza@deliveryhero.com'
      }
    };
  }

  getProjects(): ProjectsDto {
    const caseStudies: CaseStudyDto[] = [
      {
        id: 'operational-platform',
        title: 'Operational Platform Ownership',
        context: 'Ownership across Pepper Sales and Partner Central at Delivery Hero.',
        challenge: 'Translating ambiguous business requirements into scalable systems while coordinating across Product, BI, Data, and business stakeholders to enable steady delivery.',
        role: 'Lead Engineer, Platform Architect, Cross-functional Coordinator',
        technicalApproach: 'Built event-driven microservices using TypeScript and NestJS, established clear service boundaries with Google Cloud Pub/Sub for asynchronous workflows, implemented idempotent state transitions, and created observability patterns with OpenTelemetry and Grafana.',
        outcome: 'Enabled consistent feature delivery across multiple business units, reduced operational friction through clear API contracts, and established patterns reused across other platform teams.',
        lessons: [
          'Clear API contracts prevent misalignment across teams',
          'Idempotency is non-negotiable for operational systems',
          'Observability from day one catches distributed issues early',
          'Stakeholder alignment on data semantics saves rework'
        ]
      },
      {
        id: 'event-driven-systems',
        title: 'Event-Driven Distributed Systems',
        context: 'Building reliable asynchronous workflows for real-time operational coordination across logistics and marketplace domains.',
        challenge: 'Designing systems that handle continuous state changes, tolerate service failures, maintain consistency across async boundaries, and provide visibility into system behavior in production.',
        role: 'Principal Engineer, Systems Architect',
        technicalApproach: 'Implemented event sourcing patterns with Redis and MongoDB for state management, designed retry strategies with exponential backoff and dead-letter queues, built idempotency through request deduplication, and created distributed tracing for end-to-end visibility.',
        outcome: 'Achieved 99.9% message delivery reliability, reduced mean time to resolution (MTTR) for operational issues, and established reusable patterns for async communication across the platform.',
        lessons: [
          'Exactly-once semantics is achievable through idempotency and deduplication',
          'Failure modes in distributed systems are different; test them explicitly',
          'Observability is not optional; it is a first-class requirement',
          'Consensus and ordering matter more than raw throughput'
        ]
      },
      {
        id: 'engineering-leadership',
        title: 'Engineering Leadership and Team Enablement',
        context: 'Building high-performing engineering teams through mentoring, clear systems thinking, and structured delivery processes.',
        challenge: 'Scaling delivery velocity while maintaining code quality, knowledge sharing, and individual development, especially during periods of high ambiguity and shifting priorities.',
        role: 'Acting Engineering Manager, Tech Lead, Mentor',
        technicalApproach: 'Established sprint cadences with clear backlogs and architectural decision records (ADRs), created onboarding patterns and code review standards, designed mentoring programs paired with real project ownership, and built feedback loops for continuous improvement.',
        outcome: 'Improved team velocity by establishing clear processes, increased knowledge distribution through structured mentoring, and created a culture of thoughtful architectural decisions.',
        lessons: [
          'Process exists to enable shipping, not to constrain it',
          'Early mentoring on system design compounds over time',
          'Writing down decisions makes future engineers smarter',
          'Psychological safety enables the best technical discussions'
        ]
      }
    ];

    return { caseStudies };
  }

  getArchitecture(): ArchitectureDto {
    return {
      title: 'How I Design Real-Time Systems',
      description: 'Real-world operational platforms must process continuous state changes, coordinate asynchronous services, tolerate failures, and provide visibility into system behaviour. The same engineering principles apply across logistics, mobility, energy, IoT, supply chain, marketplaces, and industrial platforms.',
      diagram: {
        stages: [
          'Operational Events',
          'Message Broker / Google Cloud Pub/Sub',
          'TypeScript Services',
          'State Processing and Business Rules',
          'Redis / MongoDB',
          'Analytics and Observability'
        ],
        explanation: 'Events flow through a message broker to service handlers, which apply business rules and update state, enabling analytics and operational visibility.'
      },
      topics: [
        'Event ingestion',
        'Idempotency',
        'Retries and failure handling',
        'State transitions',
        'Data consistency',
        'Service boundaries',
        'Observability',
        'Deployment safety',
        'Operational ownership'
      ],
      technologies: {
        leadership: [
          'Acting Engineering Management',
          'Technical Strategy',
          'Mentoring',
          'Agile Delivery',
          'Sprint Planning',
          'Stakeholder Management',
          'System Design',
          'Architectural Decision-Making'
        ],
        backend: [
          'TypeScript',
          'Node.js',
          'NestJS',
          'Koa.js',
          'GraphQL',
          'Apollo Server',
          'REST APIs',
          'Redis',
          'MongoDB',
          'Google Cloud Pub/Sub',
          'Event-Driven Architecture',
          'Distributed Systems'
        ],
        frontend: [
          'Next.js',
          'React',
          'Apollo Client',
          'Chakra UI',
          'React Hook Form',
          'Jest',
          'Cypress'
        ],
        cloud: [
          'GCP',
          'GKE',
          'BigQuery',
          'Kubernetes',
          'Terraform',
          'Helm',
          'GitHub Actions',
          'Drone CI',
          'OpenTelemetry',
          'Grafana Faro'
        ]
      }
    };
  }
}
