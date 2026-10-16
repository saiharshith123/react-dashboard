export default function StatCard({ label, value, change, icon: Icon, tone = 'violet' }) {
  return <article className="stat-card"><div className="stat-top"><span>{label}</span><span className={`stat-icon ${tone}`}><Icon size={19}/></span></div><div className="stat-value">{value}</div><div className="stat-foot"><span className="positive">↗ {change}</span><span>vs. last month</span></div></article>;
}
