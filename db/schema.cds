using {
    Currency,
    managed,
    sap
} from '@sap/cds/common';

namespace cap.sandbox.deploy;

entity DummyEntity : managed {
    key ID        : UUID;
        someText: String;
        someNumber: Integer;
}