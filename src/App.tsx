/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Brain, 
  CheckCircle2, 
  Info,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { QUESTIONS, PERSONALITY_TYPES } from './constants';
import { Dichotomy } from './types';

type Answer = 1 | 2 | 3 | 4 | 5; // Strongly Disagree to Strongly Agree

export default function App() {
  const [step, setStep] = useState<'landing' | 'quiz' | 'result'>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});

  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (value: Answer) => {
    setAnswers(prev => ({ ...prev, [QUESTIONS[currentQuestionIndex].id]: value }));
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep('result');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setStep('landing');
    }
  };

  const result = useMemo(() => {
    if (step !== 'result') return null;

    const scores: Record<Dichotomy, number> = {
      EI: 0,
      SN: 0,
      TF: 0,
      JP: 0
    };

    const counts: Record<Dichotomy, number> = {
      EI: 0,
      SN: 0,
      TF: 0,
      JP: 0
    };

    QUESTIONS.forEach(q => {
      const answer = answers[q.id];
      if (answer) {
        // Normalize answer to -2 to 2
        const normalized = (answer - 3) * q.direction;
        scores[q.dichotomy] += normalized;
        counts[q.dichotomy]++;
      }
    });

    const type = [
      scores.EI <= 0 ? 'E' : 'I',
      scores.SN <= 0 ? 'S' : 'N',
      scores.TF <= 0 ? 'T' : 'F',
      scores.JP <= 0 ? 'J' : 'P'
    ].join('');

    return PERSONALITY_TYPES[type];
  }, [answers, step]);

  const progress = (Object.keys(answers).length / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        
        <AnimatePresence mode="wait">
          {step === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gray-500">
                  <Brain size={16} />
                  Psychological Assessment
                </div>
                <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9]">
                  Discover Your <br />
                  <span className="italic font-serif">True Self.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-xl font-light leading-relaxed">
                  Take our comprehensive MBTI personality test to gain insights into your behavior, 
                  preferences, and how you interact with the world.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <CheckCircle2 size={20} />, title: "Scientific", desc: "Based on Jungian psychology" },
                  { icon: <Info size={20} />, title: "Insightful", desc: "Detailed personality analysis" },
                  { icon: <Sparkles size={20} />, title: "Fast", desc: "Takes only 5 minutes" }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-gray-200 space-y-3">
                    <div className="text-black">{item.icon}</div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={handleStart}
                className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform"
              >
                Start Assessment
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase text-gray-400">Question {currentQuestionIndex + 1} of {QUESTIONS.length}</span>
                    <div className="h-1 w-48 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-black" 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <button 
                    onClick={handleBack}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-black transition-colors"
                  >
                    <ChevronLeft size={16} />
                    Back
                  </button>
                </div>

                <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight min-h-[120px]">
                  {QUESTIONS[currentQuestionIndex].text}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "Strongly Agree", value: 5, color: "bg-black text-white" },
                  { label: "Agree", value: 4, color: "bg-white text-black border-gray-200" },
                  { label: "Neutral", value: 3, color: "bg-white text-black border-gray-200" },
                  { label: "Disagree", value: 2, color: "bg-white text-black border-gray-200" },
                  { label: "Strongly Disagree", value: 1, color: "bg-gray-100 text-gray-400" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value as Answer)}
                    className={`
                      flex items-center justify-between p-6 rounded-2xl border transition-all hover:border-black
                      ${option.color}
                    `}
                  >
                    <span className="text-lg font-medium">{option.label}</span>
                    <ChevronRight size={20} />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-12"
            >
              <div className="space-y-6 text-center md:text-left">
                <div className="inline-block px-4 py-1 bg-black text-white text-xs font-mono uppercase tracking-widest rounded-full">
                  Your Personality Type
                </div>
                <div className="space-y-2">
                  <h1 className="text-8xl md:text-9xl font-black tracking-tighter">
                    {result.type}
                  </h1>
                  <h2 className="text-3xl md:text-5xl font-serif italic text-gray-600">
                    {result.title}
                  </h2>
                </div>
                <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed mx-auto md:mx-0">
                  {result.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2">Core Traits</h3>
                  <ul className="space-y-2">
                    {result.traits.map((trait, i) => (
                      <li key={i} className="flex items-center gap-2 text-lg">
                        <div className="w-1.5 h-1.5 bg-black rounded-full" />
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2">Strengths</h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-lg text-green-700">
                        <CheckCircle2 size={16} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2">Weaknesses</h3>
                  <ul className="space-y-2">
                    {result.weaknesses.map((w, i) => (
                      <li key={i} className="flex items-center gap-2 text-lg text-red-700">
                        <div className="w-1.5 h-1.5 bg-red-700 rounded-full" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="text-sm text-gray-500 font-light">
                  Remember, personality is fluid. This is just a snapshot of your current preferences.
                </div>
                <button
                  onClick={handleStart}
                  className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
                >
                  <RotateCcw size={18} />
                  Retake Test
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      
      <footer className="fixed bottom-0 left-0 w-full p-6 text-center text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 pointer-events-none">
        MBTI Personality Insights &copy; 2026
      </footer>
    </div>
  );
}
