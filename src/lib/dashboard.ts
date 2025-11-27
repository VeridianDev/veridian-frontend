import { db, auth } from '@/lib/firebase';
import { doc, getDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { DEFAULT_STATS } from '@/types/dashboard';
import type { DashboardData, DashboardStats, AnalysisHistory } from '@/types/dashboard';

// use shared DEFAULT_STATS from types when user has no data yet

/**
 * Fetch the current user's dashboard data from Firestore.
 * - Stats: users/{uid}
 * - History: users/{uid}/history (ordered by timestamp desc, limit 50)
 */
export async function getUserDashboardData(): Promise<DashboardData | null> {
  const user = auth.currentUser;
  if (!user) return null;

  try {
    // 1. Fetch user stats document
    const statsSnap = await getDoc(doc(db, 'users', user.uid));
    const rawStats = statsSnap.exists() ? statsSnap.data() : null;

    const stats: DashboardStats = rawStats
      ? {
          totalSitesAnalyzed: rawStats.totalSitesAnalyzed ?? DEFAULT_STATS.totalSitesAnalyzed,
          averageEcoScore: rawStats.averageEcoScore ?? DEFAULT_STATS.averageEcoScore,
          highScoreSites: rawStats.highScoreSites ?? DEFAULT_STATS.highScoreSites,
          totalScoreSum: rawStats.totalScoreSum,
          lastActive: rawStats.lastActive,
          createdAt: rawStats.createdAt,
        }
      : DEFAULT_STATS;

    // 2. Fetch history subcollection
    const historyQuery = query(
      collection(db, 'users', user.uid, 'history'),
      orderBy('timestamp', 'desc'),
      limit(50)
    );
    const historySnap = await getDocs(historyQuery);

    const history: AnalysisHistory[] = historySnap.docs.map((d) => {
      const data = d.data();
      return {
        id: d.id,
        domain: data.domain ?? d.id,
        companyName: data.companyName ?? data.domain ?? d.id,
        score: data.ecoScore ?? data.score ?? 0,
        grade: data.ecoGrade ?? data.grade ?? 'N/A',
        summary: data.summary ?? '',
        timestamp: data.timestamp, // Firestore Timestamp or null
        sources: Array.isArray(data.sources) ? data.sources : [],
        breakdown: data.breakdown,
      };
    });

    return { stats, history };
  } catch (err) {
    console.error('getUserDashboardData error:', err);
    return null;
  }
}

// Keep legacy export for backwards compatibility
export const fetchDashboardData = getUserDashboardData;

