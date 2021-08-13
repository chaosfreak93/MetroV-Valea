import * as alt from 'alt-client';
import * as native from 'natives';
class Horse_Racing {
    static registerTarget(name, objectModel) {
        if (!native.isNamedRendertargetRegistered(name)) {
            native.registerNamedRendertarget(name, false);
            native.linkNamedRendertarget(alt.hash(objectModel));
        }
        return native.getNamedRendertargetRenderId(name);
    }
}
export { Horse_Racing as default };
