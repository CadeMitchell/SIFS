const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

class ActorDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            base: new SchemaField({
                health: new SchemaField({
                    max: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                    value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                    temp: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
                })
            }),
            resources: new SchemaField([{
                name: new StringField({required: true, blank: true}),
                max: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                value: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
            },
            {
                name: new StringField({required: true, blank: true}),
                max: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                value: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
            },
            {
                name: new StringField({required: true, blank: true}),
                max: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                value: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
            }]),
            background: new SchemaField({
                bio: new HTMLField({ required: true, blank: true})
            })
        };
    }
}

class ItemDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {};
    }
}

export { ActorDataModel, ItemDataModel };