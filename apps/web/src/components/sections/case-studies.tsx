import { Section } from '../ui/section';
import { Card } from '../ui/card';
import { CaseStudy } from '@/lib/types';

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export const CaseStudies = ({ caseStudies }: CaseStudiesProps) => {
  return (
    <Section id="case-studies">
      <h2 className="heading-2 mb-12 text-slate-50">
        Selected Case Studies
      </h2>

      <div className="space-y-8 md:space-y-12">
        {caseStudies.map((study, index) => (
          <Card key={study.id} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-xs font-semibold text-blue-600 mb-2">
                  Case Study {index + 1}
                </div>
                <h3 className="heading-3 text-xl md:text-2xl mb-6 text-slate-50">
                  {study.title}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-50 mb-2">
                      Context
                    </h4>
                    <p className="text-slate-400">
                      {study.context}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-50 mb-2">
                      Challenge
                    </h4>
                    <p className="text-slate-400">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-50 mb-2">
                      My Role
                    </h4>
                    <p className="text-slate-400">
                      {study.role}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-50 mb-2">
                      Technical Approach
                    </h4>
                    <p className="text-slate-400">
                      {study.technicalApproach}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-50 mb-2">
                      Outcome
                    </h4>
                    <p className="text-slate-400">
                      {study.outcome}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-50 mb-3">
                      Key Lessons
                    </h4>
                    <ul className="space-y-2">
                      {study.lessons.map((lesson, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-blue-600 font-bold flex-shrink-0">
                            →
                          </span>
                          <span className="text-slate-400 text-sm">
                            {lesson}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
