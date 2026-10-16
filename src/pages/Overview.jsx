import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Users,
  UserCheck,
  MousePointerClick,
  DollarSign,
  MoreHorizontal,
  RefreshCw,
} from 'lucide-react';
import StatCard from '../components/StatCard';

const fallbackActivity = [
  { id: 1, name: 'Leanne Graham', action: 'created a new account', time: '2 minutes ago', initials: 'LG', color: 'lavender' },
  { id: 2, name: 'Ervin Howell', action: 'updated their profile', time: '18 minutes ago', initials: 'EH', color: 'peach' },
  { id: 3, name: 'Clementine Bauch', action: 'joined the workspace', time: '1 hour ago', initials: 'CB', color: 'mint' },
  { id: 4, name: 'Patricia Lebsack', action: 'completed onboarding', time: '3 hours ago', initials: 'PL', color: 'blue' },
];

const chartData = [
  { day: 'Mon', active: 48, fresh: 28 },
  { day: 'Tue', active: 67, fresh: 38 },
  { day: 'Wed', active: 54, fresh: 31 },
  { day: 'Thu', active: 82, fresh: 45 },
  { day: 'Fri', active: 62, fresh: 34 },
  { day: 'Sat', active: 42, fresh: 23 },
  { day: 'Sun', active: 72, fresh: 39 },
];

export default function Overview() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadUsers() {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('The server returned an error.');
      }
      const data = await response.json();
      setUsers(data);
    } catch {
      setError('Could not load live demo data. Showing sample activity instead.');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const activity = users.length > 0
    ? users.slice(0, 4).map((user, index) => ({
        id: user.id,
        name: user.name,
        action: [
          'created a new account',
          'updated their profile',
          'joined the workspace',
          'completed onboarding',
        ][index],
        time: ['2 minutes ago', '18 minutes ago', '1 hour ago', '3 hours ago'][index],
        initials: user.name.split(' ').map((part) => part[0]).slice(0, 2).join(''),
        color: ['lavender', 'peach', 'mint', 'blue'][index],
      }))
    : fallbackActivity;

  return (
    <>
      <div className="welcome-row">
        <div>
          <div className="section-kicker">MONDAY, YOUR WAY</div>
          <h2>Good to see you <span className="wave">✦</span></h2>
          <p>Here's what's happening across your workspace today.</p>
        </div>
        <button className="secondary-button" onClick={loadUsers} disabled={loading}>
          <RefreshCw size={15} className={loading ? 'spin' : ''} />
          Refresh data
        </button>
      </div>

      <div className="stats-grid">
        <StatCard label="Total users" value={users.length || '2,840'} change="12.8%" icon={Users} tone="violet" />
        <StatCard label="Active users" value="1,892" change="8.2%" icon={UserCheck} tone="green" />
        <StatCard label="Engagement" value="68.4%" change="4.6%" icon={MousePointerClick} tone="orange" />
        <StatCard label="Revenue" value="$24,680" change="10.1%" icon={DollarSign} tone="blue" />
      </div>

      <div className="content-grid">
        <section className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <h3>Workspace activity</h3>
              <p>Activity overview for the last 7 days</p>
            </div>
            <button className="select-like">This week <span>⌄</span></button>
          </div>

          <div className="chart-legend">
            <span><i className="legend-dot purple-dot" /> Active users</span>
            <span><i className="legend-dot pale-dot" /> New users</span>
          </div>

          <div className="chart-wrap">
            <div className="y-labels">
              <span>800</span><span>600</span><span>400</span><span>200</span><span>0</span>
            </div>
            <div className="chart">
              <div className="grid-lines"><i /><i /><i /><i /><i /></div>
              <div className="bars">
                {chartData.map((item) => (
                  <div className="bar-group" key={item.day}>
                    <div className="bar-pair">
                      <div className="bar new-bar" style={{ height: `${item.fresh}%` }} />
                      <div className="bar active-bar" style={{ height: `${item.active}%` }} />
                    </div>
                    <span>{item.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="chart-summary">
            <div><span className="summary-number">12,486</span><span className="summary-label">Total visits</span></div>
            <div><span className="summary-number">+18.6%</span><span className="summary-label">Compared to last week</span></div>
            <div className="summary-link">View analytics <ArrowUpRight size={15} /></div>
          </div>
        </section>

        <section className="panel activity-panel">
          <div className="panel-heading">
            <div>
              <h3>Recent activity</h3>
              <p>Latest workspace updates</p>
            </div>
            <button className="icon-button" aria-label="More activity options">
              <MoreHorizontal size={20} />
            </button>
          </div>

          {error && <div className="inline-notice">{error}</div>}

          <div className="activity-list">
            {activity.map((item) => (
              <div className="activity-item" key={item.id}>
                <div className={`activity-avatar ${item.color}`}>{item.initials}</div>
                <div className="activity-copy">
                  <strong>{item.name}</strong>
                  <span>{item.action}</span>
                  <small>{item.time}</small>
                </div>
                <span className="activity-status" />
              </div>
            ))}
          </div>

          <button className="text-button" onClick={loadUsers}>
            {loading ? 'Loading updates…' : 'Refresh activity'} <ArrowUpRight size={15} />
          </button>
        </section>
      </div>

      <div className="bottom-note">
        <div className="note-icon"><Users size={18} /></div>
        <div>
          <strong>Your workspace is growing</strong>
          <p>Keep an eye on new members and engagement to understand how your team is using Pulse.</p>
        </div>
        <button className="note-action" onClick={() => { window.location.href = '/users'; }}>
          Explore users <ArrowUpRight size={15} />
        </button>
      </div>
    </>
  );
}