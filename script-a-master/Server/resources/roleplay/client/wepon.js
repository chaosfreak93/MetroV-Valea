import * as alt from 'alt-client';
import * as native from 'natives';
let player = alt.Player.local;
class WeaponHandler {
    static SetWeaponAmmo(hash, newAmmo) {
        native.setPedAmmo(player.scriptID, hash, newAmmo, false);
    }
    static GetWeaponAmmo(hash, name) {
        let ammo = native.getAmmoInPedWeapon(player.scriptID, hash);
        alt.emitServer("Server:Weapon:SendWeaponAmmo", name, ammo);
    }
}
export { WeaponHandler as default };
alt.onServer("Client:Weapon:SetWeaponAmmo", WeaponHandler.SetWeaponAmmo);
alt.onServer("Client:Weapon:GetWeaponAmmo", WeaponHandler.GetWeaponAmmo);
