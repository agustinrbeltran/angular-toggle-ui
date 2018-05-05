import { Pipe, PipeTransform } from "@angular/core";
import { Utils } from "./utils";

@Pipe({
    name: "prettyjson",
    pure: false
})
export class PrettyJsonPipe implements PipeTransform {
    public transform(obj: any, spaces = 2): string {
        return this._syntaxHighlight(obj, Utils.serializer(), spaces);
    }

    private _syntaxHighlight(json: any, serializer: any, spacing: number): string {
        if (json === undefined) {
            return '<span class="undefined"></span>';
        }
        if (typeof json !== "string") {
            json = JSON.stringify(json, serializer, spacing);
        }
        json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match: any) => {
            let cls = "number";
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = "key";
                } else {
                    cls = "string";
                }
            } else if (/true|false/.test(match)) {
                cls = "boolean";
            } else if (/null/.test(match)) {
                cls = "null";
            }
            return match;
        });
    }
}