import { ActorDataModel } from "./base.mjs";

class NPCDataModel extends ActorDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            // Additional NPC-specific fields can be defined here
        };
    }
}

export { NPCDataModel };