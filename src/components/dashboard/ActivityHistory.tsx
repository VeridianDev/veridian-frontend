'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card } from '@/components/ui/card';
import {
  ChartBarIcon,
  GlobeAltIcon,
  ClockIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { getUserDashboardData } from '@/lib/dashboard';
import type { DashboardStats, AnalysisHistory } from '@/types/dashboard';

export default function ActivityHistory() {
  const { user } = useAuth();
  const [history, setHistory] = useState<AnalysisHistory[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalSitesAnalyzed: 0,
    averageEcoScore: 0,
    highScoreSites: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      if (!user) {
        setHistory([]);
        setStats({ totalSitesAnalyzed: 0, averageEcoScore: 0, highScoreSites: 0 });
        setLoading(false);
        return;
      }

      try {
        const res = await getUserDashboardData();
        if (!res) {
          setHistory([]);
          setStats({ totalSitesAnalyzed: 0, averageEcoScore: 0, highScoreSites: 0 });
        } else {
          setStats(res.stats);
          setHistory(res.history);
        }
      } catch (err) {
        console.error('Error loading dashboard data', err);
        setHistory([]);
        setStats({ totalSitesAnalyzed: 0, averageEcoScore: 0, highScoreSites: 0 });
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [user]);

  // Get score color (EcoVeridian theme: Green >80, Yellow 50-79, Red <50)
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Get score badge styling
  const getScoreBadgeColor = (score: number) => {
    if (score >= 80) return 'bg-green-500/10 text-green-500 border-green-500/20';
    if (score >= 50) return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
    return 'bg-red-500/10 text-red-500 border-red-500/20';
  };

  // Get grade badge styling
  const getGradeBadgeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-500/10 text-green-500 border-green-500/20';
    if (grade.startsWith('B')) return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
    return 'bg-red-500/10 text-red-500 border-red-500/20';
  };

  // Format timestamp
  const formatDate = (ts: any): string => {
    if (!ts) return 'N/A';
    const date = typeof ts.toDate === 'function' ? ts.toDate() : new Date(ts);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Skeleton loader for stats cards
  const StatSkeleton = () => (
    <Card className="p-6 shadow-sm animate-pulse">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-muted rounded-lg w-12 h-12" />
        <div className="flex-1">
          <div className="h-4 bg-muted rounded w-24 mb-2" />
          <div className="h-8 bg-muted rounded w-16" />
        </div>
      </div>
    </Card>
  );

  // Skeleton loader for table rows
  const TableSkeleton = () => (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-4 py-4 px-4 animate-pulse">
          <div className="flex-1">
            <div className="h-4 bg-muted rounded w-32 mb-2" />
            <div className="h-3 bg-muted rounded w-48" />
          </div>
          <div className="h-6 bg-muted rounded w-12" />
          <div className="h-6 bg-muted rounded w-10" />
          <div className="h-4 bg-muted rounded w-24" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (
          <>
            <StatSkeleton />
            <StatSkeleton />
            <StatSkeleton />
          </>
        ) : (
          <>
            {/* Total Sites Analyzed */}
            <Card className="p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GlobeAltIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Total Sites Analyzed
                  </p>
                  <p className="text-3xl font-bold">{stats.totalSitesAnalyzed}</p>
                </div>
              </div>
            </Card>

            {/* Average Eco Score */}
            <Card className="p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <ChartBarIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Average Eco Score
                  </p>
                  <p className={`text-3xl font-bold ${getScoreColor(stats.averageEcoScore)}`}>
                    {Math.round(stats.averageEcoScore)}
                  </p>
                </div>
              </div>
            </Card>

            {/* High Score Sites */}
            <Card className="p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <SparklesIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    High Score Sites
                  </p>
                  <p className="text-3xl font-bold text-green-500">{stats.highScoreSites}</p>
                </div>
              </div>
            </Card>
          </>
        )}
      </div>

      {/* History Table */}
      <Card className="p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Analysis History</h2>

        {loading ? (
          <TableSkeleton />
        ) : history.length === 0 ? (
          <div className="text-center py-12">
            <GlobeAltIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground mb-2">No analysis history yet</p>
            <p className="text-sm text-muted-foreground">
              Install the browser extension and start analyzing websites to see your
              history here
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Company
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-sm text-muted-foreground">
                    Score
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-sm text-muted-foreground">
                    Grade
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {history.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-border hover:bg-secondary/50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium">{item.companyName}</p>
                        <p className="text-sm text-muted-foreground truncate max-w-xs">
                          {item.domain}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 text-sm font-bold border rounded-full ${getScoreBadgeColor(item.score)}`}
                      >
                        {item.score}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 text-sm font-bold border rounded-full ${getGradeBadgeColor(item.grade)}`}
                      >
                        {item.grade}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ClockIcon className="w-4 h-4" />
                        {formatDate(item.timestamp)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Info Note */}
      <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Note:</strong> Your analysis history is
          automatically populated by the EcoVeridian browser extension. Install the
          extension to start tracking your sustainability journey.
        </p>
      </div>
    </div>
  );
}
