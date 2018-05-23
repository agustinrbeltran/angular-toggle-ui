export class Utils {

    public static serializer() {
        const stack: any[] = [];
        const keys: string[] = [];

        const cycleReplacer = function (key: string, value: any) {
            if (stack[0] === value) {
                return "[Circular ~]";
            }
            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };

        return function (this: any, key: string, value: any) {
            if (stack.length > 0) {
                const thisPos = stack.indexOf(this);
                ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
                ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
                if (~stack.indexOf(value)) {
                    value = cycleReplacer.call(this, key, value);
                }
            } else {
                stack.push(value);
            }

            return value;
        };
    }

    public static objToStrMap(obj) {
        let strMap = new Map<string, Array<string>>();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    }

    public static strMapToObj(strMap) {
        let obj = Object.create(null);
        for (let [k, v] of strMap) {
            // We don’t escape the key '__proto__'
            // which can cause problems on older engines
            obj[k] = v;
        }
        return obj;
    }

    public static getKeys(map) {
        return Array.from(map.keys());
    }

    public static strMapToJson(strMap) {
        return JSON.stringify(Utils.strMapToObj(strMap));
    }

    public static jsonToStrMap(jsonStr) {
        return Utils.objToStrMap(JSON.parse(jsonStr));
    }
}