import * as alt from 'alt-client';
import * as native from 'natives';

let player: alt.Player = alt.Player.local;

export default class WeaponHandler {
    static SetWeaponAmmo(hash: number, newAmmo: number): void {
        native.setPedAmmo(player.scriptID, hash, newAmmo, false);
    }

    static GetWeaponAmmo(hash: number, name: string): void {
        let ammo = native.getAmmoInPedWeapon(player.scriptID, hash);

        alt.emitServer("Server:Weapon:SendWeaponAmmo", name, ammo);
    }
}

alt.onServer("Client:Weapon:SetWeaponAmmo", WeaponHandler.SetWeaponAmmo);
alt.onServer("Client:Weapon:GetWeaponAmmo", WeaponHandler.GetWeaponAmmo);