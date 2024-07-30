import { Blocks } from "@514labs/moose-lib";

export default {
    // Sequences of SQL you can apply to a database
   setup: [`
   CREATE VIEW userLanguages AS
    SELECT DISTINCT 
        username AS user, 
        arrayFirst(x->x IS NOT NULL, language_object.language) AS language, 
        arrayFirst(x->x IS NOT NULL, language_object.bytes) AS bytes 
    FROM 
        local.ProcessedStarEvent_0_0
    ARRAY JOIN 
    languages AS language_object
   `],
   // Delete and clean up the objects from the database
   teardown: [`DROP VIEW userLanguages`]
} as Blocks