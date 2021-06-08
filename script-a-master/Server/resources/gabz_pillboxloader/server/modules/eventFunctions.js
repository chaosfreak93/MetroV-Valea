import * as alt from 'alt-server';

export function playerFirstJoin(player) {
	alt.emitClient(player, 'LOADING_PILLBOX');
}
