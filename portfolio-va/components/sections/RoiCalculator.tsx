'use client';

import React, { useState, useId } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import type { CalculatorContent } from '@/lib/types';

interface RoiCalculatorProps {
  content: CalculatorContent;
}

export function RoiCalculator({ content }: RoiCalculatorProps) {
  const hoursId = useId();
  const rateId = useId();
  const teamId = useId();

  // State for user inputs
  const [weeklyHours, setWeeklyHours] = useState<number>(content.inputs.hours.default);
  const [hourlyRate, setHourlyRate] = useState<number>(content.inputs.rate.default);
  const [teamSize, setTeamSize] = useState<number>(content.inputs.teamSize.default);

  // Calculations
  const efficiency = content.metrics.efficiencyRate; // 0.65
  const totalWeeklyHours = weeklyHours * teamSize;
  const weeklyHoursSaved = totalWeeklyHours * efficiency;
  const monthlyHoursSaved = Math.round(weeklyHoursSaved * 4.33);
  const annualHoursSaved = Math.round(weeklyHoursSaved * 52);
  const annualValueSaved = Math.round(annualHoursSaved * hourlyRate);

  // Recommendation logic
  const isRetainerFit = totalWeeklyHours >= 14 || teamSize > 1;

  return (
    <section
      id="roi-calculator"
      aria-labelledby="calculator-heading"
      className="w-full py-16 sm:py-24 border-b border-ink/15 scroll-mt-20"
    >
      <SectionHeading
        title={content.sectionTitle}
        subtitle={content.sectionSubtitle}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Sliders (7 cols) */}
        <div className="lg:col-span-7 bg-paper border border-ink p-6 sm:p-8 rounded-[2px] space-y-7">
          <div className="border-b border-ink/15 pb-4">
            <span className="font-mono text-xs text-ink-soft uppercase tracking-wider font-semibold block mb-1">
              INPUT PARAMETERS
            </span>
            <p className="font-body text-xs sm:text-sm text-ink-soft">
              Adjust the sliders below to match your team’s current operational reality.
            </p>
          </div>

          {/* Slider 1: Weekly Hours */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor={hoursId}
                className="font-body font-semibold text-sm sm:text-base text-ink"
              >
                {content.inputs.hours.label}
              </label>
              <span className="font-mono font-bold text-sm sm:text-base text-ink bg-paper-raised px-2.5 py-0.5 border border-ink/30 rounded-[2px] shrink-0">
                {weeklyHours} hrs/wk
              </span>
            </div>
            <p className="font-body text-xs text-ink-soft leading-relaxed">
              {content.inputs.hours.description}
            </p>
            <input
              id={hoursId}
              type="range"
              min={content.inputs.hours.min}
              max={content.inputs.hours.max}
              step={content.inputs.hours.step}
              value={weeklyHours}
              onChange={(e) => setWeeklyHours(Number(e.target.value))}
              aria-valuemin={content.inputs.hours.min}
              aria-valuemax={content.inputs.hours.max}
              aria-valuenow={weeklyHours}
              aria-valuetext={`${weeklyHours} hours per week`}
              className="w-full h-2 bg-paper-raised border border-ink/40 rounded-[2px] appearance-none cursor-pointer accent-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            />
            <div className="flex justify-between text-[10px] font-mono text-ink-soft pt-0.5">
              <span>{content.inputs.hours.min} hrs</span>
              <span>{content.inputs.hours.max} hrs</span>
            </div>
          </div>

          {/* Slider 2: Estimated Hourly Rate */}
          <div className="space-y-2.5 pt-2 border-t border-ink/10">
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor={rateId}
                className="font-body font-semibold text-sm sm:text-base text-ink"
              >
                {content.inputs.rate.label}
              </label>
              <span className="font-mono font-bold text-sm sm:text-base text-ink bg-paper-raised px-2.5 py-0.5 border border-ink/30 rounded-[2px] shrink-0">
                ${hourlyRate}/hr
              </span>
            </div>
            <p className="font-body text-xs text-ink-soft leading-relaxed">
              {content.inputs.rate.description}
            </p>
            <input
              id={rateId}
              type="range"
              min={content.inputs.rate.min}
              max={content.inputs.rate.max}
              step={content.inputs.rate.step}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              aria-valuemin={content.inputs.rate.min}
              aria-valuemax={content.inputs.rate.max}
              aria-valuenow={hourlyRate}
              aria-valuetext={`$${hourlyRate} per hour`}
              className="w-full h-2 bg-paper-raised border border-ink/40 rounded-[2px] appearance-none cursor-pointer accent-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            />
            <div className="flex justify-between text-[10px] font-mono text-ink-soft pt-0.5">
              <span>${content.inputs.rate.min}/hr</span>
              <span>${content.inputs.rate.max}/hr</span>
            </div>
          </div>

          {/* Slider 3: Team Size */}
          <div className="space-y-2.5 pt-2 border-t border-ink/10">
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor={teamId}
                className="font-body font-semibold text-sm sm:text-base text-ink"
              >
                {content.inputs.teamSize.label}
              </label>
              <span className="font-mono font-bold text-sm sm:text-base text-ink bg-paper-raised px-2.5 py-0.5 border border-ink/30 rounded-[2px] shrink-0">
                {teamSize} {teamSize === 1 ? 'person' : 'people'}
              </span>
            </div>
            <p className="font-body text-xs text-ink-soft leading-relaxed">
              {content.inputs.teamSize.description}
            </p>
            <input
              id={teamId}
              type="range"
              min={content.inputs.teamSize.min}
              max={content.inputs.teamSize.max}
              step={content.inputs.teamSize.step}
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              aria-valuemin={content.inputs.teamSize.min}
              aria-valuemax={content.inputs.teamSize.max}
              aria-valuenow={teamSize}
              aria-valuetext={`${teamSize} people`}
              className="w-full h-2 bg-paper-raised border border-ink/40 rounded-[2px] appearance-none cursor-pointer accent-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            />
            <div className="flex justify-between text-[10px] font-mono text-ink-soft pt-0.5">
              <span>{content.inputs.teamSize.min} person</span>
              <span>{content.inputs.teamSize.max} people</span>
            </div>
          </div>

          {/* Footnote on methodology */}
          <p className="font-mono text-[11px] text-ink-soft/70 pt-3 border-t border-ink/10 leading-snug">
            {content.footnote}
          </p>
        </div>

        {/* Right Column: Output Card (5 cols) */}
        <div className="lg:col-span-5 border-2 border-ink bg-paper-raised p-6 sm:p-8 rounded-[2px] shadow-brutal flex flex-col justify-between">
          <div>
            <div className="border-b border-ink/20 pb-4 mb-6">
              <span className="inline-block border border-ink bg-paper px-2.5 py-0.5 text-xs font-mono text-ink tracking-wider font-semibold rounded-[2px] mb-2">
                PROJECTED ANNUAL IMPACT
              </span>
              <h3 className="font-display font-medium text-2xl text-ink tracking-tight">
                Efficiency Breakdown
              </h3>
            </div>

            {/* Primary Stat: Annual Hours Saved */}
            <div className="bg-paper p-5 border border-ink/30 rounded-[2px] mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-soft block mb-1">
                {content.metrics.hoursReclaimedAnnual}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-4xl sm:text-5xl text-ink tracking-tight">
                  {annualHoursSaved.toLocaleString()}
                </span>
                <span className="font-mono text-sm text-ink-soft font-semibold">hours</span>
              </div>
              <p className="font-body text-xs text-ink-soft mt-1">
                $\approx$ {monthlyHoursSaved} hours reclaimed every month.
              </p>
            </div>

            {/* Financial Value Reclaimed */}
            <div className="bg-paper p-5 border border-ink/30 rounded-[2px] mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-soft block mb-1">
                {content.metrics.annualValueReclaimed}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-3xl sm:text-4xl text-accent tracking-tight">
                  ${annualValueSaved.toLocaleString()}
                </span>
                <span className="font-mono text-xs text-ink-soft font-medium">/ year</span>
              </div>
              <p className="font-body text-xs text-ink-soft mt-1">
                Direct capacity unlocked for growth, sales, and core product work.
              </p>
            </div>

            {/* Recommendation Box */}
            <div className="border-t border-ink/15 pt-5 mb-6">
              <span className="font-mono text-[11px] font-bold text-accent uppercase tracking-widest block mb-1.5">
                ● {content.recommendations.badge}
              </span>
              <h4 className="font-display font-semibold text-lg text-ink mb-1.5">
                {isRetainerFit
                  ? content.recommendations.retainerTitle
                  : content.recommendations.sprintTitle}
              </h4>
              <p className="font-body text-xs text-ink-soft leading-relaxed">
                {isRetainerFit
                  ? content.recommendations.retainerCondition
                  : content.recommendations.sprintCondition}
              </p>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full text-center"
            >
              <span>{content.recommendations.ctaLabel}</span>
              <span aria-hidden="true">→</span>
            </Button>
            <p className="font-mono text-[10px] text-ink-soft/70 text-center mt-3">
              Zero obligation · Scoped to your specific workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
