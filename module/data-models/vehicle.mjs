import { ActorDataModel } from "./base.mjs";

class VehicleDataModel extends ActorDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            // Additional vehicle-specific fields can be defined here
        };
    }
}

export { VehicleDataModel };