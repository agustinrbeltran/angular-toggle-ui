import { Toggle } from "./toggle";

export class TogglesResponse {
    constructor(
        public applicationName: string,
        public applicationVersion: string,
        public cluster: string,
        public environment: string,
        public toggles: Toggle[]) { }
}