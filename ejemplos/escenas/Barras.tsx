// Componente propio: barras que crecen (recibe t = segundos desde que entra).
import React from 'react';

export default function Barras({t, valores = [3, 7, 12], tema}: {t: number; valores?: number[]; tema: any}) {
	const max = Math.max(...valores);
	return (
		<div style={{display: 'flex', alignItems: 'flex-end', gap: 40, height: 520}}>
			{valores.map((v, i) => {
				const k = Math.min(1, Math.max(0, (t - i * 0.25) / 0.6));
				return <div key={i} style={{width: 150, height: (v / max) * 500 * k, background: i === valores.length - 1 ? tema.colores.acento : tema.colores.suave, borderRadius: 16}} />;
			})}
		</div>
	);
}
