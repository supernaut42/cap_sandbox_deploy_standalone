class DummyService extends cds.ApplicationService {
    init() {
        const { DummyEntity } = cds.entities("cap.sandbox.deploy");

        this.on("READ", "DummyEntity", async (req) => {


            return [{ someNumber: 1, someText: "The first rule of Fight Club is: you do not talk about Fight Club" },
            { someNumber: 2, someText: "The second rule of Fight Club is: you DO NOT talk about Fight Club! " },
            { someNumber: 2, someText: "Third rule of Fight Club: someone yells 'stop!', goes limp, taps out, the fight is over." }]

        });

    }
}

module.exports = DummyService;
