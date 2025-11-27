import { db, auth } from '@/lib/firebase';
import { doc, getDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export async function fetchDashboardData() {
  const user = auth.currentUser;
  if (!user) return null;

  // 1. Fetch Stats
  try {
    const statsSnap = await getDoc(doc(db, 'users', user.uid));
    const stats = statsSnap.exists()
      ? statsSnap.data()
      : { totalSitesAnalyzed: 0, averageEcoScore: 0, highScoreSites: 0 };

    // 2. Fetch History
    const historyQuery = query(
      collection(db, 'users', user.uid, 'history'),
      orderBy('timestamp', 'desc'),
      limit(20)
    );
    const historySnap = await getDocs(historyQuery);
    const history = historySnap.docs.map((d) => ({ id: d.id, ...d.data() }));

    return { stats, history };
  } catch (err) {
    console.error('fetchDashboardData error', err);
    return null;
  }
}
