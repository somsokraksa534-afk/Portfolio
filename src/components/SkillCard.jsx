export default function SkillCard({ name, logo, icon, color }) {
  return (
    <div className="flex size-[149px] flex-col items-center justify-center gap-3 rounded-[10px] bg-white p-4 text-center shadow-[0_0_4px_3px_rgba(0,0,0,0.15)] transition-transform hover:scale-105 dark:bg-[#272626] dark:shadow-[0_0_4px_3px_rgba(255,255,255,0.25)]">
      {logo ? (
        <img src={logo} alt={name} className="h-12 w-12 object-contain" />
      ) : (
        <i className={`bi ${icon} text-4xl`} style={{ color }} />
      )}
      <p className="text-sm font-bold leading-tight" style={{ color }}>
        {name}
      </p>
    </div>
  );
}
