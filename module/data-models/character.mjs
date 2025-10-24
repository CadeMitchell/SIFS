import { ActorDataModel } from "./base.mjs";

class CharacterDataModel extends ActorDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            // Additional character-specific fields can be defined here
        };
    }
}

export { CharacterDataModel };