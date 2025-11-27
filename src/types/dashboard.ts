import { Timestamp } from 'firebase/firestore';

/**
 * EcoVeridian Dashboard Types
 * Mirrors the data structure saved by the extension/backend to Firestore
 */

/** User stats document (Firestore: users/{uid}) */
export interface DashboardStats {
  totalSitesAnalyzed: number;
  averageEcoScore: number;
  highScoreSites: number;
  totalScoreSum?: number;
  lastActive?: Timestamp;
  createdAt?: Timestamp;
}

/** ESG Category Breakdown */
export interface ESGBreakdown {
  environmental: {
    score: number;
    highlights: string[];
    concerns: string[];
  };
  social: {
    score: number;
    highlights: string[];
    concerns: string[];
  };
  governance: {
    score: number;
    highlights: string[];
    concerns: string[];
  };
}

/** User history entry (Firestore: users/{uid}/history/{domain}) */
export interface AnalysisHistory {
  id: string; // document id (domain)
  domain: string;
  companyName: string;
  score: number; // ecoScore
  grade: string; // ecoGrade (A+, A, B, etc.)
  summary: string;
  timestamp: Timestamp | Date;
  sources: string[];
  breakdown?: ESGBreakdown;
}

/** Dashboard data bundle returned by getUserDashboardData */
export interface DashboardData {
  stats: DashboardStats;
  history: AnalysisHistory[];
}

/** Default stats when user has no data yet */
export const DEFAULT_STATS: DashboardStats = {
  totalSitesAnalyzed: 0,
  averageEcoScore: 0,
  highScoreSites: 0,
};
