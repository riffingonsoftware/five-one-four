ATTACH VIEW _ UUID '638ccb90-fcaf-403d-8895-f2cf0a91f32e'
(
    `starred_at` DateTime('UTC'),
    `username` String,
    `languages` Array(Nested(language String, bytes Float64))
) AS
SELECT *
FROM local.ProcessedStarEvent_0_0
