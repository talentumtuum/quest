CREATE TABLE apartment (
    "apartmentId" BIGINT GENERATED ALWAYS AS IDENTITY,
    "price" INT NOT NULL
);

ALTER TABLE "apartment" ADD CONSTRAINT "pkApartment" PRIMARY KEY ("apartmentId");

CREATE TABLE record (
    "recordId" BIGINT GENERATED ALWAYS AS IDENTITY,
    "apartmentId" BIGINT NOT NULL,
    "periodFrom" TIMESTAMP WITH TIME ZONE NOT NULL,
    "periodTo" TIMESTAMP WITH TIME ZONE NOT NULL,
    "price" INT NOT NULL,
    "apartmentPrice" INT NOT NULL
);

ALTER TABLE "record" ADD CONSTRAINT "pkRecord" PRIMARY KEY ("recordId");
ALTER TABLE "record" ADD CONSTRAINT "fkRecordApartment" FOREIGN KEY ("apartmentId") REFERENCES "apartment" ("apartmentId");

CREATE TABLE report (
    "reportId" BIGINT GENERATED ALWAYS AS IDENTITY,
    "monthVisitMap" JSONB NOT NULL,
    "periodFrom" TIMESTAMP WITH TIME ZONE NOT NULL,
    "periodTo" TIMESTAMP WITH TIME ZONE NOT NULL
);

ALTER TABLE "report" ADD CONSTRAINT "pkReport" PRIMARY KEY ("reportId");
